<?php 

//éditeur - insertion nouveau fragment dans bdd

$exist=0;

if ( $_POST['billet_titre']!= null AND $_POST['editor1']!= null AND $_POST['langue']!= null)
{
	if ( $_POST['langue']== fr)
	{
		$reponse = $bdd->query('SELECT * FROM disrepair WHERE langue = \'fr\' ORDER BY id DESC');

		while ($donnees = $reponse->fetch())
			{
				if ($_POST['billet_titre'] == $donnees['nom'] ){
					$exist = 1;
				}
			}
	}
	if ( $_POST['langue']== en)
	{
		$reponse = $bdd->query('SELECT * FROM disrepair WHERE langue = \'en\' ORDER BY id DESC');

		while ($donnees = $reponse->fetch())
			{
				if ($_POST['billet_titre'] == $donnees['nom'] ){
					$exist = 1;
				}
			}
	}

	if($_POST["modifCheck"] != "faux")
	{
		echo "<div class='alert alert-success'>Modification effectuée</div>";
		echo $donnees['nom']; // ne récupère pas les variables

		$req = $bdd->prepare('UPDATE disrepair SET nom = :nv_nom, texte = :nv_texte, langue = :nv_langue WHERE id = :id');
		$req->execute(array(
			'nv_nom' => $_POST['billet_titre'],
			'nv_texte' => $_POST['editor1'],
			'nv_langue' => $_POST['langue'],			
			'id' => $_POST["modifCheck"]
			));

	}	

	else if ($exist == 1)
	{
		echo "<div class='alert alert-danger'>Le nom est déjà utilisé. Veuillez en choisir un nouveau</div>";
	}

	else {
		$req = $bdd->prepare('INSERT INTO disrepair (nom, texte, langue) VALUES(?, ?, ?)');
		$req->execute(array($_POST['billet_titre'], $_POST['editor1'], $_POST['langue']));
		echo "<div class='alert alert-success'>Sauvegarde effectuée</div>";
	}

}

