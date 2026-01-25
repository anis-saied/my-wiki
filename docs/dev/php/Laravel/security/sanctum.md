---
title: Sanctum
slug: /dev/php/Laravel/security/sunctum
sidebar_position: 1
last_update:
  date: 2026-01-07
  author: Anis
---

# Sanctum

## Présentation générale

**Sanctum** est un mécanisme d’authentification fourni par Laravel, conçu pour sécuriser des **API destinées à des applications modernes** : SPA (Angular, React, Vue), applications mobiles et clients internes.

Contrairement aux solutions basées sur JWT, Sanctum repose sur des **tokens opaques stockés côté serveur**, ce qui en fait une solution simple, robuste et orientée sécurité.

---

## Principe de fonctionnement

Sanctum utilise des **Personal Access Tokens** :

- Chaque token est généré par le serveur Laravel
- Le token est stocké **haché en base de données**
- Le client (SPA, mobile) conserve le token et l’envoie à chaque requête API
- Laravel valide le token **à chaque appel**, sans faire confiance au client

👉 Le serveur reste l’unique source de vérité.

---

## Types d’authentification pris en charge

Sanctum couvre deux cas principaux :

1. **Authentification SPA (cookie-based)**
   - Basée sur les cookies de session
   - Protection CSRF intégrée
   - Recommandée lorsque le front et l’API partagent le même domaine

2. **Authentification API par token**
   - Utilisation de tokens Bearer
   - Idéale pour SPA séparées, mobile apps, clients tiers
   - C’est le mode le plus courant pour Angular / React

---

## Expiration et validité des tokens

Par défaut, un token Sanctum **n’expire pas automatiquement**.

Laravel peut considérer un token comme invalide dans les cas suivants :
- une **durée de vie globale** est configurée,
- une date d’expiration explicite (`expires_at`) est atteinte,
- le token est **révoqué ou supprimé**.

La validation est **toujours effectuée côté serveur**, à chaque requête protégée.

---

## Sécurité et bonnes pratiques

Sanctum offre plusieurs garanties importantes :

- impossibilité de décoder ou falsifier un token côté client,
- révocation immédiate des sessions,
- gestion multi-tokens (un token par appareil),
- contrôle total côté backend.

Bonnes pratiques recommandées :
- définir une **durée de vie finie** pour les tokens,
- valider la session via un endpoint dédié (ex. `/me`) au démarrage du front,
- supprimer le token côté client dès réception d’un `401 Unauthorized`.

---

## Comparaison rapide avec JWT

| Critère | Sanctum | JWT |
|------|-------|-----|
| Type de token | Opaque | Autoportant |
| Vérification côté front | Non | Oui |
| Révocation immédiate | Oui | Difficile |
| Source de vérité | Serveur | Client + serveur |
| Simplicité d’usage | Élevée | Moyenne |

---

## Cas d’usage recommandés

Sanctum est particulièrement adapté pour :
- applications SPA sécurisées,
- back-offices et outils internes,
- APIs nécessitant une révocation rapide,
- systèmes multi-devices.

---
## comment limiter ou empêcher l’usage automatisé (scripts, bots, crawlers) d’un token valide.
### Mesure n°1 — Rate Limiting (obligatoire)
Principe

Limiter le nombre de requêtes par unité de temps, même avec un token valide.

Laravel permet de limiter par :

utilisateur,

token,

adresse IP.

Effet :

un humain → usage normal,

un script → bloqué rapidement.

👉 C’est la barrière la plus efficace contre le scraping.

### Mesure n°2 — Token par appareil (très important)
Principe

Ne jamais utiliser :

un token unique pour tous les accès.

Bonne pratique :

1 token = 1 appareil / navigateur.

Bénéfices :

détection d’usage anormal,

révocation ciblée,

audit précis.

Exemple de signal suspect :

même token utilisé depuis plusieurs IP ou user-agents.

### Mesure n°3 — Analyse du comportement (heuristique)
Principe

Un humain :

navigue de façon irrégulière,

déclenche des appels liés à l’UI,

a des temps de pause.

Un script :

enchaîne des appels réguliers,

appelle des endpoints “profonds” directement,

n’a pas de logique de navigation.

👉 Tu peux détecter :

fréquence constante,

séquences d’API anormales,

absence d’appels “classiques” (profil, config, etc.).

### Mesure n°5 — Expiration courte + validation régulière
Principe

tokens à durée de vie finie,

validation serveur fréquente,

révocation rapide possible.

Effet :

un token volé a une durée d’exploitation limitée,

un crawler doit se reconnecter souvent (coût élevé).

### Mesure n°6 — Endpoints sensibles renforcés

Tous les endpoints ne sont pas égaux.

Bonnes pratiques :

pagination obligatoire,

limites de taille (ex. max 50 items),

pas de “dump” global,

contrôles métier (ex. accès progressif).

👉 Le scraping devient lent et peu rentable.

### Mesure n°7 — CAPTCHA ciblé (cas critiques)

À utiliser avec parcimonie, par exemple :

lors du login,

après activité suspecte,

lors de pics d’appels.

Objectif :

distinguer humain vs automatisation,

sans impacter l’UX normale.

## Conclusion

Laravel Sanctum fournit une solution d’authentification **simple, centralisée et sécurisée**, parfaitement adaptée aux architectures SPA modernes.  
Il privilégie la **validation serveur**, la **révocabilité** et la **clarté du modèle de sécurité**, au détriment volontaire de la logique côté client.

C’est un excellent choix lorsque la priorité est la **fiabilité et la maîtrise des sessions**, plutôt que la portabilité des tokens.
