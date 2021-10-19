# Intercorrélation

## Définition

L'intercorrélation de deux signaux $x(t)$ et $y(t)$ est un signal $R_{xy}(\tau)$ qui mesure la ressemblance du signal $x$ décalé de $\tau$ $x(t+\tau)$ avec $y(t)$. Elle est définie par :

* en temps continu : $\quad\displaystyle R_{xy}(\tau) = \int_{-\infty}^{+\infty} x(t+\tau) y(t) dt$
* en temps discret : $\quad\displaystyle R_{xy}[m] = \sum_{n=-\infty}^{+\infty} x[n+m] y[n]$

Attention, la formule de l'intercorrélation est très proche de celle de la convolution puisque seul un signe change ! Malgré cela, l'intercorrélation et la convolution sont deux outils très différents et dont l'interprétation n'est pas du tout la même.

## Exemples

<div class="example">

    
En communications numériques, il n'est pas rare que le récepteur du sytème de communication reçoive un signal de l'émetteur qui soit très brouillé (on dit qu'il est _bruité_). Par exemple, si le récepteur reçoit le signal $x$ représenté {numref}`F:intercorrelation:communications`, et qu'il sait qu'il devrait être une suite d'échelon d'amplitude &minus;1 (représentant le bit 0) ou +1 (représentant le bit 1), alors l'intercorrélation de $x$ avec un échelon $y$ permet de détecter à chaque instant si le signal reçu ressemble à $y$ (dans ce cas, on a reçu un 1) ou pas (on a reçu un 0).

```{glue:figure} G:intercorrelation:communications
:name: "F:intercorrelation:communications"

Intercorrélation de $x$ avec $y$. Le signal $x$ véhicule le message 10011010 codé en NRZ avec le motif y.
```

</div>

<div class="example">

Un autre exemple d'utilisation de l'intecorrélation est la mesure de la fréquence d'un signal. Si on dispose d'un signal sinusoïdal $x$, mais qu'il est très bruité et que l'on cherche sa fréquence inconnue, alors on peut représenter l'intercorrélation de $x$ avec plusieurs sinusoïdes $y$ dont on connaît la fréquence. La sinusoïde qui permet d'obtenir la plus grande intercorrélation sera la plus ressemblante : on pourra alors en déduire la valeur de la fréquence inconnue. Ce principe est illustré {numref}`F:intercorrelation:sinusoide`.

```{glue:figure} G:intercorrelation:sinusoide
:name: "F:intercorrelation:sinusoide"

Intercorrélation de $x$ avec $y$. Le signal $x$ est une sinusoïde bruitée de fréquence 0,5 Hz.
```
    
</div>


## Autocorrélation

L'autocorrélation est l'intercorrélation d'un signal avec lui-même :

* en temps continu : $\quad\displaystyle R_{x}(\tau) = \int_{-\infty}^{+\infty} x(t+\tau) x(t) dt$
* en temps discret : $\quad\displaystyle R_{x}[m] = \sum_{n=-\infty}^{+\infty} x[n+m] x[n]$

L'autocorrélation possède quelques propriétés remarquables :
* l'autocorrélation est symétrique car $R_{x}(\tau) = R_{x}(-\tau)$ (reprendre la définition en effectuant un changement de variable)
* l'autocorrélation en 0 est la valeur maximale de l'autocorrélation (puisque c'est pour un décalage nul $T=0$ que le signal se ressemble le plus à lui-même. C'est par ailleurs l'énergie du signal :

  $$
    R_{x}(0) = \int_{-\infty}^{+\infty} x(t)^2 dt
  $$
  
* L'autocorrélation d'un signal périodique de période $T$ est également périodique de période $T$ (puisqu'en décalant le signal de $T$, il ressemble à nouveau avec lui-même)