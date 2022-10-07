# Intercorrélation

## Définition

L'intercorrélation de deux signaux $x(t)$ et $y(t)$ est un signal $R_{xy}(\tau)$
qui mesure la ressemblance du signal $x(t+\tau)$ avec $y(t)$.

::::{grid} 1 1 1 1
:gutter: 3

:::{grid-item-card} Signaux à temps continu
$$R_{xy}(\tau) = \int_{-\infty}^{+\infty} x(t+\tau) y(t) dt$$
:::

:::{grid-item-card} Signaux à temps discret
$$R_{xy}[m] = \sum_{n=-\infty}^{+\infty} x[n+m] y[n]$$
:::

::::

Attention, la formule de l'intercorrélation est très proche de celle de la convolution puisque seul un signe change ! Malgré cela, l'intercorrélation et la convolution sont deux outils très différents et dont l'interprétation n'est pas du tout la même.

## Exemples

<div class="example">

    
En communications numériques, il n'est pas rare que le récepteur du sytème de communication reçoive un signal de l'émetteur qui soit très brouillé
(on dit qu'il est _bruité_).
Par exemple, si le récepteur reçoit le signal $x$ représenté {numref}`F:intercorrelation:communications`,
et que ce signal est en réalité une suite d'échelons d'amplitude &minus;1 (représentant le bit 0) ou +1 (représentant le bit 1),
alors l'intercorrélation de $x$ avec un échelon $y$ permet de détecter à chaque instant si le signal reçu ressemble à $y$
(dans ce cas, on a reçu un 1) ou pas (on a reçu un 0).

```{figure} communications.svg
---
width: 100%
name: F:intercorrelation:communications
---
Intercorrélation de $x$ avec $y$. Le signal $x$ véhicule le message 10011010 codé en NRZ avec le motif $y$.
```

</div>

<div class="example">

Un autre exemple d'utilisation de l'intecorrélation est la mesure de la fréquence d'un signal. Si on dispose d'un signal sinusoïdal $x$, mais qu'il est très bruité et que l'on cherche sa fréquence inconnue, alors on peut représenter l'intercorrélation de $x$ avec plusieurs sinusoïdes $y$ dont on connaît la fréquence. La sinusoïde qui permet d'obtenir la plus grande intercorrélation sera la plus ressemblante : on pourra alors en déduire la valeur de la fréquence inconnue. Ce principe est illustré {numref}`F:intercorrelation:sinusoide`.

```{figure} sinusoide.svg
---
name: F:intercorrelation:sinusoide
---
Intercorrélation de $x$ ( une sinusoïde bruitée de fréquence 0,5 Hz) avec un sinusoïde de fréquence variable.
La corrélation la plus forte est obtenue pour une sinusoïde de 0,5 Hz.
```
    
</div>


## Autocorrélation

L'autocorrélation est l'intercorrélation d'un signal avec lui-même.

::::{grid} 1 1 1 1
:gutter: 3

:::{grid-item-card} Signaux à temps continu
$$R_{x}(\tau) = \int_{-\infty}^{+\infty} x(t+\tau) x(t) dt$$
:::

:::{grid-item-card} Signaux à temps discret
$$R_{x}[m] = \sum_{n=-\infty}^{+\infty} x[n+m] x[n]$$
:::

::::

L'autocorrélation possède quelques propriétés remarquables :
* l'autocorrélation est symétrique car $R_{x}(\tau) = R_{x}(-\tau)$
  (pour le vérifier, reprendre la définition en effectuant un changement de variable)
* l'autocorrélation en 0 est la valeur maximale de l'autocorrélation
  (puisque c'est pour un décalage nul $\tau=0$ que le signal se ressemble le plus à lui-même).
  C'est par ailleurs l'énergie du signal :

  $$
    R_{x}(0) = \int_{-\infty}^{+\infty} x(t)^2 dt.
  $$
  
* L'autocorrélation d'un signal périodique de période $T$ est également périodique de période $T$ (puisqu'en décalant le signal de $T$, il ressemble à nouveau avec lui-même)