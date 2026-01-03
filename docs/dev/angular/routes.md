---
title: Routes
slug: /dev/angular/routes
sidebar_position: 7
last_update:
  date: 2026-01-03
  author: Anis
---

# Routes
* Route guard = garde-barrière qui protège les routes (auth, droits, données prêtes…).
* Route = configuration (chemin → composant): la carte des routes possibles.
* Router = service/moteur qui gère la navigation: le conducteur.
* Navigation = aller vers une page (choisie).
* Redirection = être envoyé ailleurs (forcé).


## Route
- Une route = une configuration (une description statique)
  - c’est une règle qui dit “si l’URL est `/users/:id`, affiche `UserComponent`.
- Défini dans `app.routes.ts`.
```ts
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'users/:id', component: UserDetailComponent },
];
```
### activer une route
En Angular, “activer une route” signifie :

L’utilisateur demande une URL (ex: `/dashboard`).

Le Router cherche une correspondance dans la configuration des routes.

Si une route est trouvée ET autorisée (guards validés), Angular active cette route → ce qui déclenche :

l’instanciation du composant (DashboardComponent),

l’affichage du composant dans le `<router-outlet>`.

👉 Activer une route = autoriser et afficher le composant associé.

Si un guard retourne false ou un UrlTree, la route n’est pas activée → Angular bloque ou redirige.

### charger module ou routes
- then(m => m.routes) → charge des routes standalone (nouveau style).
- then(m => m.AdminModule) → charge un NgModule (ancien style).

Les deux font du lazy loading (le code n’est téléchargé que si on visite le path).

### Clés possibles dans une route

`path, component, redirectTo, pathMatch, children, loadChildren, canActivate, canDeactivate, canActivateChild, canLoad, resolve, data, outlet, title, matcher`

Exemple d’une route avec toutes les clés possibles

```ts
{
  path: 'profile/:id',
  component: ProfileComponent,                // composant affiché
  title: 'User Profile',                      // titre (Angular 14+)
  canActivate: [authGuard],                   // empêche accès si pas connecté
  canDeactivate: [unsavedGuard],              // empêche de quitter si données non sauvegardées
  canActivateChild: [childGuard],             // protège sous-routes
  canLoad: [adminGuard],                      // empêche lazy load si non autorisé
  resolve: { user: userResolver },            // charge user avant d’afficher
  data: { roles: ['admin', 'editor'] },       // données statiques personnalisées
  outlet: 'main',                             // outlet cible (par défaut = "primary")
  children: [                                 // sous-routes
    {
      path: 'settings',
      component: SettingsComponent,
    },
    {
      path: 'posts',
      loadChildren: () =>
        import('./posts/posts.routes').then(m => m.routes), // lazy routes standalone
    },
  ]
},
{
  path: '',
  redirectTo: 'home',                         // redirection automatique
  pathMatch: 'full'
},
{
  matcher: customUrlMatcher,                  // fonction custom pour matcher les URLs
  component: CustomPageComponent,
}
```

## Router

- Le Router = le moteur de navigation d’Angular.
- Il lit l’URL actuelle, cherche la route correspondante, et affiche le bon composant.
- C’est aussi un service (Router) qui permet de changer de page par code.
```ts
constructor(private router: Router) {}

goToProfile() {
  this.router.navigate(['/users', 42]);
}
```


## Différence entre navigation et redirection

* Navigation : volontaire (tu vas là où tu veux).
* Redirection : imposée (tu voulais aller à A, mais on t’envoie à B).

### Navigation
- Navigation = quand **l’utilisateur (ou ton code) va vers une autre page via le router**.
- Peut être déclenchée par :
  - un clic sur un `<a routerLink="/dashboard">`
  - `router.navigate(['/dashboard'])`
- Angular compare l’URL demandée aux routes configurées et affiche le bon composant.

* Exemple :
```ts
this.router.navigate(['/profile', user.id]);
```

### Redirection

- Redirection = une **navigation forcée** vers une autre route.
- Elle peut être définie dans :
  - le fichier de routes : `{ path: '', redirectTo: 'home', pathMatch: 'full' }`
  - un guard `(ex: authGuard → /login)`
  - du code (`router.navigate(['/login'])`)

* Exemple d’un guard qui redirige :
```ts
return router.parseUrl('/auth/login');
```
## guards

types de guards

### CanActivate
Autorise ou bloque l’accès à une route.

Exemple
```ts
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.isLoggedIn() ? true : router.parseUrl('/login');
};
```


Utilisation :
```ts
{ path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] }
```

➡️ Empêche un utilisateur non connecté d’entrer sur /dashboard.

### CanDeactivate
Vérifie si on peut quitter une page.

Exemple
```ts
export const unsavedGuard: CanDeactivateFn<FormComponent> = (component) => {
  return component.hasUnsavedChanges()
    ? confirm("Vous avez des modifications non sauvegardées. Quitter quand même ?")
    : true;
};
```


Utilisation :
```ts
{ path: 'form', component: FormComponent, canDeactivate: [unsavedGuard] }
```

➡️ Empêche de perdre des données si on quitte un formulaire non sauvegardé.

### CanActivateChild
Protège les sous-routes.

Exemple
```ts
export const adminGuard: CanActivateChildFn = () => {
  const auth = inject(AuthService);
  return auth.isAdmin();
};
```


Utilisation :
```ts
{
  path: 'admin',
  canActivateChild: [adminGuard],
  children: [
    { path: 'users', component: UserListComponent },
    { path: 'settings', component: SettingsComponent },
  ],
}
```

➡️ Toutes les sous-routes (/admin/users, /admin/settings) sont protégées par le guard.

### CanLoad
Empêche de charger un module lazy-loaded si l’utilisateur n’est pas autorisé.

Exemple
```ts
export const canLoadAdmin: CanLoadFn = () => {
  const auth = inject(AuthService);
  return auth.isAdmin();
};
```


Utilisation :
```ts
{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  canLoad: [canLoadAdmin],
}
```

➡️ Le module AdminModule ne sera même pas chargé si l’utilisateur n’est pas admin.
(Plus sécurisé car le code n’est pas téléchargé inutilement).

### Resolve
Pré-charge des données avant d’entrer dans une route.

Exemple
```ts
export const userResolver: ResolveFn<User> = (route) => {
  const userService = inject(UserService);
  return userService.getUserById(route.params['id']);
};
```


Utilisation :
```ts
{
  path: 'users/:id',
  component: UserDetailComponent,
  resolve: { user: userResolver }
}
```

➡️ Le composant UserDetailComponent ne sera affiché qu’après que userResolver ait renvoyé les données.

Dans le composant :
```ts
constructor(private route: ActivatedRoute) {
  this.route.data.subscribe(data => {
    console.log(data['user']); // l'utilisateur déjà chargé
  });
}
```
- `ActivatedRoute` représente la route courante activée
- `.data` contient les données associées à la route
  - des données statiques définies dans la config de la route : `{ path: 'home', component: HomeComponent, data: { title: 'Accueil' } }` → `data['title'] = "Accueil"`.
  - soit des données venant d’un resolver : `resolve: { user: userResolver }` → `data['user']` = l’utilisateur préchargé par le resolver.

👉 Donc dans ton exemple :
`data['user']` contient un objet User que le resolver a récupéré avant d’activer la route.
