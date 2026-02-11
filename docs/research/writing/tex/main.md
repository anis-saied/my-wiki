---
title: main.tex
slug: /research/writing/tex/main
sidebar_position: 2
last_update:
  date: 2026-01-31
  author: Anis
---

# main.tex

## La structure type d'un fichier source TeX

Pour que votre projet soit conforme aux standards professionnels, le fichier main.tex doit toujours ressembler à ce schéma :

```tex
% 1. DÉCLARATION (Indéplaçable)
\documentclass[...]{book} 

% 2. CONFIGURATION (Externalisée)
\input{config/all_configs}

% 3. CONTENU (Externalisé)
\begin{document}
   \input{...}
\end{document}
``` 

### 1. DÉCLARATION