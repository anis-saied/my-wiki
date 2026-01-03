---
title: Logger
slug: /dev/php/native php/Logger
sidebar_position: 2
last_update:
  date: 2026-01-03
  author: Anis
---

# Logger

## Qu’est-ce qu’un logger en PHP ?

En PHP, *logger* signifie enregistrer des informations (logs) sur l’exécution d’un programme. 

Ces informations sont stockées dans des fichiers, une base de données ou envoyées à un service externe afin de surveiller, diagnostiquer et analyser le comportement d’une application.

Un logger est un mécanisme (ou une bibliothèque) qui permet d’écrire des messages structurés pendant l’exécution d’un script PHP : erreurs, avertissements, actions importantes, ou données de débogage.

Ces messages sont appelés des **logs**.

Un logger en PHP sert à :

- comprendre ce que fait ton code
- détecter et corriger les erreurs
- surveiller une application en production
- garder une trace des événements importants

## Niveaux de log

Les logs utilisent souvent des niveaux :

- **DEBUG** : informations détaillées (développement)
- **INFO** : actions normales, notices
- **WARNING** : problème potentiel
- **ERROR** : erreur bloquante, erreurs fatales, exceptions
- **CRITICAL** : panne grave

## Logger avec une bibliothèque
En pratique, on utilise une bibliothèque conforme à *PSR-3*, par exemple : 
- **Monolog** (la plus utilisée)
- [psr/log](https://github.com/php-fig/log)

Exemple :
```php
$logger->info("Utilisateur connecté", ['id' => 42]);
$logger->error("Connexion base de données échouée");
```

## Où sont stockés les logs ?

Selon la configuration :

- fichiers (.log)
- base de données
- services externes (monitoring)
- console (en développement)

## cas d'utilisations
- Connexion/déconnexion d’utilisateurs
- Tentatives de connexion échouées
- Actions sensibles (paiement, suppression de données)
- Variable vide
- Fonction appelée avec de mauvais paramètres
- Requête SQL incorrecte
- ...
