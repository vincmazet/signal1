(P:echantillonnage)=
# Échantillonnage

Dans ce chapitre, nous allons dans un premier temps présenter le principe de l'échantillonnage d'un signal analogique,
puis dans un deuxième temps le principe de l'opération inverse : la reconstruction de ce signal analogique à partir du signal échantillonné.
Ces deux opérations seront considérées dans un cas idéal.
Nous discuterons ensuite du choix des paramètres de l'échantillonnage,
à savoir la fréquence d'échantillonnage $f_e$ et la fréquence de coupure $f_c$.
Enfin, nous terminerons pas l'énoncé du théorème de l'échantillonnage.

## Échantillonnage idéal

L'échantillonnage consiste à convertir un signal $x(t)$ analogique
en une séquence (suite de nombres) $x[n] = x(nT_e)$
où $T_e$ est la « période d'échantillonnage ».

```{figure} echantillonnage-temporel-1.svg
---
---
Signal analogique $x(t)$ et échantillonné $x[n]$.
```

Pour étudier le phénomène de l'échantillonnage d'un point de vue mathématique,
il est plus simple de représenter le signal échantillonné par un train d'impulsions $x^*(t)$, défini par :

$$
x^*(t) =
\begin{cases}
x(t) &\text{si}\ t\ \text{est multiple de}\ T_e \\
0    &\text{sinon}
\end{cases}
$$


```{figure} echantillonnage-temporel-2.svg
---
---
Le signal échantillonné $x[n]$ est considéré comme un train d'impulsions $x^*(t)$.
```

On peut montrer que la transformée de Fourier de $x^*(t)$ s'écrit :

$$
X^*(f) = \sum_k X(f-kf_e)
$$

où $f_e=1/T_e$ est la « fréquence d'échantillonnage » (en anglais _sampling frequency_, souvent notée $f_s$).
Par conséquent, l'échantillonnage du signal temporel à la période $T_e$ produit une périodisation du spectre à la période $f_e=1/T_e$,
comme illustré sur les figures ci-dessous.

```{figure} echantillonnage-frequentiel-1.svg
---
---
Spectre de $x$.
```

```{figure} echantillonnage-frequentiel-2.svg
---
---
Spectre de $x^*$.
```

## Reconstruction idéale

On peut retrouver le signal analogique $x(t)$ à partir du signal échantillonné $x^*(t)$,
en sélectionnant la période du spectre centrée autour de $0$,
c'est-à-dire la période située entre les fréquences entre $-f_c$ et $+f_c$.
Cette opération est effectuée en appliquant un filtre passe-bas de fréquence de coupure $f_c$ sur le signal $x^*$,
afin d'obtenir un nouveau signal $\tilde{x}$ qu'on espère être égal à $x$.

```{figure} echantillonnage-frequentiel-3.svg
---
---
Spectre de $x^*$ et la zone du spectre à conserver.
```

```{figure} echantillonnage-frequentiel-4.svg
---
---
Résultat du filtre passe-bas de fréquence de coupure $f_c$.
```

En fréquentiel, le filtre correspond à une multiplication du spectre $X^*(f)$ par une porte de largeur $2f_c$ :

$$
\tilde{X}(f) = X^*(f) \ \mathrm{rect}(f/2f_c)
$$

Le signal temporel s'écrit donc, grâce à la transformée de Fourier inverse :

$$
\tilde{x}(t) = x^*(t) \ * \ 2 f_c \mathrm{sinc}(2f_ct)
$$

Donc, chaque impulsion de $x^*$ est convoluée par un sinus cardinal.
En ajustant correctement la valeur de la fréquence de coupure avec la période d'échantillonnage,
cette opération revient à une interpolation de $x^*$,
et permet donc de reconstruire les valeurs du signal qui n'existent pas.
En d'autres termes : seuls quelques échantillons (les valeurs non nulles de $x^*$)
suffisent pour avoir toute l'information du signal analogique $x$ !

<!-- interpsinc.m peut être présenté ici. Je peux présenter les versions Matlab, Python, animation depuis Python, GIF animé...
Je peux aussi faire une interface qui permettent de jouer sur les valeurs de fe et fc
=> ça permet de discuter du choix de ces paramètres et de leur influcene -->

```{figure} echantillonnage-temporel-3.svg
---
---
Reconstruction du signal analogique $\tilde{x}(t)$ (ici, $f_c=f_e$).
```

La reconstruction est très bonne au centre du signal, ce qui illustre le bon comportement de l'interpolation par sinus cardinal.
Au contraire, la reconstruction n'est pas bonne aux extrémités du signal :
cela s'explique par le fait qu'à l'extérieur de l'intervalle considéré,
il n'y a pas d'échantillons de $x^*$ qui permettent de définir des sinus cardinaux qui permettent de reconstruire le signal analogique.


## Choix de la fréquence de coupure

Lors de la reconstruction, la moindre des choses est que les valeurs non nulles de $x^*$ ne soient pas modifiées,
puisqu'elles sont égales à $x$ aux instants d'échantillonnage.
Il faut donc que les sinus cardinaux qui apparaissent dans la reconstruction s'annulent aux points d'échantillonnage,
ce qui se traduit par la condition :

$$
\frac{1}{2f_c} = T_e
\qquad\Leftrightarrow\qquad
f_c = \frac{1}{2T_e} = \frac{f_e}{2}
$$

