<?php

//connexion bdd

include("connexion.php");

//récupération des données de la bdd du côté serveur

$i=0;
$reponse = $bdd->query('SELECT * FROM infictio ORDER BY id DESC');

while ($donnees = $reponse->fetch())
	{
	//on convertit chaque donnée en string json
		$i++;
		${'maVar'.$i} = json_encode($donnees['nom']);
		${'monTexte'.$i} = json_encode($donnees['texte']);	
	}

$reponse->closeCursor(); 

