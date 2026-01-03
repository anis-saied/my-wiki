---
sidebar_position: 7
title: Vue Directives
slug: /dev/vue/vue-directives
last_update:
  date: 2026-01-03
  author: Anis
---

# Vue JS Directives

A **directive** is a special attribute that starts with the `v-` prefix. 
- They are part of Vue's template syntax. 
- Similar to text  interpolations, directive values are JavaScript expressions that have  access to the component's state.

## v-bind : Attribute Bindings

To bind an attribute to a dynamic value, we use the `v-bind` directive:

The element's `id` attribute will be synced with the `dynamicId` property from the component's state.

```vue
<div v-bind:id="dynamicId"></div>
<div :id="dynamicId"></div>
```



example: add a dynamic `class` binding to the `<h1>`, using the `titleClass` ref as its value.

```vue
<script setup>
import { ref } from 'vue'

const titleClass = ref('title')
</script>

<template>
  <h1 :class="titleClass">Make me red</h1>
</template>

<style>
.title {
  color: red;
}
</style>
```

## class bindings

```html
const isRed = ref(true)
<p :class="{ red: isRed }" ></p>
<style>
.red {
  color: red;
}
</style>
```

## style bindings

```html
const color = ref('green')
<p :style="{ color }"></p>
```



## v-on : Event Listeners 

We can listen to DOM events using the `v-on` directive:
`increment` is referencing a function declared in `<script setup>`

```vue
<button v-on:click="increment">{{ count }}</button>
<button @click="increment">{{ count }}</button>

<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  // update component state
  count.value++
}
</script>
```

## v-model : two-way bindings on form input elements

Using `v-bind` and `v-on` together, we can create two-way bindings on form input elements

Old solution :

```vue
<input :value="text" @input="onInput">
function onInput(e) {
  // a v-on handler receives the native DOM event
  // as the argument.
  text.value = e.target.value
}
```

New solution :

```vue
<input v-model="text">
```

- `v-model` automatically syncs the `<input>`'s value with the bound state, so we **no longer need to use an event handler** for that.
- `v-model` works not only on text inputs, but also on other input types such as checkboxes, radio buttons, and select dropdowns.

Example

```vue
<script setup>
import { ref } from 'vue'

const text = ref('')
</script>

<template>
  <input v-model="text" placeholder="Type here">
  <p>{{ text }}</p>
</template>
```

## v-if : Conditional Rendering 

```vue
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

- This `<h1>` will be rendered only if the value of `awesome` is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).
- If `awesome` changes to a [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value, it will be removed from the DOM.
- We can also use `v-else` and `v-else-if` to denote other branches of the condition

example

```vue
<script setup>
import { ref } from 'vue'

const awesome = ref(true)

function toggle() {
  awesome.value = !awesome.value
}
</script>

<template>
  <button @click="toggle">toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
</template>
```

## v-for : List Rendering 

- use the `v-for` directive to render a list of elements based on a source array

``` vue
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

There are two ways to update the list:

1. Call [mutating methods](https://stackoverflow.com/questions/9009879/which-javascript-array-functions-are-mutating) on the source array:

```js
todos.value.push(newTodo)
```

2. Replace the array with a new one:

```js
todos.value = todos.value.filter(/* ... */)
```

**Syntax**

```html
const list = ref([1, 2, 3])
<li v-for="item of list">{{ item }}</li>
```
