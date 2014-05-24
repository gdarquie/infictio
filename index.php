<!DOCTYPE html>


<html lang='fr'>

<head>
	<title>dis(re)pair</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

	<link href="lib/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css">	

	<link rel="stylesheet" type="text/css" href="style.css" />
	<link rel="stylesheet" href="lib/animate.css">
	<link href='http://fonts.googleapis.com/css?family=Open+Sans|Miltonian+Tattoo|IM+Fell+English|Junge|Aclonica|Unlock' rel='stylesheet' type='text/css'>

	<style>

		#soustitre{font-family: 'Open Sans', 'sans-serif';}
		.intro{font-size:12em;position:absolute;line-height: 1em;padding-bottom: 5em;}
		.intro2{font-size:9em;position:absolute;line-height: 1em;padding-bottom: 5em;}
		.intro3{font-size:9em;position:absolute;line-height: 1em;padding-bottom: 5em;}	
		.intro4{font-size:9em;position:absolute;line-height: 1em;padding-bottom: 5em;}		
		#depart{font-size: 0.9em;font-style: none;}
		#auteurs{font-family: 'Open Sans', 'sans-serif';}

			
	</style>
	
</head>


<body id='accueil' class='play'>

<?php include("editeur/php/interface.php"); ?>

<section class='container' id='page'>

	<div class='row'>
		
	<div class='col-md-9 col-xs-12 tlt' id='titreAccueil'>
		<div id='imageAccueil'></div>
		<a  href='#' onclick='lire("frag1")'><h1 data-out-effect="pulse" data-out-shuffle="true">la faute</h1></a>	
		<div id='genre' class="cache">
			<p id='soustitre' class='fr'>Récit interactif</p>
		</div>
		<div id='auteurs' class="cache"><div>Marine Huynh</div><div>Gaétan Darquié</div></div>
	
	</div>
	
	<div class='col-md-3 fr' id='depart'>
	</div>
	
	
</section>

<div id='fictionInteractive' class='row'><object class='col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12' data="play.html" type="text/html" id='inform'></object><button class='suite btn btn-default' onclick='chap4Out();chapitre("_ccl");changeMusic(_musique3);whiteMe();'>Conclure...</button></div>

<div id='mplayer'></div>

<footer class='cache'>
		<p>sanstitre &copy; 2014 | V0.0  09/05/14 | musique <span id='musicOnOff' onclick='stoplamousique();' class='slien'>on</span> | <a href='english.php' class='slien' id="langue">anglais</a> | <a href='index.php' class="slien">accueil</a> | <span class='slien' onclick='chapitre("_chapitre");whiteMe(_black);'>chap1</span> | <span class='slien' onclick='chapitre("_chapitre2");changeMusic(_musique2);whiteMe(_black);'>chap2</span> | <span class='slien' onclick='chapitre("_chapitre3");whiteMe(_black);'>chap3</span> | <span class='slien' onclick='chapitre("_chapitre4");whiteMe(_black);'>chap4</span> | <span class='slien' onclick='chap4Out();chapitre("_ccl");changeMusic(_musique3);whiteMe(_black);'>ccl</span></p>
		<!-- gaotian was here -hello guys !- -->
</footer>

</div>

<script type="text/javascript" src="lib/jquery/jquery-2.0.3.min.js"></script>
<script type="text/javascript" src="lib/hyphenator.js" ></script>
<script type="text/javascript" src="lib/jquery.lettering.js"></script>
<script type="text/javascript" src="lib/jquery.textillate.js"></script>

<script>
var _lang='fr';
//----------------------------------------------
//----------------------------------------------
//----------------Bdd PHP----------------------
//----------------------------------------------
//----------------------------------------------

//mettre chaque texte dans un tableau? même pas besoin, je peux écrire les textes les uns après les autres

var _nb = <?php echo $i ;?>; //pour compter le nombre de textes

var _table = new Array();

//constructeur objet
//je crée une classe Fragment qui me permet de prendre le texte et le titre
//j'ajoute ensuite à chaque fois l'objet fragment dans un tableau



function Fragment(titre, texte){
	this.titre = titre;
	this.texte = texte;
}

	
<?php 

//je crée une boucle en php pour pouvoir incrémenter les noms des variables.
//$i me permet de savoir le nombre maximal d'items

for ($j = 1; $j < $i+1; $j++) {?>
 
//je crée une boucle en js- une seule occuruence(je ne comprends pas pourquoi je ne peux pas m'en passer)
//à chaque fois,que la boucle php loupe, je sauvegarde la variable php dans une var js.
//pour ce faire, je mets tour à tour les var dans un tableau
//pour l'instant, pour chaque cas, j'ai à la fois le titre de la var et le texte
//mettre un objet à la place


for (var i=1; i< 2; i++)
{
	var _titre = <?php echo ${'maVar'.$j};?>;
	var _texte = <?php echo ${'monTexte'.$j};?>;
	var _ajout = new Fragment(_titre, _texte);
	_table.push(_ajout);

}

 <?php   echo $j;
}
?>


