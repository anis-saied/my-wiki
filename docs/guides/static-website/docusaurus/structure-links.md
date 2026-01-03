---
title: Structure of How To Wiki
slug: /guides/static-website/docusaurus/structure-links
sidebar_position: 1
last_update:
  date: 2026-01-03
  author: Anis
---

# HOW TO WIKI

## Structure

Cette structure est stable, scalable, et compatible avec un usage professionnel long terme.

```pgsql
/
├── docs/
│   ├── intro.md
│   ├── fundamentals/
│   ├── how-to/
│   ├── guides/
│   ├── references/
│   ├── troubleshooting/
│   └── glossary/
│
├── versioned_docs/
├── versioned_sidebars/
├── sidebars.js
├── docusaurus.config.js
└── README.md
```

- fundamentals
  - Présenter les bases communes à tous les projets.
  - Très peu de changements dans le temps → liens ultra-stables.
- how-to

  - Une page = une procédure.
  - Titre impératif : How to …
  - Pas de pages trop longues.
  - front-matter obligatoire, Même si tu déplaces le fichier, l’URL ne change pas.
  - exemple

    ```md
    ---

    title: Create a REST API
    slug: /how-to/backend/create-rest-api
    ```

- references
  - Références techniques
  - Utilisée comme source canonique par les packages.
- Troubleshooting
  - URLs très stables, souvent référencées dans les logs ou README.
- Glossaire
  - Utile pour les nouveaux arrivants et les liens internes.

### Noms des fichiers

- facile pour la navigation
- utile pour la stabilité long terme

```pgsql
docs/
├── intro.md
├── fundamentals/
├── how-to/
├── guides/
├── reference/
├── troubleshooting/
├── glossary/
├── ecosystem/
├── tools/
├── languages/
├── web/
├── devops/
└── project-management/
```

## Versionnement (indispensable pour les packages)

- Active le versionnement dès le départ
- Même si tu n’as qu’une version au départ.
- Cela protège les références des packages.

```bash
npx docusaurus docs:version 1.0
```

Cela crée :

```bash
versioned_docs/version-1.0/
versioned_sidebars/version-1.0-sidebars.json
```

Résultat :

```bash
/docs/1.0/how-to/backend/create-rest-api
```

➡ Les packages doivent TOUJOURS pointer vers `/docs/1.0/...`

### Cycle normal de travail

Tu travailles toujours dans `docs/` → **current**

Quand **current** devient **stable** → tu **gèles**

```bash
npx docusaurus docs:version 1.1
```

Résultat :

- 1.0 reste intact
- 1.1 devient la nouvelle référence
- current redevient instable

➡ toujours la version en cours est instable; une fois devient stable, passer à une autre version non stable

## liens

**Règle d’or** :

- Un lien public ne disparaît jamais.
- Il est soit vivant, soit redirigé.-

**Jamais** :

- Lien vers current
- Lien sans version
- Lien vers un fichier .md

**URLs orientées concepts, pas organisation** :

- Les URLs ne doivent pas dépendre de l’arborescence physique.
- Les titres peuvent évoluer, pas les slugs.

**Slugs explicites et figés** :

- Toujours définir **slug**: manuellement dans le front-matter.
- Ne jamais laisser Docusaurus générer les URLs automatiquement.

**Redirections systématiques** :

- Toute page déplacée ou renommée doit conserver une redirection permanente.

### Référencement depuis les packages

Comment un **package** doit référencer la doc ?

```bash
https://<org>.github.io/<repo>/docs/1.0/how-to/backend/api
```

**Jamais** :

- /current
- /docs/how-to/...
- lien vers GitHub .md

Bon format recommandé dans les **README** / **docstrings** :

```md
Documentation officielle :
https://<org>.github.io/docs/1.0/how-to/backend/create-rest-api
```
