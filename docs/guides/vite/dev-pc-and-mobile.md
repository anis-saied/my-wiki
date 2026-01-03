---
title: Dev Pc And Mobile
slug: /guides/vite/dev-pc-and-mobile
sidebar_position: 2
last_update:
  date: 2026-01-03
  author: Anis
---

# Dev PC and Mobile

L'objectif est de tester ton app directement sur ton mobile comme si elle était déployée.

## quelques vérifications et configuration sur ubuntu

### ip adresses

- Vérifier que ton téléphone et ton PC sont sur le même réseau :
  - Connecte ton téléphone et ton PC au même Wi-Fi.
  - Vérifie l’adresse IP de ton PC avec : `ip a`

→ Regarde l’IP locale (exemple : 192.168.43.162).

### problems of firewalls

#### Gérer les problèmes de firewall

Si tu ne peux pas accéder depuis le téléphone, c’est peut-être qu’Ubuntu bloque les connexions.

Ouvrir uniquement quand tu testes sur mobile

- Avant de tester :

```bash
sudo ufw allow 8080
sudo ufw allow 8000
```

- Avant de tester :
-

```bash
sudo ufw deny 8080
sudo ufw deny 8000
```

👉 Maintenant, tu pourras tester ton app directement sur ton mobile comme si elle était déployée.

voir `ufw --help` pour désactiver ces ports ou autres choses.

Si tu es chez toi sur un Wi-Fi privé → risque faible, mais ouvre les ports uniquement pour ton sous-réseau (192.168.43.0/24) au lieu de tout le monde.

Si tu es sur un réseau partagé/public → ne les ouvre pas, passe plutôt par un tunnel (ngrok, localtunnel)

**Bonnes pratiques pour limiter les risques**

- Restreindre l’accès à ton réseau local seulement

Tu peux préciser une IP ou une plage :

```bash
sudo ufw allow from 192.168.43.0/24 to any port 8080
sudo ufw allow from 192.168.43.0/24 to any port 8000
```

👉 Ici, seules les machines de ton réseau Wi-Fi (192.168.43.x) pourront accéder.

## lancer serveur PHP

Si tu utilises le serveur PHP intégré `php -S 0.0.0.0:8080 -t public` (_public_ étant le dossier où se trouve ton index.php).

Ton backend sera alors dispo sur : `http://192.168.43.162:8080/`

Ouvre ton navigateur mobile.

Tape l’adresse IP de ton PC avec le bon port :

Backend PHP → `http://192.168.43.162:8080/`

## Lancer ton serveur Vue.js accessible sur le réseau

Par défaut, `npm run dev` (dev or serve,...) expose ton app seulement sur `localhost`.
Tu dois le lancer avec l’option `--host` :

```bash
npm run serve -- --host 0.0.0.0
```

👉 Ça va rendre l’app accessible depuis l’extérieur (même réseau local).
Ton terminal affichera une URL du type :

```bash
  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.43.162:5173/
```

Utilise l’adresse réseau (http://192.168.43.162:5173/) sur ton téléphone.

## choix de mode de démarrage de projet

tu peux démarrer ton projet Vue/Vite en choisissant si tu veux l’exposer uniquement sur localhost (pour dev rapide sur PC) ou bien sur ton IP locale (pour tester sur mobile), sans toucher ton code.

Exemple d'usage:

- `npm run dev` → API sur localhost
- `npm run dev --mode lan` → API sur IP locale + accessible depuis ton téléphone

### Étape 1 : create 2 .env files

Tu peux avoir :

- `.env.development` → pour bosser tranquille sur ton PC (backend en localhost)
- `.env.mobile` → pour tester en temps réel sur ton téléphone (backend en IP locale)

et tu choisis au moment de npm run dev quel mode utiliser.

`.env.development`

```bash
BASE_URL=http://localhost:5173/
VITE_API_URL=http://localhost:8080/api
```

`.env.mobile`

```bash
BASE_URL=http://192.168.43.162:5173/
VITE_API_URL=http://192.168.43.162:8080/api
```

### Étape 2 : Adapter ton vite.config.js

Ajoute `server.host` selon le mode :

```js
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [vue(), vueDevTools()],
    server: {
      host: mode === "mobile" ? "0.0.0.0" : "localhost", // 👈
      port: 5173,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/global.scss" as *;`,
          includePaths: [path.resolve(__dirname, "src")],
        },
      },
    },
    define: {
      __API__: JSON.stringify(env.VITE_API_URL),
    },
  };
});
```

### Étape 3 : Utiliser la variable dans ton code Vue

```ts
import axios from "axios";

const api = axios.create({
  baseURL: __API__,
});

export default api;
```

### Étape 4 : Ajouter les scripts npm

Dans `package.json` :

```json
"scripts": {
  "dev": "vite --mode development",
  "dev:mobile": "vite --mode mobile"
}
```

### Résultat

Sur PC : `npm run dev`

→ frontend accessible seulement sur `localhost:5173`, backend en `http://localhost:8080/api`.

Sur mobile : `npm run dev:mobile`

→ frontend exposé sur `http://192.168.43.162:5173`, backend en `http://192.168.43.162:8080/api`.
