---
title: SEO In A Vite SSG
slug: /guides/SEO/SEO in a Vite SSG
sidebar_position: 3
last_update:
  date: 2026-01-03
  author: Anis
---

# Pre-rendering / Static Site Generation

If your routes are mostly static:

Use `Vite + vite-plugin-ssg` or `Nuxt SSG`.

This generates static HTML for each route at build time.

Pros: Fast, SEO-friendly, no Node server needed at runtime.


## Benefits

Lightweight & fast: You keep Vite as your build tool.

Static site generation (SSG): Pages are pre-rendered at build time into static HTML. Perfect for SEO.

Dynamic routes support: You can pre-render routes based on your data.

No full framework required: You keep your Vue 3 app structure.

Easy integration with existing Vue app: You don’t have to rewrite everything.

## How it works

Your Vue components are rendered to HTML at build time.

The generated HTML is fully crawlable by Google.

On the client side, Vue hydrates the app for interactivity.

Install the plugin: `npm install vite-plugin-ssg`

Create main.js or main.ts:

```ts
import { ViteSSG } from 'vite-plugin-ssg'
import App from './App.vue'
import { createRouter } from './router'

export const createApp = ViteSSG(
  App,
  { routes: createRouter().getRoutes() },
)
```
or in your `vite.config.js`:

```ts
import { ViteSSG } from 'vite-plugin-ssg'

export const createApp = ViteSSG(App, { routes })
```

Generate HTML pages at build time:
```ts
npm run build
npm run serve
```

==> Result: Your **/dist** folder will now **contain static HTML pages for all routes**.
**SEO benefit:** 
Google sees the fully-rendered HTML immediately, including dynamic content if you pass it during SSG.

## Adding different meta data for each page

When you use `vite-plugin-ssg`, you don’t just **pre-render HTML** — you can also dynamically define `<title>` and `<meta> `per page using **@vueuse/head**.

- Step 1: Install *VueUse Head*
```ts
npm install @vueuse/head
```

- Step 2: Set up *Head* in your *main app*

In your `main.js` or `main.ts`:

```ts
import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'

export const app = createApp(App)
const head = createHead()
app.use(head)
```

- Step 3: Define meta per page

Example for a page component:
```html
<template>
  <h1>{{ product.name }}</h1>
  <p>{{ product.description }}</p>
</template>
```
```ts
<script setup>
import { useHead } from '@vueuse/head'

// Assume this comes from your Slim API or SSG route generation
const product = {
  name: 'Awesome Widget',
  description: 'The best widget for your needs'
}

// Dynamic meta tags
useHead({
  title: product.name,
  meta: [
    { name: 'description', content: product.description },
    { name: 'keywords', content: 'widget, awesome, buy' }
  ]
})
</script>
```

✅ Result: When vite-plugin-ssg pre-renders this page, the HTML will include the correct title and meta tags. Google sees them immediately.
