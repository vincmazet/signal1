# Énergie et puissance

Par analogie avec l'énergie et la puissance d'un système physique (moteur électronique, mobile en déplacement...),
on définit l'énergie et la puissance d'un signal.
Dans le cas —&nbsp;très courant&nbsp;— où les amplitudes du signal sont sans unité, alors l'énergie et la puissance sont également sans unité.

## Énergie d'un signal

L'énergie d'un signal $x$ est définie par :
* pour un signal à temps continu : $\quad\displaystyle E = \int_{-\infty}^{+\infty} |x(t)|^2 \, dt$
* pour un signal à temps discret : $\quad\displaystyle E = \sum_{n=-\infty}^{+\infty} |x[n]|^2$

Ces formules sont équivalentes, heureusement ! L'énergie est en fait l'aire sous la courbe du carré du signal, l'aire sous la courbe étant une intégrale ou une somme. Remarquez également que la notation $\mid\cdot\mid$ correspond au module (le signal pouvant être complexe).

## Puissance d'un signal

La puissance d'un signal $x$ **périodique** est définie par :
* pour un signal à temps continu de période $T$ :  $\quad\displaystyle P = \frac{1}{T} \int_T |x(t)|^2 \, dt$
* pour un signal à temps discret de période $N$ :  $\quad\displaystyle P = \frac{1}{N}\sum_{n=0}^{N} |x[n]|^2$

Dans le cas d'un signal périodique, la puissance est donc l'énergie sur une période divisée par la durée de cette période.

Dans le cas d'un signal **apériodique**, la puissance est définie par :
* pour un signal apériodique à temps continu : $\quad\displaystyle P = \lim_{T\rightarrow+\infty} \frac{1}{2T} \int_{-T}^{+T} |x(t)|^2 \, dt$
* pour un signal apériodique à temps discret : $\quad\displaystyle P = \lim_{N\rightarrow+\infty} \frac{1}{2N+1} \sum_{n=-N}^{+N} |x[n]|^2$

On peut en fait supposer qu'un signal apériodique est un signal périodique de période infinie. En reprenant les formules de la puissance d'un signal périodique, et en faisant tendre cette période vers l'infini, on obtient les formules de la puissance d'un signal apériodique.