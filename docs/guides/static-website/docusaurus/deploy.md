---
title: Deploy
slug: /guides/static-website/docusaurus/deploy
sidebar_position: 1
last_update:
  date: 2026-01-03
  author: Anis
---

# Deploy Docusaurus

## Deploy Docusaurus on Github pages

### configure before deploy

update the file : `docusaurus.config.ts`

- url: `"https://<your-org>.github.io/"`
- baseUrl: `"/<your-repo>/"`
- organizationName: `"<your-org>"` : Usually your GitHub org/user name.
- projectName: `"<your-repo>"` :Usually your repo name.
- deploymentBranch: `"gh-pages"`,
- onBrokenLinks: `"throw"`,

### deploy

**Note**: to deploy on gh-pages the github repository must be **public**

- check if the site run withour errors

```bash
npm run build
```

- create the file `.github/workflows/deploy.yml`

```bash
mkdir -p .github/workflows
touch .github/workflows/deploy.yml
```

add this content

```yml
name: Deploy Docusaurus to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  build-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build Docusaurus site
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
          # Force push en utilisant une branche orpheline
          # recrée une branche orpheline pour gh-pages, ce qui supprime tout ancien contenu.
          force_orphan: true
```

- push the repository

```bash
git push -u origin main
```

- configure the remote respoitory
  - go to `https://github.com/<your-org>/<your-project>/settings/pages`
  - then in the section : **Build and deployment**
    - **Source**: select from the select list: **deploy from a branch**
    - **Branch**: select from the select list: **gh-pages** and **/root**
  - then save

=> Your site is live at `https://<your-org>.github.io/<your-project>/`