Le meilleur choix pour la fréquence de coupure du filtre passe-bas est donc $f_c=f_e/2$,
cette valeur est appelée « fréquence de Nyquist ».

```{figure} echantillonnage-frequentiel-5.svg
---
---
Spectre de $x^*$ et la zone du spectre à conserver, dans le cas où $f_c=f_e/2$.
```

## Choix de la fréquence d'échantillonnage

Le spectre de $x^*(t)$ est une périodisation du spectre de $x(t)$ a une période $f_e$.
Si $f_e$ est trop faible, alors il peut y avoir une superposition des périodes,
et le filtrage ne permettra pas de les séparer convenablement.

```{figure} echantillonnage-frequentiel-6.svg
---
---
Aïe aïe aïe ! Avec une fréquence d'échantillonnage trop faible, la périodisation du spectre de $x$ produit des recouvrement de périodes.
```

```{figure} echantillonnage-frequentiel-7.svg
---
---
Signal reconstruit après filtrage, pour une fréquence d'échantillonnage trop faible :
on n'obtient pas le signal original $x$, il y a repliement spectral.
```

La reconstruction correcte de $x$ à partir de $x^*$ implique donc une valeur minimale de $f_e$ :

```{margin}
Si vous ne deviez retenir qu'une seule formule du cours de traitement de signal, ce serait cette équation.
Mais bien sûr, vous retiendrez beaucoup plus !
```

$$
\frac{f_e}{2} > f_\mathrm{max}
\qquad\Leftrightarrow\qquad
f_e > 2f_\mathrm{max}
$$

où $f_\mathrm{max}$ est la plus grande fréquence présente dans le signal $x$.

Ainsi, on prendra soin de vérifier que cette condition est vérifiée avant tout échantillonnage.
Si ce n'est pas possible (par exemple, la fréquence d'échantillonnage est limitée pour des raisons techniques),
alors il convient de supprimer les fréquences supérieures à la fréquence de Nyquist $f_e/2$ dans le signal.
Pour cela, on applique avant l'échantillonnage un filtre passe-bas de fréquence de coupure $f_e/2$.
Ce filtre est appelé « filtre anti-repliement ».


### Repliement spectral

Lorsque la condition ci-avant n'est pas respectée, et donc que $f_e < 2f_\mathrm{max}$, alors il y a recouvrement des périodes.
On parle de « repliement spectral » (en anglais : _aliasing_).
L'animation ci-dessous simule l'effet du repliement spectral sur une sinusoïde dont on peut régler la période d'échantillonnage.

<div id="aliasing" class="spetsi mathjax_process"></div>
<script src="https://vincmazet.github.io/spetsi/js/spetsi.js" type="text/javascript"></script>
<script src="https://vincmazet.github.io/spetsi/js/aliasing.js" type="text/javascript"></script>


Le repliement spectral peut apparaître sur tout signal numérique, s'il est mal échantillonné.
Les exemples ci-dessous illustrent l'effet du repliement spectral sur différents signaux.

`````{tab-set}

````{tab-item} Signal
Un cosinus de fréquence 6 Hz (en gris) est échantillonné à 6,5 Hz.
Le signal obtenu avec l'échantillonnage est un cosinus de fréquence 0,5 Hz (points bleus).

```{figure} aliasing-signal.png
---
width: 400px
```
````

````{tab-item} Image
Une image est un signal en deux dimensions.
Le repliement spectral apparaît lorsque le motif présent dans l'image présente des structures très fines par rapport aux pixels.
```{figure} aliasing-photo.jpg
---
width: 400px
```
````

````{tab-item} Vidéo
Une vidéo possède à la fois un échantillonnage spatial (au sein d'une même image)
mais aussi un échantillonnage temporel lié au nombres d'images acquises par seconde.
En général, la fréquence d'échantillonnage temporelle est de 25 Hz,
donc tout phénomène plus rapide que 12,5 Hz peut engendrer des effets étranges, comme sur la vidéo ci-dessous.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ByTsISFXUoY?start=10" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
````

`````

<!-- Rajouter un panneau avec un exemple sonore de chirp sous échantillonné (cf audio_aliasing.m -->

## Théorème de l'échantillonnage

<!-- Vetterli p. 498 -->
Le théorème de l'échantillonnage a été formulé différemment et souvent indépendamment par plusieurs scientifiques :
Whittaker (1915), Nyquist (1928), Kotelnikov (1933), Raabe (1939) et Someya (1949),
mais c'est surtout à Shannon (1948) que ce théorème est attribué.
Il peut s'énoncer ainsi :
si un signal analogique $x(t)$ de fréquence maximale $f_\mathrm{max}$ est échantillonné à une fréquence $f_e > 2f_\mathrm{max}$,
alors $x(t)$ peut être exactement reconstruit à partir de ses échantillons à l'aide d'une interpolation par sinus cardinal :

$$
\tilde{x}(t) = \sum_{n=-\infty}^{+\infty} x\left(\frac{n}{f_e}\right) \mathrm{sinc} \left(f_e\left(t-\frac{n}{f_e}\right)\right).
$$

En pratique, la reconstruction n'est pas parfaite car il faut une somme infinie de termes dans la somme
et des instants d'échantillonnage très précis.
Aussi il est souvent préférable de choisir $f_e \gg 2 f_\mathrm{max}$.