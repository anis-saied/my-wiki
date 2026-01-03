---
title: Observer
slug: /dev/php/Laraval-Slim/Observer
sidebar_position: 6
last_update:
  date: 2026-01-03
  author: Anis
---

# Observer

1. Créer l’observer

crée le fichier `app/Observers/PaymentObserver.php`
```bash
php artisan make:observer PaymentObserver --model=Payment
```


2. Enregistrer l’observer (OBLIGATOIRE)

Dans `app/Providers/AppServiceProvider.php` et Laravel l’appelle ensuite Automatiquement par Eloquent.

```php
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\Payment;
use App\Observers\PaymentObserver;

class AppServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        Payment::observe(PaymentObserver::class);
    }
}
```
3. Comment appellé l'observer

Comment l’observer est déclenché

```md
| Action                       | Méthode Observer appelée                |
|-------------------------------|----------------------------------------|
| `Payment::create()`           | **saved()** ✅                          |
| `$payment->save()`            | **saved()** ✅                          |
| `$payment->delete()`          | **deleted()** ✅                        |
| `$payment->update()`          | **saved()** ✅                          |
| `Payment::query()->update()`  | **❌ AUCUN observer appelé**            |
```

⚠️ Attention :

Payment::where(...)->update([...]); // ❌ observer NON appelé

Toujours passer par un modèle instancié.

4. Comment vérifier que l’observer fonctionne
   
Test rapide
```php
Payment::create([
    'documentable_type' => InvoiceSale::class,
    'documentable_id' => 1,
    'amount' => 100,
    'paid_at' => now(),
]);
```

👉 Le status du document doit changer automatiquement
