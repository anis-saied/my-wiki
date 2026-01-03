---
title: Observable
slug: /dev/angular/RxJS/Observable
sidebar_position: 1
last_update:
  date: 2026-01-03
  author: Anis
---

# Observable

RxJS et l’architecture réactive qu’Angular utilise partout (services, formulaires, http, etc.).

```bash
Object
└── Subscription #pour la gestion des abonnements
└── Observable<T> #on peut s’y abonner
    └── Subject<T>   #un Observable multicasting
        ├── BehaviorSubject<T> # et on peut y injecter des valeurs avec .next()
        ├── ReplaySubject<T>
        ├── AsyncSubject<T>
```

* **Observable** → interface de base (read-only, subscribe())
* **Subject** → à la fois Observable + Observer (next())
* **BehaviorSubject** → Subject + dernière valeur conservée
* **ReplaySubject** → conserve un historique configurable (n dernières valeurs)
* **AsyncSubject** → émet seulement la dernière valeur au moment de complete()


Cas d’usage :

Subject → événements temps réel.

BehaviorSubject → état actuel.

ReplaySubject → historique.

AsyncSubject → résultat unique final.


Observable = celui qui émet les valeurs.

Observer = celui qui écoute ces valeurs.

Le choix se fait au moment où tu appelles `observable.subscribe(observer)`.
L’Observable ne sait même pas qui va l’écouter → il fournit juste un mécanisme d’abonnement.

## Observable
- Dans RxJS, un **Observable** est la classe de base qui représente un flux de données asynchrone(*stream*).
- On peut la voir comme une **promesse étendue** qui ne donne *pas une seule valeur*, mais un *flux de valeurs dans le temps*.
- Il émet des valeurs au fil du temps. Exemple : `http.get<User>()` ou `interval(1000)`.
- Un Observable dit : « Voilà les données, abonne-toi pour les recevoir. »
- Observable = mot qui vient de observer → un flux que l’on observe.
- Propriété observable en Angular = une variable de composant/service qui contient un Observable.
- Le mot observable vient du verbe to observe en anglais → observer, surveiller, remarquer.
- En programmation réactive, un Observable est une source de données à laquelle on peut s’abonner pour "observer" ses changements.
- Le terme a été formalisé dans le ReactiveX (Reactive Extensions), une bibliothèque née chez Microsoft vers 2011.
- Concrètement : un Observable = un objet qui émet une suite d’événements ou valeurs dans le temps, et un Observer = celui qui écoute.

Exemple de propriété observable en Angular
```ts
user$: Observable<User>;
```

- "propriété observable" veut simplement dire : "C’est une variable de classe qui contient un Observable."
- C’est une propriété de la classe qui au lieu de contenir une valeur directe (User), elle contient un `Observable<User>`, c’est-à-dire un flux d’utilisateurs (qui peut changer dans le temps).
- c’est un flux de User. Donc chaque émission contient un seul User (pas une liste).
- `user$` contient toujours *le dernier utilisateur courant*, *pas une collection*.
- Le suffixe `$` est une convention de nommage (non obligatoire) qui indique qu’il s’agit d’un *flux observable*.

Note: pour gérer une liste d’utilisateurs
```ts
private users$ = new BehaviorSubject<User[]>([]);
```
- Là, chaque émission contient un tableau de User
- `users$` = flux de collections d’utilisateurs.

#### Observer

C’est celui qui consomme les données de l’Observable.


En RxJS, un Observer est simplement un objet qui peut avoir jusqu’à 3 méthodes.

il « consomme » (réagit aux émissions) les données émises via trois callbacks :

next(value) → appelée quand une valeur est émise

error(err) → appelée quand une erreur survient

complete() → appelée quand le flux se termine

C’est une interface très simple :
```ts
interface Observer<T> {
  next?: (value: T) => void;
  error?: (err: any) => void;
  complete?: () => void;
}
```

l’Observer qui s’abonne au Subject (ou à n’importe quel Observable).

### Ecrire un Observer
Tu peux écrire ton observer de plusieurs façons :

a) Version complète
```ts
const myObserver = {
  next: (value: number) => console.log('Valeur:', value),
  error: (err: any) => console.error('Erreur:', err),
  complete: () => console.log('Flux terminé')
};
```

