"use client";

import {
  adjustInventory,
  listIngredients,
  listInventoryMovements,
  listProducts,
  type ListIngredientsData,
  type ListInventoryMovementsData,
  type ListProductsData,
} from "@dataconnect/generated";
import { type FormEvent, useEffect, useState } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { RoleGuard } from "@/components/auth/RoleGuard";
import { freshQuery, getAppDataConnect } from "@/lib/dataconnect/client";

function Inventario() {
  const [movements, setMovements] = useState<ListInventoryMovementsData["inventoryMovements"]>([]);
  const [ingredients, setIngredients] = useState<ListIngredientsData["ingredients"]>([]);
  const [products, setProducts] = useState<ListProductsData["products"]>([]);
  const [loading, setLoading] = useState(true);

  const [itemType, setItemType] = useState<"ingredient" | "product">("ingredient");
  const [itemId, setItemId] = useState("");
  const [movementType, setMovementType] = useState("ajuste");
  const [quantity, setQuantity] = useState("");
  const [reason, setReason] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function refresh() {
    const dc = getAppDataConnect();
    const [movementsResult, ingredientsResult, productsResult] = await Promise.all([
      listInventoryMovements(dc, { limit: 50 }, freshQuery),
      listIngredients(dc, freshQuery),
      listProducts(dc, freshQuery),
    ]);
    setMovements(movementsResult.data.inventoryMovements);
    setIngredients(ingredientsResult.data.ingredients);
    setProducts(productsResult.data.products);
    setLoading(false);
  }

  useEffect(() => {
    refresh();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!itemId || !reason.trim()) return;
    setSubmitting(true);
    setError(null);

    try {
      await adjustInventory(getAppDataConnect(), {
        itemType,
        ingredientId: itemType === "ingredient" ? itemId : null,
        productId: itemType === "product" ? itemId : null,
        movementType,
        quantity: Number(quantity),
        reason,
      });
      setItemId("");
      setQuantity("");
      setReason("");
      await refresh();
    } catch {
      setError("No se pudo registrar el movimiento.");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return <p className="text-sm text-[#5f5a50]">Cargando...</p>;
  }

  const options = itemType === "ingredient" ? ingredients : products;

  return (
    <div className="space-y-4">
      <article className="rounded border border-[#d8d1c4] bg-white p-4">
        <h2 className="text-base font-semibold">Ajuste manual de inventario</h2>
        <p className="mt-1 text-sm text-[#5f5a50]">El motivo es obligatorio para todo ajuste.</p>

        <form onSubmit={handleSubmit} className="mt-3 flex flex-wrap items-end gap-2">
          <label className="text-sm text-[#5f5a50]">
            Tipo
            <select
              value={itemType}
              onChange={(event) => {
                setItemType(event.target.value as "ingredient" | "product");
                setItemId("");
              }}
              className="mt-1 block rounded border border-[#d8d1c4] px-2 py-1 text-sm"
            >
              <option value="ingredient">Insumo</option>
              <option value="product">Producto</option>
            </select>
          </label>
          <label className="text-sm text-[#5f5a50]">
            {itemType === "ingredient" ? "Insumo" : "Producto"}
            <select
              required
              value={itemId}
              onChange={(event) => setItemId(event.target.value)}
              className="mt-1 block w-40 rounded border border-[#d8d1c4] px-2 py-1 text-sm"
            >
              <option value="" disabled>
                Elegir
              </option>
              {options.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm text-[#5f5a50]">
            Movimiento
            <select
              value={movementType}
              onChange={(event) => setMovementType(event.target.value)}
              className="mt-1 block rounded border border-[#d8d1c4] px-2 py-1 text-sm"
            >
              <option value="ajuste">Ajuste</option>
              <option value="entrada">Entrada</option>
              <option value="salida">Salida</option>
              <option value="merma">Merma</option>
            </select>
          </label>
          <label className="text-sm text-[#5f5a50]">
            Cantidad
            <input
              required
              type="number"
              step="0.01"
              min="0.01"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
              className="mt-1 block w-24 rounded border border-[#d8d1c4] px-2 py-1 text-sm"
            />
          </label>
          <label className="min-w-[200px] flex-1 text-sm text-[#5f5a50]">
            Motivo
            <input
              required
              value={reason}
              onChange={(event) => setReason(event.target.value)}
              className="mt-1 block w-full rounded border border-[#d8d1c4] px-2 py-1 text-sm"
            />
          </label>
          <button
            type="submit"
            disabled={submitting || options.length === 0}
            className="rounded bg-[#7b3f2a] px-3 py-1.5 text-sm font-medium text-white disabled:opacity-60"
          >
            Registrar
          </button>
        </form>
        {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
      </article>

      <article className="rounded border border-[#d8d1c4] bg-white p-4">
        <h2 className="text-base font-semibold">Movimientos recientes</h2>
        {movements.length === 0 ? (
          <p className="mt-2 text-sm text-[#5f5a50]">Sin movimientos registrados.</p>
        ) : (
          <ul className="mt-2 space-y-1 text-sm text-[#5f5a50]">
            {movements.map((movement) => (
              <li key={movement.id}>
                {movement.createdAt.slice(0, 10)} — {movement.ingredient?.name ?? movement.product?.name} —{" "}
                {movement.movementType} {movement.quantity}
                {movement.ingredient ? ` ${movement.ingredient.unitOfMeasure.abbreviation}` : ""}
                {movement.reason ? ` — ${movement.reason}` : ""}
              </li>
            ))}
          </ul>
        )}
      </article>
    </div>
  );
}

export default function InventarioPage() {
  return (
    <RoleGuard allowedRoles={["administrador", "produccion"]}>
      <PageShell title="Inventario">
        <Inventario />
      </PageShell>
    </RoleGuard>
  );
}
