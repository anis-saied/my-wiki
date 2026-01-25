---
title: Git
slug: /guides/git/git
sidebar_position: 3
last_update:
  date: 2026-01-03
  author: Anis
---

# Git

## Conventionnal Commits

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) : A specification for adding human and machine readable meaning to commit messages.
Examples:
  - `feat: add new user login feature`
  - `fix: correct typo in README.md`
  - `docs: update API documentation`
  - `style: format code with Prettier`
  - `refactor: simplify authentication logic`
  - `test: add unit tests for user service`
  - `chore: update dependencies`

- Voici les préfixes les plus courants :
  - `chore` : Pour tout ce qui ne touche pas au code pur ou aux fonctionnalités (ex: modifier le .gitignore, changer le titre du site dans la config, mettre à jour des logos, changer une langue). C'est la "maintenance" du projet.
  - `feat` : (Feature) Quand tu ajoutes une nouvelle fonctionnalité (ex: un nouveau mode sombre, un moteur de recherche).
  - `fix` : Quand tu corriges un bug ou un lien mort.
  - `docs` : Quand tu modifies uniquement le texte de tes manuels ou fichiers Markdown.
  - `style` : Pour les changements de design (CSS, couleurs) qui ne changent pas la logique.
  - `refactor` : Quand tu réorganises ou optimises le code sans changer son comportement (ex: renommer des variables, simplifier des fonctions).
  - `test` : Quand tu ajoutes ou modifies des tests unitaires.