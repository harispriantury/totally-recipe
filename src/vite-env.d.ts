/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_APP_ID: string;
  readonly VITE_APP_KEY: string;
  readonly VITE_TYPE: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
