"use client";

import {
  addPurchaseItem,
  createPurchase,
  getPurchase,
  listIngredients,
  listPurchases,
  listSuppliers,
  type GetPurchaseData,
  type ListIngredientsData,
  type ListPurchasesData,
  type ListSuppliersData,
} from "@dataconnect/generated";
import { type FormEvent, useEffect, useState } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { RoleGuard } from "@/components/auth/RoleGuard";
import { freshQuery, getAppDataConnect } from "@/lib/dataconnect/client";

interface DraftItem {
  ingredientId: string;
  ingredientName: string;
  unitAbbr: string;
  quantity: number;
  unitCost: number;
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function PurchaseRow({ purchase }: { purchase: ListPurchasesData["purchases"][number] }) {
  const [expanded, setExpanded] = useState(false);
  const [detail, setDetail] = useState<GetPurchaseData["purchase"] | null>(null);
  const [loading, setLoading] = useState(false);

  async function toggle() {
    if (!expanded && !detail) {
      setLoading(true);
      const { data } = await getPurchase(getAppDataConnect(), { id: purchase.id }, freshQuery);
      setDetail(data.purchase ?? null);
      setLoading(false);
    }
    setExpanded((current) => !current);
  }

  return (
    <li className="border-b border-[#f0ece3] py-2 last:border-0">
      <button onClick={toggle} className="flex w-full items-center justify-between text-left text-sm">
        <span>
          {purchase.date} — {purchase.supplier?.name ?? "Sin proveedor"} — S/ {purchase.total.toFixed(2)} (
          {purchase.status})
        </span>
        <span className="text-[#7b3f2a]">{expanded ? "Ocultar" : "Ver items"}</span>
      </button>
      {expanded ? (
        <div className="mt-2 pl-3 text-sm text-[#5f5a50]">
          {loading ? (
            <p>Cargando...</p>
          ) : detail && detail.items.length > 0 ? (
            <ul className="space-y-1">
              {detail.items.map((item) => (
                <li key={item.id}>
                  {item.ingredient.name} — {item.quantity} {item.ingredient.unitOfMeasure.abbreviation} × S/{" "}
                  {item.unitCost.toFixed(2)} = S/ {item.totalCost.toFixed(2)}
                </li>
              ))}
            </ul>
          ) : (
            <p>Sin items.</p>
          )}
        </div>
      ) : null}
    </li>
  );
}

function Compras() {
  const [ingredients, setIngredients] = useState<ListIngredientsData["ingredients"]>([]);
  const [suppliers, setSuppliers] = useState<ListSuppliersData["suppliers"]>([]);
  const [purchases, setPurchases] = useState<ListPurchasesData["purchases"]>([]);
  const [loading, setLoading] = useState(true);

  const [supplierId, setSupplierId] = useState("");
  const [date, setDate] = useState(todayIso());
  const [paymentMethod, setPaymentMethod] = useState("efectivo");

  const [draft, setDraft] = useState<DraftItem[]>([]);
  const [itemIngredientId, setItemIngredientId] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemUnitCost, setItemUnitCost] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function refresh() {
    const dc = getAppDataConnect();
    const [ingredientsResult, suppliersResult, purchasesResult] = await Promise.all([
      listIngredients(dc, freshQuery),
      listSuppliers(dc, freshQuery),
      listPurchases(dc, freshQuery),
    ]);
    setIngredients(ingredientsResult.data.ingredients);
    setSuppliers(suppliersResult.data.suppliers);
    setPurchases(purchasesResult.data.purchases);
    setLoading(false);
  }

  useEffect(() => {
    refresh();
  }, []);

  function addDraftItem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const ingredient = ingredients.find((i) => i.id === itemIngredientId);
    if (!ingredient) return;

