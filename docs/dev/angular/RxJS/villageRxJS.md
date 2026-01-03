---
title: VillageRxJS
slug: /dev/angular/RxJS/villageRxJS
sidebar_position: 2
last_update:
  date: 2026-01-03
  author: Anis
---

# village de RxJS

tous les concepts majeurs de RxJS dans une histoire immersive et drôle :

- Subject / BehaviorSubject / ReplaySubject / AsyncSubject → personnages
- next() / subscribe() / unsubscribe() / error() / complete() → actions
- Operators, timers, interval, hot/cold, multicast, schedulers → éléments du village et mécanique de l’histoire

## 

```ts
Object
└── Observable<T>
    ├── Subject<T>
    │   ├── BehaviorSubject<T>
    │   ├── ReplaySubject<T>
    │   └── AsyncSubject<T>
    └── Subscription
Operators & Schedulers (utilisés via pipe() et planification)
Observer<T> (consommateur des flux)
```
Astuce mnémotechnique : tu peux imaginer le “village RxJS” :

Les Subjects = habitants qui parlent

Les Observers = voisins qui écoutent

Les Operators = routes et transformations

Les Schedulers = horloges du village


## Le dîner au café du village RxJS – version complète

Un samedi, mes amis se retrouvent au café du village RxJS pour préparer une surprise pour Samira, qui n’est pas encore là.

Karim, le chef bavard du village, est un Subject : il émet (next()) chaque info à tous, le dîner, le gâteau, les jeux et les décorations 🎉. Il est tellement rapide que certains doivent subscribe() pour recevoir les infos en direct.

Samira arrive en retard. Elle est une BehaviorSubject, elle reçoit uniquement la dernière info disponible, ici la partie jeux. Elle se fâche à un moment et fait un unsubscribe() : elle ne veut plus être dérangée par le reste du flux 🍰.

Mourad, le chroniqueur officiel du village, est un ReplaySubject(n). Il veut tout savoir depuis le début, alors il subscribe() et rejoue toutes les valeurs passées, même celles que Samira a manquées. Mais quand Karim raconte une info incorrecte sur le dessert, Mourad fait un petit error() dans sa tête 😅.

Yassine, le sage silencieux, est un AsyncSubject : il ne fait un next() qu’à la fin, déclenchant l’action finale – “Samira arrive, tout est prêt !”.

Pendant ce temps, d’autres flux circulent dans le village :

Le timer et l’interval créent un flux régulier de rappels pour le gâteau 🎂.

Les operators map et filter transforment les idées : on ne garde que le meilleur menu et on élimine les plats qui ne plaisent à personne.

Le flux est multicast pour que plusieurs amis reçoivent la même info sans répéter le travail.

Karim peut choisir de publier les infos de façon hot (tout le monde reçoit en direct) ou cold (chacun reçoit à partir de son arrivée).

Les Schedulers déterminent quand les infos sont transmises : certains messages arrivent tout de suite, d’autres après un petit délai pour maintenir le suspense.

Enfin, quand tout est prêt, le flux se complète (complete()), signalant la fin de la surprise.

Moralité ? Dans le village RxJS, chaque messager et chaque flux ont un rôle précis : choisis bien tes abonnés, tes next(), unsubscribe(), et ne laisse pas d’erreur ruiner ta surprise… sinon ton dîner privé devient une fête publique avant l’heure 🎉.
