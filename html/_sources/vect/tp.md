(C:vect:tp)=
# TP : décomposition dans la base de Haar

* Créez un signal $x$ de taille $N=16$.
  Vous pouvez par exemple générer un signal contenant des valeurs aléatoires (`numpy.random.random`).

* Créez puis représentez les $N$ signaux de la base de Haar avec la fonction `haar`
  disponible dans le fichier <a href="../_static/haar.py">haar.py</a>.

* Décomposez le signal $x$ dans la base de Haar pour obtenir ses $N$ coefficients $\alpha_k$ ($k\in\{0,\dots,N-1\}$).

* Reconstruisez le signal $x$ à partir de ses coefficients $\alpha_k$ et vérifiez que vous retrouvez bien le signal initial.

La suite de l'exercice a pour objectif d'illustrer l'intérêt de représenter un signal dans une base spécifique afin d'effectuer une compression de données sans trop perdre en qualité.
Pour un taux de compression égal à 50 %, la moitié des valeurs de $x$ sont perdues et considérées nulles.

* Supprimez les $N/2$ derniers échantillons du signal $x$ pour obtenir un premier signal compressé $x_1$.
  Vous pouvez vous inspirer du code ci-dessous.
  
  ```
  import numpy as np

  # Nombre d'échantillons
  N = 10

  # Signal à traiter
  x = np.arange(N)

  # Copie du vecteur
  x1 = x.copy()

  # Annule les N/2 derniers échantillons
  x1[int(N/2):] = 0
  ```
  
* Une autre façon de compresser le signal $x$ est de supprimer les plus petits coefficients $\alpha_k$ de sa décomposition de Haar.
  Aussi, après avoir calculé ces coefficients, supprimez la moitié des coefficients les plus faibles puis reconstruisez-le signal qu'on appellera $x_2$.

* Calculez les EQM entre les signaux compressés $x_1$ ou $x_2$ et le signal initial $x$.
  Qu'en concluez-vous ?