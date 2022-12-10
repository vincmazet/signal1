# TP : numérisation

## Repliement spectral

En musique, la note _la_ correspond à une sinusoïde de fréquence 440 Hz.

* Représentez la note _la_ sur 100 ms en réglant le pas de temps pour obtenir une courbe qui soit jolie.
  Quelle fréquence d'échantillonnage correspond au pas de temps choisi ?
  Affichez la TFD du signal : y a-t-il repliement spectral ?

* Représentez la note _la_ sur 100 ms avec une fréquence d'échantillonnage de 1000 Hz.
  Affichez la TFD du signal : y a-t-il repliement spectral ?

* Représentez la note _la_ sur 100 ms avec une fréquence d'échantillonnage de 700 Hz.
  Affichez la TFD du signal : y a-t-il repliement spectral ?
  Quelle est la conséquence sur le signal sonore numérisé ?
  
## Représentation temps-fréquence

<!-- Le fichier bigben.wav est un enregistrement d'une partie de la sonnerie de Big Ben. -->
Le fichier <a href="../_static/gamme.wav">gamme.wav</a> est un enregistrement d'une gamme musicale au piano.
Nous allons chercher quelles sont les notes jouées.

* Chargez et affichez le signal.

* Vérifiez sur la TFD qu'il n'est pas facile de trouver la partition musicale correspondante.

Afficher une représentation temps-fréquence du signal permet de retrouver très simplement la partition musicale.
Ainsi, la fonction `matplotlib.pyplot.specgram` permet d'afficher le spectrogramme d'un signal.

* Affichez le spectrogramme du signal en conservant les paramètres par défaut.

* Étudiez l'influence des paramètres principaux de la fonction `matplotlib.pyplot.specgram` pour comprendre leur signification.

* Déterminez alors les notes jouées à partir de leur fréquence.

## Interpolation

Le fichier <a href="../_static/8820Hz.csv">8820Hz.csv</a> contient un signal échantillonné à 8 820 Hz.

* Affichez ce signal, noté $x$, en mettant en évidence les échantillons
  (par exemple avec la commande `plot(t,x,'-*')`).

* Générez et affichez la transformée de Fourier discrète (TFD) de $x$ en centrant l'axe des fréquences.

On souhaite augmenter la fréquence d'échantillonnage de $x$ d'un facteur cinq,
ce qui implique d'ajouter quatre échantillons entre chaque échantillons existants.
Il faut donc effectuer une _interpolation_ du signal,
c'est-à-dire calculer de nouveaux échantillons à l'intérieur du signal.

<!-- 
% La technique de \textit{zero-filling} est utilisée dans un premier temps.
%
%   \item Ajoutez quatre échantillons nuls entre les échantillons de $x$ pour obtenir un nouveau signal $y$
%   de fréquence d'échantillonnage 44\,100~Hz.
%   Vous pouvez utiliser les instructions suivantes~:
%       y = zeros(5*N,1);   % Création d'un signal nul
%       y(1:5:end) = x;     % un échantillon sur 5 est affecté à la valeur du signal x à interpoler
%   Le signal n'est pas encore interpolé, mais sa fréquence d'échantillonnage a été multipliée par cinq.
%
%   \item Une première méthode d'interpolation est d'utiliser un bloqueur d'ordre zéro.
%   Elle consiste à faire suivre chaque échantillon du signal $x$ par quatre échantillons identiques.
%   Autrement dit, cela revient à convoluer $x_0$ par $h = \big[1\;1\;1\;1\;1\big]$.
-->

La technique de « _zero-padding_ fréquentiel » consiste à ajouter des zéros de part et d'autre du spectre de Fourier
pour obtenir un spectre, et donc un signal temporel, contenant cinq fois plus d'échantillons.

* En notant $X$ la TFD du signal $x$ et $N$ son nombre d'échantillons,
  ajoutez $M$ zéros de part et d'autre de la TFD de manière à créer un vecteur $Y$ cinq fois plus long que $X$ :
  ```
  Y = np.concatenate([np.zeros(M), X, np.zeros(M)])
  ```

* Affichez la TFD $Y$ (après avoir redéfini son axe des fréquences).

* Affichez le signal interpolé, issu de la TFD inverse de $Y$,
  et comparez-le au signal original $x$ (après avoir défini son axe des temps).
  
  <!-- Fenêtrage -->
%
% On considère le signal $x$ échantillonné à une fréquence $f_e=10~\text{kHz}$
% et défini comme la somme de trois sinusoïdes de fréquences et d'amplitudes suivantes~:
% \begin{gather*}
%   A_1 = 1,    \qquad f_1 = 600~\text{Hz}, \\
%   A_2 = 1,    \qquad f_2 = 607~\text{Hz}, \\
%   A_3 = 0,05, \qquad f_3 = 650~\text{Hz}.
% \end{gather*}
% \begin{questions}
%
%   \item Tracez ce signal sur 10~s.
%
%   \item Y a-t-il du repliement spectral~?
%
%   \item Tracez la TFD de ce signal et vérifiez que les trois sinusoïdes sont bien présentes.
%
% \end{questions}
%
% \medskip
%
% En pratique malheureusement, il n'est pas toujours évident d'observer un signal sur une durée suffisamment longue.
% Dans la suite, on suppose que le signal n'est observé que sur une durée de 0,1~s~:
% cela revient à considérer le signal mesuré $y$ comme la multiplication
% entre le signal idéal $x$ et une fenêtre rectangulaire $r[n]$ de 0,1~s~:
% \begin{equation*}
%   y_R[n] = x[n] \times r[n].
% \end{equation*}
% Le fenêtrage consiste à multiplier le signal temporel par une fonction dite d'\og{}apodisation\fg{}.
% % afin de faire ressortir les raies dans le spectre.
% %Nous nous limiterons ici aux fenêtres rectangulaire et de Hamming.
%
% \begin{questions}
%
%   \item Le spectre de $x[n]$ observé sur 0,1~s correspond-il toujours au spectre théorique attendu~?
%
% \end{questions}
%
% \medskip
%
% On peut également utiliser une fenêtre de Hamming et obtenir alors un deuxième signal~:
% \begin{equation*}
%   y_H[n] = x[n] \times w[n]
% \end{equation*}
% où $w$ est la fenêtre de Hamming définie par ($N$ est le nombre de points des signaux)~:
% \begin{equation*}
%   w[n] = 0,54 - 0,46 \cos\left(\frac{2\pi n}{N}\right).
% \end{equation*}
%
% \begin{questions}
%
%   \item Tracez les signaux $y_R$ et $y_H$ obtenus à l'aide des deux fenêtres.
%
%   \item Afin de comparer les deux fenêtrages,
%   tracez les fenêtres rectangulaire et de Hamming ainsi que leur TFD respective sur $10N$ points
%   pour une meilleure résolution spectrale
%   (la fonction \syntax{fft} permet de définir le nombre de points de la TFD).
%   Quelles différences faites-vous entre les deux spectres~?
%
%   \item Tracez ensuite les TFD de $y_R$ et $y_H$ calculées sur $10N$ points.
%   Que constatez-vous~? Expliquez le résultat.
%   On rappelle que la multiplication de deux signaux dans le domaine temporel
%   revient à effectuer une convolution entre leurs transformées de Fourier dans le domaine fréquentiel.
%
% \end{questions}
% % Ainsi, la multiplication du signal $x$ par une fenêtre revient, dans le domaine fréquentiel, à une convolution entre sa transformée de Fourier et le spectre de la fenêtre.