---
title: Angular
slug: /dev/angular/angular
sidebar_position: 1
last_update:
  date: 2026-01-03
  author: Anis
---

# Angular 
## fork puis clone
```bash
rm -rf node_modules package-lock.json
npm cache clean --force # supprimer le cache
npm install
```
## dependences principales
```bash
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    


Angular CLI: 20.2.2
Node: 22.18.0
Package Manager: npm 11.5.2
OS: linux x64
    

Angular: 20.2.4
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, router

Package                              Version
--------------------------------------------
@angular-devkit/architect            0.2002.2
@angular-devkit/build-angular        20.2.2
@angular-devkit/core                 20.2.2
@angular-devkit/schematics           20.2.2
@angular/cdk                         20.2.2
@angular/cli                         20.2.2
@angular/material                    20.2.2
@angular/material-date-fns-adapter   20.2.2
@schematics/angular                  20.2.2
rxjs                                 7.8.2
typescript                           5.8.3
zone.js                              0.15.1
```
## Angular EcoSystem

1. [Material Design 3](https://m3.material.io/): Material Design 3 is Google’s open-source design system for building beautiful, usable products.


## Angular Libraries

1. [ngx-spinner](https://www.npmjs.com/package/ngx-spinner)
2. [watermark](https://github.com/acrodata/watermark)
3. [ng-matero extensions](https://ng-matero.github.io/extensions)

## Angular 17+

Depuis Angular 17, les contrôles de flux (*ngIf, *ngFor, etc.) ont été remplacés par une nouvelle syntaxe built-in control flow (@if, @for, …).

*ngIf fonctionne encore, mais il sera supprimé dans Angular 22. Donc il faut migrer vers @if dès maintenant.
## créer un projet à partir d'une template
1- Copier la template (recommandé pour starter): Cloner ou copier le projet starter dans un nouveau dossier 
`-r` signifie *récursif* pour tout le contenu du dossier, y compris les sous-dossiers et fichiers, soit copié.
```bash
cp -r ng-matero my-new-project 
cd my-new-project
```

2- Supprimer le dossier .git pour ne pas conserver l’historique du starter :
```bash
rm -rf .git
```

3- Initialiser un nouveau repo Git pour ton projet :
```bash
git init
git add .
git commit -m "Initial commit from Angular starter template"
```

- Avantages :  complètement indépendant, tu peux utiliser la template comme base infiniment sans toucher à l’original.
- Inconvénient : tu ne peux pas facilement synchroniser avec la template si elle change dans le futur.

## dev
- Angular est en mode **watch** : toutes les modifications seront recompilées automatiquement.

## concepts d'angular

### Concepts de base d’Angular

- Modules (`@NgModule`) : conteneurs de features.
- Components (`@Component`) : briques UI avec template et logique.
- Directives : comportements appliqués au DOM (`*ngIf`, `ngClass`).
- Pipes : transformations de données dans le template (`| date`, `| uppercase`).
- Services (`@Injectable`) : logique métier, réutilisable, injection de dépendances.
- Routing : navigation entre pages, gestion des routes.
- Data binding :
  - Interpolation : `{{ variable }}`
  - Property binding : `[src]="imageUrl"`
  - Event binding : `(click)="onClick()"`
  - Two-way binding : `[(ngModel)]="value"`
- Dependency Injection (DI) : services injectés automatiquement.
- Lifecycle hooks (`ngOnInit`, `ngOnDestroy`, etc.).
- Lazy Loading : chargement différé des modules.
- Reactive Forms & Template-driven forms : gestion des formulaires.
- Observables (RxJS) : gestion asynchrone, flux de données.

### Conventions Angular

- Fichiers suffixés :
  - `.module.ts` → module
  - `.component.ts` → composant
  - `.directive.ts` → directive
  - `.pipe.ts` → pipe
  - `.service.ts` → service
- Nom des classes en **PascalCase** (ex: `UserService`).
- Sélecteurs en **kebab-case** (ex: `app-user-list`).
- Organisation : app/core, app/shared, app/features.

### fichier .ts simple
- C’est n’importe quel fichier TypeScript classique (classe utilitaire, modèle de données, service sans décorateur Angular, constantes, helpers, etc.).
- Il n’est pas forcément reconnu par Angular comme une “brique” du framework.
  
Exemple: aucun décorateur Angular comme `@Component` ou `@Injectable`.
```ts
export interface User {
  id: number;
  name: string;
}
```

### Module (.module.ts)
- c'est un conteneur de features
- Représente un contenant logique regroupant des composants, directives, pipes et services.
- Défini avec le décorateur @NgModule.
- Sert à organiser le code et gérer le lazy loading.

Exemple :
```ts
@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [CommonModule, FormsModule],
  exports: [UserListComponent]
})
export class UserModule {}
```

#### Lazy Loading en Angular
👉 Définition

- Technique qui consiste à charger les modules uniquement quand ils sont nécessaires (au lieu de tout charger dès le démarrage).
- performance (modules chargés à la demande).
- Cela permet de réduire le temps de chargement initial de l’application.

👉 Quand l’utiliser ?

- Pour des applications moyennes ou grandes avec plusieurs fonctionnalités.
- Pour des pages rarement consultées (exemple : admin, paramétrage, rapports).

👉 Comment l’utiliser ?

- Créer un module feature (ex: `UserModule`).
- Configurer le `AppRoutingModule` avec `loadChildren`.

```ts
const routes: Routes = [
  { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
];
```

Dans UserModule, définir les routes locales avec `RouterModule.forChild(routes)`.

➡️ Résultat : le *bundle du module UserModule* sera téléchargé uniquement quand l’utilisateur accède à `/users`.

### Component (.component.ts)
- C’est une brique visuelle : un bout d’interface (HTML + CSS + logique TS).
- Défini avec le décorateur @Component.
- Utilisé dans des vues.

Exemple :
```ts
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users = [];
}
```

### Directive (.directive.ts)

- C’est une classe qui étend le comportement du DOM sans créer de nouveau template.
- Deux types principaux :
  - Structurelles (*ngIf, *ngFor) → modifient la structure DOM.
  - Attributs (comme matTooltip) → ajoutent un comportement/une apparence.

Exemple :
```ts
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.background = 'yellow';
  }
}
```


### Page

- Ce n’est pas une brique Angular “officielle”, mais une convention.

Dans Angular (et particulièrement Ng-Matero), une “page” est un composant de haut niveau qui représente une vue entière (souvent liée à une route).

Exemple : user-list.page.ts ou dashboard.page.ts.

Elle utilise des composants plus petits et se charge d’afficher une section complète de l’application.



## VS Code Extensions for Angular
- **ng-template**
- **angular-schematics**:  just right-click the destination folder, and start coding (no command line!)
- **quick-material-icons**: permet de chercher un nom de icon à partir de vscode
- **SCSS IntelliSense**
- **EditorConfig for VS Code**
- **sass-indented**: Indented Sass syntax Highlighting, Autocomplete & Formatter
- **vscode-stylelint**
- **prettier-vscode**
- **ngx-translate-lookup**
- **Material Icon Theme**: extension d’icônes la plus installée du Marketplace (plus de 30 millions d’installations).Auteur : Philipp Kief

on peut les installer automatiquement:
- à la racine de projet (pas sous /src), dans le dossier `.vscode` créer un fichier `extensions.json` contenant
```json
{
  // See http://go.microsoft.com/fwlink/?LinkId=827846 to learn about workspace recommendations.
  // Extension identifier format: ${publisher}.${name}. Example: vscode.csharp

  // List of extensions which should be recommended for users of this workspace.
  "recommendations": [
    "angular.ng-template",
    "cyrilletuzi.angular-schematics",
    "apk27.ngx-translate-lookup",
    "esbenp.prettier-vscode",
    "stylelint.vscode-stylelint",
    "syler.sass-indented",
    "editorconfig.editorconfig",
    "box-of-hats.quick-material-icons",
    "mrmlnc.vscode-scss"
  ]
}
```

## comment fonctionne angular
- le nouveau style de démarrage Angular (introduit à partir d’Angular 14 avec le mode *standalone* components).
- 
### main.ts
- `bootstrapApplication` est une fonction qui remplace l’ancien `platformBrowserDynamic().bootstrapModule(AppModule)`
- Elle permet de démarrer l’application Angular sans module (*NgModule*) → avec seulement un composant racine **standalone**.

Exemple:
- ancien style Angular
```ts
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```
Maintenant (nouveau style) :
```ts
bootstrapApplication(App, appConfig);
```

- **appConfig** contient la configuration de l’application (providers, routes, animations, etc.). Au lieu de tout mettre dans un AppModule, on définit ça dans un objet ApplicationConfig.

Exemple typique de app.config.ts :
```ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
  ]
};
```

- **App** est le composant racine standalone (souvent AppComponent avant). Il est défini avec *standalone*: true au lieu d’être déclaré dans un module.

Exemple `app.ts` :
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<h1>Hello Angular Standalone!</h1>`
})
export class App {}
```

- Démarre Angular en prenant :
```ts
// bootstrapApplication: nouvelle API de démarrage Angular sans NgModule.
// App: composant racine standalone.
// appConfig : configuration des providers (routes, http, etc.).
bootstrapApplication(App, appConfig)
```
- le composant racine → *App*
- la configuration → *appConfig*

Comme le démarrage est asynchrone, on peut intercepter les erreurs (par ex. si Angular échoue au bootstrap).
```ts
.catch((err) => console.error(err)); // gestion des erreurs au démarrage.
```

### provider ? interceprtor ? inject() ?
les choses cui commencent par provide... utilisés dans appconfig providers
to chat gpt : expliquer le contenude 


### appconfig.ts

- depuis Angular 15+ où préfère utiliser une approche **standalone** (sans *AppModule*).

#### ApplicationConfig 
- est une interface fournie par Angular.
- Elle permet de définir une configuration globale de l’application via la propriété *providers* (fournisseurs).
- Ces **providers** sont des services ou fonctionnalités *disponibles partout dans l’app* (exemple : HttpClient, Router, traduction, Material...).
- On s’en sert au démarrage de l’application, dans le **main.ts** via `bootstrapApplication(AppComponent, appConfig)`.

👉 Donc : appConfig = la “boîte à outils” que l’app va utiliser partout.

* **provideAppInitializer**: Permet d’exécuter du code avant que l’app ne démarre (exemple : charger les paramètres, vérifier l’utilisateur, préparer les traductions).
* `provideHttpClient(withInterceptors(interceptors)),` Fournit HttpClient avec une chaîne d’intercepteurs (pour ajouter des headers, gérer les erreurs globales, tokens JWT, etc.).
