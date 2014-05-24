
//************************Les Variables globales - paramètres ************************

// compteur musique
var e =0;

//Variables globales pour la vitesse des effets d'animation
var _time =800;
var _stime=50;
var _soundDesign="<audio id='audio' autoplay='true' id='morceau'><source src='musique/44.wav' type='audio/wav' /><source src='musique/44.ogg' type='audio/ogg' /><source src='musique/44.mp3' type='audio/mp3' />Votre navigateur ne supporte pas la balise AUDIO.</audio>";

var _soundDesign2="<audio id='audio' autoplay='true' id='morceau'><source src='musique/prelude.wav' type='audio/wav' /><source src='musique/prelude.ogg' type='audio/ogg' /><source src='musique/prelude.mp3' type='audio/mp3' />Votre navigateur ne supporte pas la balise AUDIO.</audio>";

var _soundDesign3="<audio id='audio' autoplay='true' id='morceau'><source src='musique/within.wav' type='audio/wav' /><source src='musique/within.ogg' type='audio/ogg' /><source src='musique/within.mp3' type='audio/mp3' />Votre navigateur ne supporte pas la balise AUDIO.</audio>";


//************************Les fonctions ************************

// transformer chaque lettre en span + rendre chacun des span invisible

function lettres(x)
{
	$(x).lettering();
	$(x+' span').css("display","none")
	//$('#bataille p span').css("display","none");	(enlever le commentaire de cette ligne)
};


// compter combien il y a de span/lettres dans chaque vers (se place dans la fonction ligne)

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

function delayedLigne(i, x) {
  window.setTimeout(ligne, i, x);
}



//gérer les animations globalement (les délais entre chaque ligne...) , c'est une fonction à revoir intégralement, peut-être possible de largement simplifier en une ou deux lignes (la fonction poème =la tentative de reprendre ça)


//------------------------------------------------------------------------------------------------------------------------------------
//animation de texte

function page()
{
	
	var aleatoire=Math.floor((Math.random()*3));
	var openTag='<div class="lettre" onclick="intro(_intro);">';
	var closeTag='</div>';	
	
	$('#page').css("display","none");
	
	switch(aleatoire)
	{		
		case 0:
			$('#page').html(openTag+_lettre+closeTag);
			$('#page').fadeIn();
			break;
		case 1:
			$('#page').html(openTag+_lettre2+closeTag);
			$('#page').fadeIn();			
			break;
		case 2:
			$('#page').html(openTag+_lettre3+closeTag);
			$('#page').fadeIn();
			break;
	}
	
	
}

function lireLettre(w, x, y, z, a, b)
{
	
	var aleatoire=Math.floor((Math.random()*3));
	var openTag='<div class="lettre" onclick="lire('+w+');'+a+';'+b+'">';
	var closeTag='</div>';	
	
	$('#page').empty();
	
	switch(aleatoire)
	{		
		case 0:
			$('#page').html(openTag+x+closeTag);
			$('#page').fadeIn();
			break;
		case 1:
			$('#page').html(openTag+y+closeTag);
			$('#page').fadeIn();			
			break;
		case 2:
			$('#page').html(openTag+z+closeTag);
			$('#page').fadeIn();
			break;
	}	
	lettres(".lettre p");
	ligne(".lettre p");
	
}

function lire(x)
{
	$('#page').empty();
	$("#page").css("display","none");
	$('#page').html(x);
	$('#page').fadeIn();	
}

function chapitre(x)
{
	
	var openTag2='<div class="titreChap">';
	var closeTag2='</div>';
	
	$("#fictionInteractive").css("display", "none"); //pour enlever l'objet IF

	$('#page').css("display","none");
	$("#page").html(openTag2+x+closeTag2);
	$('#page').fadeIn(2500);
		
}



// lancer les animations lors du chargement initial de la page
function depart()
{
	$('#depart').css("display","none");
	accueil();
}

function intro(x)
{
var openTag='<div class="row pageIntro" onclick="chapitre(_chapitre);">';
var closeTag='</div>';	
	
	$('#page').html(openTag+"<p id='intro1'>"+_intro1+"</p>"+"<p id='intro2'>"+_intro2+"</p>"+"<p id='intro3'>"+_intro3+"</p>"+"<p id='intro4'>"+_intro4+"</p>"+"<p id='intro01'>"+_intro01+"</p>"+"<p id='intro02'>"+_intro02+"</p>"+"<p id='intro03'>"+_intro03+"</p>"+"<p id='intro04'>"+_intro04+"</p>"+closeTag);
	$('#page p').css("display","none");
	$('#intro1').fadeIn(3000);
	$('#intro2').delay(1500).fadeIn(5000);
	$('#intro3').delay(4000).fadeIn(10000);
	$('#intro4').delay(6000).fadeIn(10000);
	$('#intro01').delay(5000).fadeTo(20000, 0.6);
	$('#intro02').delay(6400).fadeTo(20000, 0.4);
	$('#intro03').delay(7200).fadeTo(20000, 0.2);
	$('#intro04').delay(8000).fadeTo(20000, 0.7);
}

