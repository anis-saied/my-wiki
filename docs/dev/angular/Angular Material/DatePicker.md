---
title: DatePicker
slug: /dev/angular/Angular Material/DatePicker
sidebar_position: 1
last_update:
  date: 2026-01-03
  author: Anis
---

# DatePicker

- **Angular Material Datepicker** travaille toujours avec **Date**
- un MatDatepicker classique (jour/mois/année), il faut toujours convertir la valeur string en Date côté composant avant de la passer au MatDatepicker

## le pipe `DatePipe`

permet de sauvegarder une date correctement

- Importation : `import { DatePipe } from '@angular/common';`
- Fourniture dans le composant :

```js
@Component({
  providers: [DatePipe]
})
```

- Injection dans le constructeur : `constructor(private datePipe: DatePipe) {}`
- Utilisation pour formater une date avant de l’envoyer au backend :

```js
const formattedDate = this.datePipe.transform(
  this.headerInput.date,
  "yyyy-MM-dd"
);
```

==> `'yyyy-MM-dd'` produit une date au format standard (ex: 2025-12-31) en heure locale, évitant le décalage de -1 jour dû à toISOString().

- Avantage principal :
  Permet de formater les dates facilement en Angular sans se soucier des fuseaux horaires ou des conversions UTC.
