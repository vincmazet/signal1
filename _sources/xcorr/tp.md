(C:xcorr:tp)=
# TP : intercorrélation

L'objectif est, comme dans l'exemple {numref}`F:intercorrelation:communications`, de détecter un signal particulier (un « motif ») dans un signal perturbé par de forts parasites (on parle de « bruit »).

Dans cet exercice, les signaux sont de taille $N=100$ échantillons.

* Créez le motif $m$ comme une porte non nulle entre 0 et 9 :

  $$
    \forall n\in\{0,\dots,N-1\},\qquad
    m[n] =
    \begin{cases}
      1 &\text{si } n \in \{0,\dots,9\} \\
      0 &\text{sinon}
    \end{cases}
  $$

* Créez un signal $x$ avec une porte située en $k$ (en choisissant vous-même une valeur positive pour $k$) :

  $$
    \forall n\in\{0,\dots,N-1\},\qquad
    x[n] =
    \begin{cases}
      1 &\text{si } n \in \{k,\dots,k+9\} \\
      0 &\text{sinon}
    \end{cases}
  $$

* Représentez l'intercorrélation $R_{xm}$ entre $x$ et $m$.
  Que se passe-t-il lorsque $k$ varie ?

* Chargez le fichier <a href="../_static/message1.csv">message1.csv</a> et affichez le signal correspondant.
  Ce signal est un message codant un message binaire de 10 bits,
  où les 0 sont codés par une porte d'amplitude négative et les 1 par une porte d'amplitude positive.
  Représentez l'intercorrélation entre ce signal et le motif pour en déduire le message codé.
  
* Même question pour le fichier <a href="../_static/message2.csv">message2.csv</a>.

<a class="btn btn-light" href="../vect/tp.html" role="button">Suite du TP</a>