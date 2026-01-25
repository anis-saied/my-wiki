---
sidebar_position: 1
---

# Overview

what is java ?

## Configuration

Pour que ton environnement Java fonctionne correctement avec OpenJDK 21, tu dois configurer les variables d'environnement JAVA_HOME et Path de manière appropriée.

1. Configurer `JAVA_HOME`:
   - `JAVA_HOME` doit pointer vers le répertoire d'installation de ton JDK: `C:\Program Files\Java\jdk-23`
   - vérifier: `echo %JAVA_HOME%`, Cela devrait afficher le chemin que tu as défini pour `JAVA_HOME`.
2. Configrer `path`
   - tu dois ajouter le chemin du dossier bin de ton JDK au Path :
     - Clique sur Nouveau et ajoute le chemin vers le dossier bin: `C:\Program Files\Java\jdk-23\bin`
     - vérifier: `java -version`, Cela devrait afficher la version de Java (OpenJDK 23) que tu as installée.
