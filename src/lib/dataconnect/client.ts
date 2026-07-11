import { connectDataConnectEmulator, getDataConnect, type DataConnect, type ExecuteQueryOptions } from "firebase/data-connect";
import { connectorConfig } from "@dataconnect/generated";
import { getFirebaseClientApp } from "@/lib/firebase/client";

let dataConnectInstance: DataConnect | null = null;
let emulatorConnected = false;

export function getAppDataConnect(): DataConnect {
  if (!dataConnectInstance) {
    dataConnectInstance = getDataConnect(getFirebaseClientApp(), connectorConfig);
  }

  if (process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS === "true" && !emulatorConnected) {
    connectDataConnectEmulator(dataConnectInstance, "127.0.0.1", 9399);
    emulatorConnected = true;
  }

  return dataConnectInstance;
}

// El SDK usa PREFER_CACHE por defecto; forzamos datos frescos tras cada mutacion.
export const freshQuery: ExecuteQueryOptions = { fetchPolicy: "SERVER_ONLY" };
