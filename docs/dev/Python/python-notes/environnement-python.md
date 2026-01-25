Python est fourni piles incluses. c'est-à-dire que seul, il est capable de faire l'essentiel.

## installer package

en ubuntu : `$synaptic` => pour chercher et installer des packages

ou utiliser le système de gestionnnaire de paquets de référence de python `$pip`

- **pip** installer avec  `pip install <nom-paquet>` ou mettre à jour avec `pip install -u <nom-paquet> `
  - est installé automatiquement avec python depuis la version *3.4*
  - cherche les paquets python sur le site internet de PyPi, le télécharge et l'installe (avec ses dépendences)



## Environnement virtuel

objectif:

- installer des bibliothèques dont vous n'avez pas besoin dans d'autres projets
- ou des versions particulières de ces bibliothèques pour ce projet
- vous ne voulez pas alourdir votre système Python

Solution:

- créer un environnement virtuel
- choisir votre version de python avec son pip
- lorsque vous utiliser  `python` ou `pip` , vous utilisez la version isolée de votre programme python ou pip et non la version du système d'exploitation.

```bash
sudo get-apt install python-virtualenv
# créer un environnement virtuel
virtualenv -p python3 nom_env
# entrer dans cet environnement virtuel
cd nom_env
source bin/activate
# travailler sur votre projet
...
# quitter l'env virtuel
deactivate
```



### différents env

- on peut créer plusieurs environnements chacun travail avec C, C++, Java ou .NET-
- tous ces environnement peuvent communiquer entre eux par l'utilisation de **pyro** 
