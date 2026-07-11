"use client";

import {
  createProductionBatch,
  getRecipe,
  listProductionBatches,
  listRecipes,
  registerProductionConsumption,
  registerProductionOutput,
  updateProductCost,
  type GetRecipeData,
  type ListProductionBatchesData,
  type ListRecipesData,
} from "@dataconnect/generated";
import { useEffect, useState } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { RoleGuard } from "@/components/auth/RoleGuard";
import { freshQuery, getAppDataConnect } from "@/lib/dataconnect/client";

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function Produccion() {
  const [recipes, setRecipes] = useState<ListRecipesData["recipes"]>([]);
  const [batches, setBatches] = useState<ListProductionBatchesData["productionBatches"]>([]);
  const [loading, setLoading] = useState(true);

  const [recipeId, setRecipeId] = useState("");
  const [recipeDetail, setRecipeDetail] = useState<GetRecipeData["recipe"] | null>(null);
  const [date, setDate] = useState(todayIso());
  const [plannedQuantity, setPlannedQuantity] = useState("");
  const [actualQuantity, setActualQuantity] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function refresh() {
    const dc = getAppDataConnect();
    const [recipesResult, batchesResult] = await Promise.all([
      listRecipes(dc, freshQuery),
      listProductionBatches(dc, freshQuery),
    ]);
    setRecipes(recipesResult.data.recipes);
    setBatches(batchesResult.data.productionBatches);
    setLoading(false);
  }

  useEffect(() => {
    refresh();
  }, []);

  async function selectRecipe(id: string) {
    setRecipeId(id);
    setRecipeDetail(null);
    if (!id) return;
    const { data } = await getRecipe(getAppDataConnect(), { id }, freshQuery);
    setRecipeDetail(data.recipe ?? null);
  }

  const scale =
    recipeDetail && plannedQuantity ? Number(plannedQuantity) / recipeDetail.expectedYield : 0;

  const requiredItems =
    recipeDetail && scale > 0
      ? recipeDetail.items.map((item) => ({
          ...item,
          scaledQuantity: item.quantity * scale,
          cost: item.quantity * scale * (item.ingredient.referenceCost ?? 0),
        }))
      : [];

  const batchCost = requiredItems.reduce((sum, item) => sum + item.cost, 0);
  const finalQuantity = actualQuantity ? Number(actualQuantity) : Number(plannedQuantity || 0);
  const unitCost = finalQuantity > 0 ? batchCost / finalQuantity : 0;

  async function registerBatch() {
    if (!recipeDetail || requiredItems.length === 0 || finalQuantity <= 0) return;
    setSubmitting(true);
    setError(null);

    try {
      const dc = getAppDataConnect();
      const { data } = await createProductionBatch(dc, {
        recipeId: recipeDetail.id,
        productId: recipeDetail.product.id,
        date,
        plannedQuantity: Number(plannedQuantity),
        actualQuantity: finalQuantity,
        batchCost,
        unitCost,
      });
      const batchId = data.productionBatch_insert.id;

      for (const item of requiredItems) {
        await registerProductionConsumption(dc, {
          ingredientId: item.ingredient.id,
          quantity: item.scaledQuantity,
          unitCost: item.ingredient.referenceCost ?? null,
          sourceId: batchId,
        });
      }

      await registerProductionOutput(dc, {
        productId: recipeDetail.product.id,
        quantity: finalQuantity,
        unitCost,
        sourceId: batchId,
      });

      await updateProductCost(dc, { productId: recipeDetail.product.id, currentCost: unitCost });

      setRecipeId("");
      setRecipeDetail(null);
      setPlannedQuantity("");
      setActualQuantity("");
      await refresh();
    } catch {
      setError("No se pudo registrar la produccion.");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return <p className="text-sm text-[#5f5a50]">Cargando...</p>;
  }

  return (
    <div className="space-y-4">
      <article className="rounded border border-[#d8d1c4] bg-white p-4">
        <h2 className="text-base font-semibold">Registrar produccion</h2>

        {recipes.length === 0 ? (
          <p className="mt-2 text-sm text-[#5f5a50]">
            No hay recetas registradas todavia. Crea una en el modulo Recetas primero.
          </p>
        ) : (
          <>
            <div className="mt-3 flex flex-wrap items-end gap-2">
              <label className="text-sm text-[#5f5a50]">
                Receta
                <select
                  value={recipeId}
                  onChange={(event) => selectRecipe(event.target.value)}
                  className="mt-1 block w-48 rounded border border-[#d8d1c4] px-2 py-1 text-sm"
                >
                  <option value="">Elegir</option>
                  {recipes.map((recipe) => (
                    <option key={recipe.id} value={recipe.id}>
                      {recipe.name} ({recipe.product.name})
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-sm text-[#5f5a50]">
                Fecha
                <input
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  className="mt-1 block rounded border border-[#d8d1c4] px-2 py-1 text-sm"
                />
              </label>
              <label className="text-sm text-[#5f5a50]">
                Cantidad planeada ({recipeDetail?.yieldUnit ?? "unidades"})
                <input
                  type="number"
                  step="0.01"
                  min="0.01"
                  value={plannedQuantity}
                  onChange={(event) => setPlannedQuantity(event.target.value)}
                  disabled={!recipeDetail}
                  className="mt-1 block w-32 rounded border border-[#d8d1c4] px-2 py-1 text-sm"
                />
              </label>
              <label className="text-sm text-[#5f5a50]">
                Cantidad real (opcional)
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={actualQuantity}
                  onChange={(event) => setActualQuantity(event.target.value)}
                  disabled={!recipeDetail}
                  className="mt-1 block w-32 rounded border border-[#d8d1c4] px-2 py-1 text-sm"
                />
              </label>
            </div>

            {requiredItems.length > 0 ? (
              <div className="mt-4 border-t border-[#f0ece3] pt-3">
                <p className="text-sm font-medium">Insumos requeridos (descuento automatico):</p>
                <ul className="mt-1 space-y-1 text-sm text-[#5f5a50]">
                  {requiredItems.map((item) => (
                    <li key={item.id}>
                      {item.ingredient.name} — {item.scaledQuantity.toFixed(3)} {item.unitOfMeasure.abbreviation} — S/{" "}
                      {item.cost.toFixed(2)}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-sm font-medium">
                  Costo del lote: S/ {batchCost.toFixed(2)} — costo por unidad: S/ {unitCost.toFixed(2)}
                </p>
              </div>
            ) : null}

            {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}

            <button
              onClick={registerBatch}
              disabled={submitting || requiredItems.length === 0 || finalQuantity <= 0}
              className="mt-3 rounded bg-[#7b3f2a] px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
            >
              {submitting ? "Registrando..." : "Registrar produccion"}
            </button>
          </>
        )}
      </article>

      <article className="rounded border border-[#d8d1c4] bg-white p-4">
        <h2 className="text-base font-semibold">Lotes registrados</h2>
        {batches.length === 0 ? (
          <p className="mt-2 text-sm text-[#5f5a50]">Sin lotes registrados.</p>
        ) : (
          <ul className="mt-2 space-y-1 text-sm text-[#5f5a50]">
            {batches.map((batch) => (
              <li key={batch.id}>
                {batch.date} — {batch.product.name} ({batch.recipe.name}) — {batch.actualQuantity ?? batch.plannedQuantity}{" "}
                unidades — costo S/ {(batch.batchCost ?? 0).toFixed(2)} (S/ {(batch.unitCost ?? 0).toFixed(2)}/u)
              </li>
            ))}
          </ul>
        )}
      </article>
    </div>
  );
}

export default function ProduccionPage() {
  return (
    <RoleGuard allowedRoles={["administrador", "produccion"]}>
      <PageShell title="Produccion">
        <Produccion />
      </PageShell>
    </RoleGuard>
  );
}
