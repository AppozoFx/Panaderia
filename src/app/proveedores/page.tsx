"use client";

import { createSupplier, listSuppliers, type ListSuppliersData } from "@dataconnect/generated";
import { type FormEvent, useEffect, useState } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { RoleGuard } from "@/components/auth/RoleGuard";
import { freshQuery, getAppDataConnect } from "@/lib/dataconnect/client";

function Proveedores() {
  const [suppliers, setSuppliers] = useState<ListSuppliersData["suppliers"]>([]);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isFormal, setIsFormal] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function refresh() {
    const { data } = await listSuppliers(getAppDataConnect(), freshQuery);
    setSuppliers(data.suppliers);
    setLoading(false);
  }

  useEffect(() => {
    refresh();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);

    try {
      await createSupplier(getAppDataConnect(), {
        name,
        phone: phone || null,
        isFormal,
      });
      setName("");
      setPhone("");
      setIsFormal(false);
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
      <h2 className="text-base font-semibold">Proveedores</h2>
      <ul className="mt-2 space-y-1 text-sm text-[#5f5a50]">
        {suppliers.map((supplier) => (
          <li key={supplier.id}>
            {supplier.name}
            {supplier.phone ? ` — ${supplier.phone}` : ""} — {supplier.isFormal ? "formal" : "informal"}
          </li>
        ))}
        {suppliers.length === 0 ? <li>Sin proveedores registrados.</li> : null}
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
          Telefono
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="mt-1 block w-32 rounded border border-[#d8d1c4] px-2 py-1 text-sm"
          />
        </label>
        <label className="flex items-center gap-2 text-sm text-[#5f5a50]">
          <input type="checkbox" checked={isFormal} onChange={(event) => setIsFormal(event.target.checked)} />
          Formal
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

export default function ProveedoresPage() {
  return (
    <RoleGuard allowedRoles={["administrador"]}>
      <PageShell title="Proveedores">
        <Proveedores />
      </PageShell>
    </RoleGuard>
  );
}
