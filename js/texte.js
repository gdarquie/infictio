if(_lang=='fr')

{
//------------------------------
//----------Français------------
//------------------------------


//titres

var _chapitre="<div onclick='lireLettre(\"_chap1\", _Chap1Lettre, _Chap1Lettre2, _Chap1Lettre3, \"whiteMe()\" );'><h2>Chapitre 1</h2> <h3>Du haut du pont</h3><div class='col-md-4 col-md-offset-7 citation'><p>Bien que mon cœur, bien que mon âme</p><p>Eussent fui loin de cette femme.</p><p class='auteur'>P. Verlaine - Romances sans paroles</p></div></div>";

var _chapitre2="<div onclick='lireLettre(\"_chap2\", _Chap2Lettre, _Chap2Lettre2, _Chap2Lettre3, \"blackMe()\");'><h2>Chapitre 2</h2> <h3>Du danger de parler aux inconnus</h3><div class='col-md-6 col-md-offset-5 citation'><p>Si un chien rencontre un chat – par hasard, ou tout simplement par probabilité, parce qu'il y a tant de chiens et de chats sur un même territoire qu'ils ne peuvent pas, à la fin, ne pas se croiser ; si deux hommes, deux espèces contraires, sans histoire commune, sans langage familier, se trouvent par fatalité face à face – non pas dans la foule ni en pleine lumière, car la foule et la lumière dissimulent les visages et les natures, mais sur un terrain neutre et désert, plat, silencieux, où l'on se voit de loin, où l'on s'entend marcher, un lieu qui interdit l'indifférence, ou le détour, ou la fuite ; lorsqu'ils s'arrêtent l'un en face de l'autre, il n'existe rien d'autre entre eux que de l'hostilité</p><p>B.-M. Koltès - Dans la solitude des champs de coton</p></div></div>";

var _chapitre3="<div onclick='lireLettre(\"_chap3\", _Chap3Lettre, _Chap3Lettre2, _Chap3Lettre3, \"chap3()\", \"whiteMe()\");'><h2>Chapitre 3</h2> <h3>L'éparpillement</h3><div class='col-md-4 col-md-offset-7 citation'><p>Et vous gesticulez avec vos petits bras</p><p>Comme un héros méchant,</p><p>En poussant d'aigres cris poitrinaires, hélas !</p><p>Vous qui n'étiez que chant !</p><p>P. Verlaine - Romances sans paroles</p></div></div>";



var _chapitre4="<div onclick='lireLettre(\"_chap4\", _Chap4Lettre, _Chap4Lettre2, _Chap4Lettre3, \"chap4()\"), \"whiteMe()\";'><h2>Chapitre 4</h2><h3>L'onde de choc</h3><div class='col-md-4 col-md-offset-7 citation'><p>On n'est pas aimé tous les soirs.</p><p>A. Musset - Confessions d'un enfant du siècle</p></div></div>";


var _ccl="<div onclick='lireLettre(\"_ccl1\", _CclLettre, _CclLettre2, _CclLettre3, \"blackMe()\");'><h2>Conclusion</h2><h3>Un nouveau départ</h3><div class='col-md-4 col-md-offset-7 citation'><p>Le progrès, c'est l'hypocrisie qui raffine les vices !</p><p>J-K Huysmans - Là-bas</p></div></div>";


var _fin="<div class='m2haut'><h2>Dis(re)pair</h2><h3>Fin</h3></div>";

//Intro -Les lettres au hasard - l'une des lettres est choisie au hasard
//je te quitte

//haine
var _lettre="<div class='fr'><p>Cher \"ami\"</p><p>Tu m'as fait chercher bien trop longtemps ce qui n'allait pas chez moi, je suis heureux que ma vengeance ait finalement eu raison de ton arrogance, je te souhaite de mourir.</p></div>";

//pathétisme
var _lettre2="<div class='fr'><p>Ma chère,</p><p>C'est avec le cœur chargé de tristesse que j'ai pris part de ta décision, je pense que tu fais une erreur, j'aurais aimé te voir une dernière fois, adieu, prends bien soin de toi.</p></div>";

//mesquinerie
var _lettre3="<div class='fr'><p>Mon amour,</p><p>tu mériterais sans doute plus que ces quelques lignes pour te dire adieu, mais je dois dès à présent me préparer à partir, de toute façon, il n'existe pas assez de mots pour pouvoir te dire combien je t'ai aimé, ne t'en veux pas, tout est de ma faute, ne m'en veux pas, je t'en prie, je t'ai aimé sincèrement, vis la vie que tu as toujours rêvé de vivre, sois débarrassé de moi comme on se débarrasse d'un cadavre, fais-moi disparaître dans le bain d'acide de l'oubli, sans haine, adieu.</p></div>";

//lettres chapitre 1 : please écris moi

//pathétique
var _Chap1Lettre="<p>Ça fait maintenant des semaines que je n'ai plus de tes nouvelles. Est-ce que tu vas bien ? S'il te plait, réponds-moi.</p>";

//mesquin
var _Chap1Lettre2="<p>Je suis heureux de t'apprendre que je vais bientôt me marier. J'ai enfin trouvé quelqu'un en qui je peux avoir pleinement confiance et avec qui je vais avoir un enfant. J'ai appris que ta maîtresse t'avait quitté, j'en suis sin-cè-re-ment désolé. J'espère que les choses s'arrangeront pour toi.</p>";

//haineux
var _Chap1Lettre3="<p>Tu n'as même pas le courage de m'écrire les vraies raisons de ton départ. Je t'ai déjà envoyé deux messages, tu ne m'as jamais répondu. Tu crois sans doute que la meilleure réponse est l'indifférence, prends garde de ne jamais me croiser ou tu comprendras toute la portée de ton erreur.</p> ";


//lettres chapitre 2: les réponses

//pathétique
var _Chap2Lettre="<p>Je suis vraiment désolé que tu le prennes ainsi, s'il te plaît, arrête de m'écrire. Ce n'est pas de ta faute. C'est moi. Je me suis perdu dans ma complexité, et tu te trompes, ça n'a rien à voir avec la jeune fille blonde avec qui tu m'as vu hier.</p>";

//mesquin
var _Chap2Lettre2="<p>Tes lettres me réchauffent le cœur, cependant, je pense qu'il vaudrait mieux que tu les écrives à ta femme.";

//haineux
var _Chap2Lettre3="<p>Chaque mot que je lis de toi me cause une profonde nausée. Tu prétends être prêt à tout pour moi, pourquoi ne te réfugierais-tu pas dans un cimetière armé d’une pelle pour creuser un trou profond et t'y enterrer de façon à ce que je ne t'entende plus pleurer ?</p>";

//lettres chapitre 3: reviens

//pathétique
var _Chap3Lettre="<p>Il est trois heures du matin, la ville éteinte rêve sous ma fenêtre ouverte. Tu dors quelque part dans une de ces pièces. Je suis désolé, reviens.</p>";

//mesquin
var _Chap3Lettre2="<p>Je te remercie d'avoir bien voulu me laisser un peu de distance, je pense qu'il est temps désormais de te laisser revenir. Et si tu passais tout à l'heure ?</p>";

//haineux
var _Chap3Lettre3="<p>La montgolfière perd de l'altitude. Je suis obligé de lâcher du lest. Dépêche-toi de revenir si tu veux récupérer tes affaires.</p>";

//lettres chapitre 4: pardonne moi/ je regrette

//pathétique
var _Chap4Lettre="<p>Je viens de passer la journée à relire notre correspondance. Je ne sais pas ce qui m'a pris, si je le pouvais, je ferais tout ce que je peux pour revenir en arrière, je regrette tellement. </p>";

//mesquin
var _Chap4Lettre2="<p>Il est regrettable que nous ayons perdu autant de temps à nous chercher, nous aurions dû tout de suite nous séparer.</p>";

//haineux
var _Chap4Lettre3="<p>Le monde est une grande cacophonie où il est de mauvais ton de de mourir. Je passerai te voir, quand la maladie aura fini d'avoir raison de ta pitoyable condition. Tel un prêtre lors de l'ultime onction, je me présenterai à toi pour te voir sombrer et rappellerai doucement à ton oreille, tout le mal que tu nous as causé. </p>";

//lettres conclusion? //bilan

var _CclLettre="<p>Je lève les yeux vers la lune pleine, le calme de la nuit rend encore plus vide le cagibi qui me sert d'état d'âme. Depuis que tu es partie, les rayons nocturnes n'ont plus que des murs nus pour se poser.</p>";

var _CclLettre2="<p>Du haut du pont, la violence des flots ne me concerne pas, je sens en moi bouillonner une violence dont je me sens tout aussi étrangère. Si je sautais, la fureur, le froid glacial de l'eau, l'asphyxie seraient enfin palpables. </p>";

var _CclLettre3="<p>Nous nous destinons aux plus beaux matins, nous finissons au fond des égouts, puants.</p>";


//mots clés : pathétique misérable haine mesquinerie noir haine secret silence gêne départ

var p="<p>";
var p2="</p>";

var _intro1="Je n'ai jamais compris la faiblesse qui pousse la plupart des femmes et des hommes à venir s'enchaîner à quelqu'un d'autre.";

var _intro2="Pour moi, ce \ « sentiment\ » est une manifestation de la bêtise et du narcissisme humain : je n'éprouve aucune pitié envers ses esclaves.";

var _intro3="Bien au contraire, il m'arrive souvent de prendre du plaisir à maltraiter ce genre d'individu.";

var _intro4="Mais quand je l'ai rencontrée ce soir-là, c'était différent.";

var _intro01="S'encombrer de chaînes";

var _intro02="Mentir";

var _intro03="Attendre";

var _intro04="Ne pas céder à  la faiblesse d'aimer";


var _intro= p+_intro1+p2+p+_intro2+p2+p+_intro3+p2+p+_intro4+p2;


//Chapitre 1 :

//travailler sur la chute, tout dans l'animation doit évoquer la volonté de la femme de se jeter dans l'eau
//dessiner une ligne sinusoïdale en dessous pour symboliser les vagues

var _chap1="<div class='row chap1' onclick='lire(_chap1_2);'><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien'>La nuit naufrageait quelques nuages contre les pavés humides en les engloutissant dans ses égouts.</p></div>";

var _chap1_2="<div class='row chap1' onclick='lire(_chap1_3);'><p class='col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8  vcentre nlien'>La douceur du printemps me promenait sur les berges de la Seine, je marchais tranquillement à chercher le bleu du ciel derrière les ténèbres de la nuit, les nuages, la couche de pollution, par-dessus la lueur de la lune et des étoiles.</p></div>";

var _chap1_3="<div class='row chap1' onclick='lire(_chap1_4);'><p class='col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8  vcentre nlien'>Comme souvent dans ces moments, j'étais perdu dans mes <span>pensées</span>. Quelques phares ronronnaient. J'avançais quand <span>soudain</span>...</p></div>"; //test de récit interactif

var _chap1_4="<div class='row chap1' onclick='chapitre(_chapitre2);changeMusique(_soundDesign2);'><p class='col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8  vcentre nlien'>... \  « Ce fut comme une apparition. Elle se tenait là, seule,\ » debout, au milieu du pont. Un pont dont elle semblait sur le point de se jeter.<span > Je l'interpellai.</p></div>";

var _jeu="<div class='row chap1'><p>Tu viens de mourir. Tu es dans une grande pièce vide. Devant il y a une porte.</p> <div class='slien'>Ouvrir la porte.</div><div class='slien'>Attendre.</div></div>";


//Chapitre 2:


var _chap2="<div class='row'><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien' onclick='lire(_chap2_1);'>Elle était belle par-delà son désespoir. Elle portait une jolie robe bleue.</p></div>";

var _chap2_1="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien'  onclick='lire(_chap2_2);'>Fière, elle tentait de ne rien laisser paraître de sa détresse, seuls quelques détails trahissait la peine qu'elle éprouvait sans doute.</p></div>";

var _chap2_2="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien' onclick='lire(_chap2_3);'>Elle parlait peu, avec la voix de quelqu'un de fatigué, je ne l'interrogeais à aucun moment sur ce qui l'avait poussée à vouloir plonger, je la regardais et l'assaillais cycliquement après de longs silences avec des flots d'amphigouris prétentieux.</p></div>";

var _chap2_3="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien' onclick='lire(_chap2_4);'>Elle me répondait par des sourires forcés. J'avais le plaisir de constater qu'ils le devenaient de moins en moins.</p></div>";

var _chap2_4="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien' onclick='lire(_chap2_5);'>Nous nous sommes éloignés du pont et nous sommes entrés dans un café. Je voyais dans la pénombre du lieu que quelque chose s'était rallumé chez elle. J'avais réussi à lui prendre la main sans qu'elle s'en rende vraiment compte.</p></div>";

var _chap2_5="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien'  onclick='lire(_chap2_6);'>Tout à coup, elle s'est mise à parler. J'étais en plein milieu d'une phrase inutile. Je me suis tu. Et je l'ai écoutée raconter son histoire.</p></div>";

var _chap2_6="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien'  onclick='lire(_chap2_7);'>C'était l'histoire d'amour stupide et quelconque à laquelle je m'attendais.</p></div>";

var _chap2_7="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien'  onclick='chapitre(_chapitre3);whiteMe();'>Je m'efforçais de rassembler mon courage et le peu de forces qu'il me restait à cette heure avancée de la nuit pour aller au bout de sa pathétique conversation. Forcé, je l'écoutais... D'une oreille.</p></div>";

//Chapitre 3 : 

//figure de l'éparpillement, le lecteur clique successivement sur 1, 2, 3... à chaque fois un bloc de texte draggable apparait, il doit le déplacer pour continuer à lire, le texte s'étale et s'efface petit à petit

var _chap3p0="<p class='col-xs-1 col-xs-offset-2 col-md-1 col-md-offset-2 nlien haut'  onclick='chap3_0(_chap3_1);'>";

// var _chap3p="<p class='col-xs-1 col-md-1 cache haut onclick='chap3_0();'>";

var _chap3p_2="<p class='col-xs-1 col-md-1 cache nlien haut'  onclick='chap3_0(_chap3_2);'>";
var _chap3p_3="<p class='col-xs-1 col-md-1 cache haut nlien' onclick='chap3_0(_chap3_3);'>";
var _chap3p_4="<p class='col-xs-1 col-md-1 cache haut nlien' onclick='chap3_0(_chap3_4);'>";
var _chap3p_5="<p class='col-xs-1 col-md-1 cache haut nlien' onclick='chap3_0(_chap3_5);'>";
var _chap3p_6="<p class='col-xs-1 col-md-1 cache haut nlien' onclick='chap3_0(_chap3_6);'>";
var _chap3p_7="<p class='col-xs-1 col-md-1 cache haut nlien' onclick='chap3_0(_chap3_7);'>";
var _chap3p_8="<p class='col-xs-1 col-md-1 cache haut nlien' onclick='chap3_0(_chap3_8);'>";
var _chap3p_9="<p class='col-xs-1 col-md-1 cache haut nlien' onclick='chap3_0(_chap3_9);'>";




var _chap3="<div id='chapitre3'><div class='row' id='chap3_titre'>"+_chap3p0+"1"+p2+_chap3p_2+"2"+p2+_chap3p_3+"3"+p2+_chap3p_4+"4"+p2+_chap3p_5+"5"+p2+_chap3p_6+"6"+p2+_chap3p_7+"7"+p2+_chap3p_8+"8"+p2+_chap3p_9+"9"+p2+"</div><div id='chap3_contenu' class='cache row'></div></div>";

var _chap3_1="<div class='chap3_img col-md-4 col-md-offset-2 col-sm-6 col-xs-10 col-xs-offset-1 ' id='chap3_img1'></div><p class='col-md-4 col-md-offset-1 col-sm-6 col-xs-12' >I rencontre M lors d'une soirée. Elle est déjà dans une histoire compliquée. Elle ne fait pas attention à lui mais M la remarque et réussit à obtenir ses coordonnées.</p>";

var _chap3_2="<div class='chap3_img col-md-4 col-md-offset-2 col-sm-6 col-xs-10 col-xs-offset-1' id='chap3_img2'></div><p class='col-md-4 col-md-offset-1 col-sm-6 col-xs-12'>Les semaines suivantes, il multiplie les tentatives pour entrer en contact avec elle. Un jour, il vient la chercher à la sortie de son travail. I ne le dit pas, mais elle est touchée par le geste, d'autant plus qu'elle vient de sortir de son histoire compliquée.</p>";

var _chap3_3="<div class='chap3_img col-md-4 col-md-offset-2 col-sm-6 col-xs-10 col-xs-offset-1' id='chap3_img3'></div><p class='col-md-4 col-md-offset-1 col-sm-6 col-xs-12'>I laisse M lui faire la cour. Ils se rapprochent lentement. Ils ont beaucoup de travail, mais ils trouvent des prétextes pour s'écrire tous les jours.</p>";

var _chap3_4="<div class='chap3_img col-md-4 col-md-offset-2 col-sm-6 col-xs-10 col-xs-offset-1' id='chap3_img4'></div><p class='col-md-4 col-md-offset-1 col-sm-6 col-xs-12'>Ils finissent par s'embrasser, faire l'amour, voir des amis ensemble et se tenir la main. Les voilà empêtrés l'un avec l'autre.</p>";

var _chap3_5="<div class='chap3_img col-md-4 col-md-offset-2 col-sm-6 col-xs-10 col-xs-offset-1' id='chap3_img5'></div><p class='col-md-4 col-md-offset-1 col-sm-6 col-xs-12'>Leur histoire s'accélère. I a de moins en moins envie de passer du temps sans M. M de son côté a gardé la même distance avec I, jadis I lui reprochait de se tenir trop près mais désormais c'est l'inverse.</p>";

var _chap3_6="<div class='chap3_img col-md-4 col-md-offset-2 col-sm-6 col-xs-10 col-xs-offset-1' id='chap3_img6'></div><p class='col-md-4 col-md-offset-1 col-sm-6 col-xs-12'>I comprend que les rapports de force se sont inversés dans son couple lorsqu’elle demande à M de vivre avec elle et qu'il refuse.</p>";

var _chap3_7="<div class='chap3_img col-md-4 col-md-offset-2 col-sm-6 col-xs-10 col-xs-offset-1' id='chap3_img7'></div><p class='col-md-4 col-md-offset-1 col-sm-6 col-xs-12'>M n'est pas assez présent, I le lui reproche. Souvent. La situation se dégrade.</p>";

var _chap3_8="<div class='chap3_img col-md-4 col-md-offset-2 col-sm-6 col-xs-10 col-xs-offset-1' id='chap3_img8'></div><p class='col-md-4 col-md-offset-1 col-sm-6 col-xs-12'>I pense d'abord que ce n'est qu'une crise, mais M est de plus en plus absent, et cette absence devient de plus en douloureuse. Elle finit par le détester. La situation est catastrophique. Les réconciliations sont plus courtes que les disputes.</p>";

var _chap3_9="<div class='chap3_img col-md-4 col-md-offset-2 col-sm-6 col-xs-10 col-xs-offset-1' id='chap3_img9'></div><p class='col-md-4 col-md-offset-1 col-sm-6 col-xs-12'>L’inévitable se produit. Il lui donne rendez-vous dans un café pour lui parler. Elle est terrorisée. Elle demande à ce qu'ils se parlent chez elle. Il refuse. Ils se disputent. Il finit par accepter.</p><div class='nlien col-md-4 col-md-offset-1 col-sm-6 col-xs-12'><button onclick='chapitre(_chapitre4);' class='btn btn-default'>Chapitre 4</button></div>";

//Chapitre 4: 

var _chap4="";
var _chap4_0="<div class='row' ><p class='col-md-4 col-md-offset-3 mtexte nlien'  onclick='chapitre(_ccl);changeMusique(_soundDesign3);'>Cette partie sera consacrée au récit interactif écrit avec Inform. Il sera possible de jouer la rupture entre I et M.</p></div>";


//Conclusion

var _ccl1="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien'  onclick='lire(_ccl2);'>Très vite, nous nous sommes retrouvés chez elle. Tout était rangé et propre. En posant les yeux sur son misérable logis, je me fis la réflexion qu'elle était partie en pensant ne jamais revenir. Elle avait claqué la porte définitivement. Du moins l'avait-elle espéré. Se retrouver à nouveau dans son gourbi devait lui retourner le cœur. Elle pâlissait.</p></div>";

var _ccl2="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien'  onclick='lire(_ccl3);'>Je l'ai embrassée et nous avons fini dans son lit.</p></div>";

var _ccl3="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien'  onclick='lire(_ccl4);'>Ce fut délicieux. Je l'ai cueillie comme elle rêvait de l'être. Elle aimait ma cruauté. Même si elle ne le montrait pas et qu'elle n'arrêtait pas de pleurer, je sais qu'elle m'admirait pendant le court (il est vrai) moment de nos ébats.</p></div>";

var _ccl4="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien' onclick='lire(_ccl5);'>Quand je la quittai le lendemain midi sans lui dire adieu, je remarquai qu'elle ne dormait pas. Elle ne pleurait plus.<p></div>";

var _ccl5="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien' onclick='lire(_ccl6);'>Un peu de ma noirceur avait coulé jusqu'à elle et j'eus l'étrange sensation, sans doute fausse, que désormais, elle ne chercherait plus à se suicider.</p></div>";

var _ccl6="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien' onclick='lire(_ccl7);'>Malgré toute ma sournoiserie, j'étais presque heureux pour elle.</p></div>";

var _ccl7="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien' onclick='lire(_ccl8);'> La vie a ceci de remarquable que, quand on passe son temps à la tirer vers une extrémité pour éviter de s'y ennuyer, on retrouve le monotone en haut du plus haut sommet ; ce naufrage brutal et imprévisible n'a qu'une seule issue : la voie qui mène à son opposé.</p></div>";

var _ccl8="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien' onclick='lire(_ccl9);'>Cet aller-retour est coûteux parce qu'il oblige à avaler tout ce sur quoi on a craché jusqu'alors.</p></div>";

var _ccl9="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien' onclick='lire(_ccl10);'>Peut-être aurais-je dû lui demander son prénom ? La lourde porte qui se dressait fermée dans mon dos demeurait aussi impénétrable que la raison de ma mélancolie soudaine. </p></div>";


var _ccl10="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien' onclick='chapitre(_fin);whiteMe();'>Ce n'est pas que je quittais son appartement, c'est que j'en étais vomi.</p></div>";

//rajouter quelque chose
//disrepair



}



