---
title: Cache
slug: /dev/php/Laravel/cache
sidebar_position: 1
last_update:
  date: 2026-01-03
  author: Anis
---

# cache

```bash
php artisan config:clear
php artisan cache:clear
php artisan optimize:clear
```

## Recommandation professionnelle

En développement :

```bash
php artisan optimize:clear
```

En production :

```bash
php artisan config:cache
```

Dans ton projet, le cache est configuré comme ceci :

Dans .env : `CACHE_DRIVER=database`

