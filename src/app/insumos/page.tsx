"use client";

import {
  createIngredient,
  createUnitOfMeasure,
  listIngredients,
  listUnitsOfMeasure,
  type ListIngredientsData,
  type ListUnitsOfMeasureData,
} from "@dataconnect/generated";
import { type FormEvent, useEffect, useState } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { RoleGuard } from "@/components/auth/RoleGuard";
import { freshQuery, getAppDataConnect } from "@/lib/dataconnect/client";

function UnidadesDeMedida({
  units,
  onCreated,
}: {
  units: ListUnitsOfMeasureData["unitOfMeasures"];
  onCreated: () => void;
}) {
  const [name, setName] = useState("");
  const [abbreviation, setAbbreviation] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);

    try {
      await createUnitOfMeasure(getAppDataConnect(), { name, abbreviation });
      setName("");
      setAbbreviation("");
      onCreated();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <article className="rounded border border-[#d8d1c4] bg-white p-4">
      <h2 className="text-base font-semibold">Unidades de medida</h2>
      <ul className="mt-2 space-y-1 text-sm text-[#5f5a50]">
        {units.map((unit) => (
          <li key={unit.id}>
            {unit.name} ({unit.abbreviation})
          </li>
        ))}
        {units.length === 0 ? <li>Sin unidades registradas.</li> : null}
      </ul>

      <form onSubmit={handleSubmit} className="mt-3 flex flex-wrap items-end gap-2">
        <label className="text-sm text-[#5f5a50]">
          Nombre
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-1 block w-32 rounded border border-[#d8d1c4] px-2 py-1 text-sm"
          />
        </label>
        <label className="text-sm text-[#5f5a50]">
          Abreviatura
          <input
            required
            value={abbreviation}
            onChange={(event) => setAbbreviation(event.target.value)}
            maxLength={10}
            className="mt-1 block w-20 rounded border border-[#d8d1c4] px-2 py-1 text-sm"
          />
        </label>
        <button
          type="submit"
          disabled={submitting}
          className="rounded border border-[#7b3f2a] px-3 py-1.5 text-sm font-medium text-[#7b3f2a] disabled:opacity-60"
        >
          Agregar
        </button>
      </form>
    </article>
  );
}

function Insumos() {
  const [units, setUnits] = useState<ListUnitsOfMeasureData["unitOfMeasures"]>([]);
  const [ingredients, setIngredients] = useState<ListIngredientsData["ingredients"]>([]);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [unitOfMeasureId, setUnitOfMeasureId] = useState("");
  const [referenceCost, setReferenceCost] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function refresh() {
    const dc = getAppDataConnect();
    const [unitsResult, ingredientsResult] = await Promise.all([
      listUnitsOfMeasure(dc, freshQuery),
      listIngredients(dc, freshQuery),
    ]);
    setUnits(unitsResult.data.unitOfMeasures);
    setIngredients(ingredientsResult.data.ingredients);
    setLoading(false);
  }

  useEffect(() => {
    refresh();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!unitOfMeasureId) return;
    setSubmitting(true);

    try {
      await createIngredient(getAppDataConnect(), {
        name,
        unitOfMeasureId,
        referenceCost: referenceCost ? Number(referenceCost) : null,
      });
      setName("");
      setReferenceCost("");
      await refresh();
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return <p className="text-sm text-[#5f5a50]">Cargando...</p>;
  }

  return (
    <div className="space-y-4">
      <UnidadesDeMedida units={units} onCreated={refresh} />

      <article className="rounded border border-[#d8d1c4] bg-white p-4">
        <h2 className="text-base font-semibold">Insumos</h2>
        <ul className="mt-2 space-y-1 text-sm text-[#5f5a50]">
          {ingredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.name} — {ingredient.unitOfMeasure.abbreviation}
              {ingredient.referenceCost != null ? ` — S/ ${ingredient.referenceCost.toFixed(2)}` : ""}
            </li>
          ))}
          {ingredients.length === 0 ? <li>Sin insumos registrados.</li> : null}
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
            Unidad
            <select
              required
              value={unitOfMeasureId}
              onChange={(event) => setUnitOfMeasureId(event.target.value)}
              className="mt-1 block w-32 rounded border border-[#d8d1c4] px-2 py-1 text-sm"
            >
              <option value="" disabled>
                Elegir
              </option>
              {units.map((unit) => (
                <option key={unit.id} value={unit.id}>
                  {unit.abbreviation}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm text-[#5f5a50]">
            Costo ref.
            <input
              type="number"
              step="0.01"
              min="0"
              value={referenceCost}
              onChange={(event) => setReferenceCost(event.target.value)}
              className="mt-1 block w-24 rounded border border-[#d8d1c4] px-2 py-1 text-sm"
            />
          </label>
          <button
            type="submit"
            disabled={submitting || units.length === 0}
            className="rounded bg-[#7b3f2a] px-3 py-1.5 text-sm font-medium text-white disabled:opacity-60"
          >
            Agregar
          </button>
        </form>
      </article>
    </div>
  );
}

export default function InsumosPage() {
  return (
    <RoleGuard allowedRoles={["administrador", "produccion"]}>
      <PageShell title="Insumos">
        <Insumos />
      </PageShell>
    </RoleGuard>
  );
}
