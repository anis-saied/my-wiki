# POO

- L'essentiel de la programmation objet repose sur la bonne déclaration des classes, des instances, des attributs et leurs méthodes
- Un des principes du modèle objet est l'**encapsulation des données**
  - chaque objet possède en son sein 
    - Les données qui le décrivent ou qu'il porte sous forme d'attributs
    - Et l'ensemble des méthodes nécessaires pour gérer ses propres données
- Tout est objet
  - les classes, les méthodes, les fonctions, les instances
    - la classe elle même est un objet
  - tout dispose des attributs et des méthodes particulières
  - tout peut être modifié après sa création
- les classes les méthodes et les fonctions peuvent être déclarée 
  - impérativement avec **class** et **def**, dont le sens où une classe ou une fonction est un bloc contenant un ensemble d'instructions impératives et que celles-ci sont parcourues et exécutées les unes après les autres.
  - par affectation

## class

- On peut définir une classe de manière
  - **impérative** avec le mot clé **class** qui met en évidence l'encapsulation
  - par **prototype** (à la manière de JavaScript)

- Le mot clé **class** pour une classe, c'est que **def** pour une fonction
  - suivi de nom de la classe
  - suivi de la liste ordonnée de ses parents
  - puis d'un bloc **:**

* Une classe peut être définie n'importe où, 
  * dans une autre classe
  * dans une fonction
* Toute variable définie dans une classe est un **attribut**
* Toute fonction définie dans une classe est une **méthode**
  * Une méthode est un attribut comme les autres
    * puisqu'on peut d’accéder sans l'appeler: `A.methode` retourne l'instance de la méthode sans l'appeler
    * le fait d'accéder à la méthode renvoie simplement un objet, mais n'appelle pas la méthode
    * pour réaliser cet appel, ajouter les parenthèses et passer les éventuelles arguments
    * une méthode est une fonction encapsulée dans une classe

* Les variables déclarées dans une classe sont des attributs
* Les données d'une classe ou d'une instance lui appartiennent et ne soient gérées que par l'instance et non pas par l'extérieur
* les attributs de classe sont disponibles pour l'instance
  * si les éléments de la classe sont modifiées alors les éléments de l'instance le sont aussi

* Les attributs déclarés au niveau de la classe sont partagés par toutes les instances
  * nommés des **attributs de classe**

* un instance peut avoir un attribut d'instance avec le même nom qu'un attribut de classe
  * Tant que l'instance n'a pas son propre attribut, sa valeur est celle de sa classe

* pour avoir des attributs uniques pour chaque instance il faut passer par le constructeur

==> L'attribut de classe contient la valeur par défaut

==> L'attribut d'instance contient la valeur associée durablement à l'instance

​	Lorsque l'attribut d'instance prend une autre valeur différente de celle de l'attribut de classe

​	il se trouve alors déconnecté de l'attribut de classe

```python
class A: # une classe encapsule toutes ses données
    """description de la classe"""		# A.__doc__
    attribut = "valeur"					# A.attribut
    def methode(self, *args, **kwargs):	# A.methode
        return "une méthode"

a = A() # crée une instance
# les attributs de classe sont disponibles pour l'instance
a.__doc__ 
a.attribut # valeur
a.methode # instance de l'objet function
a.methode() # une méthode

class B:
    a = 'autre attribut'
	def m(self, *args, **kwargs):	
        return "une autre méthode"

# si les éléments de la classe sont modifiées alors les éléments de l'instance le sont aussi
A.attribut = B.a
A.methode = B.m
a.Attribut # 'autre attribut'
a.methode() # une autre méthode

def f(self): 
    return "définie pas prototype"
A.x = 1 # Ajouter un attribut par aggrégation
a.x 
A.methode = f # ce n'est pas une erreur, c'est permis et prévu.
```

- On peut déclarer une classe dans un module et lui ajouter des fonctionnalités dans un autre module
  - permet le découpage du code 
  - évite à recourir à l'héritage (solution lourde)

### méthode

- La signature de la méthode attendait un paramètre : qui représente l'instance courante
  - par convention se nomme **self**
