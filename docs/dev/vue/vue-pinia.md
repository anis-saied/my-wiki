---
title: Vue Pinia
slug: /dev/vue/vue-pinia
sidebar_position: 10
last_update:
  date: 2026-01-03
  author: Anis
---

# Vue pinia

Pinia is a store library for Vue, it allows you to **share a state** across components/pages.


## Documentation

- [pinia.vuejs.org](https://pinia.vuejs.org/)
- [Pinia 🍍](https://github.com/posva/pinia)

### cheat sheets
- [Pinia-Cheat-Sheet.pdf](pdf/Pinia-Cheat-Sheet.pdf)




## Install

```bash
npm install pinia
```

## Configure pinia library

Create a pinia instance (the root store) and pass it to the app as a plugin.

Add `pinia` to the vue js app in the `main.js` file :

```js
import { createApp } from 'vue'
import App from './App.vue'
const app  = createApp(App)

//pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)

app.mount('#app')
```

## create a pinia store

Create a `/src/stores/<id>-store.js` for **shared state**. 

Example `main-store.js`:
```js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore("main", () => {
  const query = ref("");
  const doc = ref(null); // Initialize doc as null
  const docList = ref([]); // Initialize docList as an empty array

  return {
    query,
    doc,
    docList
  };
});
```
## how to use pinia store in a vue component

In the **component script**:

```html
<script setup>
import { useMainStore } from "../stores/main-store"

const mainStore = useMainStore()
</script>
```

Then in the **component template**:

```html
<input type="search" v-model="mainStore.query"/>
```

## Notes
- you must return all state properties in setup stores for pinia to pick them up as state. In other words, you cannot have private state properties in stores.
- With `Setup stores` you can create `watchers` within a store and freely use any composable.
- Setup stores are also able to rely on globally provided properties like the Router or the Route. Any property provided at the App level can be accessed from the store using `inject()`, just like in components
- You can define as many stores as you want and you should define each store in a different file to get the most out of Pinia
- Once the `store` is instantiated, you can access any property defined in `state`, `getters`, and `actions` directly on the store. 
- Note that `store` is an object wrapped with `reactive`, meaning there is no need to write .value after getters
- In order to extract properties from the store while keeping its reactivity, you need to use `storeToRefs()`. 
It will create refs for every reactive property. 
This is useful when you are only using state from the store but not calling any action.
```js
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { name, doubleCount } = storeToRefs(store)
```
