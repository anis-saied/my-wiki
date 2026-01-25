# Bases de données

- Une base de données est simplement un espace de stockage de données
- Plusieurs types de bases de données: BD objet, BD XML, BD orientées document, BD relationnelle
- Une base de données relationnelle est un espace de stockage contenant des données organisées selon ds tables et des relations
  - Une table est un ensemble de colonnes (clé primaire, secondaire, étrangères (1 à 1, 1 à plusieurs, plusieurs à plusieurs))
  - Le contenu de ces tables sont les données elles-mêmes.
    - Ces données sont manipulables via des opérations de l'algèbre relationnelle

- Exemples de BDR : MySQL, PostgrSQL, SQLite, ...

- Il y a des différences entre les langages SQL de BD
- Chaque BD à un SQL spécifique
  - Postgres utilise PL/SQL
- Il faut connaître le SQL spécifique à chaque BD
  - les fonctions 
  - les fonctions et les procédures stockées qui peuvent ramener des enregisrements

## SQLite

- Moteur de BDR écrit en C
- ne fonctionne pas selon le modèle client/serveur 
  - contrairement à MySQL et PostgreSQL, où il faut installer et configurer le serveur de BD
- conçu pour être embarqué dans des programmes (ex: Firefox pour gérer l'historique de navigation, les favoris, ...)
- Les BD SQLite sont utiles lorsqu'on doit distribuer une application qui doit manipuler des données sur des postes qui ne disposent pas forcément d'un serveur de BDR
- Les performances peuvent dégrader, si la quantité de données devient très importante
  - délai d'attente significatif à chaque demande d'informations
  - solution: il faut passer à PostgreSQL
- *PySQLite* est le module de référence permettant de s'interfacer avec *SQLite* à partir de Python
- pour l'importer `import sqlite3`
- il est possible 
  - d'utiliser un fichier pour stocker sa BD `conn = sqlite3.connect('/temp/exemple.db')`
  - de créer une BD directement en mémoire `conn = sqlite3.connect(':memory:')`

- Découvrir ce module et ses capacités
  - il  faut connaître les spécificités du SQL de SQLite pour en tirer le meilleur parti

pour travailler avec SQLite, il faut

- Commencer par créer une base de données

maintenant nous avons une base pour jouer avec Python

La première chose à faire est de

- importer les modules nécessaires
- créer une connexion vers la base de données
  - on peut utiliser cet objet **conn** comme n'importe quel objet Python
- Créer un curseur pour l'utiliser pour toutes les manipulations
  - `cur = conn.cursor()`
  - Le curseur contient les résultat d'une requête SELECT
  - On peut également manipuler cet objet `cur` et l'utiliser pour créer un jeu de données

Maintenant que la connexion est établie

- Créer un mini-jeu de données
  - remplacement d'une table (suppression au cas où elle existait déjà, puis recréation)
  - Ajout de n lignes
  - il est possible de récupérer le nombre d'enregistrements trouvés (SELECT) ou impactés (INSERT, UPDATE, DROP, CREATE (toujours renvoie 0))

- Le commit se réalise sur l'objet de connexion
- On pourrait également rajouter la fermeture de l'objet connexion à la fin du script



### PostgreSQL

- BDR libre extensible, 
- utilisable directement en Python via PL/SQL
- La bibliothèque dépendent de Python est *libpq*
- *Psycopg* est l'implémentation de référence pour Postgres et s'appuie sur la bibliothèque C *libpq*
- il faut respecter les langage SQL de Postgres, soit le PL/SQL
- Créer une BD de test et un utilisateur de tes via l'outil pgAdminIII qui présente une interface graphique
- il existe *pypostgresql* et *pygresql*



## ORM

- au lieu de manipuler des tableaux de données, on manipule des objets
- Exemples d'ORM
  - *SQLAlchemy*, la solution la plus répandue, la plus complète et la plus généraliste
  - *SQLObject*
  - *Storm*
- différences entre les ORM
  - syntaxe de manipulation des objets

