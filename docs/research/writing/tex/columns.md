---
title: Columns
slug: /research/writing/tex/columns
sidebar_position: 6
last_update:
  date: 2026-02-01
  author: Anis
---

# columns
tu n’as pas besoin de package supplémentaire pour utiliser \begin{columns} et \begin{column} dans Beamer.

✅ Aucune ligne `\usepackage{…}` n’est nécessaire pour les colonnes.
## Détails

Les environnements **columns** et **column** sont inclus nativement dans **Beamer**.

Il suffit donc de déclarer ta diapo comme d’habitude :
```latex
\begin{frame}{Titre}
\begin{columns}[T]
    \begin{column}{0.5\textwidth}
        Contenu gauche
    \end{column}
    \begin{column}{0.5\textwidth}
        Contenu droite
    \end{column}
\end{columns}
\end{frame}
```
### Positionnement vertical des colonnes
- Alignement vertical :
```latex
\begin{columns}[T] % top align
\begin{columns}[c] % center align
\begin{columns}[b] % bottom align
```

- Largeur flexible

`0.5\textwidth`, `0.6\textwidth`, etc. La `somme ≤ 1.0` pour éviter les débordements.

- Contenu supporté

Dans les colonnes tu peux mettre : texte, itemize, images (`\includegraphics`), tableaux, TikZ, minted, etc.