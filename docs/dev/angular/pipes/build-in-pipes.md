---
title: Build In Pipes
slug: /dev/angular/pipes/build-in-pipes
sidebar_position: 1
last_update:
  date: 2026-01-03
  author: Anis
---

# Pipes intégrés (Built-in Pipes) d’Angular

Angular fournit des **pipes intégrés** permettant de transformer des données directement dans les templates.

sidebar_position: 1
last_update:
  date: 2026-01-03
  author: Anis
---

## AsyncPipe

Permet de consommer des `Observable` ou `Promise` dans le template.

**Exemple**

```html
{{ user$ | async }}
```

**Résultat**: `{ id: 1, name: "Ali" }`

## CurrencyPipe

Formate un nombre en valeur monétaire selon la locale.

**Exemple**

```html
{{ 1234.5 | currency:'TND':'symbol':'1.2-2':'fr-TN' }}
```

**Résultat**

1 234,50 د.ت

## DatePipe

Formate une date.

**Exemple**

```html
{{ '2025-06-10' | date:'dd/MM/yyyy' }}
```

**Résultat**

10/06/2025

## DecimalPipe (NumberPipe)

Formate un nombre avec des décimales.

**Exemple**

```html
{{ 1234.5678 | number:'1.2-2' }}
```

**Résultat**

1 234,57

## PercentPipe

Transforme un nombre en pourcentage.

**Exemple**

```html
{{ 0.195 | percent:'1.0-2' }}
```

**Résultat**

19,5 %

## JsonPipe

Affiche un objet JSON (utile pour le debug).

**Exemple**

```html
{{ {id:1, name:'Ali'} | json }}
```

**Résultat**

```json
{
  "id": 1,
  "name": "Ali"
}
```

## LowerCasePipe

Met le texte en minuscules.

**Exemple**

```html
{{ 'ANGULAR' | lowercase }}
```

**Résultat**

angular

## UpperCasePipe

Met le texte en majuscules.

**Exemple**

```html
{{ 'angular' | uppercase }}
```

**Résultat**

ANGULAR

## TitleCasePipe

Met la première lettre de chaque mot en majuscule.

**Exemple**

```html
{{ 'angular built in pipes' | titlecase }}
```

**Résultat**

Angular Built In Pipes

## SlicePipe

Extrait une partie d’un tableau ou d’une chaîne.

**Exemple**

```html
{{ 'AngularFramework' | slice:0:7 }}
```

**Résultat**

Angular

## KeyValuePipe

Convertit un objet en paires clé/valeur itérables.

**Exemple**

```html
<div *ngFor="let item of {a:1, b:2} | keyvalue">
  {{ item.key }} : {{ item.value }}
</div>
```

**Résultat**

a : 1
b : 2

## I18nPluralPipe

Gère le pluriel selon un nombre.

**Exemple**

```html
{{ 2 | i18nPlural: {'=0':'Aucun élément','one':'Un élément','other':'# éléments'} }}
```

**Résultat**

2 éléments

## I18nSelectPipe

Affiche un texte selon une valeur donnée.

**Exemple**

```html
{{ 'male' | i18nSelect:{'male':'Homme','female':'Femme','other':'Autre'} }}
```

**Résultat**

Homme
