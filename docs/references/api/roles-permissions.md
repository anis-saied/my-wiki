---
title: Rôles et permissions
slug: /references/api/roles-permissions
sidebar_position: 1
last_update:
  date: 2026-01-03
  author: Anis
---

# Rôles et permissions pour une API REST

| Rôle        | Description                                     | Utilisation typique                                                |
| ----------- | ----------------------------------------------- | ------------------------------------------------------------------ |
| **admin**   | Accès complet à toute l’API                     | Gestion des utilisateurs, rôles, permissions, données critiques    |
| **manager** | Accès avancé mais limité à certaines ressources | Gestion de contenus ou rapports, mais pas la configuration système |
| **user**    | Accès standard                                  | Consultation et modification de ses propres données                |
| **guest**   | Accès très limité                               | Consultation publique, lecture seule, pas de modification          |

## Permissions

Les permissions sont des actions, pas des rôles
Une permission décrit ce qu’on peut faire, par exemple :

order.create → permission pour créer une commande

post.edit → permission pour éditer un post

user.view → permission pour voir un utilisateur

Les permissions ne sont pas attachées aux rôles par leur nom, elles existent indépendamment :

admin.create n’a pas de sens. Tu n’as pas besoin de créer des permissions “admin.create”.

Users ↔ Roles ↔ Permissions ↔ Modèles

- Permissions → actions concrètes (order.create, user.edit)
- Rôles → groupes de permissions (admin = tout, manager = subset)
- Utilisateur → reçoit un rôle → hérite automatiquement des permissions de ce rôle
- Les permissions ne sont jamais attachées directement aux rôles par leur nom (admin.create n’existe pas)

Si ton API gère des ressources type users, posts, orders, tu peux créer :

Permission Description Exemple de rôle assigné
user.create Créer un utilisateur admin
user.view Voir les infos d’un utilisateur admin, manager
user.edit Modifier un utilisateur admin, manager
user.delete Supprimer un utilisateur admin
post.create Créer un post admin, manager
post.view Voir un post admin, manager, user
post.edit Modifier un post admin, manager
post.delete Supprimer un post admin
order.view Voir une commande admin, manager, user (si c’est la sienne)
order.edit Modifier une commande admin, manager
order.delete Supprimer une commande admin

Astuce : commence par des permissions simples et associe-les aux rôles, tu pourras ajouter des permissions plus tard si nécessaire.

### Permission naming convention

Permissions must represent actions on resources, not roles: `resource.action`
Where **action** ∈ `{create, read, update, delete}`.

Example:

- Model: order
- Permissions: order.create, order.read, order.update, order.delete

## REST endpoints (API design)

### Roles

```bash
GET    /api/roles
POST   /api/roles
PUT    /api/roles/{role}
DELETE /api/roles/{role}
```

### Permissions

```bash
GET    /api/permissions
POST   /api/permissions
```

Permissions are usually created once, not edited frequently.

### User ↔ Roles

```bash
POST   /api/users/{user}/roles/assign
POST   /api/users/{user}/roles/remove
```

Payload:

```json
{
  "role": "admin"
}
```

### Role ↔ Permissions

```bash
POST   /api/roles/{role}/permissions/assign
POST   /api/roles/{role}/permissions/remove
```

Payload:

````json
{
  "permissions": [
    "order.create",
    "order.update"
  ]
}```
````

## guard

- A guard defines how a user is authenticated.
- Laravel config: `config/auth.php`

- Guard : web

  - Authentication mechanism: Session / cookies
  - Typical usage: Browser apps, SPAs

- Guard : api
  - Authentication mechanism: Token / Bearer
  - Typical usage: REST APIs

=> **Spatie** binds **roles & permissions** to a **guard**.

- **guard_name** tells Spatie which authentication context the role or permission belongs to.

Example: This role can ONLY be used by users authenticated via the web guard.

```php
Role::create([
  'name' => 'admin',
  'guard_name' => 'web'
]);
```
Spatie documentation explicitly recommends web with Sanctum.