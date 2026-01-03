---
title: Ng Matero
slug: /dev/angular/ng-matero
sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

# ng-matero

- une librairie basée sur Angular Material pour construire des backoffices rapidement
- Ng-Matero = template d’admin Angular basé sur Angular Material + CDK.

## official website

- documentation: https://nzbin.gitbook.io/ng-matero
- demo: https://ng-matero.github.io/ng-matero/
- 

## 🔧 Installation
**Ajouter la template ng-matero à un projet existant**

The project has support `ng add` yet.

```bash
ng new <project-name>
cd <project-name>
ng add ng-matero
```

Lancer le serveur : `ng serve --port 4300`

## Add transaltion

fr-FR

## Add page

Exemple : Génère un nouveau composant pour ta page, par exemple reports

1. créer une page Reports dans src/app/routes/reports/
   - `ng generate component routes/reports --flat=false --standalone --skip-tests `
    Options :
    * `--standalone` → crée un composant autonome, compatible avec le lazy loading de ng-matero.
    * `--flat=false` crée un dossier reports avec tous les fichiers nécessaires (.ts, .html, .scss)

2. Ajouter la route
   - Dans ng-matero, les routes sont définies dans `src/app/app.routes.ts`.
3. Ajouter le menu dans le SideNav

   1. Le menu se trouve dans `public/data/menu.json`

   ```js
   {
    "route": "reports",
    "name": "reports",
    "type": "link",
    "icon": "analytics"
   }
   ```

4. Si tu utilises plusieurs langues, ajoute aussi la clé dans ton fichier i18n :`public/i18n/fr-FR.json`
   `"menu": { "reports": "Rapports"}`

## Conventions Ng-Matero

- `pages/` → vues principales (pages routées).
- `shared/` → composants réutilisables (boutons, modals).
- `core/` → services globaux (auth, API).
- `theme/` → styles globaux.

Conventions de noms similaires à Angular mais avec `page.ts` pour les vues.
