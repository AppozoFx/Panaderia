"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, useEffect, useState } from "react";
import { useAuth } from "@/lib/firebase/auth-context";

export default function LoginPage() {
  const { signIn, user, loading } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      router.replace("/");
    }
  }, [loading, user, router]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      await signIn(email, password);
      router.replace("/");
    } catch {
      setError("Credenciales invalidas.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f4ef] px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded border border-[#d8d1c4] bg-white p-6"
      >
        <p className="text-sm font-medium text-[#7b3f2a]">LuisitoPan</p>
        <h1 className="mt-1 text-xl font-semibold">Iniciar sesion</h1>

        <label className="mt-6 block text-sm text-[#5f5a50]">
          Correo
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-1 w-full rounded border border-[#d8d1c4] px-3 py-2 text-sm"
          />
        </label>

        <label className="mt-4 block text-sm text-[#5f5a50]">
          Contrasena
          <input
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-1 w-full rounded border border-[#d8d1c4] px-3 py-2 text-sm"
          />
        </label>

        {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}

        <button
          type="submit"
          disabled={submitting}
          className="mt-6 w-full rounded bg-[#7b3f2a] px-3 py-2 text-sm font-medium text-white disabled:opacity-60"
        >
          {submitting ? "Ingresando..." : "Ingresar"}
        </button>
      </form>
    </main>
  );
}
