const EffetMaillotCartes = {
  id: 'maillot-cartes',
  nom: 'Labo - JOUEURS',
  description: 'Le site enfile le maillot, puis l\'équipe entière entre sur le dos du maillot, en formation en V. Survolez un joueur, cliquez pour le sélectionner : il se retourne, ses hologrammes s\'allument, et ses coéquipiers passent sur le banc (toujours cliquables). Faites défiler la maquette, ou utilisez Lecture.',
  variables: ['--metal-sombre', '--metal-moyen', '--metal-clair', '--metal-reflet', '--couleur-fond', '--couleur-surface', '--couleur-lueur', '--couleur-texte', '--couleur-motif', '--opacite-motif', '--couleur-nuit', '--police-titre', '--police-logo'],
  joueurs: [
    { numero: '01', pseudo: 'Sevroze', role: 'Second duelliste', agent: 'Yoru', agentImage: 'images/agents/yoru-full.webp', photo: 'images/joueurs/joueur-01.jpg', acs: 271, kd: '1.34', hs: 32,
      identite: 'Sami · 25 ans · Côte d\'Azur', icone: 'duelliste', dossier: 'yoru',
      region: 'Côte d\'Azur', sensi: 0.32, dpi: 800, reseaux: ['twitch', 'x', 'tiktok'],
      bio: ['Joue à Valorant depuis mars 2023.', 'De duelliste entry à smoker, puis second duelliste.', 'Vainqueur Élite 2 et Élite 5 (circuit Premier).'],
      setup: [['Clavier', 'Razer Huntsman Mini'], ['Souris', 'Logitech G Pro X Superlight 2 DEX'], ['Tapis', 'Artisan FX Zero Soft XL'], ['Écouteurs', 'Moondrop Chu II']] },
    { numero: '02', pseudo: 'Shiaga', role: 'Initiateur · IGL', agent: 'Sova', agentImage: 'images/agents/sova-full.webp', photo: 'images/joueurs/joueur-02.jpg', acs: 214, kd: '1.12', hs: 26,
      identite: 'IGL · initiateur de l\'équipe', icone: 'initiateur', dossier: 'sova',
      region: 'Bordeaux', sensi: 0.4, dpi: 800, reseaux: ['twitch', 'x'],
      bio: ['Joue depuis 4 ans, « toujours la niaque ».', 'Pointilleux et exigeant dans son lead.', 'Sait aussi prendre les choses à la rigolade.'],
      setup: [['Clavier', 'Wooting 60HE+'], ['Casque', 'Razer BlackShark V3'], ['Souris', 'Logitech Superlight 2 (8 kHz)']] },
    { numero: '03', pseudo: 'Medhielm', role: 'Contrôleur · smoker', agent: 'Omen', agentImage: 'images/agents/omen-full.webp', photo: 'images/joueurs/joueur-03.jpg', acs: 198, kd: '1.05', hs: 24,
      identite: 'Tristan · 27 ans', icone: 'controleur', dossier: 'omen',
      region: 'Marseille', sensi: 0.21, dpi: 1600, reseaux: ['twitch', 'tiktok', 'x'], direct: true,
      liens: { twitch: 'https://www.twitch.tv/m3hdielm' }, titreDirect: 'Ranked Immortel · Omen', spectateurs: '1,2 k', imageDirect: 'ressources-maquette/V-valorant/illustrations/closed-beta-promo.webp',
      bio: ['Joueur compétitif, le smoker de l\'équipe.', 'Passionné de danse depuis l\'enfance.'],
      setup: [['Clavier', 'Wooting 80HE+'], ['Souris', 'Logitech Pro X Superlight 2 SE'], ['Écouteurs', 'Linsoul Kiwi Ears']] },
    { numero: '04', pseudo: 'Blackkzon', role: 'Duelliste entry', agent: 'Jett', agentImage: 'images/agents/jett-full.webp', photo: 'images/joueurs/joueur-04.jpg', acs: 205, kd: '1.18', hs: 28,
      identite: 'Jason · 23 ans', icone: 'duelliste', dossier: 'jett',
      region: 'Lille', sensi: 0.45, dpi: 800, reseaux: ['x', 'tiktok'],
      bio: ['Joue à Valorant depuis 6 ans, à fond depuis 4 ans.', 'Hors du jeu : cuisine, lecture, temps entre amis.'],
      setup: [['Souris', 'Razer DeathAdder V3 Pro'], ['Clavier', 'Keychron K2 Ultra'], ['Casque', 'HyperX Cloud III']] },
    { numero: '05', pseudo: 'Tsolma', role: 'Sentinelle', agent: 'Killjoy', agentImage: 'images/agents/killjoy-full.webp', photo: 'images/joueurs/joueur-05.jpg', acs: 189, kd: '0.97', hs: 22,
      identite: 'Tom · 22 ans · Lyon', icone: 'sentinelle', dossier: 'killjoy',
      region: 'Lyon', sensi: 0.35, dpi: 800, reseaux: ['twitch', 'x'],
      bio: ['Joue à Valorant depuis l\'été 2022.', 'Arrivé dans l\'équipe à la mi-2026, en sentinelle.', 'Spécialiste des retakes, ne lâche jamais un site.'],
      setup: [['Clavier', 'Wooting 60HE'], ['Souris', 'Logitech G Pro X Superlight 2'], ['Tapis', 'Artisan Hien Soft XL'], ['Casque', 'HyperX Cloud II']] }
  ],
  iconesFace: {
    twitch: '<path d="M4 3h16v11l-5 5h-4l-3 3H6v-3H4z"/><path d="M10 7.5v4.5M15 7.5v4.5"/>',
    x: '<path d="M4.5 4l15 16M19.5 4l-15 16"/>',
    tiktok: '<path d="M14 3v11.5a4.5 4.5 0 1 1-4.5-4.5"/><path d="M14 3c.8 2.8 2.8 4.4 5.5 4.6"/>',
    lieu: '<path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>'
  },
  icones: {
    Clavier: '<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h1M9.5 10h1M13 10h1M16.5 10h1M6 14h1M17 14h1M9 14h6"/>',
    Souris: '<rect x="6.5" y="2.5" width="11" height="19" rx="5.5"/><path d="M12 2.5v6.5M6.5 9h11"/><path d="M12 5v2" stroke-width="2.4"/>',
    Casque: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="2.5" y="13.5" width="5" height="7" rx="1.6"/><rect x="16.5" y="13.5" width="5" height="7" rx="1.6"/>',
    'Écouteurs': '<circle cx="7.5" cy="9" r="3.5"/><path d="M9 12.2l1 7.3h-3l-.6-6"/><circle cx="16.5" cy="9" r="3.5"/><path d="M15 12.2l-1 7.3h3l.6-6"/>',
    Tapis: '<path d="M3 17l3-10h15l-3 10z"/><rect x="11.5" y="9" width="4" height="6" rx="2"/>'
  },
  joueursTajine: [
    { numero: '01', pseudo: 'Kemal', role: 'Maître du tajine', agent: 'Tajine', agentImage: 'images/tajine/item-tajine.png', photo: 'images/tajine/joueur-01.jpg', acs: 312, kd: '4.9', hs: 35 },
    { numero: '02', pseudo: 'Rachid', role: 'Roi des brochettes', agent: 'Brochettes kefta', agentImage: 'images/tajine/item-kefta.png', photo: 'images/tajine/joueur-02.jpg', acs: 268, kd: '4.7', hs: 70 },
    { numero: '03', pseudo: 'Yanis', role: 'Kebabier', agent: 'Kebab généreux', agentImage: 'images/tajine/item-kebab.png', photo: 'images/tajine/joueur-03.jpg', acs: 640, kd: '4.8', hs: 85 },
    { numero: '04', pseudo: 'Diego', role: 'Roi du falafel', agent: 'Falafels', agentImage: 'images/tajine/item-falafels.png', photo: 'images/tajine/joueur-04.jpg', acs: 410, kd: '5.0', hs: 20 },
    { numero: '05', pseudo: 'Georges', role: 'Chef de brigade', agent: 'Döner allemand', agentImage: 'images/tajine/item-doner.png', photo: 'images/tajine/joueur-05.jpg', acs: 525, kd: '4.6', hs: 99 }
  ],
  textes: {
    normal: { accroche: 'Esport · Saison 2026-27', role: 'Rôle', agent: 'Agent favori', stats: ['ACS', 'K/D', 'HS'], indice: 'Voir le joueur', retour: 'Retour', rappel: 'Retourner la carte' },
    tajine: { accroche: 'Restaurant · Tajines & couscous', role: 'Poste', agent: 'Spécialité', stats: ['Plats/jour', 'Note', 'Piquant'], indice: 'Voir le chef', retour: 'Retour', rappel: 'Retourner la carte' }
  },
  parametres: [
    { categorie: 'Défilement', id: 'longueur', libelle: 'Défilement · durée de la transition (% de hauteur d\'écran)', type: 'nombre', min: 60, max: 250, pas: 5, defaut: 100 },
    { categorie: 'Invitation', id: 'invitation', libelle: 'Invitation · démo qui invite à défiler (tant qu\'on n\'a pas touché la page)', type: 'interrupteur', defaut: true },
    { categorie: 'Invitation', id: 'invitationDelai', libelle: 'Invitation · attente avant la première démo (s)', type: 'nombre', min: 0, max: 10, pas: 0.1, defaut: 0.8 },
    { categorie: 'Invitation', id: 'invitationPause', libelle: 'Invitation · temps entre deux démos (s)', type: 'nombre', min: 1, max: 20, pas: 0.5, defaut: 2.5 },
    { categorie: 'Invitation', id: 'invitationAmplitude', libelle: 'Invitation · hauteur atteinte par le maillot sur les bords pendant la démo (part de l\'écran)', type: 'nombre', min: 0.05, max: 0.6, pas: 0.01, defaut: 0.2 },
    { categorie: 'Invitation', id: 'invitationRepos', libelle: 'Invitation · bords du col visibles au repos, en bas de l\'écran (% de la hauteur, 0 = cachés)', type: 'nombre', min: 0, max: 15, pas: 0.5, defaut: 15 },
    { categorie: 'Défilement', id: 'inertie', libelle: 'Défilement · fluidité du V (0 = sec, 1 = très amorti)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.8 },
    { categorie: 'Défilement', id: 'calmeLissage', libelle: 'Défilement · lissage en mode « réduire les animations » (ms, 0 = suit la molette sans lissage)', type: 'nombre', min: 0, max: 250, pas: 5, defaut: 70 },
    { categorie: 'Col', id: 'pente', libelle: 'Col · ouverture du V (petit = plat, grand = pointu)', type: 'nombre', min: 0.15, max: 1.2, pas: 0.05, defaut: 0.7 },
    { categorie: 'Col', id: 'epaisseur', libelle: 'Col · épaisseur du V (px)', type: 'nombre', min: 4, max: 60, pas: 1, defaut: 45 },
    { categorie: 'Col', id: 'doubleTrait', libelle: 'Col · double trait', type: 'interrupteur', defaut: true },
    { categorie: 'Col', id: 'lueur', libelle: 'Col · lueur de l\'or (0 = mat)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.6 },
    { categorie: 'Col', id: 'arret', libelle: 'Col · arrêt : hauteur finale de la pointe du V (% de l\'écran)', type: 'nombre', min: 0, max: 40, pas: 1, defaut: 7 },
    { categorie: 'Respiration', id: 'haloForce', libelle: 'Respiration · intensité au centre du V (0 = aucune)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.2 },
    { categorie: 'Respiration', id: 'haloTaille', libelle: 'Respiration · taille du halo', type: 'nombre', min: 0.3, max: 3, pas: 0.1, defaut: 3 },
    { categorie: 'Respiration', id: 'haloVitesse', libelle: 'Respiration · vitesse (0 = halo fixe)', type: 'nombre', min: 0, max: 3, pas: 0.1, defaut: 0.2 },
    { categorie: 'Étincelles', id: 'etincelles', libelle: 'Étincelles · débit (combien en naissent)', type: 'nombre', min: 0, max: 3, pas: 0.1, defaut: 0.7 },
    { categorie: 'Étincelles', id: 'etincellesVitesse', libelle: 'Étincelles · vitesse le long du V', type: 'nombre', min: 0.2, max: 3, pas: 0.1, defaut: 0.2 },
    { categorie: 'Coutures', id: 'couturesNombre', libelle: 'Coutures · nombre de lignes (0 = aucune)', type: 'nombre', min: 0, max: 3, pas: 1, defaut: 1 },
    { categorie: 'Coutures', id: 'couturesPoint', libelle: 'Coutures · longueur des points (px)', type: 'nombre', min: 2, max: 24, pas: 1, defaut: 7 },
    { categorie: 'Coutures', id: 'couturesEspace', libelle: 'Coutures · espace entre les points (px)', type: 'nombre', min: 2, max: 24, pas: 1, defaut: 6 },
    { categorie: 'Coutures', id: 'couturesEpaisseur', libelle: 'Coutures · épaisseur (px)', type: 'nombre', min: 0.5, max: 4, pas: 0.1, defaut: 3.1 },
    { categorie: 'Coutures', id: 'couturesVitesse', libelle: 'Coutures · vitesse de défilement (0 = immobiles)', type: 'nombre', min: 0, max: 3, pas: 0.1, defaut: 0.4 },
    { categorie: 'Tissu', id: 'maillotBlanc', libelle: 'Variation du maillot', type: 'interrupteur', defaut: false },
    { categorie: 'Tissu', id: 'plis', libelle: 'Tissu · ondulation : intensité des plis (0 = tissu tendu)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.7 },
    { categorie: 'Tissu', id: 'plisProfondeur', libelle: 'Tissu · ondulation : profondeur des creux et reflets', type: 'nombre', min: 0.1, max: 1, pas: 0.05, defaut: 0.6 },
    { categorie: 'Tissu', id: 'plisTaille', libelle: 'Tissu · ondulation : largeur des plis (px)', type: 'nombre', min: 80, max: 700, pas: 10, defaut: 300 },
    { categorie: 'Tissu', id: 'plisVitesse', libelle: 'Tissu · ondulation : vitesse du vent (0 = figé)', type: 'nombre', min: 0, max: 3, pas: 0.1, defaut: 1 },
    { categorie: 'Tissu', id: 'flottement', libelle: 'Tissu · flottement de l\'impression (0 = immobile)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.5 },
    { categorie: 'Motif', id: 'tissu', libelle: 'Motif · visibilité (0 = tissu uni)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.35 },
    { categorie: 'Motif', id: 'motifTaille', libelle: 'Motif · écart entre deux étoiles (px)', type: 'nombre', min: 24, max: 120, pas: 2, defaut: 120 },
    { categorie: 'Motif', id: 'motifEtoile', libelle: 'Motif · taille des étoiles (part de l\'écart)', type: 'nombre', min: 0.3, max: 1, pas: 0.05, defaut: 0.85 },
    { categorie: 'Motif', id: 'motifTrait', libelle: 'Motif · épaisseur du contour des étoiles (px)', type: 'nombre', min: 0.5, max: 3, pas: 0.1, defaut: 2.1 },
    { categorie: 'Motif', id: 'motifLosanges', libelle: 'Motif · taille des petits losanges (px, 0 = aucun)', type: 'nombre', min: 0, max: 12, pas: 0.5, defaut: 10 },
    { categorie: 'Motif', id: 'motifLosangeCentre', libelle: 'Motif · un losange au cœur de chaque étoile', type: 'interrupteur', defaut: false },
    { categorie: 'Hero', id: 'poussiere', libelle: 'Hero · poussière d\'or', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.65 },
    { categorie: 'Hero', id: 'refletLogo', libelle: 'Hero · reflet qui balaie le logo', type: 'interrupteur', defaut: true },
    { categorie: 'Équipe', id: 'equipeArret', libelle: 'Équipe · temps d\'arrêt sur l\'équipe avant la suite de la page (% de hauteur d\'écran)', type: 'nombre', min: 0, max: 200, pas: 5, defaut: 0 },
    { categorie: 'Équipe', id: 'equipeCreux', libelle: 'Équipe · profondeur du V de la formation (part de la hauteur d\'une carte)', type: 'nombre', min: 0, max: 0.4, pas: 0.01, defaut: 0.14 },
    { categorie: 'Équipe', id: 'equipeEventail', libelle: 'Équipe · éventail : inclinaison des cartes (degrés)', type: 'nombre', min: 0, max: 12, pas: 0.5, defaut: 4 },
    { categorie: 'Équipe', id: 'equipeEspace', libelle: 'Équipe · espace entre les cartes (px)', type: 'nombre', min: 0, max: 60, pas: 1, defaut: 16 },
    { categorie: 'Équipe', id: 'equipeEntree', libelle: 'Équipe · apparition des cartes : décalage entre deux joueurs (s)', type: 'nombre', min: 0, max: 0.3, pas: 0.01, defaut: 0.09 },
    { categorie: 'Équipe', id: 'cartesDebut', libelle: 'Équipe · apparition des cartes : déclenchée quand le haut de la zone des cartes atteint (% de la hauteur d\'écran ; plus grand = plus tôt)', type: 'nombre', min: 40, max: 110, pas: 1, defaut: 100 },
    { categorie: 'Indice', id: 'indiceClic', libelle: 'Indice · curseur qui clique sur la carte de droite (jusqu\'au premier clic du visiteur)', type: 'interrupteur', defaut: true },
    { categorie: 'Indice', id: 'curseurStyle', libelle: 'Indice · style du curseur', type: 'choix', defaut: 'fleche',
      options: [{ valeur: 'fleche', libelle: 'Flèche claire' }, { valeur: 'fleche-or', libelle: 'Flèche dorée' }, { valeur: 'main', libelle: 'Main (lien)' }, { valeur: 'doigt', libelle: 'Doigt tactile' }, { valeur: 'souris', libelle: 'Souris (comme le splash art)' }] },
    { categorie: 'Indice', id: 'curseurX', libelle: 'Indice · position horizontale sur la carte (% de sa largeur ; 0 = bord gauche, 100 = bord droit)', type: 'nombre', min: -20, max: 120, pas: 1, defaut: 90 },
    { categorie: 'Indice', id: 'curseurY', libelle: 'Indice · position verticale sur la carte (% de sa hauteur ; 0 = bord haut, 100 = bord bas)', type: 'nombre', min: -20, max: 120, pas: 1, defaut: 3 },
    { categorie: 'Indice', id: 'curseurRotation', libelle: 'Indice · rotation du curseur (degrés)', type: 'nombre', min: -90, max: 90, pas: 1, defaut: -23 },
    { categorie: 'Indice', id: 'curseurTaille', libelle: 'Indice · taille du curseur (% de la largeur de la carte)', type: 'nombre', min: 6, max: 50, pas: 1, defaut: 26 },
    { categorie: 'Indice', id: 'curseurCycle', libelle: 'Indice · durée d\'un clic complet (s ; plus petit = clique plus souvent)', type: 'nombre', min: 0.8, max: 6, pas: 0.1, defaut: 2.6 },
    { categorie: 'Indice', id: 'curseurAppui', libelle: 'Indice · enfoncement du curseur au clic (%)', type: 'nombre', min: 0, max: 50, pas: 1, defaut: 20 },
    { categorie: 'Indice', id: 'curseurOnde', libelle: 'Indice · intensité de l\'onde du clic (0 = aucune)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.95 },
    { categorie: 'Indice', id: 'carteReaction', libelle: 'Indice · réaction de la carte : enfoncement (%, 0 = immobile)', type: 'nombre', min: 0, max: 10, pas: 0.5, defaut: 3.5 },
    { categorie: 'Indice', id: 'carteLisere', libelle: 'Indice · réaction de la carte : le liseré s\'allume (0 = non, 1 = pleinement)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 1 },
    { categorie: 'Indice', id: 'curseurDelai', libelle: 'Indice · délai avant l\'apparition du curseur (s)', type: 'nombre', min: 0, max: 3, pas: 0.05, defaut: 0 },
    { categorie: 'Indice', id: 'carteSurvol', libelle: 'Indice · la carte de droite grossit au survol (1,04 = comme les autres cartes)', type: 'nombre', min: 1, max: 1.4, pas: 0.01, defaut: 1.12 },
    { categorie: 'Équipe', id: 'equipeRespiration', libelle: 'Équipe · le liseré des cartes respire (appel au clic)', type: 'interrupteur', defaut: true },
    { categorie: 'Équipe', id: 'equipeOmbre', libelle: 'Équipe · assombrissement des coéquipiers au survol', type: 'nombre', min: 0, max: 0.8, pas: 0.05, defaut: 0.15 },
    { categorie: 'Sélection', id: 'tailleChoisie', libelle: 'Sélection · taille du joueur choisi (1 = la plus grande possible)', type: 'nombre', min: 0.5, max: 1, pas: 0.02, defaut: 0.74 },
    { categorie: 'Sélection', id: 'rappelClic', libelle: 'Sélection · la carte retournée affiche « Retourner la carte »', type: 'interrupteur', defaut: true },
    { categorie: 'Sélection', id: 'dosInclinaison', libelle: 'Sélection · le dos de la carte s\'incline vers la souris au survol (degrés, 0 = immobile)', type: 'nombre', min: 0, max: 15, pas: 0.5, defaut: 7 },
    { categorie: 'Sélection', id: 'tailleBanc', libelle: 'Sélection · taille des joueurs sur le banc', type: 'nombre', min: 0.15, max: 0.4, pas: 0.01, defaut: 0.33 },
    { categorie: 'Cartes · photo', id: 'desaturation', libelle: 'Cartes · photo : désaturation (0 = couleurs d\'origine)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.25 },
    { categorie: 'Cartes · photo', id: 'teinte', libelle: 'Cartes · photo : voile doré', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.4 },
    { categorie: 'Cartes · photo', id: 'trame', libelle: 'Cartes · photo : lignes d\'écran', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.2 },
    { categorie: 'Cartes · photo', id: 'reflet', libelle: 'Cartes · photo : reflet qui passe sur le joueur choisi', type: 'interrupteur', defaut: false },
    { categorie: 'Cartes · retournement', id: 'agrandissement', libelle: 'Cartes · agrandissement au survol', type: 'nombre', min: 1, max: 1.4, pas: 0.01, defaut: 1.1 },
    { categorie: 'Cartes · retournement', id: 'dureeRetournement', libelle: 'Cartes · durée du retournement (s)', type: 'nombre', min: 0.3, max: 1.6, pas: 0.05, defaut: 0.8 },
    { categorie: 'Cartes · retournement', id: 'rebond', libelle: 'Cartes · rebond en fin de rotation (0 = aucun)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.5 },
    { categorie: 'Cartes · retournement', id: 'flottementCarte', libelle: 'Cartes · flottement au survol (px, 0 = immobile)', type: 'nombre', min: 0, max: 20, pas: 1, defaut: 6 },
    { categorie: 'Cartes · aperçu', id: 'apercuRotation', libelle: 'Cartes · survol : rotation vers la droite (degrés)', type: 'nombre', min: 0, max: 10, pas: 0.5, defaut: 3 },
    { categorie: 'Cartes · aperçu', id: 'apercuSoulevement', libelle: 'Cartes · survol : soulèvement (px)', type: 'nombre', min: 0, max: 30, pas: 1, defaut: 30 },
    { categorie: 'Cartes · aperçu', id: 'apercuIndice', libelle: 'Cartes · survol : pastille « Voir le joueur »', type: 'interrupteur', defaut: true },
    { categorie: 'Cartes · face', id: 'carteReglages', libelle: 'Cartes · face : réglages de pro (sensibilité, DPI, eDPI) à la place des statistiques', type: 'interrupteur', defaut: true },
    { categorie: 'Cartes · face', id: 'carteReseaux', libelle: 'Cartes · face : bande région et réseaux sociaux', type: 'interrupteur', defaut: true },
    { categorie: 'Cartes · face', id: 'carteDirect', libelle: 'Cartes · face : pastille « EN LIVE » du joueur qui streame (démo : Medhielm)', type: 'interrupteur', defaut: true },
    { categorie: 'Cartes · face', id: 'couleurDirect', libelle: 'Cartes · face : couleur du direct', type: 'couleur', defaut: '#E5484D' },
    { categorie: 'Cartes · face', id: 'photoGain', libelle: 'Cartes · face : la photo descend sur le panneau du bas (part du panneau ; 0 = comme avant)', type: 'nombre', min: 0, max: 0.6, pas: 0.01, defaut: 0.3 },
    { categorie: 'Hologramme', id: 'hologramme', libelle: 'Hologramme · projeter la fiche du joueur (bannière) à gauche au retournement', type: 'interrupteur', defaut: true },
    { categorie: 'Hologramme', id: 'holoAgent', libelle: 'Hologramme · projeter aussi l\'agent favori à droite', type: 'interrupteur', defaut: true },
    { categorie: 'Hologramme', id: 'holoCouleur', libelle: 'Hologramme · couleur', type: 'couleur', defaut: '#8FB0CC' },
    { categorie: 'Hologramme', id: 'holoTaille', libelle: 'Hologramme · largeur de la bannière (par rapport à la carte)', type: 'nombre', min: 1, max: 2, pas: 0.05, defaut: 1.4 },
    { categorie: 'Hologramme', id: 'holoObscurite', libelle: 'Hologramme · assombrissement de la scène pendant la projection (0 = aucun)', type: 'nombre', min: 0, max: 0.9, pas: 0.05, defaut: 0.85 },
    { categorie: 'Hologramme', id: 'holoTremblement', libelle: 'Hologramme · tremblement (0 = stable)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.3 },
    { categorie: 'Hologramme', id: 'holoTexte', libelle: 'Hologramme · couleur des textes de la bannière (plus clair = plus lisible)', type: 'couleur', defaut: '#DCEBF7' },
    { categorie: 'Hologramme', id: 'nomFond', libelle: 'Hologramme · grand nom derrière l\'agent (0 = caché)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.3 },
    { categorie: 'Hologramme', id: 'ficheZoom', libelle: 'Hologramme · bannière : zoom (1 = taille calculée)', type: 'nombre', min: 0.5, max: 1.8, pas: 0.01, defaut: 1.18 },
    { categorie: 'Hologramme', id: 'ficheX', libelle: 'Hologramme · bannière : décalage horizontal (px ; négatif = vers la gauche)', type: 'nombre', min: -300, max: 300, pas: 1, defaut: 0 },
    { categorie: 'Hologramme', id: 'ficheY', libelle: 'Hologramme · bannière : décalage vertical (px ; négatif = vers le haut)', type: 'nombre', min: -300, max: 300, pas: 1, defaut: 0 },
    { categorie: 'Hologramme', id: 'agentZoom', libelle: 'Hologramme · agent : zoom (1 = taille calculée)', type: 'nombre', min: 0.5, max: 1.8, pas: 0.01, defaut: 1.2 },
    { categorie: 'Hologramme', id: 'agentX', libelle: 'Hologramme · agent : décalage horizontal (px ; négatif = vers la gauche)', type: 'nombre', min: -300, max: 300, pas: 1, defaut: 0 },
    { categorie: 'Hologramme', id: 'agentY', libelle: 'Hologramme · agent : décalage vertical (px ; négatif = vers le haut)', type: 'nombre', min: -300, max: 300, pas: 1, defaut: 0 },
    { categorie: 'Hologramme', id: 'nomFondTaille', libelle: 'Hologramme · grand nom : taille (1 = hauteur de l\'agent)', type: 'nombre', min: 0.4, max: 1.6, pas: 0.01, defaut: 1.06 },
    { categorie: 'Hologramme', id: 'nomFondY', libelle: 'Hologramme · grand nom : décalage vertical (% ; négatif = plus haut)', type: 'nombre', min: -40, max: 40, pas: 1, defaut: 0 },
    { categorie: 'Hologramme', id: 'holoLignes', libelle: 'Hologramme · lignes de balayage (0 = aucune)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.55 },
    { categorie: 'Hologramme', id: 'holoFaisceau', libelle: 'Hologramme · intensité des faisceaux (0 = éteints)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.4 },
    { categorie: 'Hologramme · brouillage', id: 'brouillage', libelle: 'Hologramme · brouillage : l\'agent se brouille sous la souris', type: 'interrupteur', defaut: true },
    { categorie: 'Hologramme · brouillage', id: 'brRayon', libelle: 'Hologramme · brouillage : largeur de la zone autour de la souris (px)', type: 'nombre', min: 30, max: 500, pas: 5, defaut: 170 },
    { categorie: 'Hologramme · brouillage', id: 'brHauteur', libelle: 'Hologramme · brouillage : hauteur de la zone autour de la souris (px)', type: 'nombre', min: 20, max: 400, pas: 5, defaut: 120 },
    { categorie: 'Hologramme · brouillage', id: 'brTranches', libelle: 'Hologramme · brouillage : nombre de tranches qui se décalent', type: 'nombre', min: 1, max: 8, pas: 1, defaut: 5 },
    { categorie: 'Hologramme · brouillage', id: 'brEpaisseur', libelle: 'Hologramme · brouillage : épaisseur des tranches (px)', type: 'nombre', min: 2, max: 40, pas: 1, defaut: 20 },
    { categorie: 'Hologramme · brouillage', id: 'brDecalage', libelle: 'Hologramme · brouillage : décalage des tranches (px)', type: 'nombre', min: 0, max: 80, pas: 1, defaut: 22 },
    { categorie: 'Hologramme · brouillage', id: 'brCadence', libelle: 'Hologramme · brouillage : changements par seconde', type: 'nombre', min: 4, max: 60, pas: 1, defaut: 60 },
    { categorie: 'Hologramme · brouillage', id: 'brPersistance', libelle: 'Hologramme · brouillage : durée avant de se stabiliser quand la souris s\'arrête (s)', type: 'nombre', min: 0.1, max: 2, pas: 0.05, defaut: 0.45 },
    { categorie: 'Hologramme · brouillage', id: 'brReactivite', libelle: 'Hologramme · brouillage : charge selon la vitesse de la souris', type: 'nombre', min: 0.2, max: 3, pas: 0.05, defaut: 1 },
    { categorie: 'Hologramme · brouillage', id: 'brGlisse', libelle: 'Hologramme · brouillage : glissement des tranches (ms, 0 = saut sec)', type: 'nombre', min: 0, max: 300, pas: 5, defaut: 260 },
    { categorie: 'Hologramme · brouillage', id: 'brElasticite', libelle: 'Hologramme · brouillage : élasticité (0 = aucune)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 1 },
    { categorie: 'Hologramme · brouillage', id: 'brDerive', libelle: 'Hologramme · brouillage : reflets de couleur des tranches (degrés, 0 = aucun)', type: 'nombre', min: 0, max: 120, pas: 1, defaut: 120 },
    { categorie: 'Hologramme · brouillage', id: 'brResync', libelle: 'Hologramme · brouillage : resynchronisation (balayage lumineux) quand la souris s\'arrête', type: 'interrupteur', defaut: false },
    { categorie: 'Hologramme · brouillage', id: 'brDecharge', libelle: 'Hologramme · brouillage : décharge sur toute la hauteur au clic', type: 'interrupteur', defaut: true },
    { categorie: 'Layout carte holo', id: 'lcPolices', libelle: 'Layout carte holo · polices (titre / textes / étiquettes)', type: 'choix', defaut: 'theme',
      options: [{ valeur: 'theme', libelle: 'Thème : police du thème / système / console' }, { valeur: 'tactique', libelle: 'Tactique : Big Shoulders / Instrument Sans / Consolas' },
        { valeur: 'din', libelle: 'DIN (esprit Valorant) : Bahnschrift condensée / Bahnschrift' }, { valeur: 'scifi', libelle: 'Sci-fi : Michroma / Instrument Sans' },
        { valeur: 'editorial', libelle: 'Éditorial : Instrument Serif italique / Instrument Sans' }, { valeur: 'terminal', libelle: 'Terminal : Consolas partout' },
        { valeur: 'affiche', libelle: 'Affiche : Impact / Segoe UI / Consolas' }] },
    { categorie: 'Layout carte holo', id: 'lcCoins', libelle: 'Layout carte holo · coins coupés de la bannière (cqw, 0 = coins droits)', type: 'nombre', min: 0, max: 15, pas: 0.5, defaut: 11 },
    { categorie: 'Layout carte holo', id: 'lcCadre', libelle: 'Layout carte holo · trait du cadre (0 = invisible)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 1 },
    { categorie: 'Layout carte holo', id: 'lcFond', libelle: 'Layout carte holo · fond de la bannière (0 = transparent)', type: 'nombre', min: 0, max: 2, pas: 0.05, defaut: 1 },
    { categorie: 'Layout carte holo', id: 'lcPhotoHauteur', libelle: 'Layout carte holo · photo : hauteur (part de la bannière ; 0 = automatique, prend la place libre)', type: 'nombre', min: 0, max: 0.85, pas: 0.01, defaut: 0 },
    { categorie: 'Layout carte holo', id: 'lcPhotoGauche', libelle: 'Layout carte holo · photo : bord gauche (cqw ; 0 = toute la largeur)', type: 'nombre', min: 0, max: 60, pas: 0.5, defaut: 22 },
    { categorie: 'Layout carte holo', id: 'lcPhotoCadrage', libelle: 'Layout carte holo · photo : cadrage vertical (% ; 0 = haut de la photo)', type: 'nombre', min: 0, max: 100, pas: 1, defaut: 18 },
    { categorie: 'Layout carte holo', id: 'lcPhotoZoom', libelle: 'Layout carte holo · photo : zoom', type: 'nombre', min: 1, max: 2.5, pas: 0.01, defaut: 1 },
    { categorie: 'Layout carte holo', id: 'lcPhotoFondu', libelle: 'Layout carte holo · photo : début du fondu vers le bas (% ; 100 = pas de fondu)', type: 'nombre', min: 20, max: 100, pas: 1, defaut: 60 },
    { categorie: 'Layout carte holo', id: 'lcPseudoSens', libelle: 'Layout carte holo · pseudo : sens', type: 'choix', defaut: 'vertical',
      options: [{ valeur: 'vertical', libelle: 'Vertical, le long de la photo' }, { valeur: 'horizontal', libelle: 'Horizontal, sur le bas de la photo' }] },
    { categorie: 'Layout carte holo', id: 'lcPseudoTaille', libelle: 'Layout carte holo · pseudo : remplissage de la longueur libre (1 = comme Medhielm dans le réglage de référence ; s\'adapte à chaque pseudo)', type: 'nombre', min: 0.4, max: 1.04, pas: 0.01, defaut: 1 },
    { categorie: 'Layout carte holo', id: 'lcPseudoX', libelle: 'Layout carte holo · pseudo : position horizontale (cqw depuis la gauche)', type: 'nombre', min: -10, max: 80, pas: 0.5, defaut: 2 },
    { categorie: 'Layout carte holo', id: 'lcPseudoY', libelle: 'Layout carte holo · pseudo : position verticale (cqw depuis le bas de la photo)', type: 'nombre', min: -20, max: 80, pas: 0.5, defaut: 6.5 },
    { categorie: 'Layout carte holo', id: 'lcPseudoEspace', libelle: 'Layout carte holo · pseudo : espacement des lettres (em)', type: 'nombre', min: -0.05, max: 0.4, pas: 0.01, defaut: 0.01 },
    { categorie: 'Layout carte holo', id: 'lcPseudoContour', libelle: 'Layout carte holo · pseudo : lettres en contour (au lieu de pleines)', type: 'interrupteur', defaut: false },
    { categorie: 'Layout carte holo', id: 'lcEtiquette', libelle: 'Layout carte holo · numéro « // 01 » en haut à droite', type: 'interrupteur', defaut: true },
    { categorie: 'Layout carte holo', id: 'lcEtiquetteTaille', libelle: 'Layout carte holo · numéro : taille (cqw)', type: 'nombre', min: 1.5, max: 8, pas: 0.1, defaut: 2.4 },
    { categorie: 'Layout carte holo', id: 'lcMarge', libelle: 'Layout carte holo · infos : marges gauche et droite (cqw)', type: 'nombre', min: 2, max: 14, pas: 0.5, defaut: 6 },
    { categorie: 'Layout carte holo', id: 'lcMargeHaut', libelle: 'Layout carte holo · infos : marge au-dessus (cqw)', type: 'nombre', min: 0, max: 14, pas: 0.5, defaut: 0 },
    { categorie: 'Layout carte holo', id: 'lcMargeBas', libelle: 'Layout carte holo · infos : marge en dessous (cqw)', type: 'nombre', min: 0, max: 16, pas: 0.5, defaut: 5 },
    { categorie: 'Layout carte holo', id: 'lcEspace', libelle: 'Layout carte holo · infos : espace entre les blocs (cqw)', type: 'nombre', min: 0, max: 10, pas: 0.25, defaut: 4 },
    { categorie: 'Layout carte holo', id: 'lcRoleTaille', libelle: 'Layout carte holo · rôle : taille du texte (cqw)', type: 'nombre', min: 1.5, max: 7, pas: 0.1, defaut: 4.7 },
    { categorie: 'Layout carte holo', id: 'lcIconeTaille', libelle: 'Layout carte holo · rôle : taille de l\'icône (cqw)', type: 'nombre', min: 3, max: 14, pas: 0.25, defaut: 8.75 },
    { categorie: 'Layout carte holo', id: 'lcIdentite', libelle: 'Layout carte holo · identité (prénom, âge, région)', type: 'interrupteur', defaut: true },
    { categorie: 'Layout carte holo', id: 'lcIdentiteTaille', libelle: 'Layout carte holo · identité : taille du texte (cqw)', type: 'nombre', min: 1.5, max: 6, pas: 0.1, defaut: 3.6 },
    { categorie: 'Layout carte holo', id: 'lcBio', libelle: 'Layout carte holo · description', type: 'interrupteur', defaut: true },
    { categorie: 'Layout carte holo', id: 'lcBioTaille', libelle: 'Layout carte holo · description : taille du texte (cqw)', type: 'nombre', min: 1.5, max: 6, pas: 0.1, defaut: 4.1 },
    { categorie: 'Layout carte holo', id: 'lcBioInterligne', libelle: 'Layout carte holo · description : interligne', type: 'nombre', min: 1, max: 1.8, pas: 0.05, defaut: 1.2 },
    { categorie: 'Layout carte holo', id: 'lcObjets', libelle: 'Layout carte holo · setup (objets)', type: 'interrupteur', defaut: true },
    { categorie: 'Layout carte holo', id: 'lcObjetsColonnes', libelle: 'Layout carte holo · setup : objets par ligne', type: 'nombre', min: 2, max: 5, pas: 1, defaut: 4 },
    { categorie: 'Layout carte holo', id: 'lcObjetsEspace', libelle: 'Layout carte holo · setup : espace entre les objets (cqw)', type: 'nombre', min: 0, max: 8, pas: 0.25, defaut: 3 },
    { categorie: 'Layout carte holo', id: 'lcObjetIcone', libelle: 'Layout carte holo · setup : taille de l\'icône dans sa case (%)', type: 'nombre', min: 25, max: 90, pas: 1, defaut: 63 },
    { categorie: 'Layout carte holo', id: 'lcObjetType', libelle: 'Layout carte holo · setup : type écrit dans la case (Clavier, Souris…)', type: 'interrupteur', defaut: true },
    { categorie: 'Layout carte holo', id: 'lcObjetModele', libelle: 'Layout carte holo · setup : modèle écrit sous la case', type: 'interrupteur', defaut: true },
    { categorie: 'Layout carte holo', id: 'lcObjetTexte', libelle: 'Layout carte holo · setup : taille du modèle (cqw)', type: 'nombre', min: 1.5, max: 5, pas: 0.1, defaut: 2.5 }
  ],
  css: `
.mc-scene { position: absolute; inset: 0; --h: 600px; --long: 720px; }
.mc-defilement { position: absolute; inset: 0; overflow-x: hidden; overflow-y: auto; scrollbar-width: thin; }
.mc-hero { position: relative; height: calc(var(--h) + var(--long)); }
.mc-etage { position: sticky; top: 0; height: var(--h); overflow: hidden; display: grid; place-items: center;
  background: radial-gradient(ellipse 110% 90% at 50% 45%, var(--couleur-lueur) 0%, var(--couleur-fond) 60%, var(--couleur-surface) 100%); }
.mc-etage::before { content: ""; position: absolute; inset: 0; pointer-events: none; background-color: var(--couleur-motif); opacity: var(--opacite-motif);
  --etoile: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.4'%3E%3Crect x='16' y='16' width='24' height='24'/%3E%3Crect x='16' y='16' width='24' height='24' transform='rotate(45 28 28)'/%3E%3C/g%3E%3Ccircle cx='0' cy='0' r='2'/%3E%3C/svg%3E");
  -webkit-mask: var(--etoile) 0 0 / 56px 56px repeat; mask: var(--etoile) 0 0 / 56px 56px repeat; }
.mc-contenu { position: relative; z-index: 1; display: grid; justify-items: center; gap: 14px; padding: 24px; text-align: center; will-change: transform, opacity; }
.mc-logo { width: clamp(90px, 16vw, 170px); height: auto; overflow: visible; }
.mc-logo .etoile { filter: drop-shadow(0 0 6px var(--metal-reflet)); }
.mc-mot { margin: 6px 0 0; font: 400 clamp(20px, 4.2vw, 46px)/1 var(--police-logo, "Arial Black", sans-serif); letter-spacing: .42em; padding-left: .42em; color: var(--couleur-texte); }
.mc-arabe { margin: 0; font: 600 clamp(14px, 2vw, 20px)/1 "Segoe UI", "Noto Naskh Arabic", "Arial", sans-serif; color: var(--metal-moyen); }
.mc-accroche { margin: 8px 0 0; font: 700 clamp(13px, 1.6vw, 17px)/1 var(--police-titre, "Arial Narrow", sans-serif); letter-spacing: .28em; text-transform: uppercase; color: var(--metal-moyen); }
.mc-toile { position: absolute; inset: 0; z-index: 3; width: 100%; height: 100%; pointer-events: none; }
.mc-tissu { position: absolute; left: 0; top: 0; z-index: 2; width: 100%; height: calc(var(--h) + var(--montee) + var(--marge));
  background: var(--mc-tissu); clip-path: polygon(0 0, 50% var(--montee), 100% 0, 100% 100%, 0 100%);
  overflow: hidden; pointer-events: none; will-change: transform; transform: translate3d(0, 300vh, 0); }
.mc-imprime { position: absolute; inset: -24px -40px; will-change: transform;
  animation: mc-flotte var(--flotte-duree, 5s) ease-in-out infinite alternate; }
@keyframes mc-flotte {
  from { transform: translate3d(0, calc(var(--flottement, .5) * -7px), 0) skewY(calc(var(--flottement, .5) * -.7deg)); }
  to { transform: translate3d(0, calc(var(--flottement, .5) * 7px), 0) skewY(calc(var(--flottement, .5) * .7deg)); } }
.mc-imprime::before { content: ""; position: absolute; inset: 0; background-color: var(--mc-motif-couleur); opacity: calc(var(--tissu, .5) * .35);
  -webkit-mask: var(--motif-maillot) 0 0 / var(--motif-taille) var(--motif-taille) repeat;
  mask: var(--motif-maillot) 0 0 / var(--motif-taille) var(--motif-taille) repeat; }
.mc-plis { position: absolute; inset: 0; overflow: hidden; opacity: 0; pointer-events: none; }
.mc-pli { position: absolute; top: 0; left: 0; height: 100%; will-change: transform; }
.mc-pli-a { width: calc(100% + var(--pas-a)); animation: mc-pli-a var(--plis-duree, 14s) linear infinite;
  background: repeating-linear-gradient(76deg, var(--plis-sombre) 0, transparent calc(var(--plis-taille) * .24), var(--plis-clair) calc(var(--plis-taille) * .5), transparent calc(var(--plis-taille) * .76), var(--plis-sombre) var(--plis-taille)); }
.mc-pli-b { width: calc(100% + var(--pas-b)); opacity: .75; animation: mc-pli-b calc(var(--plis-duree, 14s) * 1.45) linear infinite;
  background: repeating-linear-gradient(114deg, var(--plis-sombre) 0, transparent calc(var(--plis-taille-b) * .24), var(--plis-clair) calc(var(--plis-taille-b) * .5), transparent calc(var(--plis-taille-b) * .76), var(--plis-sombre) var(--plis-taille-b)); }
@keyframes mc-pli-a { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(calc(-1 * var(--pas-a)), 0, 0); } }
@keyframes mc-pli-b { from { transform: translate3d(calc(-1 * var(--pas-b)), 0, 0); } to { transform: translate3d(0, 0, 0); } }
.mc-scene[data-vent-fige] .mc-pli, .mc-scene[data-vent-fige] .mc-imprime { animation-play-state: paused; }
.mc-dos { position: relative; overflow: hidden; min-height: var(--h); padding: calc(var(--h) * .1) 24px calc(var(--h) * .22);
  background: var(--mc-tissu); color: var(--mc-encre); text-align: center; display: grid; justify-items: center; align-content: start; gap: 10px; }
.mc-dos::before { content: ""; position: absolute; inset: 0; pointer-events: none; background-color: var(--mc-motif-couleur); opacity: calc(var(--tissu, .5) * .35);
  -webkit-mask: var(--motif-maillot) 0 0 / var(--motif-taille) var(--motif-taille) repeat; mask: var(--motif-maillot) 0 0 / var(--motif-taille) var(--motif-taille) repeat; }
.mc-dos > * { position: relative; }
.mc-nuque { margin: 0; font: 600 clamp(26px, 4.2vw, 54px)/1.15 "Segoe UI", "Noto Naskh Arabic", "Arial", sans-serif; color: var(--metal-moyen); }
.mc-pseudo { margin: calc(var(--h) * .04) 0 0; font: 800 clamp(48px, 11vw, 120px)/.9 var(--police-titre, "Arial Narrow", sans-serif); letter-spacing: .04em; text-transform: uppercase; color: var(--mc-encre); }
.mc-soulignement { width: clamp(120px, 22vw, 240px); height: 2px; background: var(--metal-moyen); }
.mc-filigrane { width: clamp(110px, 20vw, 220px); margin-top: 10px; opacity: .14; }
.mc-dos > p { margin: 6px auto 0; max-width: 40ch; opacity: .7; }
.mc-dos .mc-ourlet { position: absolute; left: 0; right: 0; bottom: 0; width: 100%; height: calc(var(--h) * .2); }
.mc-dos--tissu { position: absolute; left: 40px; right: 40px; top: calc(var(--dos-haut) + 24px); height: var(--dos-hauteur); min-height: 0;
  background: none; padding: 0 24px calc(var(--dos-hauteur) * .2); align-content: center; }
.mc-dos--tissu .mc-ourlet { height: calc(var(--dos-hauteur) * .16); }
.mc-dos--tissu { align-content: start; padding-top: calc(var(--dos-hauteur) * .012); }
.mc-dos--tissu::before { content: none; }
.mc-dos--statique { display: none; }
.mcj-zone { position: absolute; left: 0; right: 0; z-index: 1; top: calc(var(--dos-haut) + var(--zone-haut)); height: var(--zone-hauteur); pointer-events: none; }
.mcj-cartes { position: absolute; inset: 0; perspective: 1400px; }
.mcj-carte { position: absolute; left: 50%; top: 50%; width: var(--carte-l); height: calc(var(--carte-l) * 1.25 + var(--panneau));
  margin-left: calc(var(--carte-l) / -2); margin-top: calc((var(--carte-l) * 1.25 + var(--panneau)) / -2);
  will-change: transform, opacity; cursor: pointer; pointer-events: auto; color: var(--mcj-encre, var(--couleur-texte)); text-align: left; -webkit-tap-highlight-color: transparent;
  transition: transform .6s cubic-bezier(.2, .9, .25, 1), opacity .45s ease-out; }
@keyframes mcj-respire { 0%, 100% { opacity: .1; } 50% { opacity: .6; } }
.mc-scene[data-respiration] .mcj-carte:not(.apercu):not(.retournee) .mcj-contour { animation: mcj-respire 2.6s ease-in-out var(--delai-respiration, 0s) infinite; }
.mcj-retour {
  position: absolute; z-index: 60; display: none; align-items: center; gap: 8px; min-height: 40px; padding: 8px 16px;
  border: 1px solid var(--metal-moyen); border-radius: 999px; background: color-mix(in srgb, var(--couleur-surface) 92%, transparent); transform: translate(-50%, -50%);
  color: var(--couleur-texte); font: 700 12px/1 system-ui, sans-serif; letter-spacing: .08em; cursor: pointer; pointer-events: auto; white-space: nowrap;
}
.mcj-retour:hover { background: var(--couleur-surface); border-color: var(--metal-clair); }
.mc-scene[data-mode="selection"] .mcj-retour { display: inline-flex; }
.mcj-survol { position: absolute; inset: 0; perspective: 1100px; transition: transform var(--cj-duree, .8s) var(--cj-courbe, ease); }
.mcj-carte.retournee .mcj-survol { transform: scale(var(--cj-agrandi, 1.1)); }
.mcj-flotte { position: absolute; inset: 0; }
.mcj-flotte.flotte { animation: mcj-flotte 3.2s ease-in-out calc(var(--cj-duree, .8s) * .5) infinite; }
@keyframes mcj-flotte {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
  30% { transform: translate3d(0, calc(var(--cj-flotte, 6px) * -1), 0) rotate(.6deg); }
  70% { transform: translate3d(0, calc(var(--cj-flotte, 6px) * .5), 0) rotate(-.5deg); } }
.mcj-pivot { position: absolute; inset: 0; transform-style: preserve-3d; transition: transform var(--cj-duree, .8s) var(--cj-courbe, ease); }
.mcj-carte.retournee .mcj-pivot { transform: rotateY(180deg); }
.mcj-face { position: absolute; inset: 0; overflow: hidden; border-radius: 12px; border: 1.5px solid transparent; backface-visibility: hidden; -webkit-backface-visibility: hidden;
  container-type: inline-size; box-shadow: 0 18px 40px -18px var(--couleur-nuit);
  background: linear-gradient(var(--mcj-fond, var(--couleur-surface)), var(--mcj-fond, var(--couleur-surface))) padding-box,
              linear-gradient(150deg, var(--metal-reflet), var(--metal-sombre) 35%, var(--metal-clair) 65%, var(--metal-sombre)) border-box; }
.mcj-voile { position: absolute; inset: 0; border-radius: 12px; background: var(--couleur-nuit); opacity: 0; pointer-events: none; transition: opacity .25s ease-out; }
.mcj-carte:not(.retournee) .mcj-survol { transition: transform .45s cubic-bezier(.3, 1.5, .5, 1); }
.mcj-carte.apercu .mcj-survol { transform: translate3d(0, calc(var(--apercu-leve, 12px) * -1), 0) rotate(var(--apercu-rotation, 3deg)) scale(1.04); }
.mc-scene[data-indice-clic] .mcj-cartes .mcj-carte:last-child.apercu .mcj-survol { transform: translate3d(0, calc(var(--apercu-leve, 12px) * -1), 0) rotate(var(--apercu-rotation, 3deg)) scale(var(--c-survol, 1.12)); }
.mcj-carte.apercu .mcj-flotte { animation: mcj-balance 2.6s ease-in-out .45s infinite; }
@keyframes mcj-balance { 0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); } 50% { transform: translate3d(0, -4px, 0) rotate(.8deg); } }
.mcj-contour { position: absolute; inset: -3px; border-radius: 14px; border: 1.5px solid var(--metal-reflet); pointer-events: none; opacity: 0; transition: opacity .3s;
  box-shadow: 0 0 16px color-mix(in srgb, var(--metal-reflet) 45%, transparent), inset 0 0 12px color-mix(in srgb, var(--metal-reflet) 25%, transparent); }
.mcj-carte.apercu .mcj-contour { opacity: 1; }
.mcj-carte.apercu .mcj-brillance { opacity: 1; animation: mcj-brillance 1.4s ease-out both; }
.mcj-indice { position: absolute; left: 50%; bottom: -34px; padding: 6px 14px; border-radius: 999px; white-space: nowrap; pointer-events: none;
  font: 700 10px/1 system-ui, sans-serif; letter-spacing: .2em; text-transform: uppercase; color: var(--couleur-surface);
  background: linear-gradient(135deg, var(--metal-sombre), var(--metal-clair) 45%, var(--metal-reflet) 55%, var(--metal-clair));
  opacity: 0; transform: translate(-50%, 6px); transition: opacity .3s, transform .3s; }
.mcj-carte.apercu .mcj-indice { opacity: 1; transform: translate(-50%, 0); }
.mc-scene[data-sans-indice] .mcj-indice { display: none; }
.mcj-photo { position: relative; height: calc(var(--carte-l) * 1.25); overflow: hidden;
  background: radial-gradient(circle at 50% 38%, var(--couleur-lueur) 0 18%, transparent 19%), radial-gradient(ellipse 60% 40% at 50% 100%, var(--couleur-lueur) 0 70%, transparent 71%), var(--couleur-surface); }
.mcj-photo img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: grayscale(var(--cj-desat, .25)) contrast(1.06); }
.mcj-sans-photo img { display: none; }
.mcj-teinte { position: absolute; inset: 0; mix-blend-mode: overlay; opacity: var(--cj-teinte, .4);
  background: linear-gradient(200deg, var(--metal-reflet) 0%, var(--metal-moyen) 45%, var(--metal-sombre) 100%); }
.mcj-trame { position: absolute; inset: 0; opacity: var(--cj-trame, .2); background: repeating-linear-gradient(0deg, var(--couleur-nuit) 0 1px, transparent 1px 3px); }
.mcj-degrade { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 42%, color-mix(in srgb, var(--mcj-fond, var(--couleur-surface)) 70%, transparent) 66%, color-mix(in srgb, var(--mcj-fond, var(--couleur-surface)) 94%, transparent) 84%, var(--mcj-fond, var(--couleur-surface)) 100%); }
.mcj-brillance { position: absolute; inset: -10% -60%; opacity: 0; pointer-events: none;
  background: linear-gradient(105deg, transparent 40%, color-mix(in srgb, var(--metal-reflet) 45%, transparent) 50%, transparent 60%); }
.mcj-carte.active .mcj-brillance { opacity: 1; animation: mcj-brillance 4.5s ease-in-out infinite; }
.mc-scene[data-sans-reflet] .mcj-brillance { display: none; }
@keyframes mcj-brillance { 0% { transform: translate3d(-60%, 0, 0); } 45%, 100% { transform: translate3d(60%, 0, 0); } }
.mcj-numero { position: absolute; right: 7cqw; top: 4cqw; font: 800 19cqw/1 var(--police-titre, "Arial Narrow", sans-serif); color: transparent; -webkit-text-stroke: 1px var(--metal-clair); opacity: .85; }
.mcj-identite { position: absolute; left: 7cqw; right: 7cqw; bottom: 4cqw; }
.mcj-identite small { display: block; font: 700 3.6cqw/1 system-ui, sans-serif; letter-spacing: .3em; text-transform: uppercase; color: var(--metal-clair); }
.mcj-pseudo { margin: 1.5cqw 0 0; font: 800 15cqw/.9 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .02em; color: var(--mcj-encre, var(--couleur-texte)); }
.mcj-panneau { box-sizing: border-box; height: var(--panneau); padding: 10px 7cqw 12px; display: grid; align-content: space-between; }
.mcj-avant--pro .mcj-photo { height: calc(var(--carte-l) * 1.25 + var(--panneau) * var(--photo-gain, .3)); }
.mcj-avant--pro .mcj-panneau { height: calc(var(--panneau) * (1 - var(--photo-gain, .3))); padding-top: 4px; padding-bottom: 9px; align-content: end; gap: 6px; }
.mcj-direct { position: absolute; left: 4cqw; top: 4cqw; display: none; align-items: center; gap: 1.6cqw; padding: 1.2cqw 2.6cqw; border-radius: 999px;
  font: 800 3.2cqw/1 system-ui, sans-serif; letter-spacing: .14em; color: var(--mcj-encre, var(--couleur-texte)); background: color-mix(in srgb, var(--couleur-direct) 85%, transparent);
  box-shadow: 0 0 3cqw color-mix(in srgb, var(--couleur-direct) 60%, transparent); }
.mcj-direct i { width: 1.8cqw; height: 1.8cqw; border-radius: 50%; background: var(--mcj-encre, var(--couleur-texte)); animation: mcj-direct 1.2s ease-in-out infinite; }
@keyframes mcj-direct { 50% { opacity: .2; } }
.mc-scene[data-direct] .mcj-direct { display: inline-flex; }
.mcj-bande { display: flex; align-items: center; justify-content: space-between; gap: 6px; font: 600 9px/1 system-ui, sans-serif; letter-spacing: .14em; text-transform: uppercase; }
.mcj-bande > span { display: flex; align-items: center; gap: 4px; opacity: .75; min-width: 0; white-space: nowrap; overflow: hidden; }
.mcj-bande svg { flex: none; width: 13px; height: 13px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.mcj-reseaux { display: flex; gap: 7px; color: var(--metal-clair); }
.mcj-reseaux .en-direct { color: var(--couleur-direct); }
.mc-scene:not([data-reseaux]) .mcj-bande, .mc-scene:not([data-reglages-pro]) .mcj-avant--pro .mcj-stats { display: none; }
.mc-scene[data-compact] .mcj-bande { display: none; }
.mc-scene[data-calme] .mcj-direct i { animation: none; }
.mcj-ligne { display: flex; justify-content: space-between; gap: 8px; font: 700 12px/1.2 system-ui, sans-serif; }
.mcj-ligne span { display: block; font-size: 9px; font-weight: 600; letter-spacing: .2em; text-transform: uppercase; opacity: .55; margin-bottom: 3px; }
.mcj-ligne > div:last-child { text-align: right; }
.mcj-losange { display: inline-block; width: 7px; height: 7px; margin-right: 6px; transform: rotate(45deg) translateY(-1px); background: linear-gradient(135deg, var(--metal-reflet), var(--metal-sombre)); }
.mcj-stats { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid color-mix(in srgb, var(--metal-moyen) 35%, transparent); padding-top: 8px; text-align: center; }
.mcj-stats b { display: block; font: 700 20px/1 var(--police-titre, "Arial Narrow", sans-serif); color: var(--metal-clair); }
.mcj-stats span { font: 600 9px/1 system-ui, sans-serif; letter-spacing: .2em; text-transform: uppercase; opacity: .55; }
.mc-scene[data-compact] .mcj-panneau { padding: 6px 5cqw 7px; }
.mc-scene[data-compact] .mcj-ligne { justify-content: center; font-size: 10px; }
.mc-scene[data-compact] .mcj-ligne > div:first-child, .mc-scene[data-compact] .mcj-ligne span { display: none; }
.mc-scene[data-compact] .mcj-stats { padding-top: 4px; }
.mc-scene[data-compact] .mcj-stats b { font-size: 14px; }
.mc-scene[data-compact] .mcj-stats span { font-size: 7px; letter-spacing: .12em; }
.mcj-dos { transform: rotateY(180deg); display: grid; justify-items: center; align-content: start; text-align: center; }
.mcj-dos::before { content: ""; position: absolute; inset: 0; pointer-events: none; background-color: var(--couleur-motif); opacity: .16;
  --etoile: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.2'%3E%3Crect x='12' y='12' width='16' height='16'/%3E%3Crect x='12' y='12' width='16' height='16' transform='rotate(45 20 20)'/%3E%3C/g%3E%3Cpath d='M0 -2.5L2.5 0L0 2.5L-2.5 0Z M40 -2.5L42.5 0L40 2.5L37.5 0Z M0 37.5L2.5 40L0 42.5L-2.5 40Z M40 37.5L42.5 40L40 42.5L37.5 40Z'/%3E%3C/svg%3E");
  -webkit-mask: var(--etoile) 0 0 / 34px 34px repeat; mask: var(--etoile) 0 0 / 34px 34px repeat; }
.mcj-dos > * { position: relative; }
.mcj-dos-col { position: absolute; left: 0; top: 0; width: 100%; height: 16%; }
.mcj-dos-arabe { margin: 17cqw 0 0; font: 600 8cqw/1 "Segoe UI", "Noto Naskh Arabic", "Arial", sans-serif; color: var(--metal-moyen); }
.mcj-dos-pseudo { margin: 9cqw 0 0; font: 800 15cqw/.9 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .06em; color: var(--mcj-encre, var(--couleur-texte)); }
.mcj-dos-numero { margin: 3cqw 0 0; font: 800 62cqw/.85 var(--police-titre, "Arial Narrow", sans-serif); letter-spacing: -.02em;
  background: linear-gradient(180deg, var(--metal-reflet) 0%, var(--metal-clair) 40%, var(--metal-moyen) 70%, var(--metal-sombre) 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; }
.mcj-dos-ourlet { position: absolute; left: 0; bottom: 0; width: 100%; height: 9%; }
.mcj-dos .mcj-rappel { position: absolute; left: 50%; bottom: 13%; display: inline-flex; align-items: center; gap: .5em; padding: .55em 1.1em; border-radius: 999px;
  white-space: nowrap; font: 800 4.4cqw/1 system-ui, sans-serif; letter-spacing: .14em; text-transform: uppercase; color: var(--couleur-nuit);
  background: linear-gradient(135deg, var(--metal-sombre), var(--metal-clair) 40%, var(--metal-reflet) 52%, var(--metal-clair) 64%, var(--metal-moyen));
  opacity: 0; transform: translate(-50%, 30%); transition: opacity .35s, transform .25s ease-out; }
.mcj-rappel i { font-style: normal; font-size: 1.35em; line-height: 1; }
.mc-scene[data-rappel] .mcj-carte.active.retournee .mcj-rappel { opacity: 1; transform: translate(-50%, 0); transition-delay: .55s; }
.mc-scene[data-rappel] .mcj-carte.active.retournee .mcj-rappel i { display: inline-block; }
@keyframes mcj-rappel { 0%, 100% { transform: translate(-50%, 0) scale(1); } 50% { transform: translate(-50%, 0) scale(1.07); } }
@keyframes mcj-tourne { 0%, 55% { transform: none; } 100% { transform: rotate(-360deg); } }
.mcj-carte.active.retournee.survolee .mcj-survol { transform: perspective(900px) translate3d(0, -6px, 0) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) scale(var(--cj-agrandi, 1.1)); transition: transform .14s ease-out; }
.mcj-carte.active.retournee.survolee .mcj-contour { opacity: 1; }
.mc-scene[data-rappel] .mcj-carte.active.retournee.survolee .mcj-rappel { transform: translate(-50%, 0) scale(1.07); transition-delay: 0s; }
.mc-scene[data-rappel] .mcj-carte.active.retournee.survolee .mcj-rappel i { animation: mcj-tourne-une .7s cubic-bezier(.5, 0, .3, 1); }
@keyframes mcj-tourne-une { from { transform: none; } to { transform: rotate(-360deg); } }
.mcj-entree { position: absolute; inset: 0; will-change: transform, opacity; }
.mcj-curseur { position: absolute; left: var(--c-x, 90%); top: var(--c-y, 3%); z-index: 5; width: var(--c-taille, calc(var(--carte-l) * .2)); pointer-events: none;
  transform-origin: var(--c-hx, 14%) var(--c-hy, 8%); transform: translate(calc(-1 * var(--c-hx, 14%)), calc(-1 * var(--c-hy, 8%))) rotate(var(--c-rot, 0deg));
  opacity: 0; transition: opacity .15s; filter: drop-shadow(0 4px 8px var(--couleur-ombre, var(--couleur-nuit))); }
.mc-scene[data-indice-clic] .mcj-curseur { opacity: 1; transition-delay: var(--c-delai, 0s); }
.mcj-curseur svg { position: relative; display: block; width: 100%; height: 100%; overflow: visible; transform-origin: var(--c-hx, 14%) var(--c-hy, 8%); }
.mcj-curseur i { position: absolute; left: var(--c-hx, 14%); top: var(--c-hy, 8%); width: 150%; aspect-ratio: 1; margin: -75% 0 0 -75%; border-radius: 50%;
  border: 2px solid var(--mcj-encre, var(--couleur-texte)); opacity: 0; }
.mcj-curseur .trace { fill: var(--mcj-encre, var(--couleur-texte)); stroke: var(--mcj-fond, var(--couleur-nuit)); stroke-width: 1.6; stroke-linejoin: round; }
.mcj-curseur .trace.or { fill: url(#mcj-curseur-or); stroke-width: 1.4; }
.mcj-curseur[data-style="doigt"] .trace { fill: color-mix(in srgb, var(--mcj-encre, var(--couleur-texte)) 45%, transparent); stroke: var(--mcj-encre, var(--couleur-texte)); stroke-width: 1.4; }
.mcj-curseur[data-style="souris"] .trace { fill: color-mix(in srgb, var(--mcj-fond, var(--couleur-nuit)) 75%, transparent); stroke: var(--mcj-encre, var(--couleur-texte)); stroke-width: 2.6; }
.mcj-curseur .trait { fill: none; stroke: var(--mcj-encre, var(--couleur-texte)); stroke-width: 2; stroke-linecap: round; opacity: .75; }
.mcj-curseur .molette { fill: var(--mcj-encre, var(--couleur-texte)); }
.mcj-curseur .bouton { fill: var(--metal-clair); opacity: 0; }
.mc-scene[data-indice-clic] .mcj-curseur svg { animation: mcj-curseur-clic var(--c-cycle, 2.6s) ease-in-out var(--c-decalage, -.64s) infinite; }
.mc-scene[data-indice-clic] .mcj-curseur i { animation: mcj-curseur-onde var(--c-cycle, 2.6s) ease-out var(--c-decalage, -.64s) infinite; }
.mc-scene[data-indice-clic] .mcj-curseur .bouton { animation: mcj-curseur-bouton var(--c-cycle, 2.6s) linear var(--c-decalage, -.64s) infinite; }
.mc-scene[data-indice-clic] .mcj-carte:last-child .mcj-pivot { animation: mcj-indice-carte var(--c-cycle, 2.6s) ease-in-out var(--c-decalage, -.64s) infinite; }
.mc-scene[data-indice-clic] .mcj-cartes .mcj-carte:last-child .mcj-contour { animation: mcj-indice-contour var(--c-cycle, 2.6s) ease-out var(--c-decalage, -.64s) infinite; }
@keyframes mcj-curseur-clic { 0%, 34% { transform: none; } 40% { transform: scale(var(--c-appui, .8)); } 48%, 100% { transform: none; } }
@keyframes mcj-curseur-onde { 0%, 39% { opacity: 0; transform: scale(.2); } 41% { opacity: var(--c-onde, .95); } 78%, 100% { opacity: 0; transform: scale(1); } }
@keyframes mcj-curseur-bouton { 0%, 36% { opacity: 0; } 40%, 52% { opacity: .95; } 66%, 100% { opacity: 0; } }
@keyframes mcj-indice-carte { 0%, 34% { transform: none; } 40% { transform: scale(var(--c-carte, .965)); } 48% { transform: scale(var(--c-carte-rebond, 1.012)); } 56%, 100% { transform: none; } }
@keyframes mcj-indice-contour { 0%, 38% { opacity: 0; } 41% { opacity: var(--c-lisere, 1); } 80%, 100% { opacity: 0; } }
@keyframes mcj-appel { 0% { opacity: .95; transform: scale(1); } 70%, 100% { opacity: 0; transform: scale(1.09); } }
.mcj-dos p, .mcj-carte p { max-width: none; opacity: 1; }
.mcj-holo { position: absolute; top: 0; bottom: 0; left: var(--holo-x); width: var(--holo-l); pointer-events: none; opacity: 0; transition: opacity .35s ease-out;
  transform: translate(var(--fiche-dx, 0px), var(--fiche-dy, 0px)) scale(var(--fiche-zoom, 1)); transform-origin: 50% 100%; }
.mcj-holo--agent { transform: translate(var(--agent-dx, 0px), var(--agent-dy, 0px)) scale(var(--agent-zoom, 1)); }
.mcj-holo.visible { opacity: 1; }
.mcj-holo-faisceau { position: absolute; left: 0; right: 0; top: calc(var(--holo-haut) + var(--holo-h) * .67); bottom: 6px; clip-path: polygon(50% 100%, 0 0, 100% 0); opacity: var(--faisceau, 1);
  background: linear-gradient(0deg,
    color-mix(in srgb, var(--holo-couleur) 75%, transparent) 0%,
    color-mix(in srgb, var(--holo-couleur) 52%, transparent) 12%,
    color-mix(in srgb, var(--holo-couleur) 34%, transparent) 28%,
    color-mix(in srgb, var(--holo-couleur) 20%, transparent) 46%,
    color-mix(in srgb, var(--holo-couleur) 10%, transparent) 66%,
    color-mix(in srgb, var(--holo-couleur) 4%, transparent) 84%,
    transparent 100%);
  mix-blend-mode: screen; transform-origin: 50% 100%; transform: scaleY(0); transition: transform .4s ease-out .15s; }
.mcj-holo.visible .mcj-holo-faisceau { transform: none; transition-delay: 0s; animation: mcj-holo-scintille 3.1s steps(1) infinite; }
.mcj-holo-source { position: absolute; left: 30%; right: 30%; bottom: 0; height: 12px; border-radius: 50%;
  background: radial-gradient(ellipse at center, var(--holo-couleur) 0%, color-mix(in srgb, var(--holo-couleur) 45%, transparent) 45%, transparent 72%); }
.mcj-holo-projection { position: absolute; left: 0; width: 100%; top: var(--holo-haut); height: var(--holo-h); mix-blend-mode: screen; opacity: 0; transition: opacity .18s; }
.mcj-holo.visible .mcj-holo-projection { opacity: .9; animation: mcj-holo-allumage .6s linear .42s both; }
@keyframes mcj-holo-allumage {
  0% { opacity: 0; } 12% { opacity: .85; } 20% { opacity: .05; } 34% { opacity: .9; } 42% { opacity: .2; }
  56% { opacity: .9; } 66% { opacity: .55; } 76%, 100% { opacity: .9; } }
.mcj-holo-tremble { position: absolute; inset: 0; isolation: isolate; }
.mcj-holo.visible .mcj-holo-tremble { animation: mcj-holo-tremble 2.3s steps(1) infinite; }
.mcj-holo-image { position: absolute; inset: 0; overflow: hidden; border-radius: 12px; filter: grayscale(1) contrast(1.25) brightness(1.15); }
.mcj-holo-image > .mcj-face { inset: auto; left: 0; top: 0; width: var(--carte-l); height: calc(var(--carte-l) * 1.25 + var(--panneau)); transform-origin: 0 0; transform: scale(var(--holo-echelle)); }
.mcj-holo-teinte { position: absolute; inset: 0; border-radius: 12px; background: var(--holo-couleur); mix-blend-mode: color; }
.mcj-holo-lignes { position: absolute; inset: -8px 0 0; background: repeating-linear-gradient(0deg, var(--couleur-nuit) 0 2px, transparent 2px 5px); opacity: var(--holo-lignes, .55); }
.mcj-holo.visible .mcj-holo-lignes { animation: mcj-holo-lignes .9s linear infinite; }
@keyframes mcj-holo-lignes { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(0, 5px, 0); } }
@keyframes mcj-holo-tremble {
  0% { transform: translate3d(0, 0, 0); opacity: 1; }
  7% { transform: translate3d(calc(var(--holo-force) * 3px), 0, 0); opacity: calc(1 - var(--holo-force) * .25); }
  9% { transform: translate3d(0, 0, 0); opacity: 1; }
  38% { transform: translate3d(calc(var(--holo-force) * -2px), 0, 0) skewX(calc(var(--holo-force) * 2deg)); opacity: calc(1 - var(--holo-force) * .4); }
  40% { transform: translate3d(0, 0, 0); opacity: 1; }
  66% { transform: translate3d(calc(var(--holo-force) * 1.5px), calc(var(--holo-force) * -1px), 0); opacity: calc(1 - var(--holo-force) * .15); }
  69% { transform: translate3d(0, 0, 0); opacity: 1; }
  88% { transform: translate3d(calc(var(--holo-force) * -4px), 0, 0); opacity: calc(1 - var(--holo-force) * .5); }
  89% { transform: translate3d(0, 0, 0); opacity: 1; } }
@keyframes mcj-holo-scintille { 0% { opacity: var(--faisceau, 1); } 37% { opacity: calc(var(--faisceau, 1) * .8); } 39% { opacity: var(--faisceau, 1); } 87% { opacity: calc(var(--faisceau, 1) * .65); } 89% { opacity: var(--faisceau, 1); } }
.mcj-holo--agent .mcj-holo-image { border-radius: 0; overflow: visible; }
.mcj-holo-agent-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; }
.mcj-holo--agent .mcj-holo-teinte { border-radius: 0; -webkit-mask: var(--agent-masque) center / contain no-repeat; mask: var(--agent-masque) center / contain no-repeat; }
.mcj-holo--agent .mcj-holo-lignes { -webkit-mask: var(--agent-masque) center / contain no-repeat; mask: var(--agent-masque) center / contain no-repeat; }
.mcj-holo--agent .mcj-holo-faisceau { left: 30%; right: 30%; top: calc(var(--holo-haut) + var(--holo-h) * .66); }
.mcj-holo-nom { display: none; }
.mc-scene[data-univers="tajine"] .mcj-holo--agent .mcj-holo-image { filter: saturate(.8) contrast(1.1) brightness(1.1); }
.mc-scene[data-univers="tajine"] .mcj-holo--agent .mcj-holo-teinte { opacity: .4; }
.mc-scene[data-univers="tajine"] .mcj-holo--agent .mcj-holo-faisceau { left: 16%; right: 16%; top: calc(var(--holo-haut) + var(--holo-h) * .84); }
.mc-scene[data-univers="tajine"] .mcj-holo--agent.visible .mcj-holo-projection { animation: mcj-holo-allumage .6s linear .42s both, mcj-objet-flotte 3.2s ease-in-out 1s infinite; }
@keyframes mcj-objet-flotte {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
  50% { transform: translate3d(0, calc(var(--holo-h) * -.035), 0) rotate(-1.5deg); } }
.mc-scene[data-univers="tajine"] .mcj-holo-nom { display: block; position: absolute; left: 0; width: 100%; top: calc(var(--holo-haut) + var(--holo-h) * .1);
  text-align: center; font: 700 clamp(13px, calc(var(--holo-h) * .06), 22px)/1 var(--police-titre, sans-serif); letter-spacing: .14em; text-transform: uppercase;
  color: color-mix(in srgb, var(--holo-couleur) 55%, #fff); opacity: 0; transition: opacity .2s; }
.mc-scene[data-univers="tajine"] .mcj-holo-nom::before { content: '◆ '; font-size: .7em; vertical-align: .15em; }
.mc-scene[data-univers="tajine"] .mcj-holo--agent.visible .mcj-holo-nom { opacity: .95; transition-delay: 1s; }
.mcj-holo--agent .mcj-holo-source { left: 38%; right: 38%; }
.mcj-holo--agent.visible .mcj-holo-tremble { animation-delay: -1.1s; }
.mcj-nom-fond { position: absolute; left: 50%; top: 48%; height: calc(88% * var(--nom-fond-taille, 1)); aspect-ratio: 700 / 1024; transform: translate(-50%, calc(-50% + var(--nom-fond-y, 0%))); background: var(--holo-couleur); opacity: var(--nom-fond, .3);
  -webkit-mask: var(--fond) center / contain no-repeat; mask: var(--fond) center / contain no-repeat; }
.mc-scene[data-univers="tajine"] .mcj-nom-fond { display: none; }
.mcj-tranche { position: absolute; inset: 0; display: none; -webkit-mask: var(--agent-masque) center / contain no-repeat; mask: var(--agent-masque) center / contain no-repeat;
  transition: clip-path var(--br-glisse) cubic-bezier(.3, var(--br-rebond), .45, 1); }
.mcj-tranche > div { position: absolute; inset: 0; isolation: isolate; will-change: transform; transition: transform var(--br-glisse) cubic-bezier(.3, var(--br-rebond), .45, 1); }
.mcj-tranche img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; filter: grayscale(1) contrast(1.4) brightness(1.5); }
.mcj-tranche:nth-child(odd) { filter: hue-rotate(var(--br-derive)) saturate(1.6); }
.mcj-tranche:nth-child(even) { filter: hue-rotate(calc(var(--br-derive) * -1)) saturate(1.6); }
.mcj-holo--agent[data-brouille] .mcj-tranche { display: block; }
.mcj-scan { position: absolute; inset: 0; pointer-events: none; opacity: 0; background-repeat: no-repeat; background-size: 100% 300%;
  background-image: linear-gradient(180deg, transparent 0%, transparent 42%, color-mix(in srgb, var(--holo-couleur) 25%, transparent) 48%, var(--holo-couleur) 50%, transparent 51%, transparent 100%);
  -webkit-mask: var(--agent-masque) center / contain no-repeat; mask: var(--agent-masque) center / contain no-repeat; }
.mcj-scan.joue { animation: mcj-scan .55s cubic-bezier(.4, 0, .2, 1); }
@keyframes mcj-scan { 0% { opacity: 1; background-position: 0 100%; } 85% { opacity: 1; } 100% { opacity: 0; background-position: 0 0; } }
.mcj-holo--agent .mcj-holo-image.flash { animation: mcj-flash .45s ease-out; }
@keyframes mcj-flash { 0% { filter: grayscale(1) contrast(1.25) brightness(2); } 100% { filter: grayscale(1) contrast(1.25) brightness(1.15); } }
.mcj-holo--fiche .mcj-holo-image { filter: none; border-radius: 0; overflow: visible; container-type: inline-size; }
.mcj-holo--fiche .mcj-holo-teinte { display: none; }
.mcj-holo--fiche .mcj-holo-faisceau { left: 26%; right: 26%; top: calc(var(--holo-haut) + var(--holo-h)); }
.mcb-carte { position: absolute; inset: 0; color: var(--holo-texte); font-family: var(--lc-texte, system-ui, sans-serif); text-align: left;
  --holo-doux: color-mix(in srgb, var(--holo-couleur) 45%, transparent); --holo-pale: color-mix(in srgb, var(--holo-couleur) 16%, transparent);
  clip-path: polygon(0 0, calc(100% - var(--lc-coins, 6cqw)) 0, 100% var(--lc-coins, 6cqw), 100% 100%, var(--lc-coins, 6cqw) 100%, 0 calc(100% - var(--lc-coins, 6cqw))); }
.mcb-carte::before { content: ""; position: absolute; inset: 0; opacity: var(--lc-fond, 1);
  background: linear-gradient(160deg, var(--holo-pale), color-mix(in srgb, var(--holo-couleur) 4%, transparent) 70%); }
.mcb-carte p { margin: 0; max-width: none; opacity: 1; }
.mcb-cadre { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; opacity: var(--lc-cadre, 1); }
.mcb-cadre polygon { fill: none; stroke: var(--holo-doux); stroke-width: 1.2; vector-effect: non-scaling-stroke; }
.mcb-contenu { position: absolute; inset: 0; display: flex; flex-direction: column; }
.mcb-haut { position: relative; flex: 1; min-height: 0; }
.mc-scene[data-lc-photo-fixe] .mcb-haut { flex: 0 0 calc(var(--lc-photo-hauteur) * 100%); }
.mcb-photo { position: absolute; left: var(--lc-photo-gauche, 22cqw); right: 0; top: 0; bottom: 0; overflow: hidden; isolation: isolate;
  -webkit-mask: linear-gradient(#000 var(--lc-fondu, 60%), transparent 100%); mask: linear-gradient(#000 var(--lc-fondu, 60%), transparent 100%);
  background: radial-gradient(circle at 50% 38%, var(--couleur-lueur) 0 18%, transparent 19%), radial-gradient(ellipse 60% 40% at 50% 100%, var(--couleur-lueur) 0 70%, transparent 71%), var(--couleur-surface); }
.mcb-photo img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 50% var(--lc-cadrage, 18%);
  transform: scale(var(--lc-photo-zoom, 1)); transform-origin: 50% var(--lc-cadrage, 18%); filter: grayscale(1) contrast(1.15) brightness(1.08); }
.mcb-photo.mcb-sans-photo img { display: none; }
.mcb-teinte { position: absolute; inset: 0; background: var(--holo-couleur); mix-blend-mode: color; }
.mcb-tiroir { position: absolute; left: 100%; top: 20%; overflow: hidden; padding: 3cqw 3cqw 3cqw 0; margin: -3cqw 0 0; pointer-events: none; }
.mcb-tiroir-interieur { display: grid; gap: 2.6cqw; padding: 2.6cqw 2.6cqw 2.6cqw 2.2cqw; pointer-events: auto;
  background: linear-gradient(90deg, color-mix(in srgb, var(--holo-couleur) 22%, transparent), color-mix(in srgb, var(--holo-couleur) 8%, transparent));
  border: 1px solid color-mix(in srgb, var(--holo-couleur) 45%, transparent); border-left: 0;
  clip-path: polygon(0 0, calc(100% - 3cqw) 0, 100% 3cqw, 100% calc(100% - 3cqw), calc(100% - 3cqw) 100%, 0 100%);
  transform: translateX(-102%); animation: mcb-tiroir-sort .55s cubic-bezier(.2, .9, .3, 1.25) 1s forwards; }
@keyframes mcb-tiroir-sort { to { transform: none; } }
.mcb-tiroir-interieur { position: relative; overflow: hidden; }
.mcb-tiroir-interieur::before { content: ""; position: absolute; inset: -8px 0 0; pointer-events: none; opacity: var(--holo-lignes, .55);
  background: repeating-linear-gradient(0deg, var(--couleur-nuit) 0 2px, transparent 2px 5px); animation: mcj-holo-lignes .9s linear infinite; }
.mcb-tiroir-interieur > * { z-index: 1; }
.mcb-bouton { position: relative; display: grid; place-items: center; width: 11cqw; height: 11cqw; cursor: pointer; color: var(--holo-texte); outline: none;
  opacity: 0; animation: mcb-bouton-allume .35s ease-out forwards; animation-delay: calc(1.35s + var(--rang, 0) * .1s);
  transition: transform .35s cubic-bezier(.3, 1.8, .4, 1), filter .2s, color .2s; }
.mcb-bouton:nth-child(2) { --rang: 1; }
.mcb-bouton:nth-child(3) { --rang: 2; }
@keyframes mcb-bouton-allume { 0% { opacity: 0; } 40% { opacity: 1; } 55% { opacity: .3; } 100% { opacity: 1; } }
.mcb-bouton-fond { position: absolute; inset: 0; overflow: hidden; clip-path: polygon(0 0, 72% 0, 100% 28%, 100% 100%, 0 100%);
  background: linear-gradient(160deg, color-mix(in srgb, var(--holo-couleur) 32%, transparent), color-mix(in srgb, var(--holo-couleur) 12%, transparent)); transition: background .2s; }
.mcb-bouton-fond::after { content: ""; position: absolute; left: 14%; right: 14%; bottom: 8%; height: 2px; background: var(--holo-couleur); opacity: .8; }
.mcb-bouton-fond::before { content: ""; position: absolute; inset: -20%; background: linear-gradient(115deg, transparent 35%, color-mix(in srgb, var(--holo-texte) 75%, transparent) 50%, transparent 65%); transform: translateX(-120%); }
.mcb-bouton svg { position: relative; z-index: 1; width: 56%; height: 56%; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; transition: transform .35s cubic-bezier(.3, 1.8, .4, 1); }
.mcb-bouton:hover, .mcb-bouton:focus-visible { transform: scale(1.2); color: var(--couleur-nuit);
  filter: drop-shadow(0 0 1.5cqw var(--holo-couleur)) drop-shadow(0 0 4cqw color-mix(in srgb, var(--holo-couleur) 70%, transparent)); }
.mcb-bouton:hover .mcb-bouton-fond, .mcb-bouton:focus-visible .mcb-bouton-fond { background: var(--holo-texte); animation: mcb-flash .45s ease-out; }
.mcb-bouton:hover .mcb-bouton-fond::before, .mcb-bouton:focus-visible .mcb-bouton-fond::before { transform: translateX(120%); transition: transform .5s ease-out; }
.mcb-bouton:hover svg, .mcb-bouton:focus-visible svg { transform: rotate(-10deg) scale(1.08); }
@keyframes mcb-flash { 0% { filter: brightness(1.8); } 100% { filter: none; } }
.mcb-bouton:active { transform: scale(.94); transition-duration: .08s; }
.mcb-bouton.en-direct { color: var(--couleur-direct); }
.mcb-bouton.en-direct .mcb-bouton-fond { background: color-mix(in srgb, var(--couleur-direct) 22%, transparent); }
.mcb-bouton.en-direct .mcb-bouton-fond::after { background: var(--couleur-direct); }
.mcb-bouton.en-direct:hover, .mcb-bouton.en-direct:focus-visible { color: var(--holo-texte);
  filter: drop-shadow(0 0 1.5cqw var(--couleur-direct)) drop-shadow(0 0 4cqw color-mix(in srgb, var(--couleur-direct) 70%, transparent)); }
.mcb-bouton.en-direct:hover .mcb-bouton-fond, .mcb-bouton.en-direct:focus-visible .mcb-bouton-fond { background: var(--couleur-direct); }
.mc-scene[data-calme] .mcb-tiroir-interieur { animation: none; transform: none; }
.mc-scene[data-calme] .mcb-tiroir-interieur::before { animation: none; }
.mc-scene[data-calme] .mcb-bouton { animation: none; opacity: 1; transition: none; }
.mc-scene[data-calme] .mcb-bouton-fond::before { display: none; }
.mcb-direct { display: block; pointer-events: auto; cursor: pointer; color: var(--holo-texte); text-decoration: none; -webkit-mask: none; mask: none; }
.mcb-direct img { filter: saturate(1.1) contrast(1.05); object-position: 50% 50%; }
.mcb-direct::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 45%, color-mix(in srgb, var(--couleur-nuit) 85%, transparent) 100%); }
.mcb-direct-badge { position: absolute; z-index: 1; right: 4cqw; top: 12cqw; display: inline-flex; align-items: center; gap: 1.4cqw; padding: 1cqw 2.2cqw; border-radius: 1cqw;
  font: 800 3cqw/1 system-ui, sans-serif; letter-spacing: .14em; color: var(--holo-texte); background: var(--couleur-direct); }
.mcb-direct-badge i { width: 1.6cqw; height: 1.6cqw; border-radius: 50%; background: currentColor; animation: mcj-direct 1.2s ease-in-out infinite; }
.mcb-direct-lecture { position: absolute; z-index: 1; left: 50%; top: 38%; width: 14cqw; height: 14cqw; margin: -7cqw 0 0 -7cqw; border-radius: 50%;
  background: color-mix(in srgb, var(--couleur-nuit) 55%, transparent); box-shadow: 0 0 0 .4cqw var(--holo-texte); transition: transform .2s; }
.mcb-direct-lecture::before { content: ""; position: absolute; left: 39%; top: 30%; border-left: 5.6cqw solid var(--holo-texte); border-top: 3.4cqw solid transparent; border-bottom: 3.4cqw solid transparent; }
.mcb-direct-infos { position: absolute; z-index: 1; left: 4cqw; right: 4cqw; bottom: 9cqw; font: 600 max(7px, 2.6cqw)/1.35 system-ui, sans-serif; text-shadow: 0 0 1cqw var(--couleur-nuit), 0 0 2cqw var(--couleur-nuit); }
.mcb-direct-infos b { display: block; font-size: 1.25em; font-weight: 800; }
.mcb-direct-ouvrir { position: absolute; z-index: 1; left: 4cqw; top: 12cqw; padding: 1cqw 2cqw; font: 700 max(7px, 2.6cqw)/1 system-ui, sans-serif; letter-spacing: .08em;
  color: var(--holo-texte); background: color-mix(in srgb, var(--couleur-nuit) 70%, transparent); opacity: 0; transition: opacity .2s; }
.mcb-direct:hover .mcb-direct-ouvrir, .mcb-direct:focus-visible .mcb-direct-ouvrir { opacity: 1; }
.mcb-direct:hover .mcb-direct-lecture { transform: scale(1.1); }
.mcj-holo:not(.visible) .mcb-direct, .mcj-holo:not(.visible) .mcb-tiroir-interieur, .mcj-holo:not(.visible) .mcb-bouton { pointer-events: none; }
.mcb-pseudo--direct { color: var(--couleur-direct); text-shadow: 0 0 2.5cqw color-mix(in srgb, var(--couleur-direct) 50%, transparent); }
.mc-scene[data-calme] .mcb-direct-badge i { animation: none; }
.mcb-pseudo { position: absolute; left: var(--lc-pseudo-x, 4cqw); bottom: var(--lc-pseudo-y, 2cqw); writing-mode: vertical-rl; transform: rotate(180deg) scaleX(var(--etirement, 1)); white-space: nowrap;
  --longueur: 68cqw; --maxi: 21cqw;
  font-family: var(--lc-titre, var(--police-titre, "Arial Narrow", sans-serif)); font-weight: var(--lc-titre-poids, 800); font-style: var(--lc-titre-style, normal);
  font-size: calc(min(var(--maxi), var(--longueur) / (var(--lettres) * var(--lc-lettre, .5))) * var(--lc-pseudo-taille, 1)); line-height: .85;
  text-transform: uppercase; letter-spacing: var(--lc-pseudo-espace, .01em); text-shadow: 0 0 2.5cqw var(--holo-doux); }
.mc-scene[data-lc-pseudo-horizontal] .mcb-pseudo { writing-mode: horizontal-tb; transform: none; --longueur: 88cqw; --maxi: 18cqw; }
.mc-scene[data-lc-pseudo-contour] .mcb-pseudo { color: transparent; -webkit-text-stroke: max(1px, .3cqw) var(--holo-texte); }
.mcb-etiquette { position: absolute; right: 6cqw; top: 6cqw; font: 600 max(7px, var(--lc-etiquette-taille, 2.4cqw))/1 var(--lc-etiquettes, ui-monospace, Consolas, monospace); letter-spacing: .22em; text-transform: uppercase; opacity: .75; }
.mcb-bas { display: grid; gap: var(--lc-espace, 4cqw); padding: var(--lc-marge-haut, 5cqw) var(--lc-marge, 6cqw) var(--lc-marge-bas, 8cqw); }
.mcb-role { display: flex; align-items: center; gap: 2.2cqw; font-weight: 700; font-size: max(7px, var(--lc-role-taille, 3cqw)); line-height: 1.15; letter-spacing: .16em; text-transform: uppercase; }
.mcb-role small { display: block; font-size: .78em; font-weight: 600; opacity: .7; }
.mcb-icone { flex: none; width: var(--lc-icone-taille, 6.5cqw); height: var(--lc-icone-taille, 6.5cqw); background: var(--holo-texte); -webkit-mask: var(--icone) center / contain no-repeat; mask: var(--icone) center / contain no-repeat; }
.mcb-identite { margin-top: -2cqw !important; font-weight: 600; font-size: max(7px, var(--lc-identite-taille, 2.8cqw)); line-height: 1.2; letter-spacing: .08em; opacity: .75; }
.mcb-bio { display: grid; gap: 1.2cqw; font-weight: 500; font-size: max(7px, var(--lc-bio-taille, 3.2cqw)); line-height: var(--lc-bio-interligne, 1.3); }
.mcb-bio p::before { content: '◆'; margin-right: 1.8cqw; font-size: .65em; vertical-align: .18em; color: var(--holo-couleur); }
.mcb-objets { display: grid; grid-template-columns: repeat(var(--lc-colonnes, 4), minmax(0, 1fr)); gap: var(--lc-objets-espace, 3cqw); }
.mcb-objet { display: grid; justify-items: center; align-content: start; gap: 1.4cqw; text-align: center; min-width: 0; }
.mcb-case { position: relative; width: 100%; aspect-ratio: 1; display: grid; place-items: center;
  background: linear-gradient(160deg, color-mix(in srgb, var(--holo-couleur) 26%, transparent), var(--holo-pale));
  clip-path: polygon(0 0, 78% 0, 100% 22%, 100% 100%, 0 100%); }
.mcb-case::after { content: ""; position: absolute; left: 12%; right: 12%; bottom: 7%; height: 2px; background: var(--holo-couleur); opacity: .7; }
.mcb-case svg { width: var(--lc-objet-icone, 54%); height: var(--lc-objet-icone, 54%); fill: none; stroke: var(--holo-texte); stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; filter: drop-shadow(0 0 3px var(--holo-couleur)); }
.mcb-case i { position: absolute; left: 9%; top: 8%; font: 700 max(6px, 1.9cqw)/1 var(--lc-etiquettes, ui-monospace, Consolas, monospace); font-style: normal; letter-spacing: .12em; text-transform: uppercase; opacity: .8; }
.mcb-objet > span { font-weight: 600; font-size: max(6px, var(--lc-objet-texte, 2.3cqw)); line-height: 1.2; letter-spacing: .04em; opacity: .9; overflow-wrap: anywhere; }
.mc-scene[data-lc-sans-etiquette] .mcb-etiquette, .mc-scene[data-lc-sans-identite] .mcb-identite, .mc-scene[data-lc-sans-bio] .mcb-bio,
.mc-scene[data-lc-sans-objets] .mcb-objets, .mc-scene[data-lc-sans-objets] .mcb-vide, .mc-scene[data-lc-sans-type] .mcb-case i,
.mc-scene[data-lc-sans-modele] .mcb-objet > span { display: none; }
.mcb-vide { font: 600 max(8px, 2.6cqw)/1 var(--lc-etiquettes, ui-monospace, Consolas, monospace); letter-spacing: .2em; text-transform: uppercase; opacity: .6; }
.mcj-obscurite { position: absolute; inset: -300vh -300vw; z-index: 45; background: var(--couleur-nuit); opacity: 0; pointer-events: none; transition: opacity .5s ease-out; }
.mc-obscurite-fond { position: absolute; inset: 0; z-index: 1; background: var(--couleur-nuit); opacity: 0; pointer-events: none; transition: opacity .5s ease-out; }
.mc-toile { transition: opacity .5s ease-out; }
.mc-scene[data-holo] .mcj-obscurite, .mc-scene[data-holo] .mc-obscurite-fond { opacity: var(--holo-obscurite, .85); }
.mc-scene[data-holo] .mc-toile { opacity: calc(1 - var(--holo-obscurite, .85)); }
.mc-commandes { position: absolute; left: 50%; bottom: 12px; z-index: 5; transform: translateX(-50%); display: flex; align-items: center; gap: 10px;
  padding: 8px 12px; border-radius: 999px; background: color-mix(in srgb, var(--couleur-surface) 88%, transparent);
  border: 1px solid color-mix(in srgb, var(--couleur-texte) 18%, transparent); color: var(--couleur-texte); font: 600 12px/1 system-ui, sans-serif; }
.mc-commandes button { padding: 6px 12px; border: 0; border-radius: 999px; cursor: pointer; font: inherit; color: var(--couleur-surface);
  background: linear-gradient(135deg, var(--metal-sombre), var(--metal-moyen) 45%, var(--metal-reflet) 55%, var(--metal-moyen)); }
.mc-commandes input[type="range"] { width: clamp(90px, 22vw, 220px); accent-color: var(--metal-moyen); }
.mc-commandes output { min-width: 5ch; text-align: right; font-family: ui-monospace, Consolas, monospace; }
.mc-invite { position: absolute; left: 50%; bottom: 78px; z-index: 4; display: grid; justify-items: center; gap: 12px; transform: translateX(-50%);
  pointer-events: none; transition: opacity .4s, transform .4s; font: 700 clamp(13px, 1.4vw, 18px)/1 var(--police-titre, sans-serif); letter-spacing: .32em; padding-left: .32em; white-space: nowrap;
  text-transform: uppercase; color: var(--metal-clair); }
.mc-invite.cachee { opacity: 0; transform: translate(-50%, 8px); }
.mc-souris { position: relative; width: 32px; height: 52px; box-sizing: border-box; border: 3px solid var(--metal-clair); border-radius: 17px; }
.mc-souris i { position: absolute; left: 50%; top: 9px; width: 5px; height: 11px; margin-left: -2.5px; border-radius: 3px;
  background: linear-gradient(180deg, var(--metal-reflet), var(--metal-clair)); animation: mc-molette 1.8s cubic-bezier(.5,0,.5,1) infinite; }
@keyframes mc-molette { 0% { transform: translateY(0); opacity: 0; } 20% { opacity: 1; } 70% { transform: translateY(15px); opacity: 0; } 100% { transform: translateY(15px); opacity: 0; } }
html[data-qualite="allege"] .mc-plis, html[data-qualite="minimal"] .mc-plis { display: none; }
html[data-qualite="allege"] .mc-imprime, html[data-qualite="minimal"] .mc-imprime { animation: none; }
html[data-qualite="minimal"] .mc-imprime::before, html[data-qualite="minimal"] .mc-dos::before { display: none; }
.mc-scene[data-calme] .mcj-curseur svg { animation: none; }
.mc-scene[data-calme] .mcj-curseur i { display: none; }
.mc-scene[data-calme] .mcj-curseur .bouton { animation: none; opacity: .95; }
.mc-scene[data-calme] .mcj-curseur { transition: none; }
.mc-scene[data-calme] .mcj-carte.active.retournee.survolee .mcj-survol { transform: scale(var(--cj-agrandi, 1.1)); }
.mc-scene[data-calme] .mc-pli, .mc-scene[data-calme] .mc-imprime, .mc-scene[data-calme] .mc-souris i { animation: none; }
.mc-scene[data-calme] .mc-invite, .mc-scene[data-calme] .mcj-carte, .mc-scene[data-calme] .mcj-survol,
.mc-scene[data-calme] .mcj-carte:not(.retournee) .mcj-survol, .mc-scene[data-calme] .mcj-pivot, .mc-scene[data-calme] .mcj-voile,
.mc-scene[data-calme] .mcj-contour, .mc-scene[data-calme] .mcj-indice, .mc-scene[data-calme] .mcj-rappel, .mc-scene[data-calme] .mcj-holo,
.mc-scene[data-calme] .mcj-holo-faisceau, .mc-scene[data-calme] .mcj-holo-projection, .mc-scene[data-calme] .mcj-holo-nom,
.mc-scene[data-calme] .mcj-obscurite, .mc-scene[data-calme] .mc-obscurite-fond, .mc-scene[data-calme] .mc-toile { transition: none !important; }
.mc-scene[data-calme] .mcj-carte.apercu .mcj-survol { transform: none; }
.mc-scene[data-calme] .mcj-flotte, .mc-scene[data-calme] .mcj-carte.apercu .mcj-flotte { animation: none; }
.mc-scene[data-calme] .mcj-brillance { display: none; }
.mc-scene[data-calme] .mcj-rappel, .mc-scene[data-calme] .mcj-rappel i, .mc-scene[data-calme] .mcj-contour { animation: none !important; }
.mc-scene[data-calme] .mcj-holo-faisceau { transform: none; }
.mc-scene[data-calme] .mcj-holo.visible .mcj-holo-faisceau, .mc-scene[data-calme] .mcj-holo.visible .mcj-holo-tremble,
.mc-scene[data-calme] .mcj-holo.visible .mcj-holo-lignes { animation: none; }
.mc-scene[data-calme] .mcj-holo.visible .mcj-holo-projection, .mc-scene[data-calme][data-univers="tajine"] .mcj-holo--agent.visible .mcj-holo-projection { animation: none; opacity: .9; }`,
  monter(conteneur, reglages, options) {
    if (!document.getElementById('css-' + this.id)) {
      const style = document.createElement('style');
      style.id = 'css-' + this.id;
      style.textContent = this.css;
      document.head.appendChild(style);
    }
    let r = { ...reglages };
    const pointsEtoile = this.pointsEtoile;
    const calme = options.reduireAnimations;
    const scene = document.createElement('div');
    scene.className = 'mc-scene';
    if (calme) scene.dataset.calme = '1';
    const nuque = '<p class="mc-nuque" lang="ar" dir="rtl">منصور</p>';
    const ourletDos = '<svg class="mc-ourlet" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true"><polygon points="0,20 50,6 100,20" style="fill:var(--mc-ourlet)"/><polyline points="0,20 50,6 100,20" fill="none" style="stroke:var(--metal-moyen)" stroke-width="1.2" vector-effect="non-scaling-stroke"/></svg>';
    const univers = getComputedStyle(conteneur).getPropertyValue('--univers').trim() === 'tajine' ? 'tajine' : 'normal';
    const joueurs = univers === 'tajine' ? this.joueursTajine : this.joueurs;
    const icones = this.icones;
    const texte = this.textes[univers];
    joueurs.forEach(j => { if (j.agentImage) new Image().src = j.agentImage; });
    scene.dataset.univers = univers;
    const N = joueurs.length;
    const colCarte = '<svg class="mcj-dos-col" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true">' +
      '<polygon points="30,0 50,9 70,0 64,0 50,5.5 36,0" style="fill:var(--metal-moyen)"/>' +
      '<polyline points="0,14 16,0" fill="none" style="stroke:var(--metal-sombre)" stroke-width=".8" vector-effect="non-scaling-stroke"/>' +
      '<polyline points="100,14 84,0" fill="none" style="stroke:var(--metal-sombre)" stroke-width=".8" vector-effect="non-scaling-stroke"/></svg>';
    const ourletCarte = '<svg class="mcj-dos-ourlet" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true">' +
      '<polygon points="0,20 50,4 100,20" style="fill:var(--couleur-nuit)"/>' +
      '<polyline points="0,20 50,4 100,20" fill="none" style="stroke:var(--metal-moyen)" stroke-width="1.5" vector-effect="non-scaling-stroke"/></svg>';
    const curseurIndice = '<span class="mcj-curseur" aria-hidden="true"></span>';
    const pro = univers !== 'tajine';
    const iconesFace = this.iconesFace;
    const icone = nom => '<svg viewBox="0 0 24 24" aria-hidden="true">' + iconesFace[nom] + '</svg>';
    const panneauPro = j =>
      '<div class="mcj-bande"><span>' + icone('lieu') + 'FR · ' + j.region + '</span><span class="mcj-reseaux" aria-label="Réseaux : ' + j.reseaux.join(', ') + '">' +
        j.reseaux.map(nom => '<i class="' + (nom === 'twitch' && j.direct ? 'en-direct' : '') + '">' + icone(nom) + '</i>').join('') + '</span></div>' +
      '<div class="mcj-stats"><div><b>' + String(j.sensi).replace('.', ',') + '</b><span>Sensi</span></div><div><b>' + j.dpi + '</b><span>DPI</span></div><div><b>' + Math.round(j.sensi * j.dpi) + '</b><span>eDPI</span></div></div>';
    const carte = (j, i) =>
      '<div class="mcj-carte" data-i="' + i + '" role="button" tabindex="0" aria-label="' + j.pseudo + ', ' + j.role + ' : retourner la carte"><div class="mcj-entree">' +
        '<div class="mcj-survol"><div class="mcj-flotte"><div class="mcj-pivot">' +
          '<div class="mcj-face mcj-avant' + (pro ? ' mcj-avant--pro' : '') + '">' +
            '<div class="mcj-photo"><img src="' + j.photo + '" alt="' + j.pseudo + '" decoding="async">' +
              '<span class="mcj-teinte"></span><span class="mcj-trame"></span><span class="mcj-degrade"></span><span class="mcj-brillance"></span>' +
              '<span class="mcj-numero">' + j.numero + '</span>' +
              (pro && j.direct ? '<span class="mcj-direct"><i></i>EN LIVE</span>' : '') +
              '<div class="mcj-identite"><small>' + j.role + '</small><p class="mcj-pseudo">' + j.pseudo + '</p></div>' +
            '</div>' +
            '<div class="mcj-panneau">' + (pro ? panneauPro(j) :
              '<div class="mcj-ligne"><div><span>' + texte.role + '</span>' + j.role + '</div><div><span>' + texte.agent + '</span><i class="mcj-losange"></i>' + j.agent + '</div></div>' +
              '<div class="mcj-stats"><div><b>' + j.acs + '</b><span>' + texte.stats[0] + '</span></div><div><b>' + j.kd + '</b><span>' + texte.stats[1] + '</span></div><div><b>' + j.hs + '%</b><span>' + texte.stats[2] + '</span></div></div>') +
            '</div>' +
          '</div>' +
          '<div class="mcj-face mcj-dos" aria-hidden="true">' + colCarte +
            '<p class="mcj-dos-arabe" lang="ar" dir="rtl">منصور</p>' +
            '<p class="mcj-dos-pseudo">' + j.pseudo + '</p>' +
            '<p class="mcj-dos-numero">' + j.numero + '</p>' + ourletCarte +
            '<span class="mcj-rappel"><i aria-hidden="true">↻</i>' + texte.rappel + '</span>' +
          '</div>' +
        '</div>' +
        '<span class="mcj-voile"></span><span class="mcj-contour"></span></div>' +
        '<span class="mcj-indice">' + texte.indice + '</span>' + (i === joueurs.length - 1 ? curseurIndice : '') + '</div>' +
      '</div></div>';
    const zoneCartes = classe =>
      '<div class="mcj-zone ' + classe + '">' +
        '<div class="mcj-cartes"><span class="mcj-obscurite"></span>' + joueurs.map(carte).join('') + '</div>' +
        '<button type="button" class="mcj-retour"><span aria-hidden="true">↩</span>' + texte.retour + '</button>' +
        '<div class="mcj-holo" aria-hidden="true"><div class="mcj-holo-faisceau"></div>' +
          '<div class="mcj-holo-projection"><div class="mcj-holo-tremble"><div class="mcj-holo-image"></div><span class="mcj-holo-teinte"></span><span class="mcj-holo-lignes"></span></div></div>' +
          '<div class="mcj-holo-source"></div></div>' +
        '<div class="mcj-holo mcj-holo--agent" aria-hidden="true"><div class="mcj-holo-faisceau"></div><span class="mcj-holo-nom"></span>' +
          '<div class="mcj-holo-projection"><span class="mcj-nom-fond"></span><div class="mcj-holo-tremble"><div class="mcj-holo-image"><img class="mcj-holo-agent-img" alt="" decoding="async"></div><span class="mcj-holo-teinte"></span><span class="mcj-holo-lignes"></span><div class="mcj-tranches"></div><span class="mcj-scan"></span></div></div>' +
          '<div class="mcj-holo-source"></div></div>' +
      '</div>';
    scene.innerHTML =
      '<div class="mc-defilement" tabindex="0" role="region" aria-label="Maquette de page : faites défiler pour voir le site enfiler le maillot">' +
        '<section class="mc-hero"><div class="mc-etage">' +
          '<div class="mc-contenu">' +
            '<svg class="mc-logo" viewBox="-6 -8 112 114" aria-label="Logo M">' +
              '<defs><linearGradient id="mc-reflet" gradientUnits="userSpaceOnUse" x1="-40" y1="0" x2="0" y2="-20">' +
                '<stop offset="0" style="stop-color:var(--metal-moyen)"/><stop offset=".5" style="stop-color:var(--metal-reflet)"/><stop offset="1" style="stop-color:var(--metal-moyen)"/>' +
                '<animateTransform attributeName="gradientTransform" type="translate" values="-20 0; 170 0; 170 0" keyTimes="0; .45; 1" dur="3.6s" repeatCount="indefinite"/>' +
              '</linearGradient></defs>' +
              '<polygon points="0,0 22,0 50,48 78,0 100,0 100,100 80,100 80,40 50,88 20,40 20,100 0,100" style="fill:var(--metal-moyen)"/>' +
              '<polygon class="mc-brillance" points="0,0 22,0 50,48 78,0 100,0 100,100 80,100 80,40 50,88 20,40 20,100 0,100" fill="url(#mc-reflet)" opacity=".9"/>' +
              '<polygon class="etoile" style="fill:var(--metal-reflet)" points="' + this.pointsEtoile(50, 15, 14, 8).map(p => p.join(',')).join(' ') + '"/>' +
            '</svg>' +
            '<p class="mc-mot">MANSUR</p>' +
            '<p class="mc-arabe" lang="ar" dir="rtl">منصور</p>' +
            '<p class="mc-accroche">' + texte.accroche + '</p>' +
          '</div>' +
          '<span class="mc-obscurite-fond"></span>' +
          '<div class="mc-tissu">' +
            '<div class="mc-imprime" aria-hidden="true"><div class="mc-dos mc-dos--tissu">' + nuque + ourletDos + '</div></div>' +
            '<div class="mc-plis" aria-hidden="true"><div class="mc-pli mc-pli-a"></div><div class="mc-pli mc-pli-b"></div></div>' +
            zoneCartes('mcj-zone--tissu') +
          '</div>' +
          '<canvas class="mc-toile" aria-hidden="true"></canvas>' +
        '</div></section>' +
        '<section class="mc-dos mc-dos--statique">' + nuque + ourletDos + '</section>' +
      '</div>' +
      '<div class="mc-invite cachee" aria-hidden="true"><span class="mc-souris"><i></i></span><span>Faites défiler</span></div>' +
      '<div class="mc-commandes"><button type="button" data-lecture>Lecture</button>' +
        '<input type="range" min="0" max="1000" step="1" value="0" aria-label="Progression de la transition et des cartes"><output>0 %</output></div>';
    conteneur.appendChild(scene);
    const defilement = scene.querySelector('.mc-defilement');
    const contenu = scene.querySelector('.mc-contenu');
    const toile = scene.querySelector('.mc-toile');
    const tissu = scene.querySelector('.mc-tissu');
    const plisCalque = scene.querySelector('.mc-plis');
    const ctx = toile.getContext('2d');
    const brillance = scene.querySelector('.mc-brillance');
    const animationReflet = scene.querySelector('animateTransform');
    const boutonLecture = scene.querySelector('[data-lecture]');
    const curseur = scene.querySelector('input[type="range"]');
    const affichage = scene.querySelector('output');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cartes = [...scene.querySelectorAll('.mcj-carte')];
    const voiles = cartes.map(c => c.querySelector('.mcj-voile'));
    const flottes = cartes.map(c => c.querySelector('.mcj-flotte'));
    const holo = scene.querySelector('.mcj-holo');
    holo.classList.toggle('mcj-holo--fiche', univers !== 'tajine');
    const holoImage = scene.querySelector('.mcj-holo-image');
    const holoAgent = scene.querySelector('.mcj-holo--agent');
    const imageAgent = scene.querySelector('.mcj-holo-agent-img');
    if (imageAgent) imageAgent.addEventListener('error', () => holoAgent.classList.remove('visible'));
    const nuqueTissu = scene.querySelector('.mc-dos--tissu .mc-nuque');
    scene.querySelectorAll('.mcj-photo img').forEach(img => img.addEventListener('error', () => img.parentElement.classList.add('mcj-sans-photo')));
    const styles = getComputedStyle(scene);
    const lireCouleur = nom => styles.getPropertyValue(nom).trim() || '#C9A646';
    const orTheme = { sombre: lireCouleur('--metal-sombre'), moyen: lireCouleur('--metal-moyen'), clair: lireCouleur('--metal-clair'), reflet: lireCouleur('--metal-reflet') };
    let or = { ...orTheme };
    let remplissage = lireCouleur('--couleur-surface');
    let couleurMotif = lireCouleur('--couleur-motif');
    const rgba = (hex, a) => { const n = parseInt(hex.replace('#', '').slice(0, 6), 16); return 'rgba(' + (n >> 16 & 255) + ',' + (n >> 8 & 255) + ',' + (n & 255) + ',' + a.toFixed(3) + ')'; };
    const luminance = hex => {
      const n = parseInt(hex.replace('#', '').slice(0, 6), 16);
      const canal = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
      return 0.2126 * canal(n >> 16 & 255) + 0.7152 * canal(n >> 8 & 255) + 0.0722 * canal(n & 255);
    };
    const melange = (a, b, t) => {
      const ca = parseInt(a.replace('#', '').slice(0, 6), 16), cb = parseInt(b.replace('#', '').slice(0, 6), 16);
      const canal = decalage => Math.round(((ca >> decalage) & 255) * (1 - t) + ((cb >> decalage) & 255) * t);
      return '#' + [16, 8, 0].map(d => canal(d).toString(16).padStart(2, '0')).join('');
    };
    const etage = scene.querySelector('.mc-etage');
    const dosStatique = scene.querySelector('.mc-dos--statique');
    function appliquerVariation() {
      const sombre = lireCouleur('--couleur-surface'), clair = lireCouleur('--couleur-texte');
      const nuit = lireCouleur('--couleur-nuit');
      scene.style.setProperty('--mcj-fond', luminance(nuit) <= luminance(sombre) ? nuit : sombre);
      scene.style.setProperty('--mcj-encre', luminance(clair) >= luminance(sombre) ? clair : sombre);
      const blanc = r.maillotBlanc;
      or = blanc
        ? { sombre: melange(orTheme.sombre, sombre, 0.3), moyen: melange(orTheme.moyen, orTheme.sombre, 0.45),
            clair: melange(orTheme.clair, orTheme.sombre, 0.35), reflet: melange(orTheme.reflet, orTheme.moyen, 0.6) }
        : { ...orTheme };
      remplissage = blanc ? melange(clair, orTheme.clair, 0.22) : sombre;
      const encre = blanc ? melange(sombre, orTheme.sombre, 0.22) : clair;
      couleurMotif = blanc ? melange(remplissage, or.sombre, 0.5) : lireCouleur('--couleur-motif');
      scene.style.setProperty('--mc-tissu', remplissage);
      scene.style.setProperty('--mc-encre', encre);
      scene.style.setProperty('--mc-motif-couleur', couleurMotif);
      scene.style.setProperty('--mc-ourlet', blanc ? encre : 'transparent');
      for (const el of [etage.querySelector('.mc-tissu'), dosStatique]) {
        for (const [nom, valeur] of Object.entries(or)) {
          if (blanc) el.style.setProperty('--metal-' + nom, valeur); else el.style.removeProperty('--metal-' + nom);
        }
      }
      const profondeur = r.plisProfondeur;
      const tissuClair = blanc || luminance(remplissage) > 0.4;
      scene.style.setProperty('--plis-clair', tissuClair ? rgba('#FFFFFF', 0.22 * profondeur) : rgba(orTheme.clair, 0.18 * profondeur));
      scene.style.setProperty('--plis-sombre', tissuClair ? rgba(lireCouleur('--couleur-nuit'), 0.13 * profondeur) : rgba('#000000', 0.5 * profondeur));
      scene.style.setProperty('--plis-taille', r.plisTaille + 'px');
      scene.style.setProperty('--plis-taille-b', Math.round(r.plisTaille * 1.6) + 'px');
      scene.style.setProperty('--pas-a', (r.plisTaille / Math.cos((14 * Math.PI) / 180)).toFixed(2) + 'px');
      scene.style.setProperty('--pas-b', ((r.plisTaille * 1.6) / Math.cos((24 * Math.PI) / 180)).toFixed(2) + 'px');
      const vent = Math.max(0.1, r.plisVitesse);
      scene.style.setProperty('--plis-duree', (14 / vent).toFixed(2) + 's');
      scene.style.setProperty('--flotte-duree', (5 / vent).toFixed(2) + 's');
      scene.style.setProperty('--flottement', String(r.flottement));
      if (r.plisVitesse === 0) scene.dataset.ventFige = ''; else delete scene.dataset.ventFige;
    }
    let largeur = 0, hauteur = 0, longueur = 0;
    let dosHautPx = 0, zoneHautPx = 0;
    let arretEquipe = 0, largeurCarte = 200, hauteurCarte = 300, zoneHauteurPx = 400;
    let actif = -1;
    const entrees = cartes.map(c => c.querySelector('.mcj-entree'));
    let equipeEntree = false;
    let minuterieEntree = 0;
    const transformCachee = i => 'translate3d(0, 90px, 0) rotate(' + ((i - 2) * 5) + 'deg) scale(.8)';
    if (!calme) entrees.forEach((e, i) => { e.style.transform = transformCachee(i); e.style.opacity = '0'; cartes[i].style.pointerEvents = 'none'; });
    let toutesEntrees = false;
    let indiceClicFini = false;
    let apercu = -1;
    let minuterieApercu = 0;
    let minuterieRetournement = 0;
    const retour = scene.querySelector('.mcj-retour');
    let holoDisponible = false;
    let agentDisponible = false;
    let holoCarte = -1;
    let idImage = 0, idLecture = 0, visible = true;
    let pLisse = 0;
    let vitesseV = 0;
    let vitesse = 0;
    let resteEmission = 0;
    let numeroEtincelle = 0;
    const etincelles = [];
    let poussieres = [];
    function mettreEnPage() {
      longueur = (r.longueur / 100) * defilement.clientHeight;
      scene.style.setProperty('--h', defilement.clientHeight + 'px');
      arretEquipe = (r.equipeArret / 100) * defilement.clientHeight;
      scene.style.setProperty('--long', (longueur + arretEquipe) + 'px');
      largeur = toile.clientWidth; hauteur = toile.clientHeight;
      if (calme) {
        longueur = Math.max(1, geometrie(0).pointe - geometrie(progressionArret()).pointe);
        scene.style.setProperty('--long', (longueur + arretEquipe) + 'px');
      }
      toile.width = Math.round(largeur * dpr); toile.height = Math.round(hauteur * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      scene.style.setProperty('--tissu', String(r.tissu));
      appliquerVariation();
      creerMotif();
      const montee = r.pente * largeur / 2;
      scene.style.setProperty('--montee', montee + 'px');
      scene.style.setProperty('--marge', margeV() + 'px');
      const pointeFinale = geometrie(progressionArret()).pointe;
      const e = r.epaisseur;
      const col = r.doubleTrait ? e * 1.7 + e * 0.16 : e / 2;
      const coutures = r.couturesNombre > 0 ? (r.doubleTrait ? e * 2.4 + 6 : e * 1.1 + 6) + (r.couturesNombre - 1) * (r.couturesEpaisseur * 2 + 6) : 0;
      const basDuCol = pointeFinale + Math.max(col, coutures) + 20;
      dosHautPx = basDuCol - (pointeFinale - montee);
      scene.style.setProperty('--dos-haut', dosHautPx + 'px');
      const hauteurDos = Math.max(120, hauteur - basDuCol);
      scene.style.setProperty('--dos-hauteur', hauteurDos + 'px');
      creerPoussiere();
      placerZoneCartes(hauteurDos);
      if (calme) dessiner(0);
    }
    function placerZoneCartes(hauteurDos) {
      appliquerReglagesCartes();
      const zoneHaut = nuqueTissu.offsetTop + nuqueTissu.offsetHeight + 14;
      zoneHautPx = zoneHaut;
      const zoneHauteur = hauteurDos - zoneHaut - (hauteurDos > 560 ? 50 : 4);
      const etroit = largeur < 640;
      const tailleAvec = panneau => Math.min(380, largeur * (etroit ? 0.62 : 0.34), (zoneHauteur - panneau) / 1.25);
      let panneau = 104;
      if (tailleAvec(panneau) < 190) panneau = 62;
      largeurCarte = Math.max(110, tailleAvec(panneau));
      if (panneau < 104) scene.dataset.compact = ''; else delete scene.dataset.compact;
      hauteurCarte = largeurCarte * 1.25 + panneau;
      zoneHauteurPx = zoneHauteur;
      const largeurChoisie = largeurCarte * r.tailleChoisie;
      const libreDroite = largeur / 2 - largeurChoisie / 2 - 24;
      const ecartFaisceau = Math.max(50, zoneHauteur * 0.14);
      let hauteurHolo = 0, hautHolo = 0;
      const rapport = univers === 'tajine' ? hauteurCarte / largeurCarte : 1.5;
      let holoL = Math.min(largeurCarte * r.holoTaille, (libreDroite - 24) * 0.9, (zoneHauteur - ecartFaisceau) / rapport);
      holoDisponible = !etroit && holoL >= (univers === 'tajine' ? 120 : 180);
      if (holoDisponible) {
        const holoH = holoL * rapport;
        hauteurHolo = holoH;
        hautHolo = Math.max(0, zoneHauteur - ecartFaisceau - holoH);
        scene.style.setProperty('--holo-l', holoL + 'px');
        scene.style.setProperty('--holo-h', holoH + 'px');
        scene.style.setProperty('--holo-x', ((24 + libreDroite) / 2 - holoL / 2) + 'px');
        scene.style.setProperty('--holo-haut', Math.max(0, zoneHauteur - ecartFaisceau - holoH) + 'px');
        scene.style.setProperty('--holo-echelle', String(holoL / largeurCarte));
      }
      const libreAgent = largeur - 16 - (largeur / 2 + largeurChoisie / 2 + 24);
      const agentCale = holoDisponible && univers !== 'tajine';
      const coteAgent = agentCale
        ? Math.min(hauteurHolo / 0.87, libreAgent / 0.48, (zoneHauteur - ecartFaisceau) / 0.87)
        : Math.min((zoneHauteur - ecartFaisceau) / 0.95, libreAgent / 0.48, (hauteurCarte * r.holoTaille) / 0.87);
      agentDisponible = !etroit && libreAgent >= 100 && coteAgent >= 160;
      if (agentDisponible) {
        holoAgent.style.setProperty('--holo-l', coteAgent + 'px');
        holoAgent.style.setProperty('--holo-h', coteAgent + 'px');
        holoAgent.style.setProperty('--holo-x', (largeur / 2 + largeurChoisie / 2 + 24 + (libreAgent - coteAgent) / 2) + 'px');
        holoAgent.style.setProperty('--holo-haut', (agentCale ? hautHolo + hauteurHolo - coteAgent * 0.95 : Math.max(0, zoneHauteur - ecartFaisceau - coteAgent * 0.95)) + 'px');
      }
      if (!holoDisponible || !r.hologramme) cacherHologramme();
      else if (!agentDisponible || !r.holoAgent) holoAgent.classList.remove('visible');
      scene.style.setProperty('--zone-haut', zoneHaut + 'px');
      scene.style.setProperty('--zone-hauteur', zoneHauteur + 'px');
      scene.style.setProperty('--carte-l', largeurCarte + 'px');
      scene.style.setProperty('--panneau', panneau + 'px');
      placerCartes();
    }
    const STYLES_CURSEUR = {
      fleche: { vue: [22, 26], hx: 14, hy: 8, dessin: '<path class="trace" d="M3 2V20L7.8 15.6L11.2 23.2L14.6 21.7L11.2 14.3H17.6Z"/>' },
      'fleche-or': { vue: [22, 26], hx: 14, hy: 8, dessin: '<path class="trace or" d="M3 2V20L7.8 15.6L11.2 23.2L14.6 21.7L11.2 14.3H17.6Z"/>' },
      main: { vue: [24, 28], hx: 37, hy: 9, dessin: '<path class="trace" d="M9 2.5c1.1 0 2 .9 2 2V11l.6-.1c1-.2 2 .5 2.2 1.5l.1.4.5-.1c1-.2 2 .5 2.2 1.5l.1.5.4-.1c1-.1 1.9.6 2.1 1.6l.6 3.6c.4 2.7-.9 5.4-3.3 6.6l-.6.3c-2.2 1.1-4.9.6-6.5-1.3L4 18.6c-.7-.8-.6-2 .2-2.7.8-.7 2-.6 2.7.2L7 16.3V4.5c0-1.1.9-2 2-2z"/>' },
      doigt: { vue: [24, 24], hx: 50, hy: 50, dessin: '<circle class="trace" cx="12" cy="12" r="7"/><circle class="molette" cx="12" cy="12" r="2.2"/>' },
      souris: { vue: [48, 72], hx: 28, hy: 22, dessin: '<rect class="trace" x="3" y="3" width="42" height="66" rx="21"/><path class="bouton" d="M24 3A21 21 0 0 0 3 24V30H24Z"/><path class="trait" d="M3 30H45M24 3V30"/><rect class="molette" x="21" y="11" width="6" height="11" rx="3"/>' }
    };
    function dessinerCurseur() {
      const curseur = scene.querySelector('.mcj-curseur');
      if (!curseur) return;
      const style = STYLES_CURSEUR[r.curseurStyle] ? r.curseurStyle : 'fleche';
      const st = STYLES_CURSEUR[style];
      if (curseur.dataset.style !== style) {
        curseur.dataset.style = style;
        curseur.innerHTML = '<i></i><svg viewBox="0 0 ' + st.vue[0] + ' ' + st.vue[1] + '">' +
          '<defs><linearGradient id="mcj-curseur-or" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--metal-reflet)"/><stop offset=".5" style="stop-color:var(--metal-clair)"/><stop offset="1" style="stop-color:var(--metal-moyen)"/></linearGradient></defs>' +
          st.dessin + '</svg>';
        curseur.style.aspectRatio = st.vue[0] + ' / ' + st.vue[1];
      }
      const v = (nom, valeur) => scene.style.setProperty(nom, valeur);
      v('--c-hx', st.hx + '%'); v('--c-hy', st.hy + '%');
      v('--c-x', r.curseurX + '%'); v('--c-y', r.curseurY + '%');
      v('--c-rot', r.curseurRotation + 'deg');
      v('--c-taille', 'calc(var(--carte-l) * ' + (r.curseurTaille / 100) + ')');
      v('--c-cycle', r.curseurCycle + 's');
      v('--c-decalage', (0.4 - r.curseurCycle * 0.4).toFixed(3) + 's');
      v('--c-appui', String(1 - r.curseurAppui / 100));
      v('--c-onde', String(r.curseurOnde));
      v('--c-carte', String(1 - r.carteReaction / 100));
      v('--c-carte-rebond', String(1 + r.carteReaction / 100 * 0.35));
      v('--c-lisere', String(r.carteLisere));
      v('--c-delai', r.curseurDelai + 's');
      v('--c-survol', String(r.carteSurvol));
    }
    const POLICES_CARTE = {
      theme: { titre: 'var(--police-titre, "Arial Narrow", sans-serif)', poids: 800, style: 'normal', texte: 'system-ui, sans-serif', etiquettes: 'ui-monospace, Consolas, monospace', lettre: 0.5 },
      tactique: { titre: '"Big Shoulders Display", "Arial Narrow", sans-serif', poids: 800, style: 'normal', texte: '"Instrument Sans", system-ui, sans-serif', etiquettes: 'Consolas, ui-monospace, monospace', lettre: 0.5 },
      din: { titre: '"Bahnschrift Condensed", "Bahnschrift", "Arial Narrow", sans-serif', poids: 700, style: 'normal', texte: '"Bahnschrift", "Segoe UI", system-ui, sans-serif', etiquettes: '"Bahnschrift SemiCondensed", "Bahnschrift", Consolas, monospace', lettre: 0.5 },
      scifi: { titre: '"Michroma", "Segoe UI", sans-serif', poids: 400, style: 'normal', texte: '"Instrument Sans", system-ui, sans-serif', etiquettes: '"Michroma", Consolas, monospace', lettre: 0.95 },
      editorial: { titre: '"Instrument Serif", Georgia, serif', poids: 400, style: 'italic', texte: '"Instrument Sans", system-ui, sans-serif', etiquettes: 'Consolas, ui-monospace, monospace', lettre: 0.48 },
      terminal: { titre: 'Consolas, ui-monospace, monospace', poids: 700, style: 'normal', texte: 'Consolas, ui-monospace, monospace', etiquettes: 'Consolas, ui-monospace, monospace', lettre: 0.55 },
      affiche: { titre: 'Impact, "Arial Narrow", sans-serif', poids: 400, style: 'normal', texte: '"Segoe UI", system-ui, sans-serif', etiquettes: 'Consolas, ui-monospace, monospace', lettre: 0.48 }
    };
    function appliquerLayoutCarte() {
      const v = (nom, valeur) => scene.style.setProperty(nom, String(valeur));
      const p = POLICES_CARTE[r.lcPolices] || POLICES_CARTE.theme;
      v('--lc-titre', p.titre); v('--lc-titre-poids', p.poids); v('--lc-titre-style', p.style);
      v('--lc-texte', p.texte); v('--lc-etiquettes', p.etiquettes); v('--lc-lettre', p.lettre);
      v('--lc-coins', r.lcCoins + 'cqw'); v('--lc-cadre', r.lcCadre); v('--lc-fond', r.lcFond);
      v('--lc-photo-hauteur', r.lcPhotoHauteur); v('--lc-photo-gauche', r.lcPhotoGauche + 'cqw'); v('--lc-cadrage', r.lcPhotoCadrage + '%');
      v('--lc-photo-zoom', r.lcPhotoZoom); v('--lc-fondu', r.lcPhotoFondu + '%');
      v('--lc-pseudo-taille', r.lcPseudoTaille); v('--lc-pseudo-x', r.lcPseudoX + 'cqw'); v('--lc-pseudo-y', r.lcPseudoY + 'cqw'); v('--lc-pseudo-espace', r.lcPseudoEspace + 'em');
      v('--lc-etiquette-taille', r.lcEtiquetteTaille + 'cqw');
      v('--lc-marge', r.lcMarge + 'cqw'); v('--lc-marge-haut', r.lcMargeHaut + 'cqw'); v('--lc-marge-bas', r.lcMargeBas + 'cqw'); v('--lc-espace', r.lcEspace + 'cqw');
      v('--lc-role-taille', r.lcRoleTaille + 'cqw'); v('--lc-icone-taille', r.lcIconeTaille + 'cqw'); v('--lc-identite-taille', r.lcIdentiteTaille + 'cqw');
      v('--lc-bio-taille', r.lcBioTaille + 'cqw'); v('--lc-bio-interligne', r.lcBioInterligne);
      v('--lc-colonnes', r.lcObjetsColonnes); v('--lc-objets-espace', r.lcObjetsEspace + 'cqw'); v('--lc-objet-icone', r.lcObjetIcone + '%'); v('--lc-objet-texte', r.lcObjetTexte + 'cqw');
      const attribut = (nom, oui) => scene.toggleAttribute(nom, oui);
      attribut('data-lc-photo-fixe', r.lcPhotoHauteur > 0);
      attribut('data-lc-pseudo-horizontal', r.lcPseudoSens === 'horizontal');
      attribut('data-lc-pseudo-contour', r.lcPseudoContour);
      attribut('data-lc-sans-etiquette', !r.lcEtiquette);
      attribut('data-lc-sans-identite', !r.lcIdentite);
      attribut('data-lc-sans-bio', !r.lcBio);
      attribut('data-lc-sans-objets', !r.lcObjets);
      attribut('data-lc-sans-type', !r.lcObjetType);
      attribut('data-lc-sans-modele', !r.lcObjetModele);
      if (holoCarte >= 0 && univers !== 'tajine') afficherBanniere(holoCarte);
    }
    function appliquerReglagesCartes() {
      scene.style.setProperty('--br-glisse', r.brGlisse + 'ms');
      scene.style.setProperty('--br-rebond', (1 + 1.6 * r.brElasticite).toFixed(2));
      scene.style.setProperty('--br-derive', r.brDerive + 'deg');
      dessinerCurseur();
      scene.style.setProperty('--cj-duree', r.dureeRetournement + 's');
      scene.style.setProperty('--cj-courbe', 'cubic-bezier(.35, ' + (1 + 0.7 * r.rebond).toFixed(2) + ', .45, 1)');
      scene.style.setProperty('--cj-agrandi', String(r.agrandissement));
      scene.toggleAttribute('data-rappel', r.rappelClic);
      scene.style.setProperty('--cj-flotte', r.flottementCarte + 'px');
      scene.style.setProperty('--cj-desat', String(r.desaturation));
      scene.style.setProperty('--cj-teinte', String(r.teinte));
      scene.style.setProperty('--cj-trame', String(r.trame));
      if (r.reflet) delete scene.dataset.sansReflet; else scene.dataset.sansReflet = '1';
      scene.style.setProperty('--holo-force', String(r.holoTremblement));
      scene.style.setProperty('--holo-couleur', r.holoCouleur);
      scene.style.setProperty('--holo-texte', r.holoTexte);
      scene.toggleAttribute('data-reglages-pro', r.carteReglages);
      scene.toggleAttribute('data-reseaux', r.carteReseaux);
      scene.toggleAttribute('data-direct', r.carteDirect);
      scene.style.setProperty('--couleur-direct', r.couleurDirect);
      scene.style.setProperty('--photo-gain', String(r.photoGain));
      scene.style.setProperty('--nom-fond', String(r.nomFond));
      scene.style.setProperty('--fiche-zoom', String(r.ficheZoom));
      scene.style.setProperty('--fiche-dx', r.ficheX + 'px');
      scene.style.setProperty('--fiche-dy', r.ficheY + 'px');
      scene.style.setProperty('--agent-zoom', String(r.agentZoom));
      scene.style.setProperty('--agent-dx', r.agentX + 'px');
      scene.style.setProperty('--agent-dy', r.agentY + 'px');
      scene.style.setProperty('--nom-fond-taille', String(r.nomFondTaille));
      scene.style.setProperty('--nom-fond-y', r.nomFondY + '%');
      scene.style.setProperty('--holo-lignes', String(r.holoLignes));
      scene.style.setProperty('--faisceau', String(r.holoFaisceau));
      appliquerLayoutCarte();
      scene.style.setProperty('--apercu-rotation', r.apercuRotation + 'deg');
      scene.style.setProperty('--apercu-leve', r.apercuSoulevement + 'px');
      if (r.apercuIndice) delete scene.dataset.sansIndice; else scene.dataset.sansIndice = '';
      scene.style.setProperty('--holo-obscurite', String(r.holoObscurite));
      if (r.equipeRespiration && !calme) scene.dataset.respiration = ''; else delete scene.dataset.respiration;
    }
    const longueurTotale = () => longueur + arretEquipe;
    const progressionTotale = () => (longueurTotale() > 0 ? Math.min(1, Math.max(0, defilement.scrollTop / longueurTotale())) : 0);
    function placerCartes() {
      const L = largeurCarte, H = hauteurCarte, Z = zoneHauteurPx, etroit = largeur < 640;
      const espace = r.equipeEspace;
      scene.dataset.mode = actif >= 0 ? 'selection' : 'equipe';
      const creux = r.equipeCreux;
      const tailleFormation = etroit
        ? Math.min(1, (largeur * 0.94 - 2 * espace) / (3 * L), (Z - espace) / (2 * H))
        : Math.min(1, (largeur * 0.92 - 4 * espace) / (5 * L), Z / (H * (1 + 2 * creux)));
      const pas = L * tailleFormation + espace;
      const sBanc = r.tailleBanc, agrandi = r.agrandissement;
      const sChoisi = Math.min(r.tailleChoisie, ((Z - H * sBanc - 72) * 2) / ((1 + agrandi) * H));
      const banc = cartes.map((_, i) => i).filter(i => i !== actif);
      const largeurBanc = banc.length * L * sBanc + (banc.length - 1) * 12;
      const yBanc = Z / 2 - (H * sBanc) / 2 - 4;
      cartes.forEach((carte, i) => {
        let x, y, echelle, angle = 0, voile = 0, z = 40;
        if (actif < 0) {
          if (etroit) {
            const rang = i < 3 ? 0 : 1, k = i < 3 ? i - 1 : i - 3.5;
            x = k * pas;
            y = (rang === 0 ? -1 : 1) * (H * tailleFormation + espace) / 2;
          } else {
            x = (i - 2) * pas;
            y = (2 - Math.abs(i - 2)) * creux * H * tailleFormation - creux * H * tailleFormation;
            angle = (i - 2) * r.equipeEventail;
          }
          echelle = tailleFormation;
          if (apercu >= 0 && apercu !== i) voile = r.equipeOmbre;
          z = 40 - Math.abs(i - 2) * 2 + (i === apercu ? 10 : 0);
        } else if (i === actif) {
          x = 0;
          y = -Z / 2 + (H * sChoisi) / 2 + 6;
          echelle = sChoisi;
          z = 50;
        } else {
          const k = banc.indexOf(i);
          x = -largeurBanc / 2 + L * sBanc / 2 + k * (L * sBanc + 12);
          y = yBanc;
          echelle = sBanc;
          voile = i === apercu ? 0.05 : 0.3;
          z = 45;
        }
        carte.style.transition = calme ? 'none' : '';
        carte.style.transform = 'translate3d(' + x.toFixed(1) + 'px, ' + y.toFixed(1) + 'px, 0) rotate(' + angle.toFixed(2) + 'deg) scale(' + echelle.toFixed(4) + ')';
        carte.style.zIndex = String(z);
        carte.style.setProperty('--delai-respiration', (i * 0.35).toFixed(2) + 's');
        voiles[i].style.opacity = voile.toFixed(3);
        carte.classList.toggle('active', i === actif);
      });
      majIndiceClic();
      const basCarte = -Z / 2 + (H * sChoisi) / 2 + 6 + (H * sChoisi * agrandi) / 2;
      const hautBanc = yBanc - (H * sBanc) / 2;
      retour.style.left = (largeur / 2) + 'px';
      retour.style.top = (Z / 2 + (basCarte + hautBanc) / 2) + 'px';
    }
    function suivreApparition(p) {
      if (calme) {
        if (!toutesEntrees) { entrees.forEach(e => { e.style.transition = 'none'; e.style.transform = ''; e.style.opacity = ''; }); cartes.forEach(c => { c.style.pointerEvents = ''; }); toutesEntrees = true; majIndiceClic(); }
        return;
      }
      const hautZone = geometrie(p).pointe - r.pente * largeur / 2 + dosHautPx + zoneHautPx;
      const seuil = hauteur * r.cartesDebut / 100;
      const doitEntrer = equipeEntree ? hautZone < seuil + 40 : hautZone <= seuil;
      if (doitEntrer === equipeEntree) return;
      equipeEntree = doitEntrer;
      clearTimeout(minuterieEntree);
      if (!equipeEntree) { if (actif >= 0) choisir(-1); finApercu(); toutesEntrees = false; majIndiceClic(); }
      entrees.forEach((e, i) => {
        if (equipeEntree) {
          const delai = (i * r.equipeEntree).toFixed(2);
          e.style.transition = 'transform .6s cubic-bezier(.2, .9, .25, 1) ' + delai + 's, opacity .45s ease-out ' + delai + 's';
          e.style.transform = ''; e.style.opacity = '';
        } else {
          const delai = (N - 1 - i) * r.equipeEntree * 0.7;
          e.style.transition = 'transform .5s cubic-bezier(.55, 0, .8, .2) ' + delai.toFixed(2) + 's, opacity .35s ease-in ' + (delai + 0.1).toFixed(2) + 's';
          e.style.transform = transformCachee(i); e.style.opacity = '0';
        }
        cartes[i].style.pointerEvents = equipeEntree ? '' : 'none';
      });
      if (equipeEntree) { toutesEntrees = true; majIndiceClic(); }
    }
    function suivreEquipe() { suivreApparition(pLisse); }
    function majIndiceClic() {
      scene.toggleAttribute('data-indice-clic', !!r.indiceClic && !indiceClicFini && toutesEntrees && actif < 0);
    }
    function choisir(i) {
      clearTimeout(minuterieRetournement);
      if (actif >= 0 && actif !== i) retourner(actif, false);
      actif = i;
      cartes.forEach(c => { c.classList.remove('survolee'); c.style.removeProperty('--tilt-x'); c.style.removeProperty('--tilt-y'); });
      finApercu();
      placerCartes();
      if (i >= 0) {
        cartes[i].focus({ preventScroll: true });
        if (calme) retourner(i, true);
        else minuterieRetournement = setTimeout(() => { if (actif === i) retourner(i, true); }, 480);
      }
    }
    const url = u => 'url("' + u + '")';
    const tiroirReseaux = j => '<div class="mcb-tiroir"><div class="mcb-tiroir-interieur">' + (j.reseaux || []).map(nom => {
      const lien = j.liens && j.liens[nom], direct = nom === 'twitch' && j.direct && r.carteDirect ? ' en-direct' : '';
      return lien
        ? '<a class="mcb-bouton' + direct + '" href="' + lien + '" target="_blank" rel="noopener" aria-label="' + nom + ' de ' + j.pseudo + '"><span class="mcb-bouton-fond"></span>' + icone(nom) + '</a>'
        : '<span class="mcb-bouton' + direct + '" title="' + nom + ' : bientôt"><span class="mcb-bouton-fond"></span>' + icone(nom) + '</span>';
    }).join('') + '</div></div>';
    const apercuDirect = j =>
      '<a class="mcb-photo mcb-direct" href="' + j.liens.twitch + '" target="_blank" rel="noopener" aria-label="Regarder le live de ' + j.pseudo + ' sur Twitch">' +
        '<img src="' + j.imageDirect + '" alt="" decoding="async">' +
        '<span class="mcb-direct-badge"><i></i>LIVE</span><span class="mcb-direct-lecture" aria-hidden="true"></span>' +
        '<span class="mcb-direct-infos"><b>' + j.titreDirect + '</b>' + j.spectateurs + ' spectateurs · ' + j.liens.twitch.replace('https://www.', '') + '</span>' +
        '<span class="mcb-direct-ouvrir">Regarder sur Twitch ↗</span></a>';
    function banniere(j) {
      const enDirect = !!(j.direct && r.carteDirect && j.liens && j.liens.twitch);
      const c = r.lcCoins;
      const cadre = '0,0 ' + (100 - c) + ',0 100,' + c + ' 100,150 ' + c + ',150 0,' + (150 - c);
      const objet = ([type, modele]) => '<div class="mcb-objet"><div class="mcb-case"><i>' + type + '</i><svg viewBox="0 0 24 24" aria-hidden="true">' + (icones[type] || '') + '</svg></div><span>' + modele + '</span></div>';
      return '<div class="mcb-carte"><div class="mcb-contenu"><div class="mcb-haut">' +
          (enDirect ? apercuDirect(j) : '<div class="mcb-photo"><img src="' + j.photo + '" alt="" decoding="async"><span class="mcb-teinte"></span></div>') +
          (enDirect ? '<p class="mcb-pseudo mcb-pseudo--direct" style="--lettres:7">En live</p>' : '<p class="mcb-pseudo" style="--lettres:' + j.pseudo.length + '">' + j.pseudo + '</p>') +
          '<span class="mcb-etiquette">// ' + j.numero + '</span></div>' +
        '<div class="mcb-bas"><div class="mcb-role"><span class="mcb-icone" style=\'--icone:' + url('ressources-maquette/V-valorant/roles/' + j.icone + '.png') + '\'></span>' +
          '<div><small>Agent favori · ' + j.agent + '</small>' + j.role + '</div></div>' +
          '<p class="mcb-identite">' + j.identite + '</p>' +
          '<div class="mcb-bio">' + j.bio.map(ligne => '<p>' + ligne + '</p>').join('') + '</div>' +
          (j.setup.length ? '<div class="mcb-objets">' + j.setup.map(objet).join('') + '</div>' : '<p class="mcb-vide">Équipement à venir</p>') +
        '</div></div>' +
        '<svg class="mcb-cadre" viewBox="0 0 100 150" preserveAspectRatio="none" aria-hidden="true"><polygon points="' + cadre + '"/></svg></div>' + tiroirReseaux(j);
    }
    function afficherBanniere(i) {
      holoImage.innerHTML = banniere(joueurs[i]);
      const photo = holoImage.querySelector('.mcb-photo img');
      photo.addEventListener('error', () => photo.parentElement.classList.add('mcb-sans-photo'));
      ajusterPseudo();
      document.fonts.ready.then(ajusterPseudo);
    }
    const REMPLISSAGE_PSEUDO = 0.96;
    const EPAISSEUR_PSEUDO = 0.985;
    function ajusterPseudo() {
      const pseudo = holoImage.querySelector('.mcb-pseudo'), haut = holoImage.querySelector('.mcb-haut');
      if (!pseudo || !haut) return;
      const horizontal = r.lcPseudoSens === 'horizontal';
      const cqw = holoImage.clientWidth / 100;
      const libre = horizontal ? haut.clientWidth - r.lcPseudoX * cqw : haut.clientHeight - r.lcPseudoY * cqw;
      const longueur = horizontal ? pseudo.offsetWidth : pseudo.offsetHeight;
      if (libre <= 0 || !longueur) return;
      const cible = Math.min(libre * REMPLISSAGE_PSEUDO * r.lcPseudoTaille, libre);
      const taille = parseFloat(getComputedStyle(pseudo).fontSize) * cible / longueur;
      pseudo.style.fontSize = taille.toFixed(2) + 'px';
      pseudo.style.removeProperty('--etirement');
      pseudo.style.removeProperty('left');
      const colonne = (r.lcPhotoGauche - r.lcPseudoX) * cqw;
      if (horizontal || colonne <= 0) return;
      const etirement = (colonne * EPAISSEUR_PSEUDO) / taille;
      pseudo.style.setProperty('--etirement', etirement.toFixed(3));
      pseudo.style.left = (r.lcPseudoX * cqw - pseudo.offsetWidth * (1 - etirement) / 2).toFixed(2) + 'px';
    }
    function montrerHologramme(i) {
      if (!holoDisponible || !r.hologramme) return;
      if (univers === 'tajine') holoImage.replaceChildren(cartes[i].querySelector('.mcj-avant').cloneNode(true));
      else {
        afficherBanniere(i);
        holoAgent.style.setProperty('--fond', url('ressources-maquette/V-valorant/agents/' + joueurs[i].dossier + '/fond.png'));
      }
      holoCarte = i;
      holo.classList.add('visible');
      scene.dataset.holo = '';
      if (agentDisponible && r.holoAgent && joueurs[i].agentImage) {
        if (imageAgent.getAttribute('src') !== joueurs[i].agentImage) imageAgent.src = joueurs[i].agentImage;
        holoAgent.style.setProperty('--agent-masque', 'url("' + joueurs[i].agentImage + '")');
        holoAgent.querySelector('.mcj-holo-nom').textContent = joueurs[i].agent;
        holoAgent.classList.add('visible');
        preparerTranchesAgent();
      }
    }
    function cacherHologramme() {
      holoCarte = -1;
      holo.classList.remove('visible');
      if (holoAgent) holoAgent.classList.remove('visible');
      delete scene.dataset.holo;
      arreterBrouillage();
    }
    const projectionAgent = holoAgent.querySelector('.mcj-holo-projection');
    const zoneTranches = holoAgent.querySelector('.mcj-tranches');
    const scanAgent = holoAgent.querySelector('.mcj-scan');
    const imageAgentCadre = holoAgent.querySelector('.mcj-holo-image');
    const silhouettes = {};
    let tranchesAgent = [], brX = 0, brY = 0, brCibleX = 0, brCibleY = 0, brCharge = 0, brChargeMax = 0;
    let brDernierMouvement = 0, brDernierTirage = 0, brFinDecharge = 0, brFinRetour = 0, brPrecedent = 0, brIdImage = 0;
    const brHasard = (min, max) => min + Math.random() * (max - min);
    function lireSilhouette(src) {
      if (src in silhouettes) return;
      silhouettes[src] = null;
      const lecture = new Image();
      lecture.onload = () => {
        try {
          const toile = document.createElement('canvas');
          toile.width = toile.height = 100;
          const ctx = toile.getContext('2d', { willReadFrequently: true });
          ctx.drawImage(lecture, 0, 0, 100, 100);
          silhouettes[src] = ctx.getImageData(0, 0, 100, 100).data;
        } catch (erreur) { silhouettes[src] = null; }
      };
      lecture.src = src;
    }
    function surSilhouette(u, v) {
      if (u < 0 || v < 0 || u >= 1 || v >= 1) return false;
      const alpha = silhouettes[imageAgent.getAttribute('src')];
      return !alpha || alpha[(Math.floor(v * 100) * 100 + Math.floor(u * 100)) * 4 + 3] > 40;
    }
    function preparerTranchesAgent() {
      const src = imageAgent.getAttribute('src') || '';
      if (tranchesAgent.length !== r.brTranches) {
        zoneTranches.innerHTML = Array.from({ length: r.brTranches }, () => '<div class="mcj-tranche"><div><img alt="" decoding="async"><span class="mcj-holo-teinte"></span><span class="mcj-holo-lignes"></span></div></div>').join('');
        tranchesAgent = [...zoneTranches.children];
      }
      for (const tranche of tranchesAgent) { const img = tranche.querySelector('img'); if (img.getAttribute('src') !== src && src) img.src = src; }
      if (src) lireSilhouette(src);
    }
    const brRejouer = (element, classe) => { element.classList.remove(classe); void element.offsetWidth; element.classList.add(classe); };
    function arreterBrouillage() {
      cancelAnimationFrame(brIdImage); brIdImage = 0;
      holoAgent.removeAttribute('data-brouille');
      brCharge = 0; brChargeMax = 0; brFinRetour = 0;
    }
    function brouiller(maintenant) {
      const pas = brPrecedent ? Math.min(3, (maintenant - brPrecedent) / 16.7) : 1;
      brPrecedent = maintenant;
      const l = projectionAgent.offsetWidth, h = projectionAgent.offsetHeight;
      brX += (brCibleX - brX) * (1 - Math.pow(0.6, pas)); brY += (brCibleY - brY) * (1 - Math.pow(0.6, pas));
      const decharge = maintenant < brFinDecharge;
      if (!decharge && maintenant - brDernierMouvement > 80) brCharge *= Math.pow(1 - 0.12 / r.brPersistance * 0.45, pas);
      if (brCharge < 0.03 && !decharge) {
        if (!brFinRetour) { brFinRetour = maintenant + r.brGlisse * 1.6; for (const t of tranchesAgent) t.firstChild.style.transform = 'translate3d(0, 0, 0)'; }
        if (maintenant < brFinRetour) { brIdImage = requestAnimationFrame(brouiller); return; }
        if (r.brResync && brChargeMax > 0.25) { brRejouer(scanAgent, 'joue'); brRejouer(imageAgentCadre, 'flash'); }
        arreterBrouillage();
        return;
      }
      brFinRetour = 0;
      holoAgent.setAttribute('data-brouille', '');
      if (maintenant - brDernierTirage >= 1000 / r.brCadence) {
        brDernierTirage = maintenant;
        const actives = decharge ? tranchesAgent.length : Math.max(1, Math.ceil(tranchesAgent.length * brCharge));
        const hauteur = decharge ? h : r.brHauteur * (0.6 + 0.4 * brCharge), largeur = decharge ? l * 2 : r.brRayon * (0.7 + 0.5 * brCharge);
        const centre = decharge ? h / 2 : brY;
        tranchesAgent.forEach((tranche, i) => {
          if (i >= actives) { tranche.style.clipPath = 'inset(50% 50% 50% 50%)'; return; }
          const haut = Math.max(0, centre + brHasard(-hauteur / 2, hauteur / 2)), epaisseur = r.brEpaisseur * brHasard(0.6, 1.6) * (decharge ? 1.6 : 1);
          const gauche = Math.max(0, brX - largeur / 2), droite = Math.max(0, l - (brX + largeur / 2));
          tranche.style.clipPath = 'inset(' + haut.toFixed(1) + 'px ' + droite.toFixed(1) + 'px ' + Math.max(0, h - haut - epaisseur).toFixed(1) + 'px ' + gauche.toFixed(1) + 'px)';
          tranche.firstChild.style.transform = 'translate3d(' + (brHasard(-1, 1) * r.brDecalage * (0.4 + 0.9 * brCharge)).toFixed(1) + 'px, 0, 0)';
        });
      }
      brIdImage = requestAnimationFrame(brouiller);
    }
    function suivreAgent(evenement) {
      if (calme || !r.brouillage || univers === 'tajine' || !holoAgent.classList.contains('visible')) return;
      const b = projectionAgent.getBoundingClientRect(), l = projectionAgent.offsetWidth, h = projectionAgent.offsetHeight;
      const nx = (evenement.clientX - b.left) * l / b.width, ny = (evenement.clientY - b.top) * h / b.height;
      if (!surSilhouette(nx / l, ny / h)) return;
      const chemin = brIdImage ? Math.hypot(nx - brCibleX, ny - brCibleY) : 0;
      if (!brIdImage) { brX = nx; brY = ny; brPrecedent = 0; preparerTranchesAgent(); }
      brCibleX = nx; brCibleY = ny;
      brCharge = Math.min(1, brCharge + chemin / 240 * r.brReactivite + 0.04);
      brChargeMax = Math.max(brChargeMax, brCharge);
      if (evenement.type === 'pointerdown' && r.brDecharge) { brFinDecharge = performance.now() + 280; brCharge = 1; brChargeMax = 1; }
      brDernierMouvement = performance.now();
      if (!brIdImage) brIdImage = requestAnimationFrame(brouiller);
    }
    scene.addEventListener('pointermove', suivreAgent);
    scene.addEventListener('pointerdown', suivreAgent);
    function retourner(i, oui) {
      const carte = cartes[i], flotte = flottes[i];
      if (carte.classList.contains('retournee') === oui) return;
      carte.classList.toggle('retournee', oui);
      if (oui && i === actif) montrerHologramme(i);
      if (!oui && holoCarte === i) cacherHologramme();
      if (oui) {
        flotte.style.transition = '';
        flotte.style.transform = '';
        if (r.flottementCarte > 0 && !calme) flotte.classList.add('flotte');
      } else if (flotte.classList.contains('flotte')) {
        flotte.style.transform = getComputedStyle(flotte).transform;
        flotte.classList.remove('flotte');
        void flotte.offsetWidth;
        flotte.style.transition = 'transform .45s ease-out';
        flotte.style.transform = 'none';
      }
    }
    function formesMotif() {
      const T = r.motifTaille;
      const etoile = pointsEtoile(T / 2, T / 2, (r.motifEtoile * T) / 2, 8, 0.7654);
      const L = r.motifLosanges;
      const losange = (x, y) => [[x, y - L], [x + L, y], [x, y + L], [x - L, y]];
      const losanges = L > 0 ? [losange(0, 0), losange(T, 0), losange(0, T), losange(T, T)] : [];
      if (L > 0 && r.motifLosangeCentre) losanges.push(losange(T / 2, T / 2));
      return { T, etoile, losanges };
    }
    function creerMotif() {
      const { T, etoile, losanges } = formesMotif();
      const poly = pts => pts.map(([x, y]) => x.toFixed(2) + ',' + y.toFixed(2)).join(' ');
      const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + T + '" height="' + T + '">' +
        '<polygon points="' + poly(etoile) + '" fill="none" stroke="#000" stroke-width="' + r.motifTrait + '"/>' +
        losanges.map(l => '<polygon points="' + poly(l) + '"/>').join('') + '</svg>';
      scene.style.setProperty('--motif-maillot', 'url("data:image/svg+xml,' + encodeURIComponent(svg) + '")');
      scene.style.setProperty('--motif-taille', T + 'px');
    }
    function creerPoussiere() {
      const nombre = Math.round(90 * r.poussiere * Math.min(1.4, largeur * hauteur / 900000 + 0.4));
      poussieres = Array.from({ length: nombre }, () => ({ x: Math.random() * largeur, y: Math.random() * hauteur, vy: 0.1 + Math.random() * 0.35, phase: Math.random() * 6.28, taille: 1 + Math.random() * 1.8 }));
    }
    const progression = () => (longueur > 0 ? Math.min(1, Math.max(0, defilement.scrollTop / longueur)) : 0);
    function progressionArret() {
      const depart = geometrie(0).pointe, fin = geometrie(1).pointe;
      const visee = (r.arret / 100) * hauteur;
      return Math.min(1, Math.max(0, (depart - visee) / (depart - fin)));
    }
    const margeV = () => r.epaisseur * 2 + (r.doubleTrait ? r.epaisseur * 2 : 0);
    const repos = () => (r.invitationRepos > 0 ? margeV() + (r.invitationRepos / 100) * hauteur : 0);
    function geometrie(p) {
      const orientation = 1;
      const sens = -1;
      const montee = r.pente * largeur / 2;
      const marge = margeV();
      const cacheeEnHaut = -marge - (orientation === 1 ? 0 : montee);
      const cacheeEnBas = hauteur + marge + (orientation === 1 ? montee : 0) - repos();
      const pointe = sens === 1 ? cacheeEnHaut + p * (cacheeEnBas - cacheeEnHaut) : cacheeEnBas + p * (cacheeEnHaut - cacheeEnBas);
      return { pointe, sens, yV: x => pointe - orientation * r.pente * Math.abs(x - largeur / 2) };
    }
    function dessiner(temps) {
      const cible = progression() * progressionArret();
      if (calme) {
        const tau = r.calmeLissage / 1000;
        if (!temps || tau <= 0) pLisse = cible;
        else {
          const dt = Math.min(0.064, Math.max(0, (temps - dernierTempsCalme) / 1000));
          pLisse += (cible - pLisse) * (1 - Math.exp(-dt / tau));
          if (Math.abs(cible - pLisse) < 0.0002) pLisse = cible;
        }
        dernierTempsCalme = temps;
        vitesseV = 0;
      }
      const ancienne = pLisse;
      const raideur = 0.16 - 0.14 * r.inertie;
      vitesseV = vitesseV * (1 - 2 * Math.sqrt(raideur)) + (cible - pLisse) * raideur;
      pLisse += vitesseV;
      if (Math.abs(cible - pLisse) < 0.0005 && Math.abs(vitesseV) < 0.0005) { pLisse = cible; vitesseV = 0; }
      vitesse += (Math.abs(pLisse - ancienne) - vitesse) * 0.1;
      const p = pLisse;
      ctx.clearRect(0, 0, largeur, hauteur);
      ctx.globalCompositeOperation = 'lighter';
      for (const g of (calme ? [] : poussieres)) {
        g.y -= g.vy; if (g.y < -4) { g.y = hauteur + 4; g.x = Math.random() * largeur; }
        ctx.globalAlpha = 0.25 + 0.35 * (0.5 + 0.5 * Math.sin(temps / 600 + g.phase));
        ctx.fillStyle = or.clair;
        ctx.fillRect(g.x, g.y, g.taille, g.taille);
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
      if (p > 0 || repos() > 0) {
        const { pointe, sens, yV } = geometrie(p);
        tissu.style.transform = 'translate3d(0,' + (pointe - r.pente * largeur / 2).toFixed(1) + 'px,0)';
        plisCalque.style.opacity = String(r.plis);
        if (r.couturesNombre > 0) {
          const depart = r.doubleTrait ? r.epaisseur * 2.4 + 6 : r.epaisseur * 1.1 + 6;
          const ecart = r.couturesEpaisseur * 2 + 6;
          ctx.save();
          ctx.setLineDash([r.couturesPoint, r.couturesEspace]);
          ctx.lineDashOffset = -temps * 0.03 * r.couturesVitesse;
          ctx.strokeStyle = or.moyen; ctx.globalAlpha = 0.85; ctx.lineWidth = r.couturesEpaisseur; ctx.lineJoin = 'miter';
          for (let n = 0; n < r.couturesNombre; n++) {
            const recul = -sens * (depart + n * ecart);
            ctx.beginPath(); ctx.moveTo(-20, yV(-20) + recul); ctx.lineTo(largeur / 2, pointe + recul); ctx.lineTo(largeur + 20, yV(largeur + 20) + recul); ctx.stroke();
          }
          ctx.restore();
        }
        const balayage = calme ? 0.5 : ((temps / 1800) % 1.6) - 0.3;
        const borne = v => Math.min(1, Math.max(0, v));
        const degrade = ctx.createLinearGradient(0, 0, largeur, 0);
        degrade.addColorStop(0, or.sombre);
        degrade.addColorStop(borne(balayage - 0.12), or.moyen);
        degrade.addColorStop(borne(balayage), or.reflet);
        degrade.addColorStop(borne(balayage + 0.12), or.moyen);
        degrade.addColorStop(1, or.sombre);
        const trait = (decalage, epaisseur) => {
          ctx.beginPath(); ctx.moveTo(-20, yV(-20) + decalage); ctx.lineTo(largeur / 2, pointe + decalage); ctx.lineTo(largeur + 20, yV(largeur + 20) + decalage);
          ctx.lineWidth = epaisseur; ctx.lineJoin = 'miter'; ctx.miterLimit = 20; ctx.stroke();
        };
        if (r.lueur > 0) {
          ctx.globalCompositeOperation = 'lighter'; ctx.strokeStyle = or.reflet;
          ctx.globalAlpha = 0.08 * r.lueur; trait(0, r.epaisseur + 40 * r.lueur);
          ctx.globalAlpha = 0.16 * r.lueur; trait(0, r.epaisseur + 16 * r.lueur);
          ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
        }
        ctx.strokeStyle = degrade;
        trait(0, r.epaisseur);
        if (r.doubleTrait) trait(-sens * r.epaisseur * 1.7, Math.max(2, r.epaisseur * 0.32));
        if (r.haloForce > 0) {
          const souffle = r.haloVitesse > 0 ? Math.sin((temps / 1000) * 2 * Math.PI * 0.6 * r.haloVitesse) : 0;
          const rayon = Math.max(4, r.epaisseur * 3.5 * r.haloTaille * (1 + 0.35 * souffle));
          const halo = ctx.createRadialGradient(largeur / 2, pointe, 0, largeur / 2, pointe, rayon);
          halo.addColorStop(0, or.reflet); halo.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = Math.min(1, r.haloForce * (0.85 + 0.15 * souffle) * (r.maillotBlanc ? 0.5 : 1));
          ctx.fillStyle = halo; ctx.fillRect(largeur / 2 - rayon, pointe - rayon, rayon * 2, rayon * 2);
          ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
        }
        if (p < 1 && r.etincelles > 0 && !calme) {
          resteEmission += r.etincelles * 2 * (0.6 + Math.min(1, vitesse * 150));
          while (resteEmission >= 1 && etincelles.length < 500) {
            resteEmission -= 1;
            const s = ((numeroEtincelle++ * 0.618034) % 1) * 2 - 1;
            const vieMax = 55 + Math.random() * 45;
            etincelles.push({ s, vs: Math.sign(s || 1) * (0.0012 + Math.random() * 0.0022) * r.etincellesVitesse, d: 0, vd: (0.25 + Math.random() * 0.4) * r.etincellesVitesse,
              vie: vieMax, vieMax, taille: 1.2 + Math.random() * 2, phase: Math.random() * 6.28, couleur: [or.reflet, or.clair, or.moyen][Math.floor(Math.random() * 3)] });
          }
          resteEmission = Math.min(resteEmission, 1);
        }
        ctx.globalCompositeOperation = 'lighter';
        for (let i = etincelles.length - 1; i >= 0; i--) {
          const e = etincelles[i];
          e.s += e.vs; e.d += e.vd; e.vd *= 0.97; e.vie--;
          if (e.vie <= 0 || Math.abs(e.s) > 1.05) { etincelles.splice(i, 1); continue; }
          const x = largeur / 2 + e.s * (largeur / 2);
          const y = yV(x) + sens * (r.epaisseur / 2 + 1.5 + e.d);
          const apparition = Math.min(1, (e.vieMax - e.vie) / 10);
          const scintillement = 0.8 + 0.2 * Math.sin(temps / 120 + e.phase);
          ctx.globalAlpha = apparition * (e.vie / e.vieMax) * scintillement;
          ctx.fillStyle = e.couleur;
          ctx.fillRect(x - e.taille / 2, y - e.taille / 2, e.taille, e.taille);
        }
        ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
      } else {
        etincelles.length = 0;
        tissu.style.transform = 'translate3d(0,300vh,0)';
        plisCalque.style.opacity = '0';
      }
      contenu.style.transform = calme ? 'none' : `scale(${1 - 0.08 * p})`;
      contenu.style.opacity = String(1 - 0.6 * p);
      suivreEquipe();
      curseur.value = String(Math.round(progressionTotale() * 1000));
      affichage.textContent = Math.round(progressionTotale() * 100) + ' %';
    }
    function boucle(temps) {
      idImage = 0;
      if (!visible || calme) return;
      dessiner(temps);
      idImage = requestAnimationFrame(boucle);
    }
    const demarrer = () => { if (!idImage && visible && !calme) idImage = requestAnimationFrame(boucle); };
    let idCalme = 0, dernierTempsCalme = 0;
    function boucleCalme(temps) {
      idCalme = 0;
      dessiner(temps);
      if (pLisse !== progression() * progressionArret()) idCalme = requestAnimationFrame(boucleCalme);
    }
    if (calme) defilement.addEventListener('scroll', () => {
      if (!idCalme) { dernierTempsCalme = performance.now(); idCalme = requestAnimationFrame(boucleCalme); }
    }, { passive: true });
    function appliquerReflet() {
      const actif = r.refletLogo && !calme;
      brillance.style.display = actif ? '' : 'none';
      if (actif) animationReflet.beginElement?.(); else animationReflet.endElement?.();
    }
    function arreterLecture() { cancelAnimationFrame(idLecture); idLecture = 0; boutonLecture.textContent = 'Lecture'; }
    function lire() {
      if (idLecture) { arreterLecture(); return; }
      const duree = 5000;
      const aLaFin = progressionTotale() >= 0.995;
      const depart = performance.now() - (aLaFin ? 0 : progressionTotale() * duree);
      if (aLaFin) defilement.scrollTop = 0;
      boutonLecture.textContent = 'Pause';
      const pas = maintenant => {
        const p = Math.min(1, (maintenant - depart) / duree);
        defilement.scrollTop = p * longueurTotale();
        if (p < 1) idLecture = requestAnimationFrame(pas); else arreterLecture();
      };
      idLecture = requestAnimationFrame(pas);
    }
    boutonLecture.addEventListener('click', lire);
    curseur.addEventListener('input', () => { arreterLecture(); defilement.scrollTop = (Number(curseur.value) / 1000) * longueurTotale(); });
    function finApercu() {
      if (apercu < 0) return;
      cartes[apercu].classList.remove('apercu');
      apercu = -1;
      placerCartes();
    }
    cartes.forEach((carte, i) => {
      carte.addEventListener('pointerenter', e => {
        if (e.pointerType !== 'mouse') return;
        clearTimeout(minuterieApercu);
        if (i === actif) carte.classList.add('survolee');
        if (i === actif || carte.classList.contains('retournee')) return;
        finApercu(); apercu = i; carte.classList.add('apercu'); placerCartes();
      });
      carte.addEventListener('pointerleave', e => {
        if (e.pointerType !== 'mouse') return;
        carte.classList.remove('survolee');
        carte.style.removeProperty('--tilt-x'); carte.style.removeProperty('--tilt-y');
        if (apercu === i) { clearTimeout(minuterieApercu); minuterieApercu = setTimeout(finApercu, 140); }
      });
      carte.addEventListener('pointermove', e => {
        if (e.pointerType !== 'mouse' || i !== actif || !carte.classList.contains('retournee')) return;
        carte.classList.add('survolee');
        if (calme || !r.dosInclinaison) return;
        const b = carte.getBoundingClientRect();
        const dx = ((e.clientX - b.left) / b.width - 0.5) * 2, dy = ((e.clientY - b.top) / b.height - 0.5) * 2;
        carte.style.setProperty('--tilt-y', (dx * r.dosInclinaison).toFixed(2) + 'deg');
        carte.style.setProperty('--tilt-x', (-dy * r.dosInclinaison).toFixed(2) + 'deg');
      });
      const activer = () => {
        if (!indiceClicFini) { indiceClicFini = true; majIndiceClic(); }
        arreterLecture();
        choisir(i === actif ? -1 : i);
      };
      carte.addEventListener('click', activer);
      carte.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activer(); } });
    });
    retour.addEventListener('click', () => choisir(-1));
    scene.addEventListener('keydown', e => { if (e.key === 'Escape' && actif >= 0) choisir(-1); });
    defilement.addEventListener('wheel', arreterLecture, { passive: true });
    defilement.addEventListener('touchstart', arreterLecture, { passive: true });
    const invite = scene.querySelector('.mc-invite');
    let aInteragi = false, enDemo = false, idDemo = 0, minuterieDemo = 0;
    let aDefile = false;
    function majInvite() {
      const montrer = r.invitation && !aDefile && (enDemo || defilement.scrollTop < 20);
      invite.classList.toggle('cachee', !montrer);
    }
    function arreterDemo() {
      clearTimeout(minuterieDemo); minuterieDemo = 0;
      if (idDemo) { cancelAnimationFrame(idDemo); idDemo = 0; }
      enDemo = false;
    }
    function programmerDemo(secondes) {
      clearTimeout(minuterieDemo); minuterieDemo = 0;
      if (calme || !r.invitation || aInteragi) return;
      minuterieDemo = setTimeout(jouerDemo, secondes * 1000);
    }
    function jouerDemo() {
      minuterieDemo = 0;
      if (aInteragi || !visible || idLecture || defilement.scrollTop > 2) { programmerDemo(r.invitationPause); return; }
      const debutV = geometrie(0).pointe, finV = geometrie(1).pointe;
      const pointeVisee = hauteur * (1 - r.invitationAmplitude) + r.pente * largeur / 2;
      const pV = Math.min(1, Math.max(0, (debutV - pointeVisee) / (debutV - finV)));
      const hauteurDemo = (longueur * pV) / Math.max(0.01, progressionArret()), duree = 1300, depart = performance.now();
      enDemo = true; majInvite();
      const pas = maintenant => {
        const k = Math.min(1, Math.max(0, (maintenant - depart) / duree));
        const bosse = u => (u <= 0 || u >= 1 ? 0 : Math.sin(Math.PI * u) ** 2);
        const forme = k < 0.5 ? bosse(k / 0.5) : 0.7 * bosse((k - 0.5) / 0.5);
        defilement.scrollTop = hauteurDemo * forme;
        if (k < 1) { idDemo = requestAnimationFrame(pas); return; }
        idDemo = 0; enDemo = false; defilement.scrollTop = 0; majInvite();
        programmerDemo(r.invitationPause);
      };
      idDemo = requestAnimationFrame(pas);
    }
    const interaction = () => {
      if (aInteragi) return;
      aInteragi = true;
      const etaitEnDemo = enDemo;
      arreterDemo();
      if (etaitEnDemo) defilement.scrollTop = 0;
      majInvite();
    };
    for (const type of ['wheel', 'touchstart', 'keydown', 'pointerdown']) scene.addEventListener(type, interaction, { passive: true, capture: true });
    defilement.addEventListener('scroll', () => { if (!enDemo) { if (defilement.scrollTop > 40) aDefile = true; majInvite(); } }, { passive: true });
    majInvite();
    programmerDemo(r.invitationDelai);
    const observateurVisibilite = new IntersectionObserver(entrees => { visible = entrees[0].isIntersecting; demarrer(); });
    observateurVisibilite.observe(scene);
    const observateurTaille = new ResizeObserver(() => { mettreEnPage(); });
    observateurTaille.observe(defilement);
    mettreEnPage();
    appliquerReflet();
    placerCartes();
    demarrer();
    return {
      mettreAJour(nouveaux) {
        const p = progressionTotale();
        r = { ...nouveaux };
        mettreEnPage();
        if (!enDemo) defilement.scrollTop = p * longueurTotale();
        appliquerReflet();
        if (!r.invitation) arreterDemo(); else if (!minuterieDemo && !idDemo) programmerDemo(r.invitationPause);
        majInvite();
      },
      detruire() {
        arreterBrouillage();
        clearTimeout(minuterieRetournement);
        clearTimeout(minuterieApercu);
        clearTimeout(minuterieEntree);
        arreterLecture();
        arreterDemo();
        cancelAnimationFrame(idImage); idImage = 0; visible = false;
        cancelAnimationFrame(idCalme);
        observateurVisibilite.disconnect();
        observateurTaille.disconnect();
        scene.remove();
      }
    };
  },
  pointsEtoile(cx, cy, rayon, branches, creux = 0.62) {
    const points = [];
    for (let i = 0; i < branches * 2; i++) {
      const angle = (Math.PI / branches) * i - Math.PI / 2;
      const d = i % 2 === 0 ? rayon : rayon * creux;
      points.push([cx + d * Math.cos(angle), cy + d * Math.sin(angle)]);
    }
    return points;
  }
};
enregistrerEffet(EffetMaillotCartes);