- Le lien entre le premier argument de la méthode définie dans la classe et l'instance se fait naturellement `a.methode()`
- c'est Python qui va affecter l'instance au premier argument
- 3 types de méthodes distinctes
  - Méthodes d'instance
    - s'appliquent sur une instance de la classe
    - ont par convention un premier paramètre nommé *self* qui représente l'instance
    - appel à une méthode d'instance
      - `a.methode_instance()` 
      - Le premier paramètre de la méthode (*self*) est fournie par l'objet sur lequel elle appliquée à gauche de l'*accesseur* `.` l'instance `a`
        - L'objet a gauche du point devient le premier argument de la méthode
        - L'accesseur renseigne l'instance courante dans le premier argument

      - `A.methode_instance(a)` ou `f=A.methode_instance; f(a)`
        - Utiliser une méthode d'instance à partir d'une classe
        - C'est un appel statique à une méthode d'instance
        - Il est nécessaire de fournir soi-même lors de l'appel le premier argument qui est l'instance `f(a)`
        - Ceci est utilisé dans une classe pour appeler une méthode de l'un des pères `pere.methode_instance(self)`

      - Si la méthode avait d'autres arguments, ils prendraient place entre les parenthèses de l'appel de la méthode

  - Méthodes de classe
    - dites méthodes statiques
    - s'appliquent sur la classe elle même
    - ont par convention un premier paramètre nommé *cls* qui représente la classe 
    - ont un décorateur `@classmethod`
    - appel à une méthode de classe
      - `A.methode_classe()` 
      - Le premier paramètre de la méthode (*cls*) est fournie par l'objet sur lequel elle appliquée à gauche de l'*accesseur* `.` la classe `A`
        - L'objet a gauche du point devient le premier argument de la méthode
      - Si la méthode avait d'autres arguments, ils prendraient place entre les parenthèses de l'appel de la méthode
      - Il est possible d'appeler une méthode de classe directement à partir d'une instance `a.methode_classe()`
        - Python sait comment aller retrouver la classe de l'instance pour lui appliquer la méthode

  - Méthodes statiques
    - est simplement une fonction agrégée à une classe, elle s'applique donc à l'aide de la classe, mais également à l'ide de l'instance
    - ont des signatures identiques aux fonctions (pas d'ajout de premier paramètre *self* ou *cls*)
    - ont un décorateur `@staticmethod`
    - appel à une méthode statique
      - `A.methode_statique()` 
      - `a.methode_statique()` 
      - `f = a.methode_statique; f()` 


### Méthodes et attributs spéciaux

#### Attributs

###### Attributs liés aux opérateurs

###### Attributs liés au modèle objet

- `__class__` attribut d'instance, pointe vers la classe à laquelle appartient l'instance

- `__doc__` pointe vers la *docstring* de la classe, en lecture seule

- `__new__` sert à créer une instance

- `__init__` sert à créer initialiser une instance après sa création

- `__del__` conçue comme un destructeur, contient des instructions appelées lors de l'utilisation de mot-clé **del** sur une instance avant sa suppression effective

  - appelée avec `del`

  - ou lorsque l'instance perd son unique pointeur, c'est-à-dire lorsque son compteur de référence passe à 0, elle sera supprimée

    ```python
    class A: 
        def __init__(self, nom): self.nom = nom
        def __del__(self): print(f'suppression de {self.nom}')
        
    a1 = A("instance 1")
    # créer une nouvelle instance et l'affecter à une variable contenant une autre instance
    a1 = A("instance 2") 
    # donc, l'instance 1 pert son unique pointeur, elle est supprimée par conséquence 
    # implicitement, sans utilisation de mot clé del
    ```

    

- `__repr_` sert à représenter une instance sous la forme d'une chaîne de caractères

  - elle doit donner les informations nécessaires pour identifier ce que contient l'objet et ne pas être ambiguë
  - doit retourner une expression grammaticalement correcte en plus d'être représentative de l'instance

- `__str_` sert à représenter une instance sous la forme d'une chaîne de caractères qui donne une représentation informelle de l'information contenue dans la variable
  - elle doit être lisible par un utilisateur
  - prévue pour convertir un objet en une chaîne de caractères
  - doit retourner une information informelle et représentative de l'instance

- `__dict__` est un dictionnaire qui stocke tous les attributs d'une classe
  - Lire, ajouter ou supprimer un attribut, revient à lire, ajouter ou supprimer un élément de ce dictionnaire
  - Une méthode est un attribut, appelable

#### Méthodes spéciales

###### Méthode liées au modèle objet

- `__getattribute__` permet d'accéder à un attribut
  - Si l'attribut n'est pas trouvé, la méthode `__getattr__` est appelée
    -  `__getattr__` une méthode spéciale utilisée par la fonction `getattr()`

- `__setattr__` pour créer ou modifier un attribut
  - une méthode spéciale utilisée par la fonction `setattr()`
- `__delattr__` pour supprimer un attribut
  - une méthode spéciale utilisée par la fonction `delattr()`
- `hasattr()`  permet de savoir si un attribut existe

```python
if hasattr(a,'attribut'): # a : instance, attribut : nom de l'attribut
    getattr(a,'attribut')
else:
    setattr(a,'attribut','valeur')
    
#avoir une valeur par défaut sans changer l'instance
getattr(a,'attribut','valeur par defaut') # permet d'éviter d'negendrer des erreurs

delattr(a,'attribut')
```

- `__call__` toute instance possédant la méthode spéciale `__call__` peut se comporter comme une fonction
  - si **f** est une fonction , `f()` équivaut à `f.__call__()`

###### Constructeur

- Permet d'initialiser les attributs de l'instance
- Deux phases
  - Étape 1: La construction
    - Réalisée par une méthode de classe: `__new__`
    - définie la manière dont son instance se construit
    - Créer un espace dans la mémoire qui va contenir l'instance
  - Étape 2 : Initialisation
    - Réalisée par une méthode d'instance : `__init__`
    - L'instance récupère les paramètres et s'initialise en fonction de cela les attributs présents au niveau de l'instance (pas au niveau de la classe)

- Python permet de gérer des méthodes avec signatures génériques
  - Faire attention à ne pas transmettre des noms de méthodes parmi les arguments

```python
def __init__(self, **kwargs):
    for k, v in kwargs.items():
        setattr(self,k,v) # méthode 1
        self.__dict__[k] = v # méthode 2
        
# méthode 3
def __init__(self, **kwargs):
	self.__dict__.update(kwagrs)
```



 ## Héritage

Le travail le plus difficile est de construire des objets qui permettent de résoudre des fonctionnalités avec une certaine qualité, de la simplicité et une bonne lisibilité

pour réussir cela, il faut avant tout une bonne modélisation et une utilisation des bons concepts aux bons endroits

Le but de l'héritage

- Offrir un moyen d'organiser des objets ayant de caractéristiques communes et décrivant celles-ci dans une classe mère et en décrivant les spécificités de chaque objet dans la classe de l'objet
- Cette pratique est nommée : **Polymorphisme par sous-typage**
- Avantages de cette pratique
  - Capitaliser du code en commun (préférable à la duplication de code)
  - Avoir des objets réutilisables et extensibles
- Lorsqu'on remonte l'arbre d'héritage, on trouve toujours tout à la fin l'objet `object`

```python
class Point3D:
    def __init__(self, x, y, z):
        self.x, self.y, self.z = x, y, z
       
	def module(self):
        return (self.x**2 + self.y**2 + self.z**2)**0.5
    
class Point2D(Point3D):
    def __init__(self, x, y):
        # appel statique dans l'intialisateur de la classe fille
        # si on fait un appel classique, la méthode s'appelerait elle-même
        # ce qui engendrerait une recurssion infinie et un bug
        Point3D.__init__(self, x, y, 0)
        
class Point1D(Point2D):
    def __init__(self, x):
        Point2D.__init__(self, x, 0)

p = Point1D(0)
isinstance(p, Point1D) 	# est une primitive, utilise la méthode spéciale __instancecheck__
						# permet de savoir si un objet est un instance d'une classe donéee
issubclass(Point1D, Point2D) 	# est une primitive, utilise la méthode spéciale __subclasscheck__
								# permet de savoir si une classe est une sous-classe d'une autre
```



Notes

- Un **appel statique**
  - permet de chercher une méthode d'instance de classe mère et l'on applique sur l'instance courante
  - L'instance passée en argument n'a pas besoin de correspondre à la classe mère
    - on n'a pas besoin de convertir (**caster**) l'instance

- La méthode `module` est partagée par toutes les classes filles, on dit *la fonctionnalité est **capitalisée***

- Si on fait l'inverse, rendre la classe `Point1D` une classe mère et `Point2D` un classe fille, 

  - on aurait dû réécrire la fonction permettant de calculer le module
  - et on aurait perdu l'intérêt de l'héritage

- Il faut toujours **aller du plus général vers le plus particulier**

- Une classe fille peut alors 

  - posséder ses propres méthodes en plus de celles de la classe mère dont elle hérite
  - hériter de sa classe mère et de la classe mère de sa classe mère

- Déclarer la relation d'héritage

  - passer entre parenthèses la liste des classes parentes dans le **signature de la classe** (première ligne de la déclaration de la classe)

- Une classe peut avoir plusieurs classes mères : on dit qu'il y a un **héritage multiple**

- Une classe qui n'a pas de classe mère, aura une classe mère par défaut nommée : **object**

   

### surcharge

#### Surcharge des méthodes

- La surcharge d'une méthode est la redéfinition d'une méthode de la classe mère par une nouvelle méthode de la classe fille portant le même nom
- Une classe fille peut personnaliser une méthode héritée
  - garder le même nom de la méthode
  - peut avoir une signature différente
    - méthode spécialisée : nombre de possibilités réduit
    - méthode étendue : nombre de possibilités agrandi
- Plusieurs possibilités de personnalisation

1. réécrire la méthode, si la fonctionnalité de la classe mère n'est plus adaptée au besoin de la classe fille
2. La méthode de la fille réutilise (appel) la méthode de la classe mère et modifie son résultat
3. Faire de actions avant l'appel de la méthode de la classe mère
4. ou  Faire de actions avant l'appel de la méthode de la classe mère et modifie son résultat

```python
class Point3D:
    def __init__(self, x, y, z):
        self.x, self.y, self.z = x, y, z
       
	def module(self):
        return (self.x**2 + self.y**2 + self.z**2)**0.5
    
    def to_tuple(self)
    	return (self.x, self.y, self.z)

    
class Point2D(Point3D):
    def __init__(self, x, y):
        Point3D.__init__(self, x, y, 0)    

    def to_tuple(self)
    	return (self.x, self.y)
        
    def to_tuple(self)
    	return Point3D.to_tuple(self)[:2]
    
    def to_tuple(self)
    	assert self.z = 0
    	return Point3D.to_tuple(self)
    
    def to_tuple(self)
    	assert self.z = 0
    	return Point3D.to_tuple(self)[:2]
```



#### Surcharge des opérateurs

- Chaque classe peu définir elle-même la façon dont ses instance sont comparées entre elles. pour cela il suffit de surcharger les opérateurs
  
- Les opérateurs sont rattachés à une méthode qui peut être portée par leur
  - opérande gauche
  - opérande droit, si l'opérateur a besoin d'un unique opérande

- Pour les opérateurs de comparaisons, tels que `>, <, <=, ...`, les méthodes appartiennent à la classe de base (`object`) 
- Il existe d'opérateurs de spécialisés tels que `|,&, ^, ~`
- Tous les opérateurs sont liés à des méthodes spéciales portées par les classes des instances manipulées
  - sauf l'opérateur `=` qui ne puisse être surchargé

- **Surcharger un opérateur** signifie simplement surcharger la méthode qu'utilise un opérateur

```python
a, b = "matin","Soir"
a < b # comparer les ordinaux (ord) de chaque lettre
# si pour nous, S et s ont la même signification (même valeur comparative), cette comparaison n'est plus valable
class MyStr(str):
    def __lt__(self, other):
        # comparison de chaînes de caractères sans prise en compte de la casse
        return str.__lt__(self.lower(), other.lower())
a, b = MyStr("matin"),MyStr("Soir")
a < b     
```

### Polymorphisme paramétrique

- Le modèle objet définit un autre aspect du polymorphisme qui est l possibilité d'avoir plusieurs méthodes portant le même nome et chacune soit adaptée à un cas d'utilisation
  - chacune porte sa propre liste de paramètres ainsi que le traitement de ceux-ci afin d'arriver à une même finalité partagée par ces **méthodes polymorphes**
- il est impossible d'avoir deux méthodes polymorphes présentant  une suite d'arguments de type identique mais de **sémantique** différente, puisqu'il est impossible de travailler sur la sémantique
- Depuis *Python 3.4* il est possible de faire du *polymorphisme paramétrique* en définissant une et une seule fonction ou méthode pour différents types de paramètres
  - on doit avoir le même nombre d'arguments
  - le polymorphisme se base sur leur type

```python
from functools import singledispatch
# 1. Définir une fonction sans se présager de type de paramètre
@singledispatch
def func(arg):
    print('traitement pas défaut')

# 2. ajouter une nouvelle définition de la fonction en s'appuyant sur un type différent
@func.register(int)
@func.register(float)
def _(arg):
    print("traitement pour un nombre")
    
class Custom: 
    pass

@func.register(Custom)
def _(arg):
    print("traitement pour une instance de classe Custom")
    
func("chaine") # traitement pas défaut
func([]) # traitement pas défaut
func(1) # traitement pour un nombre
func(1.5) # traitement pour un nombre
func(Custom()) # traitement pour une instance de classe Custom
```



### Héritage multiple

```python
class A:
    def __init__(self,x):
        self.x = x
    
    def f(self):
        print("fonctionnalité")
        
type.mro(A)
[<class '__main__.A'>, <class 'object'>]

class B(A):
    pass

type.mro(B)
[<class '__main__.B'>, <class '__main__.A'>, <class 'object'>]

class C:
    def __init__(self,y):
        self.y = y
    def f(self):
        print("fonctionnalité")

type.mro(C)
[<class '__main__.C'>, <class 'object'>]

class D(B,C):
    def __init__(self, x, y):
        B.__init__(self,x) # appel statique à la méthode d'initialisation
        C.__init__(self,y)
        

type.mro(D)
[<class '__main__.D'>, <class '__main__.B'>, <class '__main__.A'>, <class '__main__.C'>, <class 'object'>]


class E(A,A): pass # impossible d'hériter deux fois de la même classe

class F(A,B): pass #  impossible d'hériter car la résolution de méthode pose un problème, B n'est jamais atteint

class G(B,A): pass #  possible d'hériter mais inutile

```

- Que ce passe-t-il si deux deux méthodes de même nom sont définies chez chaque parent ?
  - Solution :  il Faut déterminer l'ordre de résolution des méthodes
  - `type.mro(D)`

## Typage dynamique

* **En Python tout est objet**
  * `type(1) #int` , même le nom de classe est un objet, est de type `type`

```python
x = type([])
x() # [], créer un objet à partir de type d'un autre objet
```

- La classe `type` est une classe comme les autres et propose des méthodes particulières

```python
# les attributs et les méthodes particuières de la classe type par rapport à la classe object
a = set(dir(type))
b = set(dir(object))
list(set(a)-set(b))
```

- Le typage est dynamique
  - car, on ne peut pas contraindre un contenant de n'accepter qu'un type donné
  - La vérification si les manipulations sont autorisées ou non, s’effectue par Python au moment de l'exécution
  - apporte plus de souplesse
    - permet de se concentrer sur l'information contenue par la variable plutôt que sur son type

## Conteneur & Itérateur

### Conteneur

- objet qui peut contenir la méthode spéciale `__iter__` mais en aucun cas la méthode spéciale `__next__`
- 

### Itérateur

- objet qui peut contenir les deux méthodes spéciales `__iter__` et `__next__`

- Le rôle est de proposer un moyen de parcourir le conteneur auquel il est associé de la manière la plus performante possible
- propose un solution d'itération sur les valeurs qu'il contient
- `__iter__` renvoie une instance de l'itérateur (sa propre instance), 
  - renvoie l'objet lu même
- `__next__` permet de renvoyer 
  - l'élément suivant
  - Une exception `StopIteration`, s'il n'y en a pas de suivant

