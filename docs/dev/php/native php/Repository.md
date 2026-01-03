---
title: Repository
slug: /dev/php/native php/Repository
sidebar_position: 6
last_update:
  date: 2026-01-03
  author: Anis
---

# Repository

Un Repository représente : **une collection d’objets du domaine, comme si elle était en mémoire**

Donc il peut :

- récupérer
- rechercher
- filtrer

Mais il ne doit pas :

- exposer SQL
- exposer des critères techniques (LIMIT, OFFSET, JOIN)
- dépendre du stockage

Exemples valides :expriment un langage métier.

- findByEmail(Email $email)
- findByName(string $name)
- findActiveUsers()

Exemples à éviter: Ces méthodes cassent : l’abstraction, l’agnosticisme, la testabilité

- findByColumn(string $column, mixed $value)
- findWithLimitOffset(int $limit, int $offset)
- findWhere(array $criteria)
- findByRawSql(string $sql)
