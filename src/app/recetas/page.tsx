"use client";

import {
  addRecipeItem,
  createRecipe,
  getRecipe,
  listIngredients,
  listProducts,
  listRecipes,
  type GetRecipeData,
  type ListIngredientsData,
  type ListProductsData,
  type ListRecipesData,
} from "@dataconnect/generated";
import { type FormEvent, useEffect, useState } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { RoleGuard } from "@/components/auth/RoleGuard";
import { freshQuery, getAppDataConnect } from "@/lib/dataconnect/client";

function RecipeRow({ recipe }: { recipe: ListRecipesData["recipes"][number] }) {
  const [expanded, setExpanded] = useState(false);
  const [detail, setDetail] = useState<GetRecipeData["recipe"] | null>(null);
  const [loading, setLoading] = useState(false);

  async function toggle() {
    if (!expanded && !detail) {
      setLoading(true);
      const { data } = await getRecipe(getAppDataConnect(), { id: recipe.id }, freshQuery);
      setDetail(data.recipe ?? null);
      setLoading(false);
    }
    setExpanded((current) => !current);
  }

  const batchCost = detail?.items.reduce((sum, item) => sum + item.quantity * (item.ingredient.referenceCost ?? 0), 0);

  return (
    <li className="border-b border-[#f0ece3] py-2 last:border-0">
      <button onClick={toggle} className="flex w-full items-center justify-between text-left text-sm">
        <span>
          {recipe.name} — {recipe.product.name} — rinde {recipe.expectedYield} {recipe.yieldUnit ?? ""}
        </span>
        <span className="text-[#7b3f2a]">{expanded ? "Ocultar" : "Ver items"}</span>
      </button>
      {expanded ? (
        <div className="mt-2 pl-3 text-sm text-[#5f5a50]">
          {loading ? (
            <p>Cargando...</p>
          ) : detail && detail.items.length > 0 ? (
            <>
              <ul className="space-y-1">
                {detail.items.map((item) => (
                  <li key={item.id}>
                    {item.ingredient.name} — {item.quantity} {item.unitOfMeasure.abbreviation}
                    {item.ingredient.referenceCost != null
                      ? ` — S/ ${(item.quantity * item.ingredient.referenceCost).toFixed(2)}`
                      : ""}
                  </li>
                ))}
              </ul>
              {batchCost != null ? (
                <p className="mt-2 font-medium">
                  Costo estimado por lote: S/ {batchCost.toFixed(2)} — por unidad: S/{" "}
                  {(batchCost / recipe.expectedYield).toFixed(2)}
                </p>
              ) : null}
            </>
          ) : (
            <p>Sin items.</p>
          )}
        </div>
      ) : null}
    </li>
  );
}

