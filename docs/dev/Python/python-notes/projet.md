# Projet Python

## Mise en place

### Isolation de l'environnement

- lorsqu'on crée un projet, il faut créer un répertoire qui va contenir
  - Python (version particulière celle de production)
  - Et toutes les dépendances
- l'objectif : c'est minimiser les probabilités d'avoir une anomalie en production qui ne soit pas reproductible en local
- installer virtualenv `sudo apt install python-virtualenv`
- Créer l'environnement `virtualenv -p python3 webapp-django`
- Le dossier `webapp-django` contiendra votre projet
  - `cd webapp-django`
- Activer l'environnement `source bin/activate`
- Une fois l'environnement est activé, 
  - l'installation d'un module Python ajoute ce module au Python local, pas au Python de la machine
  - Certains modules installés sur la machine peuvent ne plus être 
    - disponible et il faut les réinstaller `pip install`
    - dans une bonne version et il faut les remettre à jour `pip install -u`
- Lorsque le terminal est fermé, l'environnement est désactivé
  - ou bien utiliser la commande `desactivate` pour désactiver l'environnement et revenir au terminal normal sans fermer le terminal

### Création du projet

```bash
# After you’ve created and activated a virtual environment,
# installer les modules
pip install Django

# check if django was installed
python -m django --version #  Django 5.0, which supports Python 3.10 and later.

# création du projet nommé mysite
# Put your code in some directory outside of the document root, such as /home/mycode.
django-admin startproject mysite # will create a mysite directory in your current directory

# run development s
python manage.py runserver
```



