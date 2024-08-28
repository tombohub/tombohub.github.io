---
title: Display images with Astro from assets folder on Github pages
date: 2024-08-27
status: published
postNumber: 11
tags: [astro]
---

I have deployed Astro website on Github pages, but noticed images are not displaying. The reason Astro bundles images in `_astro` folder and Github pages does not allow fetching from any folder starting with `_`.

Solution is to change the folder name where Astro bundles assets.

This is done in `astro.config.mjs`, docs [here](https://docs.astro.build/en/reference/configuration-reference/#buildassets)

Write name of the folder without leading underscore. Like this:

```js
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://yoursite.com/",
  integrations: [sitemap()],
  build: {
    assets: "assets",
  },
});
```

It should work now.