else{
//------------------------------
//----------Anglais------------
//------------------------------


//titres

var _chapitre="<div onclick='lireLettre(\"_chap1\", _Chap1Lettre, _Chap1Lettre2, _Chap1Lettre3, \"whiteMe()\" );'><h2>Chapter 1</h2> <h3>From atop the bridge</h3><div class='col-md-4 col-md-offset-7 citation'><p>Bien que mon cœur, bien que mon âme</p><p>Eussent fui loin de cette femme.</p><p class='auteur'>P. Verlaine - Romances sans paroles</p></div></div>";

var _chapitre2="<div onclick='lireLettre(\"_chap2\", _Chap2Lettre, _Chap2Lettre2, _Chap2Lettre3, \"blackMe()\");'><h2>Chapter 2</h2> <h3>Never talk to strangers</h3><div class='col-md-6 col-md-offset-5 citation'><p>Si un chien rencontre un chat – par hasard, ou tout simplement par probabilité, parce qu'il y a tant de chiens et de chats sur un même territoire qu'ils ne peuvent pas, à la fin, ne pas se croiser ; si deux hommes, deux espèces contraires, sans histoire commune, sans langage familier, se trouvent par fatalité face à face – non pas dans la foule ni en pleine lumière, car la foule et la lumière dissimulent les visages et les natures, mais sur un terrain neutre et désert, plat, silencieux, où l'on se voit de loin, où l'on s'entend marcher, un lieu qui interdit l'indifférence, ou le détour, ou la fuite ; lorsqu'ils s'arrêtent l'un en face de l'autre, il n'existe rien d'autre entre eux que de l'hostilité</p><p>B.-M. Koltès - Dans la solitude des champs de coton</p></div></div>";

var _chapitre3="<div onclick='lireLettre(\"_chap3\", _Chap3Lettre, _Chap3Lettre2, _Chap3Lettre3, \"chap3()\", \"whiteMe()\");'><h2>Chapter 3</h2> <h3>The scattering</h3><div class='col-md-4 col-md-offset-7 citation'><p>Et vous gesticulez avec vos petits bras</p><p>Comme un héros méchant,</p><p>En poussant d'aigres cris poitrinaires, hélas !</p><p>Vous qui n'étiez que chant !</p><p>P. Verlaine - Romances sans paroles</p></div></div>";



var _chapitre4="<div onclick='lireLettre(\"_chap4\", _Chap4Lettre, _Chap4Lettre2, _Chap4Lettre3, \"chap4()\"), \"whiteMe()\";'><h2>Chapter 4</h2><h3>Blast wave</h3><div class='col-md-4 col-md-offset-7 citation'><p>On n'est pas aimé tous les soirs.</p><p>A. Musset - Confessions d'un enfant du siècle</p></div></div>";


var _ccl="<div onclick='lireLettre(\"_ccl1\", _CclLettre, _CclLettre2, _CclLettre3, \"blackMe()\");'><h2>The End</h2><h3>A fresh start</h3><div class='col-md-4 col-md-offset-7 citation'><p>Le progrès, c'est l'hypocrisie qui raffine les vices !</p><p>J-K Huysmans - Là-bas</p></div></div>";


var _fin="<div class='m2haut'><h2>Dis(re)pair</h2><h3>The End</h3></div>";

//Intro -Les lettres au hasard - l'une des lettres est choisie au hasard
//je te quitte

//haine
var _lettre="<div class='fr'><p>Dear\"friend\"</p><p>For too long, you made me feel like something was wrong with me, and I tried to find what it could be. I am glad my revenge defeated your arrogance. I wish you die.</p></div>";

//pathétisme
var _lettre2="<div class='fr'><p>My dear,</p><p>When I heard what you decided, my heart was filled with sorrow. I think you are making a mistake, I wish I could have seen you one last time. Goodbye, take care of yourself.</p></div>";
//mesquinerie
var _lettre3="<div class='fr'>My love,</p><p>you would certainly deserve more than these few lines to say goodbye, but I have to get ready now. I am leaving. There are not enough words in the world to express how much I loved you, I don’t blame you, I blame myself. Please don’t be mad at me, I am begging, I loved you truly. Live the life you always dreamed of, get rid of me just like you get rid of a corpse. Make me disappear in the acid bath of oblivion. Do not hate me, goodbye.</p></div>";

//lettres chapitre 1 : please écris moi

//pathétique
var _Chap1Lettre="<p>It has been weeks since I last heard of you. Are you alright? Please, answer me.</p>";

//mesquin
var _Chap1Lettre2="<p>I am glad to tell you that I am getting married soon. I finally found someone I can fully trust and who is the father of the child I am expecting. I heard your mistress left you, I am TRULY sorry. I hope things will get better.</p>";

//haineux
var _Chap1Lettre3="<p>You are such a coward, you can’t even tell me the truth. Why are you leaving me? I already sent you two messages, you never dared to answer me. You must think that the best answer is disregard: be careful not to run into me, ever, or you will understand the impact of your mistake.</p> ";


//lettres chapitre 2: les réponses

//pathétique
var _Chap2Lettre="<p>I am truly sorry that you react like this, please, stop sending messages. This is not your fault. It’s me. I got lost in the maze of my own complexity. And you are wrong, this has nothing to do with the blond girl with whom you saw me yesterday.</p>";
//mesquin
var _Chap2Lettre2="<p>Your letters warm my heart. Though I think that it would be better if you sent them to your wife.";
//haineux
var _Chap2Lettre3="<p>Each and every word you write makes me feel deeply nauseous. You claim that you would do anything for me. But instead, you should take refuge in a cemetery: bring a shovel because you should dig a deep hole in the ground and burry yourself, so that I would never have to hear you cry again.</p>";


//lettres chapitre 3: reviens

//pathétique
var _Chap3Lettre="<p>It is three in the morning, the city is asleep and dreaming under my opened window. You are sleeping somewhere, in one of these rooms. I am so sorry, please come back to me.</p>";


//mesquin
var _Chap3Lettre2="<p>Thank you for letting me some space, I think now it is time to let you come back. Do you want to come over later?</p>";

//haineux
var _Chap3Lettre3="<p>The hot air balloon is losing height. I need to drop ballast. Please hurry up if you want to get your stuff back.</p>";

//lettres chapitre 4: pardonne moi/ je regrette

//pathétique
var _Chap4Lettre="<p>I just spent the day reading our letters over and over. I don’t know what’s got into me. If I could, I would do everything I can to rewind. I have so many regrets.</p>";

//mesquin
var _Chap4Lettre2="<p>It is regrettable that we lost that much time looking for each other, we should have split up right away.</p>";

//haineux
var _Chap4Lettre3="<p>The world is a great cacophony where it is not good form to die. I will come by, when the disease will have stopped ruining your pathetic situation. Just like a priest during Extreme Unction, I will appear in front of you, to watch you go down and I will whisper in your ear to remind you gently all the harm you have done to us.</p>";

//lettres conclusion? //bilan

var _CclLettre="<p>I look up at the full moon, the quiet night makes even emptier the storeroom of my qualms. Since you left, night-time beams of light have nowhere else to strike but naked walls.</p>";

var _CclLettre2="<p> From atop the bridge, the violence of the waves does not matter to me, I feel violence simmering inside of me. A violence that does not matter to me neither. If I jumped, I could finally feel rage, the freezing cold water, the asphyxia.</p>";

var _CclLettre3="<p> We are committed to the most beautiful mornings, we end up at the bottom of a cesspit, foul.</p>";

//mots clés : pathétique misérable haine mesquinerie noir haine secret silence gêne départ

var p="<p>";
var p2="</p>";

var _intro1="I never understood this weakness, that urges most women and men to get chained up to someone else.";

var _intro2="In my opinion, this \"feeling\" is nothing more than the expression of foolishness and narcissism specific to human beings: I feel no pity for its slaves.";

var _intro3="Quite the opposite, I often enjoy ill-treating this kind of person.";

var _intro4="But when I met her that night, it was different.";

var _intro01="Being weighed down by chains";

var _intro02="Lying";

var _intro03="Waiting";

var _intro04="Not yielding to the weakness that is love";


var _intro= p+_intro1+p2+p+_intro2+p2+p+_intro3+p2+p+_intro4+p2;


//Chapitre 1 :

//travailler sur la chute, tout dans l'animation doit évoquer la volonté de la femme de se jeter dans l'eau
//dessiner une ligne sinuzoidale en dessous pour symboliser les vagues

var _chap1="<div class='row chap1' onclick='lire(_chap1_2);'><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien'>At night, some clouds wrecked against the damp cobbled street, swallowing the stones into its sewer.</p></div>";

var _chap1_2="<div class='row chap1' onclick='lire(_chap1_3);'><p class='col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8  vcentre nlien'> During the warm spring, I was uncontrollably led to wander on the banks of the Seine. I was peacefully walking, looking for the blue of the sky behind the darkness of the night, behind the layer of air pollution, above the moon and the stars’ glow.</p></div>";


var _chap1_3="<div class='row chap1' onclick='lire(_chap1_4);'><p class='col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8  vcentre nlien'> I was lost in my <span>thoughts</span>, as often during this kind of moments. Some car headlights were humming. I kept moving when <span>suddenly</span>...</p></div>";

var _chap1_4="<div class='row chap1' onclick='chapitre(_chapitre2);changeMusique(_soundDesign2);'><p class='col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8  vcentre nlien'>... \"It was just like and apparition. She was standing there, alone, \" in the middle of the bridge. A bridge from which she was about to jump.<span > I called out to her.</p></div>";


var _jeu="<div class='row chap1'><p> You just died. You are in a large empty room. In front of you, a door.</p> <div class='slien'> Open the door.</div><div class='slien'>Waiting.</div></div>";



//Chapitre 2:


var _chap2="<div class='row'><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien' onclick='lire(_chap2_1);'>She was beautiful beyond her despair. She was wearing a pretty little blue dress. </p></div>";

var _chap2_1="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien'  onclick='lire(_chap2_2);'> Out of pride, she wouldn’t let her distress show, only a few details betrayed her and the pain she was undoubtedly feeling.</p></div>";

var _chap2_2="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien' onclick='lire(_chap2_3);'> She didn’t talk much, with the voice of someone tired. At no time I asked her about what led her to this moment when she wanted to plunge. I was looking at her and after a long silence, I assailed her with a torrent of pretentious gibberish on a cyclic basis.</p></div>";


var _chap2_3="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien' onclick='lire(_chap2_4);'>She answered with forced smiles. I was glad to notice that they were less and less forced.</p></div>";

var _chap2_4="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien' onclick='lire(_chap2_5);'> We got far away from the bridge and we went in a coffee. I could see in the darkness of this place that something had lightened up again in her. I had managed to grab her hand without her realizing it.</p></div>";

var _chap2_5="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien'  onclick='lire(_chap2_6);'> All of a sudden, she started talking. I was in the middle of a useless sentence. I hushed up. I listened to her, telling her story.</p></div>";

var _chap2_6="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien'  onclick='lire(_chap2_7);'>It was the stupid and ordinary love story that I expected.</p></div>";

var _chap2_7="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien'  onclick='chapitre(_chapitre3);whiteMe();'> I struggled to gather my courage and the strength I had left at this time of the night, to go through her pathetic conversation. Forced, I was listening to her… Half-listening.</p></div>";


//Chapitre 3 : 

//figure de l'éparpillement, le lecteur clique successivement sur 1, 2, 3... à chaque fois un bloc de texte draggable apparait, il doit le déplacer pour continuer à lire, le texte s'étale et s'efface petit à petit

var _chap3p0="<p class='col-xs-1 col-xs-offset-2 col-md-1 col-md-offset-2 nlien haut'  onclick='chap3_0(_chap3_1);'>";

// var _chap3p="<p class='col-xs-1 col-md-1 cache haut onclick='chap3_0();'>";

var _chap3p_2="<p class='col-xs-1 col-md-1 cache nlien haut'  onclick='chap3_0(_chap3_2);'>";
var _chap3p_3="<p class='col-xs-1 col-md-1 cache haut nlien' onclick='chap3_0(_chap3_3);'>";
var _chap3p_4="<p class='col-xs-1 col-md-1 cache haut nlien' onclick='chap3_0(_chap3_4);'>";
var _chap3p_5="<p class='col-xs-1 col-md-1 cache haut nlien' onclick='chap3_0(_chap3_5);'>";
var _chap3p_6="<p class='col-xs-1 col-md-1 cache haut nlien' onclick='chap3_0(_chap3_6);'>";
var _chap3p_7="<p class='col-xs-1 col-md-1 cache haut nlien' onclick='chap3_0(_chap3_7);'>";
var _chap3p_8="<p class='col-xs-1 col-md-1 cache haut nlien' onclick='chap3_0(_chap3_8);'>";
var _chap3p_9="<p class='col-xs-1 col-md-1 cache haut nlien' onclick='chap3_0(_chap3_9);'>";




var _chap3="<div id='chapitre3'><div class='row' id='chap3_titre'>"+_chap3p0+"1"+p2+_chap3p_2+"2"+p2+_chap3p_3+"3"+p2+_chap3p_4+"4"+p2+_chap3p_5+"5"+p2+_chap3p_6+"6"+p2+_chap3p_7+"7"+p2+_chap3p_8+"8"+p2+_chap3p_9+"9"+p2+"</div><div id='chap3_contenu' class='cache row'></div></div>";

var _chap3_1="<div class='chap3_img col-md-4 col-md-offset-2 col-sm-6 col-xs-10 col-xs-offset-1 ' id='chap3_img1'></div><p class='col-md-4 col-md-offset-1 col-sm-6 col-xs-12' > I met M at a party. She was already involved in a complicated relationship. She does not pay attention to him but M noticed her and managed to get her contact details.</p>";


var _chap3_2="<div class='chap3_img col-md-4 col-md-offset-2 col-sm-6 col-xs-10 col-xs-offset-1' id='chap3_img2'></div><p class='col-md-4 col-md-offset-1 col-sm-6 col-xs-12'> During the following weeks, he tried to get in touch with her several times. One day, he picked her up at work, at the end of the day. I doesn’t tell, but this meant a lot to her, all the more so as her complicated relationship just ended.</p>";


var _chap3_3="<div class='chap3_img col-md-4 col-md-offset-2 col-sm-6 col-xs-10 col-xs-offset-1' id='chap3_img3'></div><p class='col-md-4 col-md-offset-1 col-sm-6 col-xs-12'> I lets M woo her. They slowly get closer. They work a lot, but they find excuses to write to each other every day.</p>";

var _chap3_4="<div class='chap3_img col-md-4 col-md-offset-2 col-sm-6 col-xs-10 col-xs-offset-1' id='chap3_img4'></div><p class='col-md-4 col-md-offset-1 col-sm-6 col-xs-12'> They end up kissing, then make love, go out with some friends together and hold hands. There they are, trapped with each other.</p>";

var _chap3_5="<div class='chap3_img col-md-4 col-md-offset-2 col-sm-6 col-xs-10 col-xs-offset-1' id='chap3_img5'></div><p class='col-md-4 col-md-offset-1 col-sm-6 col-xs-12'> Their story speeds up. I wanted to spend less and less time without M. As for M, he kept his distance with I. In times past, I reproached him for being too close, but now it is the other way round.</p>";

var _chap3_6="<div class='chap3_img col-md-4 col-md-offset-2 col-sm-6 col-xs-10 col-xs-offset-1' id='chap3_img6'></div><p class='col-md-4 col-md-offset-1 col-sm-6 col-xs-12'> I understood that the balance of powers was reversed in the relationship when she asked M to move in with her and when he refused.</p>";

var _chap3_7="<div class='chap3_img col-md-4 col-md-offset-2 col-sm-6 col-xs-10 col-xs-offset-1' id='chap3_img7'></div><p class='col-md-4 col-md-offset-1 col-sm-6 col-xs-12'> M is not around enough, I makes him feel bad about it. Often. The situation is degrading.</p>";


var _chap3_8="<div class='chap3_img col-md-4 col-md-offset-2 col-sm-6 col-xs-10 col-xs-offset-1' id='chap3_img8'></div><p class='col-md-4 col-md-offset-1 col-sm-6 col-xs-12'> At first, I thought that this was just a little crisis, but M was less and less around, and this absence became more and more painful. She ended up hating him. The situation is a mess. Reconciliations last shorter than fights.</p>";

var _chap3_9="<div class='chap3_img col-md-4 col-md-offset-2 col-sm-6 col-xs-10 col-xs-offset-1' id='chap3_img9'></div><p class='col-md-4 col-md-offset-1 col-sm-6 col-xs-12'> And what was inevitable happened. He asked her to meet in a cafe so he could talk to her. She was terrorized. She asked him that they have this talk at her place instead. He refuses. They argue. He ends up accepting.</p><p onclick='chapitre(_chapitre4);' class='nlien col-md-4 col-md-offset-1 col-sm-6 col-xs-12'>Lire la suite...</p>";



//Chapitre 4: 

var _chap4="";
var _chap4_0="<div class='row' ><p class='col-md-4 col-md-offset-3 mtexte nlien'  onclick='chapitre(_ccl);changeMusique(_soundDesign3);'>Cette partie sera consacrée au récit interactif écrit avec Inform. Il sera possible de jouer la rupture entre I et M.</p></div>";


//Conclusion

var _ccl1="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien'  onclick='lire(_ccl2);'> We quickly found ourselves at her place. It was clean and neat. When I looked at her miserable dwelling, I realized that she left thinking she would never come back. She had slammed the door for ever. At least, she hoped so. Being back in her hovel must turn her heart upside down. She was turning pale.</p></div>";

var _ccl2="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien'  onclick='lire(_ccl3);'>I kissed her, and then we ended up in her bed. </p></div>";

var _ccl3="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien'  onclick='lire(_ccl4);'> It was delightful. I took her gently, just like she always desired to be. She loved how cruel I was. Even if she tried to hide it, even if she could not stop crying, I know that during the short lovemaking moment we had, she was admiring me.</p></div>";

var _ccl4="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien' onclick='lire(_ccl5);'> When I left her without saying goodbye the morning after, I noticed that she was not sleeping. She was not crying anymore.<p></div>";

var _ccl5="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien' onclick='lire(_ccl6);'> I had poured some of my darkness into her/Some of my darkness had flowed to her and I had this odd feeling, probably mistaken, that from now on she would not try to end her life anymore.</p></div>";

var _ccl6="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien' onclick='lire(_ccl7);'> Despite my insidious self, I was almost happy for her.</p></div>";

var _ccl7="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien' onclick='lire(_ccl8);'> What is remarkable with life, is that when you spend your time pulling it towards an end to avoid boredom, you can still find monotony at the top of the highest summit. This brutal collapse has only one outcome: the path leading to its opposite.</p></div>";

var _ccl8="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien' onclick='lire(_ccl9);'> This return trip is costly because it forces you to swallow back everything you spit on hitherto.</p></div>";

var _ccl9="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien' onclick='lire(_ccl10);'> Perhaps I should have asked her name? The heavy door was standing closed behind me and was still as impenetrable as my sudden melancholy.</p></div>";

var _ccl10="<div class='row' ><p class='col-md-offset-4 col-md-4  col-sm-offset-3 col-sm-6 col-xs-offset-2 col-xs-8 vcentre nlien' onclick='chapitre(_fin);whiteMe();'> I was not leaving her appartment, I was vomited out of it. </p></div>";

}



