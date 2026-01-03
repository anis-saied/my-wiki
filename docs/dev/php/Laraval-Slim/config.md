---
title: Config
slug: /dev/php/Laraval-Slim/config
sidebar_position: 2
last_update:
  date: 2026-01-03
  author: Anis
---

# Config

## Configuration en Laravel
### Principe :

`Config::get('short_columns')` sait où trouver le fichier grâce à la convention de nommage et le répertoire `config/`. 

Voici comment ça fonctionne exactement :

### Répertoire `config/`

Tous les fichiers PHP dans `app/config/` sont automatiquement chargés par Laravel au démarrage de l’application.

`Nom du fichier = clé de configuration`

Si tu as un fichier `config/short_columns.php`, Laravel le charge et le rend accessible via :

`Config::get('short_columns');`


ou le helper :

`config('short_columns');`


### Contenu du fichier
Chaque fichier doit retourner un tableau. Exemple :

```php
// config/short_columns.php
return [
    'Course' => ['id', 'name', 'tag_name'],
    'Document' => ['id', 'title'],
    'Chapter' => ['id', 'abbreviation'],
];
```

### Accès aux valeurs
Laravel transforme automatiquement le nom du fichier en clé de configuration. Donc si tu veux accéder aux colonnes du modèle Course :
```php
$config = Config::get('short_columns');
$courseColumns = $config['Course'] ?? [];
```

### Résumé : Laravel ne cherche pas “physiquement” le fichier à chaque appel, il charge tous les fichiers `config/*.php` en mémoire au boot, et `Config::get()` fait juste un accès dans ce tableau interne.

## configuration en Slim

En Slim (v4), tu peux importer un fichier de configuration très facilement, un peu comme tu l’as déjà fait pour tes routes.
Le plus propre est d’utiliser le **container (PSR-11)** et de charger ton fichier de config dans le démarrage de l’application.

📌 Exemple d’architecture
```bash
app/
 ├── config/
 │    └── settings.php
 ├── routes/
 │    └── routes.php
 ├── dependencies.php
 ├── middleware.php
 └── app.php
```

1. Ton fichier settings.php

Tu crées un tableau de configuration qui sera partagé dans tout ton projet :
```php
<?php
// app/config/settings.php

return [
    'displayErrorDetails' => true,
    'logger' => [
        'name' => 'slim-app',
        'path' => __DIR__ . '/../../logs/app.log',
        'level' => \Monolog\Logger::DEBUG,
    ],
    'db' => [
        'driver' => 'mysql',
        'host' => 'localhost',
        'database' => 'slimdb',
        'username' => 'root',
        'password' => '',
        'charset' => 'utf8',
        'collation' => 'utf8_unicode_ci',
        'prefix' => '',
    ]
];
```

2. Charger les settings dans ton app

Dans `app.php` (ou ton bootstrap principal) :

```php
use DI\Container;
use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';

$container = new Container();

// Charger les settings et les enregistrer dans le container
$settings = require __DIR__ . '/config/settings.php';
$container->set('settings', $settings);

AppFactory::setContainer($container);
$app = AppFactory::create();

// Charger middlewares et routes
(require __DIR__ . '/middleware.php')($app);
(require __DIR__ . '/routes/routes.php')($app);

return $app;
```

3. Utiliser les settings dans ton code

Dans un controller, service, ou autre, tu peux récupérer les configs via le container :

```php
namespace App\Controllers;

use Psr\Container\ContainerInterface;

class CourseController {
    private $settings;

    public function __construct(ContainerInterface $container) {
        $this->settings = $container->get('settings');
    }

    public function test() {
        $dbConfig = $this->settings['db'];
        // Exemple : host
        return $dbConfig['host'];
    }
}
```

👉 En résumé :

- tu *déclares* tous tes paramètres dans `settings.php`
- tu les *charges* dans le *container au bootstrap*
- tu peux les *récupérer* partout via `$container->get('settings')`

### Exemple

Exemple  d'un un fichier `.env` avec `vlucas/phpdotenv` est la bonne pratique pour séparer les secrets (passwords, clés API, etc.) du code.

ton fichier `settings.php` charge automatiquement les variables d’environnement (genre .env) avec vlucas/phpdotenv. Ça rend ton app plus clean et déployable.

1. Installer Dotenv

Dans ton projet :
```bash
composer require vlucas/phpdotenv
```
2. Créer un fichier .env (à la racine du projet)
   
```dotenv
APP_ENV=development
APP_DEBUG=true

DB_DRIVER=mysql
DB_HOST=localhost
DB_NAME=slimdb
DB_USER=root
DB_PASS=secret
DB_CHARSET=utf8
DB_COLLATION=utf8_unicode_ci
DB_PREFIX=
```

(⚠️ ajoute .env dans ton .gitignore pour éviter de pousser les secrets sur GitHub !)

3. Adapter ton settings.php

```php
<?php
// app/config/settings.php

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();

return [
    'displayErrorDetails' => $_ENV['APP_DEBUG'] === 'true',
    'logger' => [
        'name' => 'slim-app',
        'path' => __DIR__ . '/../../logs/app.log',
        'level' => \Monolog\Logger::DEBUG,
    ],
    'db' => [
        'driver'    => $_ENV['DB_DRIVER'] ?? 'mysql',
        'host'      => $_ENV['DB_HOST'] ?? '127.0.0.1',
        'database'  => $_ENV['DB_NAME'] ?? 'slimdb',
        'username'  => $_ENV['DB_USER'] ?? 'root',
        'password'  => $_ENV['DB_PASS'] ?? '',
        'charset'   => $_ENV['DB_CHARSET'] ?? 'utf8',
        'collation' => $_ENV['DB_COLLATION'] ?? 'utf8_unicode_ci',
        'prefix'    => $_ENV['DB_PREFIX'] ?? '',
    ]
];
```

4. Charger settings.php dans app.php

En Slim v4, il n’y a pas de container par défaut → tu dois en ajouter un.

Installer **PHP-DI**
```bash
composer require php-di/php-di
```
Ça va installer **DI\Container**.

```php
use DI\Container;
use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';

$container = new Container();

// Charger les settings
$settings = require __DIR__ . '/config/settings.php';
$container->set('settings', $settings);

AppFactory::setContainer($container);
$app = AppFactory::create();

// Middlewares & routes
(require __DIR__ . '/middleware.php')($app);
(require __DIR__ . '/routes/routes.php')($app);

return $app;

1. Utilisation dans un controller / service
namespace App\Controllers;

use Psr\Container\ContainerInterface;

class CourseController {
    private $settings;

    public function __construct(ContainerInterface $container) {
        $this->settings = $container->get('settings');
    }

    public function test() {
        $dbConfig = $this->settings['db'];
        return "DB host: " . $dbConfig['host'];
    }
}
```

👉 Résultat :
- Tes secrets sont dans .env (jamais commités).
- Ton code lit via $_ENV automatiquement.
- Tu peux changer de config entre dev / staging / prod sans toucher au code.
