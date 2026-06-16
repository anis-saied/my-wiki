---
title: Écosystème du Chercheur
slug: /research/ecosystem
sidebar_position: 1
last_update:
  date: 2026-02-04
  author: Anis
---

# 🎓 Écosystème du Chercheur : Outils et Ressources

Ce guide répertorie les compétences, outils et plateformes indispensables pour mener à bien un travail de recherche, de la veille bibliographique à la publication.

---

## 1. Recherche et Veille Scientifique
*Où trouver la connaissance et les sources primaires.*

### Moteurs de Recherche & Bases de Données
- **Libres (Open Access)** : [BASE](https://www.base-search.net/), [CORE](https://core.ac.uk/), [DOAJ](https://doaj.org/).
- **Spécialisés** : [arXiv](https://arxiv.org/) (Maths/Physique/CS), [PubMed](https://pubmed.ncbi.nlm.nih.gov/) (Santé), [HAL](https://hal.science/) (France).
- **Universels** : [Google Scholar](https://scholar.google.com/), [Dimensions.ai](https://www.dimensions.ai/).

### Bibliothèques de Livres
- **[WorldCat](https://www.worldcat.org/)** : Localiser un livre dans n'importe quelle bibliothèque au monde.
- **[Open Library](https://openlibrary.org/)** : Accès à des millions de livres numérisés.

## 3. Gestion Bibliographique (Workflow)
*Organiser vos sources et automatiser vos citations.*

- **Logiciel de référence** : **[Zotero](https://www.zotero.org/)** (Recommandé pour son intégration LaTeX).
- **Extension indispensable** : **Better BibTeX (BBT)** pour Zotero (gère les clés de citation `\cite{...}`).
- **Moteur de traitement** : **[Biber](https://biblatex-biber.sourceforge.net/)** (Utilisé avec le package `biblatex` dans LaTeX).
- **Éditeur de fichiers .bib** : [JabRef](https://www.jabref.org/) (Si vous travaillez sans Zotero).

## 4. Rédaction et Typographie (LaTeX)
*Produire des documents d'une qualité professionnelle.*

- **Environnement (IDE)** : **Visual Studio Code** avec l'extension **LaTeX Workshop**.
- **Distribution** : TeX Live (Linux/Windows) ou MiKTeX.
- **Gestionnaire de compilation** : `latexmk` (pour automatiser PDF + Bibliographie).
- **Langage de balisage** : [Markdown](https://daringfireball.net/projects/markdown/) (pour les notes rapides) et [LaTeX](https://www.latex-project.org/) (pour la publication).

## 5. Gestion de Données et Code
*Assurer la reproductibilité de votre recherche.*

- **Hébergement de Code** : [GitHub](https://github.com/) ou GitLab.
- **Archivage de Données** : [Zenodo](https://zenodo.org/) (permet d'obtenir un DOI pour vos jeux de données).
- **Cahier de laboratoire** : Jupyter Notebooks (pour l'analyse de données interactive).

## 6. Analyse et Impact
*Mesurer et comprendre la portée de la recherche.*

- **[Altmetric](https://www.altmetric.com/)** : Mesurer l'impact des articles sur les réseaux sociaux et les médias.
- **[JCR (Journal Citation Reports)](https://clarivate.com/webofsciencegroup/solutions/journal-citation-reports/)** : Connaître l'Impact Factor des revues.

---

### Résumé des outils prioritaires pour votre projet :
| Catégorie | Outil suggéré | Pourquoi ? |
| :--- | :--- | :--- |
| **Gestion** | Zotero + Better BibTeX | Automatisation totale du fichier `.bib`. |
| **Édition** | VS Code + LaTeX Workshop | Confort de code et puissance de compilation. |
| **Recherche** | Google Scholar + DOI | Rapidité et précision des métadonnées. |
| **Identité** | ORCID | Unicité de votre nom en tant qu'auteur. |