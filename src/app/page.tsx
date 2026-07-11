const modules = [
  "Insumos",
  "Compras",
  "Recetas",
  "Produccion",
  "Inventario",
  "Ventas",
  "Caja",
  "Reportes",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#201f1b]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-6">
        <header className="flex items-center justify-between border-b border-[#d8d1c4] pb-4">
          <div>
            <p className="text-sm font-medium text-[#7b3f2a]">LuisitoPan</p>
            <h1 className="text-2xl font-semibold tracking-normal">Panel inicial</h1>
          </div>
          <div className="rounded border border-[#d8d1c4] bg-white px-3 py-2 text-sm text-[#5f5a50]">
            Firebase: luisitopan-f3967
          </div>
        </header>

        <section className="grid flex-1 gap-4 py-6 md:grid-cols-[240px_1fr]">
          <nav className="border-r border-[#d8d1c4] pr-4">
            <ul className="space-y-1">
              {modules.map((module) => (
                <li key={module}>
                  <button className="w-full rounded border border-transparent px-3 py-2 text-left text-sm hover:border-[#d8d1c4] hover:bg-white">
                    {module}
                  </button>
                </li>
              ))}
            </ul>
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
          </section>
        </section>
      </div>
    </main>
  );
}