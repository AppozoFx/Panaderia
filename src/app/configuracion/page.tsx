"use client";

import { getBusinessConfig, upsertBusinessConfig } from "@dataconnect/generated";
import { type FormEvent, useEffect, useState } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { RoleGuard } from "@/components/auth/RoleGuard";
import { freshQuery, getAppDataConnect } from "@/lib/dataconnect/client";
import { BUSINESS_CONFIG_ID, PAYMENT_METHODS } from "@/lib/dataconnect/constants";

function ConfiguracionForm() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [businessName, setBusinessName] = useState("");
  const [currency, setCurrency] = useState("PEN");
  const [ticketWidthMm, setTicketWidthMm] = useState(80);
  const [activePaymentMethods, setActivePaymentMethods] = useState<string[]>([]);
  const [taxesEnabled, setTaxesEnabled] = useState(false);

  useEffect(() => {
    getBusinessConfig(getAppDataConnect(), { id: BUSINESS_CONFIG_ID }, freshQuery)
      .then(({ data }) => {
        if (data.businessConfig) {
          setBusinessName(data.businessConfig.businessName);
          setCurrency(data.businessConfig.currency);
          setTicketWidthMm(data.businessConfig.ticketWidthMm);
          setActivePaymentMethods(data.businessConfig.activePaymentMethods ?? []);
          setTaxesEnabled(data.businessConfig.taxesEnabled);
        }
      })
      .catch(() => setError("No se pudo cargar la configuracion."))
      .finally(() => setLoading(false));
  }, []);

  function togglePaymentMethod(method: string) {
    setActivePaymentMethods((current) =>
      current.includes(method) ? current.filter((m) => m !== method) : [...current, method],
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError(null);

    try {
      await upsertBusinessConfig(getAppDataConnect(), {
        id: BUSINESS_CONFIG_ID,
        businessName,
        currency,
        ticketWidthMm,
        activePaymentMethods,
        taxesEnabled,
      });
      setSavedAt(Date.now());
    } catch {
      setError("No se pudo guardar la configuracion.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <p className="text-sm text-[#5f5a50]">Cargando...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-5 rounded border border-[#d8d1c4] bg-white p-5">
      <label className="block text-sm text-[#5f5a50]">
        Nombre del negocio
        <input
          required
          value={businessName}
          onChange={(event) => setBusinessName(event.target.value)}
          className="mt-1 w-full rounded border border-[#d8d1c4] px-3 py-2 text-sm"
        />
      </label>

      <label className="block text-sm text-[#5f5a50]">
        Moneda
        <input
          required
          value={currency}
          onChange={(event) => setCurrency(event.target.value.toUpperCase())}
          maxLength={10}
          className="mt-1 w-full rounded border border-[#d8d1c4] px-3 py-2 text-sm"
        />
      </label>

      <fieldset>
        <legend className="text-sm text-[#5f5a50]">Ancho de ticket</legend>
        <div className="mt-1 flex gap-4">
          {[58, 80].map((width) => (
            <label key={width} className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="ticketWidth"
                checked={ticketWidthMm === width}
                onChange={() => setTicketWidthMm(width)}
              />
              {width} mm
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm text-[#5f5a50]">Metodos de pago activos</legend>
        <div className="mt-1 flex flex-wrap gap-4">
          {PAYMENT_METHODS.map((method) => (
            <label key={method} className="flex items-center gap-2 text-sm capitalize">
              <input
                type="checkbox"
                checked={activePaymentMethods.includes(method)}
                onChange={() => togglePaymentMethod(method)}
              />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="flex items-center gap-2 text-sm text-[#5f5a50]">
        <input type="checkbox" checked={taxesEnabled} onChange={(event) => setTaxesEnabled(event.target.checked)} />
        Impuestos activados
      </label>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      {savedAt ? <p className="text-sm text-green-700">Guardado.</p> : null}

      <button
        type="submit"
        disabled={saving}
        className="rounded bg-[#7b3f2a] px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
      >
        {saving ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
}

export default function ConfiguracionPage() {
  return (
    <RoleGuard allowedRoles={["administrador"]}>
      <PageShell title="Configuracion del negocio">
        <ConfiguracionForm />
      </PageShell>
    </RoleGuard>
  );
}
