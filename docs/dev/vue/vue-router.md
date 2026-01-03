---
title: Vue Router
slug: /dev/vue/vue-router
sidebar_position: 12
last_update:
  date: 2026-01-03
  author: Anis
---

# vue-router


## Documentation

- [router.vuejs.org](https://router.vuejs.org/installation.html)
- [Github repository](https://github.com/vuejs/router)

### rooter cheat-sheet

- [Vue-Router-Cheat-Sheet.pdf](Vue-Router-Cheat-Sheet.pdf)


### Tutorials

- [https://stackabuse.com/guide-to-vue-router/](https://stackabuse.com/guide-to-vue-router/)


## install
1. install `vue-router`
```bash
npm install vue-router@4
```

2. Add `vue-router` to the vue js app in the `main.js` file :

```js
import { createApp } from 'vue'
const app  = createApp(App)

//router
import router from './router'
app.use(router);
```

3. To configure the routes, create `index.js` file in `/src/router/` folder containing 
the routes of the app:

```js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SearchComponent from "../views/search/SearchView.vue";
import DocumentView from "../views/document/DocumentView.vue";
import NotFound from '../views/NotFound.vue';

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/search", name: "search", component: SearchComponent },
  { path: "/doc/:id", name: "docView", component: DocumentView },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```
in `export default router;` the `router` will be imported in `main.js` with `import router from './router'` from `/src/router/index.js`


## Example

**index.js**
```ts
// src/routes/index.js
import { createRouter, createWebHistory } from "vue-router";
import homeRoutes from "./homeRoutes";
import documentRoutes from "./documentRoutes";
import otherRoutes from "./otherRoutes";
import userRoutes from "./userRoutes";
import adminRoutes from "./adminRoutes";
import prepaRoutes from "./prepaRoutes";

const routes = [
  ...homeRoutes,
  ...documentRoutes,
  ...userRoutes,
  ...adminRoutes,
  ...prepaRoutes,
  ...otherRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```
**HomeRoutes.js**
```ts
import Home from "@/views/Home.vue";
import Search from "../views/Search.vue";

const homeRoutes = [
  {
    path: "/",
    component: () => import("@/layouts/HomeLayout.vue"),
    children: [
      { path: "", name: "Home", component: Home }
    ]
  },
  {
    path: "/about",
    component: () => import("@/layouts/GeneralLayout.vue"),
    children: [
      { path: "", name: "About", component: () => import("@/views/About.vue") }
    ]
  },
  {
    // Définit l’URL parent pour cette route.
    path: "/search",
    name: "Search", // nommer le parent
    // Définit le layout parent pour cette route.
    // SearchLayout.vue est donc le container général pour toutes les routes enfants.
    // import() pour le lazy loading, c’est-à-dire que ce composant sera chargé uniquement 
    // quand on navigue sur cette route, ce qui améliore la performance.
    // Il contiendra le <router-view /> où seront affichés les enfants.
    component: () => import("@/layouts/SearchLayout.vue"),
    // children: définir des routes enfants qui seront rendues à l’intérieur du <router-view /> 
    // du composant parent (SearchLayout.vue).
    children: [
      // C’est le contenu réel affiché dans <router-view /> du layout parent.
      // Search.vue est donc rendu dans SearchLayout.vue lorsqu’on accède à /search.
      { path: "", name: "SearchResults", component: Search }
    ]
  },
  {
    path: "/advanced-search",
    component: () => import("@/layouts/AdvancedSearchLayout.vue"),
    children: [
      { path: "", name: "AdvancedSearch", component: () => import("@/components/search/AdvancedSearchComponent.vue") }
    ]
  }
];

export default homeRoutes;
```

## tracer les routes

### diagnostiquer qui redirige

Ajoute ces logs très rapidement (temporalement) pour voir qui appelle finalement la redirection vers Home.

Trace toutes les navigations globalement — place ça juste après la création du router (ou dans `main.js`) :

```ts
router.beforeEach((to, from, next) => {
  console.log('[router.beforeEach] to=', to.name, 'from=', from.name, 'route.fullPath=', to.fullPath);
  next();
});
router.afterEach((to, from) => {
  console.log('[router.afterEach] finished ->', to.name);
});
```

Pour trouver l’appel effectif à `router.push(...)` (**pile d’appels**), fais un patch temporaire :

```ts
const origPush = router.push.bind(router);
router.push = (...args) => {
  console.trace('router.push CALLED with:', args);
  return origPush(...args);
};
```

Ça te donnera la stack trace et tu verras quel code provoque la redirection vers / (supprime après debug).

```bash
Grep / recherche dans le projet :

grep -R "router.push(" -n src

grep -R "this.$router.push" -n src

grep -R "router.replace(" -n src

grep -R "window.location" -n src
```

Tu cherches toute redirection automatique qui pourrait renvoyer vers Home.
