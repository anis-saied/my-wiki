---
title: DB
slug: /dev/php/Laravel-Vue-Inertia/DB
sidebar_position: 2
last_update:
  date: 2026-01-03
  author: Anis
---

# DB

## Où le type de base est configuré
dans le fichier principal : `.env` à la racine du projet Laravel :
La ligne clé est : `DB_CONNECTION=mysql` C’est elle qui définit le type de base de données.

## Où Laravel lit cette configuration

Laravel ne lit jamais directement `.env`. Il passe par : `config/database.php` Extrait : 
` 'default' => env('DB_CONNECTION', 'mysql'), `

Puis la config MySQL :
```php
'mysql' => [
    'driver' => 'mysql',
    'host' => env('DB_HOST'),
    'database' => env('DB_DATABASE'),
    'username' => env('DB_USERNAME'),
    'password' => env('DB_PASSWORD'),
]
```

👉 Tu ne modifies presque jamais config/database.php, seulement .env.

## Vérifier le type de base réellement utilisé
```bash
php artisan tinker
DB::connection()->getDriverName();
```
Résultat attendu : *mysql*
