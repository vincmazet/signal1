# Représentation temps-fréquence

Les transformations de Fourier font ressortir le contenu fréquentiel
mais elles ne permettent pas facilement de localiser temporellement certains évènements qui surviennent dans le signal,
comme des changements brusques ou des modifications de fréquence.

La {numref}`F:temps-frequence:deux-sinus` représente deux signaux et leur spectres respectifs.
Ces deux signaux ont en commun le fait qu'ils sont constitués de deux sinusoïdes de fréquence 50 Hz et 200 Hz,
la différence étant l'ordre d'apparition des sinusoïdes.
À partir des spectres seuls, il n'est pas possible de comprendre clairement ce que sont les signaux temporels :
d'après le module, on comprend que les signaux temporels sont constitués de deux sinusoïdes de 50 Hz et 200 Hz,
mais la phase n'est pas interprétable.

```{glue:figure} G:temps-frequence:deux-sinus
:name: "F:temps-frequence:deux-sinus"

Spectres de deux signaux constitués de sinusoïdes de fréquence 50 Hz et 200 Hz.
```

Pour répondre à la difficulté d'analyser les localisations temporelles des fréquences, d'autres outils ont été développés.

## Transformée de Fourier à court terme

La transformée de Fourier à court terme (STFT : _short-time Fourier transform_)
est une transformée de Fourier restreinte à une portion du signal délimitée par une fenêtre $w(t)$
qu'on fait glisser le long de l'axe temporel :

$$
X(f,\tau) = \int_{-\infty}^{+\infty} x(t) w(t-\tau) e^{-j2\pi f t} dt
$$

Il s'agit simplement de la formule de la transformée de Fourier dans laquelle a été introduite la fenêtre,
qui est positionnée en $\tau$.
La transformée de Fourier à court terme est donc un signal à deux dimensions
qui dépend d'un temps $\tau$ et d'une fréquence $f$, d'où le nom de « représentation temps-fréquence ».
L'objectif de cette transformée étant l'analyse dans le domaine temps-fréquence, et non la reconstruction du signal temporel, 
la transformée inverse n'a pas d'utilité.

Lorsqu'on représente une transformée de Fourier à court terme, on utilise uniquement son module,
et plus précisément le carré du module $|X(f,\tau)|^2$ qui est appelé « spectrogramme » de $x(t)$.
Le spectrogramme fournit une indication sur la quantité d'énergie présente dans le signal
autour de la fréquence $f$ et de l'instant $\tau$.
Les figures représentent les spectrogrammes de quelques signaux.

````{tabbed} Sinus à 50 et 200 Hz
```{glue:figure} G:temps-frequence:sin50200
:figwidth: 800px
```
````

````{tabbed} Sinus à 200 et 50 Hz
```{glue:figure} G:temps-frequence:sin20050
:figwidth: 800px
```
````

````{tabbed} Gaussienne modulée
```{glue:figure} G:temps-frequence:gaussienne
:figwidth: 800px
```
````

````{tabbed} Chirp
```{glue:figure} G:temps-frequence:chirp
:figwidth: 800px
```
````

````{tabbed} Hello
```{glue:figure} G:temps-frequence:hello
:figwidth: 800px
```
````

````{tabbed} Coin coin coin
```{glue:figure} G:temps-frequence:duck
:figwidth: 800px
```
````

```{margin}
Certains artistes s'amusent également avec cette transformée, comme Aphex Twin sur [_Formula_](https://youtu.be/M9xMuPWAZW8?t=305).
```

La représentation en spectrogramme est également intéressante en musique.
Voyez par exemple le résultat sur
[_La Lettre à Élise_](https://www.youtube.com/watch?v=S2XkCfvGPXE) de Ludwig van Beethoven
ou la [_Symphonie du Nouveau Monde_](https://youtu.be/Txp-pHU2K6w?t=652) de Antonín Dvořák.

En traitement du signal, une fenêtre est un signal de durée limitée.
Par conséquent, la majeure partie de l'énergie de la fenêtre $w(t)$ est contenue dans un intervalle temporel.
De même, l'énergie de la fenêtre est également contenue dans un intervalle fréquentiel.
Ces deux intervalles définissent une zone délimitée dans le plan temps-fréquence.
L'idéal serait d'avoir une zone très localisée pour avoir une bonne résolution, à la fois temporelle et fréquentielle.
Or, il est impossible d'avoir une très bonne localisation à la fois en temps et en fréquence,
c'est-à-dire une zone qui se réduit à un point.
Ce phénomène est le principe d'incertitude de Gabor-Heisenberg.
C'est d'ailleurs ce qui explique la propriété de changement d'échelle des transformations de Fourier :
la contraction dans un domaine implique une dilatation dans l'autre domaine.
Les fenêtres qui conduisent à la meilleur location temps-fréquence sont des gaussiennes :
on parle alors d'analyse de Gabor.

La tranformée de Fourier à court terme a l'avantage d'être très simple.
En revanche, elle considère implicitement le signal stationnaire dans la fenêtre d'observation
(c'est-à-dire que durant la durée de la fenêtre, le signal n'est pas censé présenter de grands changements).
Elle s'applique donc aux signaux qui sont lentement stationnaires,
par exemple dans le domaine biomédical, en géophysique ou en traitement de la parole.

Il existe d'autres représentations temps-fréquence, comme la transformée en ondelettes
(utilisée par exemple dans le format de compression JPEG 2000).

```{figure} _static/figs/temps-frequence.png
---
width: 600px
name: F:temps-frequence:temps-frequence
---
Découpage du plan temps-fréquence pour quatre représentations d'un signal.
```

