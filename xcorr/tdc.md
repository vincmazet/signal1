# 🖍️ Correction


## Exercice 1

Soit $x$ un signal périodique de période $T$.
Vérifions que son autocorrélation est également périodique de période $T$.
On a :

$$
R_x(\tau) = \int x(t+\tau) x(t) dt
\quad\Leftrightarrow\quad
R_x(\tau+T) = \int x(t+\tau+T) x(t) dt
$$

Or puisque $x(t+T) = x(t)$ :

$$
R_x(\tau+T) = \int x(t+\tau) x(t) dt = R_x(\tau).
$$

L'intercorrélation d'un signal périodique de période $T$ est donc également périodique de période $T$.


## Exercice 2

Par définition :

$$
R_x(\tau) = \int x(t+\tau) x(t) dt.
$$

Or, le terme $x(t+\tau) x(t)$ peut être remplacé par une somme de trois termes qui va nous aider
à démontrer que l'autocorrélation est maximale en 0.
En effet : 

$$
\big[x(t) - x(t+\tau) \big]^2 = x(t)^2 - 2x(t)x(t+\tau) + x(t+\tau)^2
$$

et donc : 

$$
x(t)x(t+\tau) = \frac{1}{2}x(t)^2 + \frac{1}{2}x(t+\tau)^2 - \frac{1}{2}\big[x(t) - x(t+\tau) \big]^2.
$$

En remplaçant l'expression de $x(t)x(t+\tau)$ dans l'expression de l'autocorrélation,
puis en développant l'intégrale, on obtient :

$$
R_x(\tau) = \frac{1}{2}\int x(t)^2 dt + \frac{1}{2}\int x(t+\tau)^2 dt
             - \frac{1}{2}\int \big[x(t) - x(t+\tau) \big]^2 dt
$$

Or le deuxième terme est égal au premier : $\int x(t+\tau)^2 dt = \int x(t)^2 dt$,
(il suffit de faire un changement de variable), qui est aussi $R_x(0)$.
Cela implique :

$$
R_x(\tau) = R_x(0) - C \\
$$

où $C = \frac{1}{2}\int \big[x(t) - x(t+\tau) \big]^2 x(t) dt$ est nécessairement positif.

En conclusion, on a toujours $R_x(\tau) \leq R_x(0)$,
ce qui signifie que $R_x(0)$ est bien le maximum de l'autocorrélation.

Cela se comprend aisément puisque l'autocorrélation mesure la ressemblance d'un signal
avec une version décalée de lui-même.
La ressemblance est forcément la plus grande lorsque le décalage est nul.


## Exercice 3



## Exercice 4

$$
R_x(\tau) &= \int x(t+\tau) x(t) dt \\
          &= \int \big[s(t+\tau) + a\,s(t+\tau-d)\big] \big[s(t) + a\,s(t-d)\big] dt \\
          &= \int s(t+\tau) s(t) dt
             + a   \int s(t+\tau) s(t-d)\big] dt
             + a   \int s(t+\tau-d) s(t) dt
             + a^2 \int s(t+\tau-d) s(t-d)\big] dt \\
          &= \int s(t+\tau) s(t) dt
             + a   \int s(u+d+\tau) s(u)\big] du
             + a   \int s(t+\tau-d) s(t) dt
             + a^2 \int s(u+\tau) s(u)\big] du \\
          &= R_s(\tau) dt + a R_s(\tau+d) + a R_s(\tau-d) + a^2 R_s(\tau) \\
          &= (1+a^2) R_s(\tau) dt + a R_s(\tau+d) + a R_s(\tau-d) \\
$$

Comme l'autocorrélation est maximale en 0, alors :
* $R_s(\tau)$ est maximale en $0$ ;
* $R_s(\tau+d)$ est maximale en $-d$ ;
* $R_s(\tau-d)$ est maximale en $+d$.

Donc $R_x(\tau)$ présente des pics en $-d$, $0$ et $d$,
respectivement d'amplitudes $1+a^2$, $a$ et $a$,
ce qui permet de trouver $d$ et $a$ par lecture du graphique de l'autocorrélation.
