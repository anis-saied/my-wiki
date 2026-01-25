# Exécution programme Python

1. lancer le programme python
2. démarrage de machine virtuelle python (interface entre prog .py et système exploitation)
3. si le programme est un script
   1. compiler (une seule fois, si non modifié après) les modules importés (dans des fichiers versionnés .pyc ou .pyo)
      1. le fichier .pyc 
         - contient de bytecode, indépendant de la plateforme
         - permet une économie de temps de démarrage
         - exploitée par la machine virtuelle, 
         - 
      2. le fichier .pyo est une version optimisée de .pyc (avec l'option -o ou -oo)
   2. compiler le script principal (re compilée à chaque nouvelle exécution)
4. Si le programme est déjà compilé : il passe à l'interprétation (exécution par la machine virtuelle)
   1. produire le résultat à partir de bytecode
