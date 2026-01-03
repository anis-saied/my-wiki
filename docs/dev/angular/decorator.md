---
title: Decorator
slug: /dev/angular/decorator
sidebar_position: 3
last_update:
  date: 2026-01-03
  author: Anis
---

# Decorator

## @Injectable()

- `@Injectable()` = décorateur qui dit qu’une classe peut être injectée par Angular dans d’autres classes (services, composants, guards, etc.).
- Sans @Injectable, Angular ne sait pas comment fournir cette dépendance.

```ts
@Injectable({
  providedIn: 'root',
})
export class MyService {}
```

### options de providedIn
- 'root'` 
  - le service est disponible dans toute l’application (singleton global). Angular l’enregistre dans l’injector racine.
  - Service global, instance unique partagée partout.
  - Cas d’utilisation : authentification, configuration globale, API service.

- 'platform'
  - Partagé entre plusieurs applications Angular tournant sur la même page.
  - Rare, utile dans des micro-frontends.

- 'any'
  - Chaque module lazy chargé reçoit sa propre instance du service.
  - Si utilisé dans plusieurs modules, tu peux avoir plusieurs instances.
  - Cas d’utilisation : tu veux que le service soit indépendant par contexte (ex: cache isolé).

- Un module spécifique
  - Exemple: `@Injectable({ providedIn: MyModule })`
  - Le service n’est dispo que si MyModule est importé.
  - Cas d’utilisation : services très spécialisés à un module (par ex: AdminService seulement dans AdminModule).

### Cas sans providedIn

Si tu fais juste :
```ts
@Injectable()
export class MyService {}
```

👉 Alors tu dois l’ajouter manuellement dans la section dans `providers: []` d’un `NgModule`

```ts
@NgModule({
  providers: [MyService]
})
export class AppModule {}
```

Il n’y a plus de `NgModule`. 

Donc si tu fais :
```ts
@Injectable()
export class MyService {}
```
Tu dois l’ajouter dans les providers de l’application (souvent dans `app.config.ts`), ou dans un composant standalone.

Exemple avec `ApplicationConfig` :
```ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { MyService } from './my.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    MyService, // ✅ service déclaré ici car pas de providedIn
  ],
};
```
Exemple avec un *composant standalone* :

```ts
@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `...`,
  providers: [MyService],  // ✅ service limité à ce composant et ses enfants
})
export class DashboardComponent {
  constructor(private service: MyService) {}
}
```
