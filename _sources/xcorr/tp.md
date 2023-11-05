(C:xcorr:tp)=
# Exercices sur machine

:::{margin}
L'énoncé de ce TP provient d'un projet ingénieur réalisé par Pierre Misiuk et Mathieu Schwoerer (FIP ESN, promo 2024).
:::

L'objectif de cet exercice est de mesurer la vitesse du son dans l'air en utilisant l'intercorrélation.


## Préambule

La mesure de la vitesse du son est une expérience qui remonte à plusieurs siècles.
Dès le XVII<sup>e</sup> siècle, des scientifiques comme Isaac Newton et Robert Boyle ont commencé à étudier les propriétés acoustiques du son.
En 1660, le physicien et astronome irlandais Robert Boyle a réalisé l'une des premières expériences de mesure de la vitesse du son
en plaçant des spectateurs à des distances variables d'un canon.
En observant la différence de temps entre l'impact visuel et sonore de la détonation, Boyle a pu estimer la vitesse du son à environ 332 m/s. 

Au XVIII<sup>e</sup> siècle, le scientifique français Pierre-Simon Laplace a proposé une méthode pour mesurer la vitesse du son en utilisant des réflexions sonores.
Cette technique a été perfectionnée par d'autres scientifiques, notamment Ernst Chladni et Charles Wheatstone,
qui ont utilisé des plaques de verre et des tuyaux résonateurs.

Au XIX<sup>e</sup> siècle, le physicien allemand Ernst Mach a utilisé des tambours tournants pour mesurer la vitesse du son dans différents gaz,
tandis que le scientifique britannique Lord Rayleigh a étudié la propagation du son dans l'air et l'eau.

Aujourd'hui, la mesure de la vitesse du son est effectuée à l'aide de technologies modernes, telles que des microphones, des ordinateurs et des capteurs de pression.
Cette mesure est utilisée dans de nombreux domaines, notamment l'aéronautique, l'acoustique architecturale et la médecine.

## Matériel nécessaire

Pour réaliser ce TP, vous avez besoin du matériel suivant :
- un haut-parleur 🔈 ;
- deux microphones 🎤 ;
- une règle 📏 ;
- un ordinateur avec Python ;
- le module [sound.py](https://) à enregistrer dans le dossier contenant votre notebook.

Réalisez ensuite les branchements suivants (cf. {numref}`F:xcorr:maquette`) :
- haut-parleur branché sur la sortie enceinte de l'ordinateur ;
- microphones branchés sur l'adaptateur (cela permet d'aiguiller le son du premier microphone sur le canal gauche et le son du second microphone sur le canal droit) ;
- adaptateur branché sur l'entrée microphone de l'ordinateur.

:::{figure} maquette.png
:width: 600px
:name: F:xcorr:maquette

Maquette du TP.
:::

## Mesure de la vitesse du son

* En plaçant les deux microphones à une distance différente du haut-parleur,
  le son produit par celui-ci sera capté à des instants différents par les deux microphones.
  Comment obtenir alors une mesure de la vitesse du son ?
* Quel outil vu en cours permet de déduire le décalage temporel entre les deux sons acquis par les microphones ?
* Effectuer une acquisition à l'aide de la fonction `sound.play_and_record`.
  L'aide de la fonction est accessible avec l'instruction `help(sound.play_and_record)`.
* Comment peut-on effectuer la mesure du son sans utiliser le haut-parleur ?
<!-- * Comment peut-on minimiser les bruits captés par les microphones ? -->