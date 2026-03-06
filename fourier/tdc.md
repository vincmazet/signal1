# 🖍️ Correction

# Exercices sur feuille


## Exercice 1

$$
  X(f) &= \frac{A}{2} \mathrm{sinc}\left(\frac{k}{2}\right) \\
  Y(f) &= AT \mathrm{sinc}(ft) \\
  Z(t) &= A e^{j\pi k / 2N} \frac{ \sin\left(\pi k/2\right) }{ \sin\left(\pi k/2N\right) }
$$

## Exercice 2

<!-- * Calculez la série de Fourier d'une sinusoïde de fréquence $f_0$ et de phase $\varphi$.

* Que devient le spectre lorsque la phase varie ?

* Tracez le module et la phase de la série de Fourier pour $\varphi=0$ (cas d'un sinus) et pour $\varphi=+\pi/2$ (cas d'un cosinus).
  Que constatez-vous ? -->
  <!-- Même module, phase différente. -->

Le signal $x(t) = \sin(2\pi f_0 t + \varphi)$ est périodique de période $T_0 = 1/f_0$
et sa série de Fourier est égale à :

$$
  X[k] &= \frac{1}{T_0} \int_{T_0} x(t) e^{-j2\pi kt/T_0} dt \\
       &= \frac{1}{2jT_0} \int_{T_0} e^{-j2\pi f_0 t(1-k)} e^{j\varphi} dt - \frac{1}{2jT_0} \int_{T_0} e^{-j2\pi f_0 t(1+k)} e^{j\varphi} dt \\
$$

Il faut distinguer trois cas, en fonction de la valeur de $k$ :

$$
  &\text{si } k=1 :  &\quad X[1]  &= \frac{1}{2} e^{j(\varphi-\pi/2)}, \\
  &\text{si } k=-1 : &\quad X[-1] &= \frac{1}{2} e^{-j(\varphi-\pi/2)}, \\
  &\text{sinon} :    &\quad X[k]  &= 0
$$


## Exercice 3

En notant $X(f) = \mathcal{F}[x(t)]$ la transformée de Fourier de $x(t)$ et en utilisant les formules d'Euler :

$$
\mathcal{F}\big[ x(t)\times\cos(2\pi f_0 t) \big]
&= \int x(t) \cos(2\pi f_0 t) e^{-j2\pi ft} dt \\
&= \int x(t) \frac{1}{2} \left( e^{j2\pi f_0 t} + e^{-j2\pi f_0 t} \right) e^{-j2\pi ft} dt \\
&= \frac{1}{2} \int x(t) e^{- j2\pi (f-f_0) t} dt + \frac{1}{2} \int x(t) e^{- j2\pi (f+f_0) t} dt \\
&= \frac{1}{2} \big[ X(f-f_0) X(f+f_0) \big]
$$

## Exercice 4

$$
X(f) = \frac{1}{a+j2\pi f} = \frac{a-j2\pi f}{a^2+(2\pi f)^2}
$$


## Exercice 5

$$
  X(f) = 2 \mathrm{sinc} \big( 2 \pi f \big)
       +   \mathrm{sinc} \big( \pi (1-2f) \big)
       +   \mathrm{sinc} \big( \pi (1+2f) \big)
$$


## Exercice 6

* La transformée de Fourier décompose un signal en somme d'exponentielle complexe.
  Or, une constante est égale à l'exponentielle complexe de fréquence nulle $e^{j2\pi\times 0\times t}$,
  donc la transformée de Fourier d'une constante correspond à une seule fréquence, située en 0,
  et donc le spectre d'un signal temporel constant est une impulsion de Dirac en 0.
* Par dualité, le spectre d'une impulsion de Dirac en 0 est un signal temporel constant.
* En conséquence, une impulsion de Dirac est composée de toutes les fréquences et celles-ci sont de même amplitude.
  C'est pour cette raison que l'impulsion est intéressante dans le cadre de l'étude des systèmes et des filtres.


## Exercice 7

<!-- Le module du spectre d'un signal musical $m(t)$ est schématisé ci-dessous (la phase n'a pas d'importance dans cet exercice) :

```{figure} fourier-am.svg
---
height: 200px
name: F:td-fourier:am
```

On envisage de transmettre ce signal par radio en modulation d'amplitude, c'est-à-dire de transmettre le signal $x(t)$ défini par :

$$
  x(t) = \left(1 + m(t)\right) \cos(2\pi f_p t).
$$

où $f_p = 162$ kHz. <!-- Fréquence AM de France Inter -->
<!-- Le deuxième terme de cette équation est la «&nbsp;porteuse&nbsp;» qui est modulée en amplitude par $1+m(t)$.

* À l'aide des propriétés de la transformée de Fourier, esquissez le module du spectre de $x(t)$.

* Une autre station de radio désire elle aussi transmettre un signal musical, dont la fréquence maximale est 8000 Hz.
  Proposez une valeur de la fréquence de la porteuse de ce deuxième programme. -->


## Exercice 8

* $X(f)$ est apériodique car le signal temporel $x(t)$ est à temps continu.

* $X(f)$ est un signal continu car le signal temporel $x(t)$ est apériodique.

* La définition de la transformée de Fourier permet d'écrire :
  $$
    X(0) = \int x(t) e^{-j2\pi f 0} dt = \int x(t) dt
  $$
  qui est l'aire sous la courbe, égale à 6.
  $X(0)$ est appelée la composante continue

* Le théorème de Parseval indique qu'il y a conservation de l'énergie entre le domaine temporel et le domaine fréquentiel :
  $$
    \int|X(f)|^2\,df = \int|x(t)|^2\,dt
  $$
  et cette quantité est égale à 10 (aire sous la courbe mise au carré).


## Exercice 9

* L'axe des abscisses est le temps en millisecondes ; l'axe des ordonnées est la fréquence en kilohertz.
* Le signal est composé de dix parties successives,
  chacune durant une vingtaine de millisecondes et constituées de deux sinusoïdes de [fréquences différentes](https://fr.wikipedia.org/wiki/Code_DTMF#Fr%C3%A9quences).
  Cela constitue un signal DTMF (_dual-tone multi-frequency_).


## Exercice 10

* A $\leftrightarrow$ 4 : deux sinusoïdes correspondent à quatre impulsions en fréquentiel.
* B $\leftrightarrow$ 2 : multiplication des signaux A et D, donc convolution des spectres 4 et 6.
* C $\leftrightarrow$ 2 : une sinusoïdes correspondent à deux impulsions en fréquentiel.
* D $\leftrightarrow$ 6 : signal temporel qui évolue très lentement, donc son contenu fréquentiel est concentré dans les basses fréquences (par ailleurs, la transformée de Fourier d'une gaussienne est une gaussienne)..
* E $\leftrightarrow$ 1 : la transformée de Fourier d'une porte est un sinus cardinal.
* F $\leftrightarrow$ 5 : multiplication des signaux C et E, donc convolution des spectres 3 et 1.