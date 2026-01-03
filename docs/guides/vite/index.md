# vite

## mode dev or production

Dans Vite, le mode (development, production, ou un mode personnalisé) est défini par :

1. La commande que tu exécutes

vite ou vite dev → lance le serveur en mode development par défaut.

vite build → lance le build en mode production par défaut.

vite preview → lance le serveur de preview avec le build production.

2. L’option `--mode`

Tu peux forcer un mode :

`vite build --mode staging`


👉 Ça dit à Vite : “utilise le mode staging”.
Les fichiers `.env.staging` seront chargés automatiquement.

3. Le paramètre mode dans `vite.config.js`

Dans ton fichier `vite.config.js`, tu as :
```ts
export default defineConfig(({ mode }) => {
  console.log("Mode actuel :", mode); // 'development' ou 'production'
  return {
    // config...
  };
});
```

Ici, Vite injecte automatiquement la valeur de mode en fonction de la commande lancée.

4. Les variables d’environnement

`.env.development` est chargé quand `mode=development`.

`.env.production` est chargé quand `mode=production`.

`.env.staging `si tu fais vite build `--mode staging`.

Tu y mets des clés comme :

`VITE_API_URL=https://api.dev.local`


Et tu y accèdes dans ton code via `import.meta.env.VITE_API_URL`.

✅ Donc :

En dev → vite = mode development.

En prod → vite build = mode production.

Tu peux aussi créer des modes personnalisés (staging, test, etc.) avec --mode.