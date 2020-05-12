export default {

    actions: {
        cancel: 'Annuler',
        confirm: 'Confirmer',
        delete: 'Supprimer',
        save: 'Enregistrer',
    },

    figurine: {
        armies: {
            aragorn: 'Aragorn',
            boromir: 'Boromir',
            elf: 'Elfes',
            eomer: 'Eomer',
            faramir: 'Faramir',
            frodo: 'Frodon Sacquet',
            gandalf: 'Gandalf le Gris',
            gimli: 'Gimli',
            grishnákh: 'Grishnak',
            legolas: 'Legolas',
            lurz: 'Lurz',
            merry: 'Meriadoc Brandebouc',
            'goblin-captain': 'Capitaine gobelins',
            'goblin-warrior': 'Guerriers gobelins',
            'minas-tirith': 'Guerriers de Minas Tirith',
            numenor: 'Númenor',
            pippin: 'Peregrin Touque',
            'orc-captain': 'Capitaine orques',
            'orc-warrior': 'Guerrier orques',
            ringwraith: 'Esprit Servant de l\'Anneau',
            'rohirrim-rider': 'Cavaliers rohirrims',
            'rohirrim-warrior': 'Guerriers rohirrims',
            sam: 'Sam Gamegie',
            troll: 'Troll',
            saruman: 'Saroumane le Blanc',
            ugluk: 'Uglúk',
            'uruk-hai-captain': 'Capitaine uruk-haï',
            'uruk-hai-warrior': 'Guerriers uruk-haï',
            watcher: "Le guetteur de l'eau",
            'witch-king': 'Le Roi-Sorcier',
        },
        equipments: {
            '2hand-axe': 'Hache à deux mains',
            'elf-bow': 'Arc elfique',
            horn: 'Cor',
            'human-bow': 'Arc',
            javelin: 'Javelot',
            lance: 'Lance',
            'orc-bow': 'Arc orc',
            palantir: 'Palentír',
            pike: 'Pique',
            powerstick: 'Bâton magique',
            ring: 'Anneau unique',
            shield: 'Bouclier',
            sword: 'Épée à deux mains',
            'throwing-axe': 'Hache de lancer',
        },
        forces: {
            evil: 'Le Mal',
            good: 'Le Bien',
        },
        index: {
            title: 'Armées',
        },
        mounts: {
            horse: 'Cheval',
        },
        regions: {
            arnor: "L'Arnor",
            shire: 'La Comté',
            gondor: 'Le Gondor',
            rohan: 'Le Rohan',
            silvan: 'Les Royaumes Elfiques',
            dwarves: 'Les Forteresses Naines',
            'last-alliance': "L'Ultime Alliance",
            isengard: "L'Isengard",
            mordor: 'Le Mordor',
            moria: 'La Moria',
        },
        stats: {
            fi: 'C',
            sh: 'T',
            st: 'F',
            de: 'D',
            at: 'A',
            wo: 'PV',
            co: 'B',
            mo: 'M',
            mi: 'P',
            wi: 'V',
            fa: 'D',
        },
        variants: {
            axeman: 'Tueur à la hache',
            bowman: 'Archer',
            fellowship: "Communauté de l'Anneau",
            'helms-deep': 'Gouffre de Helm',
            javelinman: 'Lanceur de javelot',
            lancer: 'Lancier',
            pikeman: 'Piquier',
            swordsman: 'Épéiste',
            foot1: 'Sur pied',
            foot2: 'Sur pied',
            foot3: 'Sur pied',
            foot4: 'Sur pied',
            foot5: 'Sur pied',
            foot6: 'Sur pied',
            foot7: 'Sur pied',
            foot8: 'Sur pied',
        },
    },

    forces: {
        evil: 'Le Mal',
        good: 'Le Bien',
    },

    scenario: {
        index: {
            title: 'Scenarios',
        },
        names: {
            1: "L'embuscade des Gobelins",
            2: "L'ultime alliance",
            3: "L'attaque des Nazgul",
            4: "La traque de l'Uruk-Haï",
            5: "L'attaque des Elfes",
            6: 'La défense des ruines',
            7: 'Repoussez les maraudeurs !',
            8: 'Raid sur la Lothlorien',
            9: 'Brûlez le village!',
            '11A': 'Embuscade à Amon Hen: À la rescousse !',
            '11B': 'Embuscade à Amon Hen: Capturez les semi-hommes !',
            12: 'Joute de volonté',
            14: 'Le passage du gué',
            15: 'La trouée du Rohan',
            17: 'Un voleur dans la nuit',
            18: 'La colère du Rohan',
            19: "Le guetteur de l'eau",
            20: 'Perdus dans le noir',
            21: 'Le Tombeau de Balïn',
            25: "La fuite d'Osgiliath",
        },
    },

    rule: {
        actions: {
            'introduction-hero': 'Héros',
            'introduction-warrior': 'Autres combattants',
            'introduction-special': 'Cas particuliers',
            'moving-first': 'Commencer',
            'moving-courage': 'Défier',
            'moving-distance': 'Parcourir',
            'moving-jumping': 'Sauter',
            'moving-climbing': 'Escalader',
            'moving-charge': 'Charger',
            'moving-mounted': 'Chevaucher',
            'shooting-first': 'Commencer',
            'shooting-hit': 'Toucher',
            'shooting-wound': 'Blesser',
            'fighting-first': 'Commencer',
            'fighting-equipment': "S'équiper",
            'fighting-resolution': 'Départager',
            'fighting-recoil': 'Reculer',
            'fighting-wound': 'Blesser',
            'fighting-last': 'Terminer',
            'courage-test': 'Tester',
            'courage-effect': 'Conclure',
            'spell-test': 'Tester',
            'spell-ally': "Sorts d'allié",
            'spell-ennemy': "Sorts d'ennemi",
            'spell-ennemies': "Sorts d'ennemis",
        },
        dices: {
            'moving-first-ring': {
                one: {
                    event: "L'Anneau sommeille.",
                    effect: ':moving: normal',
                },
                six: {
                    event: "L'Anneau s'éveille.",
                    effect: 'aucun :moving:',
                },
            },
            'moving-jumping-test': {
                one: {
                    event: 'Faux pas.',
                    effect: 'aucun :moving:',
                },
                two: {
                    event: 'Obstacle franchi.',
                    effect: ':moving: terminé',
                },
                six: {
                    event: 'Obstacle franchi sans effort.',
                    effect: ':moving: normal',
                },
            },
            'moving-climbing-test': {
                one: {
                    event: 'Chute en contrebas.',
                    effect: 'aucun :moving:',
                },
                two: {
                    event: 'Escalade réussie.',
                    effect: ':moving: terminé',
                },
                six: {
                    event: 'Escalade réussie sans effort.',
                    effect: ':moving: normal',
                },
            },
            'moving-climbing-fate': {
                one: {
                    event: "Le destin l'a abandonné.",
                    effect: 'blessure confirmée',
                },
                four: {
                    event: "Le destin l'a sauvé.",
                    effect: 'blessure évitée',
                },
            },
            'moving-charge-hideout': {
                one: {
                    event: "L'ennemi est dissimulé.",
                    effect: 'charge impossible',
                },
                four: {
                    event: "L'ennemi est à découvert.",
                    effect: 'charge possible',
                },
            },
            'moving-mounted-falling': {
                one: {
                    event: 'Cabrage.',
                    effect: 'jeté au sol, :moving: terminé',
                },
                two: {
                    event: 'Chute au sol',
                    effect: 'sur pied, :moving: terminé, ne porte aucun coup',
                },
                six: {
                    event: 'Saut en pleine chute, aucune pénalité.',
                    effect: 'sur pied, :moving: normal',
                },
            },
            'shooting-hit-hideout': {
                one: {
                    event: "L'ennemi est dissimulé.",
                    effect: 'tir impossible',
                },
                four: {
                    event: "L'ennemi est à découvert.",
                    effect: 'tir possible',
                },
            },
            'shooting-hit-obstacle': {
                one: {
                    event: "Le projectile a touché l'obstacle.",
                    effect: 'résoudre la blessure, puis fin du tir',
                },
                four: {
                    event: 'Le projectile continue sa course.',
                    effect: 'continuer la résolution du tir',
                },
            },
            'shooting-wound-fate': {
                one: {
                    event: "Le destin l'a abandonné.",
                    effect: 'blessure confirmée',
                },
                four: {
                    event: "Le destin l'a sauvé.",
                    effect: 'blessure évitée',
                },
            },
            'fighting-wound-barrier': {
                one: {
                    event: 'Le défenseur est protégé par la barrière.',
                    effect: 'fin du combat',
                },
                four: {
                    event: 'Le défenseur est touché.',
                    effect: 'résoudre la blessure',
                },
            },
            'fighting-wound-fate': {
                one: {
                    event: "Le destin l'a abandonné.",
                    effect: 'blessure confirmée',
                },
                four: {
                    event: "Le destin l'a sauvé.",
                    effect: 'blessure évitée',
                },
            },
        },
        index: {
            title: 'Rêgles',
        },
        phases: {
            all: 'Tout',
            courage: 'Bravoure',
            fighting: 'Combat',
            introduction: 'Résumé',
            moving: 'Mouvement',
            shooting: 'Tir',
            spell: 'Magie',
        },
        texts: {
            'introduction-hero-evil': 'Héros du Mal',
            'introduction-hero-good': 'Héros du Bien',
            'introduction-warrior-evil': 'Guerriers du Mal',
            'introduction-warrior-good': 'Guerriers du Bien',
            'introduction-special-legendaryhero': [
                'Héro légendaire',
                'Peut dépenser 1 :mi: par tour gratuitement.',
            ],
            'introduction-special-powerstick': [
                'Bâton de pouvoir',
                'Peut dépenser 1 :wi: par tour gratuitement.',
            ],
            'introduction-special-ringwraith': [
                'Nazgûl',
                "Meurt s'il ne dispose plus de :wi:.",
            ],
            'moving-first-heroic': [
                'Élan héroïque',
                'Si 1 :mi: dépensé, le héros et ses alliés à 6" :moving: en premier.',
            ],
            'moving-first-firstplayer': [
                'Priorité',
                'Le :firstplayer: résout :moving: pour chacune de ses :figurine: non engagées en premier.',
            ],
            'moving-first-ring': [
                "L'Anneau Unique",
                'Résoudre :dice: :',
            ],
            'moving-courage-massacre': [
                "Moitié de l'armée détruite",
                "Pour chaque :figurine: non engagée et qui ne se trouve pas à 6\" d'un héro ayant réussi :courage:, résoudre :courage:.",
            ],
            'moving-courage-isolated': [
                'Isolé',
                'Pour chaque :figurine: non engagée sans allié à 6" avec au moins 2 ennemis pour chaque :wo: restant à 6", résoudre :courage:.',
            ],
            'moving-courage-mordorskum': [
                'Arrière, rebut du Mordor',
                "S'il se trouve au moins un Orque du Mordor à 6\" et aucun ennemi à 6\", Uglúk doit résoudre résoudre :courage:. S'il échoue, il charge l'Orque du Mordor le plus proche.",
            ],
            'moving-distance-maximum': [
                'Distance maximale de déplacement',
                'Chaque :figurine: peut se déplacer de :',
            ],
            'moving-distance-shooting': [
                'Tireurs & Lanceurs',
                'Pour :shooting:, la distance maximale de déplacement est :',
            ],
            'moving-distance-difficult': [
                'Terrain difficile',
                'La distance maximale est réduite de moitié sur la surface concernée.',
            ],
            'moving-distance-woodelf': [
                'Créatures des bois',
                'Les forêts ne sont pas un terrain difficile.',
            ],
            'moving-distance-lying': [
                "S'allonger/se relever",
                "La distance maximale d'une :figurine: qui s'allonge ou se relève est réduite de moitié. " +
                    "La distance maximale d'une :figurine: allongée réduite à 2\" et l'empêche de charger. " +
                    'Une :figurine: engagée ne peut se relever.',
            ],
            'moving-jumping-test': [
                'Saut',
                ":mi: - Pour sauter un obstacle mesurant entre la moitié et le double de la :figurine:, résoudre :dice: (-1 au :dice: si l'obstacle est plus large ou haut que la :figurine:) :",
            ],
            'moving-jumping-goblin': [
                'Grimpeurs-nés',
                "Aucun jet n'est requis pour sauter.",
            ],
            'moving-jumping-mounted': [
                'Saut de cavalier',
                'Si 1 est obtenu au :dice: de saut, possibilité de relance. Si 1 est obtenu, résoudre une chute de cavalier.',
            ],
            'moving-jumping-rohirrim': [
                'Cavaliers experts',
                'Peut relancer le :dice: de saut une seconde fois. Si 1 est obtenu, résoudre une chute de cavalier.',
            ],
            'moving-climbing-test': [
                'Escalade',
                ':mi: - Pour escalader un obstacle mesurant plus du double de la :figurine:, résoudre :dice: :',
            ],
            'moving-climbing-goblin': [
                'Grimpeurs-nés',
                "Aucun jet n'est requis pour escalader.",
            ],
            'moving-climbing-falling': [
                'Chute',
                'Une chute de plus du double de la taille de la :figurine: met fin à ses mouvements. Pour chaque tranche de 2" de chute, infliger :dice: :',
            ],
            'moving-climbing-fate': [
                'Destin',
                ':mi: - Si blessé, pour chaque :fa: dépensé, résoudre :dice: :',
            ],
            'moving-charge-hideout': [
                'Charge',
                'La :figurine: doit voir sa :target: avant le début de son mouvement. ' +
                    'Pour trancher une dissimulation partielle, résoudre :dice: :',
            ],
            'moving-charge-terrifying': [
                'Ennemi terrifiant',
                'Pour charger un ennemi terrifiant, résoudre :courage:.',
            ],
            'moving-charge-throwing': [
                'Arme de jet',
                "La :figurine: s'arrête à 1\" de sa :target: et résout le lancer. " +
                    'Si la :target: est tuée, la :figurine: peut continer son :moving: normalement. ' +
                    'Sinon, il finit de charger sa :target:. ' +
                    'Arme à usage unique.',
            ],
            'moving-charge-spell': [
                'Pouvoirs magiques',
                'La :figurine: non engagée peut résoudre 1 :spell:.',
            ],
            'moving-mounted-difficult': [
                'Cavalier en terrain difficile',
                'Le cavalier doit descendre de sa monture pour :moving:.',
            ],
            'moving-mounted-mount': [
                'Enfourcher et descendre',
                "Pour enfourcher une monture, résoudre un saut. Descendre d'une monture se fait sans condition.",
            ],
            'moving-mounted-falling': [
                'Chute de cavalier',
                'Résoudre :dice: :',
            ],
            'shooting-first-heroic': [
                ':shooting: héroïque',
                'Si 1 :mi: dépensé, le héros et ses alliés à moins de 6" résolvent :shooting: en premier.',
            ],
            'shooting-first-firstplayer': [
                'Priorité',
                'Le :firstplayer: résout :shooting: pour chacune de ses :figurine: debout non engagées en premier.',
            ],
            'shooting-first-throwing': [
                'Arme de jet',
                'Usage unique.',
            ],
            'shooting-first-masterbowman': [
                'Maître Archer',
                "Peut résoudre jusqu'à 3 :shooting: par tour.",
            ],
            'shooting-hit-maximum': [
                'Portée',
                'La :target: doit se trouver à portée de la :figurine: :',
            ],
            'shooting-hit-hideout': [
                'Ennemi caché',
                'La :figurine: doit voir sa :target:. Pour trancher une dissimulation partielle, résoudre :dice: :',
            ],
            'shooting-hit-meleegood': [
                'Corps à corps',
                'La :target: ne peut pas être engagée, et aucun allié ne peut se trouver sur sa trajectoire de tir.',
            ],
            'shooting-hit-meleeevil': [
                'Corps à corps',
                'Si la :target: est engagée, la :figurine: engagée alliée la plus proche compte comme obstacle.',
            ],
            'shooting-hit-mounted': [
                'Cavalerie',
                'La monture compte comme un obstacle.',
            ],
            'shooting-hit-obstacle': [
                'Obstacle',
                'Pour chaque obstacle sur la trajectoire, résoudre :dice: :',
            ],
            'shooting-hit-target': [
                'Impact',
                ':mi: - Pour toucher la :target:, résoudre :dice: :',
            ],
            'shooting-hit-blindinglight': [
                'Lumière',
                "S'il se trouve sur la trajectoire, le :dice: d'impact passe à 6.",
            ],
            'shooting-wound-test': [
                'Blessure',
                ':mi: - Pour blesser une :figurine: touchée, infliger :',
            ],
            'shooting-wound-fate': [
                'Destin',
                ':mi: - Si blessé, pour chaque :fa: dépensé, résoudre :dice: :',
            ],
            'fighting-first-firstplayer': [
                'Priorité',
                'Le :firstplayer: sépare les combats multiples en combats individuels.',
            ],
            'fighting-first-heroic': [
                'Combat héroïque',
                'Si 1 :mi: dépensé, le héros et ses alliés engagés combattent en premier et, si tous les ennemis sont tués, effectuent un nouveau :moving:.',
            ],
            'fighting-first-barrier': [
                'Défense de barrière',
                "Les attaquants combattent l'un après l'autre, les défenseurs faisant face à chaque attaquant séparément. " +
                    "Si les défenseurs sont attaqués par derrière, cette attaque doit être résolue d'abord.",
            ],
            'fighting-equipment-shield': [
                'Bouclier',
                "Si toutes les :figurine: engagées alliés possèdent un bouclier, elles peuvent s'abriter derrière. Elles bénéficient de 2 x :dice: par coup pendant la résolution, mais ne peuvent porter aucune attaque.",
            ],
            'fighting-equipment-2hands': [
                'Arme à deux mains',
                'Si utilisée pendant le combat, -1 aux :dice: de résolution et +1 aux :dice: de blessure.',
            ],
            'fighting-equipment-lance': [
                'Lance',
                "S'il est non engagé et en contact avec un allié plus petit ou de même taille engagé, il devient soutien et lui apporte 1 coup supplémentaire. Soutien impossible contre des ennemis abrités par leur bouclier.",
            ],
            'fighting-equipment-pike': [
                'Pike',
                "S'il est non engagé et en contact avec un allié plus petit ou de même taille engagé, ou en contact avec un soutien plus petit ou de même taille, il devient soutien et lui apporte 1 coup supplémentaire. Soutien impossible contre des ennemis abrités par leur bouclier.",
            ],
            'fighting-resolution-gondorhorn': [
                'Le Cor de Gondor',
                "S'il est en infériorité numérique, un des ennemis résout :courage:. S'il échoue, il perd le combat.",
            ],
            'fighting-resolution-test': [
                'Résolution',
                ':mi: - Pour désigner le vainqueur, résoudre :dice: pour chaque coup des :figurine: engagées :',
            ],
            'fighting-resolution-mounted': [
                'Charge de cavalerie',
                'Si tous les ennemis sont à pied, les cavaliers portent un coup supplémentaire.',
            ],
            'fighting-resolution-firstdraw': [
                'Égalité',
                "La :figurine: ayant la meilleure valeur de combat l'emporte :",
            ],
            'fighting-resolution-additionaldraws': [
                'Égalité',
                'Résoudre :dice: autant de fois que nécessaire:',
            ],
            'fighting-recoil-default': [
                'Recul',
                "Le perdant recul de 1\", sauf s'il défend une barrière. S'il ne peut reculer, il est bloqué.",
            ],
            'fighting-recoil-mounted': [
                'Charge de cavalerie',
                'Si tous les ennemis sont à pied et ont perdu, ils sont jetés au sol.',
            ],
            'fighting-recoil-lying': [
                'Allongé',
                'Si le perdant est allongé, il est bloqué. ' +
                    'Si le vainqueur est allongé, il peut se relever mais ne porte aucun coup.',
            ],
            'fighting-wound-barrier': [
                'Défense de barrière',
                "Pour chaque coup porté par l'attaquant, résoudre :dice: :",
            ],
            'fighting-wound-test': [
                'Blessure',
                ':mi: - Pour chaque coup, désigner une :target: et infliger :dice: (ou 2 x :dice: si la cible est bloquée) :',
            ],
            'fighting-wound-fate': [
                'Destin',
                ':mi: - Si blessé, pour chaque :fa: dépensé :',
            ],
            'fighting-last-barrier': [
                'Défense de barrière',
                "Si les attaquants perdent, ils reculent de 1\". Si le défenseur attaqué par derrière perd, les attaquants peuvent franchir la barrière et continuer le combat. Si l'un des défenseurs est tué, les attaquants franchisent la barrière.",
            ],
            'fighting-last-ringwraith': [
                'Nazgûl',
                'Perd 1 :wi: à chaque combat.',
            ],
            'courage-test-test': [
                'Test',
                ":mi: - Si la :figurine: n'a pas encore efectué ce test, résoudre 2 x :dice: :",
            ],
            'courage-effect-success': [
                'Réussite',
                'Rien ne se passe.',
            ],
            'courage-effect-failure': [
                'Echec',
                "La :figurine: bat en retraite en :moving: de toute sa distance maximale de déplacement en direction opposé de l'ennemi visible le plus proche, ou vers le bord de la table le plus proche, sans charger d'ennemi.",
            ],
            'spell-test-test': [
                'Test',
                ':mi: - La :figurine: choisit un pouvoir et, résoud :dice: pour chaque :wi: dépensé.',
            ],
            'spell-test-resistance': [
                'Résistance',
                ':mi: - Pour chaque :wi: dépensé, résoudre :dice:. Si le :dice: de résistance est supérieur ou égal au :dice: de test, il ne subit aucun effet.',
            ],
            'spell-test-hobbit': [
                'Hobbit',
                'Peut relancer le :dice: de résistance une seconde fois.',
            ],
            'spell-ally-blindinglight': [
                'Sort : Lumière',
                "Lanceur. Résoudre +2 :dice:. Augmente à +6 le :dice: d'impact des :shooting: dans sa direction. Éclaire tout ce qui se trouve à moins de 12\" du lanceur. Jusqu'à la perte de tous les :wi: du lanceur.",
            ],
            'spell-ally-terrifyingaura': [
                'Sort : Aura de Terreur',
                "Lanceur. Résoudre +2 :dice:. Devient terrifiant. Jusqu'à la perte de tous les :wi: du lanceur.",
            ],
            'spell-ally-strengthenwill': [
                'Sort : Volonté Renforcée',
                'Un allié à 12". Résoudre +4 :dice:. Récupère tous ses :wi:.',
            ],
            'spell-ennemy-draincourage': [
                'Sort : Drain de Bravoure',
                'Un ennemi à 12". Résoudre +2 :dice:. -1 aux :dice: de :courage: (cumulable). Permnent.',
            ],
            'spell-ennemy-immobilse': [
                'Sort : Immobilisation / Paralysie',
                "Un ennemi à 12\". Résoudre +3 :dice:. Aucun :moving:, un seul coup et n'en porte aucun, aucun :spell:, aucune action héroïque. Jusqu'à la fin du tour.",
            ],
            'spell-ennemy-immobilsepalantir': [
                'Palantir',
                "Si le lanceur possède encore :wi:, la portée d'Immobilisation / Paralysie est ignorée.",
            ],
            'spell-ennemy-command': [
                'Sort : Injonction / Contrainte',
                "Un ennemi non engagé à 12\". Résoudre +4 :dice:. :moving: de la moitié de sa distance maximale. Aucun autre :moving:, un seul coup et n'en porte aucun, aucun :spell:, aucune action héroïque. Jusqu'à la fin du tour.",
            ],
            'spell-ennemy-commandpalantir': [
                'Palantir',
                "Si le lanceur possède encore :wi:, la portée d'Injonction / Contrainte est ignorée.",
            ],
            'spell-ennemy-swapwill': [
                'Sort : Volonté Sapée',
                'Un ennemi à 12". Résoudre +4 :dice:. Perte totale des :wi:. Permanent.',
            ],
            'spell-ennemy-sorcerousblast': [
                'Sort : Impact Magique',
                'Un ennemi visible à 12". Résoudre +5 :dice:. Jeté au sol, puis subit :dice: :',
            ],
            'spell-ennemies-natureswrath': [
                'Sort : Confusion',
                'Tous les ennemis à 6". Résoudre +4 :dice:. Jetés au sol. Une :figurine: tente de résister pour tous.',
            ],
        },
    },

    scenery: {
        index: {
            title: 'Décors',
        },
        names: {
            'alert-fire': "Feu d'alarme",
            barricade: 'Barricades',
            bridge: 'Pont',
            camp: 'Campement',
            ford: 'Gué',
            hill: 'Colline',
            lake: 'Lac',
            'low-wall': 'Murets et clôtures',
            outcrop: 'Affleurement rocheux',
            river: 'Rivière',
            'rohirrim-house': 'Demeures Rohirrim',
            'ruined-arch': 'Vestiges du passé',
            'ruined-foundations': 'Coins de ruines',
            sewer: 'Égouts',
            'standing-stone': 'Pierre levée',
            tree: 'Arbres',
        },
    },

}
