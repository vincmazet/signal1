# Exercices : représentation vectorielle


## Exercice 1

Représenter les signaux ci-dessous dans $\mathbb{R}^5$ :

$$
\delta[n], \qquad u[n], \qquad \mathrm{rect}\left(\frac{n-2}{3}\right), \qquad \cos\left(\frac{\pi n}{2}\right).
$$


## Exercice 2

On considère les signaux suivants :

$$
\begin{align*}
x &= \begin{bmatrix}  1 &  3 &  5 &  2 & -4 & -4 \end{bmatrix},\\
y &= \begin{bmatrix}  2 & -2 &  2 & -1 &  5 &  5 \end{bmatrix},\\
z &= \begin{bmatrix}  5 & -2 & -1 &  3 &  1 & -1 \end{bmatrix}.
\end{align*}
$$

1. Calculez l'énergie de ces signaux.
1. Quels signaux sont orthogonaux ?


## Exercice 3

Le signal $x = \begin{bmatrix} 4 & -2 & 10 & 7 \end{bmatrix}$ est une version modifiée d'un des deux signaux ci-dessous.
Calculez les distances adéquates pour trouver de quel signal $x$ est le plus proche.

$$
u_1 = \begin{bmatrix}  0 & 0 & 10 & 10 \end{bmatrix},\qquad
u_2 = \begin{bmatrix} 10 & 0 & 10 &  0 \end{bmatrix}.
$$


## Exercice 4

On considère le signal $x = \begin{bmatrix} 3 & 4 & 5 \end{bmatrix}$ de taille $N=3$.

1. Calculez l'énergie de $x$.

1. Les signaux $w_i$ tels que

   $$
   \forall\,i\in\{0,\dots,N-1\}, \qquad
   w_i = \begin{bmatrix}
       \frac{1}{\sqrt{N}} &
       \frac{1}{\sqrt{N}} e^{-j\frac{2\pi}{N}i} &
       \frac{1}{\sqrt{N}} e^{-j\frac{2\pi}{N}2i}
   \end{bmatrix}
   $$

   forment une base orthonormée qu'on appellera $W$.
   Écrivez tous les vecteurs de la base $W$.

1. Déterminez la projection $x'$ de $x$ dans la base $W$ et calculez son énergie. Que remarquez-vous ?