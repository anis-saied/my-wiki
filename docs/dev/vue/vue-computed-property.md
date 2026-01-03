---
title: Vue Computed Property
slug: /dev/vue/vue-computed-property
sidebar_position: 3
last_update:
  date: 2026-01-03
  author: Anis
---

# Computed Property 

- create a computed ref that computes its `.value` based on other reactive data sources
- A computed property tracks other reactive state used in its computation  as dependencies. 
- It caches the result and automatically updates it when  its dependencies change.

```js
const filteredTodos = computed(() => {
  // return filtered todos based on
  // `todos.value` & `hideCompleted.value`
  return hideCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
})
```
