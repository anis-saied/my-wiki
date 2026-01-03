---
title: Promise
slug: /dev/angular/Promise
sidebar_position: 6
last_update:
  date: 2026-01-03
  author: Anis
---

# Promise

Un `Promise<T>` contient une valeur future unique (au lieu d’un flux).

au lieu d’un User direct, on expose un **"futur User"**.

Ex :
```ts
const userPromise: Promise<User> = fetchUser();
```
