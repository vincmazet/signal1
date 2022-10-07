# Représentation vectorielle des signaux

Un signal qui est échantillonné et à temps limité (c'est-à-dire nul ou non défini en dehors d'un intervalle)
peut se représenter par une séquence finie de valeurs numériques.
Dans le cas d'un signal $x$ défini sur $N$ échantillons, le signal est équivalent à un vecteur :

$$
  x = [ x_0 \, x_1 \, \dots \, x_{N-1} ]
$$

où les $x_n$ sont les échantillons du signal.
On notera $x\in\mathbb{R}^N$ pour signifier que $x$ est un signal échantillonné à temps limité de $N$ échantillons à valeurs réelles.

Notez que, par convention, le premier échantillon est indexé par 0.

L'équivalence entre signal échantillonné à temps limité et vecteur a plusieurs intérêts :
* on peut utiliser des outils de l'algèbre linéaire pour faire du traitement du signal ;
* on peut faire des interprétations géométriques ;
* c'est l'interprétation qui est faite dans les logiciels et les langages de calcul numérique, comme en Python.

<div class="example">

L'échelon $u$ et l'impulsion $\delta$ s'écrivent dont dans $\mathbb{R}^2$ :

$$
  u = [ 1 \, 1]
  \qquad\text{et}\qquad
  \delta = [1 \, 0].
$$

Leur représentation est donnée {numref}`F:vect:ex-graphe`.
Il s'agit simplement de signaux de deux échantillons. 
Les axes de cette représentation sont : les échantillons en abscisse, et les amplitudes en ordonnée.

```{figure} ex-graphe.svg
---
width: 600px
name: F:vect:ex-graphe
---
Représentation de l'échelon et de l'impulsion de taille 2 sous forme de signaux.
```

La représentation vectorelle de ces deux signaux se fait dans un espace à deux dimensions, comme dans la {numref}`F:vect:ex-espace`.
Les axes de cette représentation sont : le premier échantillon du signal en abscisse, et le deuxième échantillon en ordonnée.

```{figure} ex-espace.svg
---
width: 300px
name: F:vect:ex-espace
---
Représentation de l'échelon et de l'impulsion de taille 2 sous forme de vecteurs.
```
    
</div>

## Quelques définitions

On peut définir les mêmes outils que ceux de la géométrie euclidienne pour les signaux échantillonnés à temps limité.


### Produit scalaire

Le _produit scalaire_ entre deux signaux $x$ et $y$ de taille $N$ est (la notation $\cdot^*$ signifie conjugué) :

$$
  \langle x,y \rangle = \sum_{n=0}^{N-1} x_n y_n^*.
$$

### Orthogonalité

Deux signaux sont _orthogonaux_ si et seulement si leur produit scalaire est nul.

### Norme

La _norme_ d'un signal $x$ de taille $N$ est :

$$
  \|x\| = \sqrt{\langle x,x \rangle} = \sqrt{ \sum_{n=0}^{N-1} |x_n|^2 }.
$$

### Énergie

L'_énergie_ d'un signal de taille $N$ est le carré de sa norme :

$$
  \|x\|^2 = \sum_{n=0}^{N-1} |x_n|^2.
$$

### Distance

La _distance_ entre deux signaux $x$ et $y$ de taille $N$ est la norme de la différence :

$$
  \|x-y\| = \sqrt{ \sum_{n=0}^{N-1} |x_n-y_n|^2 }.
$$

### Erreur quadratique moyenne

L'_erreur quadratique moyenne_ (EQM) entre deux signaux $x$ et $y$ de taille $N$ est :

$$
  \mathrm{EQM} = \frac{1}{N}\|x-y\|^2.
$$

### Base

Une _base_ est un ensemble de $N$ signaux tels que tout signal échantillonné de taille $N$ peut s'écrire comme une combinaison linéaire unique de signaux de cette base. Ainsi, si $\{\varphi_0,\, \varphi_1,\, \dots,\, \varphi_{N-1}\}$ est un ensemble de $N$ signaux formant une base, alors tout signal $x\in\mathbb{C}^N$ s'écrira

$$
  x = \sum_{k=0}^{N-1} \alpha_k \varphi_k
$$

où les $\alpha_k$ sont des coefficients uniques (il ne peut pas y avoir plusieurs jeux différents de coefficients $\{\alpha_k\}$).

Si en plus les vecteurs $\{\varphi_k\}$ de cette base sont orthogonaux deux à deux et de norme 1, alors la base est _orthonormée_.

<div class="example">

Pour $N=4$, les signaux $\delta[n-k]$ avec $k\in\{0,\dots,3\}$ forment une base, qui plus est orthonormée.

```{figure} base-canonique.svg
---
name: F:vect:base-canonique
---
Base canonique dans $\mathbb{R}^4$.
```

Nous ne représentons pas ces quatre signaux sous forme de vecteur, car cela nécessite de les représenter dans un espace à quatre dimensions (or, votre écran n'en a que deux).

Cette base est d'ailleurs appelée _base canonique_ car c'est la base naturelle pour représenter les signaux. En effet, les échantillons de tout signal de taille $N$ correspondent aux coefficients $\alpha_k$.
    
</div>

## Décomposition sur une base

Parfois, il est intéressant de représenter les signaux dans une autre base que la base canonique : on parle alors de _décomposition_ ou de _projection_ d'un signal $x$ sur une base.
La transformée de Fourier peut être vue comme la décomposition de signaux dans une autre base.
De même, les techniques de compression (audio, image ou vidéo) utilisent astucieusement une décomposition dans une base particulière pour réduire le poids des données.
Les coefficients du signal dans cette nouvelle base vont donc être différent des coefficients de la base canonique.

La décomposition d'un signal $x$ de taille $N$ dans une base orthonormée $\{\varphi_k\}$, et donc le calcul des nouveaux coefficients $\alpha_k$, s'obtient en calculant le produit scalaire de $x$ avec chaque élément $\varphi_k$ de la base :

$$
  \forall k \in \{0,\dots,N-1\},\quad
  \alpha_k = \langle x, \varphi_k \rangle.
$$

La _reconstruction_ du signal $x$ consiste à réécrire le signal dans la base canonique depuis la base $\{\varphi_k\}$. Pour cela, le signal $x$ s'obtient par la somme des éléments de la base $\varphi_k$ pondérés par les coefficients $\alpha_k$ :

$$
  x = \sum_{k=0}^{N-1} \alpha_k \varphi_k.
$$