function Recetas() {
  const [products, setProducts] = useState<ListProductsData["products"]>([]);
  const [ingredients, setIngredients] = useState<ListIngredientsData["ingredients"]>([]);
  const [recipes, setRecipes] = useState<ListRecipesData["recipes"]>([]);
  const [loading, setLoading] = useState(true);

  const [productId, setProductId] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [expectedYield, setExpectedYield] = useState("");
  const [yieldUnit, setYieldUnit] = useState("unidad");
  const [creatingRecipe, setCreatingRecipe] = useState(false);

  const [activeRecipeId, setActiveRecipeId] = useState<string | null>(null);
  const [itemIngredientId, setItemIngredientId] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [addingItem, setAddingItem] = useState(false);

  async function refresh() {
    const dc = getAppDataConnect();
    const [productsResult, ingredientsResult, recipesResult] = await Promise.all([
      listProducts(dc, freshQuery),
      listIngredients(dc, freshQuery),
      listRecipes(dc, freshQuery),
    ]);
    setProducts(productsResult.data.products);
    setIngredients(ingredientsResult.data.ingredients);
    setRecipes(recipesResult.data.recipes);
    setLoading(false);
  }

  useEffect(() => {
    refresh();
  }, []);

  async function handleCreateRecipe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCreatingRecipe(true);

    try {
      const { data } = await createRecipe(getAppDataConnect(), {
        productId,
        name: recipeName,
        expectedYield: Number(expectedYield),
        yieldUnit,
      });
      setActiveRecipeId(data.recipe_insert.id);
      setRecipeName("");
      setExpectedYield("");
      await refresh();
    } finally {
      setCreatingRecipe(false);
    }
  }

  async function handleAddItem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!activeRecipeId) return;
    const ingredient = ingredients.find((i) => i.id === itemIngredientId);
    if (!ingredient) return;
    setAddingItem(true);

    try {
      await addRecipeItem(getAppDataConnect(), {
        recipeId: activeRecipeId,
        ingredientId: ingredient.id,
        quantity: Number(itemQuantity),
        unitOfMeasureId: ingredient.unitOfMeasure.id,
      });
      setItemIngredientId("");
      setItemQuantity("");
    } finally {
      setAddingItem(false);
    }
  }

  if (loading) {
    return <p className="text-sm text-[#5f5a50]">Cargando...</p>;
  }

  return (
    <div className="space-y-4">
      <article className="rounded border border-[#d8d1c4] bg-white p-4">
        <h2 className="text-base font-semibold">Nueva receta</h2>

        <form onSubmit={handleCreateRecipe} className="mt-3 flex flex-wrap items-end gap-2">
          <label className="text-sm text-[#5f5a50]">
            Producto
            <select
              required
              value={productId}
              onChange={(event) => setProductId(event.target.value)}
              className="mt-1 block w-40 rounded border border-[#d8d1c4] px-2 py-1 text-sm"
            >
              <option value="" disabled>
                Elegir
              </option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm text-[#5f5a50]">
            Nombre de la receta
            <input
              required
              value={recipeName}
              onChange={(event) => setRecipeName(event.target.value)}
              className="mt-1 block w-40 rounded border border-[#d8d1c4] px-2 py-1 text-sm"
            />
          </label>
          <label className="text-sm text-[#5f5a50]">
            Rendimiento esperado
            <input
              required
              type="number"
              step="0.01"
              min="0.01"
              value={expectedYield}
              onChange={(event) => setExpectedYield(event.target.value)}
              className="mt-1 block w-28 rounded border border-[#d8d1c4] px-2 py-1 text-sm"
            />
          </label>
          <label className="text-sm text-[#5f5a50]">
            Unidad
            <input
              value={yieldUnit}
              onChange={(event) => setYieldUnit(event.target.value)}
              className="mt-1 block w-20 rounded border border-[#d8d1c4] px-2 py-1 text-sm"
            />
          </label>
          <button
            type="submit"
            disabled={creatingRecipe || products.length === 0}
            className="rounded bg-[#7b3f2a] px-3 py-1.5 text-sm font-medium text-white disabled:opacity-60"
          >
            Crear receta
          </button>
        </form>

        {activeRecipeId ? (
          <form onSubmit={handleAddItem} className="mt-4 flex flex-wrap items-end gap-2 border-t border-[#f0ece3] pt-3">
            <p className="w-full text-sm text-[#5f5a50]">
              Agregando insumos a la receta recien creada. Puedes seguir agregando o ir a la lista de abajo.
            </p>
            <label className="text-sm text-[#5f5a50]">
              Insumo
              <select
                required
                value={itemIngredientId}
                onChange={(event) => setItemIngredientId(event.target.value)}
                className="mt-1 block w-40 rounded border border-[#d8d1c4] px-2 py-1 text-sm"
              >
                <option value="" disabled>
                  Elegir
                </option>
                {ingredients.map((ingredient) => (
                  <option key={ingredient.id} value={ingredient.id}>
                    {ingredient.name} ({ingredient.unitOfMeasure.abbreviation})
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm text-[#5f5a50]">
              Cantidad
              <input
                required
                type="number"
                step="0.001"
                min="0.001"
                value={itemQuantity}
                onChange={(event) => setItemQuantity(event.target.value)}
                className="mt-1 block w-24 rounded border border-[#d8d1c4] px-2 py-1 text-sm"
              />
            </label>
            <button
              type="submit"
              disabled={addingItem || ingredients.length === 0}
              className="rounded border border-[#7b3f2a] px-3 py-1.5 text-sm font-medium text-[#7b3f2a] disabled:opacity-60"
            >
              Agregar insumo
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveRecipeId(null);
                refresh();
              }}
              className="text-sm text-[#5f5a50] underline"
            >
              Terminar
            </button>
          </form>
        ) : null}
      </article>

      <article className="rounded border border-[#d8d1c4] bg-white p-4">
        <h2 className="text-base font-semibold">Recetas</h2>
        {recipes.length === 0 ? (
          <p className="mt-2 text-sm text-[#5f5a50]">Sin recetas registradas.</p>
        ) : (
          <ul className="mt-2">
            {recipes.map((recipe) => (
              <RecipeRow key={recipe.id} recipe={recipe} />
            ))}
          </ul>
        )}
      </article>
    </div>
  );
}

export default function RecetasPage() {
  return (
    <RoleGuard allowedRoles={["administrador", "produccion"]}>
      <PageShell title="Recetas">
        <Recetas />
      </PageShell>
    </RoleGuard>
  );
}
