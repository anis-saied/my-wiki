---
title: Types
slug: /dev/php/native php/types
sidebar_position: 7
last_update:
  date: 2026-01-03
  author: Anis
---

# Types in PHP

## Règles générales pour éviter le warning

- Si un paramètre **peut être null**, utilise `?Type`.
- Si un paramètre **n’est pas typé** (par exemple $data), mieux vaut mettre `mixed` en _PHP 8+_.
  - `mixed $data = null` → supporte tableau, objet, string, int… ou null.
- Si tu veux **permettre null par défaut** → écris `?string $message = null` → message facultatif.

## serializable PHP data types

- **Strings** - Character strings of arbitrary size in any PHP-compatible encoding.
- **Integers** - All integers of any size supported by PHP, up to 64-bit signed.
- **Floats** - All signed floating point values.
- **Boolean** - True and False.
- **Null** - The actual null value.
- **Arrays** - Indexed, associative and multidimensional arrays of arbitrary depth.
- **Object** - Any object that supports lossless serialization and deserialization such that $o == unserialize(serialize($o)). Objects MAY leverage PHP's Serializable interface, **sleep() or **wakeup() magic methods, or similar language functionality if appropriate.

## strict_types

Par défaut (sans `strict_types`), PHP fait une conversion implicite.

```php
function sum(int $a): int {
    return $a;
}

sum("5"); // accepté → 5
```

Avec declare(`strict_types=1`);

```php
declare(strict_types=1);

function sum(int $a): int {
    return $a;
}

sum("5"); // ❌ TypeError
```

Pourquoi l’utiliser dans un package ?

- Évite les bugs silencieux
- Renforce les contrats
- Comportement prévisible
- Recommandé pour les libraries
- Compatible PSR

👉 Toujours recommandé dans le code métier
