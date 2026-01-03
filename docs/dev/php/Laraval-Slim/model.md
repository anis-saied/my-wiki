---
title: Model
slug: /dev/php/Laraval-Slim/model
sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

# Model

## propriétés dans un Model Laravel

Un **Model** Eloquent dans Laravel peut contenir plusieurs propriétés utiles. Voici une liste complète avec explications et petits exemples.

sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

### 1. `$table`

Permet de définir le nom de la table associée au modèle si ce n’est pas le pluriel du nom du modèle.

```php
protected $table = 'courses';
```

sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

### 2. `$primaryKey`

Définit la clé primaire du modèle.

```php
protected $primaryKey = 'course_id';
```

sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

### 3. `$fillable`

Liste blanche des attributs pouvant être remplis par assignation massive.

```php
protected $fillable = ['name', 'description', 'color'];
```

sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

### 4. `$guarded`

Inverse de `$fillable` : liste noire des attributs protégés.

```php
protected $guarded = ['id'];
```

sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

### 5. `$hidden`

Cache des attributs lorsqu’un modèle est converti en JSON ou en tableau.

```php
protected $hidden = ['created_at', 'updated_at'];
```

sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

### 6. `$visible`

Liste explicite des attributs à rendre visibles (le reste est caché).

```php
protected $visible = ['name', 'description'];
```

sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

### 7. `$casts`

Convertit automatiquement les types des attributs.

```php
protected $casts = [
    'is_active' => 'boolean',
    'created_at' => 'datetime',
];
```

sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

### 8. `$dates` (⚠️ obsolète depuis Laravel 7+)

Ancienne façon de caster les dates (remplacée par `$casts`).

```php
protected $dates = ['created_at', 'updated_at'];
```

sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

### 9. `$appends`

Ajoute des attributs calculés (via accessors) lors de la sérialisation.

```php
protected $appends = ['full_title','total'];

public function getFullTitleAttribute()
{
    return $this->name . ' - ' . $this->full_name;
}
```

Un append :

- n’existe pas dans la base
- n’est pas stocké dans l’objet
- est calculé à la volée
- `->sum('champ')` ne marche PAS avec un append
  - Laravel ne peut pas l’additionner automatiquement: `$collection->sum('total');` // ❌ 0 ou erreur
- Ce qui fonctionne avec append : **sum() avec callback**
  - `$total = $collection->sum(fn ($item) => $item->total);`
  - Fonctionne avec :
    - append
    - accessor
    - propriété calculée
- manuellement;

```php
$total = 0;
foreach ($collection as $item) {
    $total += $item->total_global;
}
```
**Règles d'or**
- Si tu dois faire un `sum()` → la valeur DOIT être une colonne BD
- voir: `withSum` c'est très simple



### 10. `$timestamps`

Active ou désactive les timestamps automatiques (`created_at` et `updated_at`).

```php
public $timestamps = true; // ou false
```

sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

### 11. `$incrementing`

Indique si la clé primaire s’incrémente automatiquement.

```php
public $incrementing = false;
```

sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

### 12. `$keyType`

Type de la clé primaire (`int` ou `string`, souvent pour UUID).

```php
protected $keyType = 'string';
```

sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

### 13. `$connection`

Permet de définir une connexion différente de celle par défaut.

```php
protected $connection = 'mysql2';
```

sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

### 14. `$with`

Charge automatiquement certaines relations à chaque requête.

```php
protected $with = ['documents', 'chapters'];
```

sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

### 15. `$touches`

Met à jour automatiquement `updated_at` du parent lors d’une modification.

```php
protected $touches = ['course'];
```

sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

### 16. `$attributes`

Définit des valeurs par défaut pour certains attributs.

```php
protected $attributes = [
    'is_active' => true,
];
```

sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

### ✅ Exemple complet

```php
class Course extends Model
{
    protected $table = 'courses';
    protected $primaryKey = 'course_id';
    public $timestamps = true;

    protected $fillable = ['name', 'full_name', 'description', 'color'];
    protected $hidden = ['created_at', 'updated_at'];
    protected $casts = ['is_active' => 'boolean'];
    protected $appends = ['full_title'];
    protected $with = ['chapters'];

    public function getFullTitleAttribute()
    {
        return $this->name . ' - ' . $this->full_name;
    }

    public function chapters()
    {
        return $this->hasMany(Chapter::class);
    }
}
```

sidebar_position: 5
last_update:
  date: 2026-01-03
  author: Anis
---

### 📚 Références

- [Laravel Eloquent - Docs Officielles](https://laravel.com/docs/eloquent)
- [Eloquent Serialization](https://laravel.com/docs/eloquent-serialization)
