---
title: Config
slug: /guides/static-website/docusaurus/config
sidebar_position: 1
last_update:
  date: 2026-01-03
  author: Anis
---

# Config Docusaurus

## docusaurus.config.js

### onBrokenLinks

values :

- **warn**:
  - pour seulement avertir,
  - ignore les liens cassés pour le build,
  - le site compilera, mais le lien restera cassé.
- **ignore**
  - je recommande de corriger les liens, pas de les ignorer, sinon le site restera incomplet.

### onBrokenMarkdownLinks

values :

- **warn**:
  - pour seulement avertir
