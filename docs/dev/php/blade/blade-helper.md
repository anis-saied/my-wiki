---
title: Blade Helper
slug: /dev/php/blade/blade-helper
sidebar_position: 1
last_update:
  date: 2026-01-03
  author: Anis
---

# Helper blade

## méthoded1: Helper PHP global

1. Créer un fichier helper

📁 `app/Helpers/blade_helpers.php`

```php
<?php

// empêche une redéclaration de la fonction.
// En PHP, déclarer deux fois la même fonction provoque une erreur fatale :
// Chargement multiple sans risque
// ✔ Compatible Blade / Controller / Command / Job
if (! function_exists('cfg')) {
/**
 * Helper Blade / PHP
 * ------------------
 * Retourne la valeur d’une configuration uniquement si elle est activée.
 *
 * @param array|null $config   Tableau de configuration sous la forme :
 *                             [
 *                               'value'   => mixed,
 *                               'enabled' => bool
 *                             ]
 * @param mixed      $default  Valeur par défaut retournée si :
 *                             - la config est absente
 *                             - la config est désactivée
 *                             - la valeur n’existe pas
 *
 * @return mixed
 */
function cfg(?array $config, $default = null)
{
    // ✅ Sécurité : si la configuration n’est pas un tableau valide
    // (ex: null, string, int), on retourne la valeur par défaut
    if (!is_array($config)) {
        return $default;
    }

    // ✅ Si la configuration existe mais est désactivée (`enabled = false`)
    // on ignore sa valeur et on retourne la valeur par défaut
    if (!($config['enabled'] ?? false)) {
        return $default;
    }

    // ✅ Cas nominal : la config est activée
    // → on retourne la valeur configurée
    // → fallback sur la valeur par défaut si 'value' est absente
    return $config['value'] ?? $default;
}

}
```

2. Charger automatiquement le helper (OBLIGATOIRE)

Dans `composer.json` :

```json
"autoload": {
    "files": [
        "app/Helpers/blade_helpers.php"
    ]
}
```

Puis exécute :

`composer dump-autoload`

3.  Utilisation partout (Blade ✅✅✅)

```css
background-color: {{ cfg($primary_bg_color, '#ba2121') }};
color: {{ cfg($primary_text_color, '#ffffff') }};
```

Avantages:
✅ Dans toutes les vues
✅ Sans @php
✅ Sans duplication
✅ Testable
✅ Propre architecture Laravel
