---
title: Sqlite
slug: /references/databases/sqlite
sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

# sqlite

## desactiver et reactiver contraintes

```sql
PRAGMA foreign_keys = Off;
alter table  document_types RENAME to documentTypes;
PRAGMA foreign_keys = On;
```

## UPSERT SQLite : Insert or Update (Upsert) avec `ON CONFLICT`

### Objectif

Insérer une ligne dans une table **documents** si elle n’existe pas, ou **mettre à jour certains champs** si la ligne avec le même `id` existe déjà.

“INSERT → CONFLICT → excluded → UPDATE”
sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

### Commande générale

```sql
INSERT INTO documents (
    id,
    document_type_id,
    course_id,
    section_id,
    title,
    original_file_name,
    is_approved,
    level,
    year,
    prepa_id,
    semester,
    nature_id
)
VALUES (
    146,
    1,
    1,
    1,
    'DS __jN1 Ana MP 2017-18 IPEIN',
    'DS N1 Ana MP 2017_ipei_id_146.pdf',
    1,
    1,
    2017,
    5,
    1,
    6
)
ON CONFLICT(id) DO UPDATE SET
    title              = excluded.title,
    original_file_name = excluded.original_file_name,
    document_type_id   = excluded.document_type_id,
    course_id          = excluded.course_id,
    section_id         = excluded.section_id,
    is_approved        = excluded.is_approved,
    level              = excluded.level,
    year               = excluded.year,
    prepa_id           = excluded.prepa_id,
    semester           = excluded.semester,
    nature_id          = excluded.nature_id;
```

sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

### Explications

- **`ON CONFLICT(id)`**
  Indique que si la clé `id` existe déjà, SQLite doit gérer le conflit avec l’action suivante (`DO UPDATE`).

- **`DO UPDATE SET ...`**
  Met à jour uniquement les colonnes indiquées. La colonne `id` reste inchangée.

- **`excluded.colonne`**
  - Représente la valeur de la colonne que l’on voulait insérer dans la commande `INSERT`.
  - En SQLite, excluded est un mot-clé spécial utilisé dans les commandes INSERT ... ON CONFLICT DO UPDATE. Il fait référence aux valeurs que vous tentiez d’insérer, mais qui ont provoqué un conflit.
  - Autrement dit : Quand tu écris INSERT INTO ... VALUES (...) ON CONFLICT(id) DO UPDATE SET title = excluded.title, excluded.title représente la valeur de title que tu venais d’essayer d’insérer, pas celle qui est déjà dans la base.

- **Pré-requis** :
  La colonne `id` doit être `PRIMARY KEY` ou `UNIQUE`.

sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

### Cas pratiques

| Situation       | Action réalisée                      |
| --------------- | ------------------------------------ |
| id existe déjà  | Les champs spécifiés sont mis à jour |
| id n’existe pas | Nouvelle ligne insérée               |

sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

### Variante courte (mettre à jour seulement certaines colonnes)

```sql
INSERT INTO documents (id, title, original_file_name, nature_id)
VALUES (146, 'DS __jN1 Ana MP 2017-18 IPEIN', 'DS N1 Ana MP 2017_ipei_id_146.pdf', 6)
ON CONFLICT(id) DO UPDATE SET
    title = excluded.title,
    original_file_name = excluded.original_file_name,
    nature_id = excluded.nature_id;
```

Cette version met à jour **uniquement** les champs `title`, `original_file_name` et `nature_id` si l’id existe déjà.
