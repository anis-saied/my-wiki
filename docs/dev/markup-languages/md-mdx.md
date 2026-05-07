---
title: Markdown (.md / .mdx)
slug: /dev/markup-languages/md-mdx
sidebar_position: 1
last_update:
  date: 2026-01-03
  author: Anis
---

# MD - MDX (Markdown + JSX)

## Markdown

Commonly used for creating documentation, README files, and basic content on websites.

### Example

Example of Markdown syntax:

```markdown
# Heading 1

## Heading 2

- List item 1
- List item 2

[Link](https://example.com)
```

### Documentation

- [documentation](https://daringfireball.net/projects/markdown/)
- [Markdown: Syntax](https://daringfireball.net/projects/markdown/syntax)
- [Front Matter](https://jekyllrb.com/docs/front-matter/)
- [Markdown Cheatsheet](https://markdown.space/cheatsheet)
- [Markdown on wikipedia](https://en.wikipedia.org/wiki/Markdown)

### VS Code Extensions

- Markdown All in One : édition Markdown
- Markdown Preview Enhanced
- GitHub Markdown Preview: pack of markdown tools
  - Markdown Preview Github Styling
  - Markdown Emoji
  - Markdown Checkboxes
  - Markdown yaml Preamble
  - Markdown Footnotes
- Quarto: pour le domaine scientifique

### Editors

#### Linux Editors

- **Typora** : to edit md files.
  - File / open folder : to show files tree in sidebar

#### Online MD editor

- [https://marked.js.org/demo/](https://marked.js.org/demo/)

- [commonmark.js dingus](https://spec.commonmark.org/dingus/)

- [Daring Fireball (pedantic) Demo](https://daringfireball.net/projects/markdown/dingus)

### Packages

JS Packages for Markdown

- [marked](https://www.npmjs.com/package/marked): lets you convert Markdown into HTML.

### NOTES

- `.md` = Markdown pur
- Aucun JavaScript
- Aucun `import` => `.mdx` Autorise `import`

## Markdown + JSX

MDX (Markdown + JSX) is an extension of Markdown that allows you to embed JSX (JavaScript XML) components within Markdown content.

Ideal for creating

- dynamic content,
- interactive documentation,
- and integrating components into documentation or blog posts.

Ne mets pas de / ou d’espace en trop. Les liens doivent correspondre exactement aux fichiers existants.

### Example

Example of MDX syntax:

```markdown
# Welcome to My Blog

This is some _Markdown_ text.

<Button onClick={() => alert('Clicked!')}>Click Me</Button>
```

### Documentation

- [documentation](https://mdxjs.com/)
- [MDX github repository](https://github.com/mdx-js/mdx/)

### NOTES

- `.mdx` = Markdown + JSX
- Autorise `import`
- Autorise les **composants React**
- Recommandé par **Docusaurus** pour les cas avancés

### Liens

- Utiliser JSX `<a>` avec **useBaseUrl**

```mdx
import useBaseUrl from "@docusaurus/useBaseUrl";

<a
  href={useBaseUrl("/ressources/info/file.pdf")}
  target="_blank"
  rel="noopener noreferrer"
>
  file PDF
</a>
```

Note: Tu ne peux pas utiliser **useBaseUrl** dans `[]()` dans un fichier Markdown **.md**.

## frontmatter

### slug

on peut avoir un slug personnalisé, par exemple :

```md
slug: /informatique/poo/plan
```

- Si tu utilises un slug dans le frontmatter, le lien doit pointer exactement sur ce slug.
- Le lien depuis une autre page doit correspondre exactement à ce slug.
- utilisation du slug: Les liens doivent être relatifs à la racine /docs ou absolus depuis /docs.

```md
[poo](/informatique/poo/plan)
```

- Si ce slug n’est pas défini, Docusaurus utilise le chemin du fichier.
