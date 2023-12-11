# Exercices sur feuille


## Exercice 1

<!-- Cet exo permet de comparer les différentes transformations de Fourier, mais également de distinguer variable de fréquence, variable de temps, période et fréquence. -->

* Calculez la série de Fourier du créneau $x(t)$ tel que sur la période $[-T,\,T]$ il est défini comme :
  
  $$
    x(t) =
    \begin{cases}
      A   &\text{si}\, -\frac{T}{2} \leq t \leq \frac{T}{2}, \\
      0   &\text{sinon}.
    \end{cases}
  $$

* Calculez la transformée de Fourier du signal $y(t)$ :
  
  $$
    y(t) = A\,\mathrm{rect}\left(\frac{t}{T}\right) =
    \begin{cases}
      A   &\text{si}\, -\frac{T}{2} \leq t \leq \frac{T}{2}, \\
      0   &\text{sinon}.
    \end{cases}
  $$

* Calculez la série de Fourier discrète du signal $z[n]$ défini sur $\{-N,\dots,\,N-1\}$ (avec $N$ pair) :
  
  $$
  z[n] =
    \begin{cases}
      A   &\text{si}\, -\frac{N}{2} \leq n < \frac{N}{2}, \qquad\text{(attention :}\, z\left[\frac{N}{2}\right] = 0)\\
      0   &\text{sinon}.
    \end{cases}
  $$
  

## Exercice 2

* Calculez la série de Fourier d'une sinusoïde de fréquence $f_0$ et de phase $\varphi$.

* Que devient le spectre lorsque la phase varie ?

* Tracez le module et la phase de la série de Fourier pour $\varphi=0$ (cas d'un sinus) et pour $\varphi=+\pi/2$ (cas d'un cosinus).
  Que constatez-vous ?
  <!-- Même module, phase différente. -->
  
## Exercice 3
<!-- Source : Duvaut exercice 1.1.2 -->

Soit $x(t)$ un signal réel. Quelle est la relation entre la transformée de Fourier de $x(t)$ et celle de $x(t)\times\cos(2\pi f_0 t)$ ?

## Exercice 4
<!-- Source : cours de C. Doignon -->
<!-- X(f) = 1/(a+j2\pi f) -->

Calculez la transformée de Fourier du signal $x(t) = \exp(-at)\,u(t)$ où $a$ est un réel strictement positif.

## Exercice 5

Le module du spectre d'un signal musical $m(t)$ est schématisé ci-dessous (la phase n'a pas d'importance dans cet exercice) :

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
Le deuxième terme de cette équation est la «&nbsp;porteuse&nbsp;» qui est modulée en amplitude par $1+m(t)$.

* À l'aide des propriétés de la transformée de Fourier, esquissez le module du spectre de $x(t)$.

* Une autre station de radio désire elle aussi transmettre un signal musical, dont la fréquence maximale est 8000 Hz.
  Proposez une valeur de la fréquence de la porteuse de ce deuxième programme.

## Exercice 6

* Quel est, intuitivement, le spectre d'un signal temporel constant ? <!-- un dirac en 0 car pas de sinusoide -->
* En déduire le spectre d'une impulsion de Dirac centrée en 0. <!-- dualité : c'est une constante -->
* Qu'en concluez-vous sur la composition fréquentielle d'une impulsion de Dirac ? <!-- contient toutes les fréquences en quantité égale -->

## Exercice 7
<!-- Inspiré de Oppenheim 4.25 -->

Le signal $x(t)$ est représenté ci-dessous.

```{figure} signal-M.svg
---
height: 200px
name: F:td-fourier:signal-M
```

On note $X(f)$ sa transformée de Fourier.
Répondez aux questions suivantes sans calculer explicitement $X(f)$.

* $X(f)$ est-elle périodique ? Si oui, donnez sa période.

* $X(f)$ est-elle un signal continu ou discret ?

* Donnez la valeur de $X(0)$.

* Donnez $\int|X(f)|^2\,df$

## Exercice 8
<!-- Source : Oppenheim 4.21 -->

Calculez la transformée de Fourier du signal

$$
  x(t) =
  \begin{cases}
    1+\cos\pi t &\text{si}\, |t|\leq 1, \\
    0           &\text{sinon}.
  \end{cases}
