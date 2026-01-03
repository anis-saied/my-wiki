---
title: Trait
slug: /dev/php/Laraval-Slim/trait
sidebar_position: 9
last_update:
  date: 2026-01-03
  author: Anis
---

# Trait

## Principe :

Un morceau de code que tu peux inserer dans une classe avec use.

Permet de partager des méthodes entre plusieurs classes tout en ayant accès à $this.

## Exemple :

```php
namespace App\Traits;

trait LoggerTrait {
    public function log($msg) {
        echo "[LOG] " . $msg;
    }
}

class MyClass {
    use LoggerTrait;

    public function doSomething() {
        $this->log("Action faite");
    }
}
```

## Avantages :

Permet d’utiliser $this pour accéder aux propriétés et méthodes de la classe.

Idéal pour les fonctionnalités “attachées” à une classe mais réutilisables.

## Inconvénients :

Ne peut pas être utilisé seul, doit être inséré dans une classe.

Peut créer des conflits si plusieurs traits ont des méthodes avec le même nom.
