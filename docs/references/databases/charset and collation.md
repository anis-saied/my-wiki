---
title: Charset And Collation
slug: /references/databases/charset and collation
sidebar_position: 1
last_update:
  date: 2026-01-03
  author: Anis
---

# CharSet and Collation

- 📦 Character set = l’alphabet disponible
- 📚 Collation = les règles de classement et de comparaison

## Character set

c'est le jeu de caractères

Le character set définit quels caractères peuvent être stockés et comment ils sont encodés en binaire.

👉 Il répond à la question : “Quels symboles ma base peut-elle contenir ?”

Exemples:

- _ascii_ → seulement lettres anglaises de base
- _latin1_ → caractères d’Europe de l’Ouest
- _utf8 / utf8mb4_ → presque tous les caractères Unicode (emojis, alphabets du monde, etc.)

✅ Conseil actuel : 👉 utiliser _utf8mb4_ (le plus complet)

## collation

La **collation** définit comment les chaînes de caractères sont comparées et triées.

👉 Elle répond à la question : “Comment comparer deux textes ?”

Elle détermine :

- la sensibilité à la casse (A = a ?)
- la sensibilité aux accents (é = e ?)
- l’ordre de tri

Exemples (MySQL)

- utf8mb4_general_ci
- utf8mb4_unicode_ci
- utf8mb4_bin

* ci = case insensitive
* cs = case sensitive
* bin = comparaison binaire (très stricte)

**Notes**

En MySQL :

- **utf8** = UTF-8 limité à 3 octets, Impossible de stocker les caractères sur 4 octets: 😃 emojis ...
- **utf8mb4**: Supporte 1 à 4 octets, Conforme au standard Unicode, Gère tous les caractères (emojis inclus)

## Exemple recommandé (MySQL)

```sql
CREATE DATABASE app_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
```

Pour une table :

```sql
ALTER TABLE users
CONVERT TO CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
```
