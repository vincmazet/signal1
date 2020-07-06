/*
    PRODUIT DE CONVOLUTION UNIDIMENSIONNEL

    Version du 18/09/2017

    Copyright Vincent Mazet (vincent.mazet@unistra.fr), 2015-2017.

    Les programmes Javascript fournis par l'intermédiaire de ces pages
    proposent des illustrations et des animations pédagogiques de traitement
    du signal.

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
var div, g = [], g1, g2, g3, btnclear;

// Paramètres
var xmax = 5;       // Valeurs extrême des abscisses
var A = 1;          // Amplitude de x(t)
var a = 1.5;        // Demi-durée de x(t)
var B = 1;          // Amplitude de y(t)
var b = 1;          // Demi-durée de y(t)
var d = -4;         // Actuel décalage (en point)
var dpx, odpx;      // Actuel et ancien décalages (en pixel)

// Taille des graphiques
var gw = 350;       // Largeur d'un graphe
var gh = 80;        // Hauteur d'un graphe
var gs = 15;        // Espacement entre les graphes

// Abscisse pour le signal z(t) (résultat de la convolution)
var t = new Array(gw), z = new Array(gw);
for( i = 0 ; i < gw+1 ; i++ )
    t[i] = i / gw * 2 * xmax - xmax;

// Initialisation
function init()
{
    // Initialisation du div
    div = inidiv('conv1c', gw, 5*(gh+gs)+30);

    // Graphes statiques
    for (i=0; i<5; i++)
    {
      g[i] = Graph(div, 0, i*(gh+gs), gw, gh);
      g[i].xlim = [-xmax, xmax];
      g[i].ylim = [-0.1, 1.5];
      g[i].axes(color[2]);
      g[i].box(color[2]);
      Label(div, i==4 ? '\\(t\\)' : '\\(\\tau\\)', i==4 ? gw+18 : gw+38, i*(gh+gs)+gh+14, 'br', color[2] );
    }

    // Etiquettes des signaux
    Label(div, '\\(x(\\tau)\\)',           gw/2+2,  0           , 'tl', color[3] );
    Label(div, '\\(h(\\tau)\\)',           gw/2+2,     gh+gs    , 'tl', color[4] );
    Label(div, '\\(x(\\tau)\\)',           gw/2+2,  2*(gh+gs)   , 'tl', color[3] );
    Label(div, '\\(h(t-\\tau)\\)',         gw/2+40, 2*(gh+gs)   , 'tl', color[4] );
    Label(div, '\\(x(\\tau)h(t-\\tau)\\)', gw/2+2,  3*(gh+gs)   , 'tl', color[5] );
    Label(div, '\\(y(t)\\)',               gw/2+2,  4*(gh+gs)   , 'tl', color[5] );

    // Bouton d'effacement
    btnclear = Button(div, 'Effacer', gw/2-50, 5*(gh+gs), 100, 30, 'Effacer les graphes',
                      function() {odpx = undefined; z = []; draw();});

    // Graphe h(t-tau)
    g1 = new Graph(div, 0, 2*(gh+gs), gw, gh);
    g1.xlim = [-xmax, xmax];
    g1.ylim = [-0.1, 1.5];
    g1.lineWidth = 2;
    g1.strokeStyle = color[4];

    // Graphe x(tau)h(t-tau)
    g2 = new Graph(div, 0, 3*(gh+gs), gw, gh);
    g2.xlim = [-xmax, xmax];
    g2.ylim = [-0.1, 1.5];
    g2.lineWidth = 2;
    g2.strokeStyle = color[5];
    g2.fillStyle = '#5AE063';

    // Graphe y(t)
    g3 = new Graph(div, 0, 4*(gh+gs), gw, gh);
    g3.xlim = [-xmax, xmax];
    g3.ylim = [-0.1, 1.5];
    g3.lineWidth = 2;
    g3.fillStyle = color[5];
    g3.strokeStyle = color[5];
    console.log('yyy');

    // Déplacements avec la souris
    g[0].mouseDrag(deplacement);
    g[1].mouseDrag(deplacement);
    g1.mouseDrag(deplacement);
    g1.mouseMove(levecrayon);
    g2.mouseDrag(deplacement);
    g2.mouseMove(levecrayon);
    g3.mouseDrag(deplacement);
    g3.mouseMove(levecrayon);

    // Signal x
    g[0].lineWidth = 2;
    g[0].strokeStyle = color[3];
    g[0].plot([-xmax, -a, -a, a, a, xmax], [0, 0, A, A, 0, 0]);

    // Signal h
    g[1].lineWidth = 2;
    g[1].strokeStyle = color[4];
    g[1].plot([-xmax, -b, b, b, xmax], [0, 0, B, 0, 0]);

    // Signal x
    g[2].lineWidth = 2;
    g[2].strokeStyle = color[3];
    g[2].plot([-xmax, -a, -a, a, a, xmax], [0, 0, A, A, 0, 0]);

    // Dessin
    draw();
}

// Déplacement de la souris sur le graphe
function levecrayon(x, tmp)
{
    odpx = undefined;
}

// Déplacement de la souris sur le graphe
function deplacement(x, tmp)
{
    // Calcule les valeurs du signal y
    // Les valeurs comprises entre k1 et k2 sont calculées. k1 et k2 sont les
    // coordonnées correspondantes à l'ancienne position de la souris et
    // l'actuelle. Cela permet de prévenir le fait que la navigateur "saute"
    // certains points.

    d = x;
    var p = g1.pt2px([d, 0]);
    dpx = Math.round(p[0]);
    odpx = odpx || dpx;
    
    // Détermine la plage de calcul
    var k1 = Math.min( dpx, odpx );
    var k2 = Math.max( dpx, odpx );
    
    // Calcule les valeurs du signal
    for (var k=k1; k<=k2; k++)
    {
        p = g1.px2pt([k, 0]);
        myd = k / gw * 2 * xmax - xmax;
        if      (myd+b < -a)
            z[k] = 0;
        else if (myd-b < -a)
            z[k] = A*B/4/b * Math.pow(myd+a+b,2);
        else if (myd+b < a)
            z[k] = A*B*b;
        else if (myd-b < a)
            z[k] = -A*B/4/b * Math.pow(myd-a+b,2) + A*B*b;
        else if (myd-b > a)
            z[k] = 0;
    }
    
    odpx = dpx;
    draw();
}

function draw()
{
    // Signal x(tau)h(t-tau) (seulement les 4 points de l'aire)
    var xa = []; ya = [];
    if      (d+b < -a)
    {
        xa = [-xmax, xmax];//        xa = [NaN, NaN, NaN, NaN];
        ya = [0, 0]; //        ya = [NaN, NaN, NaN, NaN];
    }
    else if (d-b < -a)
    {
        xa = [-xmax, -a, -a, b+d, b+d, xmax];//        xa = [ -a, -a, b+d, b+d ];
        ya = [0, 0, B*b/2*(b+a+d), 0, 0, 0]; //        ya = [ 0, B*b/2*(b+a+d), 0, 0 ];
    }
    else if (d+b < a)
    {
        xa = [-xmax, -b+d, -b+d, b+d, b+d, xmax];//        xa = [ -b+d, -b+d, b+d, b+d ];
        ya = [0, 0, B, 0, 0, 0]; //        ya = [ 0, B, 0, 0 ];
    }
    else if (d-b < a)
    {
        xa = [-xmax, -b+d, -b+d, a, a, xmax];//        xa = [ -b+d, -b+d, a, a ];
        ya = [0, 0, B, B*b/2*(b-a+d), 0, 0]; //        ya = [ 0, B, B*b/2*(b-a+d), 0 ];
    }
    else if (d-b > a)
    {
        xa = [-xmax, xmax];//        xa = [NaN, NaN, NaN, NaN];
        ya = [0, 0]; //        ya = [NaN, NaN, NaN, NaN];
    }

    g1.clear();
    g2.clear();
    g3.clear();

    // Signal h renversé et décalé
    g1.plot([-xmax, -b+d, -b+d, b+d, xmax], [0, 0, B, 0, 0]);

    // Aire sous la courbe
    g2.plot(xa, ya);
    g2.fill();
    g2.plot(xa, ya);
    
    // Résultat
    g3.stem([d], [z[dpx]]);
    g3.plot(t, z);
    
    // DEBUG : bug dans Safari
    //console.log("d = " + d);
    //console.log("t[0] = " + t[0] + ",  t[1] = " + t[1] + ",  t[gw] = " + t[gw]);
}

window.onload = function (){ init(); };
