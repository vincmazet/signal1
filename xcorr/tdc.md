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

Cet exercice est très similaire à l'[](S:convolution:exo:xx) du produit de convolution.

Comme $x$ est à support limité (il est nul en dehors de $\{-N,\dots,N\}$),
et égal à 1 dans l'intervalle,
alors sont autocorrélation s'écrit :

$$
R_{x}[m] = \sum_{n=-\infty}^{+\infty} x[n+m] x[n] = \sum_{n=-N}^{N} x[n+m]
$$

où

$$
x[n+m] =
\begin{cases}
  1 \quad&\text{si } n \in \{-N-m,\dots,N-m\} \\
  0 \quad&\text{sinon}. \\
\end{cases}
$$

Donc le signal à sommer est non nul dans $\{-N-m,\dots,N-m\}$ mais la somme se fait uniquement sur $\{-N,\dots,N\}$.
Donc le résultat dépend de la valeur de $m$.

* si $m>2N \Leftrightarrow N-m < -N$, alors $x[n+m]$ est toujours nul entre les bornes de la somme et donc $R_x[m]=0$.

* si $0 < m \leq 2N$, alors $-N \leq N-m < N$.
  Les termes de la somme qui ne sont pas nul sont donc ceux compris entre $-N$ et $N-m$ ; les termes suivants de $N-m+1$ à $N$ sont nuls.
  Donc :
  $$
  R_{x}[m] = \sum_{n=-N}^{N-m} x[n+m] = \sum_{n=-N}^{N-m} 1 = 2N-m+1.
  $$

* si $-2N \leq m \leq 0$, alors $-N \leq -N-m \leq N$.
  Les termes de la somme qui ne sont pas nul sont donc ceux compris entre $-N-m$ et $N$ ; les termes précédents de $-N$ à $-N-m-1$ sont nuls.
  Donc :
  $$
  R_{x}[m] = \sum_{n=-N-m}^{N} x[n+m] = \sum_{n=-N-m}^{N} 1 = 2N+m+1.
  $$

* si $m<-2N \Leftrightarrow -N-m > N$, alors $x[n+m]$ est toujours nul entre les bornes de la somme et donc $R_x[m]=0$.

Finalement, l'autocorrélation est un signal triangle :

$$
R_{x}[m] =
\begin{cases}
   0      \quad&\text{si } m>2N, \\
   2N-m+1 \quad&\text{si } 0 < m \leq 2N, \\
   2N+m+1 \quad&\text{si } -2N \leq m \leq 0, \\
   0      \quad&\text{si } m<-2N.
\end{cases}
$$


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
