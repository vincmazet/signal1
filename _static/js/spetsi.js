/*
    SPETSI.JS
    Simulations pédagogiques en traitement du signal et des images

    Version du 18/09/2017

    Copyright Vincent Mazet (vincent.mazet@unistra.fr) et co-auteurs, 2015-2017.

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


/****************************************************** */
/*                OBJETS DE L'INTERFACE                 */
/****************************************************** */

// Variables globales
var color = [ '#333', '#999', '#CCC', '#0060A9', '#BE1600', '#00A90B', '#EFED00'];
var lineWidth = 1;
var symbClear = "&#10005;";


// Initialise le <div> de la simulation
function inidiv(id, w, h)
{
    // id :   ID du div
    // w, h : largeur et hauteur de la simulation
    var o = document.getElementById(id);
    //o.style.background = '#eee';
    o.style.width  = w.toString() + 'px';
    o.style.height = h.toString() + 'px';
    return o;
}


// Etiquette de texte
function Label(div, txt, x, y, align, clr)
{
    // div :   div contenant la simulation (obtenu grâce à inidiv)
    // x, y :  position et taille du texte
    // align : alignement du texte par rapport au point (x, y)
    //         Alignement horizontal (l, c, r) ou vertical (t, m, b)
    // clr :   couleur du texte (color[0] par défaut)

    // Paramètres par défaut
    align = align || 'lt';
    clr = clr || color[0];

    // Création d'un div
    var o = document.createElement('div');

    // Couleur + position
    o.style.position = 'absolute';
    o.style.color = clr;

    // Texte (prévoit un éventuel code LaTeX)
    o.innerHTML = txt;

    // Ajout du Label au div
    div.appendChild(o);

    // Alignement horizontal
    if (align.search('r')>-1)
        o.style.left = (x-o.clientWidth).toString() + 'px';
    else if (align.search('c')>-1)
        o.style.left = (x-o.clientWidth/2).toString() + 'px';
    else
        o.style.left = x.toString() + 'px';

    // Alignement vertical
    if (align.search('b')>-1)
        o.style.top = (y-o.clientHeight).toString() + 'px';
    else if (align.search('m')>-1)
        o.style.top = (y-o.clientHeight/2).toString() + 'px';
    else
        o.style.top = y.toString() + 'px';

    // Transcription avec MathJax
    // http://docs.mathjax.org/en/latest/typeset.html
    // http://docs.mathjax.org/en/latest/api/hub.html
    MathJax.Hub.Queue(['Typeset',MathJax.Hub,o]);

    return o;
}


// Barre de défilement
function Slider(div, x, y, w, min, max, value, step, f)
{
    // div :   div contenant la simulation (obtenu grâce à inidiv)
    // x, y :  position et taille du texte
    // align : alignement du texte par rapport au point (x, y)
    //         Alignement horizontal (l, c, r) ou vertical (t, m, b)
    // clr :   couleur du texte (color[0] par défaut)
    // f :     fonction à appeler lors d'un changement de valeur de la barre

    // Création du contrôle
    var o = document.createElement('input');
    o.type = 'range';

    // Position
    o.style.position = 'absolute';
    o.style.left  = x.toString() + 'px';
    o.style.top   = y.toString() + 'px';
    o.style.width = w.toString() + 'px';

    // Paramètres
    o.min = min;
    o.max = max;
    o.step = step;
    o.value = value; // doit arriver après l'initialisation de min, max et step

    // Évènements
    o.addEventListener("change", function() {o.value = Math.round(o.value/step)*step; f();}, false); // pour IE10. Il faut arrondir la valeur de la barre pour éviter les erreurs d'arrondi
    o.addEventListener("input",  function() {f();}, false); // pour Firefox, Safari et Chrome

    div.appendChild(o);
    return o;
}


