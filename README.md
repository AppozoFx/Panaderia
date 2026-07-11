# Pan - Gestion de Panaderia

Sistema web previsto para gestionar una panaderia: insumos, compras, proveedores, recetas, produccion, inventario, productos, clientes, ventas, caja, gastos, reinversion y reportes.

## Estado actual

Base Next.js inicial creada y documentacion privada actualizada. Todavia no se implementan modulos de negocio.

## Tecnologias previstas

- Next.js con TypeScript para la aplicacion web.
- Firebase App Hosting para despliegue.
- Firebase Authentication para inicio de sesion.
- Firebase SQL Connect con PostgreSQL como base de datos principal.
- Cloud Functions for Firebase para operaciones criticas cuando sea necesario.
- Cloud Storage solo para archivos necesarios.
- Soporte futuro para tickets termicos de 58 mm y 80 mm.

## Desarrollo local

Servidor actual: http://127.0.0.1:3000.

Comandos principales:

`ash
npm run dev
npm run typecheck
npm run build
` 

## Documentacion privada

La documentacion privada del proyecto esta en `docs`. Esa carpeta funciona como boveda de Obsidian y no debe versionarse en Git.

## Proyecto Firebase inicial

Proyecto Firebase confirmado: `luisitopan-f3967` (`LuisitoPan`). La facturacion esta habilitada y existe un budget mensual de `100 PEN` con alertas al 30%, 60% y 90%. Region inicial definida: `us-central1`. Antes de crear recursos con costo constante falta definir limites operativos especificos de Cloud SQL.

## Firebase CLI local

La carpeta contiene `.firebaserc` y `firebase.json` minimos. El alias `default` apunta a `luisitopan-f3967`. No se ha desplegado nada todavia.

## Regla de documentacion

Todo cambio funcional, tecnico o de configuracion debe documentarse en docs antes de considerarse terminado. La guia principal esta en docs/10-Control-de-Cambios.md.

## Proximos pasos

- Completar requisitos funcionales por modulo.
- Validar reglas de negocio.
- Definir el modelo de datos definitivo.
- Seguir `docs/11-Plan-de-Implementacion-Firebase.md` como plan operativo.
- Definir estructura inicial del proyecto Next.js con Firebase.
- Crear el proyecto web cuando se apruebe la base tecnica.
- Seguir el protocolo de documentacion en cada cambio.
