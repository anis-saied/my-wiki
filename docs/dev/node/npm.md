---
title: Npm
slug: /dev/node/npm
sidebar_position: 1
last_update:
  date: 2026-01-03
  author: Anis
---

# npm

## commandes
- `npm install` Installation des dépendances du projet avec mise à jour de *package.json*.
  - `npm install --legacy-peer-deps` Installer en ignorant les peer dependencies strictes (rapide/test)
- `npm ci` 
  - Installation des dépendances du projet sans mettre à jour *package.json*.
  - npm ci ne peut fonctionner que s’il existe un fichier `package-lock.json` dans ton projet.
  - La commande `npm ci (clean install)` est conçue pour installer exactement les dépendances enregistrées dans `package-lock.json`
- `npm update` 
  - Mettre à jour toutes les dépendances
  - Mise à jour des packages mineurs et patchs selon ton package.json.
  - chercher des versions plus récentes compatibles et *mettre à jour le lock file*.
  - `npm update package-name` Mettre à jour un package spécifique 
- `npm outdated` montre clairement les packages qui ont des versions plus récentes
  - “Current” = version installée
  - “Wanted” = version compatible selon ton *package.json*
  - “Latest” = toute dernière version disponible
- `npm install package-name@latest` forcer la mise à jour même si la version majeure change (attention, risque de breaking changes)
- `npm audit` Identifier les dépendances problématiques
  - voir uniquement le rapport de vulnérabilités
  - `npm audit fix` 
    - Met à jour les dépendances vulnérables dans la mesure du possible sans casser les versions majeures (respect du package.json).
    - Modifie ton *package-lock.json* pour refléter les mises à jour.
    - Installe les nouvelles versions corrigées.
  - `npm audit fix --force` forcer la mise à jour même avec breaking changes,risque de casser ton code.

## peer dependencies
Une peer dependency (dépendance parente) est une **dépendance que ton package n’installe pas lui-même, mais qu’il attend que le projet hôte fournisse.

Elle est déclarée dans le package.json d’un package via la clé "peerDependencies".

Cela signifie : “Pour que je fonctionne correctement, le projet qui m’installe doit avoir cette dépendance installée, et dans une version compatible”.

Les peer dependencies sont comme des “pré-requis” que ton projet doit fournir pour que la bibliothèque fonctionne correctement, surtout pour éviter d’avoir plusieurs copies d’Angular dans un projet.

Supposons que tu crées une bibliothèque Angular :

```json
{
  "name": "my-angular-lib",
  "peerDependencies": {
    "@angular/core": "^20.0.0",
    "@angular/common": "^20.0.0"
  }
}
```

Cela indique que la bibliothèque ne fournit pas Angular elle-même.

Le projet qui installe my-angular-lib doit déjà avoir Angular installé.

Cela évite d’installer plusieurs versions différentes d’Angular dans le même projet, ce qui provoquerait des erreurs.

- `npm view <package-name> versions`, tu vois toutes les versions disponibles.
  - example: `npm view @ng-matero/extensions-date-fns-adapter versions` voir les versions disponibles
  - on trouve les versions d’Angular supportées 
    - dans leur README ou CHANGELOG.
    - ou dans le fichier `package.json` du package sur npm ou sur GitHub et cherche `"peerDependencies"` 
    - Vérifie le README / changelog.
    - Regarde les peerDependencies.
    - Utilise `npm info <package> peerDependencies`.
    - Choisis la version du package qui correspond à ton Angular major.

### Comment gérer ces erreurs de peer dependency

- Vérifie quelle version de ton projet correspond au peer dependency.
- Ajuste soit la version du package, soit la version du projet Angular.
- Tu peux forcer l’installation avec --legacy-peer-deps mais ça peut casser la compatibilité.

### Différence avec dependencies et devDependencies
| Type de dépendance | Installée par npm?                | Utilisation principale                                   |
| ------------------ | --------------------------------- | -------------------------------------------------------- |
| `dependencies`     | ✅ Oui                             | Nécessaire pour exécuter l’application en production     |
| `devDependencies`  | ✅ Oui                             | Nécessaire pour le développement (tests, build, lint…)   |
| `peerDependencies` | ❌ Non, fournie par le projet hôte | S’assurer que le projet hôte a une dépendance compatible |