// Liste de choix
function Select(div, x, y, w, list, f)
{
    // div :     div contenant la simulation (obtenu grâce à inidiv)
    // x, y, w : position et largeur de la liste
    // list :    liste des choix possibles
    // f :       fonction à appeler lors d'un changement

    // Crée l'objet et le positionne
    var o = document.createElement('select');
    o.style.position = 'absolute';
    o.style.left = x.toString() + 'px';
    o.style.top  = y.toString() + 'px';
    o.style.width= w.toString() + 'px';

    // Liste de choix
    var opt = [];
    for(var i=0; i<list.length; i++)
    {
        opt[i] = document.createElement("option")
        opt[i].text = list[i];
        o.add(opt[i]);
    }
    o.option = opt;

    // Évènements
    o.addEventListener("change", function() {f();}, false); // pour IE10
    o.addEventListener("input",  function() {f();}, false); // pour Firefox, Safari et Chrome
    o.addEventListener("keydown",  function() {setTimeout(f, 0)}, false); // keydown is fired *before* the value is changed

    div.appendChild(o);
    return o;
}


// Bouton
function Button(div, txt, x, y, w, h, tip, f)
{
    // div :        div contenant la simulation (obtenu grâce à inidiv)
    // txt :        texte du bouton
    // x, y, w, h : position et taille du bouton
    // tip :        infobulle
    // f :          fonction à appeler lors d'un clic

    // Crée l'objet et le positionne
    var o = document.createElement('button');
    o.style.position = 'absolute';
    o.style.left   = x.toString() + 'px';
    o.style.top    = y.toString() + 'px';
    o.style.width  = w.toString() + 'px';
    o.style.height = h.toString() + 'px';

    // Texte et infobulle
    o.innerHTML = txt;
    o.title = tip;

    // Évènements
    o.addEventListener("click", function() {f();}, false); // pour IE10
    o.addEventListener("input",  function() {f();}, false); // pour Firefox, Safari et Chrome
    o.addEventListener("keydown",  function() {setTimeout(f, 0)}, false); // keydown is fired *before* the value is changed

    div.appendChild(o);
    return o;
}


// Texte à éditer
function Edit(div, txt, x, y, w, h)
{
    // div :        div contenant la simulation (obtenu grâce à inidiv)
    // txt :        texte
    // x, y, w, h : position et taille du bouton

    var o = document.createElement('input');
    o.type = 'text';
    o.style.position = 'absolute';
    o.style.left   = x.toString() + 'px';
    o.style.top    = y.toString() + 'px';
    o.style.width  = w.toString() + 'px';
    o.style.height = h.toString() + 'px';
    o.value = txt;

    div.appendChild(o);
    return o;
}

