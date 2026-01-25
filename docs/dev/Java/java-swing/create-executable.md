---
sidebar_position: 2
---

# Create .exe file

How to create an executable file?

Steps:

## Step 1. convert the swing project to maven prject

## Step 2. Créer un JAR exécutable (Java Archive)

Le fichier JAR contiendra toutes les classes et dépendances nécessaires pour exécuter ton application.

Voici les étapes :

1. Ajoute ou modifie ton pom.xml pour inclure le **plugin** `maven-jar-plugin`. Ce plugin permet de configurer un JAR exécutable.
   Note: Le plugin **shade** inclut toutes les dépendances dans un seul JAR pour que ton fichier JAR soit autonome.

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-jar-plugin</artifactId>
            <version>3.2.0</version>
            <configuration>
                <archive>
                    <manifest>
                        <mainClass>com.example.MainClass</mainClass>
                        <!-- Remplace par ta classe principale (contient ta méthode main() dans l'application)-->
                    </manifest>
                </archive>
            </configuration>
        </plugin>

        <!-- Plugin pour inclure les dépendances -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-shade-plugin</artifactId>
            <version>3.2.4</version>
            <executions>
                <execution>
                    <phase>package</phase>
                    <goals>
                        <goal>shade</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```

2. Compiler le projet et créer le fichier JAR avec toutes les dépendances dans le dossier `target/` de ton projet Maven.

```bash
mvn clean package
```

3. exécuter le fichier JAR généré

```bash
java -jar target/nom-de-ton-projet-1.0-SNAPSHOT.jar
```

**Note**

Tu peux partager ce fichier JAR avec tes amis. Ils pourront l'exécuter de la même manière, en s'assurant d'avoir une version de Java installée.

## Step 3. Créer un exécutable natif

Si tu souhaites partager ton application en tant que fichier exécutable natif (comme `.exe` pour Windows ou .app pour macOS), tu peux utiliser un outil comme **jpackage**, disponible à partir de Java 14.

**jpackage** est un outil intégré à partir de Java 14 qui permet de créer des packages d'applications natives pour différentes plateformes (Windows, macOS, et Linux) à partir d'une application Java. Il peut générer des fichiers exécutables natifs tels que .exe pour Windows, .app pour macOS, et des paquets de type .deb ou .rpm pour Linux.

L'intérêt principal de jpackage est qu'il crée un exécutable autonome qui inclut un runtime Java minimal (JRE) nécessaire pour exécuter l'application, évitant ainsi à l'utilisateur d'avoir besoin d'une installation séparée de Java.

Avant de passer à jpackage, tu dois d'abord compiler et packager ton application Java Swing en un fichier JAR exécutable avec Maven. Tu as déjà vu les étapes pour configurer maven-jar-plugin et maven-shade-plugin pour rendre le JAR exécutable.

- Étape 1 : Créer un JAR exécutable (comme dans l'option 1)

  - Tout d'abord, crée un JAR exécutable comme expliqué ci-dessus.

- Étape 2 : Utiliser **jpackage** pour créer un _exécutable natif_
  - Maintenant que ton JAR est prêt, tu peux utiliser jpackage pour créer un exécutable natif Windows (fichier .exe).
  - utiliser jpackage pour _transformer le fichier JAR en exécutable_.

installer les outils nécessaires pour que jpackage fonctionne

1. installer dotnet sdk : https://dotnet.microsoft.com/fr-fr/download
2. installer wix :
   - https://wixtoolset.org/docs/intro/: l'installation via dotnet n'a pas marché avec jpackage
   - https://github.com/wixtoolset/wix3/releases : installer le .exe de wix
   - Après l'installation, vérifie que les fichiers light.exe et candle.exe sont présents dans `C:\Program Files (x86)\WiX Toolset v3.x\bin
   - Ajoute le chemin WiX au _PATH_: `C:\Program Files (x86)\WiX Toolset v3.14\bin` au `PATH` de ton système.`

Voici un exemple de commande pour générer un fichier exécutable pour Windows (fichier .exe) :

```bash
jpackage --input target/ --name MonApp --main-jar nom-de-ton-projet-1.0-SNAPSHOT.jar --main-class com.example.MainClass --type exe
```

Explications des options :

- --input target/ : Dossier contenant le fichier JAR généré.
- --name MonApp : Nom de l'application exécutable (remplace "MonApp" par le nom de ton application).
- --main-jar nom-de-ton-projet-1.0-SNAPSHOT.jar : Le nom du fichier JAR généré dans le dossier target/.
- --main-class com.example.MainClass : La classe principale qui contient la méthode main() (à remplacer par ton propre chemin de classe).
- --type exe : Type de fichier à générer (dans ce cas, un .exe).
- --icon src/main/resources/app-icon.ico : (Facultatif) Chemin vers un fichier .ico pour personnaliser l'icône de l'exécutable sous Windows.
- --win-menu et --win-shortcut : (Facultatif) Ajouter un raccourci dans le menu Démarrer sous Windows.

* Étape 3 : Partager l'exécutable
  Une fois le fichier exécutable généré, tu peux simplement le partager avec tes amis. Ils n'auront pas besoin d'avoir Java installé, car l'exécutable inclut un runtime Java minimal nécessaire pour exécuter l'application.

## Utiliser une autre méthode pour créer un fichier exécutable

Si tu n'arrives pas à faire fonctionner jpackage, tu peux envisager d'autres outils pour créer des exécutables :

- **Launch4j** : Cet outil permet de créer des exécutables Windows à partir de fichiers JAR. Il est assez simple à utiliser.
- **Inno Setup** : Si tu veux créer un installateur pour Windows, Inno Setup est une bonne option qui fonctionne bien avec les fichiers JAR.
