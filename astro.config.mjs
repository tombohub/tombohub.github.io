import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: 'https://tombohub.github.io/',
    integrations: [sitemap()],
    build: {
        assets: 'assets'
    }
});