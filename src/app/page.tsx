"use client";

import { getCurrentUser } from "@dataconnect/generated";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { freshQuery, getAppDataConnect } from "@/lib/dataconnect/client";
import { modulesForRole } from "@/lib/auth/permissions";
import { useAuth } from "@/lib/firebase/auth-context";

function DatabaseStatus() {
  const [status, setStatus] = useState<"loading" | "synced" | "not-found" | "error">("loading");
  const [roleName, setRoleName] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    getCurrentUser(getAppDataConnect(), freshQuery)
      .then(({ data }) => {
        if (cancelled) return;

        if (data.user) {
          setRoleName(data.user.role.name);
          setStatus("synced");
        } else {
          setStatus("not-found");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const label =
    status === "loading"
      ? "Consultando base de datos..."
      : status === "synced"
        ? `Postgres: sincronizado (rol ${roleName})`
        : status === "not-found"
          ? "Postgres: usuario aun no sincronizado"
          : "Postgres: error de conexion";

  return (
    <article className="rounded border border-[#d8d1c4] bg-white p-4">
      <h2 className="text-base font-semibold">Base de datos</h2>
      <p className="mt-2 text-sm leading-6 text-[#5f5a50]">SQL Connect (Cloud SQL / PostgreSQL) en us-central1.</p>
      <p className="mt-2 text-sm font-medium text-[#7b3f2a]">{label}</p>
    </article>
  );
}

function Dashboard() {
  const { user, role, signOut } = useAuth();
  const modules = modulesForRole(role);

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#201f1b]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-6">
        <header className="flex items-center justify-between border-b border-[#d8d1c4] pb-4">
          <div>
            <p className="text-sm font-medium text-[#7b3f2a]">LuisitoPan</p>
            <h1 className="text-2xl font-semibold tracking-normal">Panel inicial</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded border border-[#d8d1c4] bg-white px-3 py-2 text-sm text-[#5f5a50]">
              {user?.email} · {role ?? "sin rol"}
            </div>
            {role === "administrador" ? (
              <Link
                href="/configuracion"
                className="rounded border border-[#d8d1c4] bg-white px-3 py-2 text-sm text-[#5f5a50] hover:bg-[#f0ece3]"
              >
                Configuracion
              </Link>
            ) : null}
            <button
              onClick={() => signOut()}
              className="rounded border border-[#d8d1c4] bg-white px-3 py-2 text-sm text-[#5f5a50] hover:bg-[#f0ece3]"
            >
              Salir
            </button>
          </div>
        </header>

        <section className="grid flex-1 gap-4 py-6 md:grid-cols-[240px_1fr]">
          <nav className="border-r border-[#d8d1c4] pr-4">
            {modules.length === 0 ? (
              <p className="px-3 py-2 text-sm text-[#5f5a50]">Sin modulos asignados a tu rol.</p>
            ) : (
              <ul className="space-y-1">
                {modules.map((module) =>
                  module.href ? (
                    <li key={module.key}>
                      <Link
                        href={module.href}
                        className="block w-full rounded border border-transparent px-3 py-2 text-left text-sm hover:border-[#d8d1c4] hover:bg-white"
                      >
                        {module.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={module.key}>
                      <button
                        disabled
                        title="Modulo pendiente de construir"
                        className="w-full cursor-not-allowed rounded border border-transparent px-3 py-2 text-left text-sm text-[#b3ab9c]"
                      >
                        {module.label}
                      </button>
                    </li>
                  ),
                )}
              </ul>
            )}
          </nav>

          <section className="grid content-start gap-4 md:grid-cols-2">
            <article className="rounded border border-[#d8d1c4] bg-white p-4">
              <h2 className="text-base font-semibold">Base tecnica</h2>
              <p className="mt-2 text-sm leading-6 text-[#5f5a50]">
                Next.js, TypeScript y Firebase estan preparados como punto de partida.
              </p>
            </article>
            <article className="rounded border border-[#d8d1c4] bg-white p-4">
              <h2 className="text-base font-semibold">Costo protegido</h2>
              <p className="mt-2 text-sm leading-6 text-[#5f5a50]">
                Budget mensual de 100 PEN con alertas al 30%, 60% y 90%.
              </p>
            </article>
            <DatabaseStatus />
          </section>
        </section>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <AuthGuard>
      <Dashboard />
    </AuthGuard>
  );
}
