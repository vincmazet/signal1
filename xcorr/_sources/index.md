# Introduction

Ce manuel est le support du cours de Traitement du signal de la formation ESN
à [Télécom Physique Strasbourg](http://www.telecom-physique.fr/).
Il correspond au cours de première année,
le cours de deuxième année est accessible dans un [autre manuel](https://vincmazet.github.io/signal2/).

Nous commencons par définir ce qu'est un signal,
puis par donner quelques exemples de signaux élémentaires
et des propriétés générales sur les signaux.
Nous présenterons ensuite un outil indispensable : le produit de convolution.
L'intercorrélation, qui permet de détecter des motifs particuliers dans les signaux
sera également discutée.
Puis, nous expliquerons comment les signaux peuvent être considérés comme des vecteurs
dans un espace de dimension adaptée.
La partie la plus importante de ce cours concernera l'analyse de Fourier,
et nous évoquerons notamment la représentation temps–fréquence.
Enfin, nous terminerons par les conséquences et les conditions nécessaires
à la numérisation d'un signal analogique.

<!-- Mindmap ? -->

Ce cours est accompagné d'exercices théoriques (à faire sur feuille)
et pratiques (programmation en Python).
Python est un langage de programmation libre qui est utilisé dans de nombreux domaines
(traitement des données, web...).
Une aide sur l'installation de Python et son utilisation est disponible sur la page {ref}`C:python`.

Ce manuel est accessible depuis n'importe quel terminal connecté,
mais il peut être téléchargé et imprimé en cliquant sur l'icône
&nbsp;<i class="fas fa-download"></i>&nbsp; en haut de la page, qui permet de générer un PDF.

Ce cours est accompagné d'une [page Moodle](https://moodle.unistra.fr/course/view.php?id=5505)
(accessible uniquement pour mes étudiants).