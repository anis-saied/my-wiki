---
title: Variables
slug: /dev/JS-TS/variables
sidebar_position: 4
last_update:
  date: 2026-01-03
  author: Anis
---

# Variables en JS

# Portée

En JavaScript, il y a deux façons de déclarer des propriétés :

- **Privées** avec `#` (**ES2022+**) → uniquement accessibles à l’intérieur de la classe.
- **“Protégées”** ou **publiques** (par convention `_nom`) → accessibles aussi dans les classes qui héritent.

Notes:
- Les observables déclarés avec `_nom$` sont donc protégés par convention, mais accessibles aux sous-classes. `_` n’empêche pas vraiment l’accès depuis l’extérieur, c’est juste une convention.
- Avec `#` c'est vraiment privé:
  - impossible d’y accéder en dehors de la classe.
  - Protège totalement les données internes de modifications directes.
  - Tu dois passer par les getters/setters uniquement.

## Conventions
- convention de nommage très courante en JavaScript pour distinguer les **propriétés internes** d’une classe et celles **“publiques”**
1. Avec `_` : Exemple `_nom`
  - Usage : Pour signaler que la propriété est “privée par convention”, mais accessible dans la classe et les sous-classes.
  - `_nom$` est interne, mais les sous-classes peuvent y accéder si nécessaire.
  - L’utilisateur extérieur ne devrait pas l’utiliser directement (on s’attend à ce qu’il passe par les getters/setters).
2. Sans `_` : exemple `nom`
   - Usage : Pour une propriété *publique* qui peut être utilisée directement par l’extérieur.
   - c’est fait pour être utilisé directement par l’extérieur. 
