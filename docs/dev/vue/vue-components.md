---
sidebar_position: 2
title: Vue Components
slug: /dev/vue/vue-components
last_update:
  date: 2026-01-03
  author: Anis
---

# Vue JS Components

A *Parent* can pass to *child*
  - **data** : via **props**
  - **template** : via **slots**

A *child* can pass to *parent*
  - **data** : via **emits**
   

## Props

pass data from parent to child

A child component can accept input from the parent via **props**. 

First, (the ChildComp.vue) it needs to declare the props it accepts:

```vue
<!-- ChildComp.vue -->
<script setup>
const props = defineProps({
  msg: String
})
</script>
```

- Note `defineProps()` is a compile-time macro and doesn't need to be imported. 

- Once declared, the `msg` prop can be used in the child component's template. 
- It can also be accessed in JavaScript via the returned object of `defineProps()`.

- The parent can pass the prop to the child just like attributes. 
- To pass a dynamic value, we can also use the `v-bind` syntax:

```html
<ChildComp :msg="greeting" />
<ChildComp :msg="'simple text'" />
```

## Emits 

pass data from child to parent

In addition to receiving props, a child component can also emit events to the parent

```vue
<script setup>
// declare emitted events
const emit = defineEmits(['response'])

// emit with argument
emit('response', 'hello from child')
</script>
```

- The first argument to `emit()` is the event name. 

- Any additional arguments are passed on to the event listener.

- The parent can listen to child-emitted events using `v-on` - here the handler receives the extra argument from the child emit call and assigns it to local state:

```html
<ChildComp @response="(msg) => childMsg = msg" />
```

## Slots

In addition to passing data via props, the parent component can also pass down template fragments to the child via **slots**:

```html
<ChildComp>
  This is some slot content!
</ChildComp>
```

In the child component, it can render the slot content from the parent using the `<slot>` element as outlet:

```html
<!-- in child template -->
<slot/>
```

Content inside the `<slot>` outlet will be treated as "fallback" content: it will be displayed if the parent did not pass down any slot content:

```html
<slot>Fallback content</slot>
```

Example :

parent: 

```vue
<script setup>
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'

const msg = ref('from parent')
</script>

<template>
  <ChildComp>content {{msg}}</ChildComp>
</template>
```

child

```vue
<template>
  <slot>Fallback content</slot>
</template>
```

result :

```tex
content from parent
```
