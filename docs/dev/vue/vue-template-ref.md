---
title: Vue Template Ref
slug: /dev/vue/vue-template-ref
sidebar_position: 13
last_update:
  date: 2026-01-03
  author: Anis
---

# Template Refs 

 *There will be cases where we need to manually work with the DOM.*

- a **template ref** - i.e. a reference to an element in the template - using the [special `ref` attribute](https://vuejs.org/api/built-in-special-attributes.html#ref)

``` html
<p ref="pElementRef">hello</p>
```

To access the ref, we need to declare a ref with matching name:

```js
const pElementRef = ref(null)
```

- Notice the ref is initialized with `null` value. 
  - This is because the element doesn't exist yet when `<script setup>` is executed. 
  - The template ref is only accessible after the component is **mounted**.

Example :

add an `onMounted` hook, access the `<p>` via `pElementRef.value`, and perform some direct DOM operations on it (e.g. changing its `textContent`).

```vue
<script setup>
import { ref, onMounted } from 'vue'

const pElementRef = ref(null)

onMounted(() => {
  // component is now mounted.
  pElementRef.value.textContent = 'mounted!'
})
</script>

<template>
  <p ref="pElementRef">hello</p>
</template>
```
