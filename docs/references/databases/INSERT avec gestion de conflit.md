---
title: INSERT Avec Gestion De Conflit
slug: /references/databases/INSERT avec gestion de conflit
sidebar_position: 3
last_update:
  date: 2026-01-03
  author: Anis
---

# INSERT avec gestion de conflit

INSERT OR REPLACE: supprime la ligne existante si conflit sur la clé primaire/unique, puis insère la nouvelle.

INSERT OR IGNORE: ignore l’insertion si conflit, sans lever d’erreur.

INSERT OR ABORT (défaut): abandonne l’insertion et génère une erreur en cas de conflit.

INSERT OR FAIL: échoue si conflit, mais ne modifie pas les autres lignes.

INSERT OR ROLLBACK: annule la transaction entière en cas de conflit.
