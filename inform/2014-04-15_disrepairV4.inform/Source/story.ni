"Disrepair" by Gate

[to do :  remettre les probabilités à 70 dans la scène 1, pour l'instant on ne fait rien de l'espoir, il faudrait penser à le supprimer ]

Section 1 -Includes 
 
[Include Vorple Core by The Vorple Project.
Include Hypertext by The Vorple Project.]
Include Basic Screen Effects by Emily Short.

Include French by Eric Forgeot.
	Use French 1PSPa language.
	
Section 2 - Global parameters

Use no scoring.
Release along with an interpreter.

[---Liste des variables---]

Situation is a number variable. Situation is 0.

compteur is a number variable. compteur is 0.
_dispute is a number variable. _dispute is 0.[1 pour commencer la scène Dispute]
_dispute2 is a number variable._dispute2 is 0.[1 pour commencer la scène Dispute2]
_rompre is a number variable. _rompre is 0. [1 pour pouvoir rompre et amorcer la fin Rupture]
_assiette is a number variable._assiette is 0.
_bout is a number variable._bout is 0.
_torture is a number variable. _torture is 0.

[--Liste des nouvelles actions--]

	[--crier--]
	
criering is an action applying to nothing. Understand "crier", "hurler" as criering.
	
Instead of criering for the first time:
	say "Je n'en avais pas vraiment envie.";
	

Instead of criering for the second time:
	say "Pourquoi crier ?";

Instead of criering for the third time:
	say "Tellement de choses peuvent se dire calmement.";
	
Instead of criering for the fourth time:
	say "Après tout, peut-être me fallait-il m'y résoudre ? Mais est-ce que je n'aurais pas l'air d'une folle ?";
	
A report criering rule :
	say "J'ai crié de toutes mes forces...";
	if a random chance of 70 in 100 succeeds:
		end the story saying "...mais ce n'était pas une bonne idée, il m'a regardée avec un air bizarre, clairement il doutait de ma santé mentale. Il est reparti sans un mot en claquant la porte. Depuis je ne l'ai plus jamais revu et j'ai un peu honte de m'être laissée emporter.";
	otherwise:
		say "Je vis qu'il faisait un gros effort pour ne pas tenir compte de mon geste.";

	[--rompre--]
	
rompreing is an action applying to nothing. Understand "rompre", "rompres", "séparer", "se séparer", "larguer" as rompreing.

A check rompreing rule:
	if _rompre is 1:
		clear screen;
		say "Chaque syllabe se détachait très distinctement, je parlais pourtant sans savoir où j'allais, il y avait de la mort dans tout ça, c'était trop fort pour moi, j'avais l'impression que c'était quelqu'un d'autre qui parlait à ma place.[paragraph break]";
		wait for any key;
		say "Je passais de reproche en reproche sans pouvoir me contrôler. Parfois il essayait de parler et je l'en empêchait.[paragraph break]";
		wait for any key;
		say "Plus je déblatérais et plus je me sentais misérable. La pile d'amphigouris que je distribuais sans fin avait eu raison du peu de respect que j'éprouvais encore envers moi-même.[paragraph break]";
		wait for any key;
		say "Je lui dis que je le détestais, je jurais déceler un sourire poindre au coin de ses lèvres.[paragraph break]";
		wait for any key;
		say "Je lui dis : '—C'est fini, tu me dégoûtes. Au début, je ne voulais rien, c'est toi qui est venu me chercher, et maintenant... Tu m'as rendue misérable et je te hais pour ça aussi.[paragraph break]";
		wait for any key;
		say "'Je veux que tu partes maintenant et j'espère ne plus jamais te revoir de ma vie.' [paragraph break]";
		wait for any key;
		say "'Va au diable ![paragraph break]'";
		wait for any key;
		say "Et c'est après ça que j'ai décidé de me suicider en me jetant d'un pont.[paragraph break]";
		end the story saying "Fin";
	if _rompre is 2:
		clear screen;
		say "M prit sa voix la plus solennelle, il prit un temps avant de parler, comme pour bien se souvenir de ce moment, alors que moi je n'avais qu'une envie, c'était de l'avoir déjà oublié.[paragraph break]";
		wait for any key;
		say "'—Je vais partir maintenant. Adieu I.[paragraph break]'";
		wait for any key;
		say "Et il rajouta cette phrase ridicule qu'il avait dû voir dans un film : 'J'espère que tu ne m'en voudras pas et qu'un jour tu me pardonneras.'[paragraph break]";
		wait for any key;
		say "Je pleurais comme jamais, mais ces derniers mots ont séché toutes mes larmes. Je n'avais qu'une envie, c'était de le massacrer. Je m'imaginais prendre le couteau le plus pointu...[paragraph break]";
		wait for any key;
		say "Me retourner pour lire l'effarement sur son visage, moi en train de sourire, lui tétanisé, il trébuche en reculant, je me jette sur lui, je...[paragraph break]";
		wait for any key;
		say "La porte claqua. Il disparut. Il ne me fallut pas beaucoup de temps pour me résoudre à me suicider.[paragraph break]";
		end the story saying "Fin";
	otherwise:
		say "Il n'est pas encore temps.";
		
	[--fuir--] [changer le système de fuite]
	
	[le personnage peut fuir à chaque moment]

fuiring is an action applying to nothing. Understand "fuir", "enfuir", "s'enfuir", "s'enfuire", "m'enfuir" as fuiring.

_fuir is a number variable. _fuir is 0.

