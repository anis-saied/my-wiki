---
sidebar_position: 5
title: Vue Definitions
slug: /dev/vue/vue-definitions
last_update:
  date: 2026-01-03
  author: Anis
---

# Vue JS Definitions

Single-File Components, Options API vs Composition API, Features, ...
## Single-File Components 

**Single-File Component** (also known as `*.vue` files, abbreviated as **SFC**). 

A Vue SFC, encapsulates the component's logic  (JavaScript), template (HTML), and styles (CSS) in a single file

## Options API vs Composition API

For production use:

- Go with Options API if you are  not using build tools, or plan to use Vue primarily in low-complexity  scenarios, e.g. progressive enhancement.
- Go with Composition API + Single-File Components if you plan to build full applications with Vue.

## Options API 

- the Options API is implemented on top of the Composition API
- centered around the concept of a "component instance" (`this`), which typically aligns better with a  class-based mental model for users coming from OOP language backgrounds. 

## Composition API

In SFCs, Composition API is typically used with  `setup` attribute

For example,  imports and top-level variables / functions declared in `<script setup>` are directly usable in the template.

- requires an understanding of how reactivity works in Vue to be used effectively.

## Features

### Reactivity

- The core feature of Vue is **declarative rendering** : When the state changes, the HTML updates automatically.

- reactivity and declarative rendering.

- State that can trigger updates when changed are considered **reactive**. We can declare reactive state using Vue's `reactive()`

- `reactive()` only works on objects (including arrays and built-in types like `Map` and `Set`).

-  `ref()`, on the other hand, can take any value type and create an object that exposes the inner value under a `.value` property

- Reactive state declared in the component's `<script setup>` block can be used directly in the template.

- we did not need to use `.value` when accessing the `message` ref in templates 

- mustaches `{{}}`are only used for text interpolation.

  Example :

  ```vue
  import { ref } from 'vue'
  const message = ref('Hello World!')
  <h1>{{ message }}</h1>
  <h1>{{ message.split('').reverse().join('') }}</h1>
  ```
