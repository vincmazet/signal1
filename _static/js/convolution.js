/*
    PRODUIT DE CONVOLUTION DISCRET UNIDIMENSIONNEL

    Version du 30/09/2016

    Copyright Vincent Mazet (vincent.mazet@unistra.fr) et Frank Schorr, 2015-2016.

    Les programmes Javascript fournis par l'intermédiaire de ces pages
    proposent des illustrations et des animations pédagogiques pour le
    traitement du signal, les communications numériques, etc.

    Ces programmes sont régis par la licence CeCILL-B soumise au droit français
    et respectant les principes de diffusion des logiciels libres. Vous pouvez
    utiliser, modifier et/ou redistribuer ce programme sous les conditions de
    a licence CeCILL-B telle que diffusée par le CEA, le CNRS et l'INRIA sur le
    site www.cecill.info.

    En contrepartie de l'accessibilité au code source et des droits de copie, de
    modification et de redistribution accordés par cette licence, il n'est
    offert aux utilisateurs qu'une garantie limitée. Pour les mêmes raisons,
     seule une responsabilité restreinte pèse sur l'auteur du programme, le
     titulaire des droits patrimoniaux et les concédants successifs.

    À cet égard, l'attention de l'utilisateur est attirée sur les risques
    associés au chargement, à l'utilisation, à la modification et/ou au
    développement et à la reproduction du logiciel par l'utilisateur étant donné
    sa spécificité de logiciel libre, qui peut le rendre complexe à manipuler et
    qui le réserve donc à des développeurs et des professionnels avertis
    possédant des connaissances informatiques approfondies. Les utilisateurs
    sont donc invités à charger et tester l'adéquation du logiciel à leurs
    besoins dans des conditions permettant d'assurer la sécurité de leurs
    systèmes et ou de leurs données et, plus généralement, à l'utiliser et
    l'exploiter dans les mêmes conditions de sécurité.

    Le fait que vous puissiez accéder à cet en-tête signifie que vous avez pris
    connaissance de la licence CeCILL-B, et que vous en avez accepté les termes.
*/


// Objets
var div, gxb, ghb, gyb, gxf, ghf, gyf, selx, selh, lblconv, lblequal;

// Paramètres
var gw = 230;           // Côté d'un graphe
var gs = 50;            // Séparation entre graphes

// Signaux pré-enregistrés
var signals = ['Signal nul', 'Kronecker', 'Porte', 'Gaussienne', 'Exponentielle décroissante', 'Rampe', 'Personnalisé'];
var N = 17;                         // Nombre total de points dans les signaux (valeur impaires)
var gmax = (N-1)/2;                 // Valeur max des ordonnées
var idperso = signals.length - 1;   // Dernier élément

// Abscisses
var i
var n = range(-(N-1)/2, (N-1)/2);
var x = Array(N), h = Array(N), y = Array(N);

// Initialisation
function init()
{
    // Initialisation du div
    div = inidiv('convolution', 3*gw+2*gs, gw+70);

    // Signes
    lblconv = Label(div, '\\(*\\)', 258, 130, 'cm', color[0]);
    lblconv.style.fontSize = '250%';
    lblequal = Label(div, '\\(=\\)', 532, 130, 'cm', color[0]);
    lblequal.style.fontSize = '250%';

    // Listes de choix
    selx = Select(div, 0,     gw+40, gw, signals, signalX);
    selh = Select(div, gw+gs, gw+40, gw, signals, signalY);

    // Graphes d'arrière-plan
    gxb = Graph(div, 0,         30, gw, gw); gxb.xlim = [-gmax, gmax]; gxb.ylim = [-gmax, gmax]; gxb.grid(1, 1, color[2]);
    ghb = Graph(div, gw+gs,     30, gw, gw); ghb.xlim = [-gmax, gmax]; ghb.ylim = [-gmax, gmax]; ghb.grid(1, 1, color[2]);
    gyb = Graph(div, 2*(gw+gs), 30, gw, gw); gyb.xlim = [-gmax, gmax]; gyb.ylim = [-gmax, gmax]; gyb.grid(1, 1, color[2]);

    // Graphes d'avant-plan
    gxf = Graph(div, 0,         30, gw, gw); gxf.xlim = [-gmax, gmax]; gxf.ylim = [-gmax, gmax];
    ghf = Graph(div, gw+gs,     30, gw, gw); ghf.xlim = [-gmax, gmax]; ghf.ylim = [-gmax, gmax];
    gyf = Graph(div, 2*(gw+gs), 30, gw, gw); gyf.xlim = [-gmax, gmax]; gyf.ylim = [-gmax, gmax];

    // Évènements sur les graphes
    gxf.mouseDrag(moveX);
    ghf.mouseDrag(moveH);

    // Etiquettes
    Label(div, '\\(x[n]\\)', 125, 0, 'ct', color[0]);
    Label(div, '\\(h[n]\\)', 405, 0, 'ct', color[0]);
    Label(div, '\\(y[n]\\)', 685, 0, 'ct', color[0]);

    // Affiche les signaux
    signalX();
    signalY();
    draw();
}