A check fuiring rule :
	if _fuir is 1 :
		if a random chance of 70 in 100 succeeds:
			say "Bien qu'il était pour moi absolument hors de question de le quitter... Je n'eus pas le courage de rester plus longtemps...";
			end the story saying "...je suis partie à toute vitesse sans me retourner. J'ai couru à la mort jusqu'au bout de la ville, et je me suis écroulée sur un banc au fond d'un parc pour pleurer.[paragraph break]Quand je suis revenue, il était déjà parti depuis longtemps. Aujourd'hui, j'ai peur de le recroiser dans la rue.";
		otherwise:
			say "Par chance, je me reprenais : non ! Je ne fuirai pas cette fois !";
			now _dispute is 3;
	otherwise:
		if a random chance of 95 in 100 succeeds:
			say "[one of]Non ! Je ne manquerai pas de courage.[or]Je ne suis pas une lâche.[or]Fuir ? Mais pour aller où ?[or]Si j'étais partie à ce moment, que serait-il alors resté de ma dignité ?[cycling]";
		otherwise:
			say "J'eus un instant de faiblesse. C'était trop tard, intérieurement, je m'étais complètement effondrée. Il n'y avait plus rien à quoi me raccrocher.";
			end the story saying "...je partis à toute vitesse sans me retourner. J'ai couru à la mort jusqu'au bout de la ville, et je me suis écroulée sur un banc au fond d'un parc pour pleurer.[paragraph break]Quand je suis revenue, il était parti depuis longtemps. Depuis, j'ai peur de le recroiser dans la rue.";

	[rester]

restering is an action applying to nothing. Understand "rester", "reste", "restes", "stationner", "trainer" as restering.

A report restering rule :
	if _dispute2 is 1 :
		now _dispute2 is 3;
	otherwise: 
	 	say "[one of]Rester...[or]Si seulement il pouvait rester.[or]Je préférerais que les choses redeviennent comme avant.[or]Si j'en avais la possibilité, je ne rejouerais pas les événements de la même façon.[stopping]";

	[--soutenir--]

souteniring is an action applying to nothing. Understand "soutenir", "soutenais", "soutiens", "soutins" as souteniring.

A report souteniring rule :
 	say "[one of]Soutenir quoi ?...[or]N'était-ce pas moi, au fond, qui avait le plus besoin de soutien ?[stopping]";

	[--achever--]

achevering is an action applying to nothing. Understand "achever", "acheve", "achève", "achèves" as achevering.

A report achevering rule :
 	say "[one of]C'était bien l'exécution de notre histoire d'amour.[or]Chaque jour qui passerait ne serait plus désormais qu'une nouvelle occasion de perdre à tout jamais les souvenirs du temps que nous avons passé ensemble.[stopping]";

	[--pleurer--]
	
pleurering is an action applying to nothing. Understand "pleurer", "pleure", "pleurais", "pleurai" as pleurering.

A report pleurering rule :
 	say "Les larmes coulaient de mes yeux sans que j'y puisse rien faire.";


	[--armer--]
	
armering is an action applying to one thing. Understand "armer [something]" as armering.

A check armering rule when noun is not arbalète: instead say "[one of]Je ne pouvais pas armer ça.[or]La seule chose qu'il m'était éventuellement possible d'armer c'était l'arbalète que j'avais rangée dans le placard du salon.[stopping]";

A report armering rule : 
	say "Vous armez l'arbalète.";

	[--torturer--]
	
torturering is an action applying to nothing. Understand "torturer", "torture" as torturering.

A report torturering rule :
 	say "Certains sujets dans certains contextes sont particulièrement propices à l'imagination. J'avais l'impression de pouvoir me perdre des heures à rêver des scènes où je le torturais.";
	now _torture is 1;
	
	[--retourner--]
	
retournering is an action applying to nothing. Understand "retourner" as retournering.

A report retournering rule :
 	say "Vous retournez ? pourquoi ?";

Section 3 - Rooms & Props

[----rooms----]

la cuisine is a room. "Nous étions chez moi, c'était sans doute le lieu où nous avions passé la plus grande partie de notre temps ensemble.[paragraph break]Il se tenait debout devant moi, en se massant le coude avec un air effrayé. Il n'avait rien.[paragraph break]Mais je sais qu'à ce moment, je lui faisais peur. Il n'était pas courageux.[paragraph break]Que devais-je faire ?[paragraph break][bold type]Attendre[roman type], [bold type]aller dans le salon[roman type], [bold type]aller dans la chambre[roman type]...?". The printed name of la cuisine is "La cuisine".

poubelle is a room;

le salon is a room. It is south of cuisine. The description of le salon is "La lumière se repaissait insolemment de la partie du salon la plus proche de la baie vitrée.[paragraph break]Au fond de la pièce se tenait le [grand canapé], à côté une table basse en bois sur laquelle étaient posés toutes sortes de magazines sur le cinéma.[paragraph break]Et puis il y avait le [grand placard].";
The printed name of le salon is "Le salon".

grand canapé is a supporter. The description of grand canapé is "[one of]Ce n'est pas le plus confortable des canapés.[or]Je n'ai pas que des bons souvenirs sur ce canapé, pas seulement avec M. d'ailleurs.[or]Il y a eu un soir où j'ai trop bu et où je me suis retrouvée seule avec un connard que l'ami d'une amie avait ramené.[or]Mais il y a aussi eu de bons moments.[or]Avec M. par exemple, je me rappelle un après-midi. Il avait les mains douces.[or]Je ne sais pas si je l'aime où si je le déteste, ça fait trop longtemps qu'il traîne dans mes pieds. Il va falloir que je m'en débarrasse.[or]Je dois vraiment avoir peur d'affronter ma rupture, mon inconscient me pousse à examiner sans cesse ce pathétique canapé, mais si je continue comme ça, rien ne changera... C'est peut-être pour ça...[stopping]"

grand placard is a closed openable container in le salon. The description of grand placard is "[one of]Je n'ai pas tant de choses que ça à ranger, mais j'aime l'idée d'avoir de grands placards vides.[or]Or, il est vrai que cette fois, vu l'achat effectué, ce n'était pas plus mal d'avoir de la place, ne serait-ce que pour la cacher.[or]M. aurait pu me prendre pour une folle s'il l'avait découverte. En tout cas, il ne serait pas venu, me connaissant, il aurait eu trop peur.[or]Peut-être aurait-il eu raison d'ailleurs, tout le monde n'achète pas ce genre d'arme.[or]Qui d'autre commande sur internet une arbalète pour pouvoir menacer son amant ? Même si c'est une [bold type]arme[roman type]élégante.[or]Enfin, le menacer... Je ne l'avais pas encore fait... Pas encore.[stopping]".

