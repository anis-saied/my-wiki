---
sidebar_position: 2
title: Sass
slug: /dev/css/Sass
last_update:
  date: 2026-01-03
  author: Anis
---

# Sass


- [documentation](https://sass-lang.com/documentation/)


## cycle de compilation Sass → CSS.

- Les classes css sont générées au moment de la compilation SCSS en CSS (par Angular CLI ou Webpack, selon ton projet).
- Boucle Sass qui génère les classes : Quelque part dans ton code Sass (ou un fichier utilitaire du framework comme Bootstrap / Ng-Matero), tu as une boucle `@each` qui va transformer la map en vraies règles CSS.
  Exemple:

```css
// Définition d'une map Sass
$colors: (
  primary: blue,
  secondary: green,
  danger: red,
);

// Boucle pour générer des classes CSS
//La transformation automatique en classes .text-* et .bg-*.
@each $name, $color in $colors {
  .text-#{$name} {
    color: $color;
  }

  .bg-#{$name} {
    background-color: $color;
  }
}
```

Compilation Angular CLI : Quand tu fais _ng serve_ ou _ng build_ Sass parcourt la map et crée du CSS réel:

- → Angular CLI appelle Sass
- → Sass lit ces maps et les boucles
- → Sass écrit les classes CSS dans le fichier final (styles.css ou styles.bundle.css).

Résultat CSS compilé: Quand Sass compile ce code, il génère :

```css
// Le CSS final est du statique, prêt à être utilisé dans ton template.
.text-primary {
  color: blue;
}
.bg-primary {
  background-color: blue;
}

.text-secondary {
  color: green;
}
.bg-secondary {
  background-color: green;
}

.text-danger {
  color: red;
}
.bg-danger {
  background-color: red;
}
```

Exemple d’utilisation en HTML:

À l’exécution dans le navigateur: Quand ton app Angular tourne, le navigateur n’a plus aucune idée de Sass ou de maps.

```html
<p class="text-primary">Texte bleu</p>
<p class="text-secondary">Texte vert</p>
<p class="text-danger bg-secondary">Texte rouge sur fond vert</p>
```

## Concepts

### mixin

- Le terme vient de l’anglais “to mix in” → “mélanger, incorporer dans quelque chose”.
  - “Mix” = mélanger
  - “-in” = à l’intérieur

👉 Donc un mixin est littéralement un “élément qu’on mélange dans un autre”.

- Un **mixin** est une classe ou un bloc de code qui apporte des fonctionnalités qu’on peut mélanger dans d’autres classes.
- Un **mixin Sass** est un bloc de règles CSS réutilisable que tu peux “mélanger” dans d’autres sélecteurs.
- Le mixin ici joue le même rôle qu’en POO : ajouter un comportement réutilisable sans répéter du code.
  Exemple: Un mixin Sass

```css
@mixin rounded($radius: 5px) {
  border-radius: $radius;
}

.btn {
  @include rounded(10px);
}
```

Résultat CSS :

```css
.btn {
  border-radius: 10px;
}
```

## @import or @use or @forward

Sass fait la distinction entre @import (ancien comportement, tout est global) et @use (nouveau comportement, tout est scopé).

Même quand tu mets as \*, si ton global.scss n’expose pas lui-même les variables importées, elles ne remontent pas correctement.

Dans ton `global.scss`, tu as :

`@use './variables' as *;`

⚠️ Ici, Sass peut parfois “cacher” les variables importées via as \* quand elles viennent d’un autre fichier.
Le plus fiable est d’utiliser @forward plutôt que @use dans ton global.scss.

### Différence entre @use et @forward

@use → tu importes et tu peux consommer les variables dans le fichier courant.

@forward → tu ré-exportes les variables, mais elles ne sont pas dispo pour le fichier courant.
