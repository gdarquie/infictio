-- phpMyAdmin SQL Dump
-- version 3.2.5
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- Généré le : Dim 25 Mai 2014 à 12:58
-- Version du serveur: 5.1.44
-- Version de PHP: 5.3.2

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `interlivrefr`
--

-- --------------------------------------------------------

--
-- Structure de la table `infictio`
--

CREATE TABLE `infictio` (
  `id` tinyint(33) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `texte` text NOT NULL,
  `date_crea` datetime NOT NULL,
  `date_modif` datetime NOT NULL,
  `langue` varchar(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Contenu de la table `infictio`
--

