---
title: ValueObject
slug: /dev/php/native php/ValueObject
sidebar_position: 8
last_update:
  date: 2026-01-03
  author: Anis
---

# ValueObject

Un **Value Object** (VO) est un objet qui :

- n’a pas d’identité propre
- est défini uniquement par sa valeur
- est immuable
- garantit des invariants métier

👉 En DDD : **“Deux Value Objects avec la même valeur sont égaux.”**

## Exemple

### Déclaration

Dans un package,déclarer Value Object dans `src/Domain/ValueObject/Email.php`

```php
<?php

declare(strict_types=1);

namespace AnisSaied\UserCore\Domain\ValueObject;

/**
 * Email
 *
 * Value Object garantissant la validité d'une adresse email.
 */
final class Email
{
    private string $value;

    public function __construct(string $email)
    {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new \InvalidArgumentException('Invalid email address.');
        }

        $this->value = strtolower($email);
    }

    public function value(): string
    {
        return $this->value;
    }

    public function equals(Email $other): bool
    {
        return $this->value === $other->value;
    }
}

```

### utilisation

```php
$email1 = new Email('anis@example.com');
$email2 = new Email('anis@example.com');

$email1->equals($email2); // true
```

Même valeur ⇒ même signification métier.

### Sans ValueObject

```php
function register(string $email) { }
```

**Problèmes** :

- email invalide possible
- duplication de validation
- logique métier dispersée

### Avec ValueObject :

```php
function register(string $email) { }
```

**Avantages** :

- validation centralisée
- code plus expressif
- erreurs détectées tôt
- meilleur typage
