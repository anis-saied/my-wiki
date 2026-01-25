L'ensemble de ces détails a une importance pour comprendre la mécanique de Python

- La philosophie de Python
  - faire confiance au développeur et lui donner le maximum de clés
  - Suppose que vous savez ce que vous faites

## variable

- La variable est un **contenant** et un **contenu**
- **contenu** d'une variable est sa valeur: 
  - forcément une **instance** d'un objet, stocké en mémoire
    - celle-ci  est donc reliée à une classe
    - le type de l'instance est le nom de la classe
  - `id(a) # 1124 : identifiant unique à chaque contenu`
    - donné par *Cpython* : l'adresse de l'objet en mémoire.
- le **contenant** est l'association entre un nom et un pointeur vers l'instance (contenu)
- L'**affectation** est l'association d'un contenu (opérande droite) à un contenant (opérande gauche)
  - c'est associer un nom avec un pointeur vers une valeur `a=2`
- pour supprimer cette association entre contenu et contenant
  - supprimer l'association entre le nom et le pointeur `del a`
  - le contenant n'existe plus
    - ça ne signifie pas que le contenu associé n'existe plus également
    - car
      - un contenant ne peut être associé qu'à un contenu
      - un contenu peut être associé à plusieurs contenants `a=b='abc'`
      - *a* et *b* sont deux pointeurs vers le même objet *abc*
    - vérifier si les contenants pointent vers le même contenu : `a is b`
  - Si tous les contenants pointant vers un contenu sont supprimés
    - le contenu n'est plus accessible (car il ne reçoit aucun pointeur)
      - ne signifie pas qu'il sera automatiquement supprimé
        - il sera supprimé par le ramasse-miettes de la machine virtuelle de python
- le **nommage des contenants**
  - a ne pas utiliser : les 30 instructions , True, False et None
    - si non, erreur détectée par l'analyse lexicale `SyntaxError: invalid Syntax`
  - on peut utiliser:
    - des mots réservés: `list` , 
      - `list` n'est pas un mot-clé, mais seulement un mot réservé

**Variable non mutable : réaffectation**

`a=3; a=5`

* Le pointeur associé au contenant *a* est modifié afin qu'il pointe vers un autre contenu 



```python
a = 1,
id(a) # 1124 : identifiant unique à chaque contenu
a += 2, # avoir un nouveau contenu, stocké en mémoire dans un autre emplacement
		# le pointeur du contenant sera placé sur le nouveau contenu
    	# l'objet courant n'est pas modifié, un nouveau objet est créé
id(a) # 555
```



**Variable mutable : changement en place**

- Est une variable dont le contenu est modifiable (pouvant subir des changements en place)

### variables globales

```python
globals() 	# retourne l'ensemble de variables globales
			# variables déclarées dans l'ensemble global
    		# variables provenant de modules importés
if a in globals().keys(): # vérifier si une variable est définie
    del a

a = 1
def f():
    # afficher l'espace de nommage global
    print(globals())
    # afficher l'espace de nommage global
    print(locals())
    a = 2
    print(globals().get('a'))
```

- On ne peut pas modifier une variable de l'espace de nommage global dans un espace de nommage local
  - chaque espace doit maîtriser et garder le contrôle de ses propres données

### variables locales

- variable déclarée dans un espace de nommage propre à un bloc, est une variable locale
  - le bloc itératif, conditionnel et de gestion d'exception : n'ont pas leur propre espace de nommage
  - le bloc d'une fonction et d'une classe : ont leur propre espace de nommage
- variable déclarée dans un module, est dite une variable encapsulée dans un module.
- lorsqu'on appelle une variable
  - elle est cherchée tout d'abord dans l'espace de nommage local
    - en cas d'échec, elle sera cherchée dans l'espace de nommage global

## syntaxe de base

