---
title: Buttons
slug: /dev/angular/buttons
sidebar_position: 2
last_update:
  date: 2026-01-03
  author: Anis
---

# Buttons

mat-button → bouton plat avec texte (ou texte + icône)→ texte seul ou texte + icône.

mat-icon-button → bouton rond uniquement pour icône → icône seule.

mat-raised-button → texte + icône avec fond.

mat-stroked-button, mat-flat-button… → variantes.

Quand tu mets les deux, Angular Material ne sait pas lequel appliquer → d’où l’erreur NG0300.

pour que `<button mat-raised-button>` fonctionne, tu dois aussi importer MatButtonModule

## Différence entre MatIconModule et MatButtonModule

MatIconModule → `<mat-icon>`

MatButtonModule → `<button mat-...>`

### MatIconModule

Sert uniquement à utiliser l’élément `<mat-icon>`.

Exemple :
```html
<mat-icon>arrow_back</mat-icon>
<mat-icon>add</mat-icon>
```

👉 Donc tu as besoin de `MatIconModule` si tu utilises des icônes Material.

Si tu écris juste une icône seule → `MatIconModule` suffit.

### MatButtonModule

Sert à styliser et activer le comportement des boutons Angular Material.

Exemples valides :
```html
<button mat-raised-button>Normal</button>
<button mat-flat-button>Plat</button>
<button mat-stroked-button>Contour</button>
<button mat-icon-button>
  <mat-icon>menu</mat-icon>
</button>
<button mat-fab><mat-icon>add</mat-icon></button>
<button mat-mini-fab><mat-icon>edit</mat-icon></button>
```

👉 Donc tu dois importer `MatButtonModule` chaque fois que tu mets une **directive** comme `mat-raised-button`, `mat-icon-button`, `mat-fab`, etc.

Si tu écris un bouton stylisé (`mat-raised-button`, `mat-icon-button`, …) → il te faut aussi `MatButtonModule`.

Et bien sûr, si tu combines les deux (le cas le plus fréquent) :

```html
<button mat-raised-button color="primary">
  <mat-icon>add</mat-icon> Ajouter
</button>
```
👉 Là il faut les deux : `imports: [MatButtonModule, MatIconModule]`
