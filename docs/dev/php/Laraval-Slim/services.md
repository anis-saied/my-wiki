---
title: Services
slug: /dev/php/Laraval-Slim/services
sidebar_position: 8
last_update:
  date: 2026-01-03
  author: Anis
---

# Services 

- Le service ne doit pas formater la réponse, il ne doit renvoyer que les données métier (ou lever une exception).
- Puis c’est le contrôleur qui formate via respond().
- → services = logique métier pure, contrôleurs = formatage API.


## convention de nommage
Laravel n’impose pas de convention stricte (car ce n’est pas inclus par défaut dans le framework), mais les bonnes pratiques sont :

Dossier : app/Services

Classe = PascalCase + suffixe Service

Exemple :

UserService.php → class UserService

PaymentService.php → class PaymentService
