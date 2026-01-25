---
sidebar_position: 1
---

# Overview

## what is Java Maven ?

## Install Maven

1. Télécharger Maven : https://maven.apache.org/download.cgi.
2. Extrayez le fichier ZIP téléchargé dans un dossier sur ton système, par exemple :`C:\Program Files\Apache\Maven`.
3. Configurer la variable d'environnement `MAVEN_HOME` avec valeur `C:\Program Files\Apache\Maven`
4. Ajouter Maven au Path :
   - modifier la variable d'environnement `PATH`
   - Ajoute une nouvelle entrée en cliquant sur Nouveau et entre le chemin vers le dossier bin de Maven, par exemple `C:\Program Files\Apache\Maven\bin`.
5. Vérifier l'installation de Maven avec `mvn -v`

## Configurer Eclipse ou STS (Spring tools Suite) ot use External Maven installation

- open Eclipse → Window → Preferences → Maven → Installations
- tu verras deux options :
  - **Version intégrée** : une version de Maven embarquée qui est installée avec le plugin Maven (ce n'est pas une installation propre à STS, mais un plugin Eclipse qui inclut Maven).
    C'est une version qui est intégrée avec Eclipse/STS et qui ne nécessite pas une installation externe.
  - **Ajouter une installation externe** : Si tu as une installation externe de Maven, tu peux l'ajouter en cliquant sur _Add..._
    et en pointant vers le répertoire où Maven est installé (par exemple, `C:\Program Files\Apache\Maven`).
    Après avoir ajouté l'installation, sélectionne-la dans la liste des installations Maven pour qu'elle soit utilisée par défaut.
    Clique sur Apply and Close.
