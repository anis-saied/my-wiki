---
title: Vue Watchers
slug: /dev/vue/vue-watchers
sidebar_position: 14
last_update:
  date: 2026-01-03
  author: Anis
---

# Watchers

Sometimes we may need to perform "side effects" reactively - We can achieve this with watchers

- for  example, 

  - logging a number to the console when it changes. 

  - fetching new data when an ID changes. 

- `watch()` can directly watch a ref, and the callback gets fired whenever `count`'s value changes. 
- `watch()` can also watch other types of data sources - more details are covered in [Guide - Watchers](https://vuejs.org/guide/essentials/watchers.html).

Example :

```vue
<script setup>
import { ref, watch } from 'vue'

const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  todoData.value = await res.json()
}

fetchData()

watch(todoId, fetchData)
</script>

<template>
  <p>Todo id: {{ todoId }}</p>
  <button @click="todoId++">Fetch next todo</button>
  <p v-if="!todoData">Loading...</p>
  <pre v-else>{{ todoData }}</pre>
</template>
```
