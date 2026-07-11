import type { UserRole } from "@/lib/firebase/auth-context";

export interface ModuleDefinition {
  key: string;
  label: string;
  roles: UserRole[];
  href?: string;
}

export const MODULES: ModuleDefinition[] = [
  { key: "insumos", label: "Insumos", roles: ["administrador", "produccion"], href: "/insumos" },
  { key: "proveedores", label: "Proveedores", roles: ["administrador"], href: "/proveedores" },
  { key: "productos", label: "Productos", roles: ["administrador"], href: "/productos" },
  { key: "compras", label: "Compras", roles: ["administrador"], href: "/compras" },
  { key: "recetas", label: "Recetas", roles: ["administrador", "produccion"], href: "/recetas" },
  { key: "produccion", label: "Produccion", roles: ["administrador", "produccion"], href: "/produccion" },
  { key: "inventario", label: "Inventario", roles: ["administrador", "produccion"], href: "/inventario" },
  { key: "ventas", label: "Ventas", roles: ["administrador", "cajero"] },
  { key: "caja", label: "Caja", roles: ["administrador", "cajero"] },
  { key: "reportes", label: "Reportes", roles: ["administrador"] },
];

export function modulesForRole(role: UserRole | null): ModuleDefinition[] {
  if (!role) {
    return [];
  }

  return MODULES.filter((module) => module.roles.includes(role));
}