function intro2(x)
{
	var openTag='<div class="row pageIntro">';
	var closeTag='</div>';
	var _contenu=$('#page div').html();
	//var _goodContent = removeLink(_contenu);
	
	$('#page').html(openTag+_contenu+x+closeTag);
}

function removeLink(x)
{
	//chercher le lien avec une expression régulière et le remplacer par rien et le supprimer
	//pour éviter que l'on puisse recliquer sur les liens
}


function motAmot(x, y)
{
	$('#page').html(x);
	lettres(y);
	ligne(y);
}


function blackMe(){
	$("body").css("background", "black");
	$("body").css('color', "white");
	$("footer").css("background", "black");
	$("footer").css("color", "white");
	$("footer a").css("color", "white");
}


function whiteMe(){
	$("body").css("background", "white");
	$("body").css('color', "black");
	$("footer").css("background", "white");
	$("footer").css("color", "black");
	$("footer a").css("color", "black");		
}

function chap3(){
	var _nb= $("#chap3_titre").children().length;


	//pour colorier en rouge le fragment que l'on est en train de lire

	for(var i=0; i <=_nb ; i++)
	{
		$("#chap3_titre p:nth-child("+i+")").delay(i*400).fadeTo(1000, 1-i*0.1);
		$("#chap3_titre p:nth-child(1)").css("color","red");
	}
}

// à chaque fois qu'on clique sur un fragment on affiche un contenu différent (il faudrait simplement rajouter du texte dans une balise prédéfini et changer l'image à côté)

function chap3_0(x){
	$("#chap3_contenu").css("display","none");
	$("#chap3_contenu").html(x);
	$("#chap3_contenu").fadeIn(1000);
	$(this).css("color","red");

	//$("#page .chapitre3 p:nth-child(1)").html("<p class='col-xs-1 col-md-1 vcentre'>1</p>"); // créer un p dans le p

}


function chap4(){
	$("#fictionInteractive").fadeIn(2000);
	$("#fictionInteractive .suite").css("display", "none");
	$("#fictionInteractive .suite").fadeTo(30000, 1);
}

function chap4Out()
{
	$("#fictionInteractive").css("display", "none");
}

//----------------------------------------------------------------------------------------------------
//Musique

function musique(){
	$("#musique").html(_soundDesign);	
}

function delayedMusique(x)
{
	window.setTimeout(musique, x);
}

function changeMusique(x)
{
	$("#musique").html(x);
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


//Accueil

function imageAccueil(){
	$("#imageAccueil").css("display","none");
	$("#imageAccueil").delay(3000).fadeTo(7000, 1);
	$("#imageAccueil").delay(10000).fadeTo(3000, 0.7);
	$("#imageAccueil").delay(13000).fadeTo(3000, 1);
	$("#imageAccueil").delay(16000).fadeTo(3000, 0.8);
	$("#imageAccueil").delay(19000).fadeTo(3000, 1);
}


imageAccueil();

//Pour les coupures automatiques de mot

       Hyphenator.config({
                 minwordlength : 4
         });
         Hyphenator.run();
		

//Animation du titre

$(function() {
	$('.tlt h1').hide().fadeIn().textillate({ initialDelay: 100, in: { effect: 'fadeInDownBig', delayScale: 6, delay: 10, shuffle: true,} 
	 });
});
$('#genre, #auteurs').delay(1500).hide().fadeIn(1200);
$('#depart').delay(3000).hide().fadeIn(1200);
$("footer").delay(3500).hide().fadeIn(1200);



// 3.définir la fonction qui gère l'animation au sein d'une ligne


//4. gérer les animations globalement (les délais entre chaque ligne...) , c'est une fonction à revoir intégralement, peut-être possible de largement simplifier en une ou deux lignes (la fonction poème =la tentative de reprendre ça)


function accueil(){
	
	var _nbVers=18;
	
	$("#bataille p span").css("display", "none"); // effacer toutes les lignes
	$("#bataille").fadeIn(); // ces deux lignes pour s'assurer que ce soit clean au niveau de l'apparition, normalement rien ne devrait être visible
	//$("#bataille p")
	
	delayedLigne(2*_time, "#s1");
	delayedLigne(5*_time, "#s1-2");
	delayedLigne(7*_time, "#s1-3");
	delayedLigne(9*_time, "#s1-4");
	delayedLigne(11*_time, "#s2");
	delayedLigne(13*_time, "#s2-1");
	delayedLigne(15*_time, "#s2-2");
	delayedLigne(17*_time, "#s2-3");
	delayedLigne(19*_time, "#s2-4");
	delayedLigne(21*_time, "#s3");
	delayedLigne(23*_time, "#s3-2");				
	delayedLigne(25*_time, "#s3-3");
	delayedLigne(27*_time, "#s3-4");
	delayedLigne(29*_time, "#s4");
	delayedLigne(31*_time, "#s4-2");	
	delayedLigne(33*_time, "#s4-3");
	delayedLigne(35*_time, "#s4-4");
	delayedLigne(38*_time, "#auteur");
};

delayedMusique(2000);
langue();

// $("#page").css("display","none");



//musique de Rachmaninif prelude C in sharp minor, Op 3, NO








