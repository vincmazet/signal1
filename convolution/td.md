# Exercices sur feuille


(S:convolution:exo:representation)=
## Exercice 1

Représentez les signaux suivants :

$$
\mathrm{rect}(t) * \delta(t),     \qquad
\mathrm{rect}(t) * \delta(t-1),   \qquad
\mathrm{rect}(t) * Ш_2(t).
$$


(S:convolution:exo:calcul)=
## Exercice 2

Calculez le produit de convolution pour les couples de signaux discrets suivants.
Indiquez également quel est l'effet de la convolution sur le signal $x$.

$$
x[n] =
\begin{cases}
  n \quad\text{pour}\, n\in\{0,\dots,5\} \\
  0 \quad\text{ailleurs}
\end{cases}
\quad\text{et}\quad
y[n] =
\begin{cases}
  3 \quad\text{pour}\, n=5 \\
  0 \quad\text{ailleurs}
\end{cases}
$$

$$
x[n] =
\begin{cases}
  1 \quad\text{pour } n=-1 \text{ ou } n=1 \\
  2 \quad\text{pour } n=0 \\
  0 \quad\text{ailleurs}
\end{cases}
\quad\text{et}\quad
y[n] =
\begin{cases}
  -1 \quad\text{pour } n=-1 \\
  1 \quad\text{pour } n=1 \\
  0 \quad\text{ailleurs}
\end{cases}
$$


(S:convolution:exo:xx)=
## Exercice 3

Calculez le produit de convolution $x*x$ où $x(t) = A$ sur $[-T;T]$ et $0$ ailleurs.


(S:convolution:exo:echo)=
## Exercice 4

On peut obtenir un écho dans une grande salle vide, une grotte ou en face d'une montagne,
lorsqu'un son émis (par une personne par exemple) est réfléchi sur plusieurs parois
pour revenir jusqu'à son lieu d'émission.
Ce phénomène peut se représente comme un produit de convolution $y = x*h$.
À quoi correspondent les signaux $y$, $x$ et $h$ ?