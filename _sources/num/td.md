# Exercices : numérisation


## Exercice 1

* Montrez que le train d'impulsions $x^*$ défini par
  
  $$
  x^*(t) =
  \begin{cases}
  x(t) &\text{si}\ t\ \text{est multiple de}\ T_e \\
  0    &\text{sinon},
  \end{cases}
  $$
  
  où $x$ est un signal analogique, s'écrit comme le produit d'un signal avec un train d'impulsions $Ш$ dont la période est à déterminer.
  
* Montrez que $x^*$ a pour transformée de Fourier
  
  $$
  X^*(f) = \sum_k X(f-kf_e).
  $$
  
  La transformée de Fourier de $Ш_T(t)$ est $Ш_{1/T}(f)$.
  

## Exercice 2

Rappelez les relations entre fréquence d'échantillonnage, période d'échantillonnage et fréquence de Nyquist.


## Exercice 3

Proposez une fréquence d'échantillonnage pour effectuer un enregistrement numérique d'un électrocardiogramme.

% À eux de trouver ce qu'est un électrocardiogramme
% Un coeur bat à environ 1 ou 2 battements par seconde, soit 1 ou 2 Hz
% Donc la fréq d'échantillonnage serait 4 Hz
% Mais il faut beaucoup plus car :
%       1. ce n'est qu'une valeur théorique
%       2. un ECG n'est pas une sinusoïde mais un signal plus compliqué, avec beaucoup plus de fréquences


## Exercice 4
<!-- Source : Prandoni, exo 9.6 -->

Une sinusoïde $x(t)$ de fréquence 10 kHz est échantillonnée à une fréquence de 8 kHz.
Quel sera le signal analogique reconstruit à partir du signal numérique ?


## Exercice 5

Pour étudier l'effet du repliement spectral, on applique la chaîne de traitement ci-dessous à un signal sinusoïdal :
le signal $x(t) = \cos(2\pi f_0 t)$ est échantillonné à une fréquence $f_e=1/T_e$ pour obtenir le signal $y(t)$,
puis filtré par un filtre passe-bas idéal de fréquence de coupure $f_c = f_e/2$ pour obtenir le signal $z(t)$.

```{figure} aliasing.png
---
width: 300px
```

Dans un premier temps, on prend $f_0=2$ kHz et $f_e=6$ kHz.

* Représentez les modules des spectres de $x(t)$, $y(t)$ et $z(t)$.

* Comparez le signal $z(t)$ avec $x(t)$.
  Y a-t-il du repliement spectral ?

* Mêmes questions avec $f_e = 3$ kHz.


## Exercice 6

Le signal $x(t) = A \sin(2 \pi f t + \varphi)$ avec $A=3$, $f=2$ Hz et $\varphi=\pi/5$
est quantifié sur 8 bits avec un quantifieur uniforme par arrondi.
Quel valeur du pas de quantification doit-on choisir pour obtenir la meilleure résolution sans saturation ?


## Exercice 7

Sur un CD audio, le signal sonore est quantifié sur 16 bits.

* Déterminez le nombre de niveaux de quantification.

* En supposant le signal sonore comme une sinusoïde d'amplitude $A$, quelle est la valeur maximale de l'erreur ?

* Comparez la puissance de l'erreur à la puissance du signal.

<!-- => 2^16 = 65536 niveaux 
Supposons l'amplitude max (crête à crête) de 2A :
xmax-xmin=2A => q=2A/2^16 = 1 15 10^-6 = q A2

Valeur max de lerreur : q/2 = 7,6 10^{-6} A2
Puissance de 'erreur : q^2/12 = 1,5 10^{-11} A^2 4
Puissance du'ne sinusoïde 'amplitude 2A :

$$
Px = \frac{A}{T}\int_T [A\sin(2\pi f t)\ dt
=\frac{} 1^2 \int \frac{1-\cos(4\pi ft)}{2} dt
= A^2/2T \int 1 dt - A^2/2T \int_T \©os(4\pi f t) dt
= A^2/2 - 0 = A^2/2
$$

différence importante ! -->


## Exercice 8

Un signal analogique de bande passante 20 kHz est numérisé sur 16 bits.
Combien de bits par seconde au minimum doit traiter le convertisseur analogique-numérique ?
En déduire la capacité de stockage d'un CD audio de 60 minutes, sachant que le son y est enregistré en stéréo.

% Correction :
% Th. échantillonnage : bande passante de 20 kHz donf fe (minimale) = 40 000 Hz
% Quantification : RSB = 95 donc comme 1 bit fait gagner 6 dB, il faut 16 bits de quantification (=> RSB de 96 dB)
% Résultat : 40 000 x 16 = 640 000 bits/s au minimum
% Pour un CD, la stéréo impose deux fois plus de bits : 1,280 Mbits/s, soit pour 1h de son : 1,280 x 3600 = 4,608 Mbits
% En divisant par 8, on obtient 576 Mo.
% En réalité, l'échantillonnage sur un CD est effectué à 44 100 Hz, ce qui aboutit à 635,04 Mo


## Exercice 9

<!-- Source : cours de C. Doignon -->

Un convertisseur numérique-analogique 5 bits produit des tensions positives (commençant à 0 mV).
Une entrée égale à 1 0 1 0 0 (bit de poids fort à gauche) correspond à une tension de 100 mV.

* Calculez le pas de quantification (résolution) du convertisseur.
* Calculez la tension maximale (pleine échelle) du convertisseur.
* Quelle tension correspond à une entrée égale à 1 1 1 0 1 ?

<!-- Correction :
  On a              & 0\,0\,0\,0\,0 & $0$  & $0$~mV \\
  et                & 1\,0\,1\,0\,0 & $20$ & $100$~mV. \\
  Donc              & 0\,0\,0\,0\,1 & $1$  & $100/20$ = $5$~mV. \\
  Par conséquent    & 1\,1\,1\,0\,1 & $29$ & $29 \times 5$ = $145$~mV \\
  et                & 1\,1\,1\,1\,1 & $31$ & $31 \times 5$ = $155$~mV. \\ -->