arbalète is an object. The description of arbalète is "Quelle belle arme. Il suffit d'un petit déclic pour que tout se règle dans le plus grand silence.".



[tout une petite "histoire" qui s'ajoute si le lecteur décide d'observer la chambre]

la chambre is a room. the description of la chambre is "[one of]La pièce s'est éclairée quand il a tourné l'interrupteur.[or]Avant j'aimais beaucoup ma chambre, même si comme dans toutes les chambres parisiennes, il était difficile d'y étendre les bras sans en toucher un mur.[or]Combien d'heures ai-je passées sur ce lit à lire ce qui me passait sous la main ?[or]Zombies, Rastignacs et médecins de campagne, intelligence artificielle protectrice des mondes, créatures tapies dans l'ombre, rencontres avec les rejetons de Nyarlatototep, Porsthmouth...[or] ...boutons entourés de cheveux, correspondances entre frères, entre amants, accusations incompréhensibles, arpentages...[or]...promenades sur la place Tian'anmen, descente au travers des sept étages d'un hôpital, la mythologie littéraire d'un prêtre homosexuel au Chili...[or]Tout ce temps déjà passé...[stopping]".
The printed name of la chambre is "La chambre".

Instead of going when the player is in la chambre:
	say "Ce n'était pas le moment pour moi de partir. Nous devions [bold type]parler[roman type]." [définir une règle parler qui enclencherait le dialogue]

Instead of talking to someone when the player is in la chambre:
	now _dispute is 1;
	
Instead of talking to someone when the player is in le salon:
	now _dispute is 1;
	
[---props----]

de l'espoir is an object. The player carries de l'espoir.

la table is a supporter.
le verre is a container.

homme is a person.Understand "m/M" as homme.The printed name of homme is "M". The description of homme is "".

assiette is an object.The initial appearance of assiette is "Par terre l'[bold type]assiette[roman type] en mille morceaux m'obligeait à regarder la réalité en face. Notre couple était foutu, définitivement réduit en miettes.".

