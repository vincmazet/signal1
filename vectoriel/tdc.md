# 🖍️ Correction


## Exercice 1


:::{figure} exo1.svg
:width: 100%
:::


## Exercice 2

1. Énergies :
    $$
    \|x\|^2 &= 71,\qquad \|y\|^2 &= 63,\qquad \|z\|^2 &= 41
    $$

2. Produits scalaires :
    $$
      \langle x,y \rangle = -36,\qquad \langle x,z \rangle = 0,\qquad \langle y,z \rangle = 9
    $$
  Les signaux $x$ et $z$ sont orthogonaux car leur produit scalaire est nul.


## Exercice 3

On calcule les distances :
$$
\|x-u_1\| = \sqrt{29}, \qquad
\|x-u_2\| = \sqrt{89}
$$
La distance la plus petite étant entre $x$ et $u_1$, cela signifie que $x$ est le plus proche de $u_1$.


## Exercice 4

1. Énergie de $x$ :
   $$
     \|x\|^2 = 50
   $$

1. Vecteurs de la base $W$ :
   $$
   w_0 &= \begin{bmatrix}   \frac{1}{\sqrt{3}}  &  \frac{1}{\sqrt{3}}                       &  \frac{1}{\sqrt{3}}                       \end{bmatrix},\\
   w_1 &= \begin{bmatrix}   \frac{1}{\sqrt{3}}  &  \frac{1}{\sqrt{3}} e^{-j\frac{2\pi}{3}}  &  \frac{1}{\sqrt{3}} e^{-j\frac{4\pi}{3}}  \end{bmatrix},\\
   w_2 &= \begin{bmatrix}   \frac{1}{\sqrt{3}}  &  \frac{1}{\sqrt{3}} e^{-j\frac{4\pi}{3}}  &  \frac{1}{\sqrt{3}} e^{-j\frac{8\pi}{3}}  \end{bmatrix}.
   $$

1. La projection $x'$ de $x$ consiste à déterminer les échantillons du signal $x'$ en calculant le produit scalaire entre $x$ et chaque signal de la base.
   $$
    x'[0] &= \langle x,w_0 \rangle = 4 \sqrt{3},\\
    x'[1] &= \langle x,w_1 \rangle = \frac{1}{\sqrt{3}} \left(  3 + 4 e^{j\frac{2\pi}{3}} + 5 e^{-j\frac{4\pi}{3}}  \right),\\
    x'[2] &= \langle x,w_2 \rangle = \frac{1}{\sqrt{3}} \left(  3 + 4 e^{j\frac{4\pi}{3}} + 5 e^{-j\frac{8\pi}{3}}  \right).
   $$

   Le calcul de l'énergie de $x'$ donne $\|x'\|^2 = 50$ : il y a donc conservation de l'énergie lors de la projection d'un signal dans une base orthonormée.