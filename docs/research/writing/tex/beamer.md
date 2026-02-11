---
title: Beamer
slug: /research/writing/tex/beamer
sidebar_position: 4
last_update:
  date: 2026-02-01
  author: Anis
---

# Beamer

Beamer is a LaTeX class for creating presentations. It provides a variety of features and packages to enhance the presentation experience. Here are some commonly used packages and tools for Beamer:

- **Beamer Themes**: Beamer comes with several built-in themes that can be used to change the appearance of your slides. You can also find additional themes online, such as [Beamer Theme Matrix](https://deic-web.uab.cat/~iblanes/beamer_gallery/index_by_theme.html).

## 1. Extensions spécifiques pour Beamer

| Nom                 | Fonction                                                      | Documentation (CTAN)                         | Alternative |
| :------------------ | :------------------------------------------------------------ | :------------------------------------------- | :---------- |
| **appendixbeamer**  | Exclut les diapositives d'annexe du décompte total            | [Lien](https://ctan.org/pkg/appendixbeamer)  | -           |
| **beamerposter**    | Extension pour créer des posters scientifiques                | [Lien](https://ctan.org/pkg/beamerposter)    | `baposter`  |
| **beamerdump**      | Accélère la compilation en "pré-compilant" le style           | [Lien](https://ctan.org/pkg/beamerdump)      | -           |
| **beamer-fuberlin** | Style spécifique pour une mise en page académique propre      | [Lien](https://ctan.org/pkg/beamer-fuberlin) | -           |
| **embedfile**       | Attache le code source ou des fichiers au PDF de présentation | [Lien](https://ctan.org/pkg/embedfile)       | -           |

---

## 2. Thèmes Beamer (Classiques et Modernes)

| Nom / Famille       | Style / Usage                                   | Documentation / Aperçu                                 | Particularité      |
| :------------------ | :---------------------------------------------- | :----------------------------------------------------- | :----------------- |
| **Metropolis**      | Minimaliste, moderne et plat (très populaire)   | [Lien](https://ctan.org/pkg/beamertheme-metropolis)    | Idéal pour la tech |
| **Focus**           | Ultra-minimaliste, réduit les distractions      | [Lien](https://ctan.org/pkg/beamertheme-focus)         | Contraste élevé    |
| **Progressbar**     | Ajoute une barre de progression discrète en bas | [Lien](https://ctan.org/pkg/beamertheme-progressbar)   | Visuel dynamique   |
| **Powerdot**        | Alternative complète à la classe Beamer         | [Lien](https://ctan.org/pkg/powerdot)                  | Plus ancien        |
| **Madrid / Warsaw** | Thèmes natifs "Old School" de Beamer            | [Guide](https://deic.uab.cat/~iblanes/beamer_gallery/) | Inclus par défaut  |
| **beamer-verona**   |                                                 | [Guide](https://ctan.org/pkg/beamer-verona)            |                    |

---

## 3. Interactivité et Multimédia dans Beamer

| Nom            | Fonction                                             | Documentation (CTAN)                  | Alternative |
| :------------- | :--------------------------------------------------- | :------------------------------------ | :---------- |
| **multimedia** | Inclusion de sons et vidéos (natif Beamer)           | [Lien](https://ctan.org/pkg/beamer)   | `media9`    |
| **ocg-p**      | Gestion des couches (layers) pour masquer du contenu | [Lien](https://ctan.org/pkg/ocg-p)    | `ocgx2`     |
| **animate**    | Création d'animations image par image dans le PDF    | [Lien](https://ctan.org/pkg/animate)  | -           |
| **mdframed**   | Création de blocs d'énoncés ou de théorèmes stylisés | [Lien](https://ctan.org/pkg/mdframed) | `tcolorbox` |

---

## 4. Outils pour l'Orateur (Speaker Tools)

| Nom               | Fonction                                               | Documentation (CTAN)                  | Alternative |
| :---------------- | :----------------------------------------------------- | :------------------------------------ | :---------- |
| **pgfpages**      | Affiche les notes sur un second écran (dual screen)    | [Lien](https://ctan.org/pkg/pgfpages) | -           |
| **pdfpc**         | Configuration pour le logiciel de présentation `pdfpc` | [Lien](https://pdfpc.github.io/)      | -           |
| **beamerarticle** | Génère un article (version texte) à partir des slides  | [Lien](https://ctan.org/pkg/beamer)   | -           |

## Inserting Code Listings in Beamer

- L'option [fragile] : Elle est obligatoire pour chaque frame contenant un environnement lstlisting.
- Suppression des tabulations : remplacer toutes les tabulations par des espaces (LaTeX déteste les tabulations dans les blocs de code).
- Encodage : Vérifiez que votre éditeur est bien en UTF-8.

```latex
\begin{frame}[fragile]
\frametitle{Exemple de code}
\begin{lstlisting}
#include <iostream>
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}\end{lstlisting}
\end{frame}
```

:::warning
N'utilisez jamais `\usepackage{enumitem}` avec Beamer, car Beamer gère ses propres listes de manière native pour permettre les apparitions successives (ex: `\item<1->`).
:::