$$

## Exercice 9

Calculez la transformée de Fourier du signal $\mathrm{rect}(t)\times\cos(2\pi f_p t)$.

## Exercice 10
<!-- Source : Oppenheim exo 8.3 -->

Le signal $m(t)$ est à bande limitée : $M(f)=0$ pour $|f|>1$ kHz.
Il est modulé en amplitude par une porteuse sinusoïdale de fréquence $f_p=1$ kHz :

$$
x(t) = m(t) \sin(2\pi f_p t)
$$

Sa démodulation est effectuée par le dispositif suivant :

```{figure} chaine-modulation.png
---
height: 150px
name: F:td-fourier:chaine-modulation
```

où le filtre passe-bas $h(t)$ est idéal, de gain 2 et de fréquence de coupure $f_c=1$ kHz.
Déterminez $y(t)$.

## Exercice 11
<!-- Source : Ventre exo 2.1 -->

Lorsque Canal+ émettait encore en analogique, le son $s(t)$ était chiffré en inversant son spectre comme schématisé ci-dessous.
Proposez une technique pour réaliser cette opération.

```{figure} canalplus.png
---
width: 100%
name: F:td-fourier:canalplus
```

## Exercice 12

La figure ci-dessous est tirée de la publication scientifique
> R. Reiz, C. Gordan, D. Purcaru & C. Kokkonis, « Using Advanced Signal Processing Methods for DTMF Detection »,
> _Journal of Electrical and Electronics Engineering_, 2009.

```{figure} sftf.png
---
height: 300px
name: F:td-fourier:sftf
```

* Que représente les axes (et oui, le titre de l'axe des ordonnées n'est pas clair :
  c'est une maladresse des auteurs...) ?
* Décrivez précisément (en français ou sous forme mathématique) quel est le signal analysé.

% \exo{}
% \begin{enumerate}
%
%   \item Tracez le signal porte suivant~:
%   \begin{equation*}
%     x(t) =
%     \begin{cases}
%       a     &\text{si $T_1<t<T_2$}, \\
%       a+A   &\text{sinon}.
%     \end{cases}
%   \end{equation*}
%
%   \item Calculez sa transformée de Fourier et représentez-la.
%
%   \item Comment évolue le spectre lorsque les paramètres $a$, $A$, $T_1$ et $T_2$ varient~?
%   En particulier, étudiez les quatre cas suivants~: $a=0$, $a=-A/2$, $T_1=0$ ou $T_1=-T_2$.
%
% \end{enumerate}

% \exo{}

% % Oppenheim 4.26
% Calculez le produit de convolution des signaux $x(t)$ et $h(t)$ en utilisant leur transformée de Fourier.
% \begin{equation*}
%   x(t) = t e^{-2t} \, u(t)
%   \qquad\qquad
%   h(t) = e^{-4t} \, u(t)
% \end{equation*}

% \exo{}
%
% Reliez les signaux temporels aux spectres en amplitude correspondants en justifiant vos choix.
% %   \renewcommand{\fig}[1]{\parbox[m]{25mm}{\psfrag{t}[][]{$t$}\psfrag{f}[][]{$f$}\epsfig{file=figs/#1,width=25mm}}\vspace*{0.2ex}}
% \newcommand{\fig}[1]{\parbox[m]{25mm}{\includegraphics[width=25mm]{#1}}\vspace*{0.2ex}}
% \begin{center}
% \begin{tabular}{ccp{4cm}cc}
%   \parbox{4cm}{\centering signal \\ temporel} & & & & \parbox{4cm}{\centering module de la \\ transformée de Fourier} \\[4ex]
%   \fig{biztps.eps}      & $\bullet$ A &     & 1 $\bullet$ & \fig{gaussienne2.eps} \\
%   \fig{sinus.eps}       & $\bullet$ B &     & 2 $\bullet$ & \fig{bizfrq.eps}      \\
%   \fig{gaussienne.eps}  & $\bullet$ C &     & 3 $\bullet$ & \fig{cosinus.eps}     \\
%   \fig{diracs2.eps}     & $\bullet$ D &     & 4 $\bullet$ & \fig{diracs1.eps}     \\
% \end{tabular}
% \end{center}