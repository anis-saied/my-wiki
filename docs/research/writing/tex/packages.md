---
title: Packages TeX
slug: /research/writing/tex/packages
sidebar_position: 3
last_update:
  date: 2026-01-31
  author: Anis
---

# Packages TeX

## Introduction aux packages TeX

une sélection des packages incontournables, modernes et standards, organisée par catégories logiques pour structurer vos documents comme un pro.

Liste des Packages LaTeX Incontournables par Catégories



to view the documentation of any package

1. in the shell: example `texdoc beamer`

2. in the web: [texdoc online documentation](https://texdoc.org/index.html)



## install package

### installation manuelle

### 1️⃣ Créer l’arborescence locale

`mkdir -p ~/texmf/tex/latex/neoschool`

---

### 2️⃣ Télécharger le package

`cd ~/texmf/tex/latex/neoschool wget https://mirrors.ctan.org/macros/latex/contrib/neoschool.zip unzip neoschool.zip rm neoschool.zip`

---

### 3️⃣ Rafraîchir la base

`mktexlsr`

(ou `texhash`, les deux sont équivalents)

---

### 4️⃣ Vérifier

`kpsewhich neoschool.cls`

Si tu vois un chemin du type :

`/home/anis/texmf/tex/latex/neoschool/neoschool.cls`

✅ c’est bon.

## Packages par catégories

## 1. Mise en page et Structure du document

| Nom          | Fonction                                            | Documentation (CTAN)                  | Remplacé par / Alternative |
|:------------ |:--------------------------------------------------- |:------------------------------------- |:-------------------------- |
| **geometry** | Réglage des marges et taille du papier              | [Lien](https://ctan.org/pkg/geometry) | -                          |
| **fancyhdr** | En-têtes et pieds de page personnalisés             | [Lien](https://ctan.org/pkg/fancyhdr) | `scrlayer-scrpage`         |
| **titlesec** | Personnalisation des titres de sections             | [Lien](https://ctan.org/pkg/titlesec) | -                          |
| **tocloft**  | Contrôle du style de la Table des Matières          | [Lien](https://ctan.org/pkg/tocloft)  | -                          |
| **multicol** | Support du texte sur plusieurs colonnes             | [Lien](https://ctan.org/pkg/multicol) | -                          |
| **enumitem** | Personnalisation poussée des listes (puces/numéros) | [Lien](https://ctan.org/pkg/enumitem) | -                          |

---

## 2. Mathématiques et Sciences

| Nom              | Fonction                                      | Documentation (CTAN)                      | Remplacé par / Alternative |
|:---------------- |:--------------------------------------------- |:----------------------------------------- |:-------------------------- |
| **amsmath**      | Standard pour les formules complexes          | [Lien](https://ctan.org/pkg/amsmath)      | `mathtools` (recommandé)   |
| **mathtools**    | Corrections et extensions pour amsmath        | [Lien](https://ctan.org/pkg/mathtools)    | -                          |
| **siunitx**      | Gestion des unités SI et alignement décimal   | [Lien](https://ctan.org/pkg/siunitx)      | -                          |
| **mhchem**       | Écriture rapide de formules chimiques         | [Lien](https://ctan.org/pkg/mhchem)       | `chemformula`              |
| **unicode-math** | Utilisation de polices mathématiques OpenType | [Lien](https://ctan.org/pkg/unicode-math) | -                          |

---

## 3. Graphiques, Tableaux et Figures

| Nom            | Fonction                                      | Documentation (CTAN)                    | Remplacé par / Alternative |
|:-------------- |:--------------------------------------------- |:--------------------------------------- |:-------------------------- |
| **graphicx**   | Inclusion d'images externes                   | [Lien](https://ctan.org/pkg/graphicx)   | -                          |
| **tikz**       | Création de graphiques vectoriels natifs      | [Lien](https://ctan.org/pkg/pgf)        | `pstricks`                 |
| **tabularray** | Le package moderne ultime pour tableaux       | [Lien](https://ctan.org/pkg/tabularray) | `tabularx`, `multirow`     |
| **booktabs**   | Qualité typographique des lignes de tableau   | [Lien](https://ctan.org/pkg/booktabs)   | Inclus dans `tabularray`   |
| **caption**    | Personnalisation des légendes (images/tables) | [Lien](https://ctan.org/pkg/caption)    | -                          |
| **float**      | Améliore le placement des objets flottants    | [Lien](https://ctan.org/pkg/float)      | -                          |

---

## 4. Bibliographie et Références

| Nom            | Fonction                                       | Documentation (CTAN)                    | Remplacé par / Alternative                    |
|:-------------- |:---------------------------------------------- |:--------------------------------------- |:--------------------------------------------- |
| **biblatex**   | Gestion moderne des citations/bibliographie    | [Lien](https://ctan.org/pkg/biblatex)   | `natbib` (obsolète)                           |
| **hyperref**   | Liens hypertextes et signets PDF               | [Lien](https://ctan.org/pkg/hyperref)   | hyperref en fin de préambule → bonne pratique |
| **cleveref**   | Références croisées automatiques intelligentes | [Lien](https://ctan.org/pkg/cleveref)   | `varioref`                                    |
| **glossaries** | Création de glossaires et listes d'acronymes   | [Lien](https://ctan.org/pkg/glossaries) | -                                             |

---

## 5. Typographie et Programmation

| Nom           | Fonction                                     | Documentation (CTAN)                   | Remplacé par / Alternative                                                      |
|:------------- |:-------------------------------------------- |:-------------------------------------- |:------------------------------------------------------------------------------- |
| **babel**     | Localisation (français, règles de césure)    | [Lien](https://ctan.org/pkg/babel)     | `polyglossia`                                                                   |
| **microtype** | Amélioration de la grisaille typographique   | [Lien](https://ctan.org/pkg/microtype) | -                                                                               |
| **listings**  | Coloration syntaxique de code source         | [Lien](https://ctan.org/pkg/listings)  | `minted`                                                                        |
| **minted**    | Coloration de code via Pygments (Python)     | [Lien](https://ctan.org/pkg/minted)    | `listings`                                                                      |
| **xcolor**    | Gestion avancée des couleurs                 | [Lien](https://ctan.org/pkg/xcolor)    | **color** est obsolète et inutile si **xcolor** est présent.                    |
| **inputenc**  | Gestion des encodages d'entrée (UTF-8, etc.) | [Lien](https://ctan.org/pkg/inputenc)  | Obsolète avec **XeLaTeX/LuaLaTeX**, nécessaire si tu compiles avec **pdfLaTeX** |

# Guide Étendu des Packages LaTeX (Édition 2026)

## 6. Présentations (Beamer & Co.)

| Nom                | Fonction                                        | Documentation (CTAN)                        | Alternative          |
|:------------------ |:----------------------------------------------- |:------------------------------------------- |:-------------------- |
| **beamer**         | Classe standard pour créer des diaporamas       | [Lien](https://ctan.org/pkg/beamer)         | `powerdot`, `revtex` |
| **appendixbeamer** | Sépare les slides de l'annexe du compteur total | [Lien](https://ctan.org/pkg/appendixbeamer) | -                    |
| **beamerthemes**   | Collection de thèmes visuels pré-conçus         | [Lien](https://ctan.org/pkg/beamerthemes)   | Thèmes personnalisés |
| **pgfpages**       | Mise en page pour notes d'orateur (2-up)        | [Lien](https://ctan.org/pkg/pgfpages)       | -                    |

---

## 7. Édition de Livres et Documents Longs

| Nom             | Fonction                                      | Documentation (CTAN)                     | Alternative          |
|:--------------- |:--------------------------------------------- |:---------------------------------------- |:-------------------- |
| **memoir**      | Classe "tout-en-un" pour livres complexes     | [Lien](https://ctan.org/pkg/memoir)      | `book`, `scrbook`    |
| **koma-script** | Alternatives modernes aux classes standards   | [Lien](https://ctan.org/pkg/koma-script) | Classes de base      |
| **imakeidx**    | Génération automatique d'index multiples      | [Lien](https://ctan.org/pkg/imakeidx)    | `makeidx` (ancien)   |
| **pdfpages**    | Insertion de pages PDF entières dans le livre | [Lien](https://ctan.org/pkg/pdfpages)    | -                    |
| **etoc**        | Tables des matières locales (par chapitre)    | [Lien](https://ctan.org/pkg/etoc)        | `minitoc` (obsolète) |

---

## 8. Outils Académiques et Thèses

| Nom           | Fonction                                      | Documentation (CTAN)                   | Alternative      |
|:------------- |:--------------------------------------------- |:-------------------------------------- |:---------------- |
| **todonotes** | Ajout de notes de révision dans la marge      | [Lien](https://ctan.org/pkg/todonotes) | `draftwatermark` |
| **setspace**  | Gestion de l'interligne (simple, 1.5, double) | [Lien](https://ctan.org/pkg/setspace)  | -                |
| **appendix**  | Gestion avancée des annexes                   | [Lien](https://ctan.org/pkg/appendix)  | -                |
| **lineno**    | Numérotation des lignes (pour relecture)      | [Lien](https://ctan.org/pkg/lineno)    | -                |

---

## 9. Mise en forme Créative et Spéciale

| Nom              | Fonction                                       | Documentation (CTAN)                      | Alternative |
|:---------------- |:---------------------------------------------- |:----------------------------------------- |:----------- |
| **tcolorbox**    | Boîtes décorées et cadres colorés complexes    | [Lien](https://ctan.org/pkg/tcolorbox)    | `mdframed`  |
| **fontawesome5** | Accès à des milliers d'icônes (web, social)    | [Lien](https://ctan.org/pkg/fontawesome5) | `pifont`    |
| **lettrine**     | Création de lettrines en début de paragraphe   | [Lien](https://ctan.org/pkg/lettrine)     | -           |
| **shapepar**     | Écrit du texte selon des formes (cœur, cercle) | [Lien](https://ctan.org/pkg/shapepar)     | -           |
| **tikz-network** | Visualisation de réseaux et graphes complexes  | [Lien](https://ctan.org/pkg/tikz-network) | -           |

---

## 10. Automatisation et Programmation

| Nom          | Fonction                                    | Documentation (CTAN)                  | Alternative              |
|:------------ |:------------------------------------------- |:------------------------------------- |:------------------------ |
| **etoolbox** | Outils de programmation pour développeurs   | [Lien](https://ctan.org/pkg/etoolbox) | -                        |
| **xparse**   | Création de commandes à arguments complexes | [Lien](https://ctan.org/pkg/xparse)   | Inclus dans LaTeX kernel |
| **pgffor**   | Boucles de programmation (foreach)          | [Lien](https://ctan.org/pkg/pgffor)   | -                        |
| **shellesc** | Accès aux commandes système (shell escape)  | [Lien](https://ctan.org/pkg/shellesc) | -                        |

## 11. Polices et Typographie Avancée

| Nom               | Fonction                                       | Documentation (CTAN)                       | Alternative                      |
|:----------------- |:---------------------------------------------- |:------------------------------------------ |:-------------------------------- |
| **fontspec**      | Gestion des polices système (OTF/TTF)          | [Lien](https://ctan.org/pkg/fontspec)      | Uniquement pour XeLaTeX/LuaLaTeX |
| **mathpazo**      | Utilise la police Palatino pour texte et maths | [Lien](https://ctan.org/pkg/mathpazo)      | `newpxtext`/`newpxmath`          |
| **fourier**       | Police Utopia avec symboles mathématiques      | [Lien](https://ctan.org/pkg/fourier)       | -                                |
| **sourcesanspro** | Police sans-serif moderne d'Adobe              | [Lien](https://ctan.org/pkg/sourcesanspro) | -                                |
| **cfr-lm**        | Extension des polices Latin Modern standards   | [Lien](https://ctan.org/pkg/cfr-lm)        | -                                |

---

## 12. Sciences Spécialisées (Bio, Géo, Musique)

| Nom            | Fonction                                              | Documentation (CTAN)                    | Alternative                          |
|:-------------- |:----------------------------------------------------- |:--------------------------------------- |:------------------------------------ |
| **chemmacros** | Outils complets pour la chimie (réactions, orbitales) | [Lien](https://ctan.org/pkg/chemmacros) | -                                    |
| **reledmac**   | Édition critique de textes (philologie, religion)     | [Lien](https://ctan.org/pkg/reledmac)   | `eledmac` (obsolète)                 |
| **musixtex**   | Écriture de partitions musicales                      | [Lien](https://ctan.org/pkg/musixtex)   | `lilyglyphs` (pour polices LilyPond) |
| **circuitikz** | Dessin de schémas électriques et électroniques        | [Lien](https://ctan.org/pkg/circuitikz) | -                                    |
| **forest**     | Dessin d'arbres linguistiques ou logiques             | [Lien](https://ctan.org/pkg/forest)     | `qtree`                              |

---

## 13. Gestion des Flux de Travail et Équipes

| Nom              | Fonction                                                   | Documentation (CTAN)                      | Alternative                      |
|:---------------- |:---------------------------------------------------------- |:----------------------------------------- |:-------------------------------- |
| **changes**      | Suivi des modifications (ajout, suppression, commentaires) | [Lien](https://ctan.org/pkg/changes)      | `trackchanges`                   |
| **filecontents** | Intègre des fichiers externes dans le source .tex          | [Lien](https://ctan.org/pkg/filecontents) | Inclus dans LaTeX kernel (2019+) |
| **standalone**   | Compilation de sous-fichiers comme documents isolés        | [Lien](https://ctan.org/pkg/standalone)   | `subfiles`                       |
| **currfile**     | Accès au nom du fichier courant dans le document           | [Lien](https://ctan.org/pkg/currfile)     | -                                |

---

## 14. Droit, Lettres et Administration

| Nom          | Fonction                                                 | Documentation (CTAN)                  | Alternative |
|:------------ |:-------------------------------------------------------- |:------------------------------------- |:----------- |
| **ledmac**   | Notes de bas de page multiples pour textes anciens       | [Lien](https://ctan.org/pkg/reledmac) | -           |
| **eurosym**  | Symbole officiel de l'Euro (€)                           | [Lien](https://ctan.org/pkg/eurosym)  | `textcomp`  |
| **verse**    | Mise en page de poésie et de vers                        | [Lien](https://ctan.org/pkg/verse)    | -           |
| **geometry** | (Déjà cité) Crucial pour les formats légaux (A4, Letter) | [Lien](https://ctan.org/pkg/geometry) | -           |

---

## 15. Débogage et Analyse de Compilation

| Nom                  | Fonction                                            | Documentation (CTAN)                          | Alternative  |
|:-------------------- |:--------------------------------------------------- |:--------------------------------------------- |:------------ |
| **showkeys**         | Affiche les labels/clés dans les marges (brouillon) | [Lien](https://ctan.org/pkg/showkeys)         | `showlabels` |
| **lua-visual-debug** | Affiche les boîtes et glue (LuaLaTeX uniquement)    | [Lien](https://ctan.org/pkg/lua-visual-debug) | -            |
| **checkend**         | Aide à repérer les `\begin` non fermés              | [Lien](https://ctan.org/pkg/checkend)         | -            |
| **syntonly**         | Compile sans générer de PDF (vérification syntaxe)  | [Lien](https://ctan.org/pkg/syntonly)         | -            |

## 16. Gestion de Données et Tableaux de Bord

| Nom             | Fonction                                                  | Documentation (CTAN)                     | Alternative |
|:--------------- |:--------------------------------------------------------- |:---------------------------------------- |:----------- |
| **datatool**    | Manipulation de bases de données (CSV, SQL) dans LaTeX    | [Lien](https://ctan.org/pkg/datatool)    | -           |
| **csvsimple**   | Importation et mise en forme simplifiée de fichiers CSV   | [Lien](https://ctan.org/pkg/csvsimple)   | `datatool`  |
| **pgfplots**    | Création de graphiques de haute qualité (2D/3D)           | [Lien](https://ctan.org/pkg/pgfplots)    | `pst-plot`  |
| **excel2latex** | (Add-in Excel) Convertit des feuilles Excel en code LaTeX | [Lien](https://ctan.org/pkg/excel2latex) | -           |

---

## 17. Documents Interactifs et Formulaires

| Nom          | Fonction                                               | Documentation (CTAN)                  | Alternative  |
|:------------ |:------------------------------------------------------ |:------------------------------------- |:------------ |
| **hyperref** | (Déjà cité) Pour les formulaires PDF interactifs       | [Lien](https://ctan.org/pkg/hyperref) | -            |
| **ocgx2**    | Gestion des calques PDF (afficher/masquer du contenu)  | [Lien](https://ctan.org/pkg/ocgx2)    | `ocg-p`      |
| **animate**  | Création d'animations dans les PDF (nécessite Acrobat) | [Lien](https://ctan.org/pkg/animate)  | -            |
| **media9**   | Inclusion de vidéos, audio et objets 3D dans le PDF    | [Lien](https://ctan.org/pkg/media9)   | `multimedia` |

---

## 18. Curriculum Vitae et Lettres de Motivation

| Nom                 | Fonction                                        | Documentation (CTAN)                         | Alternative   |
|:------------------- |:----------------------------------------------- |:-------------------------------------------- |:------------- |
| **moderncv**        | Classe de CV modulaire et élégante              | [Lien](https://ctan.org/pkg/moderncv)        | `friggeri-cv` |
| **europasscv**      | Modèle officiel de CV Europass                  | [Lien](https://ctan.org/pkg/europasscv)      | `europecv`    |
| **curriculumvitae** | Classe simplifiée pour CV académiques           | [Lien](https://ctan.org/pkg/curriculumvitae) | -             |
| **awesome-cv**      | CV moderne, hautement personnalisable (XeLaTeX) | [Lien](https://ctan.org/pkg/awesome-cv)      | -             |

---

## 19. Gestion des Langues et Systèmes d'Écriture

| Nom               | Fonction                                            | Documentation (CTAN)                       | Alternative |
|:----------------- |:--------------------------------------------------- |:------------------------------------------ |:----------- |
| **polyglossia**   | Gestion moderne des langues (XeLaTeX/LuaLaTeX)      | [Lien](https://ctan.org/pkg/polyglossia)   | `babel`     |
| **xeCJK**         | Support des caractères Chinois, Japonais et Coréens | [Lien](https://ctan.org/pkg/xecjk)         | `luatexja`  |
| **arabluatex**    | Typographie de précision pour l'Arabe (LuaLaTeX)    | [Lien](https://ctan.org/pkg/arabluatex)    | `arabtex`   |
| **greek-fontenc** | Support spécifique pour l'alphabet Grec             | [Lien](https://ctan.org/pkg/greek-fontenc) | -           |

---

## 20. Divers et Utilitaires Curieux

| Nom                 | Fonction                                         | Documentation (CTAN)                         | Alternative  |
|:------------------- |:------------------------------------------------ |:-------------------------------------------- |:------------ |
| **lipsum**          | Générateur de texte de remplissage (Lorem Ipsum) | [Lien](https://ctan.org/pkg/lipsum)          | `blindtext`  |
| **qrcode**          | Génération de codes QR natifs dans le document   | [Lien](https://ctan.org/pkg/qrcode)          | -            |
| **boxpropositions** | Création de boîtes de propositions logiques      | [Lien](https://ctan.org/pkg/boxpropositions) | -            |
| **draftwatermark**  | Ajoute un filigrane "DRAFT" sur les pages        | [Lien](https://ctan.org/pkg/draftwatermark)  | `xwatermark` |

## 21. Programmation et Code Source

| Nom                 | Fonction                                                | Documentation (CTAN)                         | Alternative    |
|:------------------- |:------------------------------------------------------- |:-------------------------------------------- |:-------------- |
| **minted**          | Coloration syntaxique haute fidélité (via Pygments)     | [Lien](https://ctan.org/pkg/minted)          | `listings`     |
| **listings**        | Solution native LaTeX pour le code (sans Python)        | [Lien](https://ctan.org/pkg/listings)        | `minted`       |
| **pythonhighlight** | Préréglages optimisés pour le code Python               | [Lien](https://ctan.org/pkg/pythonhighlight) | -              |
| **algorithm2e**     | Mise en page d'algorithmes et pseudo-code               | [Lien](https://ctan.org/pkg/algorithm2e)     | `algorithmicx` |
| **tcolorbox**       | (Option `listings`) Crée des fenêtres de code stylisées | [Lien](https://ctan.org/pkg/tcolorbox)       | -              |

---

## 22. Bases de Données (Modélisation)

| Nom          | Fonction                                                | Documentation (CTAN)                                    | Alternative           |
|:------------ |:------------------------------------------------------- |:------------------------------------------------------- |:--------------------- |
| **tikz-er2** | Dessin de diagrammes Entité-Relation (ERD)              | [Lien](https://ctan.org/pkg/tikz-er2)                   | `schemabloc`          |
| **sqlform**  | Mise en forme de requêtes SQL                           | [Lien](https://ctan.org/pkg/sqlform)                    | `listings` (lang=SQL) |
| **uml**      | Ancienne gestion UML (peu recommandé aujourd'hui)       | -                                                       | `tikz-uml`            |
| **tikz-uml** | Le standard actuel pour diagrammes de classes/séquences | [Lien](https://perso.ensta-paris.fr/~kielbasi/tikzuml/) | `pgf-umlcd`           |

---

## 23. Réseaux et Télécoms

| Nom              | Fonction                                            | Documentation (CTAN)                      | Alternative |
|:---------------- |:--------------------------------------------------- |:----------------------------------------- |:----------- |
| **tikz-network** | Visualisation de graphes et topologies réseaux      | [Lien](https://ctan.org/pkg/tikz-network) | -           |
| **pst-sigsys**   | Traitement du signal et systèmes (blocs, filtres)   | [Lien](https://ctan.org/pkg/pst-sigsys)   | `tikz`      |
| **syntax**       | Représentation de grammaires BNF (protocoles)       | [Lien](https://ctan.org/pkg/syntax)       | -           |
| **bytefield**    | Dessin de structures de paquets réseau et registres | [Lien](https://ctan.org/pkg/bytefield)    | -           |

---

## 24. Systèmes d'Exploitation (OS) et Hardware

| Nom                 | Fonction                                                     | Documentation (CTAN)                     | Alternative  |
|:------------------- |:------------------------------------------------------------ |:---------------------------------------- |:------------ |
| **menukeys**        | Dessine des touches de clavier, menus et chemins de fichiers | [Lien](https://ctan.org/pkg/menukeys)    | -            |
| **dirtree**         | Affiche des arborescences de répertoires/fichiers            | [Lien](https://ctan.org/pkg/dirtree)     | `forest`     |
| **register**        | Dessine des diagrammes de registres CPU/mémoire              | [Lien](https://ctan.org/pkg/register)    | `bytefield`  |
| **timing-diagrams** | Chronogrammes pour signaux logiques et bus                   | [Lien](https://ctan.org/pkg/tikz-timing) | `pst-timing` |

---

## 25. Intelligence Artificielle et Logique

| Nom               | Fonction                                        | Documentation (CTAN)                       | Alternative         |
|:----------------- |:----------------------------------------------- |:------------------------------------------ |:------------------- |
| **neuralnetwork** | Dessin de graphes de neurones (MLP, etc.)       | [Lien](https://ctan.org/pkg/neuralnetwork) | `tikz` personnalisé |
| **logicpuzzle**   | Création de grilles logiques (Sudoku, etc.)     | [Lien](https://ctan.org/pkg/logicpuzzle)   | -                   |
| **bussproofs**    | Arbres de preuve logique et déduction naturelle | [Lien](https://ctan.org/pkg/bussproofs)    | `ebproof`           |

## 26. Graphes, Réseaux et Mathématiques Discrètes

| Nom               | Fonction                                                 | Documentation (CTAN)                       | Alternative      |
|:----------------- |:-------------------------------------------------------- |:------------------------------------------ |:---------------- |
| **tikz-cd**       | Diagrammes commutatifs de haute qualité (catégories)     | [Lien](https://ctan.org/pkg/tikz-cd)       | `amscd` (limité) |
| **tkz-graph**     | Création de graphes combinatoires complexes              | [Lien](https://ctan.org/pkg/tkz-graph)     | `tikz` pur       |
| **tkz-berge**     | Bibliothèque spécifique pour les graphes de Berge        | [Lien](https://ctan.org/pkg/tkz-berge)     | -                |
| **smartdiagram**  | Génère des diagrammes (cercles, flux) à partir de listes | [Lien](https://ctan.org/pkg/smartdiagram)  | `tikz`           |
| **tikz-bayesnet** | Dessin de modèles graphiques et réseaux bayésiens        | [Lien](https://ctan.org/pkg/tikz-bayesnet) | -                |

---

## 27. Manipulation et Édition d'Images

| Nom                  | Fonction                                                      | Documentation (CTAN)                          | Alternative |
|:-------------------- |:------------------------------------------------------------- |:--------------------------------------------- |:----------- |
| **adjustbox**        | Ajuster, rogner, pivoter ou encadrer n'importe quel objet     | [Lien](https://ctan.org/pkg/adjustbox)        | -           |
| **tikz-imagelabels** | Ajouter des étiquettes et annotations sur une image           | [Lien](https://ctan.org/pkg/tikz-imagelabels) | `overpic`   |
| **stackengine**      | Empiler des images ou du texte (superposition précise)        | [Lien](https://ctan.org/pkg/stackengine)      | -           |
| **incgraph**         | Inclure des images sur une page entière proprement            | [Lien](https://ctan.org/pkg/incgraph)         | `pdfpages`  |
| **eso-pic**          | Ajouter des images ou du contenu en arrière-plan (background) | [Lien](https://ctan.org/pkg/eso-pic)          | `wallpaper` |

---

## 28. Diagrammes Techniques et Visualisation

| Nom            | Fonction                                              | Documentation (CTAN)                    | Alternative                           |
|:-------------- |:----------------------------------------------------- |:--------------------------------------- |:------------------------------------- |
| **pgfplots**   | Graphiques de fonctions et de données (très puissant) | [Lien](https://ctan.org/pkg/pgfplots)   | `gnuplot`                             |
| **schemaplot** | Dessin de schémas de principe et de blocs             | [Lien](https://ctan.org/pkg/schemaplot) | -                                     |
| **flowchart**  | Formes prédéfinies pour les organigrammes             | [Lien](https://ctan.org/pkg/flowchart)  | `tikz` (librairie `shapes.geometric`) |
| **bclogo**     | Insertion de logos et cadres d'avertissement stylisés | [Lien](https://ctan.org/pkg/bclogo)     | `tcolorbox`                           |

---

## 29. Géométrie et Figures Géométriques

| Nom               | Fonction                                                     | Documentation (CTAN)                       | Alternative |
|:----------------- |:------------------------------------------------------------ |:------------------------------------------ |:----------- |
| **tkz-euclide**   | Géométrie euclidienne plane (construction à la règle/compas) | [Lien](https://ctan.org/pkg/tkz-euclide)   | -           |
| **tikz-3dplot**   | Transformations de coordonnées pour vues 3D                  | [Lien](https://ctan.org/pkg/tikz-3dplot)   | -           |
| **pst-solides3d** | Dessin de solides complexes en 3D                            | [Lien](https://ctan.org/pkg/pst-solides3d) | `tikz-3d`   |