```python
# compréhension de liste
L = [i**2 for in range(10)] # crochet : marqueur de la liste

#n-uplet (tuple)
t = (1,2,3) 	# la virgule est le marqueur caractérstique du n-uplet
t = 1,2
t = 1,
# compréhension de dictionaire
d = {chr(i): chr(i+32) for i in range(65, 91)} # accolade : marqueur de dictionnaire

#compréhension d'ensemble
e = {i**2 for in range(10)} # accolade : marqueur d'ensemble

f((1,2)) # le paramètre est un 2-uplet
f(1,2) # les parenthèses servent à contenir les paramètres passés à la fonction

objet.attribut 	# le point est l'accesseur objet
				# permet d'accéder aux attributs et aux méthodes d'une instance ou d'une 
    			# classe
        
2.4 # le point est le marqueur décimal pour les nombres réels

@decorator # l'arobase permet d'appliquer un décorateur (patron de conception)

#espace 	: délimite les mots clés dans le code
#			: détermine la profondeur d'indentation

a + b 	# la signification de l'opérateur est portée par les objets sur 
		# lesquels il s'applique
    	# la sémantique de l'opérateur est portée par l'objet sur lequel il est appliqué
    
class A :
    def __init__(self,x): 
        	self.x = None # x: attribut encapsulé dans une classe
    def update(self,x): # une méthode est une fonction encapsulé dans une classe 
        				# (définie dans le bloc d'une classe)
        self.x = x
a = A()
a.update(5)
a.__init__() # remttre a dans l'état initial

x = 1 	# variable (conteneur) = valeur (contenu)
		# le signe "=" permet d'associer le nom de la variable à une valeur
		# x est un objet de type int
    	# x est un pointeur, pointe vers l'objet 1
y = x 	# x et y deux pointeurs
x is y 	# si deux pointeurs pointent vers le même objet
1 is 1.0 # si deux valeurs ont le meme type
1 is True
1 is None
1 is not None
del x	# supprimer une variable déclarée
		# le nom de la variable n'est plus associée à quoi que ce soit
    	# son utilisation provoque une exception de type NameError
        # on a supprimé le conteneur (pointeur)
        # le contenu n'est pas supprimé (n'est pas impacté)
        # chaque contenu possède d'un compteur de référence: 
        	# à chaque affectation il est augementé de 1
            # à chaque suppression il est diminué de 1
            # lorsque plus aucune variable ne pointe vers ce contenu
            	# son compteur de référence est donc à zéro.
                # ce contenu ne sera pas immédiatement supprimé
                	#Python possède un ramasse-miettes :
                    	# répère les variables dont le compteur de référence est nul
                        # il les supprime
del L[0]
del L[:5]
del d['a']

# instruction conditionnelle
if a: 	# instruction de contrôle
    pass # bloc conditionnel, exécutée 
			# si la condition est remplie (évaluée à True)
    		# si l'évaluation est positive
        	# si l'expression est vraie


```



### opérateurs

- on peut rajouter le support de n'importe quel opérateur on écrivant les méthodes spéciales nécessaires
- on peut également surcharger un type de données et de modifier une méthode spéciale associée à un opérateur pour en modifier la signification

```python
a == b 	# un opérateur de comparaison renvoie simplement un booleén, 
		# qui est aussi un objet: True ou False (instances de bool)
1 < a < 2 # enchaîner les comparateurs    
a < b < c > d 	# simplifie la lecture et améliore les performances
				# en terme de performances:
					# mettre en premier la partie qui a le plus de chance de renvoyer faix
    				# mettre en dernier la partie la plus complexe de manière à n'être évaluée 
            			# que si les autres conditions sont vraies.
            
a in (1,2,3)	# vérifie l'appartenance d'un élément à une séquence
a is b 	# comparaison sur l'identité de l'objet et non sur la valeur
~a # opérateur tilde
a.__invert__()  # méthode spécial: préfixée et suffixée par des soulignés (par convention)

-a # opérateur unaire
a.__neg__()

a - b 	# opérateur binaire
		# opérande de droite : est l'objet dont la méthode est appelée
    	# opérande de gauche : est le paramètre qui lui est passé
        # l'opérateur - porte une sémantique aprticulière à définir dans __sub__
a.__sub__(b) # 
```



