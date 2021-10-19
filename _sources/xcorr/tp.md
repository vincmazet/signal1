# TP : intercorrélation

L'objectif est, comme dans l'exemple {numref}`F:intercorrelation:sinusoide`, de détecter un signal particulier (un « motif ») dans un signal perturbé par de forts parasites (on parle de « bruit »).
Le motif en question sera ici une exponentielle décroissante.

* Créez un signal $x$ de $N=1000$ échantillons correspondant à une exponentielle décroissante :

  $$
    x[n] =
    \begin{cases}
      \exp\left(-\frac{n-k}{100}\right)    &\text{si} n \geq k, \\
      0                                    &\text{sinon},
    \end{cases}
  $$
  
  en choisissant vous-même une valeur (positive) pour $k$.

* Créez une deuxième exponentielle décroissante débutant en $k=0$ : ce signal sera le motif $m$.

* Représentez l'intercorrélation $R_{xm}$ entre $x$ et $m$.
  Que se passe-t-il lorsque $k$ varie ?

* Chargez le fichier [tp13.csv](https://vincmazet.github.io/signal1/_static/files/tp13.csv) et affichez le signal correspondant.
  Ce signal est une exponentielle décroissante très bruitée.
  Êtes-vous capable de détecter à l'œil à quel instant $k$ débute l'exponentielle décroissante ?

* Représentez l'intercorrélation entre le signal signal3.csv et $m$
  pour en déduire l'instant auquel commence le motif.