//************************Les Variables globales - paramètres ************************


//Variables globales pour la vitesse des effets d'animation
var _time =800;
var _stime=50;

// compteur musique
var e =0;

var _musique="<audio id='audio' autoplay='true' id='morceau'><source src='musique/44.wav' type='audio/wav' /><source src='musique/44.ogg' type='audio/ogg' /><source src='musique/44.mp3' type='audio/mp3' />Votre navigateur ne supporte pas la balise AUDIO.</audio>";

var _musique2="<audio id='audio' autoplay='true' id='morceau'><source src='musique/prelude.wav' type='audio/wav' /><source src='musique/prelude.ogg' type='audio/ogg' /><source src='musique/prelude.mp3' type='audio/mp3' />Votre navigateur ne supporte pas la balise AUDIO.</audio>";

var _musique3="<audio id='audio' autoplay='true' id='morceau'><source src='musique/within.wav' type='audio/wav' /><source src='musique/within.ogg' type='audio/ogg' /><source src='musique/within.mp3' type='audio/mp3' />Votre navigateur ne supporte pas la balise AUDIO.</audio>";


//sélectionner un fragment par titre


function getFragmentByTitre(nom)
{
	var _length =_table.length;

	for (var a=0; a<_length;a++)
	{
		if (nom == _table[a].titre)
		{
			_result = _table[a].texte;
			//alert(_result); 
			return _result;
		}

	}
	
}

getFragmentByTitre('_poeme');


//----------------------------------------------
//----------------------------------------------
//----------------Général----------------------
//----------------------------------------------
//----------------------------------------------

//Gestion des césures

Hyphenator.config({minwordlength : 4});
Hyphenator.run();


function lireIntro(x)
{
	$("#page").empty();
	var _token = getFragmentByTitre(x);
	var _nb2 = _table.length;
	for (var i=0; i<_nb2; i++)
	{
		if(_table[i].titre == x){
			$("#page").append(_token);
		}
	}
}


function lire(x)
{
	$("#page").empty();
	var _token = getFragmentByTitre(x);
	var _nb2 = _table.length;
	for (var i=0; i<_nb2; i++)
	{
		if(_table[i].titre == x){
			$("#page").html(_token);

		}
	}
			$("#page").css("display","none");
			$("#page").fadeIn(1000);
}

// transformer chaque lettre en span + rendre chacun des span invisible

function lettres(x)
{
	$(x).lettering();
	$(x+' span').css("display","none")
	//$('#bataille p span').css("display","none");	(enlever le commentaire de cette ligne)
};

function countChildren(x) 
{
	var _nombre  = $(x).children().length;
	return _nombre;	
};


//fonction qui gère l'animation au sein d'une ligne

function ligne(x){ //reste encore à l'automatiser
	
	var _max = countChildren(x); 
	for (var i=0;i<_max;i++)
	{	
		//$(x+" span:eq("+i+")").delay(i*_stime).fadeTo("slow", 1);
		$(x+" span:eq("+i+")").delay(i*(_stime+Math.random()*0)).fadeTo(100, 1);
	}

};



function lireLettre(w, x, y, z, a, b)
{
	
	var aleatoire=Math.floor((Math.random()*3));
	var openTag='<div class="lettre" onclick="lire(\''+w+'\');'+a+';'+b+'">';
	var closeTag='</div>';	
	
	$('#page').empty();
	$("body").css('color', 'black'); //pour éviter que le texte s'affiche en blanc

	var _tokenx = getFragmentByTitre(x);
	var _tokeny = getFragmentByTitre(y);
	var _tokenz = getFragmentByTitre(z);		
	var _nb2 = _table.length;

	
	switch(aleatoire)
	{		
		case 0:
			$('#page').html(openTag+_tokenx+closeTag);
			$('#page').fadeIn();
			break;
		case 1:
			$('#page').html(openTag+_tokeny+closeTag);
			$('#page').fadeIn();			
			break;
		case 2:
			$('#page').html(openTag+_tokenz+closeTag);
			$('#page').fadeIn();
			break;
	}	

	lettres(".lettre p");
	ligne(".lettre p");
	
}


function chapitre(x)
{
	var openTag2='<div class="titreChap">';
	var closeTag2='</div>';
	
	$("#fictionInteractive").css("display", "none"); //pour enlever l'objet IF

	var _token = getFragmentByTitre(x);
	$("#page").html(openTag2+_token+closeTag2);
	$('#page').css("display", "none");
	$('#page').fadeIn(2500);
		
}


var _black = "black" ; 
var _white = "white" ; 

