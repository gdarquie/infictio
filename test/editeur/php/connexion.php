<?php 

try
{
	$bdd = new PDO('mysql:host=mysql5-12.start;dbname=interlivrefr', 'interlivrefr', 'UB2wc81c');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());

}
