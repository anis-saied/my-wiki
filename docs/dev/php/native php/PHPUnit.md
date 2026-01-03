---
title: PHPUnit
slug: /dev/php/native php/PHPUnit
sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

# PHP Unit

## Installer PHPUnit via Composer
installer à partir [https://phpunit.de/getting-started/phpunit-12.html](https://phpunit.de/getting-started/phpunit-12.html)
documentation : [https://docs.phpunit.de/en/12.5/](https://docs.phpunit.de/en/12.5/)
```bash
composer require --dev phpunit/phpunit ^12 --with-all-dependencies
```

## structure

il est important de séparer tests unitaires et tests d’intégration, et de refléter la structure du code source.

```pgsql
tests/
├── Unit/
│   ├── Domain/
│   │   ├── UserTest.php
│   │   ├── ValueObject/
│   │   │   ├── UserIdTest.php
│   │   │   └── EmailTest.php
│   │   └── Criteria/
│   │       └── UserCriteriaTest.php
│   └── Application/
│       └── UserServiceTest.php
└── Integration/
    └── Infrastructure/
        └── InMemoryUserRepositoryTest.php
```

- **Unit/** → tests métiers, Value Objects, entités, services, criteria.
- **Integration/** → tests qui dépendent d’infrastructure (ex: InMemory, DB adapter).
- La structure mimique **src/** pour retrouver facilement le code testé.

## lancer les tests

PHPUnit cherche un fichier de configuration `phpunit.xml` à la racine de ton projet. Si le fichier est vide ou inexistant, PHPUnit ne sait pas quoi faire et te renvoie cette erreur.

Il faut donc créer un fichier `phpunit.xml` prêt à l’emploi pour ton package

contenu du fichier `phpunit.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<phpunit
    bootstrap="vendor/autoload.php"
    colors="true"
    verbose="true"
    stopOnFailure="false"
>
    <testsuites>
        <testsuite name="UserCorePHP Unit Tests">
            <directory>./tests/Unit</directory>
        </testsuite>
        <testsuite name="UserCorePHP Integration Tests">
            <directory>./tests/Integration</directory>
        </testsuite>
    </testsuites>

    <filter>
        <whitelist>
            <directory suffix=".php">./src</directory>
        </whitelist>
    </filter>
</phpunit>
```

lancer PHP Unit:

```bash
vendor/bin/phpunit
```