Puis tu t’abonnes :
```ts
subject.subscribe(myObserver);
``

b) Version partielle (juste `next`)
```ts
subject.subscribe({
  next: (value) => console.log('Valeur:', value)
});
```
l’objet `{ next: (value) => console.log(...) }` est bien un Observer (incomplet, mais valide).

c) Version raccourcie (si tu veux **juste écouter next**)
```ts
subject.subscribe((value) => console.log('Valeur:', value));
```

Ici RxJS transforme ta fonction en Observer minimal derrière le rideau.
👉 Un Observer dit : « Je suis intéressé par tes valeurs, donne-les-moi. »

```ts
import { Observable } from 'rxjs';

const obs$ = new Observable<number>((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.complete();
});

// Observer = un objet qui réagit aux émissions
const observer = {
  next: (v: number) => console.log('valeur =', v),
  error: (e: any) => console.error('erreur =', e),
  complete: () => console.log('fini')
};

// Lier Observable à Observer
obs$.subscribe(observer);
```

Résultat :

```ts
valeur = 1
valeur = 2
fini
```

`new Observable(...)` → crée une source de données.

La fonction (subscriber) => `{...}` → définit comment les données sont envoyées.

`subscriber.next(...) `→ envoie une donnée.

`subscriber.complete()` → clôture le flux proprement.

`subscriber.error(...) `→ arrête le flux avec une erreur.

**Fonctions d’un Observer**

Quand on s’abonne à un Observable via .subscribe(), on peut définir jusqu’à 3 callbacks :
```ts
observable$.subscribe({
  next: (value) => console.log("Nouvelle valeur:", value),
  error: (err) => console.error("Erreur:", err),
  complete: () => console.log("Flux terminé")
});
```

Donc un **Observer** peut réagir avec :

`next(value)` → à chaque valeur reçue

`error(err)` → si une erreur survient

`complete()` → quand le flux se termine

### Subject
- ce qui est soumis
- Pas de valeur initiale.
- N’émet que les valeurs arrivées après l’abonnement.
- Ex : événement utilisateur (clics, touches, etc.).
```ts
const subject = new Subject<number>();
subject.next(1); // cette valeur est fournie avant l'abonnement ne sera pas pris en considération
subject.subscribe(v => console.log(v)); // rien affiché
subject.next(2); // affichera 2
```

En programmation réactive, un Subject est à la fois :
- un Observable (on peut s’y abonner pour "observer"),
- un Observer (il peut recevoir des valeurs via .next()).

C’est comme un intermédiaire : tu lui envoies des données (next) → il les diffuse à tous ses "observateurs".

Résumé : **Subject = Observable + Observer** (pont entre une source de données et plusieurs abonnés).
```ts
class Subject<T> extends Observable<T> implements Observer<T> {
  next(value: T): void;
  error(err: any): void;
  complete(): void;
}
```

Le Subject ne fait pas de subscribe.

C’est l’Observer qui s’abonne (`subject.subscribe(observer)`), et ensuite c’est le Subject qui pousse des valeurs aux abonnés via next.


### BehaviorSubject
- **BehaviorSubject = Subject + valeur initiale + retient la dernière valeur pour les nouveaux abonnés.**
- BehaviorSubject est une sous-classe de Subject (dans RxJS).
- C’est un Observable (on peut s’y abonner).
- C’est aussi un Observer (on peut y injecter des valeurs avec .next()).
- La différence principale par rapport à un Subject simple :
  - Il garde en mémoire la dernière valeur émise et la fournit immédiatement aux nouveaux abonnés.
- Nécessite une valeur initiale.
- Émet immédiatement la dernière valeur au nouvel abonné.
- Ex : état courant d’un utilisateur, thème appli, configuration.
```ts
const behavior = new BehaviorSubject<number>(0);
behavior.subscribe(v => console.log(v)); // affiche 0 (valeur initiale)
behavior.next(1); // affiche 1
```

Exemple:
```ts
private user$ = new BehaviorSubject<User>({});
```
On veut toujours avoir l’état courant de l’utilisateur :

Au premier abonnement (par exemple un composant ProfileComponent), il reçoit tout de suite le dernier User.

Quand le service charge un nouvel utilisateur depuis le serveur :
```ts
this.user$.next(loadedUser);
```

Tous les abonnés reçoivent automatiquement la mise à jour.

C’est exactement le cas d’usage typique de BehaviorSubject : gérer l’état courant partagé dans toute l’application.

### ReplaySubject

Stocke n valeurs passées (buffer).

Tout nouvel abonné reçoit l’historique.

Ex : chat, log système, historique de navigation.

```ts
const replay = new ReplaySubject<number>(2);
replay.next(1);
replay.next(2);
replay.next(3);
replay.subscribe(v => console.log(v)); // affiche 2, 3
```

### AsyncSubject

Ne donne que la dernière valeur quand on appelle .complete().

Ex : opération asynchrone qui ne renvoie qu’un résultat final.
```ts
const async = new AsyncSubject<number>();
async.next(1);
async.next(2);
async.subscribe(v => console.log(v));
async.next(3);
async.complete(); // affiche 3 (la dernière valeur au moment du complete)
```

## disponibilité des données
Quand on appelle subject.next(value) (ou observer.next(value) depuis l’Observable), la valeur est immédiatement transmise à tous les abonnés existants.

Est-ce que la donnée reste disponible après ?

* **Observable** "classique" (par ex. créé avec new Observable(...) ou un Subject) → la valeur est éphémère.

Si un nouvel abonné s’inscrit après l’émission, il ne reçoit pas les anciennes valeurs.

Chaque next écrase implicitement le précédent (car il n’existe pas de stockage par défaut).

* **BehaviorSubject** → garde la dernière valeur en mémoire. Un nouvel abonné recevra immédiatement la dernière valeur.

* **ReplaySubject** → garde un historique configurable (par exemple les 3 dernières valeurs).

* **AsyncSubject** → ne donne que la dernière valeur, mais uniquement au moment du complete().

Donc :

Avec **Subject**, la valeur est perdue après émission.

Avec **BehaviorSubject** ou **ReplaySubject**, la valeur reste accessible pour les prochains abonnés.

## Examples

### Exemple avec plusieurs Observables

```ts
import { BehaviorSubject, ReplaySubject, AsyncSubject, Subject } from 'rxjs';

