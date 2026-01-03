---
title: PHP Standards
slug: /dev/php/native php/PHP Standards
sidebar_position: 4
last_update:
  date: 2026-01-03
  author: Anis
---

# PHP Standards

## PSR : PHP Standards Recommendation

PSR is a community-accepted standards that define how PHP code should be written and structured so that libraries and frameworks are interoperable and consistent.

They are published and maintained by the [PHP-FIG](https://www.php-fig.org/psr/) (PHP Framework Interoperability Group).

In practice

Most modern PHP frameworks (Laravel, Symfony, Slim) follow PSR standards by default. If you follow *PSRs*, your code will integrate cleanly with third-party packages.

## Most important PSR standards
### Coding Style

**PSR-1** – Basic coding standard
(file structure, class naming, PHP tags)

**PSR-12** – Extended coding style guide
(indentation, braces, line length)

### Autoloading

**PSR-4** – Autoloading standard
Maps namespaces to directory structures (used by Composer)

### Interfaces & Architecture

**PSR-3** – Logger interface

**PSR-7** – HTTP message interfaces (Request/Response)

**PSR-11** – Container (Dependency Injection)

**PSR-15** – HTTP server request handlers (middleware)

**PSR-18** – HTTP client interface