function blackMe(x){
	$("body").css("background", "black");
	$("body").css('color', x);
	$("footer").css("background", "black");
	$("footer").css("color", "white");
	$("footer a").css("color", "white");
}


function whiteMe(x){
	$("body").css("background", "white");
	$("body").css('color', x);
	$("footer").css("background", "white");
	$("footer").css("color", "black");
	$("footer a").css("color", "black");		
}

//fonctions d'animation

function fade(x, y){ //x= élément sélectionné, y = durée du display
	$(x).css("display","none");
	$(x).fadeIn(y);
}




//----------------------------------------------
//----------------------------------------------
//----------------Accueil----------------------
//----------------------------------------------
//----------------------------------------------

function imageAccueil(){
	$("#imageAccueil").css("display","none");
	$("#imageAccueil").delay(3000).fadeTo(7000, 1);
	$("#imageAccueil").delay(10000).fadeTo(3000, 0.7);
	$("#imageAccueil").delay(13000).fadeTo(3000, 1);
	$("#imageAccueil").delay(16000).fadeTo(3000, 0.8);
	$("#imageAccueil").delay(19000).fadeTo(3000, 1);
}


//Animation du titre

function titre(){
	$('.tlt h1').hide().fadeIn().textillate({ initialDelay: 100,  inEffects: [], outEffects: [ 'pulse' ],
			in: { effect: 'fadeInDownBig', delayScale: 6, delay: 10, shuffle: true } ,
			out: { effect: 'pulse', delayScale: 1.5, delay: 50, sync: false, shuffle: false, reverse: false, }

	});
	$('#genre, #auteurs').delay(1500).hide().fadeIn(1200);
	$('#depart').delay(3000).hide().fadeIn(1200);
	$("footer").delay(3500).hide().fadeIn(1200);

	$('.char4').delay(3500).fadeTo(3000,0.3);
	$('.char5').delay(3500).fadeTo(3000,0.3);
	$('.char6').delay(3500).fadeTo(3000,0.3);
	$('.char7').delay(3500).fadeTo(3000,0.3);
}


function poeme()

{
	var _token = getFragmentByTitre('_poeme');
	var _nb2 = _table.length;
	for (var i=0; i<_nb2; i++)
	{
		$("#depart").html(_token);
	}
}


//----------------------------------------------
//----------------------------------------------
//----------------Intro----------------------
//----------------------------------------------
//----------------------------------------------
function intro()
{

	$(".intro").animate({
    top: "-=2000",
   	opacity: 1
  }, 7000
	);
}


function intro2(x)
{
	$(".intro2").children().hide();
	$("#i2a").delay(300).fadeIn(500); //pour moi
	$("#i2a").delay(1300).fadeOut(0);
	$("#i2b").delay(700).fadeIn(1000); //ce sentiment
	$("#i2b").delay(390).fadeOut(0);
	
	$("#i2c").delay(2400).fadeIn(300); // est une manifestation
	$("#i2c").delay(1400).fadeOut(100);
	$("#i2d").delay(2800).fadeIn(1000); // de la bêtise humaine :
	$("#i2d").delay(290).fadeOut(0);
	
	$("#i2e").delay(4800).fadeIn(300); // je n'éprouve aucune pitié	 
	$("#i2f").delay(5500).fadeIn(800);	//envers ses esclaves.
}

function intro3()
{
	$('.intro3').hide().fadeIn().textillate({ initialDelay: 100, in: { effect: 'fadeIn', delayScale: 4, delay: 5, shuffle: true } 
	 });
}

function intro4()
{
	$('.intro4').hide().fadeIn(100);
}



//----------------------------------------------
//----------------------------------------------
//----------------Chapitre 1--------------------
//----------------------------------------------
//----------------------------------------------

function chap1(){ //pour changer les fonds d'écran
 $("body").css("background","url('img/chap1.png') no-repeat center center fixed");
 $("body").css("background-size", "cover");
}


//----------------------------------------------
//----------------------------------------------
//----------------Chapitre 2--------------------
//----------------------------------------------
//----------------------------------------------

function chap2(){ //pour changer les fonds d'écran
 $("body").css("background","url('img/chap2.png') no-repeat center center fixed");
 $("body").css("background-size", "cover");
}


//----------------------------------------------
//----------------------------------------------
//----------------Chapitre 3----------------------
//----------------------------------------------
//----------------------------------------------

