---
title: Vue Production Mode
slug: /dev/vue/vue-production-mode
sidebar_position: 11
last_update:
  date: 2026-01-03
  author: Anis
---

# Vue Production mode

## Configure Vue Js App for production mode
update `main.js`

```js
Vue.config.productionTip = false;
```

sert à
- désactiver les messages de conseil (d'astuce) de production dans la console du navigateur. 
- lorsque vous êtes prêt à déployer votre application en mode production (lorsque **process.env.NODE_ENV ** est défini sur "*production*"), vous pouvez désactiver ces messages d'astuce, car ils ne sont généralement pas nécessaires pour les utilisateurs finaux et peuvent compromettre la sécurité de votre application.

- utilisation :

```js
if (process.env.NODE_ENV === 'production') {
  // Désactiver les messages d'astuce de Vue en mode production
  Vue.config.productionTip = false;

  // D'autres optimisations spécifiques à la production
}
```