// Graphe
function Graph(div, x, y, w, h)
{
    // Les graphes sont à créer en dernier, notamment après les Labels,
    // afin qu'ils aient le bon z-index et être accessibles avec la souris.
    // Ou alors il faut forcer la propriété z-index
    // div :        div contenant la simulation (obtenu grâce à inidiv)
    // x, y, w, h : position et taille du graphe
        
    // Création d'un canvas et de son contexte
    var cnv = document.createElement('canvas');
    var ctx = cnv.getContext('2d');
    
    // Position et taille
    cnv.style.position = 'absolute';
    cnv.style.left   = x.toString() + 'px';
    cnv.style.top    = y.toString() + 'px';
    cnv.style.width  = w.toString() + 'px';
    cnv.style.height = h.toString() + 'px';
    cnv.width = w;// * window.devicePixelRatio;
    cnv.height = h;// * window.devicePixelRatio;
    
    div.appendChild(cnv);

    // Propriétés du graphe (et valeurs par défaut)
    ctx.xlim = [-1, 1];
    ctx.ylim = [-1, 1];

    // ***************************************************************************************** //

    // Conversion point du graphe -> pixel du canvas
    ctx.pt2px = function(pt)
    {
      return [ (pt[0] - ctx.xlim[0]) / (ctx.xlim[1] - ctx.xlim[0]) * (cnv.width-1)  ,
               (ctx.ylim[1] - pt[1]) / (ctx.ylim[1] - ctx.ylim[0]) * (cnv.height-1) ];
    };

    // ***************************************************************************************** //

    // Conversion pixel du canvas -> point du graphe
    ctx.px2pt = function(px)
    {
        return [      px[0] /  cnv.width  * (ctx.xlim[1] - ctx.xlim[0]) + ctx.xlim[0] ,
                 (1 - px[1] / cnv.height) * (ctx.ylim[1] - ctx.ylim[0]) + ctx.ylim[0] ];
    };

    // ***************************************************************************************** //

    // Efface le graphe
    ctx.clear = function()
    {
        ctx.clearRect(0, 0, cnv.width, cnv.height);
    };

    // ***************************************************************************************** //

    // Cadre
    ctx.box = function(clr)
    {
        // Couleur
        clr = clr || color[1];

        // Tracé
        ctx.beginPath();
        ctx.moveTo(0.5, 0.5);
        ctx.lineTo(0.5, cnv.height-0.5);
        ctx.lineTo(cnv.width-0.5, cnv.height-0.5);
        ctx.lineTo(cnv.width-0.5, 0.5);
        ctx.lineTo(0.5, 0.5);
        ctx.lineWidth = 1;
        ctx.strokeStyle = clr;
        ctx.stroke();
        ctx.closePath();
    };

    // ***************************************************************************************** //

    // Axes
    ctx.axes = function(clr)
    {
        // Couleur
        clr = clr || color[1];

        // Coordonnées en pixel de l'origine
        var z = ctx.pt2px([0, 0]);
        z = [ Math.round(z[0])+.5 , Math.round(z[1])+.5 ];

        // Tracé
        ctx.beginPath();
        ctx.moveTo(z[0], 0);
        ctx.lineTo(z[0], cnv.height);
        ctx.moveTo(0, z[1]);
        ctx.lineTo(cnv.width, z[1]);
        ctx.lineWidth = 1;
        ctx.strokeStyle = clr;
        ctx.stroke();
        ctx.closePath();
    };

    // ***************************************************************************************** //

    // Grille
    ctx.grid = function(dx, dy, clr)
    {
        // Couleur
        clr = clr || color[2];

        // Ecart entre les lignes
        dx = dx || 1, dy = dy || 1;
        var i, p;
        ctx.beginPath();

        // Grille sur les abscisses (lignes verticales)
        for (i = ctx.xlim[0]-ctx.xlim[0]%dx ; i <= ctx.xlim[1]-ctx.xlim[1]%dx ; i = i+dx)
        {
            i = Math.round(i*1E3) * 1E-3;   // Arrondi à 1E-3 pour contrer les erreurs d'arrondi
            p = ctx.pt2px([i, 0]);          // Conversion point -> pixel
            p = Math.round(p[0])+.5;
            ctx.moveTo(p, 0);
            ctx.lineTo(p, cnv.height);
        }

        // Grille sur les ordonnées (lignes horizontales)
        for (i = ctx.ylim[0]-ctx.ylim[0]%dy ; i <= ctx.ylim[1]-ctx.ylim[1]%dy ; i = i+dy)
        {
            i = Math.round(i*1E3) * 1E-3;   // Arrondi à 1E-3 pour contrer les erreurs d'arrondi
            p = ctx.pt2px([0, i]);          // Conversion point -> pixel
            p = Math.round(p[1])+.5;
            ctx.moveTo(0, p);
            ctx.lineTo(cnv.width, p);
        }

        // Affiche les lignes
        ctx.lineWidth = 1;
        ctx.strokeStyle = clr;
        ctx.stroke();
        ctx.closePath();
    };

    // ***************************************************************************************** //

    // Trace un signal en reliant les points (pour un signal continu)
    ctx.plot = function(xx,yy)
    {
        var n, p = new Array(2), op = new Array(2);
        
        op[1] = NaN; // Il n'y a pas de point avant le tout premier : on le fixe à NaN
        
        for (n=0; n<xx.length; n++)
        {
            // Point à représenter
            p = ctx.pt2px([xx[n],yy[n]]);
            p[0] = p[0]+0.5;
            p[1] = p[1]+0.5;

            // Premier point
            if (n===0 && !isNaN(p[1]))
            {
                ctx.beginPath();
                ctx.moveTo(p[0], p[1]);
            }
        
            if (!isNaN(p[1]) && isNaN(op[1]))
            {
                ctx.beginPath();
                ctx.moveTo(p[0], p[1]);
            }
            
            if (!isNaN(p[1]) && !isNaN(op[1]))
            {
                ctx.lineTo(p[0], p[1]);
            }
            
            if (isNaN (p[1]) && !isNaN(op[1]))
            {
                ctx.lineTo(p[0], p[1]);
                ctx.stroke();
                ctx.closePath();
            }
            
            // Dernier point
            if (n==xx.length-1 && !isNaN(p[1]))
            {
                ctx.lineTo(p[0], p[1]);
                ctx.stroke();
                ctx.closePath();
            }
            
            op[1] = p[1];
        }
        
    };

    // ***************************************************************************************** //

    // Trace des impulsions de Dirac
    ctx.dirac = function(xx,yy)
    {
        var n, p, z, s;
        
        // Ligne horizontale
        ctx.beginPath();
        ctx.moveTo(0, cnv.height/2);
        ctx.lineTo(cnv.width, cnv.height/2);
        ctx.stroke();
        ctx.closePath();

        // Origine
        z = ctx.pt2px([0, 0]);
        z[1] = Math.round(z[1])+0.5;

        for (n=0; n<xx.length; n++)
        {
            // Signe des ordonnées (pour connaître l'orientation de la flèche)
            s = Math.sign(yy[n]);
            
            // Point à représenter
            p = ctx.pt2px([xx[n],yy[n]]);
            p[0] = Math.round(p[0])+0.5;
            p[1] = p[1]+0.5;

            // Barre verticale
            ctx.beginPath();
            ctx.moveTo(p[0], z[1]);
            ctx.lineTo(p[0], p[1]);
            ctx.stroke();
            ctx.closePath();

            // Petite flèche
            ctx.beginPath();
            ctx.moveTo(p[0]-5, p[1]+7*s);
            ctx.lineTo(p[0], p[1]);
            ctx.lineTo(p[0]+5, p[1]+7*s);
            ctx.stroke();
            ctx.closePath();
        }
    };

    // ***************************************************************************************** //

    // Trace un signal sans relier les points, avec des barres verticales (pour un signal discret)
    ctx.stem = function(xx,yy)
    {
        var n, p, z;

        // Origine
        z = ctx.pt2px([0, 0]);
        z[1] = Math.round(z[1])+0.5;

        for (n=0; n<xx.length; n++)
        {
            // Point à représenter
            p = ctx.pt2px([xx[n],yy[n]]);
            p[0] = Math.round(p[0])+0.5;
            p[1] = p[1]+0.5;

            // Barre verticale
            ctx.beginPath();
            ctx.moveTo(p[0], z[1]);
            ctx.lineTo(p[0], p[1]);
            ctx.stroke();
            ctx.closePath();

            // Petit disque
            ctx.beginPath();
            ctx.arc(p[0], p[1], 3, 0, 6.2831853, true);
            ctx.fill();
            ctx.closePath();
        }
    };;

    // ***************************************************************************************** //

    // Trace un signal sans relier les points, sans barres verticales (pour un signal discret)
    ctx.dots = function(xx,yy)
    {
        var n, p;

        for (n=0; n<xx.length; n++)
        {
            // Point à représenter
            p = ctx.pt2px([xx[n],yy[n]]);
            p[0] = Math.round(p[0])+0.5;
            p[1] = p[1]+0.5;

            // Petit disque
            ctx.beginPath();
            ctx.arc(p[0], p[1], 3, 0, 6.2831853, true);
            ctx.fill();
            ctx.closePath();
        }
    };

    // ***************************************************************************************** //

    // Trace un point en (x,y) de rayon r
    ctx.dot = function(x, y, r)
    {
        // Point à représenter
        var p = ctx.pt2px([x,y]);
        p[0] = Math.round(p[0])+0.5;
        p[1] = p[1]+0.5;

        // Représente le point
        ctx.beginPath();
        ctx.arc(p[0], p[1], r, 0, 6.2831853, true);
        ctx.fill();
        ctx.closePath();
    };

    // ***************************************************************************************** //

    // Évènement : souris qui se déplace sans bouton appuyé
    ctx.mouseMove = function(f)
    {
        cnv.addEventListener('mousemove', function(evt)
        {
            if (evt.buttons!=0)
                return;

          var rect = cnv.getBoundingClientRect();
          var x = Math.round(evt.clientX - rect.left); // pourquoi pas valeurs entières ?
          var y = Math.round(evt.clientY - rect.top);
          var p = ctx.px2pt([x, y]);
          x = p[0];
          y = p[1];
          f(x, y);
        });
    };

    // ***************************************************************************************** //

    // Évènement : souris qui se déplace et bouton appuyé
    ctx.mouseDrag = function(f)
    {
        cnv.addEventListener('mousemove', function(evt)
        {
            if (evt.buttons==0)
                return;
                
            cnv.style.cursor = 'default';
            var rect = cnv.getBoundingClientRect();
            var x = Math.round(evt.clientX - rect.left);
            var y = Math.round(evt.clientY - rect.top);
            var p = ctx.px2pt([x, y]);
            x = p[0];
            y = p[1];
            f(x, y);
        });
        cnv.addEventListener('touchmove', function(evt)
        {
            var rect = cnv.getBoundingClientRect();
            var x = Math.round(evt.targetTouches[0].pageX - rect.left);
            var y = Math.round(evt.targetTouches[0].pageY - rect.top + document.body.getBoundingClientRect().top);
            var p = ctx.px2pt([x, y]);
            x = p[0];
            y = p[1];
            f(x, y);
            evt.preventDefault();
        });
    };

    // ***************************************************************************************** //

    // Retourne le contexte
    return ctx;


    /*

    // Propriétés et méthodes associées
    ctx.ctx = ctx;
    ctx.mycanvas = cnv;


    // Trace une ligne brisée aux coordonnées définies dans x (abscises) et y (ordonnées)
    ctx.line = function(x,y)
    {
        var i;
        ctx.beginPath();
        ctx.moveTo(x[0]+0.5, y[0]+0.5);
        for(i=1; i<x.length; i++)
        {
            if (isNaN(y[i-1]))
            { ctx.moveTo(x[i]+0.5, y[i]+0.5); }
            else
            { ctx.lineTo(x[i]+0.5, y[i]+0.5); }
        }
        ctx.stroke();
        ctx.closePath();
    }

    // Trace un rectangle vide aux coordonnées (x,y) et de dimension (w,h)
    ctx.rect = function(x,y,w,h)
    {
        ctx.beginPath();
        ctx.rect(x+0.5, y+0.5, w, h);
        ctx.stroke();
        ctx.closePath();
    }

    // Trace un rectangle plein aux coordonnées (x,y) et de dimension (w,h)
    ctx.rectf = function(x,y,w,h)
    {
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.fill();
        ctx.closePath();
    }

    // Trace un cercle vide de centre (x,y) et de rayon r
    ctx.circle = function(x,y,r)
    {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 6.2831853, true);
        ctx.stroke();
        ctx.closePath();
    }

    */

}




