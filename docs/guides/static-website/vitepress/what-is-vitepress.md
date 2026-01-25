---
title: What is vitepress
slug: /guides/static-website/vitepress
sidebar_position: 1
last_update:
  date: 2026-01-11
  author: Anis
---

- content written in markdown + apply theme => generate static html page
- default theme designed for technical documentation.
- each Markdown page is also a Vue Single-File Component.
- [what-is-vitepress](https://vitepress.dev/guide/what-is-vitepress)
- VitePress is the spiritual successor of VuePress 1.

## create a vitepress site

- install vitepress `npm install -D vitepress`
- create the site inside de the `my-project/docs`

```bash
cd my-project
npx vitepress init docs
```

- Make sure to add `docs/.vitepress/dist` and `docs/.vitepress/cache` to your `.gitignore` file.

- run the site in dev mode

```bash
npm run docs:dev
```

## structure of vitePress site

- **.vitepress**: a directory reserved for

  - VitePress' config file
  - dev server cache inside `.vitepress/cache` folder
  - the production build output in `.vitepress/dist`
  - and optional theme customization code.

- **The Config File**: `.vitepress/config.js`
- **Source Files** :
  - Markdown files outside the `.vitepress` directory are considered **source files**.
  - VitePress uses **file-based routing**: each `.md` file is compiled into a corresponding `.html` file with the same path.
    - For example, `index.md` will be compiled into `index.html`

## configure VitePress

### convertir le code Mermaid en SVG avec VitePress

plugin: **vitepress-mermaid-preview**

- follow details for install and configure and use of mermaid with vitePress in [vitepress-mermaid-preview](https://www.npmjs.com/package/vitepress-mermaid-preview)

```bash
npm install vitepress-mermaid-preview --save-dev
```

Configurer VitePress `.vitepress/config.ts` (ou `config.js`) :

- Register the global component in `.vitepress/theme/index.ts`

  - create this file if not exist

- VitePress enveloppe les graphes Mermaid dans une classe `.mermaid`.
  autre plugin:

- [vitepress-plugin-mermaid](https://github.com/emersonbottero/vitepress-plugin-mermaid)
  - [https://emersonbottero.github.io/vitepress-plugin-mermaid/](https://emersonbottero.github.io/vitepress-plugin-mermaid/)
- [VitePress Mermaid Renderer](https://vitepress-mermaid-renderer.sametcc.me/)

## custom Theme

- Ajoutez (ou créez) ce fichier dans `.vitepress/theme/custom.css`
- N'oubliez pas d'importer ce CSS dans votre `.vitepress/theme/index.ts`
