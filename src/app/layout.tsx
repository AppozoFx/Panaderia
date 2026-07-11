import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/lib/firebase/auth-context";

export const metadata: Metadata = {
  title: "LuisitoPan",
  description: "Sistema web para gestion de panaderia",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}