### fonctions

une fonction est une variable de type fonction

```python
def f():pass
x = f # une fonction peut être utilisée comme une variable
x()
```

- une fonction est une variable particulière, car elle contient un bloc de code.
  - le nom de la fonction c'est le nom de la variable (contenant)
  - La fonction c'est la valeur qui est un objet (contenu)

- *Signature de la fonction* : nom de la fonction suivi de ses paramètres (arguments)
- si elle est relativement simple, on peut l'écrire sans passer par une variable : dite **fonction anonyme**
- lorsqu'une fonction termine son exécution, 
  - elle rend la main au programme appelant : retour de flux normal de l'exécution
  - son espace de nommage local est disparut
- Le nom de la fonction 
  - doit de préférence être un nom représentatif de la fonction


```python
# attributs et méthodes de l'objet function
def f(x,y=0,z=0): pass # fonction vide
list(set(dir(f))-set(dir(object)))
f.__module__  # '__main__' une fonction est rattachée au module qui contient sa définition
f.__defaults__ # (0, 0) liste des valeurs par défaut
f(1,x=2) # utiliser le paramètre nommé lors de l'appel pour besoin de lisibilité des appels de fonctions
		 # les paramètres non nommées sont forcements passés en premier 
```

- Une fonction est n'est rien d'autre qu'un objet qui possède une méthode `__call__`

#### Paramètres

- lors de l'appel à une fonction, Python se charge d'intégrer les valeurs transmises aux noms de variables
- pour simplifier l'appel aux fonctions, on donne des *valeurs par défaut* à certains paramètres
  - ces paramètres sont alors dits optionnels
  - La valeur par défaut est affectée au sein de la signature de la fonction 
- L'ordre de placement de paramètres est essentiel dans la signature d'une fonction
  - lors de l'appel, cet ordre détermine la valeur de chaque paramètre
  - `def f(y=0, x, z=0)`cette signature n'est pas acceptable
    - lors de l'appel avec deux paramètres
      - Le valeur de second paramètres est surchargée par celle de l'appel
      - Le dernier paramètre n'est pas renseigné
    - Il faut placer les paramètres optionnels après les paramètres obligatoires

##### Paramètres extensibles

- Le signature de la fonction peut avoir un nombre variable de paramètres

- Les paramètres extensibles (étoilés et doublement étoilés) sont optionnels par défaut

- `args` les arguments non nommés, sous la forme d'un tuple
- `kwargs` les arguments nommés, sous la forme d'un dictionnaire
- `args` et `kwargs` deux variables locales à la fonction utilisable sous la forme d'un tuple et dictionnaire
- L'ordre des arguments dans la signature de la fonction est extrêmement important
  1. Les arguments obligatoires, puis
  2. Les arguments optionnels, ensuite
  3. Les arguments extensibles, parmi eux
     1. Les arguments non nommés `args`
     2. Les arguments nommés `kwargs` (toujours placés en dernier)

```python
def f(a, b=0, *args, **kwargs):
    print(a, b, str(args), str(kwargs))
f(1, 2, 3, 4, y=5, z=6)
# a=1, b=2
# args = (3,4)
# kwargs = {'y':5, 'z':6}

# passer les arguments non nommés sous la forme d'une séquence préfixée d'une *
# passer les arguments nommés sous la forme d'un dictionnaire préfixé de **
f(*[1,2,3,4], **{'y':5, 'z':6})

def g(*notes):
    L = list(notes)
```



#### Signature universelle

Python permet de gérer des signatures génériques

Signature qui accepte tout type de paramètres, passés de n'importe quelle manière

```python
def f(*args, **kwargs):
    print(str(args), str(kwargs))
```

- Le moyen de concevoir une signature est de penser aux manières dont on souhaite qu'elle soit appelée
- Il faut penser que cette signature peut évoluer et que ces évolutions doivent pouvoir se faire de manière à ce que les anciens appels à la fonction restent valides
  - Une évolution de la fonction doit garder une signature compatible avec l'ancienne.
