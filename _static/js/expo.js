/*
    REPRÉSENTATION D'UNE EXPONENTIELLE COMPLEXE

    Version du 16/09/2016

    Copyright Vincent Mazet (vincent.mazet@unistra.fr) 2016

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
var div;
var lblf, sldf;
var w = 16, h = 9; // Dimensions de la scène
var camera, scene, renderer;
var expo, expmat, expgeo;
var expx, expgeox, expgeoy, expgeoz;
var material, geometry;

// Paramètres
var f = 0.5;                                // Fréquences actuelle, min et max de l'exponentielle complexe
var fmin = -1, fmax = 1, fstep = .01;        // Fréquences définies par le slider
var nmin = -2, nmax = 12, nstep = .02;      // Abscisses pour l'exponentielle complexe
n = range(nmin, nmax, nstep);
var x0=-2, y0=-2, z0=-2;                    // Origine du volume 3D


function init()
{
    // Initialisation du div
    div = inidiv('test3', 30*w, 30*h+50);
    div.style.backgroundColor = '#ffffff';
    
    Label(div, '\\(t\\)', 185, 125, 'br', color[3]);
    Label(div, '\\(Re[x(t)]\\)', 125, 55, 'bc', color[3]);
    Label(div, '\\(Im[x(t)]\\)', 90, 125, 'br', color[3]);
    
    // Slider et étiquette "Fréquence"
    lblf = Label(div, 'Fréquence : X', 0, 30*h+20);
    sldf = Slider(div, 120, 30*h+20, 30*w-120, fmin, fmax, f, fstep, draw);

    // Scène 3D (three.js)
    scene = new THREE.Scene();

    // Caméra
    camera = new THREE.OrthographicCamera(-w/3, w/3, h/3, -h/3, 0, 100 );
    camera.position.set( 10, 3, 8 );
    camera.lookAt(new THREE.Vector3(3.5,0,0));
    scene.add( camera );
    
    
    // Exponentielle complexe
    material = new THREE.LineBasicMaterial({
        color: 0x0060A9,
        linewidth: 3
    });
    expgeo = new THREE.Geometry();
    expo = new THREE.Line(expgeo, material);
    scene.add(expo);
    
    // Projections de l'exponentielle complexe
    material = new THREE.LineBasicMaterial({
        color: 0x999999,
        linewidth: 2
    });
    expgeox = new THREE.Geometry();
    expx = new THREE.Line(expgeox, material);
    scene.add(expx);
    expgeoy = new THREE.Geometry();
    expy = new THREE.Line(expgeoy, material);
    scene.add(expy);
    expgeoz = new THREE.Geometry();
    expz = new THREE.Line(expgeoz, material);
    scene.add(expz);


    // Repère original
    var line;
    material = new THREE.LineBasicMaterial({
      color: 0x0060A9
    });
    geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 1, 0, 0 )
    );
    line = new THREE.Line( geometry, material );
    scene.add( line );
    geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 0, 1, 0 )
    );

    line = new THREE.Line( geometry, material );
    scene.add( line );
    geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 0, 0, 1 )
    );
    line = new THREE.Line( geometry, material );
    scene.add( line );


    // Projection du repère original
    var line;
    material = new THREE.LineBasicMaterial({
      color: 0x999999
    });
    geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3( x0, 0, 1 ),
        new THREE.Vector3( x0, 0, 0 ),
        new THREE.Vector3( x0, 1, 0 )
    );
    line = new THREE.Line( geometry, material );
    scene.add( line );
    geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3( 0, y0, 1 ),
        new THREE.Vector3( 0, y0, 0 ),
        new THREE.Vector3( 1, y0, 0 )
    );
    line = new THREE.Line( geometry, material );
    scene.add( line );
    geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3( 0, 1, z0 ),
        new THREE.Vector3( 0, 0, z0 ),
        new THREE.Vector3( 1, 0, z0 )
    );
    line = new THREE.Line( geometry, material );
    scene.add( line );


    // Lignes du volume 3D
    var line;
    material = new THREE.LineBasicMaterial({
      color: 0x999999
    });
    geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3( x0, y0, z0 ),
        new THREE.Vector3( 10, y0, z0 )
    );
    line = new THREE.Line( geometry, material );
    scene.add( line );
    geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3( x0, y0, z0 ),
        new THREE.Vector3( x0, 10, z0 )
    );

    line = new THREE.Line( geometry, material );
    scene.add( line );
    geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3( x0, y0, z0 ),
        new THREE.Vector3( x0, y0, 10 )
    );
    line = new THREE.Line( geometry, material );
    scene.add( line );

    
    // Rendu
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setClearColor( 0xcf9f9f9 ); // couleur du fond
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize(30*w, 30*h);
    div.appendChild( renderer.domElement );
    
    
    draw();
}

function draw()
{    
    // Récupère les valeurs des sliders
    f = parseFloat(sldf.value);

    // Étiquettes de valeur
    lblf.innerHTML = 'Fréquence : ' + f.toString();

    // Met à jour l'exponentielle complexe
    expgeo.verticesNeedUpdate = true;
    for(var i = 0;i<n.length;i++){
        expgeo.vertices[i] = new THREE.Vector3(n[i], Math.cos(2*Math.PI*n[i]*f), Math.sin(2*Math.PI*n[i]*f));
    }
    expgeox.verticesNeedUpdate = true;
    for(var i = 0;i<n.length;i++){
        expgeox.vertices[i] = new THREE.Vector3(n[i], y0, Math.sin(2*Math.PI*n[i]*f));
    }
    expgeoy.verticesNeedUpdate = true;
    for(var i = 0;i<n.length;i++){
        expgeoy.vertices[i] = new THREE.Vector3(n[i], Math.cos(2*Math.PI*n[i]*f), z0);
    }
    expgeoz.verticesNeedUpdate = true;
    if(f==0)
    {
      // Si f = 0 : l'expo complexe est une droite
      for(var i = 0;i<360;i++){
          expgeoz.vertices[i] = 0;
      }
    }
    else
    {
      // cheat : on trace un bête cercle
      for(var i = 0;i<360;i++){
          expgeoz.vertices[i] = new THREE.Vector3(x0, Math.cos(n[i]), Math.sin(n[i]));
      }
    }

    // Rendu
    renderer.render( scene, camera );

}

init();