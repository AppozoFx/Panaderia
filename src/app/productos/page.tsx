"use client";

import { createProduct, listProducts, type ListProductsData } from "@dataconnect/generated";
import { type FormEvent, useEffect, useState } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { RoleGuard } from "@/components/auth/RoleGuard";
import { freshQuery, getAppDataConnect } from "@/lib/dataconnect/client";

function Productos() {
  const [products, setProducts] = useState<ListProductsData["products"]>([]);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [saleUnit, setSaleUnit] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function refresh() {
    const { data } = await listProducts(getAppDataConnect(), freshQuery);
    setProducts(data.products);
    setLoading(false);
  }

  useEffect(() => {
    refresh();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);

    try {
      await createProduct(getAppDataConnect(), {
        name,
        saleUnit: saleUnit || null,
        salePrice: Number(salePrice),
      });
      setName("");
      setSaleUnit("");
      setSalePrice("");
      await refresh();
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return <p className="text-sm text-[#5f5a50]">Cargando...</p>;
  }

  return (
    <article className="rounded border border-[#d8d1c4] bg-white p-4">
      <h2 className="text-base font-semibold">Productos</h2>
      <ul className="mt-2 space-y-1 text-sm text-[#5f5a50]">
        {products.map((product) => (
          <li key={product.id}>
            {product.name} — venta S/ {product.salePrice.toFixed(2)}
            {product.saleUnit ? ` (${product.saleUnit})` : ""}
            {product.currentCost != null ? ` — costo actual S/ ${product.currentCost.toFixed(2)}` : ""}
          </li>
        ))}
        {products.length === 0 ? <li>Sin productos registrados.</li> : null}
      </ul>

      <form onSubmit={handleSubmit} className="mt-3 flex flex-wrap items-end gap-2">
        <label className="text-sm text-[#5f5a50]">
          Nombre
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-1 block w-40 rounded border border-[#d8d1c4] px-2 py-1 text-sm"
          />
        </label>
        <label className="text-sm text-[#5f5a50]">
          Unidad de venta
          <input
            value={saleUnit}
            onChange={(event) => setSaleUnit(event.target.value)}
            className="mt-1 block w-28 rounded border border-[#d8d1c4] px-2 py-1 text-sm"
          />
        </label>
        <label className="text-sm text-[#5f5a50]">
          Precio
          <input
            type="number"
            required
            step="0.01"
            min="0"
            value={salePrice}
            onChange={(event) => setSalePrice(event.target.value)}
            className="mt-1 block w-24 rounded border border-[#d8d1c4] px-2 py-1 text-sm"
          />
        </label>
        <button
          type="submit"
          disabled={submitting}
          className="rounded bg-[#7b3f2a] px-3 py-1.5 text-sm font-medium text-white disabled:opacity-60"
        >
          Agregar
        </button>
      </form>
    </article>
  );
}

export default function ProductosPage() {
  return (
    <RoleGuard allowedRoles={["administrador"]}>
      <PageShell title="Productos">
        <Productos />
      </PageShell>
    </RoleGuard>
  );
}
