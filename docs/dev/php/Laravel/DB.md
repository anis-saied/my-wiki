---
title: DB
slug: /dev/php/Laravel/DB
sidebar_position: 2
last_update:
  date: 2026-01-03
  author: Anis
---

# DB

## run migrations

```bash
php artisan migrate
```

## configurere DB

dans les fichiers

- `.env`
- `config/database.php`

## tinker
```bash
php artisan tinker
DB::connection()->getDriverName();

```

## tester migrations et seeders
```bash
php artisan migrate:fresh --seed
php artisan migrate --force
```
