---
title: Tex
slug: /research/writing/tex/tex
sidebar_position: 2
last_update:
  date: 2026-01-03
  author: Anis
---

# TeX

Commonly used for high-quality document preparation and formatting.

It is widely utilized in

- academic and scientific publishing,
- particularly for documents containing complex mathematical equations and technical content.

**LaTeX** is a different markup language built on top of **TeX**, it is widely used for document preparation.

## Documentation

- [TeX Users Group](http://www.tug.org/) provides history, and resources for users, links to various TeX distributions and community forums.
- [TeX Stack Exchange](https://tex.stackexchange.com/) is a Q&A platform where you can ask questions, seek help, and share your knowledge about TeX and related tools like LaTeX and ConTeXt.

### Books

- **The TeXbook** is the definitive guide to TeX, written by its creator, Donald Knuth. It provides an in-depth understanding of TeX's core principles and syntax.
- **TeX by Topic**
- [LaTeX Wikibook](https://en.wikibooks.org/wiki/LaTeX) offers extensive documentation on LaTeX

## Editors

### Linux Editors

- **TexStudio**

### Online editors

## Packages

- [CTAN](https://ctan.org/)
  - is a repository of TeX-related packages, fonts, and documentation.
  - It's a valuable resource for finding and downloading additional packages to extend TeX's functionality.

## compiler avec VsCode

- installer LaTeX (MikTeX, TeX Live, MacTeX)
- installer l'extension LaTeX Workshop
- configurer le fichier settings.json de VsCode: Vous devez dire à VS Code d'utiliser `latexmk`
  - Ouvrez les réglages ( Ctrl + , ).
  - Cherchez "JSON" et cliquez sur Edit in `settings.json`.
  - Ajoutez (ou vérifiez) cette configuration :

```json
"latex-workshop.latex.recipes": [
    {
        "name": "latexmk 🔃",
        "tools": ["latexmk"]
    }
],
"latex-workshop.latex.tools": [
    {
        "name": "latexmk",
        "command": "latexmk",
        "args": [
            "-synctex=1",
            "-interaction=nonstopmode",
            "-file-line-error",
            "-pdf",
            "-outdir=%DIR%/build", // Envoie les fichiers inutiles dans le dossier build
            "%DOC%"
        ]
    }
]
```

Note : L'option `-outdir=%DIR%/build` est géniale car elle garde votre dossier PROJET_MANUEL tout propre en déplaçant les fichiers .aux, .log, etc., dans le dossier `build/` que nous avons créé.

- Désigner le "Root File" (Le fichier maître)
  C'est l'étape la plus importante pour votre structure. Comme vous allez travailler dans des sous-fichiers (ex: 02_cours.tex), VS Code doit savoir que c'est main.tex qu'il faut compiler, et non le petit fichier ouvert.

Ajoutez cette ligne tout en haut de chaque fichier .tex de vos chapitres :

Code snippet
% !TeX root = ../../../main.tex
(Ajustez le nombre de ../ selon la profondeur du fichier).

4. Lancer la compilation
   Ouvrez votre fichier main.tex.

Cliquez sur l'icône TEX dans la barre latérale gauche.

Sous Build LaTeX project, cliquez sur la recette latexmk.

Pour voir le résultat, cliquez sur l'icône "Loupe" (View LaTeX PDF) en haut à droite.
