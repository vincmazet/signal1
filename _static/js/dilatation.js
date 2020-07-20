/*
    CHANGEMENT D'ÉCHELLE
    
    Version du 20/10/2015
    
    Copyright Vincent Mazet (vincent.mazet@unistra.fr), 2015.

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
var div, gr, gb, gf, lbl1, lbl2, lbl01, lbl02, lbla, lblan, lbld, lbldn, slda, sldd;

// Paramètres
var rap = 50;                   // Rapport entre les dimensions en points et en pixel du graphe
var xmax = 5;                   // Valeur extrême des abscisses
var ymin = -0.1, ymax = 1.7;    // Valeurs extrêmes des ordonnées
var a = 1, d = 0;               // Valeur de a et d

// Dimensions des objets
var gw = 2*xmax*rap;            // Largeur des graphes
var gh = (ymax-ymin)*rap;       // Hauteur des graphes
var ss = 30;                    // Hauteur du slider
var sep = 10;                   // Espace de séparation

function init()
{
    // Initialisation du div
    div = inidiv('dilatation', gw, 2*gh+3*sep+2*ss);
    
    // Graphe de référence
    gr = new Graph(div, 0, 0, gw, gh);
    gr.xlim = [-xmax, xmax];
    gr.ylim = [ymin, ymax];
    gr.box(color[1]);
    gr.grid(1, 1, color[2]);
    gr.axes(color[0]);
    gr.lineWidth = 2;
    gr.strokeStyle = color[3];
    gr.plot(t(1),f(1));

    // Graphe d'arrière-plan
    gb = new Graph(div, 0, gh+sep, gw, gh);
    gb.xlim = [-xmax, xmax];
    gb.ylim = [ymin, ymax];
    gb.box(color[1]);
    gb.grid(1, 1, color[2]);
    gb.axes(color[0]);

    // Graphe d'avant-plan
    gf = new Graph(div, 0, gh+sep, gw, gh);
    gf.xlim = [-xmax, xmax];
    gf.ylim = [ymin, ymax];
    gf.lineWidth = 2;
    gf.strokeStyle = color[3];
    
    // Etiquettes
    lbl1 = Label(div, '\\(x(t)\\)', gw/2+2, 2, 'l');
    lbl2 = Label(div, '\\(x(at+d)\\)', gw/2+2, gh+sep+2, 'l');
    lbl01 = Label(div, '\\(0\\)', gw/2+15, gh-5, 'rb');
    lbl02 = Label(div, '\\(0\\)', gw/2+15, 2*gh+sep-5, 'rb');
    lbla = Label(div, '\\(a =\\)', 0, 2*gh+2*sep, 'l');
    lbld = Label(div, '\\(d =\\)', 0, 2*gh+3*sep+ss, 'l');
    lblan = Label(div, a.toString(), 35, 2*gh+2*sep+2, 'l');
    lbldn = Label(div, d.toString(), 35, 2*gh+3*sep+ss+2, 'l');
    
    // Sliders
    slda = Slider(div, 80, 2*gh+2*sep, gw-80, -10, 10, a, 0.1, draw);
    sldd = Slider(div, 80, 2*gh+3*sep+ss, gw-80, -10, 10, d, 0.1, draw);
    
    // Affiche le signal
    draw();
}

//function f(t,a)
//{
//    var f = [];
//    for (i=0; i<t.length; i++)
//    {
//        if ( (a*t[i]>=0) & (a*t[i]<1) )
//            { f.push( a*t[i] ); }
//        else if ( (a*t[i]>=1) & (a*t[i]<2) )
//            { f.push( 1 ); }
//        else
//            { f.push( 0 ); }
//        //f.push( a*t[i]<0 ? Math.exp(5*a*t[i]) : Math.exp(-a*t[i]) );
//    }
//    return f;
//}

function t(a)
{
    var sgn = ((a>=0) ? +1 : -1);
    var tmp = [-sgn*xmax, -d/a, (1-d)/a, (2-d)/a, (2-d)/a, sgn*xmax];
    return tmp;
}

function f(a)
{
    return [0, 0, 1, 1, 0, 0]; 
}

function draw()
{
    // Définition des variables
    a = parseFloat(slda.value);
    lblan.innerHTML = a.toString();
    d = parseFloat(sldd.value);
    lbldn.innerHTML = d.toString();
    
    // Affiche le signal
    gf.clear();
    gf.plot(t(a),f(a));
}

window.onload = function (){ init(); }
