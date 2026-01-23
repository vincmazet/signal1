# 🖍️ Correction


## Exercice 1

```{figure} tdc-11.svg
---
width: 600px
```

```{figure} tdc-12.svg
---
width: 600px
```

```{figure} tdc-13.svg
---
width: 600px
```


## Exercice 2

1. La convolution par $y$ produit un décalage et une amplification du signal $x$ :

$$
(x*y)[n] =
\begin{cases}
  3(n-5) \quad\text{si }\, n\in\{5,\dots,10\} \\
  0 \quad\text{sinon}
\end{cases}
$$

2. La convolution par $y$ retourne un signal qui est la somme de deux signaux $x$ décalés et amplifiés :

$$
(x*y)[n] =
\begin{cases}
  1 \quad\text{si  } n=0 \text{ ou } n=2 \\
  2 \quad\text{si } n=1 \\
  0 \quad\text{sinon}
\end{cases}
$$


## Exercice 3

On veut calculer :

$$
  (x*x)(t) = \int x(\tau) x(t-\tau) \, d\tau 
$$

avec

$$
  x(t-\tau) = \begin{cases}
                A &\text{si $t-\tau\in[-T,T] \Leftrightarrow \tau\in[-T+t,T+t]$} \\
                0 &\text{sinon}
              \end{cases}
$$

Ainsi, suivant la valeur de $t$, les intervalles $[-T,T]$ et $[-T+t,T+t]$ auront ou non des parties communes :

* si $T+t<-T$, alors lorsque $x(\tau)$ est non nul, donc pour $\tau\in[-T,T]$, $x(t-\tau)$ est nul car $\tau>-T>T+t$,
  et donc le produit $x(\tau)x(t-\tau)$ est nul.

* si $-T<T+t<T$ (c'est-à-dire pour $-2T<t<0$), alors le produit $x(\tau)x(t-\tau)$ est égal à $A^2$ si $\tau\in[-T,T+t]$ et donc :
  
  $$
    \int_{-\infty}^{+\infty} x(\tau)x(t-\tau) \, d\tau = \int_{-T}^{T+t} A^2 \, d\tau = A^2 (2T+t)
  $$

* si $-T<-T+t<T$ (c'est-à-dire pour $0<t<2T$), alors le produit $x(\tau)x(t-\tau)$ est égal à $A^2$ si $\tau\in[-T+t,T]$ et donc :
  
  $$
    \int_{-\infty}^{+\infty} x(\tau)x(t-\tau) \, d\tau = \int_{-T+t}^{T} A^2 \, d\tau = A^2 (2T-t)
  $$

* de même que pour le premier cas, si $-T+t>T$ alors pour tout $\tau$ le produit $x(\tau)x(t-\tau)$ est nul.
  
Le résultat est donc :

$$
  (x*x)(t) =
  \begin{cases}
    A^2(2T+t)   \quad\text{si $-2T<t<0$} \\
    A^2(2T-t)   \quad\text{si $0<t<2T$} \\
    0           \quad\text{sinon}
  \end{cases} \\
$$

```{figure} tdc-3.svg
---
width: 600px
---
Résultat de la convolution $x*x$ pour $A=2$ et $T=5$.
```


## Exercice 4

Le signal $x$ est le son émis et le signal $y$ le son entendu.
Le signal $x$ est convolué par $h$ tel que :

$$
h(t) = \sum_{k=0}^{K} a_k \delta(t-\tau_k)
$$

où $K$ est le nombre d'échos, $a_k$ est l'ampllitude de chaque écho et $\tau_k$ est le retard que subit chaque écho.