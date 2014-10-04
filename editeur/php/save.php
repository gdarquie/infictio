<?php 

//éditeur - insertion nouveau fragment dans bdd

$exist=0;

if (isset($_POST['billet_titre']) AND isset($_POST['editor1']) AND $_POST['billet_titre']!= null AND $_POST['editor1']!= null)
{
	$reponse = $bdd->query('SELECT * FROM infictio ORDER BY id DESC');

	while ($donnees = $reponse->fetch())
		{
			if ($_POST['billet_titre'] == $donnees['nom'] ){
				$exist = 1;
			}
		}

	if($_POST["modifCheck"] != "faux")
	{
		echo "<div class='notification'>Modification effectuée</div>";
		echo $donnees['nom']; // ne récupère pas les variables

		$req = $bdd->prepare('UPDATE infictio SET nom = :nv_nom, texte = :nv_texte WHERE id = :id');
		$req->execute(array(
			'nv_nom' => $_POST['billet_titre'],
			'nv_texte' => $_POST['editor1'],
			'id' => $_POST["modifCheck"]
			));

	}	

	else if ($exist == 1)
	{
		echo "Le nom est déjà utilisé. Veuillez en choisir un nouveau";
	}

	else {
		$req = $bdd->prepare('INSERT INTO infictio (nom, texte, langue) VALUES(?, ?, ?)');
		$req->execute(array($_POST['billet_titre'], $_POST['editor1'], 'fr'));
	}

}

