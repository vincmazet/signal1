(P:quantification)=
# Quantification

La quantification (_quantization_) consiste à transformer un signal à valeurs continues en un signal à valeurs discrètes.
Ces valeurs discrètes correspondent à des « niveaux de quantification ».
En pratique, elles sont représentées par un code binaire,
c'est pourquoi le nombre de niveaux de quantification est souvent une puissance de deux.

## Principe

La « quantification uniforme par arrondi » est la méthode la plus plus simple : les niveaux de quantification sont répartis uniformément et distants de la même valeur $q$ (appelée « pas de quantification »).
Les valeurs que prend le signal non quantifié $x(t)$ sont arrondies au niveau de quantification le plus proche :

$$
x_q(t) = q \times \left\lfloor \frac{x}{q}+\frac{1}{2} \right\rfloor
$$

où $\lfloor\cdot\rfloor$ est la partie entière.

La {numref}`F:quantification:signal` représente un exemple de quantification uniforme par arrondi pour $K=8$ niveaux de quantification et $q=0,3$.

```{glue:figure} G:quantification:signal
:name: "F:quantification:signal"

Exemple de quantification d'un signal $x(t)$ sur $N=8$ niveaux.
```

La « caractéristique de quantification » illustre la quantification utilisée.
C'est la courbe représentant $x_q$ en fonction de $x$, elle a donc la forme d'une fonction en escalier ({numref}`F:quantification:caracteristique`).

```{glue:figure} G:quantification:caracteristique
:name: "F:quantification:caracteristique"

Caractéristique de quantification d'une quantification uniforme par arrondi sur $N=8$ niveaux.
```

Pour éviter la saturation du signal (comme c'est le cas dans l'exemple de la {numref}`F:quantification:signal`),
le choix du niveau de quantification $q$ doit être déterminé en fonction des amplitudes extrêmes du signal $x_\mathrm{min}$ et $x_\mathrm{max}$
et du nombre de niveaux de quantification $K$, tel que : $q = (x_\mathrm{max}-x_\mathrm{min})/(K-1)$.


## Erreur de quantification

On avait vu dans le chapitre {ref}`C:Echantillonnage` que l'échantillonnage n'introduisait aucune erreur
(à condition de respecter la condition $f_e > 2 f_\mathrm{max}$).
Ce n'est pas le cas pour la quantification :
elle engendre une erreur puisque le signal quantifié $x_q$ n'a pas les mêmes valeurs que le signal non quantifié $x$.
La différence $\varepsilon(t) = x(t) - x_q(t)$ est appelée « erreur de quantification » (cf. {numref}`F:quantification:erreur`).

```{glue:figure} G:quantification:erreur
:name: "F:quantification:erreur"

Erreur de quantification sur l'exemple précédent (en rouge).
```

La valeur maximale de cette erreur est la moitié du pas de quantification : $q/2$.
Sa moyenne est (statistiquement) nulle et sa puissance est (statistiquement) égale à $q^2/12$ (dans l'hypothèse d'un signal $x(t)$ distribué uniformément).


## Qantification non uniforme

Dans certaines applications, le signal présente rarement de grandes amplitudes mais il est souvent d'amplitude faible.
C'est le cas par exemple des signaux de parole.
Aussi, il est intéressant d'avoir une quantification où le pas de quantification est différent dans les faibles et les grandes amplitudes.
Plus précisément, on privilégiera un pas de quantifcation faible pour les faibles amplitudes et grand pour les grandes amplitudes.
Cela aboutit à une quantification non uniforme.

Par exemple, l'application d'une transformation non linéaire sur le signal avant une quantification uniforme
correspond à une quantification non uniforme.
En téléphonie, la « loi A » permet d'obtenir la quantification représentée {numref}`F:quantification:caracteristique-A`.

```{glue:figure} G:quantification:caracteristique-A
:name: "F:quantification:caracteristique-A"

Caractéristique de quantification d'une quantification uniforme par arrondi sur $N=8$ niveaux.
```

