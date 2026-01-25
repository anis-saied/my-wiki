## content

## files

### Fichiers Markdown (.md / .mdx)

- Ajouter le frontmatter (title, sidebar_position) aux fichiers .md

```md
---
title: Applications numériques
sidebar_position: 1
---
```

### **_category_.json**

- Contenu minimal recommandé des `_category_.json`

```json
{
  "label": "Informatique",
  "position": 1,
  "collapsible": false
}
```

## Liens

Les liens doivent être

- **Relatifs** depuis la racine **/docs**
- **Absolus** : commencent par `/` et suivent **BaseURL**.
- Ne mets pas de / ou d’espace en trop.
- Les liens doivent correspondre exactement aux fichier existant.

Exemple:

Pour le lien `/intro` doit pointer soit vers un fichier MDX ou Markdown sous

- `/docs/intro/index.mdx`
- `/docs/intro/index.md`
- `/docs/intro.md`
- `/docs/intro.mdx`

### chemins absolus
- `/` → base de **BaseURL** configurée dans `docusaurus.config.ts`.
- Si le fichier est .md / .mdx → /baseURL/docs/.  
  - Exemple : /test → /baseURL/docs/test.md
- Sinon → /baseURL/static/.
  - Exemple : /img/test.png → /baseURL/static/img/test.png