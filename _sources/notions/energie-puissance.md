# Énergie et puissance

Par analogie avec l'énergie et la puissance d'un système physique (moteur électronique, mobile en déplacement...),
on définit l'énergie et la puissance d'un signal.
Dans le cas —&nbsp;très courant&nbsp;— où les amplitudes du signal sont sans unité, alors l'énergie et la puissance sont également sans unité.

## Énergie d'un signal

L'énergie d'un signal $x$ est définie par les formules ci-dessous.

```{panels}
:column: col-lg-6 col-md-12 col-sm-12 col-xs-12 p-2

Signal à temps continu
^^^
$$E = \int_{-\infty}^{+\infty} |x(t)|^2 \, dt$$

---

Signal à temps discret
^^^
$$E = \sum_{n=-\infty}^{+\infty} |x[n]|^2$$

```

Ces formules sont équivalentes, heureusement ! L'énergie est en fait l'aire sous la courbe du carré du signal, l'aire sous la courbe étant une intégrale ou une somme. Remarquez également que la notation $\mid\cdot\mid$ correspond au module (le signal pouvant être complexe).

## Puissance d'un signal

La puissance d'un signal $x$ périodique correspond à l'énergie sur une période divisée par la durée de cette période.

```{panels}
:column: col-lg-6 col-md-12 col-sm-12 col-xs-12 p-2

Signal à temps continu de période $T$
^^^
$$P = \frac{1}{T} \int_T |x(t)|^2 \, dt$$

---

Signal à temps discret de période $N$
^^^
$$P = \frac{1}{N}\sum_{n=0}^{N} |x[n]|^2$$

```

Pour déterminer la puissance d'un signal apériodique, on considère qu'il s'agit d'un signal périodique de période infinie.
En reprenant les formules de la puissance d'un signal périodique, et en faisant tendre cette période vers l'infini,
on obtient les formules de la puissance d'un signal apériodique.

```{panels}
:column: col-lg-6 col-md-12 col-sm-12 col-xs-12 p-2

Signal apériodique à temps continu
^^^
$$P = \lim_{T\rightarrow+\infty} \frac{1}{2T} \int_{-T}^{+T} |x(t)|^2 \, dt$$

---

Signal apériodique à temps discret
^^^
$$P = \lim_{N\rightarrow+\infty} \frac{1}{2N+1} \sum_{n=-N}^{+N} |x[n]|^2$$

```