// 1️⃣ Subject (valeurs éphémères)
const subject = new Subject<number>();
subject.subscribe({
  next: (v) => console.log('Subject observer A:', v)
});
subject.next(1);
subject.next(2);
subject.subscribe({
  next: (v) => console.log('Subject observer B:', v)
});
subject.next(3);
// 👉 Observer B ne reçoit que "3", pas "1" ni "2"

// 2️⃣ BehaviorSubject (garde la dernière valeur)
const behavior = new BehaviorSubject(0); // valeur initiale obligatoire
behavior.next(10);
behavior.subscribe({
  next: (v) => console.log('Behavior observer:', v)
});
// 👉 reçoit "10" immédiatement, même si émis avant

// 3️⃣ ReplaySubject (garde un historique)
const replay = new ReplaySubject(2); // garde les 2 dernières valeurs
replay.next(100);
replay.next(200);
replay.next(300);
replay.subscribe({
  next: (v) => console.log('Replay observer:', v)
});
// 👉 reçoit "200" et "300" directement

// 4️⃣ AsyncSubject (n’émet que la dernière valeur au complete)
const async = new AsyncSubject<number>();
async.next(5);
async.next(6);
async.subscribe({
  next: (v) => console.log('Async observer:', v),
  complete: () => console.log('Async terminé')
});
async.next(7);
async.complete();
// 👉 reçoit seulement "7", et uniquement après le complete
```

## Résumé rapide

`next()` → pousse une donnée vers les observateurs.

Par défaut, la donnée est éphémère et disparaît après émission.

`BehaviorSubject` → garde la dernière valeur.

`ReplaySubject` → garde un historique configurable.

AsyncSu`bject → n’émet que la dernière valeur au complete.

Un `Observer` peut utiliser `next`, `error`, `complete`.

**Petite analogie**

* L’Observable = la radio qui émet.
* L’Observer = l’auditeur qui branche son poste.
* subscribe() = tourner le bouton pour capter la station.
* Subject = une radio un peu spéciale qui peut aussi recevoir un flux et le redistribuer (ex. un relais).

### Rôles en RxJS

* **Observable** = producteur de données (peut être un Subject, BehaviorSubject, etc.).
* **Observer** = consommateur (celui qui réagit via next, error, complete).
* **Subscription** = le lien créé entre les deux.
  * La fonction `.subscribe(...)` s’appelle toujours sur l’**Observable** (ou un **Subject**, puisqu’il est aussi un **Observable**).
  * Et on passe en argument un **Observer** (sous forme d’objet `{next, error, complete}` ou juste une fonction `next`).
* 
