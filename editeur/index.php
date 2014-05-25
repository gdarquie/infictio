<!DOCTYPE html>


<html>

<head>
	<title>Editeur | dis(re)pair</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link href="../lib/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css">
	<link rel="stylesheet" type ="text/css" href="../css/style.css" />
	<link rel="stylesheet" type ="text/css" href="../css/animate.css" />
	<script src="../lib/ckeditor/ckeditor.js"></script>
	<style>
	h1{font-size:3.5em;text-align: center;padding-bottom:0.5em;border-bottom: 1px lightgrey solid;}
	header{text-align: center;padding-bottom:0.5em;margin-bottom: 1.5em;}
	input{margin-bottom:2em;}
	label{margin-right:0.5em;}
	button{margin-top:1.5em;margin-bottom:1.5em;}
	.fragments article{border:lightgrey solid 1px;height:200px;overflow: auto;}
	footer{text-align:center;}
	.code{color:grey;word-wrap:break-word;}

	</style>
</head>

<body>


<?php

//connexion bdd

include("php/connexion.php");

//traitement des données

include("php/save.php");

//initialisation

$id_etexte = '';
$validModif = 0;

if (isset ($_POST["modifier"]))
	{

		$req = $bdd->prepare('SELECT * FROM infictio WHERE id = ?');
		$req->execute(array($_POST["modifier"]));

		while ($donnees = $req->fetch())
		{
			$titre = $donnees['nom'];
		}
	}
else{
	$titre='';
}


?>

<div class='container'>
	<section class='row'>

		<header>
			<h1>dis(re)pair | Editeur - <a href='../index.php' target='_blank'>Lire le texte</a></h1>
			<h2><?php if(isset ($_POST["modifier"])) {echo "Modication de ".$titre." | <a href='index.php'>Ajouter nouveau</a>";} else {echo "Création d'un nouveau fragment :";} ?></h2>
		</header>
			
		<article>
			<form method='post' action='index.php'>
				<label for="billet_titre">Nom du fragment :</label><input name='billet_titre' id='billet_titre' type='text' value='<?php echo $titre; ?>'/>

	            <textarea name="editor1" id="editor1" rows="10" cols="80">
	                <?php

	                //----------------------
	                //EDITION du texte
	                //si l'utilisateur veut modifier un billet, le texte est joué dans le formulaire, modifCheck est à 1.

	                if (isset ($_POST["modifier"]))
	                	{

	                		$req = $bdd->prepare('SELECT * FROM infictio WHERE id = ?');
	                		$req->execute(array($_POST["modifier"]));

	                		while ($donnees = $req->fetch()){ 
								//echo $donnees['texte']; //écriture du texte avec PHP
								$id_etexte = $donnees['id']; //pour une écriture du texte en js
							}

	                	}
	                else if (isset ($_POST["supprimer"]))
	               		{
	                		$req = $bdd->prepare('DELETE FROM infictio WHERE id = ?');
							$req->execute(array($_POST["supprimer"]));
	                		
	                	}
	                ?>
	            </textarea>
	            <script>
	                // Replace the <textarea id="editor1"> with a CKEditor
	                // instance, using default configuration.
	                CKEDITOR.replace( 'editor1' );
	            </script>
	            <input type='hidden' value='<?php if (isset ($_POST["modifier"]))
	            {
	            	echo $_POST["modifier"];
	            }
	            else
	            {
	            	echo "faux";
	            }
	             ?>' name='modifCheck' />

	            <button type='submit'>Envoyer</button>
	        </form>
		</article>	
		</section>

		<section class='fragments'>
		<?php
		$i=0;
		$reponse = $bdd->query('SELECT * FROM infictio ORDER BY id DESC');

