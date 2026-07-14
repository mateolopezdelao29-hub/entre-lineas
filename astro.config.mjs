import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// Cambia 'site' por tu dominio final cuando lo tengas.
export default defineConfig({
  site: 'https://entrelineas.mx',
  adapter: cloudflare()
});