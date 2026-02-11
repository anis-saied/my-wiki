---
title: graphics
slug: /research/writing/tex/graphics
sidebar_position: 3
last_update:
  date: 2026-02-01
  author: Anis
---

# Graphics in LaTeX

## Insérer des images avec \includegraphics

To include images in your LaTeX document, you can use the `graphicx` package, which provides the `\includegraphics` command. Here is a basic example of how to use it:

```latex
\documentclass{article}
\usepackage{graphicx}
\begin{document}
\begin{figure}[h]
    \centering
    \includegraphics[width=0.5\textwidth]{example-image}
    \caption{An example image}
    \label{fig:example}
\end{figure}
\end{document}
```

**Les options les plus utiles**

| Option | Description        | Exemple                          |
| ------ | ------------------ | -------------------------------- |
| width  | Définit la largeur | width=5cm ou width=0.8\textwidth |
| height | Définit la hauteur | height=3cm                       |
| scale  | Échelle (zoom)     | scale=0.5 (réduit de moitié)     |
| angle  | Rotation           | angle=90                         |

:::tip
**Dossier d'images** : 

Si vous avez beaucoup d'images, créez un dossier `images/` et ajoutez ceci dans votre préambule : `\graphicspath{{images/}}`. 

Vous n'aurez plus à taper le chemin complet.
:::