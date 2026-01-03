---
title: Create Composer Package
slug: /dev/php/composer/create-composer-package
sidebar_position: 1
last_update:
  date: 2026-01-03
  author: Anis
---

# create composer package

1. create a directory for the package named `user-core-php`

2. intialize the composer package

- option 1 : interactivelly

```bash
cd user-core-php
composer init
```

- option 2: with CLI

```bash
cd user-core-php
composer init --no-interaction \
  --name="anis-saied/user-core-php" \
  --description="Core user domain logic (framework agnostic)" \
  --type="library" \
  --license="MIT" \
  --require="php:^8.1"
```

3. create the package structure (directories and files)

```bash
cd user-core-php
mkdir -p src/Domain/ValueObject
mkdir -p src/Domain/Repository
mkdir -p src/Application/Service
mkdir -p tests/Unit
mkdir -p docs/diagrams
touch src/Domain/User.php
touch src/Domain/ValueObject/UserId.php
touch src/Domain/ValueObject/Email.php
touch src/Domain/Repository/UserRepositoryInterface.php
touch src/Application/Service/UserService.php
touch tests/Unit/UserTest.php
touch docs/README.md
touch docs/diagrams/user-domain.puml
touch CHANGELOG.md
touch LICENSE
touch phpunit.xml
```

4. autoload composer after modification of `composer.json`

```bash
composer dump-autoload
```

5. Initialisation Git

```bash
git init
git add .
git commit -m "Initial project structure for user-core-php"
```

6. publish the git repository on GitHub  (using GitHub Desktop)
7. check final structure

```bash
tree -a
```

result

```pgsql
user-core-php
├── src
│   ├── Application
│   │   └── Service
│   │       └── UserService.php
│   └── Domain
│       ├── Repository
│       │   └── UserRepositoryInterface.php
│       ├── User.php
│       └── ValueObject
│           ├── Email.php
│           └── UserId.php
├── tests
│   └── Unit
│       └── UserTest.php
├── docs
│   ├── diagrams
│   │   └── user-domain.puml
│   └── README.md
├── CHANGELOG.md
├── LICENSE
├── composer.json
└── phpunit.xml
```

8. ajouter le code de chaque fichier
9. Vérification finale
```bash
composer install
composer dump-autoload
vendor/bin/phpunit
```


## README.md 
doit contenir :
- Description claire du package
- Installation via Composer
- Exemple rapide d’utilisation
- Liens vers la documentation complète (docs/)
- Informations sur la licence


## Préparer le dépôt GitHub

`.gitignore`conseillé :
```git
/vendor/
/docs/html/
/var/
/composer.lock
```

Commit tout le code, tests, docs et diagrammes

Tag version, ex. v1.0.0 :
```bash
git tag v1.0.0
git push origin master --tags
```

## Packagist

- Crée un compte sur [packagist.org](packagist.org)
- Push ton repo sur [GitHub](github.com)
- Sur Packagist : “Submit” → lien vers ton GitHub → Packagist récupère `composer.json`
- Ensuite, tout projet PHP pourra faire :
```bash
composer require anis-saied/user-core-php
```
