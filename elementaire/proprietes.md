# Propriétés des signaux


## Transformation de la variable indépendante

Le signal $x(t)$ dépend de la variable $t$, appelée _variable indépendante_.

* Un changement de signe sur $t$ revient à un retournement de l'axe temporel, donc à une symétrie par rapport à l'origine.
* Un changement d'échelle consiste à multiplier $t$ par une variable $a \in \mathbb{R}^{+*}$.
* Une translation (ou décalage) consiste à ajouter une variable $d\in\mathbb{R}$ à la variable indépendante.

L'animation ci-dessous permet de visualiser ces transformations sur $t$, dans l'exemple d'un signal $x$ tel que

$$
  x(t) =
  \begin{cases}
    t &\text{si}\quad 0 \leq t < 1 \\
    1 &\text{si}\quad 1 \leq t < 2 \\
    0 &\text{sinon}
  \end{cases}
$$

<!-- <div id="dilatation" class="spetsi mathjax_process"></div>
<script src="https://vincmazet.github.io/spetsi/js/spetsi.js" type="text/javascript"></script>
<script src="https://vincmazet.github.io/spetsi/js/dilatation.js" type="text/javascript"></script> -->

[🎬 Changement d'échelle](https://vincmazet.github.io/spetsi/dilatation.html)


<iframe src="https://vincmazet.github.io/spetsi/dilatation.html">
</iframe>


## Périodicité

Un signal $x$ est périodique s'il est constitué d'une infinité de morceaux tous identiques, appelés _périodes_.
Par extension, la période désigne aussi la longueur de cette période.
Un signal non périodique est dit _apériodique_.
Ainsi :
* un signal à temps continu de période $T$ est tel que : $\quad \forall t \quad x(t+T) = x(t)$,
* un signal à temps discret de période $N$ est tel que : $\quad \forall n \quad x[n+N] = x[n]$.

La _fréquence_ d'un signal est l'inverse de sa période.


## Causalité

Un signal $x$ est _causal_ si et seulement s'il est nul pour les temps négatifs :
* pour un signal à temps continu : $\quad \forall t<0 \quad x(t) = 0$,
* pour un signal à temps discret : $\quad \forall n<0 \quad x[n] = 0$.