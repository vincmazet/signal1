# TP : notions élémentaires

En plus d'appliquer les notions essentielles du traitement du signal,
ce TP est également une initiation à la programmation scientifique en Python.

## Représentation de signaux

Pour représenter la sinusoïde de fréquence $f=0,3$ Hz

$$
  w(t) = \sin(2\pi f t),
$$

on peut utiliser le code ci-dessous :

* (Re)copier le code ci-avant dans votre notebook pour vérifier que le signal s'affiche de la même manière.

* Modifier le code pour représentez le signal sinusoïdal
  
  $$
    x(t) = A \sin(2\pi f t + \varphi)
  $$
  
  sur 1 seconde et avec $A=2$, $f=5$ Hz et $\varphi=\pi/3$.
  
  Choisissez en particulier un pas de temps correct pour obtenir une courbe lisse.
  
* Représentez la sinusoïde amortie
  
  $$
    y(t) = A e^{-at} \sin(2 \pi f t)
  $$
  
  entre 0 et 10 s avec $A=2$, $a=0,5$ et $f = 2$ Hz.

  %Utilisez `numpy.multiply` pour effectuer la multiplication des deux signaux (l'exponentielle et le sinus).
  Étudiez l'influence des paramètres sur la forme du signal.
  
* Représentez le signal porte
  
  $$
    z[n] = A\,\mathrm{rect}\left(\frac{n-m}{N}\right)
  $$
  
  avec $A = 3$, $m = 4$ et $N = 5$.

  Comme le signal est à temps discret, vous pouvez utiliser la syntaxe `plt.plot(...,".")` pour afficher les points individuellement sans les relier.
  
* Le fichier [hello.wav](https://vincmazet.github.io/signal1/_static/files/hello.wav) contient un signal sonore sous forme d'une matrice dont la première colonne correspond aux échantillons temporels et les deux colonnes suivantes aux canaux gauche et droite. Affichez le signal sonore issu du canal gauche.