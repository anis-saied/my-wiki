---
title: Build Production
slug: /dev/php/Laravel-Vue-Inertia/build-production
sidebar_position: 1
last_update:
  date: 2026-01-03
  author: Anis
---

# Build de production

## build

```bash
npm install
npm run build
```

Résultat attendu : `public/build/`

**Ce dossier DOIT exister avant le déploiement.**

## Désactiver ce qui est dev-only

Vérifie que ces éléments ne sont PAS actifs :

- Laravel Debugbar
- Telescope
- Logs trop verbeux
- Dump / dd()
- Dans `config/app.php` : `'debug' => env('APP_DEBUG', false),`

## Permissions fichiers (simulation prod)

Vérifie que Laravel peut :

- écrire les logs
- créer le cache
- compiler les vues

```bash
chmod -R 775 storage bootstrap/cache
```

## Tester les caches Laravel

1. Cache config: `php artisan config:cache`
2. Cache routes : `php artisan route:cache`

⚠️ Si une erreur apparaît → prod cassée.

## Vérifier le comportement en mode production

Lance le serveur :

```bash
php artisan serve
```

Et vérifie :

- erreurs silencieuses (logs uniquement)
- pas d’exception affichée
- assets chargés depuis /build
-

## Logs et monitoring local

```bash
tail -f storage/logs/laravel.log
```

👉 Toute erreur ici doit être corrigée AVANT le déploiement.


## check list finale
| Élément          | OK |
| ---------------- | -- |
| APP_DEBUG=false  | ⬜  |
| MySQL user dédié | ⬜  |
| Migrations OK    | ⬜  |
| `npm run build`  | ⬜  |
| `config:cache`   | ⬜  |
| `route:cache`    | ⬜  |
| Permissions      | ⬜  |
| Pas de dev tools | ⬜  |