- Les paramètres étoilés ne sont pas à utiliser systématiquement en lieu et place des paramètres classiques


#### La fonction lambda

- La fonction lambda est une (la seule en Python) façon d'écrire une fonction anonyme. 

- La fonction *lambda* permet de décrire une relation entre les paramètres et une expression les utilisant à la manière algébrique

- Exemple: 

  ```python
  lambda x : x ** 2
  # déclarer une fonction anonyme dans un appel à une fonction
  list(map(lambda x : x ** 2, range(10))) 
  # on peut tout de même leur donner un nom
  f = lambda x : x ** 2 
  f(5)
  list(map(f, range(10)))
  ```

- Une fonction renvoie toujours une  valeur et une seule. Par défaut il s'agit de **None**

- L'instruction **return** permet de spécifier exactement la valeur à retourner

#### Décorateur

un décorateur est une fonction , prend en paramètre une fonction et retourne une fonction (généralement la méthode retournée c'est celle passée en paramètre et modifiée à la volée)

### Boucles

les moyens de terminer une itération

```python
break		# permet de terminer (casser) une itération immédiatement et sortir de la boucle
return 		# le résultat retourné immédiatement
continue 	# permet d'interrompre une itération pour passer à la suivante sans sortir de la boucle
else 		# peut fonctionner en combinaison avec le mot clé for ou while
			# le passage est déclenché lorsqu'aucune instruction break n'est exécutée dans une boucle
    		# si l'instruction break est exécutée, le bloc de else ne sera pas pris en compte.
```



### Exceptions

- - -
- Un code bien fait ne remonte jamais d'exception à l'utilisateur final
- rattraper l'exception pour la gérer
- Une exception non **rattrapable**, n'est pas **gérable**
- Toute erreur en Python est une exception
  - Une erreur : c'est un code qui est incapable de fonctionner correctement
- Les exceptions se produisent lors de l'exécution du code
- Les erreurs de syntaxe ne génèrent pas d'exceptions, puisqu'elles sont détectées lors de l'analyse de code et non pas lors de son exécution
- Affichage d'exception:
  - nom d'exception
  - description
  - pile d'appels (imbrication de programmes)
  - la partie de code concernée

#### Lever une exception

- Le mot clé`raise` suivi d'une instance héritant de la classe de base d'Exception
- Permet d'arrêter l’exécution du programme
  - soit l'erreur est capturée et le traitement d'erreur est effectué
  - soit le programme s'arrête brutalement et l'exception est affichée

- Une exception ne signifie pas une erreur dans la logique du code
  - cela peut être par exemple
    - une tentative de connexion à un serveur échoue
- Le code qui rencontre un problème, n'a pas à dire ce qu'il convient de faire
  - pour lui, il ne peut pas aller plus loin, et lève une exception pour transmettre l'information, comme quoi il a rencontré un problème.
  - La nature de l'exception, son type et le message d'erreur  peuvent permettre à l'administrateur de savoir comment réagir
  - On peut avoir un code de plus haut niveau qui peut chercher à capturer cette exception et savoir régir d'une manière 
    particulière lorsque celle ci se produit
- Le fait de lever une exception d'un coté et de permettre sa capture de l'autre coté, permet e que l'on appelle le **partage de responsabilité**
- Le **code critique** c'est le code qui fait le travail et informe lorsqu'il trouve un problème.
  - - 
- L'autre code qui demande le travail 
  - fait appel au code critique qui doit
    - soit fonctionner
    - soit interrompre le programme par une erreur
  - prévoir un comportement alternatif pour anticiper une éventuelle erreur.

#### Assertions

- `assert` permet de générer une exception de type **AssertionError** si une condition n'est pas requise (incorrecte)

- si tout va bien, rien ne se passe

- utilisée pour contrôler, tester une expression

- la seconde expression passée à assert, permet de préciser un peu mieux le type de problème rencontré (informations utiles pour corriger le problème)

#### Capturer une exception

- lorsqu'une exception est levée, une trace est générée remontant jusqu'à sa source et affichant la pile d'appels.
- par défaut une exception se propage, si on décide de ne rien faire
- on peut aussi capturer l'exception
- On peut capturer différents types d'exceptions et d'effectuer un traitement d'erreur personnalisé pour chaque exception et un pour le cas où il n'en est pas capturé.
- Le traitement d'erreur, correspond au scénario alternatif à mettre en place en cas d'erreur.
- `except` optionnelle
  - si le bloc `except` non utilisé, l'exception produite dans le bloc `try` se propage

```python
def test():
    if nb < 0 :
        raise ValueError('Ce nombre est négatif')
    return nb

try:
    nb = test()
except ValueError: # traitement d'erreur
    nb = 0
    # ou bien, on peut lever à nouveau l'exception
    raise ValueError('Ce nombre est négatif')
except TypeError:
    """ traitement pour ce type d'exception"""
except Exception as e:
    # recupérer l'objet exception pour collecter des informations à son propos
    # Exception : le type le plus général d'exceptions
    # toutes les exceptions héritent de cette classe.
except:
    """ traitement pout tous les autres types d'excpetions"""
else:
    # ce bloc ne s'exécute que s'il n'y pas eu d'exceptions
    # ici, les exceptions eventuelles ne sont pas capturées, on peut ajouter try except
finally: 
    print("Toujours exécuté")
    # permet d'éviter la dupplication de code
    # exemple : fermer une connexion à un serveur, fermer un fichier
```



Exemple typique: Traiter une base de données:

```python
try:
    # ouverture d'une connexion à une base de données
except :
    # Affichage d'un message demandant de vérifier la connexion à la BD    
else:
    try:
        # envoi d'une requete
    except:
        # Affichage d'un message affichant la requête
    else:
        # Récupération du résultat dans une variable
finally: 
    # Fermeture de la connexion à la base de donnés
```

- Le système de gestion d'exceptions de Python 
  - est particulièrement complet
  - n'utilise que 4 mots-clés
  - permet de gérer toutes les situations possibles



### Prise et libération des ressources

- L'instruction `with` est utilisée avec `as`

```python
# syntax
with EXPR as VAR:
    BLOCK
    
# Example
# f : descripteur vers un fichier, proprement fermé à la fin du block
with open('example.txt') as f:
    content = f.read()

with open('example1.txt') as f1, open("example2.txt","w") as f2:
    for L in f1:
        f2.write(L)
```



### Les imports

- L'instruction `import` est nécessaire pour utiliser les modules Python
- `as` est un mot clé utilisé pour donné un alias à 
  - un module
  - une fonction
  - une classe
  - une constante
- `as` est utile pour des **modules structurés en profondeurs** et avec des **nom à rallonge**

```python
# import tout un module
import os
os.getcwd() # utiliser les fonctions en faisant référence au module

#importer seulement une fonction
from os import getcwd

# as : donner un alias à une fonction
from os import getcwd as d

```



### Les espaces de nommage

* il y a une stricte isolation entre l'espace de nommage locale et l'espace de nommage global
* une variable définie dans  l'espace de nommage locale n'existe pas dans l'espace de nommage global
* le mot clé `global` brise cette règle
* `global` permet de mettre une variable qui appartient à un *contexte local* dans le *contexte global* 
  * la variable sera partagée par les deux espaces de nommages local et global
* rarement utilisée

```python
def f(): 
    a = 1 	# définir une variable locale dans l'espace de nommage local de f
    		# a n'existe pas dans l'esqace de nommage global, ni avant, ni après l'appel de f()
a # n'existe pas
f()
a # n'existe pas

def f():
    global a # déclarer a comme une variable globale avant son instanciation
    a = 1	# a n'existe pas dans l'esqace de nommage global  avant l'exécution de ()
    		# mais après l'appel de f() elle existe
        
a # n'existe pas
f()
a # existe
```

### Décorateur

- Le décorateur est un patron de conception qui permet de modifier le comportement usuel de la fonction que laquelle il est appliqué
- caractère *arobase* `@`
- 

## Types de données

### Séquences

