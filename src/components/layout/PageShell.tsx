"use client";

import Link from "next/link";

export function PageShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#201f1b]">
      <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-6 py-6">
        <header className="flex items-center justify-between border-b border-[#d8d1c4] pb-4">
          <div>
            <Link href="/" className="text-sm font-medium text-[#7b3f2a] hover:underline">
              &larr; LuisitoPan
            </Link>
            <h1 className="text-2xl font-semibold tracking-normal">{title}</h1>
          </div>
        </header>

        <section className="flex-1 py-6">{children}</section>
      </div>
    </main>
  );
}
