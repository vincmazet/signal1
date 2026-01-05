# Produit de convolution

## Définition

Le produit de convolution est une opération mathématique entre deux signaux qui calcule un troisième signal. Il est noté $*$. Il décrit l'effet que produit un instrument de mesure ou un système sur une mesure, caractérisé par sa _réponse impulsionnelle_ $h$.

```{figure} _static/figs/convolution.svg
---
width: 60%
name: F:convolution:intro
---
Illustration de l'intérêt du produit de convolution.
```

Le produit de convolution entre deux signaux $x$ et $h$ produit un troisième signal $y$ défini par :

* en temps continu : $\quad\displaystyle y(t) = (x*h)(t) = \int_{-\infty}^{+\infty} x(\tau) h(t-\tau) d\tau$
* en temps discret : $\quad\displaystyle y[n] = (x*h)[n] = \sum_{m=-\infty}^{+\infty} x[m] h[n-m]$

## Exemples

L'animation ci-dessous illustre l'effet du produit de convolution entre les signaux <font color="#0060A9">$x$</font> et <font color="#BE1600">$h$</font>.
La première opération effectuée lors du calcul d'une convolution est le renversement et le décalage temporel d'un des deux signaux (ici nous avons choisi de renverser $h(t)$). La valeur du décalage $t$ est modifiable à l'aide de la souris (ou du doigt).
Ensuite, les signaux <font color="#0060A9">$x(\tau)$</font> et <font color="#BE1600">$h(t-\tau)$</font> sont multipliés entre eux et l'aire obtenue (représentée par la <font color="#5AE063">surface verte</font> sur le quatrième graphe) correspond à <font color="#00A90B">$y(t)$</font>. En faisant glisser $t$, on obtient le signal <font color="#00A90B">$y(t)$</font> en entier.

<script src="_static/js/conv1c.js"></script>
<div id='conv1c' class='spetsi'></div>

% Dans cette deuxième animation (ci-dessous), vous pouvez dessiner les signaux à temps discret $x$ et $h$ pour visualiser le résultat sur $y$.
% <div id='convolution' class='spetsi'></div>

<div class="example">

La {numref}`figure {number} <F:convolution:suspension>` représente les signaux $x$, $h$ et $y$ dans le cas d'une simulation réaliste : le système de suspension d'un véhicule. Si $x$ représente le profil de la route (ici, avec deux bosses) et que $h$ est le signal qui caractérise le système de suspension, alors le véhicule va osciller suivant le signal $y$. Dans ce cas, les passagers vont être pas mal secoués, un peu comme dans une [2CV](https://youtu.be/MwaoX7Rb7Ag)...

```{glue:figure} G:convolution:suspension
:name: "F:convolution:suspension"

Simulation d'une suspension (désagréable) de véhicule.
```

</div>

<div class="example">

En physique, un spectre représente la quantité de lumière émise ou transmise par un objet. Il est mesuré par un spectromètre. Or, un spectromètre n'est jamais parfait, comme tous les instruments de mesure. Malgré la qualité de sa conception, il reste toujours un peu de « flou ». Ce principe est représent {numref}`F:convolution:spectre` : $x$ est le spectre réel de l'objet, tel qu'on voudrait le voir, mais à cause du flou introduit par le spectromètre (signal $h$), l'observation n'est pas aussi précise (signal $y$). En particulier sur cet exemple, la première raie, très petite, n'est plus visible.

```{glue:figure} G:convolution:spectre
:name: "F:convolution:spectre"

Simulation d'un spectre de lumière observé avec un spectromètre.
```

</div>

<div class="example">

Le produit de convolution, modélise également l'effet du filtrage d'un signal, comme on le verra en deuxième année. Dans l'exemple représenté {numref}`F:convolution:son`, un effet sonore est appliqué sur le signal audio $x$ par l'intermédiaire du filtre $h$ (qui est appelé passe-bas), et cela résulte en le signal $y$.

```{glue:figure} G:convolution:son
:name: "F:convolution:son"

Simulation d'un spectre de lumière observé avec un spectromètre.
```