function chap3(){


	var p2='</p>';
	var _chap3p0 = getFragmentByTitre("_chap3p0");
	var _chap3p_2 = getFragmentByTitre("_chap3p_2");
	var _chap3p_3 = getFragmentByTitre("_chap3p_3");
	var _chap3p_4 = getFragmentByTitre("_chap3p_4");
	var _chap3p_5 = getFragmentByTitre("_chap3p_5");
	var _chap3p_6 = getFragmentByTitre("_chap3p_6");
	var _chap3p_7 = getFragmentByTitre("_chap3p_7");
	var _chap3p_8 = getFragmentByTitre("_chap3p_8");
	var _chap3p_9 = getFragmentByTitre("_chap3p_9");

	_chap3_1 = getFragmentByTitre("_chap3_1");
	_chap3_2 = getFragmentByTitre("_chap3_2");
	_chap3_3 = getFragmentByTitre("_chap3_3");
	_chap3_4 = getFragmentByTitre("_chap3_4");
	_chap3_5 = getFragmentByTitre("_chap3_5");
	_chap3_6 = getFragmentByTitre("_chap3_6");
	_chap3_7 = getFragmentByTitre("_chap3_6");
	_chap3_8 = getFragmentByTitre("_chap3_7");
	_chap3_8 = getFragmentByTitre("_chap3_8");
	_chap3_9 = getFragmentByTitre("_chap3_9");	

	var _chap3 = "<div id='chapitre3'><div class='row' id='chap3_titre'>"+_chap3p0+"1"+p2+_chap3p_2+"2"+p2+_chap3p_3+"3"+p2+_chap3p_4+"4"+p2+_chap3p_5+"5"+p2+_chap3p_6+"6"+p2+_chap3p_7+"7"+p2+_chap3p_8+"8"+p2+_chap3p_9+"9"+p2+"</div><div id='chap3_contenu' class='cache row'></div></div>";

	$("#page").html(_chap3);// pour compenser l'envoi de la fonction dans _chapitre3;
	$("#page").hide().fadeIn(1000);

	var _nb= $("#chap3_titre").children().length;


	//pour colorier en rouge le fragment que l'on est en train de lire

	for(var i=0; i <=_nb ; i++)
	{
		$("#chap3_titre p:nth-child("+i+")").delay(i*400).fadeTo(1000, 1-i*0.1);
		$("#chap3_titre p:nth-child(1)").css("color","red");
	}

}

function chap3_0(x){
						

	$("#chap3_contenu").css("display","none");
	$("#chap3_contenu").html(x);
	$("#chap3_contenu").fadeIn(1000);
	$(this).css("color","red");

	//$("#page .chapitre3 p:nth-child(1)").html("<p class='col-xs-1 col-md-1 vcentre'>1</p>"); // créer un p dans le p

}

function chap3_fond(){ //pour changer les fonds d'écran
	$("body").css("background","url('img/chap3a.png') no-repeat center center fixed");
	$("body").css("background-size", "cover");
	$("footer").css("background", "black");
	$("footer").css("color", "white");
	$("footer a").css("color", "white"); 

}

//----------------------------------------------
//----------------------------------------------
//----------------Chapitre 4--------------------
//----------------------------------------------
//----------------------------------------------

function chap4(){
	$("#fictionInteractive").fadeIn(2000);
	$("#fictionInteractive .suite").css("display", "none");
	$("#fictionInteractive .suite").fadeTo(30000, 1);
}

function chap4Out()
{
	$("#fictionInteractive").css("display", "none");
}


//----------------------------------------------
//----------------------------------------------
//----------------Conclusion--------------------
//----------------------------------------------
//----------------------------------------------

function ccl(){ //pour changer les fonds d'écran
 $("body").css("background","url('img/chap3a.png') no-repeat center center fixed");
 $("body").css("background-size", "cover");
}


//---------------------------------------------- 
//----------------------------------------------
//----------------Générique de fin--------------
//----------------------------------------------
//----------------------------------------------

function end(){
	$("#fin").delay(2000).animate({
    top: "-=100000",
   	opacity: 1 }, 200000);
}

//----------------------------------------------
//----------------------------------------------
//----------------Musique-----------------------
//----------------------------------------------
//----------------------------------------------

function playMusic(){
	$("#mplayer").html(_musique);	
}

function delayMusic(x)
{
	window.setTimeout(playMusic, x);
}

function changeMusic(x)
{
	$("#mplayer").html(x);
}


function stoplamousique(){
	if (e == 1)
	{
		var _morceau = document.getElementById("audio");
		_morceau.play();
		e=0;	
		$("#musicOnOff").text("on ");
	}
	else
	{
		var _morceau = document.getElementById("audio");
		_morceau.pause();
	 	e=1;
		$("#musicOnOff").text("off");
	}
}

//----------------------------------------------
//----------------------------------------------
//----------------Commandes----------------------
//----------------------------------------------
//----------------------------------------------

imageAccueil();
titre();

//affichage du poème pour la page d'acceuil
poeme();

//lancer la musique un peu après le chargement
delayMusic(2000);

</script>
<!-- <script type="text/javascript" src="js/function.js"></script> -->

</body>

</html>