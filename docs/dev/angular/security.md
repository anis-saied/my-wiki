---
title: Security
slug: /dev/angular/security
sidebar_position: 8
last_update:
  date: 2026-01-03
  author: Anis
---

# Security

## Definitions

### Chaîne de caractères signée

Une chaîne de caractères signée veut dire :
- Ce n’est pas juste du texte brut.
- Elle est accompagnée d’une signature cryptographique qui permet de vérifier :
  - **Authenticité** (أصلية) → elle vient bien de celui qui l’a générée (par ex. le serveur).
  - **Intégrité** → elle n’a pas été modifiée en transit.

## Exemples de tokens
### JWT (JSON Web Token)

- Un JWT est un bon exemple de chaîne signée.
- Il a 3 parties séparées par des `.` : `header.payload.signature`
  - header → type de token + algorithme (ex: HS256)
  - payload → les données (ex: ` {"user":"anis","role":"admin" } `)
  - signature → calculée avec une clé secrète pour garantir que header + payload n’ont pas été modifiés.

👉 Ainsi, si quelqu’un essaie de changer le payload pour mettre "role":"superadmin", la signature ne correspondra plus et le serveur rejettera le token.

Donc **"chaîne signée" = texte lisible + garantie mathématique de son authenticité.**
