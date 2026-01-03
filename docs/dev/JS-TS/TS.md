---
title: TS
slug: /dev/JS-TS/TS
sidebar_position: 3
last_update:
  date: 2026-01-03
  author: Anis
---



# Type script

**TypeScript:** is a superset of JavaScript that adds static typing and other features to enhance your development experience. It's particularly useful for larger projects and teams where type checking and strict contracts are important.



## interface
- une interface en TypeScript
- C’est un contrat de type : elle décrit à quoi doit ressembler un objet.
- Elle ne contient pas de logique → seulement la forme des données (clés + types).
- Utilisée pour avoir de l’auto-complétion et de la sécurité de typage.
- Peut être étendue (héritage/combinaison). 

👉 Exemple :
```ts
interface Car {
    [prop: string]: any;   // 👉 autorise des propriétés supplémentaires
  id?: number | string | null;
  brand: string; // obligatoire
  year?: number; // optionnel
}
```

- Un objet Car doit avoir une brand, et peut avoir year.
- peut avoir d’autres propriétés non listées explicitement: `[prop: string]: any;`
  - example: `car.color ='red'`
  - même si color n’est pas défini dans l’interface.
- L’id est optionnel (?), et peut être un number, un string, ou null.


- interface → utilise extends (héritage classique).
```ts
interface A { a: string; }
interface B extends A { b: number; }   // héritage interface
```

- interface peut être redéclarée plusieurs fois → elles se fusionnent.
```ts
// ✅ interfaces se fusionnent
interface User { id: number; }
interface User { name: string; }
const u: User = { id: 1, name: "Anis" };
```
