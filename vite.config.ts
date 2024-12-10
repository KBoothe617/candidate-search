import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import 'vite/client';

interface ImportMetaEnv {
  VITE_GITHUB_TOKEN: string;
  VITE_PORT: string;
}
interface ImportMetaEnv {
  VITE_GITHUB_TOKEN: string;
  VITE_PORT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


// Load environment variables from .env file
dotenv.config();

const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
console.log('GitHub Token:', githubToken);

export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.VITE_PORT || '10000'),
  },
});