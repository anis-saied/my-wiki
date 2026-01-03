---
title: Signal
slug: /dev/angular/Signal
sidebar_position: 9
last_update:
  date: 2026-01-03
  author: Anis
---

# Signal

nouveauté Angular 16+

Un signal est comme une variable réactive : il garde une valeur courante, et notifie automatiquement les dépendants quand elle change.

Exemple :
```ts
const user = signal<User | null>(null);
user.set({ id: 1, name: 'Anis' });
```

C’est une alternative plus simple à **BehaviorSubject** pour gérer de l’état.
