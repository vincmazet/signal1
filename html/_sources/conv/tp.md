(C:conv:tp)=
# TP : produit de convolution

Pour chacun des couples de signaux suivants, représentez $x$, $y$ et le produit de convolution $x*y$.
Attention à spécifier l'argument `mode="same"` dans la fonction `numpy.convolve`.

* Représentez sur l'intervalle $n \in \{-10,\dots,10\}$ les signaux $x$ et $y$, et le produit de convolution $x*y$ :

  $$
    x[n] = \sin(2\pi n/10)
    \quad\text{et}\quad
    y[n] =
    \begin{cases}
      3 \quad\text{si}\quad n=5 \\
      0 \quad\text{sinon}
    \end{cases}
   $$

* Représentez sur l'intervalle $n \in \{-10,\dots,10\}$ les signaux $x$ et $y$, et le produit de convolution $x*y$ :

$$
    x[n] =
    \begin{cases}
      1 \quad\text{si}\quad n\in\{-1,1\} \\
      2 \quad\text{si}\quad n=0 \\
      0 \quad\text{sinon}
    \end{cases}
    \quad\text{et}\quad
    y[n] =
    \begin{cases}
      -1 \quad\text{si}\quad n=-1 \\
      1 \quad\text{si}\quad n=1 \\
      0 \quad\text{sinon}
    \end{cases}
 $$

* Représentez le signal $x$ <a href="../_static/AEP-2005.csv">AEP-2005.csv</a>
  qui correspond à la consommation électrique de l'est des États-Unis, heure par heure sur un an.
  Représentez également le signal $y$ défini ci-dessous, ainsi que le produit de convolution $x*y$.

  $$
    y[n] =
    \begin{cases}
      1/D \quad\text{si}\quad n\in\{0,\dots,D-1\} \\
      0 \quad\text{sinon}
    \end{cases}
  $$
  
  où $D=24 \times 7$ correspond au nombre d'heures dans une semaine.
  
<!-- commentaire de 2019-2020 : l'utilisation de "same" et d'un axe temporel comme il faut est toujours un problème. Peut être faut-il y aller franco et leur demander "full", sans axe dans un premier temps. Peut être aussi rajouter dans la correc une illustration avec le résultat de full et same superposés, et différents axes des temps. -->

<a class="btn btn-light" href="../xcorr/tp.html" role="button">Suite du TP</a>