// Déplacement de la souris sur le graphe X
function moveX(xx, yy)
{
    selx.options[idperso].selected = 'true';
    xx = Math.round(xx);
    yy = Math.round(yy);
    x[xx+(N-1)/2] = yy;
    gxf.clear();
    gxf.stem(n,x);
    draw();
}

// Déplacement de la souris sur le Y
function moveH(xx, yy)
{
    selh.options[idperso].selected = 'true';
    xx = Math.round(xx);
    yy = Math.round(yy);
    h[xx+(N-1)/2] = yy;
    ghf.clear();
    ghf.stem(n,h);
    draw();
}

// Changement dans la sélection de x
function signalX()
{
    x = initsignal(selx.value);
    gxf.clear();
    gxf.stem(n,x);
    draw();
}

// Changement dans la sélection de y
function signalY()
{
    h = initsignal(selh.value);
    ghf.clear();
    ghf.stem(n,h);
    draw();
}

function draw()
{
    // Produit de convolution
    y = conv(x, h);

    // Affichage
    gyf.clear();
    gyf.stem(n,y);

//    // Valeur max du signal et axe des ordonnées
//    var i, yn, ymax = 0;
//    for (i=0; i<N; i++)
//    {
//        yn = Math.max(Math.abs(y[i]));
//        ymax = Math.max(yn, ymax);
//    }
//    ymax = Math.ceil(1.1 * ymax);
//    ymax = Math.max(ymax,8);
//
//    // Etiquette des ordonnées
//    lbl3.innerHTML = '\\(' + ymax + '\\)';
//    MathJax.Hub.Queue(['Typeset',MathJax.Hub,lbl3]);// TODO : apparemment c'est ce qui est lent sous FF+Ubuntu
//
//    // Graphe du résultat
//    gy.ylim = [-ymax, ymax];
//    gy.clear();
//    gy.strokeStyle = clrgrid;
//    gy.grid(1, Math.round(ymax/8));
//    gy.strokeStyle = clraxes;
//    gy.axes();
}

// Renvoie un vecteur correspondant au signal donné en entrée
function initsignal(s)
{
    var i, x = [];
    switch (s)
    {
        case signals[0]: // Signal nul
            for(i=0; i<N; i++)
                x[i] = 0;
            break;

        case signals[1]: // Kronecker
            for(i=0; i<N; i++)
                x[i] = ( n[i]==0 ? 1 : 0 );
            break;

        case signals[2]: // Porte
            for(i=0; i<N; i++)
                x[i] = ( Math.abs(n[i])<N/4-1 ? 1 : 0 );
            break;

        case signals[3]: // Gaussienne
            for(i=0; i<N; i++)
                x[i] = (N-1)/4 * Math.exp(- n[i]*n[i]/4 );
            break;

        case signals[4]: // Exponentielle décroissante
            for(i=0; i<N; i++)
                x[i] = ( n[i]<0 ? 0 : (N-1)/4 * Math.exp(-n[i]) );
            break;

        case signals[5]: // Rampe
            for(i=0; i<N; i++)
                x[i] = n[i];
            break;

        case signals[6]: // Personnalisé
            break;
    }
    return x;
}

window.onload = function (){ init(); };
