"use client";

import Link from "next/link";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { useAuth, type UserRole } from "@/lib/firebase/auth-context";

export function RoleGuard({
  allowedRoles,
  children,
}: {
  allowedRoles: UserRole[];
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <RoleCheck allowedRoles={allowedRoles}>{children}</RoleCheck>
    </AuthGuard>
  );
}

function RoleCheck({ allowedRoles, children }: { allowedRoles: UserRole[]; children: React.ReactNode }) {
  const { role } = useAuth();

  if (!role || !allowedRoles.includes(role)) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f4ef] px-6 text-center">
        <div>
          <p className="text-sm font-medium text-[#7b3f2a]">LuisitoPan</p>
          <h1 className="mt-1 text-xl font-semibold">Sin acceso</h1>
          <p className="mt-2 text-sm text-[#5f5a50]">Tu rol no tiene permiso para ver esta pagina.</p>
          <Link href="/" className="mt-4 inline-block text-sm font-medium text-[#7b3f2a] underline">
            Volver al panel
          </Link>
        </div>
      </main>
    );
  }

  return <>{children}</>;
}