    setDraft((current) => [
      ...current,
      {
        ingredientId: ingredient.id,
        ingredientName: ingredient.name,
        unitAbbr: ingredient.unitOfMeasure.abbreviation,
        quantity: Number(itemQuantity),
        unitCost: Number(itemUnitCost),
      },
    ]);
    setItemIngredientId("");
    setItemQuantity("");
    setItemUnitCost("");
  }

  function removeDraftItem(index: number) {
    setDraft((current) => current.filter((_, i) => i !== index));
  }

  const total = draft.reduce((sum, item) => sum + item.quantity * item.unitCost, 0);

  async function registerPurchase() {
    if (draft.length === 0) return;
    setSubmitting(true);
    setError(null);

    try {
      const dc = getAppDataConnect();
      const { data } = await createPurchase(dc, {
        supplierId: supplierId || null,
        date,
        subtotal: total,
        taxAmount: 0,
        total,
        paymentMethod,
        notes: null,
      });
      const purchaseId = data.purchase_insert.id;

      for (const item of draft) {
        await addPurchaseItem(dc, {
          purchaseId,
          ingredientId: item.ingredientId,
          quantity: item.quantity,
          unitCost: item.unitCost,
          totalCost: item.quantity * item.unitCost,
        });
      }

      setDraft([]);
      setSupplierId("");
      setDate(todayIso());
      await refresh();
    } catch {
      setError("No se pudo registrar la compra.");
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
        <h2 className="text-base font-semibold">Registrar compra</h2>

        <div className="mt-3 flex flex-wrap items-end gap-2">
          <label className="text-sm text-[#5f5a50]">
            Proveedor
            <select
              value={supplierId}
              onChange={(event) => setSupplierId(event.target.value)}
              className="mt-1 block w-40 rounded border border-[#d8d1c4] px-2 py-1 text-sm"
            >
              <option value="">Sin proveedor</option>
              {suppliers.map((supplier) => (
                <option key={supplier.id} value={supplier.id}>
                  {supplier.name}
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
            Pago
            <select
              value={paymentMethod}
              onChange={(event) => setPaymentMethod(event.target.value)}
              className="mt-1 block rounded border border-[#d8d1c4] px-2 py-1 text-sm"
            >
              <option value="efectivo">Efectivo</option>
              <option value="yape">Yape</option>
              <option value="plin">Plin</option>
              <option value="transferencia">Transferencia</option>
            </select>
          </label>
        </div>

        <form onSubmit={addDraftItem} className="mt-4 flex flex-wrap items-end gap-2 border-t border-[#f0ece3] pt-3">
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
                  {ingredient.name}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm text-[#5f5a50]">
            Cantidad
            <input
              required
              type="number"
              step="0.01"
              min="0.01"
              value={itemQuantity}
              onChange={(event) => setItemQuantity(event.target.value)}
              className="mt-1 block w-24 rounded border border-[#d8d1c4] px-2 py-1 text-sm"
            />
          </label>
          <label className="text-sm text-[#5f5a50]">
            Costo unit.
            <input
              required
              type="number"
              step="0.01"
              min="0"
              value={itemUnitCost}
              onChange={(event) => setItemUnitCost(event.target.value)}
              className="mt-1 block w-24 rounded border border-[#d8d1c4] px-2 py-1 text-sm"
            />
          </label>
          <button
            type="submit"
            disabled={ingredients.length === 0}
            className="rounded border border-[#7b3f2a] px-3 py-1.5 text-sm font-medium text-[#7b3f2a] disabled:opacity-60"
          >
            Agregar item
          </button>
        </form>

        {draft.length > 0 ? (
          <ul className="mt-3 space-y-1 text-sm text-[#5f5a50]">
            {draft.map((item, index) => (
              <li key={`${item.ingredientId}-${index}`} className="flex items-center justify-between">
                <span>
                  {item.ingredientName} — {item.quantity} {item.unitAbbr} × S/ {item.unitCost.toFixed(2)} = S/{" "}
                  {(item.quantity * item.unitCost).toFixed(2)}
                </span>
                <button onClick={() => removeDraftItem(index)} className="text-xs text-red-600 hover:underline">
                  Quitar
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-[#5f5a50]">Agrega items para registrar la compra.</p>
        )}

        <p className="mt-3 text-sm font-medium">Total: S/ {total.toFixed(2)}</p>

        {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}

        <button
          onClick={registerPurchase}
          disabled={draft.length === 0 || submitting}
          className="mt-3 rounded bg-[#7b3f2a] px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
        >
          {submitting ? "Registrando..." : "Registrar compra"}
        </button>
      </article>

      <article className="rounded border border-[#d8d1c4] bg-white p-4">
        <h2 className="text-base font-semibold">Compras registradas</h2>
        {purchases.length === 0 ? (
          <p className="mt-2 text-sm text-[#5f5a50]">Sin compras registradas.</p>
        ) : (
          <ul className="mt-2">
            {purchases.map((purchase) => (
              <PurchaseRow key={purchase.id} purchase={purchase} />
            ))}
          </ul>
        )}
      </article>
    </div>
  );
}

export default function ComprasPage() {
  return (
    <RoleGuard allowedRoles={["administrador"]}>
      <PageShell title="Compras">
        <Compras />
      </PageShell>
    </RoleGuard>
  );
}