// ------------------------------------------------
// ------------------------------------------------
// Affichage des fragments directement via PHP // peut-être reprendre un affichage via JS
// ------------------------------------------------
// ------------------------------------------------

		while ($donnees = $reponse->fetch())
			{
			$i++;
		?>
		<article class='col-md-4'>
				<h3><?php echo $donnees['nom'];?></h3>
				<div class='code'><xmp><?php echo $donnees['texte'];?></xmp></div>
				<form method='POST' action='index.php' >
					<button name='modifier' value='<?php echo $donnees['id'] ?>'; >Modifier</button>
					<button class='' name='supprimer' value='<?php echo $donnees['id']?>'>Supprimer</button></form>
		</article>

		<?php	
		//récupération de toutes les variables pour le js ci-dessous
		${'monId'.$i} = json_encode($donnees['id']);
		${'maVar'.$i} = json_encode($donnees['nom']);
		${'monTexte'.$i} = json_encode($donnees['texte']); //remettre json encode?	
			}

		$reponse->closeCursor(); // Termine le traitement de la requête
		?>

		</article>
	</section>	

<hr/>

<!-- rajouter l'incrémentation pour i -->
<!-- <section class='row'>
	<div id='fragments' class='col-md-12'>
		<h3>Liste des fragments via Javascript</h3>
		<div id='ftexte<?php echo $i;?>'></div>
	</div>
</section> -->

</div> <!-- container -->





<footer>
		<p>dis(re)pair - editeur &copy; 2014 | Version 0.1 | Merci Bootstrap </p>
</footer>



<script type='text/javascript' src='../lib/bootstrap/js/bootstrap.js'></script>
<script type="text/javascript" src="../lib/jquery/jquery-2.0.3.min.js"></script>
<script type="text/javascript" src="../lib/jquery.lettering.js"></script>
<script type="text/javascript" src="../lib/jquery.textillate.js"></script>


<script>


var _nb = <?php echo $i ;?>; //pour compter le nombre de textes

var _table = new Array();

//constructeur objet
//je crée une classe Fragment qui me permet de prendre le texte et le titre
//j'ajoute ensuite à chaque fois l'objet fragment dans un tableau


function Fragment(id, titre, texte){
	this.id = id;
	this.titre = titre;
	this.texte = texte;
}

//-------------------------------------------
//-------------------------------------------
//conversion des données de PHP à JS [voir si Ajax peut aider ici]	
//-------------------------------------------
//-------------------------------------------

<?php 

//je crée une boucle en php pour pouvoir incrémenter les noms des variables.
//$i me permet de savoir le nombre maximal d'items

for ($j = 1; $j < $i+1; $j++) {?>
 
//je crée une boucle en js avec une seule occuruence(je ne comprends pas pourquoi je ne peux pas m'en passer)
//à chaque fois,que la boucle php loupe, je sauvegarde la variable php dans une var js.
//pour ce faire, je mets tour à tour les var dans un tableau
//pour l'instant, pour chaque cas, j'ai à la fois le titre de la var et le texte
//mettre un objet à la place


for (var i=1; i< 2; i++)
{
	var _id = <?php echo ${'monId'.$j};?>;
	var _titre = <?php echo ${'maVar'.$j};?>;
	var _texte = <?php echo ${'monTexte'.$j};?>;
	var _ajout = new Fragment(_id, _titre, _texte);
	_table.push(_ajout);

}

 <?php echo $j;// why?
}
?>


//sélectionner un fragment par titre


function getFragmentByTitre(nom)
{
	var _length =_table.length;

	for (var a=0; a<_length;a++)
	{
		if (nom == _table[a].titre)
		{
			//je dois récupérer tout le contenu en js
			_result = _table[a].texte;
			return _result;
		}

	}
	
}



// fonction pour faire apparaitre en JS tous les textes de fragments dans des div avec id
function getFtextes(){
		
		for (var a=0; a<_nb;a++)
		{
			_result = _table[a].texte;
			$("#ftexte"+a).html(_result);
		}
}


//reprendre cette fonction pour afficher le texte avec JS dans le champ de formulaire

function etexte(){

	var _length =_table.length;
	var _string = <?php echo $id_etexte; ?>;
	//alert(_table[60].id);

	for (var a=0; a<_length;a++)
	{
		if(_table[a].id == _string){
			var _result = _table[a].texte;	
			$("#editor1").html(_result);
			//alert(_result);
			return _result;
		}
	}

}


getFtextes();
etexte();



</script>

</body>

</html>