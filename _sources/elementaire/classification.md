# Classification des signaux

La plupart des signaux physiques que l'on mesure sont _analogiques_,
c'est-à-dire qu'ils dépendent d'une variable qui prend des valeurs
[continues](http://www.educatim.fr/tq/co/Module_TQ_web/co/variable_continue.html)
(par exemple, le temps) et qu'eux-mêmes peuvent prendre des valeurs _continues_.
On peut citer comme exemple la tension électrique dans un circuit, un son,
une mesure de température, etc.

À l'inverse, les signaux traités par un ordinateur sont un ensemble de valeurs qui dépendent donc
d'une variable [discrète](http://www.educatim.fr/tq/co/Module_TQ_web/co/variable_discrete.html),
et de plus les amplitudes du signal sont également discrètes.
Ces signaux sont _numériques_.
On peut citer comme exemple une photographie numérique qui est constituée de pixels
dont les intensités ne peuvent prendre que 256<sup>3</sup> = 16&nbsp;777&nbsp;216 valeurs.

Un signal numérique est à la fois _échantillonné_
(c'est-à-dire qu'il dépend d'une variable discrète) et _quantifié_ (ses amplitudes sont discrètes).
Ainsi, l'_échantillonnage_ consiste à transformer un signal non échantillonné en un signal échantillonné.
De même, la _quantification_ consiste à transformer un signal à valeurs continues
en un signal à valeurs discrètes.
La combinaison de ces deux opérations est appelée _numérisation_.
Nous étudierons dans les pages correspondantes ([](P:echantillonnage) et [](P:quantification))
quelles sont les conditions qui permettent de ne pas trop dégrader le signal
et quelles sont les conséquences sur le signal numérique.

```{admonition} Remarque
Sur un ordinateur, on ne peut donc traiter que des signaux numériques, et de durée limitée,
car une mémoire informatique ne peut stocker qu'un nombre fini de valeurs dont la précision est limitée.
```

Un signal peut également être à valeurs complexes, quelle que soit sa classification.
La représentation complexe est une représentation mathématique bien pratique
car même si les signaux physiques peuvent être exprimés avec des valeurs réelles,
les nombres complexes permettent parfois de manipuler plus simplement les signaux
{ref}`[Prandoni 2008, p. 20] <C:references>`.
C'est le cas par exemple des champs électromagnétiques.

Dans la suite du cours, nous adopterons les conventions de notation suivantes :
* les signaux à temps continu sont notés avec des parenthèses
  et le plus souvent la variable $t\in\mathbb{R}$, par exemple : $x(t)$.
* les signaux à temps discret (échantillonnés) sont notés avec des crochets
  et le plus souvent la variable $n\in\mathbb{Z}$, par exemple : $x[n]$.

<a class="exercise btn btn-light" href="td.html#exercice-1" role="button">1</a>