[jeter l'assiette, récupérer le fragment]

morceau is a object.

Section 4 - Scène Scene1

[Scene1 est la scène qui se passe dans la cuisine]

Scene1 is a scene. Scene1 begins when compteur is 1. Scene1 ends when Scene2 begins. Scene2 ends when Bout begins.

Instead of waiting during Scene1:
	say "[one of]Tout ça, c'était avant que j'emmène des inconnus coucher à la maison. Aujourd'hui je ne suis plus tout à fait sûre d'être encore la même personne.[or]Aujourd'hui je me sens bien incapable, quand j'y repense, de savoir quelle décision il aurait été préférable de prendre.[or]J'ai toujours eu peur que le temps me conduise à devenir une moins belle personne.[or]Est-ce que ce que j'ai fait une erreur ?[or]Aurait-il fallu agir autrement ?[stopping]";

When Scene1 begins:
	now assiette is in cuisine;
	say "Je ne pouvais pas faire ça. Ou bien ? Je ne savais plus comment réagir, j'hésitais entre [bold type]ramasser[roman type] l'[bold type]assiette[roman type] ou [bold type]partir[roman type] pleurer dans ma chambre.";
	now the description of la cuisine is "Je regardais autour de moi et je me demandais ce que j'allais faire...";
	now la table is in la cuisine;
	now le verre is on la table;
	now homme is in cuisine;
	
Instead of exiting when the player is in cuisine during Scene1:
	if a random chance of 50 in 100 succeeds: [remettre à 70]
		say "Je quittai précipitamment la cuisine pour me réfugier dans la chambre et me jetai sur le lit. J'enfouis ma tête dans l'oreiller pour pleurer.[paragraph break] L'obscurité et le silence m'entourèrent un instant, je me sentis apaisée. Je m'aperçus qu'il m'avait suivie et qu'il se tenait à côté, debout à l'entrée de la chambre.[paragraph break]Un moment se passa sans qu'aucun de nous deux se décide à [bold type]parler[roman type].";
		now the player is in la chambre;
		now homme is in la chambre;
	otherwise:
		say "Nous passâmes dans le salon. J'avais l'impression qu'on allait exécuter quelqu'un.[paragraph break]Abattue, je sombrai dans le fauteuil. Il se tenait debout devant moi en m'écrasant de sa hauteur.[paragraph break]";
		wait for any key;
		say "J'étais terrifiée. Il était temps de [bold type]parler[roman type].";
		now the player is in le salon;
		now homme is in le salon;

[exactement comme plus haut pour que le verbe go fasse le même effet que exit]

Instead of exiting when the player is in cuisine during Scene1:
	if a random chance of 50 in 100 succeeds: 
		say "Je quittai précipitamment la cuisine pour me réfugier dans la chambre et me jetai sur le lit. J'enfouis ma tête dans l'oreiller pour pleurer.[paragraph break] L'obscurité et le silence m'entourèrent un instant, je me sentis apaisée. Je m'aperçus qu'il m'avait suivie et qu'il se tenait à côté, debout à l'entrée de la chambre.[paragraph break]Un moment se passa sans qu'aucun de nous deux se décide à [bold type]parler[roman type].";
		now the player is in la chambre;
		now homme is in la chambre;
	otherwise:
		say "Nous passâmes dans le salon. J'avais l'impression qu'on allait exécuter quelqu'un.[paragraph break]Abattue, je sombrai dans le fauteuil. Il se tenait debout devant moi en m'écrasant de sa hauteur.[paragraph break]";
		wait for any key;
		say "J'étais terrifiée. Il était temps de [bold type]parler[roman type].";
		now the player is in le salon;
		now homme is in le salon;

	
Instead of taking assiette for the first time during Scene1:
	say "Je récupérai l'un des morceaux en forme de triangle, que je saisissais à pleine main. Je ne pouvais m'empêcher de fixer le cou de B. Il me regardait inquiet, en se demandant pourquoi je n'avais pris qu'un bout de l'assiette. Et plus particulièrement le [morceau] qui semblait le plus pointu ?[paragraph break]";
	now assiette is in poubelle;
	now the player carries morceau;
	now _bout is 1;
	now the initial appearance of assiette is "Il manque le fragment que vous avez récupéré.";
	
Instead of dropping morceau:
	say "Je mettais le fragment à la poubelle. Je sentais qu'il était rassuré. Il me connaissait suffisamment pour savoir que je n'avais pas de limites.";
	now morceau is in poubelle;
	now _dispute is 1;


Section 5 - Scene Bout

Bout is a scene. Bout begins when _bout is 1. 
When Bout begins :
	say "'—Qu'est-ce que tu fais avec ce morceau d'assiette ? Pourquoi tu me regardes comme ça ?[paragraph break]'";	
	now homme is in cuisine;
	say "Je [bold type]soutenais[roman type] son regard.";
	
Instead of criering during Bout:
	say "Prise d'une rage soudaine, je criais en me jetant sur lui pour le frapper.";
	end the story saying "D'abord, il essaya de me contenir puis finit par me repousser. Il me regarda un instant, j'eus l'impression qu'il voulait me dire quelque chose, mais il me tourna le dos et franchit la porte sans se retourner et sans dire un mot.";

Instead of souteniring during Bout:
	say "[one of]Il me suffisait de me jeter sur lui pour mettre un terme à tout ça. Je n'avais qu'à le [bold type]frapper[roman type]. Je pouvais aussi plus rationnellement [bold type]laisser le morceau[roman type] et passer à autre chose.[or]Je voulais [bold type]crier[roman type].[cycling]".
	
Instead of attacking during Bout: 
	if a random chance of 10 in 100 succeeds:
		say "Je ne pouvais pas résister à la tentation, ma main se leva lentement et je me jetais sur lui en visant sa carotide.[paragraph break]"; [10% de chance de tuer le personnage]
		wait for any key;
		say "J'atteignis ma cible.";
		wait for any key;
		clear screen;
		say "Le sang gicla partout. Je n'oublierai jamais son râle d'agonie.";
		wait for any key;		
		say "Il s'effondra sur le sol. Ses jambes donnaient de grands coups dans l'air.";
		wait for any key;
		say "Le sang coulait sur le parquet, je reculai jusqu'à ma porte d'entrée.";
		end the story;
	otherwise:
		say "Je ne pouvais pas résister à la tentation, ma main se leva lentement et je me jetai sur lui en visant sa carotide. Mais je ne fus pas assez rapide, je n'oublierai jamais son expression, il avait les yeux grand ouverts et m'avait attrapé le poignet, il m'obligea à lâcher mon arme et me jetai sur le côté.";
		end the story;


Section 6 - Scène Scene2

[Scene2 est la scène qui se passe dans la chambre]

Scene2 is a scene. Scene2 begins when the player is in la chambre for the first time.

Instead of achevering during Scene2 :
	now _dispute2 is 1; [déclenche le début de la scène Dialogue2]
	

Section 7 - Scène Dialogue 

[Dialogue = la scène]

Dialogue is a scene. Dialogue begins when _dispute is 1.

[-------------------------compteur is 1-------------------------]

When Dialogue begins:
	say "Quelque chose de tragique ne parvenait pas à tout à fait quitter la pièce : '—Ça y est je me suis calmée, nous pouvons continuer à nous dire ce que nous avons à nous dire.'.[paragraph break]";
	say "Était-ce à [bold type]mon tour[roman type] de prendre les choses en main ? Ou valait-il mieux que je le laisse [bold type]achever[roman type] notre couple ?".

After reading a command during Dialogue :
	if _dispute is 1:
		if the player's command includes "mon tour":
			now _dispute is 2;
			say "Je ne le lui laissai pas de répit et j'enchaînai aussitôt.[paragraph break]'— Ce dont j'aimerais que tu te rendes compte, c'est de l'étendue de ce que tu vas gâcher. Ce que tu désires, et même si tu le refuses, est simple, ce n'est que l'apparence d'une relation : dès que ça se creuse, que nous commençons à bâtir quelque chose de sérieux, [bold type]tu pars[roman type].'[paragraph break]";
			reject the player's command;
			
			
Instead of achevering during Dialogue:
	say "Début de Dialogue 2";
	now _dispute2 is 1;


[il faudrait que j'ajoute une action qui enclenche la deuxième partie de la dispute]

[-------------------------compteur is 2-------------------------]

After reading a command during Dialogue :
	if _dispute is 2:
		if the player's command includes "tu pars":
			say "'Depuis des semaines maintenant, tu n'as pas cessé de laisser transparaître tes doutes, nous en avons parlé, je t'ai écouté et j'ai essayé de tout mon possible de te rassurer en te montrant à quel point [bold type]notre histoire compte[roman type].'[paragraph break]";
			reject the player's command;
			
After reading a command during Dialogue :
	if _dispute is 2:
		if the player's command includes "histoire compte":
			say "Pourquoi ne pas accepter qu'au fond, ce que tu souhaites vraiment n'est pas impossible et ne dépend pas que de toi. Ou plutôt, en dépend [bold type]autrement[roman type] que ce que tu crois.[paragraph break]";
			reject the player's command;

[fin alternative]

Before reading a command during Dialogue :
	if _dispute is 2:
		if the player's command includes "notre histoire ne compte pas":
			say "Au moment où vous vous entendez prononcer les mots 'notre histoire compte', vous vous rendez compte à quel point la formule sonne creux. Vous sentez une légère nausée monter et vous vous dites que vous ne succomberez pas au pathétique qui consisterait à vous attacher de toutes vos forces à un individu dont la seule envie est de se séparer de vous. [paragraph break]Il est temps de [bold type]rompre[roman type].";
			now _rompre is 1;
			

After reading a command during Dialogue :
	if _dispute is 2:
		if the player's command includes "autrement":
			say "Tu penses vouloir sincèrement t'investir dans une relation mais tu remarques qu'en même temps, dès que tu t'y es plongée, tu t'y enlises. Dès lors, tu n'as plus qu'une envie, c'est t'en dégager, et tu ne trouves pas le moyen de t'empêcher de [bold type]partir[roman type].[paragraph break]";
			reject the player's command;
			
After reading a command during Dialogue :
	if _dispute is 2:
		if the player's command includes "partir":
			say "Au fond de toi, tu reproches à l'autre ne pas avoir la force nécessaire pour te convaincre de rester.[line break]Mais ce que tu ne comprends pas, c'est que te forcer à rester ne sera jamais dans ton intérêt, que tu attends juste de te faire écraser, ou d'écraser, et que ni l'un, ni l'autre ne sont des [bold type]moyens d'aimer[roman type].";
			reject the player's command;
			
After reading a command during Dialogue :
	if _dispute is 2:
		if the player's command includes "moyens d'aimer":
			say "Je marquai une pause. Et soudain, je me rendis compte que je n'avais rien d'autre à dire. C'était profondément effrayant mais il était temps de [bold type]rompre[roman type] pour achever toute cette histoire.";
			now _rompre is 1;
			reject the player's command;



[------------------------- All turns -------------------------]

After reading a command during Dialogue:
	if the player's command includes "regarde moi":
		say "'Tu pourrais avoir la décence de me regarder lorsque nous parlons.'[line break]Il leva les yeux à nouveau vers moi.[paragraph break]'—Je t'écoute.'";
		reject the player's command;

Section - Dialogue2

Dialogue2 is a scene. Dialogue2 begins when _dispute2 is 1.

	[_dispute2 is 1] [Le début du dialogue où c'est M. qu'on laisse parler]

When Dialogue2 begins :
	clear screen;
	say "Je me souviens très bien comment ça s'est passé.[paragraph break]";
	wait for any key;
	say "D'abord, il y a eu une sorte de flottement.[paragraph break]";
	wait for any key; 
	say "C'était horrible d'être là, ça n'en finissait pas. Aucun de nous n'osait se regarder.[paragraph break]";
	wait for any key;
	say "Sans nous toucher ni même nous parler, simplement en nous tenant là, l'un en face de l'autre, à distance, nous nous déchirions comme deux morceaux de papier de verre frottés l'un contre l'autre.[paragraph break]";
	wait for any key;
	say "Durant tout ce temps, qui n'en finissait pas de ne pas passer, je ne rêvais que d'une chose, [bold type]fuir[roman type]. Chaque seconde me saignait, et j'employais toutes mes forces à tenir bon et à [bold type]rester[roman type].[paragraph break]";
	now _fuir is 1;
	
	[_dispute2 is 2] [??fuir??]

Dispute2b is a scene. Dispute2b begins when _dispute2 is 2.

When Dispute2b begins:
	say "Mais c'était plus fort que moi, je n'y tenais plus...";


	[_dispute2 is 3] [La partie du dialogue où l'on choisit de rester pour écouter M sans fuir ]
	

Dispute2c is a scene. Dispute2c begins when _dispute2 is 3.

When Dispute2c begins:
	clear the screen;
	say "Il s'est raclé la gorge et il a dit ces mots, je m'en souviens bien, il a commencé par mon prénom :[paragraph break]";
	wait for any key;
	say "—I,[paragraph break]";
	wait for any key;
	say "J'ai besoin de temps, il y a trop de questions, d'incertitudes. La seule chose dont je suis sûr et c'est malheureux, c'est que tout ce que nous faisons ensemble ces derniers temps ne nous mène qu'à des disputes.[paragraph break] ";
	wait for any key;
	say "Si nous continuons, nous ne réussirons qu'à nous gâcher et à [bold type]nous faire du mal[roman type].";

[cette partie fait bugguer et empêche qu'on entre des commandes]
After reading a command during Dispute2c :
	if _dispute2 is 3:
		if the player's command includes "nous faire du mal":
			say "—Oui, c'est sûr, nous nous détruisons à petit feu. C'est malheureux mais pour y échapper, il n'y a qu'[bold type]un seul moyen[roman type], c'est de nous séparer.";
			reject the player's command;
		if the player's command includes "seul moyen":
			clear screen;
			say "'I,'[paragraph break]"; [reprendre cette partie et l'intégrer dans Dialogue 2, la rupture est pour la suite]
			wait for any key;
			say "'Tu es une personne [bold type]formidable[roman type], nous avons passé tant de bons moments ensemble, tu as su m'aimer malgré mes défauts.[paragraph break]' Je demeurais [bold type]muette[roman type].";
			reject the player's command;	
		if the player's command includes "formidable":
			say "C'était horrible et même temps fascinant de savoir que derrière tous ces grands airs, ces beaux mots et ces preuves de considération, il se foutait complètement de ma gueule.[paragraph break]Je l'observais, toujours aussi [bold type]muette[roman type].";
			reject the player's command;		
		if the player's command includes "muette":
			say "'Moi, je ne suis pas comme toi, je ne suis jamais satisfait, j'ai toujours besoin de quelque chose de nouveau. C'est débile, parce que je sais que ça n'aura pas de fin mais à chaque fois, c'est plus fort que moi, je me sens tellement enlisé, insatisfait.'[paragraph break]";
			wait for any key;
			say "'L'essentiel a disparu. C'est trop tard. Une armée de doutes a déjà surgi, je n'en finis plus de me poser des questions. Et j'en finis par t'accuser, toi, d'être en fait la personne qui fait surgir tous ces problèmes.'[paragraph break]";
			wait for any key;
			say "'Alors je me mets à te détester. J'y peux rien, c'est inconscient, j'ai beau me raisonner, tout en toi m'indispose, ta façon de faire du bruit en mangeant le matin, tes sourires forcés, je ne supporte [bold type]plus rien[roman type].'";
			reject the player's command;
		if the player's command includes "plus rien":
			say "'C'est peut-être dégueulasse mais au fond de moi, j'ai l'impression que [bold type]c'est de ta faute[roman type], que c'est toi qui est incapable de me sortir de mes doutes, que si nous vivions le grand amour que tu me vends, ils seraient balayés naturellement sans que j'ai à faire d'efforts, que le simple fait de te voir me [bold type]rassurerait[roman type].'";
			reject the player's command;
		if the player's command includes "ta faute":
			say "Comment ne pas tiquer ?!";
			wait for any key;
			say "'—De ma faute ?!' Je ne criais pas, je hurlais...'Comment tu peux oser dire que c'est de ma faute alors que j'ai [bold type]tout fait pour toi[roman type] !'[paragraph break]";
			wait for any key;
			say "'Jusqu'à preuve du contraire, ce n'est pas moi qui suis en train de te quitter !'";
			reject the player's command;		
		if the player's command includes "pour toi":
			now _rompre  is 1;	
			say "'Tu prends tes grands airs et tu crois que tu peux tout balancer, mais tu penses sérieusement à ce que tu dis ?! Tu te rends compte à quel point tu es irresponsable ?[paragraph break]";
			say "Tu sais quoi... Tu me dégoûtes tellement que c'est moi qui vais te [bold type]larguer[roman type], espèce de sale connard, tu vas voir comme c'est ma faute !'"; [redevient une rupture active]
			reject the player's command;	
		if the player's command includes "rassurerait":
			say "'Si je ne pars pas maintenant, je finirai par te tromper, parce que je voudrai te faire du mal, parce que peut-être que quelque part, je suis jaloux et malheureux d'être celui qui n'a pas la force de [bold type]dépasser ces doutes[roman type].'";
			reject the player's command;
		[n'active pas la fin]
		if the player's command includes "ces doutes":
			clear screen;
			say "'[bold type]Ma chère I[roman type],[paragraph break]'";
			wait for any key;
			say "'C'est trop tard maintenant, j'ai tout gâché. C'est fini entre nous. Il est temps de nous [bold type]séparer[roman type].'";
			now _rompre is 2;		
			reject the player's command;	
		if the player's command includes "Ma chère":
			clear screen;
			say "'—Mon cher M,'[paragraph break]";
			wait for any key;
			say "'J'en ai assez que tu me prennes pour une demeurée en m'appelant par mon prénom.'";
			wait for any key; [le vrai texte pour rompre 2]
			say "'Si tu pouvais cesser j'en serais ravie !'";
			wait for any key;	
			say "Nous [bold type]séparer[roman type]...";	
			now _rompre is 2;	
			reject the player's command;	

Section - Scene3 

[scène dans le salon]

Scene3 is a scene. Scene3 begins when the player is in le salon for the first time.

Instead of achevering during Scene3 :
	now _dispute2 is 1; [déclenche le début de la scène Dialogue2]
	
[Scène de l'arbalète]

After reading a command during Scene3 :
	if the player's command includes "arme":
		say "Oui, elle était bien là, je l'avais déjà soigneusement sortie de son emballage. J'avais envie de [bold type]prendre l'arbalète[roman type] en main. [paragraph break]M. se demandait ce que je faisais, c'est sûr qu'il préférerait que nous nous remettions à [bold type]parler[roman type].";
		now grand placard is open;
		now arbalète is in grand placard;
		reject the player's command;
		
Instead of taking arbalète:
	say "Je prenai l'arme en main, calmement, en profitant de chaque seconde. C'était vraiment un bel objet. Qui pesait assez lourd mais qui se portait facilement. Je carressai la corde avec mon index.[paragraph break]";
	wait for any key;
	say "M. faisait les cent pas dans mon dos, je ne savais pas s'il était agacé par mon attitude ou si au contraire, absorbé dans ses propres pensées, il m'avait complètement oubliée. Peut-être cherchait-il au fond de son cerveau, la formule magique qui me ferait miraculeusement sortir de sa vie.[paragraph break]";
	wait for any key;
	say "Il n'était pas encore temps que je me retourne, il restait à [bold type]armer l'arbalète[roman type] d'un carreau.";
	now arbalète is carried by the player;

carreau is an object. 

Instead armering arbalète :
	now carreau is in grand placard;
	now carreau is carried by the player;	
	say "J'avais pu profiter de quelques après-midis et soirées où il ne venait pas pour m'entraîner, la manœuvre était devenue simple.[paragraph break]";
	wait for any key;
	say "C'était le grand moment, lorsqu'il serait temps de se [bold type]retourner[roman type], je n'aurai qu'une chance et pas le droit d'hésiter. Je viserai le cœur.";

Instead of retournering :
	if the player carries carreau:
		say "Je ne tremblais pas, je ressentais un intense plaisir, c'était terrifiant. Quand je me retournai, je perçus une lueur d'effroi parcourir son regard. Tout se passait si vite mais il avait le temps de comprendre.[paragraph break]";
		wait for any key;
		say "A peine avais-je appuyé sur la gâchette que la flèche s'était nichée dans sa poitrine. Le blanc de sa chemise s'empourpra très rapidement. Il devenait blême.[paragraph break]";
		wait for any key;
		say "Je regardais, fascinée, sans oser bouger. Derrière moi je sentais le placard froid, il s'effondra sur le ventre en tordant le carreau.[paragraph break]";
		wait for any key;
		say "Il ne faisait pas beaucoup de bruit, son sang coulait sur le parquet, ses jambes remuaient pendant qu'il émettait de petits râles.[paragraph break]"; 
		clear screen;
		say "Le lendemain soir, après m'être débarrassée du corps et avoir nettoyé l'appartement, je décidai de marcher un peu pour profiter du calme de la nuit.[paragraph break]";
		wait for any key;
		say "J'arrivai au milieu du pont, je venais juste de me débarrasser du carreau. C'est là que nous nous sommes rencontrés.[paragraph break]";
		end the story saying "Fin";
	otherwise :
		say "Pourquoi se retourner?";	
		


	
		
[à la fin, elle va jeter la flèche de l'arbalète dans la Seine en fait]


Section - The story

When play begins:
	say "C'est à ce moment qu'il s'est cogné contre le placard en évitant l'assiette que tu lui jetais dessus ? [paragraph break]";
	wait for any key;
	say "— Oui, j'étais furieuse, je n'avais plus aucun contrôle. Sur le coup, je n'avais qu'une envie, c'était qu'il disparaisse.[paragraph break] ";
	wait for any key;
	say "—Où étiez vous ?[paragraph break]";
	wait for any key;
	say "—Ici dans l'appartement.[paragraph break]";
	wait for any key;
	say "—Tu te souviens de beaucoup de petites détails.[paragraph break]";
	wait for any key;
	say "Je le regardais, incrédule... Comment pouvait-il penser un instant que j'avais pu oublier quoi que ce soit. Quand B. m'avait quitté, c'était la fin du monde.[paragraph break] Je me suis accrochée au moindre détail pour essayer de le faire rester.[paragraph break]";
	wait for any key;
	clear screen;

[au premier tour, le personnage voit pièce, il peut réaliser n'importe quelle action, elle ne s'accomplira pas, il faut faire quelque chose]
Instead of doing anything when the player is in cuisine for the second time : 
	if compteur is 0:
		now compteur is 1;
		stop the action;

After reading a command when the player is in cuisine :
	if the player's command includes "prendre" :
		if compteur is 0:		
			say "A ce moment, je me sentais parfaitement molle et passive, j'hésitai entre [bold type]attendre[roman type] ou [bold type]regarder[roman type].";
			now compteur is 1;
			stop the action;
			
After reading a command when the player is in cuisine :
	if the player's command includes "aller" :
		if compteur is 0:		
			say "À ce moment, je me sentais parfaitement molle et passive, j'hésitai entre [bold type]attendre[roman type] ou [bold type]regarder[roman type].";
			now compteur is 1;
			stop the action;

After taking le verre:
	if a random chance of 1 in 4 succeeds:
		say "Je ne pus résister à l'envie de prendre le verre pour lui jeter à la figure. Je visai avec précision : le verre frappa de plein fouet son arcade sourcilière et il se mit à saigner. Plein de rage, il sortit en jurant et en claquant la porte.";
		end the story saying "Je me penchai par la fenêtre et l'aperçus en train de s'éloigner en bas. Il disparut comme un animal blessé en semant derrière lui des goutelettes de sang.";
	otherwise:
		say "Je ne pus résister à l'envie de prendre le verre pour lui jeter à la figure. Il l'évita de justesse et le verre vint s'écraser contre un mur. C'en était définitivement trop pour lui. Il tourna les talons et disparut en claquant la porte.";
		end the story saying "Je ne l'ai plus jamais revu, j'aurai aimé savoir mieux viser.";

Instead of kissing homme :
	if a random chance of 10 in 100 succeeds:
		say "Je n'ai pas pu résister, je me suis approché de lui en le regardant dans les yeux et nous nous sommes embrassés. Nous avons passé la nuit collés l'un à l'autre et lorsque je me suis réveillée le lendemain matin, il avait disparu.";
		end the story saying "Depuis, je ne l'ai plus jamais revu.";
	otherwise:
		say "Il était absolument hors de question que je cède...";


Instead of going to le salon:
	say "Quitter le salon ? mais pour aller où ?";

Instead of waiting during Scene2:
	say "[one of]Attendre alors qu'il est là, tout proche, dans la chambre, ce n'est pas facile...[or]Je profitai de cette pause pour le regarder, j'étais incapable de dire si je le trouvais beau ou non...[cycling]";


Section - Commandes

[--général--]

After reading a command:
	if the player's command includes "connard":
		say "Je ne pouvais me résoudre à être aussi insultante.";
		reject the player's command.
		
After reading a command:
	if the player's command includes "suicider" :
		say "Non. Pas maintenant.";
		reject the player's command;
		
[--cuisine--]

After reading a command when the player is in cuisine :
	if the player's command includes "aller dans le salon":
		say "Je me rendis dans le salon.[paragraph break][homme] me suivit.";
		now the player is in le salon;
		now homme is in le salon;
		reject the player's command;
	if the player's command includes "aller au salon":
		say "Je me rendis dans le salon.[paragraph break][homme] me suivit.";
		now the player is in le salon;
		now homme is in le salon;
		reject the player's command;	

After reading a command when the player is not in cuisine:
	if the player's command includes "aller dans la cuisine" :
		say "Je me rendis dans la cuisine.";
		now homme is in cuisine;
		reject the player's command;
	
After reading a command when the player is in cuisine:
	if the player's command includes "aller dans la cuisine" :
		say "[one of]Étant déjà dans la cuisine, il m'était difficile de m'y rendre à nouveau.[or]La commande impliquait peut-être tacitement que je quitte la cuisine pour y revenir, mais dans ce cas, il m'eut été plus commode de directement me demander d'aller dans le salon.[or]Ou peut-être s'agissait-il dans ce cas de quitter métaphoriquement la cuisine, en quelque sorte de [bold type]rêver[roman type]. [then purely at random]";
		now homme is in cuisine;
		reject the player's command;	
				
[--salon--]

After reading a command when the player is in le salon:
	if the player's command includes "aller dans le salon":
		say "Mais j'étais déjà dans le salon.";
		reject the player's command;
		
Section - Torture (Scène cachée)
		
[--scène torture | à ranger--]

Instead of thinking :
	say "J'avais beau chercher, seules des scènes de [bold type]torture[roman type] me venaient à l'esprit.";
	
Menthol is a scene. Menthol begins when _torture is 1. Menthol ends when _torture is 2.

When Menthol begins:
	wait for any key;
	say "Il était assis sur une chaise dans une pièce vide. Les pieds et les mains attachés.";
	wait for any key;
	say "Je regardais ses [bold type]ongles[roman type], il avait de belles [bold type]oreilles[roman type], j'aimais aussi beaucoup ses [bold type]yeux[roman type].[paragraph break]";
	wait for any key;
	say "En même temps, malgré le plaisir certain que ce genre de scène me faisait éprouver, je me sentais un peu coupable et je me disais que c'était peut-être le moment de revenir à la tendre [bold type]réalité[roman type].[paragraph break]"; [comment revenir vers Dialogue 1]

After reading a command during Menthol:
	if the player's command includes "ongles":
		say "Enlever l'un après l'autre les ongles du sujet pour le faire souffrir sans pour autant menacer ses fonctions vitales, est-ce que ça correspondait vraiment à mon style de torture ?[paragraph break]";
		say "J'avais l'impression d'être sur quelque chose d'un peu mou, qu'après tout, avec un peu de self-control, l'expérience ne le marquerait pas d'une façon suffisamment durable.[paragraph break]";
		wait for any key;
		say "Peut-être qu'en ajoutant ensuite de l'acide sur la chair mise à nu ? Ou des insectes venimeux ? Des aiguilles ?[paragraph break]";
		wait for any key;
		say "Ma propre noirceur m'inquiétait, je décidai de remonter immédiatement à la surface pour revenir à la [bold type]réalité[roman type].";
		reject the player's command;
	

After reading a command during Menthol:
	if the player's command includes "oreilles":
		say "J'aurais bien aimé mettre des mille-pattes à l'intérieur de ses oreilles, qu'il sente l'insecte le [bold type]ronger[roman type] en dedans.";
		wait for any key;
		say "Ma propre noirceur m'inquiétait, j'hésitai à remonter à la surface pour rejoindre la [bold type]réalité[roman type].";
		reject the player's command;

After reading a command during Menthol:
	if the player's command includes "oreilles":
		say "Décidemment je n'avais pas la force d'aller plus loin, les insectes me dégoutaient, moi la première.[paragraph break]";
		wait for any key;
		say "Imaginer ces petites bêtes lui percer les tympans et se noyer dans son sang me rendait nerveuse.[paragraph break]";
		wait for any key;
		say "Je remontais à la [bold type]réalité[roman type].";
		reject the player's command;


After reading a command during Menthol:
	if the player's command includes "yeux":
		say "Il est toujours détestable d'imaginer les [bold type]blessures[roman type] qu'on appliquerait aux yeux. Il y a une sorte de tabou profond qui fait de ces organes un élément intouchable : rien ne doit pouvoir blesser ce par quoi le monde nous est perceptible.[paragraph break]";
		wait for any key;
		say "Même dans ce moment, pourtant largement extrême, j'hésitai. Ne valait-il pas mieux remonter à la surface ?[paragraph break]";
		reject the player's command;

After reading a command during Menthol:
	if the player's command includes "blessures":
		say "Cela étant, le monde est perceptible par les yeux seulement pour les voyants.[paragraph break]";
		wait for any key;
		say "Et peut-être certains d'entre vous ont déjà cessé de l'être parce qu'ils ont eu le déplaisir de vouloir quitter quelqu'un comme moi, qui les aurait attachés à un chaise pour leur [bold type]crever[roman type] les yeux ?[paragraph break]";
		wait for any key;
		say "J'imagine que dans ce cas, ils doivent être d'autant plus heureux de me trouver ici. Et que pour rien au monde ils ne retourneraient à leur sinistre [bold type]réalité[roman type].";
		reject the player's command;
		
After reading a command during Menthol:
	if the player's command includes "crever":
		say "Il était évident que mon imagination m'aurait permis d'aller encore beaucoup plus loin, mais il y avait une sorte de frontière, que je ne me résolvais pas à franchir.[paragraph break]";
		wait for any key;
		say "Je revenais à la [bold type]réalité[roman type].";
		reject the player's command;

After reading a command during Menthol:
	if the player's command includes "crever":
		say "Il était évident que mon imagination m'aurait permis d'aller encore beaucoup plus loin, mais il y avait une sorte de frontière, que je ne me résolvais pas à franchir.[paragraph break]";
		wait for any key;
		say "Je revenais à la [bold type]réalité[roman type].";
		reject the player's command;

After reading a command during Menthol:
	if the player's command includes "frontière":
		say "Lecteur, tu vas trop loin, laisse cette pauvre jeune fille retourner à sa [bold type]réalité[bold type].";
		reject the player's command;
		
After reading a command during Menthol:
	if the player's command includes "réalité":
		now _dispute is 1;
		now _torture is 2;
		say "Il me fallait quelques instants pour reprendre mes esprits et [bold type]regarder[roman type] autour de moi.";
		reject the player's command;


Section - Test

[...]
Test me with "aller dans le salon/attendre/ramasser assiette/soutenir/laisser morceau/achever/";

[la fin avec la fuite dans Dialogue2]
Test fuir with "aller dans le salon/attendre/ramasser assiette/soutenir/laisser morceau/achever/fuir"; 

[aller dans la chambre]
Test chambre with "aller dans le salon/attendre/partir/";

[rupture active]
Test rupture1 with "";
		
[rupture passive]
Test rupture2 with "aller dans le salon/ attendre/ ramasser assiette / soutenir/ laisser le morceau/achever/rester/ nous faire du mal/ un seul moyen/muette/plus rien/rassurerait/dépasser ces doutes";
		

[rupture passive alternative]
Test rupture2b with "aller dans le salon/ attendre/ ramasser assiette / soutenir/ laisser le morceau/achever/rester/ nous faire du mal/ un seul moyen/formidable/muette/plus rien/c'est de ta faute/tout fait pour toi";

[chemin de l'arbalète]
test arme with "aller dans le salon/attendre/partir/x placard/x placard /x placard/x placard/x placard/arme/prendre arbalète/armer l'arbalète";


