---
title: Sitemap And Robots
slug: /guides/SEO/Sitemap and Robots
sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

# Sitemap & Robots

## Google SEO

Create a sitemap.xml listing all your routes.

Submit it to Google Search Console.

Helps Google discover dynamic routes.

## Sitemap generation

Even with SSG, a sitemap is still highly recommended:

It tells Google about all your pages.

Helps index dynamic routes (like /products/:id).

## Options for Vite + SSG

You can use:

- **Meta per page** → Use @vueuse/head inside each page component.
- **Sitemap** → Still recommended, use vite-plugin-ssg-sitemap or npm sitemap.
- **Dynamic routes** → Generate routes from your database at build time for SSG.

1. **vite-plugin-ssg’s sitemap support (built-in):**

```ts
import { ViteSSG } from "vite-plugin-ssg";
import sitemap from "vite-plugin-ssg-sitemap";

export const createApp = ViteSSG(App, { routes }, ({ routes }) => {
  sitemap({ hostname: "https://yourdomain.com", routes });
});
```

2. **Standalone sitemap generator**: e.g., **sitemap** npm package.
   You can generate sitemap.xml during build by fetching all your dynamic routes from SQLite.

3. **Dynamic routes with SSG**

If your pages come from a database (SQLite via Slim API):

You can fetch your data at build time and generate routes dynamically:

```ts
// ssg-routes.js
import fetchProducts from "./fetchProducts.js";

export async function getRoutes() {
  const products = await fetchProducts();
  return products.map((p) => `/product/${p.id}`);
}
```

Then pass to ViteSSG:

```ts
import { getRoutes } from "./ssg-routes";

export const createApp = ViteSSG(App, await getRoutes());
```

This ensures every product page is pre-rendered with its own meta tags.
