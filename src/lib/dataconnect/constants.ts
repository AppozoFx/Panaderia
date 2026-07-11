// Fila unica de configuracion del negocio (ver dataconnect/schema/schema.gql, BusinessConfig).
export const BUSINESS_CONFIG_ID = "b6f1a000-0000-4000-8000-0000000000f0";

export const PAYMENT_METHODS = ["efectivo", "yape", "plin", "transferencia"] as const;
export type PaymentMethod = (typeof PAYMENT_METHODS)[number];