/****************************************************** */
/* FONCTIONS MATHÉMATIQUES POUR LE TRAITEMENT DU SIGNAL */
/****************************************************** */

// Produit de convolution
/*
    z = conv(x, y) calcule le produit de convolution entre x et y (tous deux de taille N)
    et renvoie le résultat dans une nouvelle liste de taille N.
    Correspond à z = conv(x, y, 'same') en Matlab.
*/
function conv(x,y)
{
    var z = [];
    var i ,j, tmp, jmin, jmax;
    var N = x.length; // = y.length
    for(i = (N-1)/2; i <= (N-1)*3/2; i++)
    {
        tmp = 0;
        jmin = Math.max(0,i-N+1);
        jmax = Math.min(i,N-1);
        for(j = jmin; j <= jmax; j++)
        {
            tmp += x[j] * y[i-j];
        }
        z[i-((N-1)/2)] = tmp;
    }
    return z;
}

// Liste de progression arithmétique
/*
    n = range(N)        renvoie la liste [1, 2, 3, ..., N]
    n = range(a, b)     renvoie la liste [a, a+1, a+2, ..., b-1, b]
    n = range(a, b, d)  renvoie la liste [a, a+d, a+d, ..., b]
*/
function range(a, b, c)
{
    var i, n = [];
    if      (arguments.length==1)
    {
        for (i = 1; i <= a; i++)
            n.push(i);
    }
    else if (arguments.length==2)
    {
      if (a<b)
      {
        for (i = a; i <= b; i++)
            n.push(i);
      }
      else
      {
        for (i = a; i >= b; i--)
            n.push(i);
      }
    }
    else if (arguments.length==3)
    {
      if (c>0)
      {
        for (i = a; i <= b; i=i+c)
            n.push(i);
      }
      else
      {
        for (i = a; i >= b; i=i+c)
            n.push(i);
      }
    }
   return n;
}
