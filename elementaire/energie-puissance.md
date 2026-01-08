# Énergie et puissance

Par analogie avec l'énergie et la puissance d'un système physique (moteur électronique, mobile en déplacement...),
on définit l'énergie et la puissance d'un signal.
Dans le cas —&nbsp;très courant&nbsp;— où les amplitudes du signal sont sans unité, alors l'énergie et la puissance sont également sans unité.

## Énergie d'un signal

L'énergie d'un signal $x$ est définie par les formules ci-dessous.

::::{grid} 1 1 1 2

:::{card}
:header: Signal à temps continu
$$E = \int_{-\infty}^{+\infty} |x(t)|^2 \, dt$$
:::

:::{card}
:header: Signal à temps discret
$$E = \sum_{n=-\infty}^{+\infty} |x[n]|^2$$
:::

::::

Ces formules sont équivalentes, heureusement ! L'énergie est en fait l'aire sous la courbe du carré du signal, l'aire sous la courbe étant une intégrale ou une somme. Remarquez également que la notation $\mid\cdot\mid$ correspond au module (le signal pouvant être complexe).

## Puissance d'un signal

La puissance d'un signal $x$ périodique correspond à l'énergie sur une période divisée par la durée de cette période.

::::{grid} 1 1 1 2

:::{card}
:header:Signal à temps continu de période $T$
$$P = \frac{1}{T} \int_T |x(t)|^2 \, dt\,$$
:::

:::{card}
:header:Signal à temps discret de période $N$
$$P = \frac{1}{N}\sum_{n=0}^{N-1} |x[n]|^2$$
:::

::::

Un signal apériodique peut être considéré comme un signal périodique de période infinie.
Ainsi, en faisant tendre la période vers l'infini
dans l'expression de la puissance d'un signal périodique,
on obtient les formules de la puissance d'un signal apériodique :

::::{grid} 1 1 1 2

:::{card}
:header: Signal apériodique à temps continu
$$P = \lim_{T\rightarrow+\infty} \frac{1}{2T} \int_{-T}^{+T} |x(t)|^2 \, dt$$
:::

:::{card}
:header: Signal apériodique à temps discret
$$P = \lim_{N\rightarrow+\infty} \frac{1}{2N+1} \sum_{n=-N}^{+N} |x[n]|^2$$
:::

::::


Les signaux de la vie réelle sont issus d'un système physique réel :
leur amplitude est donc bornée et ils sont mesurés sur une durée finie.
Cela implique que les signaux de la vie réelle sont à énergie finie
(l'aire sous la courbe est finie, donc le carré de l'aire sous la courbe également et l'intégrale converge).
Cela implique également que les signaux de la vie réelle sont à puissance nulle
puisque, d'après la formule de la puissance d'un signal apériodique,
l'intégrale (finie) est divisée par $2T$ qui tend vers l'infini.

<a class="exercise btn btn-light" href="/elementaire/td#exercice-3" role="button">3</a>