---
title: File System
slug: /dev/bash/file-system
sidebar_position: 1
last_update:
  date: 2026-01-04
  author: Anis
---

# File System

## Directories

### create

- create many folders in the same time

```bash
mkdir -p docs/informatique/{python,algorithmique,bases-de-donnees,simulation-numerique}
```

## Files

### create

- create file

```bash
touch file.md
```

## tree

- display directory tree

```bash
tree .
tree . >> file # redirect result to file
tree ./directory1 ./directory2 -L 2 # display many trees
```
