/*
    REPLIEMENT SPECTRAL

    Version du 24/09/2018

    Copyright Vincent Mazet (vincent.mazet@unistra.fr), Mehdi Abouhaouari, Shridevi Sandiramourty, 2016.

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
var div, gtb, gtf, gfe, gfb, gff, lblTe, lblFe, sld;

// Paramètres des objets
var gw = 350, gh = 200;     // Dimensions des graphes
var sep = 15;               // Séparation des objets

// Graphes
var xtmax = 4;              // Valeurs extrêmes des abscisses des graphes temporels
var xfmax = 4;              // Valeurs extrêmes des abscisses des graphes fréquentiels
var ytmax = 3;              // Valeurs extrêmes des axes des graphes temporels
var yfmax = 2;              // Valeurs extrêmes des axes des graphes fréquentiels

// Sinusoïde originale
var n, t = [], y = [];
var Te = 0.05;              // Pas d'échantillonnage
var xstep = 0.03;           // Pas d'échantillonnage de la sinusoïde "continue"
var fo = 1;                 // Fréquence de la sinusoïde
var A = 1;                  // Amplitude de la sinusoïde
for(n = -xtmax; n < xtmax; n=n+xstep )
{
    t.push( n );
    y.push( Math.sin(2*Math.PI*fo*n) );
}


function init()
{
    // Initialisation du div
    div = inidiv('aliasing', 2*gw+sep, gh+50);

    // Graphes temporels et étiquettes

    // Arrière-plan
    gtb = Graph(div, 0, 0, gw, gh);
    gtb.xlim = [-xtmax, xtmax];
    gtb.ylim = [-ytmax, ytmax];
    gtb.grid(1,1,color[2]);
    gtb.box(color[1]);
    gtb.axes(color[1]);

    // Signal original
    gtb.lineWidth = 1;
    gtb.strokeStyle = color[0];
    gtb.plot(t,y);

    // Avant-plan
    gtf = Graph(div, 0, 0, gw, gh);
    gtf.xlim = [-xtmax, xtmax];
    gtf.ylim = [-ytmax, ytmax];

    // Signal échantillonné
    gtf.lineWidth = 2;
    gtf.strokeStyle = color[4];

    // Graphes fréquentiels et étiquettes

    // Complètemet à l'arrière-plan : zones d'exclusion en dehors de [-fe/2, fe/2]
    gfe = Graph(div, gw+sep, 0, gw, gh);
    gfe.xlim = [-xfmax, xfmax];
    gfe.ylim = [-yfmax, yfmax];
    gfe.fillStyle = '#eee';

    // Arrière-plan
    gfb = Graph(div, gw+sep, 0, gw, gh);
    gfb.xlim = [-xfmax, xfmax];
    gfb.ylim = [-yfmax, yfmax];
    gfb.grid(1,1,color[2]);
    gfb.box(color[1]);
    gfb.axes(color[1]);

    // Signal original
    gfb.lineWidth = 2;
    gfb.strokeStyle = color[3];

    // Avant-plan
    gff = Graph(div, gw+sep, 0, gw, gh);
    gff.xlim = [-xfmax, xfmax];
    gff.ylim = [-yfmax, yfmax];

    // Signal échantillonné
    gff.lineWidth = 2;

    // Slider et étiquettes "Te" et "fe"
    Label(div, '\\(T_e\\) =', gw/2-73, gh+sep);
    lblTe = Label(div, Te.toFixed(2).toString(), gw/2-40, gh+sep);
    Label(div, '\\(f_e\\) =', gw*1.5+sep+20, gh+sep);
    lblFe = Label(div, (1/Te).toFixed(2).toString(), gw*1.5+sep+51, gh+sep);
    sld = Slider(div, gw/2, gh+sep, gw+sep, 0.05, 5, Te, 0.05, draw);

    // Affichage
    draw();
}

function draw()
{
    var n, te = [], ye = [], xr = [], ff = [], aa = [];
    var fr;

    // Récupère la valeur de Te à partir du slider
    Te = parseFloat(sld.value);
    //    Te = Math.round(Te*10) / 10; //    TODO ? : Arrondi les valeurs (bugs sur certains navigateurs)
    var fe = 1/Te;

    // Etiquettes de valeur
    Fe = 1/Te;
    lblTe.innerHTML = Te.toFixed(2).toString();
    lblFe.innerHTML = (1/Te).toFixed(2).toString();

    // Échantillons
    for(n=0; n<xtmax; n=n+Te)
    {
        te.push( n );
        ye.push( Math.sin(2*Math.PI*fo*n) );
        te.push( -n );
        ye.push( Math.sin(-2*Math.PI*fo*n) );
    }

    // Périodisation du spectre
    for(n=-20; n<20; n=n+1)
    {
        ff.push(n*fe-fo, n*fe+fo);
        aa.push(A/2, -A/2);
    }

    // Fréquence de la sinusoïde reconstruite :
    // on cherche la fréquence du signal échantillonné la plus petite,
    // donc la valeur ENTIÈRE de k telle que fo+k*fe soit la plus petite,
    // donc la valeur ENTIÈRE de k telle que la distance de fo+k*fe à 0 soit minimale,
    // donc la valeur ENTIÈRE de k qui minimise (0 - (fo + k*fe))^2 = (fo + k*fe)^2.
    // Cette valeur annule 2*fe*(fo+k*fe), donc : k = -round(fo/fe).
    // Ainsi, la fréquence de la sinusoïde reconstruite est fo-round(fo/fe)*fe.
    fr = fo - Math.round(fo/fe)*fe;

    // Pour les valeurs entières de Te, la sinusoïde est d'amplitude nulle
    if (Math.round(Te*2) == Te*2)
        A = 0;
    else
        A = 1;

    // Signal reconstruit
    for(n = -xtmax; n < xtmax; n=n+xstep )
    {
        xr.push( A*Math.sin(2*Math.PI*fr*n) );
    }

    // On remet l'amplitude à 1
    A = 1;

    // Affichage temporel
    gtf.clear();
    gtf.fillStyle = color[3];
    gtf.dots(te,ye);                // TODO : fusionner dot et dots
    gtf.strokeStyle = color[4];
    gtf.plot(t,xr);

    // Zones d'exclusions en dehors de [-fe/2, fe/2]
    gfe.clear();
    gfe.beginPath();
    xr = gfe.pt2px([fe/2, 0]);
    gfe.rect(xr[0], 0, gw-xr[0], gh);
    xr = gfe.pt2px([-fe/2, 0]);
    gfe.rect(0, 0, xr[0], gh);
    gfe.fill();
    gfe.closePath();

    // Affichage fréquentiel
    gff.clear();
    gff.strokeStyle = color[3];
    gff.dirac(ff,aa);
    gff.strokeStyle = color[4];
    gff.dirac([-fr, fr],[A/2, -A/2]);

}

window.onload = function (){ init(); };
