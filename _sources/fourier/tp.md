# Exercices sur machine

## Série de Fourier d'un créneau

On considère le signal créneau $y(t)$ de période $2T$ défini par :

$$
y(t) =
\begin{cases}
  A  \quad  &\text{si}\ -\frac{T}{2} \leq t \leq \frac{T}{2}, \\
  0  \quad  &\text{sinon}
\end{cases}
$$

avec $A=1$ et $T = 1$.

* Tracez avec Python la série de Fourier de ce signal (qui a été calculée en TD),
  c'est-à-dire le spectre d'amplitude (`numpy.abs`) et de phase (`numpy.angle`) de $y$, pour $k$ allant de $-10$ à $10$.

On souhaite maintenant reconstruire le signal temporel en ne considérant que les $K$ premières harmoniques.

* Grâce à la formule de la série de Fourier inverse,
  tracez le signal temporel reconstruit pour une valeur de $K$ fixée (c'est-à-dire pour $k\in\{-K,\dots,K\}$).
  Il peut être utile dans ce cas d'utiliser une boucle `for` sur $k$.
  Attention, il faut considérer la partie réelle du résultat car le signal obtenu contient une composante imaginaire
  due aux erreurs numériques.

* Quel signal obtenez-vous pour $K=0$, puis pour $K=1$ ?

* Tracez ensuite le signal reconstruit en prenant des valeurs de $K$ de plus en plus grandes.
  Que constatez-vous ?
  
## Transformée de Fourier discrète d'un signal numérique

On considère le signal suivant de longueur $N=100$ échantillons :

$$
z[n] =
\begin{cases}
  1 &\quad\text{si}\ 0 \leq n < 50, \\
  0 &\quad\text{sinon.}
\end{cases}
$$

* Créez et affichez le signal $z[n]$.
  Une façon élégante de faire cela est de s'inspirer du premier exercice du TP 1.

L'algorithme FFT (_Fast Fourier Transform_), qui permet de calculer rapidement une TFD (transformée de Fourier discrète),
est implémenté dans la fonction `numpy.fft.fft`.
La TFD étant périodique de période $N$, elle n'est tracée que sur une seule période.
Les questions suivantes ont pour objectif de représenter la TFD de trois façons différentes.


### Spectre non centré, en fonction des échantillons

La fonction `numpy.fft.fft` retourne la TFD $Z$ de $z$
en fonction des échantillons fréquentiels $k$, numérotés de $0$ à $N-1$.

* Représentez le module et la phase de la TFD entre $0$ et $N-1$.
  Prenez soin de définir le vecteur des abscisses $k$
  que l'on réutilisera par la suite
  (vous pouvez par exemple utiliser `numpy.arange`).


### Spectre centré, en fonction des échantillons

En général, on préfère centrer la TFD autour de 0,
donc entre les échantillons
$-N/2$ et $N/2-1$ (si $N$ est pair),
ou $-N/2$ et $N/2$ (si $N$ est impair).

Pour cela, il faut d'une part redéfinir le vecteur des abscisses
(la fonction `numpy.floor` renvoie la partie entière qui permet de gérer la parité de $N$) :

```
k = np.arange(N) - np.floor(N/2)
```

et d'autre part utiliser `numpy.fft.fftshift` qui déplace la deuxième moitié d'un vecteur au début de celui-ci :

$$
v = [6\,5\,4\,3\,2\,1]
\quad\rightarrow\quad
\mathrm{fftshift}(v) = [3\,2\,1\,6\,5\,4]
$$

* Tracez le module et la phase de $Z$ en les centrant autour de $0$.


### Spectre centré, en fonction des fréquences

Chaque échantillon du spectre peut être relié à une fréquence particulière,
à condition de connaître la « période d'échantillonnage » $T_e$ entre deux échantillons du signal temporel.
On peut montrer (cf. {ref}`P:echantillonnage`) que la fréquence $f$ correspondant à l'échantillon $k$
est $f = k/(N \, T_e)$.

* Tracez le module et la phase de $Z$ centrée et avec un axe des abscisses gradué en fréquences,
  dans le cas où $T_e=0,1$ s.
  
### Application

* Chargez le signal <a href="../_static/inconnu.csv">inconnu.csv</a> ($T_e=0,1$ ms) et tracez sa TFD pour déterminer quelle est la
  fréquence principale de ce signal.