# Représentation temps-fréquence

<!-- chirp = gazouilli -->

Les transformations de Fourier font ressortir le contenu fréquentiel d'un signal
mais elles ne permettent pas facilement de localiser temporellement certains évènements qui surviennent dans le signal,
comme des changements brusques ou des modifications de fréquence.

<div class="example">
    
La {numref}`F:temps-frequence:deux-sinus` représente deux signaux et leurs spectres respectifs.
Ces deux signaux ont en commun le fait qu'ils sont constitués de deux sinusoïdes de fréquence 50 Hz et 200 Hz,
la différence étant l'ordre d'apparition des sinusoïdes.
À partir des spectres seuls, il n'est pas possible de comprendre clairement ce que sont les signaux temporels :
d'après le module, on comprend que les signaux temporels sont constitués de deux sinusoïdes de 50 Hz et 200 Hz,
mais la phase n'est pas interprétable :
on ne connaît pas l'ordre dans lequel arrivent les deux sinusoïdes.

```{figure} deux-sinus.svg
---
name: F:temps-frequence:deux-sinus
---
Spectres de deux signaux constitués de sinusoïdes de fréquence 50 Hz et 200 Hz.
```

</div>

Pour répondre à la difficulté d'analyser les localisations temporelles des fréquences,
des outils de « temps-fréquence » ont été développés,
le plus simple étant la transformée de Fourier à court terme.


## Transformée de Fourier à court terme

```{margin}
Une fenêtre est un signal limité dans le temps qui est utilisé en le multipliant par un signal quelconque, de façon à en sélectionner une partie.
```

La transformée de Fourier à court terme (STFT : _short-time Fourier transform_)
est une transformée de Fourier restreinte à une portion du signal délimitée par une fenêtre $w$
qu'on fait glisser le long de l'axe temporel.
Dans le cas de signaux discrets, la STFT est :

<!-- $$X(f,\tau) = \int_{-\infty}^{+\infty} x(t) w(t-\tau) e^{-j2\pi f t} dt$$ -->

$$
X[k,p] = \sum_{n=0}^{N-1} x[n] w[n-p] e^{-j2\pi kn/N}
$$

Il s'agit donc de la formule de la transformée de Fourier discrète dans laquelle a été introduite la fenêtre positionnée en $p$.
La STFT est donc un signal à deux dimensions qui dépend d'un temps $p$ et d'une fréquence $k$, d'où le nom de « représentation temps-fréquence ».
L'objectif de cette transformée étant l'analyse dans le domaine temps-fréquence, et non la reconstruction du signal temporel, 
la transformée inverse n'a pas d'utilité.

Le résultat de la STFT dépend forcément de la fenêtre choisie.
En particulier, la durée de la fenêtre et les décalages $p$ considérés ont une influence importante sur le résultat.
<!-- ce serait bien de l'illustrer -->

Lorsqu'on représente une STFT, on utilise uniquement son module,
et plus précisément le carré du module $|X[k,p]|^2$ qui est appelé « spectrogramme » de $x$.
Le spectrogramme fournit une indication sur la quantité d'énergie présente dans le signal
autour de la fréquence $k$ et de l'instant $p$.
Les figures ci-après représentent les spectrogrammes de quelques signaux.

`````{tab-set}

````{tab-item} Sinus à 50 et 200 Hz
```{figure} tf-sin50200.svg
---
width: 800px
```
L'ordre dans lequel apparaissent les deux sinusoïdes est clairement visible sur le spectrogramme.
````

````{tab-item} Sinus à 200 et 50 Hz
```{figure} tf-sin20050.svg
---
width: 800px
```
L'ordre dans lequel apparaissent les deux sinusoïdes est clairement visible sur le spectrogramme.
````

````{tab-item} Gaussienne modulée
```{figure} tf-gaussienne.svg
---
width: 800px
```
L'instant d'apparition de l'oscillation, ainsi que sa fréquence, sont clairement visibles sur le spectrogramme.
````

````{tab-item} Chirp
```{figure} tf-chirp.svg
---
width: 800px
```
Un « chirp » est une sinusoïde dont la fréquence évolue en fonction du temps.
Dans la nature, le chant des oiseaux, les vocalises des cétacés ou les ultrasons émis par les chauve-souris ressemblent à des chirps.
Les chirps sont également émis par les sonars et les radars.
````

````{tab-item} Voyelles
```{figure} tf-aeiou.svg
---
width: 800px
```
Ce graphique représente l'enregistrement des voyelles françaises : elles sont facilement différentiables sur la représentation temps-fréquence.
````

````{tab-item} Voyelle « i » dite par un homme et une femme
```{figure} tf-homme-femme.svg
---
width: 800px
```
Une homme et une femme disent la voyelle « i » l'un après l'autre.
Qui parle en premier ?
````

````{tab-item} Lettre à Élise
```{figure} tf-elise.svg
---
width: 800px
```
Les notes de musique sont bien visibles sur la représentation temps-fréquence.
Certains artistes s'amusent également avec cette transformée, comme Aphex Twin sur [_Formula_](https://youtu.be/M9xMuPWAZW8?t=305).
````

`````


<!-- La représentation en spectrogramme est également intéressante en musique.
Voyez par exemple le résultat sur
[_La Lettre à Élise_](https://www.youtube.com/watch?v=S2XkCfvGPXE) de Ludwig van Beethoven
ou la [_Symphonie du Nouveau Monde_](https://youtu.be/Txp-pHU2K6w?t=652) de Antonín Dvořák.
 -->


## Résolution du plan temps-fréquence

La STFT partage le plan temps-fréquence en zones égales, définissant ainsi la résolution de la représentation.
À titre de comparaison, la représentation temporelle d'un signal est très résolue en temps mais pas du tout en fréquence,
alors que c'est l'inverse pour la représentation fréquentielle.

```{figure} temps-frequence.svg
---
width: 700 px
name: F:temps-frequence
---
Découpage du plan temps-fréquence pour quatre représentations d'un signal.
```

L'idéal serait d'avoir une représentation temps-fréquence très résolue à la fois en temps et en fréquence.
Mais ce n'est pas possible.

On peut expliquer cela par le fait que la fenêtre $w$ et de durée limitée et que son énergie est contenue dans un intervalle fréquentiel.
Ces deux intervalles représentent une zone délimitée dans le plan temps-fréquence et définissent la résolution de la représentation temps-fréquence.
Or, il est impossible d'avoir une zone qui se réduise à un point
pour avoir une très bonne localisation à la fois en temps et en fréquence.

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

Il existe d'autres représentations temps-fréquence, comme la transformée en ondelettes.
Avec cette transformée, la résolution en temps et en fréquence varie en fonction de la fréquence
(figure {numref}`F:temps-frequence`).

<!-- (d'après un exemple de PFlandrin) principe d'incertitude : pour observer une fréquence (oscillation), il faut le faire sur un axe suffisamment long. De même, pour mesurer la vitesse d'un objet, il vaut mieux chornométrer en deux emplacements éloignés (bonne estimation de la vitesse, mais pas de la position : à quelle endroit exactement y a-t-il cette vitesse ?). Si les deux emplacements sont très proches (bonne estimation de la position), mais mauvaise estimation de la vitesse
 -->