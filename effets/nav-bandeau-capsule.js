const EffetNavBandeauCapsule = {
  id: 'nav-bandeau-capsule',
  nom: 'Bandeau Capsule',
  description: 'Proposition de menu de navigation sur la page Labo - JOUEURS : le bandeau devient une capsule flottante, détachée du haut de l\'écran, bordée d\'or. Le lien actif est posé sur une pastille dorée (texte sombre sur or, très lisible) qui glisse d\'un lien à l\'autre en s\'étirant ; au survol, une pastille fantôme indique où l\'on va. La capsule s\'affine légèrement quand on défile. Liens en 15 px, zones de clic de 48 px. Le menu s\'efface quand un joueur est sélectionné (carte retournée, hologrammes) et revient ensuite.',
  variables: ['--metal-sombre', '--metal-moyen', '--metal-clair', '--metal-reflet', '--couleur-fond', '--couleur-surface', '--couleur-lueur', '--couleur-texte', '--couleur-motif', '--opacite-motif', '--couleur-nuit', '--police-titre', '--police-logo'],
  joueurs: [
    { numero: '01', pseudo: 'Noctis', role: 'Duelliste', agent: 'Jett', agentImage: 'images/agents/jett-full.webp', photo: 'images/joueurs/joueur-01.jpg', acs: 271, kd: '1.34', hs: 32 },
    { numero: '02', pseudo: 'Kaze', role: 'Initiateur', agent: 'Sova', agentImage: 'images/agents/sova-full.webp', photo: 'images/joueurs/joueur-02.jpg', acs: 214, kd: '1.12', hs: 26 },
    { numero: '03', pseudo: 'Lyra', role: 'Contrôleuse', agent: 'Omen', agentImage: 'images/agents/omen-full.webp', photo: 'images/joueurs/joueur-03.jpg', acs: 198, kd: '1.05', hs: 24 },
    { numero: '04', pseudo: 'Sahir', role: 'Sentinelle', agent: 'Killjoy', agentImage: 'images/agents/killjoy-full.webp', photo: 'images/joueurs/joueur-04.jpg', acs: 205, kd: '1.18', hs: 28 },
    { numero: '05', pseudo: 'Vortex', role: 'Flex · IGL', agent: 'Skye', agentImage: 'images/agents/skye-full.webp', photo: 'images/joueurs/joueur-05.jpg', acs: 189, kd: '0.97', hs: 22 }
  ],
  joueursTajine: [
    { numero: '01', pseudo: 'Kemal', role: 'Maître du tajine', agent: 'Tajine', agentImage: 'images/tajine/item-tajine.png', photo: 'images/tajine/joueur-01.jpg', acs: 312, kd: '4.9', hs: 35 },
    { numero: '02', pseudo: 'Rachid', role: 'Roi des brochettes', agent: 'Brochettes kefta', agentImage: 'images/tajine/item-kefta.png', photo: 'images/tajine/joueur-02.jpg', acs: 268, kd: '4.7', hs: 70 },
    { numero: '03', pseudo: 'Yanis', role: 'Kebabier', agent: 'Kebab généreux', agentImage: 'images/tajine/item-kebab.png', photo: 'images/tajine/joueur-03.jpg', acs: 640, kd: '4.8', hs: 85 },
    { numero: '04', pseudo: 'Diego', role: 'Roi du falafel', agent: 'Falafels', agentImage: 'images/tajine/item-falafels.png', photo: 'images/tajine/joueur-04.jpg', acs: 410, kd: '5.0', hs: 20 },
    { numero: '05', pseudo: 'Georges', role: 'Chef de brigade', agent: 'Döner allemand', agentImage: 'images/tajine/item-doner.png', photo: 'images/tajine/joueur-05.jpg', acs: 525, kd: '4.6', hs: 99 }
  ],
  textes: {
    normal: { accroche: 'Esport · Saison 2026-27', role: 'Rôle', agent: 'Agent favori', stats: ['ACS', 'K/D', 'HS'], indice: 'Voir le joueur', retour: 'Toute l\'équipe', rappel: 'Retourner la carte' },
    tajine: { accroche: 'Restaurant · Tajines & couscous', role: 'Poste', agent: 'Spécialité', stats: ['Plats/jour', 'Note', 'Piquant'], indice: 'Voir le chef', retour: 'Toute la brigade', rappel: 'Retourner la carte' }
  },
  parametres: [
    { categorie: 'Défilement', id: 'longueur', libelle: 'Défilement · durée de la transition (% de hauteur d\'écran)', type: 'nombre', min: 60, max: 250, pas: 5, defaut: 120 },
    { categorie: 'Invitation', id: 'invitation', libelle: 'Invitation · démo qui invite à défiler (tant qu\'on n\'a pas touché la page)', type: 'interrupteur', defaut: true },
    { categorie: 'Invitation', id: 'invitationDelai', libelle: 'Invitation · attente avant la première démo (s)', type: 'nombre', min: 1, max: 10, pas: 0.5, defaut: 2.5 },
    { categorie: 'Invitation', id: 'invitationPause', libelle: 'Invitation · temps entre deux démos (s)', type: 'nombre', min: 3, max: 20, pas: 0.5, defaut: 7 },
    { categorie: 'Invitation', id: 'invitationAmplitude', libelle: 'Invitation · hauteur atteinte par le maillot sur les bords pendant la démo (part de l\'écran)', type: 'nombre', min: 0.05, max: 0.6, pas: 0.01, defaut: 0.2 },
    { categorie: 'Défilement', id: 'inertie', libelle: 'Défilement · fluidité du V (0 = sec, 1 = très amorti)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.8 },
    { categorie: 'Col', id: 'pente', libelle: 'Col · ouverture du V (petit = plat, grand = pointu)', type: 'nombre', min: 0.15, max: 1.2, pas: 0.05, defaut: 0.7 },
    { categorie: 'Col', id: 'epaisseur', libelle: 'Col · épaisseur du V (px)', type: 'nombre', min: 4, max: 60, pas: 1, defaut: 45 },
    { categorie: 'Col', id: 'doubleTrait', libelle: 'Col · double trait', type: 'interrupteur', defaut: true },
    { categorie: 'Col', id: 'lueur', libelle: 'Col · lueur de l\'or (0 = mat)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.6 },
    { categorie: 'Col', id: 'arret', libelle: 'Col · arrêt : hauteur finale de la pointe du V (% de l\'écran)', type: 'nombre', min: 0, max: 40, pas: 1, defaut: 7 },
    { categorie: 'Respiration', id: 'haloForce', libelle: 'Respiration · intensité au centre du V (0 = aucune)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.35 },
    { categorie: 'Respiration', id: 'haloTaille', libelle: 'Respiration · taille du halo', type: 'nombre', min: 0.3, max: 3, pas: 0.1, defaut: 1 },
    { categorie: 'Respiration', id: 'haloVitesse', libelle: 'Respiration · vitesse (0 = halo fixe)', type: 'nombre', min: 0, max: 3, pas: 0.1, defaut: 1 },
    { categorie: 'Étincelles', id: 'etincelles', libelle: 'Étincelles · débit (combien en naissent)', type: 'nombre', min: 0, max: 3, pas: 0.1, defaut: 0.7 },
    { categorie: 'Étincelles', id: 'etincellesVitesse', libelle: 'Étincelles · vitesse le long du V', type: 'nombre', min: 0.2, max: 3, pas: 0.1, defaut: 1 },
    { categorie: 'Coutures', id: 'couturesNombre', libelle: 'Coutures · nombre de lignes (0 = aucune)', type: 'nombre', min: 0, max: 3, pas: 1, defaut: 1 },
    { categorie: 'Coutures', id: 'couturesPoint', libelle: 'Coutures · longueur des points (px)', type: 'nombre', min: 2, max: 24, pas: 1, defaut: 7 },
    { categorie: 'Coutures', id: 'couturesEspace', libelle: 'Coutures · espace entre les points (px)', type: 'nombre', min: 2, max: 24, pas: 1, defaut: 6 },
    { categorie: 'Coutures', id: 'couturesEpaisseur', libelle: 'Coutures · épaisseur (px)', type: 'nombre', min: 0.5, max: 4, pas: 0.1, defaut: 1.6 },
    { categorie: 'Coutures', id: 'couturesVitesse', libelle: 'Coutures · vitesse de défilement (0 = immobiles)', type: 'nombre', min: 0, max: 3, pas: 0.1, defaut: 1 },
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
    { categorie: 'Équipe', id: 'equipeArret', libelle: 'Équipe · temps d\'arrêt sur l\'équipe avant la suite de la page (% de hauteur d\'écran)', type: 'nombre', min: 0, max: 200, pas: 5, defaut: 80 },
    { categorie: 'Équipe', id: 'equipeCreux', libelle: 'Équipe · profondeur du V de la formation (part de la hauteur d\'une carte)', type: 'nombre', min: 0, max: 0.4, pas: 0.01, defaut: 0.14 },
    { categorie: 'Équipe', id: 'equipeEventail', libelle: 'Équipe · éventail : inclinaison des cartes (degrés)', type: 'nombre', min: 0, max: 12, pas: 0.5, defaut: 4 },
    { categorie: 'Équipe', id: 'equipeEspace', libelle: 'Équipe · espace entre les cartes (px)', type: 'nombre', min: 0, max: 60, pas: 1, defaut: 16 },
    { categorie: 'Équipe', id: 'equipeEntree', libelle: 'Équipe · entrée des joueurs : décalage entre deux joueurs (s)', type: 'nombre', min: 0, max: 0.4, pas: 0.01, defaut: 0.09 },
    { categorie: 'Équipe', id: 'equipeRespiration', libelle: 'Équipe · le liseré des cartes respire (appel au clic)', type: 'interrupteur', defaut: true },
    { categorie: 'Équipe', id: 'equipeOmbre', libelle: 'Équipe · assombrissement des coéquipiers au survol', type: 'nombre', min: 0, max: 0.8, pas: 0.05, defaut: 0.15 },
    { categorie: 'Sélection', id: 'tailleChoisie', libelle: 'Sélection · taille du joueur choisi (1 = la plus grande possible)', type: 'nombre', min: 0.5, max: 1, pas: 0.02, defaut: 0.74 },
    { categorie: 'Sélection', id: 'rappelClic', libelle: 'Sélection · la carte retournée invite à recliquer (onde + « Retourner la carte »)', type: 'interrupteur', defaut: true },
    { categorie: 'Sélection', id: 'tailleBanc', libelle: 'Sélection · taille des joueurs sur le banc', type: 'nombre', min: 0.15, max: 0.4, pas: 0.01, defaut: 0.24 },
    { categorie: 'Cartes · photo', id: 'desaturation', libelle: 'Cartes · photo : désaturation (0 = couleurs d\'origine)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.25 },
    { categorie: 'Cartes · photo', id: 'teinte', libelle: 'Cartes · photo : voile doré', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.4 },
    { categorie: 'Cartes · photo', id: 'trame', libelle: 'Cartes · photo : lignes d\'écran', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.2 },
    { categorie: 'Cartes · photo', id: 'reflet', libelle: 'Cartes · photo : reflet qui passe sur le joueur choisi', type: 'interrupteur', defaut: true },
    { categorie: 'Cartes · retournement', id: 'agrandissement', libelle: 'Cartes · agrandissement au survol', type: 'nombre', min: 1, max: 1.4, pas: 0.01, defaut: 1.1 },
    { categorie: 'Cartes · retournement', id: 'dureeRetournement', libelle: 'Cartes · durée du retournement (s)', type: 'nombre', min: 0.3, max: 1.6, pas: 0.05, defaut: 0.8 },
    { categorie: 'Cartes · retournement', id: 'rebond', libelle: 'Cartes · rebond en fin de rotation (0 = aucun)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.5 },
    { categorie: 'Cartes · retournement', id: 'flottementCarte', libelle: 'Cartes · flottement au survol (px, 0 = immobile)', type: 'nombre', min: 0, max: 20, pas: 1, defaut: 6 },
    { categorie: 'Cartes · aperçu', id: 'apercuRotation', libelle: 'Cartes · survol : rotation vers la droite (degrés)', type: 'nombre', min: 0, max: 10, pas: 0.5, defaut: 3 },
    { categorie: 'Cartes · aperçu', id: 'apercuSoulevement', libelle: 'Cartes · survol : soulèvement (px)', type: 'nombre', min: 0, max: 30, pas: 1, defaut: 12 },
    { categorie: 'Cartes · aperçu', id: 'apercuIndice', libelle: 'Cartes · survol : pastille « Voir le joueur »', type: 'interrupteur', defaut: true },
    { categorie: 'Hologramme', id: 'hologramme', libelle: 'Hologramme · projeter la carte à gauche au retournement', type: 'interrupteur', defaut: true },
    { categorie: 'Hologramme', id: 'holoAgent', libelle: 'Hologramme · projeter aussi l\'agent favori à droite', type: 'interrupteur', defaut: true },
    { categorie: 'Hologramme', id: 'holoCouleur', libelle: 'Hologramme · couleur', type: 'couleur', defaut: '#8FB0CC' },
    { categorie: 'Hologramme', id: 'holoTaille', libelle: 'Hologramme · taille (par rapport à la carte)', type: 'nombre', min: 1, max: 2, pas: 0.05, defaut: 1.4 },
    { categorie: 'Hologramme', id: 'holoObscurite', libelle: 'Hologramme · assombrissement de la scène pendant la projection (0 = aucun)', type: 'nombre', min: 0, max: 0.9, pas: 0.05, defaut: 0.85 },
    { categorie: 'Hologramme', id: 'holoTremblement', libelle: 'Hologramme · tremblement (0 = stable)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.5 }
  ],
  css: `
.bc-scene { position: absolute; inset: 0; --h: 600px; --long: 720px; }
.bc-defilement { position: absolute; inset: 0; overflow-x: hidden; overflow-y: auto; scrollbar-width: thin; }
.bc-hero { position: relative; height: calc(var(--h) + var(--long)); }
.bc-etage { position: sticky; top: 0; height: var(--h); overflow: hidden; display: grid; place-items: center;
  background: radial-gradient(ellipse 110% 90% at 50% 45%, var(--couleur-lueur) 0%, var(--couleur-fond) 60%, var(--couleur-surface) 100%); }
.bc-etage::before { content: ""; position: absolute; inset: 0; pointer-events: none; background-color: var(--couleur-motif); opacity: var(--opacite-motif);
  --etoile: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.4'%3E%3Crect x='16' y='16' width='24' height='24'/%3E%3Crect x='16' y='16' width='24' height='24' transform='rotate(45 28 28)'/%3E%3C/g%3E%3Ccircle cx='0' cy='0' r='2'/%3E%3C/svg%3E");
  -webkit-mask: var(--etoile) 0 0 / 56px 56px repeat; mask: var(--etoile) 0 0 / 56px 56px repeat; }
.bc-contenu { position: relative; z-index: 1; display: grid; justify-items: center; gap: 14px; padding: 24px; text-align: center; will-change: transform, opacity; }
.bc-logo { width: clamp(90px, 16vw, 170px); height: auto; overflow: visible; }
.bc-logo .etoile { filter: drop-shadow(0 0 6px var(--metal-reflet)); }
.bc-mot { margin: 6px 0 0; font: 400 clamp(20px, 4.2vw, 46px)/1 var(--police-logo, "Arial Black", sans-serif); letter-spacing: .42em; padding-left: .42em; color: var(--couleur-texte); }
.bc-arabe { margin: 0; font: 600 clamp(14px, 2vw, 20px)/1 "Segoe UI", "Noto Naskh Arabic", "Arial", sans-serif; color: var(--metal-moyen); }
.bc-accroche { margin: 8px 0 0; font: 700 clamp(13px, 1.6vw, 17px)/1 var(--police-titre, "Arial Narrow", sans-serif); letter-spacing: .28em; text-transform: uppercase; color: var(--metal-moyen); }
.bc-toile { position: absolute; inset: 0; z-index: 3; width: 100%; height: 100%; pointer-events: none; }
.bc-tissu { position: absolute; left: 0; top: 0; z-index: 2; width: 100%; height: calc(var(--h) + var(--montee) + var(--marge));
  background: var(--bc-tissu); clip-path: polygon(0 0, 50% var(--montee), 100% 0, 100% 100%, 0 100%);
  overflow: hidden; pointer-events: none; will-change: transform; transform: translate3d(0, 300vh, 0); }
.bc-imprime { position: absolute; inset: -24px -40px; will-change: transform;
  animation: bc-flotte var(--flotte-duree, 5s) ease-in-out infinite alternate; }
@keyframes bc-flotte {
  from { transform: translate3d(0, calc(var(--flottement, .5) * -7px), 0) skewY(calc(var(--flottement, .5) * -.7deg)); }
  to { transform: translate3d(0, calc(var(--flottement, .5) * 7px), 0) skewY(calc(var(--flottement, .5) * .7deg)); } }
.bc-imprime::before { content: ""; position: absolute; inset: 0; background-color: var(--bc-motif-couleur); opacity: calc(var(--tissu, .5) * .35);
  -webkit-mask: var(--motif-maillot) 0 0 / var(--motif-taille) var(--motif-taille) repeat;
  mask: var(--motif-maillot) 0 0 / var(--motif-taille) var(--motif-taille) repeat; }
.bc-plis { position: absolute; inset: 0; overflow: hidden; opacity: 0; pointer-events: none; }
.bc-pli { position: absolute; top: 0; left: 0; height: 100%; will-change: transform; }
.bc-pli-a { width: calc(100% + var(--pas-a)); animation: bc-pli-a var(--plis-duree, 14s) linear infinite;
  background: repeating-linear-gradient(76deg, var(--plis-sombre) 0, transparent calc(var(--plis-taille) * .24), var(--plis-clair) calc(var(--plis-taille) * .5), transparent calc(var(--plis-taille) * .76), var(--plis-sombre) var(--plis-taille)); }
.bc-pli-b { width: calc(100% + var(--pas-b)); opacity: .75; animation: bc-pli-b calc(var(--plis-duree, 14s) * 1.45) linear infinite;
  background: repeating-linear-gradient(114deg, var(--plis-sombre) 0, transparent calc(var(--plis-taille-b) * .24), var(--plis-clair) calc(var(--plis-taille-b) * .5), transparent calc(var(--plis-taille-b) * .76), var(--plis-sombre) var(--plis-taille-b)); }
@keyframes bc-pli-a { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(calc(-1 * var(--pas-a)), 0, 0); } }
@keyframes bc-pli-b { from { transform: translate3d(calc(-1 * var(--pas-b)), 0, 0); } to { transform: translate3d(0, 0, 0); } }
.bc-scene[data-vent-fige] .bc-pli, .bc-scene[data-vent-fige] .bc-imprime { animation-play-state: paused; }
.bc-dos { position: relative; overflow: hidden; min-height: var(--h); padding: calc(var(--h) * .1) 24px calc(var(--h) * .22);
  background: var(--bc-tissu); color: var(--bc-encre); text-align: center; display: grid; justify-items: center; align-content: start; gap: 10px; }
.bc-dos::before { content: ""; position: absolute; inset: 0; pointer-events: none; background-color: var(--bc-motif-couleur); opacity: calc(var(--tissu, .5) * .35);
  -webkit-mask: var(--motif-maillot) 0 0 / var(--motif-taille) var(--motif-taille) repeat; mask: var(--motif-maillot) 0 0 / var(--motif-taille) var(--motif-taille) repeat; }
.bc-dos > * { position: relative; }
.bc-nuque { margin: 0; font: 600 clamp(26px, 4.2vw, 54px)/1.15 "Segoe UI", "Noto Naskh Arabic", "Arial", sans-serif; color: var(--metal-moyen); }
.bc-pseudo { margin: calc(var(--h) * .04) 0 0; font: 800 clamp(48px, 11vw, 120px)/.9 var(--police-titre, "Arial Narrow", sans-serif); letter-spacing: .04em; text-transform: uppercase; color: var(--bc-encre); }
.bc-soulignement { width: clamp(120px, 22vw, 240px); height: 2px; background: var(--metal-moyen); }
.bc-filigrane { width: clamp(110px, 20vw, 220px); margin-top: 10px; opacity: .14; }
.bc-dos > p { margin: 6px auto 0; max-width: 40ch; opacity: .7; }
.bc-dos .bc-ourlet { position: absolute; left: 0; right: 0; bottom: 0; width: 100%; height: calc(var(--h) * .2); }
.bc-dos--tissu { position: absolute; left: 40px; right: 40px; top: calc(var(--dos-haut) + 24px); height: var(--dos-hauteur); min-height: 0;
  background: none; padding: 0 24px calc(var(--dos-hauteur) * .2); align-content: center; }
.bc-dos--tissu .bc-ourlet { height: calc(var(--dos-hauteur) * .16); }
.bc-dos--tissu { align-content: start; padding-top: calc(var(--dos-hauteur) * .012); }
.bc-dos--tissu::before { content: none; }
.bc-dos--statique { display: none; }
.bc-scene[data-statique] .bc-dos--statique { display: grid; }
.bc-dos--statique { padding-bottom: calc(var(--h) * .26); }
.bcj-zone { position: absolute; left: 0; right: 0; z-index: 1; top: calc(var(--dos-haut) + var(--zone-haut)); height: var(--zone-hauteur); pointer-events: none; }
.bcj-cartes { position: absolute; inset: 0; perspective: 1400px; }
.bcj-carte { position: absolute; left: 50%; top: 50%; width: var(--carte-l); height: calc(var(--carte-l) * 1.25 + var(--panneau));
  margin-left: calc(var(--carte-l) / -2); margin-top: calc((var(--carte-l) * 1.25 + var(--panneau)) / -2);
  will-change: transform, opacity; cursor: pointer; pointer-events: auto; color: var(--couleur-texte); text-align: left; -webkit-tap-highlight-color: transparent;
  transition: transform .6s cubic-bezier(.2, .9, .25, 1), opacity .45s ease-out; }
@keyframes bcj-respire { 0%, 100% { opacity: .1; } 50% { opacity: .6; } }
.bc-scene[data-respiration] .bcj-carte:not(.apercu):not(.retournee) .bcj-contour { animation: bcj-respire 2.6s ease-in-out var(--delai-respiration, 0s) infinite; }
.bcj-retour {
  position: absolute; z-index: 60; display: none; align-items: center; gap: 8px; min-height: 40px; padding: 8px 16px;
  border: 1px solid var(--metal-moyen); border-radius: 999px; background: color-mix(in srgb, var(--couleur-surface) 92%, transparent); transform: translate(-50%, -50%);
  color: var(--couleur-texte); font: 700 12px/1 system-ui, sans-serif; letter-spacing: .08em; cursor: pointer; pointer-events: auto; white-space: nowrap;
}
.bcj-retour:hover { background: var(--couleur-surface); border-color: var(--metal-clair); }
.bc-scene[data-mode="selection"] .bcj-retour { display: inline-flex; }
.bcj-survol { position: absolute; inset: 0; perspective: 1100px; transition: transform var(--cj-duree, .8s) var(--cj-courbe, ease); }
.bcj-carte.retournee .bcj-survol { transform: scale(var(--cj-agrandi, 1.1)); }
.bcj-flotte { position: absolute; inset: 0; }
.bcj-flotte.flotte { animation: bcj-flotte 3.2s ease-in-out calc(var(--cj-duree, .8s) * .5) infinite; }
@keyframes bcj-flotte {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
  30% { transform: translate3d(0, calc(var(--cj-flotte, 6px) * -1), 0) rotate(.6deg); }
  70% { transform: translate3d(0, calc(var(--cj-flotte, 6px) * .5), 0) rotate(-.5deg); } }
.bcj-pivot { position: absolute; inset: 0; transform-style: preserve-3d; transition: transform var(--cj-duree, .8s) var(--cj-courbe, ease); }
.bcj-carte.retournee .bcj-pivot { transform: rotateY(180deg); }
.bcj-face { position: absolute; inset: 0; overflow: hidden; border-radius: 12px; border: 1.5px solid transparent; backface-visibility: hidden; -webkit-backface-visibility: hidden;
  container-type: inline-size; box-shadow: 0 18px 40px -18px var(--couleur-nuit);
  background: linear-gradient(var(--couleur-surface), var(--couleur-surface)) padding-box,
              linear-gradient(150deg, var(--metal-reflet), var(--metal-sombre) 35%, var(--metal-clair) 65%, var(--metal-sombre)) border-box; }
.bcj-voile { position: absolute; inset: 0; border-radius: 12px; background: var(--couleur-nuit); opacity: 0; pointer-events: none; transition: opacity .25s ease-out; }
.bcj-carte:not(.retournee) .bcj-survol { transition: transform .45s cubic-bezier(.3, 1.5, .5, 1); }
.bcj-carte.apercu .bcj-survol { transform: translate3d(0, calc(var(--apercu-leve, 12px) * -1), 0) rotate(var(--apercu-rotation, 3deg)) scale(1.04); }
.bcj-carte.apercu .bcj-flotte { animation: bcj-balance 2.6s ease-in-out .45s infinite; }
@keyframes bcj-balance { 0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); } 50% { transform: translate3d(0, -4px, 0) rotate(.8deg); } }
.bcj-contour { position: absolute; inset: -3px; border-radius: 14px; border: 1.5px solid var(--metal-reflet); pointer-events: none; opacity: 0; transition: opacity .3s;
  box-shadow: 0 0 16px color-mix(in srgb, var(--metal-reflet) 45%, transparent), inset 0 0 12px color-mix(in srgb, var(--metal-reflet) 25%, transparent); }
.bcj-carte.apercu .bcj-contour { opacity: 1; }
.bcj-carte.apercu .bcj-brillance { opacity: 1; animation: bcj-brillance 1.4s ease-out both; }
.bcj-indice { position: absolute; left: 50%; bottom: -34px; padding: 6px 14px; border-radius: 999px; white-space: nowrap; pointer-events: none;
  font: 700 10px/1 system-ui, sans-serif; letter-spacing: .2em; text-transform: uppercase; color: var(--couleur-surface);
  background: linear-gradient(135deg, var(--metal-sombre), var(--metal-clair) 45%, var(--metal-reflet) 55%, var(--metal-clair));
  opacity: 0; transform: translate(-50%, 6px); transition: opacity .3s, transform .3s; }
.bcj-carte.apercu .bcj-indice { opacity: 1; transform: translate(-50%, 0); }
.bc-scene[data-sans-indice] .bcj-indice { display: none; }
.bcj-photo { position: relative; height: calc(var(--carte-l) * 1.25); overflow: hidden;
  background: radial-gradient(circle at 50% 38%, var(--couleur-lueur) 0 18%, transparent 19%), radial-gradient(ellipse 60% 40% at 50% 100%, var(--couleur-lueur) 0 70%, transparent 71%), var(--couleur-surface); }
.bcj-photo img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: grayscale(var(--cj-desat, .25)) contrast(1.06); }
.bcj-sans-photo img { display: none; }
.bcj-teinte { position: absolute; inset: 0; mix-blend-mode: overlay; opacity: var(--cj-teinte, .4);
  background: linear-gradient(200deg, var(--metal-reflet) 0%, var(--metal-moyen) 45%, var(--metal-sombre) 100%); }
.bcj-trame { position: absolute; inset: 0; opacity: var(--cj-trame, .2); background: repeating-linear-gradient(0deg, var(--couleur-nuit) 0 1px, transparent 1px 3px); }
.bcj-degrade { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 42%, color-mix(in srgb, var(--couleur-surface) 70%, transparent) 66%, color-mix(in srgb, var(--couleur-surface) 94%, transparent) 84%, var(--couleur-surface) 100%); }
.bcj-brillance { position: absolute; inset: -10% -60%; opacity: 0; pointer-events: none;
  background: linear-gradient(105deg, transparent 40%, color-mix(in srgb, var(--metal-reflet) 45%, transparent) 50%, transparent 60%); }
.bcj-carte.active .bcj-brillance { opacity: 1; animation: bcj-brillance 4.5s ease-in-out infinite; }
.bc-scene[data-sans-reflet] .bcj-brillance { display: none; }
@keyframes bcj-brillance { 0% { transform: translate3d(-60%, 0, 0); } 45%, 100% { transform: translate3d(60%, 0, 0); } }
.bcj-numero { position: absolute; right: 7cqw; top: 4cqw; font: 800 19cqw/1 var(--police-titre, "Arial Narrow", sans-serif); color: transparent; -webkit-text-stroke: 1px var(--metal-clair); opacity: .85; }
.bcj-identite { position: absolute; left: 7cqw; right: 7cqw; bottom: 4cqw; }
.bcj-identite small { display: block; font: 700 3.6cqw/1 system-ui, sans-serif; letter-spacing: .3em; text-transform: uppercase; color: var(--metal-clair); }
.bcj-pseudo { margin: 1.5cqw 0 0; font: 800 15cqw/.9 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .02em; color: var(--couleur-texte); }
.bcj-panneau { box-sizing: border-box; height: var(--panneau); padding: 10px 7cqw 12px; display: grid; align-content: space-between; }
.bcj-ligne { display: flex; justify-content: space-between; gap: 8px; font: 700 12px/1.2 system-ui, sans-serif; }
.bcj-ligne span { display: block; font-size: 9px; font-weight: 600; letter-spacing: .2em; text-transform: uppercase; opacity: .55; margin-bottom: 3px; }
.bcj-ligne > div:last-child { text-align: right; }
.bcj-losange { display: inline-block; width: 7px; height: 7px; margin-right: 6px; transform: rotate(45deg) translateY(-1px); background: linear-gradient(135deg, var(--metal-reflet), var(--metal-sombre)); }
.bcj-stats { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid color-mix(in srgb, var(--metal-moyen) 35%, transparent); padding-top: 8px; text-align: center; }
.bcj-stats b { display: block; font: 700 20px/1 var(--police-titre, "Arial Narrow", sans-serif); color: var(--metal-clair); }
.bcj-stats span { font: 600 9px/1 system-ui, sans-serif; letter-spacing: .2em; text-transform: uppercase; opacity: .55; }
.bc-scene[data-compact] .bcj-panneau { padding: 6px 5cqw 7px; }
.bc-scene[data-compact] .bcj-ligne { justify-content: center; font-size: 10px; }
.bc-scene[data-compact] .bcj-ligne > div:first-child, .bc-scene[data-compact] .bcj-ligne span { display: none; }
.bc-scene[data-compact] .bcj-stats { padding-top: 4px; }
.bc-scene[data-compact] .bcj-stats b { font-size: 14px; }
.bc-scene[data-compact] .bcj-stats span { font-size: 7px; letter-spacing: .12em; }
.bcj-dos { transform: rotateY(180deg); display: grid; justify-items: center; align-content: start; text-align: center; }
.bcj-dos::before { content: ""; position: absolute; inset: 0; pointer-events: none; background-color: var(--couleur-motif); opacity: .16;
  --etoile: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.2'%3E%3Crect x='12' y='12' width='16' height='16'/%3E%3Crect x='12' y='12' width='16' height='16' transform='rotate(45 20 20)'/%3E%3C/g%3E%3Cpath d='M0 -2.5L2.5 0L0 2.5L-2.5 0Z M40 -2.5L42.5 0L40 2.5L37.5 0Z M0 37.5L2.5 40L0 42.5L-2.5 40Z M40 37.5L42.5 40L40 42.5L37.5 40Z'/%3E%3C/svg%3E");
  -webkit-mask: var(--etoile) 0 0 / 34px 34px repeat; mask: var(--etoile) 0 0 / 34px 34px repeat; }
.bcj-dos > * { position: relative; }
.bcj-dos-col { position: absolute; left: 0; top: 0; width: 100%; height: 16%; }
.bcj-dos-arabe { margin: 17cqw 0 0; font: 600 8cqw/1 "Segoe UI", "Noto Naskh Arabic", "Arial", sans-serif; color: var(--metal-moyen); }
.bcj-dos-pseudo { margin: 9cqw 0 0; font: 800 15cqw/.9 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .06em; color: var(--couleur-texte); }
.bcj-dos-numero { margin: 3cqw 0 0; font: 800 62cqw/.85 var(--police-titre, "Arial Narrow", sans-serif); letter-spacing: -.02em;
  background: linear-gradient(180deg, var(--metal-reflet) 0%, var(--metal-clair) 40%, var(--metal-moyen) 70%, var(--metal-sombre) 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; }
.bcj-dos-ourlet { position: absolute; left: 0; bottom: 0; width: 100%; height: 9%; }
.bcj-dos .bcj-rappel { position: absolute; left: 50%; bottom: 13%; display: inline-flex; align-items: center; gap: .5em; padding: .55em 1.1em; border-radius: 999px;
  white-space: nowrap; font: 800 4.4cqw/1 system-ui, sans-serif; letter-spacing: .14em; text-transform: uppercase; color: var(--couleur-nuit);
  background: linear-gradient(135deg, var(--metal-sombre), var(--metal-clair) 40%, var(--metal-reflet) 52%, var(--metal-clair) 64%, var(--metal-moyen));
  opacity: 0; transform: translate(-50%, 30%); transition: opacity .35s, transform .35s; }
.bcj-rappel i { font-style: normal; font-size: 1.35em; line-height: 1; }
.bc-scene[data-rappel] .bcj-carte.active.retournee .bcj-rappel { opacity: 1; transform: translate(-50%, 0); transition-delay: .55s;
  animation: bcj-rappel 2.2s ease-in-out 1.2s infinite; }
.bc-scene[data-rappel] .bcj-carte.active.retournee .bcj-rappel i { display: inline-block; animation: bcj-tourne 2.2s cubic-bezier(.5,0,.3,1) 1.2s infinite; }
@keyframes bcj-rappel { 0%, 100% { transform: translate(-50%, 0) scale(1); } 50% { transform: translate(-50%, 0) scale(1.07); } }
@keyframes bcj-tourne { 0%, 55% { transform: none; } 100% { transform: rotate(-360deg); } }
.bc-scene[data-rappel] .bcj-carte.active.retournee .bcj-contour { animation: bcj-appel 2.2s ease-out 1.2s infinite; }
@keyframes bcj-appel { 0% { opacity: .95; transform: scale(1); } 70%, 100% { opacity: 0; transform: scale(1.09); } }
.bcj-zone--statique .bcj-rappel { display: none; }
.bcj-dos p, .bcj-carte p { max-width: none; opacity: 1; }
.bcj-zone--statique { position: relative; top: auto; height: auto; width: 100%; margin-top: 24px; pointer-events: auto; }
.bcj-zone--statique .bcj-cartes { position: relative; display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; perspective: none; top: auto; bottom: auto; }
.bcj-zone--statique .bcj-carte { position: relative; left: auto; top: auto; margin: 0; }
.bcj-zone--statique .bcj-survol, .bcj-zone--statique .bcj-pivot { transition: none; }
.bcj-zone--statique .bcj-carte.retournee .bcj-survol { transform: none; }
.bcj-holo { position: absolute; top: 0; bottom: 0; left: var(--holo-x); width: var(--holo-l); pointer-events: none; opacity: 0; transition: opacity .35s ease-out; }
.bcj-holo.visible { opacity: 1; }
.bcj-holo-faisceau { position: absolute; left: 0; right: 0; top: calc(var(--holo-haut) + var(--holo-h) * .67); bottom: 6px; clip-path: polygon(50% 100%, 0 0, 100% 0);
  background: linear-gradient(0deg,
    color-mix(in srgb, var(--holo-couleur) 75%, transparent) 0%,
    color-mix(in srgb, var(--holo-couleur) 52%, transparent) 12%,
    color-mix(in srgb, var(--holo-couleur) 34%, transparent) 28%,
    color-mix(in srgb, var(--holo-couleur) 20%, transparent) 46%,
    color-mix(in srgb, var(--holo-couleur) 10%, transparent) 66%,
    color-mix(in srgb, var(--holo-couleur) 4%, transparent) 84%,
    transparent 100%);
  mix-blend-mode: screen; transform-origin: 50% 100%; transform: scaleY(0); transition: transform .4s ease-out .15s; }
.bcj-holo.visible .bcj-holo-faisceau { transform: none; transition-delay: 0s; animation: bcj-holo-scintille 3.1s steps(1) infinite; }
.bcj-holo-source { position: absolute; left: 30%; right: 30%; bottom: 0; height: 12px; border-radius: 50%;
  background: radial-gradient(ellipse at center, var(--holo-couleur) 0%, color-mix(in srgb, var(--holo-couleur) 45%, transparent) 45%, transparent 72%); }
.bcj-holo-projection { position: absolute; left: 0; width: 100%; top: var(--holo-haut); height: var(--holo-h); mix-blend-mode: screen; opacity: 0; transition: opacity .18s; }
.bcj-holo.visible .bcj-holo-projection { opacity: .9; animation: bcj-holo-allumage .6s linear .42s both; }
@keyframes bcj-holo-allumage {
  0% { opacity: 0; } 12% { opacity: .85; } 20% { opacity: .05; } 34% { opacity: .9; } 42% { opacity: .2; }
  56% { opacity: .9; } 66% { opacity: .55; } 76%, 100% { opacity: .9; } }
.bcj-holo-tremble { position: absolute; inset: 0; isolation: isolate; }
.bcj-holo.visible .bcj-holo-tremble { animation: bcj-holo-tremble 2.3s steps(1) infinite; }
.bcj-holo-image { position: absolute; inset: 0; overflow: hidden; border-radius: 12px; filter: grayscale(1) contrast(1.25) brightness(1.15); }
.bcj-holo-image > .bcj-face { inset: auto; left: 0; top: 0; width: var(--carte-l); height: calc(var(--carte-l) * 1.25 + var(--panneau)); transform-origin: 0 0; transform: scale(var(--holo-echelle)); }
.bcj-holo-teinte { position: absolute; inset: 0; border-radius: 12px; background: var(--holo-couleur); mix-blend-mode: color; }
.bcj-holo-lignes { position: absolute; inset: -8px 0 0; background: repeating-linear-gradient(0deg, var(--couleur-nuit) 0 2px, transparent 2px 5px); opacity: .55; }
.bcj-holo.visible .bcj-holo-lignes { animation: bcj-holo-lignes .9s linear infinite; }
@keyframes bcj-holo-lignes { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(0, 5px, 0); } }
@keyframes bcj-holo-tremble {
  0% { transform: translate3d(0, 0, 0); opacity: 1; }
  7% { transform: translate3d(calc(var(--holo-force) * 3px), 0, 0); opacity: calc(1 - var(--holo-force) * .25); }
  9% { transform: translate3d(0, 0, 0); opacity: 1; }
  38% { transform: translate3d(calc(var(--holo-force) * -2px), 0, 0) skewX(calc(var(--holo-force) * 2deg)); opacity: calc(1 - var(--holo-force) * .4); }
  40% { transform: translate3d(0, 0, 0); opacity: 1; }
  66% { transform: translate3d(calc(var(--holo-force) * 1.5px), calc(var(--holo-force) * -1px), 0); opacity: calc(1 - var(--holo-force) * .15); }
  69% { transform: translate3d(0, 0, 0); opacity: 1; }
  88% { transform: translate3d(calc(var(--holo-force) * -4px), 0, 0); opacity: calc(1 - var(--holo-force) * .5); }
  89% { transform: translate3d(0, 0, 0); opacity: 1; } }
@keyframes bcj-holo-scintille { 0% { opacity: 1; } 37% { opacity: .8; } 39% { opacity: 1; } 87% { opacity: .65; } 89% { opacity: 1; } }
.bcj-zone--statique .bcj-holo { display: none; }
.bcj-holo--agent .bcj-holo-image { border-radius: 0; overflow: visible; }
.bcj-holo-agent-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; }
.bcj-holo--agent .bcj-holo-teinte { border-radius: 0; -webkit-mask: var(--agent-masque) center / contain no-repeat; mask: var(--agent-masque) center / contain no-repeat; }
.bcj-holo--agent .bcj-holo-lignes { -webkit-mask: var(--agent-masque) center / contain no-repeat; mask: var(--agent-masque) center / contain no-repeat; }
.bcj-holo--agent .bcj-holo-faisceau { left: 30%; right: 30%; top: calc(var(--holo-haut) + var(--holo-h) * .66); }
.bcj-holo-nom { display: none; }
.bc-scene[data-univers="tajine"] .bcj-holo--agent .bcj-holo-image { filter: saturate(.8) contrast(1.1) brightness(1.1); }
.bc-scene[data-univers="tajine"] .bcj-holo--agent .bcj-holo-teinte { opacity: .4; }
.bc-scene[data-univers="tajine"] .bcj-holo--agent .bcj-holo-faisceau { left: 16%; right: 16%; top: calc(var(--holo-haut) + var(--holo-h) * .84); }
.bc-scene[data-univers="tajine"] .bcj-holo--agent.visible .bcj-holo-projection { animation: bcj-holo-allumage .6s linear .42s both, bcj-objet-flotte 3.2s ease-in-out 1s infinite; }
@keyframes bcj-objet-flotte {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
  50% { transform: translate3d(0, calc(var(--holo-h) * -.035), 0) rotate(-1.5deg); } }
.bc-scene[data-univers="tajine"] .bcj-holo-nom { display: block; position: absolute; left: 0; width: 100%; top: calc(var(--holo-haut) + var(--holo-h) * .1);
  text-align: center; font: 700 clamp(13px, calc(var(--holo-h) * .06), 22px)/1 var(--police-titre, sans-serif); letter-spacing: .14em; text-transform: uppercase;
  color: color-mix(in srgb, var(--holo-couleur) 55%, #fff); opacity: 0; transition: opacity .2s; }
.bc-scene[data-univers="tajine"] .bcj-holo-nom::before { content: '◆ '; font-size: .7em; vertical-align: .15em; }
.bc-scene[data-univers="tajine"] .bcj-holo--agent.visible .bcj-holo-nom { opacity: .95; transition-delay: 1s; }
.bcj-holo--agent .bcj-holo-source { left: 38%; right: 38%; }
.bcj-holo--agent.visible .bcj-holo-tremble { animation-delay: -1.1s; }
.bcj-obscurite { position: absolute; inset: -300vh -300vw; z-index: 45; background: var(--couleur-nuit); opacity: 0; pointer-events: none; transition: opacity .5s ease-out; }
.bc-obscurite-fond { position: absolute; inset: 0; z-index: 1; background: var(--couleur-nuit); opacity: 0; pointer-events: none; transition: opacity .5s ease-out; }
.bc-toile { transition: opacity .5s ease-out; }
.bc-scene[data-holo] .bcj-obscurite, .bc-scene[data-holo] .bc-obscurite-fond { opacity: var(--holo-obscurite, .85); }
.bc-scene[data-holo] .bc-toile { opacity: calc(1 - var(--holo-obscurite, .85)); }
.bc-commandes { position: absolute; left: 50%; bottom: 12px; z-index: 5; transform: translateX(-50%); display: flex; align-items: center; gap: 10px;
  padding: 8px 12px; border-radius: 999px; background: color-mix(in srgb, var(--couleur-surface) 88%, transparent);
  border: 1px solid color-mix(in srgb, var(--couleur-texte) 18%, transparent); color: var(--couleur-texte); font: 600 12px/1 system-ui, sans-serif; }
.bc-commandes button { padding: 6px 12px; border: 0; border-radius: 999px; cursor: pointer; font: inherit; color: var(--couleur-surface);
  background: linear-gradient(135deg, var(--metal-sombre), var(--metal-moyen) 45%, var(--metal-reflet) 55%, var(--metal-moyen)); }
.bc-commandes input[type="range"] { width: clamp(90px, 22vw, 220px); accent-color: var(--metal-moyen); }
.bc-commandes output { min-width: 5ch; text-align: right; font-family: ui-monospace, Consolas, monospace; }
.bc-scene[data-statique] .bc-toile, .bc-scene[data-statique] .bc-commandes, .bc-scene[data-statique] .bc-tissu { display: none; }
.bc-invite { position: absolute; left: 50%; bottom: 78px; z-index: 4; display: grid; justify-items: center; gap: 12px; transform: translateX(-50%);
  pointer-events: none; transition: opacity .4s, transform .4s; font: 700 clamp(13px, 1.4vw, 18px)/1 var(--police-titre, sans-serif); letter-spacing: .32em; padding-left: .32em; white-space: nowrap;
  text-transform: uppercase; color: var(--metal-clair); }
.bc-invite.cachee { opacity: 0; transform: translate(-50%, 8px); }
.bc-souris { position: relative; width: 32px; height: 52px; box-sizing: border-box; border: 3px solid var(--metal-clair); border-radius: 17px; }
.bc-souris i { position: absolute; left: 50%; top: 9px; width: 5px; height: 11px; margin-left: -2.5px; border-radius: 3px;
  background: linear-gradient(180deg, var(--metal-reflet), var(--metal-clair)); animation: bc-molette 1.8s cubic-bezier(.5,0,.5,1) infinite; }
@keyframes bc-molette { 0% { transform: translateY(0); opacity: 0; } 20% { opacity: 1; } 70% { transform: translateY(15px); opacity: 0; } 100% { transform: translateY(15px); opacity: 0; } }
.bc-scene[data-statique] .bc-invite { display: none; }
.bc-section { position: relative; box-sizing: border-box; min-height: 100%; padding: clamp(90px, 13vh, 150px) clamp(20px, 7vw, 120px) 130px; display: grid; align-content: center; gap: 26px;
  background: var(--couleur-fond); border-top: 1px solid color-mix(in srgb, var(--metal-moyen) 28%, transparent); color: var(--couleur-texte); }
.bc-section:nth-of-type(odd) { background: radial-gradient(ellipse 80% 70% at 20% 30%, var(--couleur-lueur), transparent 70%), var(--couleur-fond); }
.bc-sur-titre { margin: 0; font: 700 12px/1 var(--police-titre, sans-serif); letter-spacing: .32em; text-transform: uppercase; color: var(--metal-moyen); }
.bc-titre-section { margin: 0; padding-top: .06em; font: 900 clamp(44px, 7.5vw, 104px)/1.05 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .01em;
  background: linear-gradient(180deg, var(--metal-reflet), var(--metal-clair) 45%, var(--metal-sombre)); -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; }
.bc-matchs { display: grid; gap: 10px; max-width: 760px; }
.bc-match { display: grid; grid-template-columns: 80px 1fr auto; gap: 16px; align-items: center; padding: 16px 20px; border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--metal-moyen) 32%, transparent); background: color-mix(in srgb, var(--couleur-nuit) 55%, transparent); font: 600 15px/1.2 system-ui, sans-serif; }
.bc-match b { font: 800 16px/1 var(--police-titre, sans-serif); letter-spacing: .08em; color: var(--metal-clair); }
.bc-match i { font-style: normal; font-size: 12px; letter-spacing: .14em; text-transform: uppercase; opacity: .6; }
.bc-chiffres { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 18px; max-width: 900px; }
.bc-chiffre { padding: 22px; border-left: 2px solid var(--metal-moyen); background: color-mix(in srgb, var(--couleur-nuit) 40%, transparent); }
.bc-chiffre b { display: block; font: 900 clamp(48px, 6vw, 84px)/1 var(--police-titre, sans-serif);
  background: linear-gradient(180deg, var(--metal-reflet), var(--metal-clair) 45%, var(--metal-sombre)); -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; }
.bc-chiffre span { display: block; margin-top: 8px; font: 700 12px/1.3 system-ui, sans-serif; letter-spacing: .18em; text-transform: uppercase; opacity: .7; }
.bc-partenaires { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; max-width: 900px; }
.bc-partenaire { height: 84px; display: grid; place-items: center; border-radius: 8px; border: 1px solid color-mix(in srgb, var(--metal-moyen) 30%, transparent);
  font: 400 15px/1 var(--police-logo, "Arial Black", sans-serif); letter-spacing: .3em; color: color-mix(in srgb, var(--couleur-texte) 75%, transparent); }
.bc-texte-section { margin: 0; max-width: 46ch; line-height: 1.6; opacity: .75; }
.bc-bouton-section { justify-self: start; padding: 14px 26px; border-radius: 999px; text-decoration: none; font: 800 13px/1 var(--police-titre, sans-serif); letter-spacing: .2em; text-transform: uppercase;
  color: var(--couleur-nuit); background: linear-gradient(135deg, var(--metal-sombre), var(--metal-clair) 40%, var(--metal-reflet) 52%, var(--metal-clair) 64%, var(--metal-moyen)); }
.bc-nav { z-index: 8; transition: transform .55s cubic-bezier(.2, .8, .2, 1), opacity .4s ease-out; }
.bc-nav.bc-nav--efface { opacity: 0; pointer-events: none; }
.bc-nav a { -webkit-tap-highlight-color: transparent; }
.bc-nav a:focus-visible, .bc-nav button:focus-visible { outline: 2px solid var(--metal-clair); outline-offset: 3px; }
.bc-nav--capsule { position: absolute; left: 0; right: 0; top: 0; display: flex; justify-content: center; padding-top: 18px; pointer-events: none; transition-property: transform, opacity, padding; }
.bc-nav--capsule[data-haut="non"] { padding-top: 12px; }
.bc-nav--capsule.bc-nav--efface { transform: translateY(-160%); }
.bc-nav-capsule { position: relative; display: flex; align-items: center; gap: 20px; width: min(1220px, calc(100% - 32px)); height: 76px; box-sizing: border-box; padding: 0 14px 0 26px;
  border-radius: 999px; pointer-events: auto; color: var(--couleur-texte); transition: height .4s, background-color .4s;
  background: color-mix(in srgb, var(--couleur-nuit) 72%, transparent); border: 1px solid color-mix(in srgb, var(--metal-moyen) 45%, transparent); }
.bc-nav--capsule[data-haut="non"] .bc-nav-capsule { height: 66px; background: color-mix(in srgb, var(--couleur-nuit) 92%, transparent); }
.bc-nav-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; color: var(--couleur-texte); min-height: 48px; }
.bc-nav-logo svg { width: 30px; height: auto; overflow: visible; }
.bc-nav-logo span { font: 400 15px/1 var(--police-logo, "Arial Black", sans-serif); letter-spacing: .38em; }
.bc-nav-liens { position: relative; display: flex; gap: 4px; margin: 0 auto; }
.bc-nav-lien { position: relative; display: inline-flex; align-items: center; min-height: 48px; padding: 0 4px; text-decoration: none; white-space: nowrap;
  font: 700 15px/1 var(--police-titre, sans-serif); letter-spacing: .14em; text-transform: uppercase; color: color-mix(in srgb, var(--couleur-texte) 72%, transparent); transition: color .25s; }
.bc-nav-lien:hover { color: var(--couleur-texte); }
.bc-nav-lien.actif { color: var(--metal-clair); }
.bc-nav--capsule .bc-nav-lien { z-index: 1; padding: 0 18px; border-radius: 999px; }
.bc-nav--capsule .bc-nav-lien.actif { color: var(--couleur-nuit); }
.bc-nav-pastille, .bc-nav-fantome { position: absolute; left: 0; top: 0; height: 48px; width: var(--w, 0px); border-radius: 999px; transform: translateX(var(--x, 0px)); pointer-events: none; }
.bc-nav-pastille { transition: transform .55s cubic-bezier(.3, 1.25, .45, 1), width .55s cubic-bezier(.3, 1.25, .45, 1);
  background: linear-gradient(135deg, var(--metal-sombre), var(--metal-clair) 40%, var(--metal-reflet) 52%, var(--metal-clair) 64%, var(--metal-moyen)); }
.bc-nav-fantome { opacity: 0; transition: transform .3s ease-out, width .3s ease-out, opacity .2s; border: 1px solid color-mix(in srgb, var(--metal-clair) 60%, transparent); }
.bc-nav-liens:hover .bc-nav-fantome { opacity: 1; }
.bc-nav-cta { display: inline-flex; align-items: center; min-height: 48px; padding: 0 26px; border-radius: 999px; text-decoration: none; white-space: nowrap;
  font: 800 14px/1 var(--police-titre, sans-serif); letter-spacing: .16em; text-transform: uppercase; color: var(--couleur-nuit);
  background: linear-gradient(135deg, var(--metal-sombre), var(--metal-clair) 40%, var(--metal-reflet) 52%, var(--metal-clair) 64%, var(--metal-moyen)); transition: transform .2s; }
.bc-nav-cta:hover { transform: translateY(-1px) scale(1.04); }
.bc-nav--capsule[data-etroit="oui"] .bc-nav-liens, .bc-nav--capsule[data-etroit="oui"] .bc-nav-cta { display: none; }
.bc-nav--capsule[data-etroit="oui"] .bc-nav-capsule { height: 64px; padding: 0 8px 0 18px; justify-content: space-between; }
.bc-nav--capsule[data-etroit="oui"] .bc-nav-tiroir { pointer-events: none; }
.bc-nav--capsule[data-etroit="oui"].ouvert .bc-nav-tiroir { pointer-events: auto; }
.bc-nav-burger { display: none; position: relative; width: 48px; height: 48px; padding: 0; border: 1px solid color-mix(in srgb, var(--metal-moyen) 50%, transparent); border-radius: 50%;
  background: color-mix(in srgb, var(--couleur-nuit) 70%, transparent); cursor: pointer; }
.bc-nav-burger i { position: absolute; left: 14px; right: 14px; height: 2px; border-radius: 2px; background: var(--metal-clair); transition: transform .35s, opacity .25s; }
.bc-nav-burger i:nth-child(1) { top: 16px; } .bc-nav-burger i:nth-child(2) { top: 23px; } .bc-nav-burger i:nth-child(3) { top: 30px; }
.bc-nav.ouvert .bc-nav-burger i:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.bc-nav.ouvert .bc-nav-burger i:nth-child(2) { opacity: 0; }
.bc-nav.ouvert .bc-nav-burger i:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
.bc-nav-tiroir { display: none; }
.bc-nav[data-etroit="oui"] .bc-nav-burger { display: block; }
.bc-nav[data-etroit="oui"] .bc-nav-tiroir { position: absolute; left: 0; right: 0; top: 96px; height: calc(var(--bc-hauteur-scene, 100vh) - 96px); box-sizing: border-box;
  display: flex; flex-direction: column; justify-content: center; gap: 4px; padding: 24px 32px; background: color-mix(in srgb, var(--couleur-nuit) 97%, transparent);
  opacity: 0; pointer-events: none; transition: opacity .3s; }
.bc-nav[data-etroit="oui"].ouvert .bc-nav-tiroir { opacity: 1; pointer-events: auto; }
.bc-nav-tiroir-lien { position: relative; display: flex; align-items: baseline; gap: 14px; padding: 10px 0; text-decoration: none;
  font: 800 34px/1 var(--police-titre, sans-serif); letter-spacing: .04em; text-transform: uppercase; color: color-mix(in srgb, var(--couleur-texte) 70%, transparent);
  opacity: 0; transform: translateX(-24px); transition: opacity .35s, transform .45s cubic-bezier(.2,.9,.3,1), color .25s; }
.bc-nav-tiroir-lien small { font: 700 13px/1 var(--police-titre, sans-serif); letter-spacing: .1em; color: var(--metal-moyen); }
.bc-nav.ouvert .bc-nav-tiroir-lien { opacity: 1; transform: none; transition-delay: calc(var(--k) * 55ms + 80ms); }
.bc-nav-tiroir-lien.actif { color: var(--metal-clair); }
html[data-qualite="allege"] .bc-plis, html[data-qualite="minimal"] .bc-plis { display: none; }
html[data-qualite="allege"] .bc-imprime, html[data-qualite="minimal"] .bc-imprime { animation: none; }
html[data-qualite="minimal"] .bc-imprime::before, html[data-qualite="minimal"] .bc-dos::before { display: none; }`,
  monter(conteneur, reglages, options) {
    if (!document.getElementById('css-' + this.id)) {
      const style = document.createElement('style');
      style.id = 'css-' + this.id;
      style.textContent = this.css;
      document.head.appendChild(style);
    }
    let r = { ...reglages };
    const pointsEtoile = this.pointsEtoile;
    const statique = options.reduireAnimations;
    const scene = document.createElement('div');
    scene.className = 'bc-scene';
    if (statique) scene.dataset.statique = '1';
    const nuque = '<p class="bc-nuque" lang="ar" dir="rtl">منصور</p>';
    const ourletDos = '<svg class="bc-ourlet" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true"><polygon points="0,20 50,6 100,20" style="fill:var(--bc-ourlet)"/><polyline points="0,20 50,6 100,20" fill="none" style="stroke:var(--metal-moyen)" stroke-width="1.2" vector-effect="non-scaling-stroke"/></svg>';
    const univers = getComputedStyle(conteneur).getPropertyValue('--univers').trim() === 'tajine' ? 'tajine' : 'normal';
    const joueurs = univers === 'tajine' ? this.joueursTajine : this.joueurs;
    const texte = this.textes[univers];
    joueurs.forEach(j => { if (j.agentImage) new Image().src = j.agentImage; });
    scene.dataset.univers = univers;
    const N = joueurs.length;
    const colCarte = '<svg class="bcj-dos-col" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true">' +
      '<polygon points="30,0 50,9 70,0 64,0 50,5.5 36,0" style="fill:var(--metal-moyen)"/>' +
      '<polyline points="0,14 16,0" fill="none" style="stroke:var(--metal-sombre)" stroke-width=".8" vector-effect="non-scaling-stroke"/>' +
      '<polyline points="100,14 84,0" fill="none" style="stroke:var(--metal-sombre)" stroke-width=".8" vector-effect="non-scaling-stroke"/></svg>';
    const ourletCarte = '<svg class="bcj-dos-ourlet" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true">' +
      '<polygon points="0,20 50,4 100,20" style="fill:var(--couleur-nuit)"/>' +
      '<polyline points="0,20 50,4 100,20" fill="none" style="stroke:var(--metal-moyen)" stroke-width="1.5" vector-effect="non-scaling-stroke"/></svg>';
    const carte = (j, i) =>
      '<div class="bcj-carte" data-i="' + i + '" role="button" tabindex="0" aria-label="' + j.pseudo + ', ' + j.role + ' : retourner la carte">' +
        '<div class="bcj-survol"><div class="bcj-flotte"><div class="bcj-pivot">' +
          '<div class="bcj-face bcj-avant">' +
            '<div class="bcj-photo"><img src="' + j.photo + '" alt="' + j.pseudo + '" decoding="async">' +
              '<span class="bcj-teinte"></span><span class="bcj-trame"></span><span class="bcj-degrade"></span><span class="bcj-brillance"></span>' +
              '<span class="bcj-numero">' + j.numero + '</span>' +
              '<div class="bcj-identite"><small>' + j.role + '</small><p class="bcj-pseudo">' + j.pseudo + '</p></div>' +
            '</div>' +
            '<div class="bcj-panneau">' +
              '<div class="bcj-ligne"><div><span>' + texte.role + '</span>' + j.role + '</div><div><span>' + texte.agent + '</span><i class="bcj-losange"></i>' + j.agent + '</div></div>' +
              '<div class="bcj-stats"><div><b>' + j.acs + '</b><span>' + texte.stats[0] + '</span></div><div><b>' + j.kd + '</b><span>' + texte.stats[1] + '</span></div><div><b>' + j.hs + '%</b><span>' + texte.stats[2] + '</span></div></div>' +
            '</div>' +
          '</div>' +
          '<div class="bcj-face bcj-dos" aria-hidden="true">' + colCarte +
            '<p class="bcj-dos-arabe" lang="ar" dir="rtl">منصور</p>' +
            '<p class="bcj-dos-pseudo">' + j.pseudo + '</p>' +
            '<p class="bcj-dos-numero">' + j.numero + '</p>' + ourletCarte +
            '<span class="bcj-rappel"><i aria-hidden="true">↻</i>' + texte.rappel + '</span>' +
          '</div>' +
        '</div>' +
        '<span class="bcj-voile"></span><span class="bcj-contour"></span></div>' +
        '<span class="bcj-indice">' + texte.indice + '</span></div>' +
      '</div>';
    const zoneCartes = classe =>
      '<div class="bcj-zone ' + classe + '">' +
        '<div class="bcj-cartes"><span class="bcj-obscurite"></span>' + joueurs.map(carte).join('') + '</div>' +
        '<button type="button" class="bcj-retour"><span aria-hidden="true">↩</span>' + texte.retour + '</button>' +
        '<div class="bcj-holo" aria-hidden="true"><div class="bcj-holo-faisceau"></div>' +
          '<div class="bcj-holo-projection"><div class="bcj-holo-tremble"><div class="bcj-holo-image"></div><span class="bcj-holo-teinte"></span><span class="bcj-holo-lignes"></span></div></div>' +
          '<div class="bcj-holo-source"></div></div>' +
        '<div class="bcj-holo bcj-holo--agent" aria-hidden="true"><div class="bcj-holo-faisceau"></div><span class="bcj-holo-nom"></span>' +
          '<div class="bcj-holo-projection"><div class="bcj-holo-tremble"><div class="bcj-holo-image"><img class="bcj-holo-agent-img" alt="" decoding="async"></div><span class="bcj-holo-teinte"></span><span class="bcj-holo-lignes"></span></div></div>' +
          '<div class="bcj-holo-source"></div></div>' +
      '</div>';
    scene.innerHTML =
      '<div class="bc-defilement" tabindex="0" role="region" aria-label="Maquette de page : faites défiler pour voir le site enfiler le maillot">' +
        '<section class="bc-hero"><div class="bc-etage">' +
          '<div class="bc-contenu">' +
            '<svg class="bc-logo" viewBox="-6 -8 112 114" aria-label="Logo M">' +
              '<defs><linearGradient id="bc-reflet" gradientUnits="userSpaceOnUse" x1="-40" y1="0" x2="0" y2="-20">' +
                '<stop offset="0" style="stop-color:var(--metal-moyen)"/><stop offset=".5" style="stop-color:var(--metal-reflet)"/><stop offset="1" style="stop-color:var(--metal-moyen)"/>' +
                '<animateTransform attributeName="gradientTransform" type="translate" values="-20 0; 170 0; 170 0" keyTimes="0; .45; 1" dur="3.6s" repeatCount="indefinite"/>' +
              '</linearGradient></defs>' +
              '<polygon points="0,0 22,0 50,48 78,0 100,0 100,100 80,100 80,40 50,88 20,40 20,100 0,100" style="fill:var(--metal-moyen)"/>' +
              '<polygon class="bc-brillance" points="0,0 22,0 50,48 78,0 100,0 100,100 80,100 80,40 50,88 20,40 20,100 0,100" fill="url(#bc-reflet)" opacity=".9"/>' +
              '<polygon class="etoile" style="fill:var(--metal-reflet)" points="' + this.pointsEtoile(50, 15, 14, 8).map(p => p.join(',')).join(' ') + '"/>' +
            '</svg>' +
            '<p class="bc-mot">MANSUR</p>' +
            '<p class="bc-arabe" lang="ar" dir="rtl">منصور</p>' +
            '<p class="bc-accroche">' + texte.accroche + '</p>' +
          '</div>' +
          '<span class="bc-obscurite-fond"></span>' +
          '<div class="bc-tissu">' +
            '<div class="bc-imprime" aria-hidden="true"><div class="bc-dos bc-dos--tissu">' + nuque + ourletDos + '</div></div>' +
            '<div class="bc-plis" aria-hidden="true"><div class="bc-pli bc-pli-a"></div><div class="bc-pli bc-pli-b"></div></div>' +
            (statique ? '' : zoneCartes('bcj-zone--tissu')) +
          '</div>' +
          '<canvas class="bc-toile" aria-hidden="true"></canvas>' +
        '</div></section>' +
        '<section class="bc-dos bc-dos--statique">' + nuque + (statique ? zoneCartes('bcj-zone--statique') : '') + ourletDos + '</section>' +
        "<section class=\"bc-section\" data-section=\"calendrier\"><p class=\"bc-sur-titre\">Saison 2026-27</p><h2 class=\"bc-titre-section\">Calendrier</h2><div class=\"bc-matchs\"><div class=\"bc-match\"><b>18 OCT</b><span>Mansur vs Vortex Five</span><i>Ligue · J3</i></div><div class=\"bc-match\"><b>25 OCT</b><span>Nova Esport vs Mansur</span><i>Ligue · J4</i></div><div class=\"bc-match\"><b>02 NOV</b><span>Mansur vs Helix</span><i>Coupe · 8e de finale</i></div></div></section><section class=\"bc-section\" data-section=\"palmares\"><p class=\"bc-sur-titre\">Depuis 2024</p><h2 class=\"bc-titre-section\">Palmarès</h2><div class=\"bc-chiffres\"><div class=\"bc-chiffre\"><b>3</b><span>Titres régionaux</span></div><div class=\"bc-chiffre\"><b>12</b><span>Finales jouées</span></div><div class=\"bc-chiffre\"><b>87 %</b><span>Victoires en ligue</span></div></div></section><section class=\"bc-section\" data-section=\"partenaires\"><p class=\"bc-sur-titre\">Ils nous soutiennent</p><h2 class=\"bc-titre-section\">Partenaires</h2><div class=\"bc-partenaires\"><div class=\"bc-partenaire\">NOVA</div><div class=\"bc-partenaire\">KRYPT</div><div class=\"bc-partenaire\">ORBIT</div><div class=\"bc-partenaire\">VANTA</div><div class=\"bc-partenaire\">HELIX</div><div class=\"bc-partenaire\">PULSE</div></div></section><section class=\"bc-section bc-section--fin\" data-section=\"contact\"><p class=\"bc-sur-titre\">Recrutement · partenariats · presse</p><h2 class=\"bc-titre-section\">Contact</h2><p class=\"bc-texte-section\">Contenu de démonstration : ces sections n'existent que pour essayer le menu de navigation.</p><a class=\"bc-bouton-section\" href=\"#\">Écrire à l'équipe</a></section>" +
      '</div>' +
      "<nav class=\"bc-nav bc-nav--capsule\" aria-label=\"Navigation du site\"><div class=\"bc-nav-capsule\"><a class=\"bc-nav-logo\" href=\"#\" data-cible=\"accueil\" aria-label=\"Accueil\"><svg viewBox=\"-6 -8 112 114\" aria-hidden=\"true\"><defs><linearGradient id=\"bc-nav-or\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" style=\"stop-color:var(--metal-reflet)\"/><stop offset=\".5\" style=\"stop-color:var(--metal-clair)\"/><stop offset=\"1\" style=\"stop-color:var(--metal-sombre)\"/></linearGradient></defs><polygon points=\"0,0 22,0 50,48 78,0 100,0 100,100 80,100 80,40 50,88 20,40 20,100 0,100\" fill=\"url(#bc-nav-or)\"/></svg><span>MANSUR</span></a><div class=\"bc-nav-liens\"><span class=\"bc-nav-pastille\" aria-hidden=\"true\"></span><span class=\"bc-nav-fantome\" aria-hidden=\"true\"></span><a class=\"bc-nav-lien\" href=\"#\" data-cible=\"accueil\">Accueil</a><a class=\"bc-nav-lien\" href=\"#\" data-cible=\"equipe\">L'équipe</a><a class=\"bc-nav-lien\" href=\"#\" data-cible=\"calendrier\">Calendrier</a><a class=\"bc-nav-lien\" href=\"#\" data-cible=\"palmares\">Palmarès</a><a class=\"bc-nav-lien\" href=\"#\" data-cible=\"partenaires\">Partenaires</a><a class=\"bc-nav-lien\" href=\"#\" data-cible=\"contact\">Contact</a></div><a class=\"bc-nav-cta\" href=\"#\" data-cible=\"contact\">Nous rejoindre</a><button type=\"button\" class=\"bc-nav-burger\" aria-label=\"Ouvrir le menu\" aria-expanded=\"false\"><i></i><i></i><i></i></button></div><div class=\"bc-nav-tiroir\"><a class=\"bc-nav-tiroir-lien\" href=\"#\" data-cible=\"accueil\" style=\"--k:0\"><small>01</small>Accueil</a><a class=\"bc-nav-tiroir-lien\" href=\"#\" data-cible=\"equipe\" style=\"--k:1\"><small>02</small>L'équipe</a><a class=\"bc-nav-tiroir-lien\" href=\"#\" data-cible=\"calendrier\" style=\"--k:2\"><small>03</small>Calendrier</a><a class=\"bc-nav-tiroir-lien\" href=\"#\" data-cible=\"palmares\" style=\"--k:3\"><small>04</small>Palmarès</a><a class=\"bc-nav-tiroir-lien\" href=\"#\" data-cible=\"partenaires\" style=\"--k:4\"><small>05</small>Partenaires</a><a class=\"bc-nav-tiroir-lien\" href=\"#\" data-cible=\"contact\" style=\"--k:5\"><small>06</small>Contact</a></div></nav>" +
      '<div class="bc-invite cachee" aria-hidden="true"><span class="bc-souris"><i></i></span><span>Faites défiler</span></div>' +
      '<div class="bc-commandes"><button type="button" data-lecture>Lecture</button>' +
        '<input type="range" min="0" max="1000" step="1" value="0" aria-label="Progression de la transition et des cartes"><output>0 %</output></div>';
    conteneur.appendChild(scene);
    const defilement = scene.querySelector('.bc-defilement');
    const contenu = scene.querySelector('.bc-contenu');
    const toile = scene.querySelector('.bc-toile');
    const tissu = scene.querySelector('.bc-tissu');
    const plisCalque = scene.querySelector('.bc-plis');
    const ctx = toile.getContext('2d');
    const brillance = scene.querySelector('.bc-brillance');
    const animationReflet = scene.querySelector('animateTransform');
    const boutonLecture = scene.querySelector('[data-lecture]');
    const curseur = scene.querySelector('input[type="range"]');
    const affichage = scene.querySelector('output');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cartes = [...scene.querySelectorAll('.bcj-carte')];
    const voiles = cartes.map(c => c.querySelector('.bcj-voile'));
    const flottes = cartes.map(c => c.querySelector('.bcj-flotte'));
    const holo = scene.querySelector('.bcj-holo');
    const holoImage = scene.querySelector('.bcj-holo-image');
    const holoAgent = scene.querySelector('.bcj-holo--agent');
    const imageAgent = scene.querySelector('.bcj-holo-agent-img');
    if (imageAgent) imageAgent.addEventListener('error', () => holoAgent.classList.remove('visible'));
    const nuqueTissu = scene.querySelector('.bc-dos--tissu .bc-nuque');
    scene.querySelectorAll('.bcj-photo img').forEach(img => img.addEventListener('error', () => img.parentElement.classList.add('bcj-sans-photo')));
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
    const etage = scene.querySelector('.bc-etage');
    const dosStatique = scene.querySelector('.bc-dos--statique');
    function appliquerVariation() {
      const sombre = lireCouleur('--couleur-surface'), clair = lireCouleur('--couleur-texte');
      const blanc = r.maillotBlanc;
      or = blanc
        ? { sombre: melange(orTheme.sombre, sombre, 0.3), moyen: melange(orTheme.moyen, orTheme.sombre, 0.45),
            clair: melange(orTheme.clair, orTheme.sombre, 0.35), reflet: melange(orTheme.reflet, orTheme.moyen, 0.6) }
        : { ...orTheme };
      remplissage = blanc ? melange(clair, orTheme.clair, 0.22) : sombre;
      const encre = blanc ? melange(sombre, orTheme.sombre, 0.22) : clair;
      couleurMotif = blanc ? melange(remplissage, or.sombre, 0.5) : lireCouleur('--couleur-motif');
      scene.style.setProperty('--bc-tissu', remplissage);
      scene.style.setProperty('--bc-encre', encre);
      scene.style.setProperty('--bc-motif-couleur', couleurMotif);
      scene.style.setProperty('--bc-ourlet', blanc ? encre : 'transparent');
      for (const el of [etage.querySelector('.bc-tissu'), dosStatique]) {
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
    let arretEquipe = 0, largeurCarte = 200, hauteurCarte = 300, zoneHauteurPx = 400;
    let actif = -1;
    let entree = false;
    let apercu = -1;
    let minuterieApercu = 0;
    let minuterieRetournement = 0;
    const verrouillee = cartes.map(() => false);
    const retour = scene.querySelector('.bcj-retour');
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
      longueur = statique ? 0 : (r.longueur / 100) * defilement.clientHeight;
      scene.style.setProperty('--h', defilement.clientHeight + 'px');
      arretEquipe = statique ? 0 : (r.equipeArret / 100) * defilement.clientHeight;
      scene.style.setProperty('--long', (longueur + arretEquipe) + 'px');
      largeur = toile.clientWidth; hauteur = toile.clientHeight;
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
      scene.style.setProperty('--dos-haut', (basDuCol - (pointeFinale - montee)) + 'px');
      const hauteurDos = Math.max(120, hauteur - basDuCol);
      scene.style.setProperty('--dos-hauteur', hauteurDos + 'px');
      creerPoussiere();
      placerZoneCartes(hauteurDos);
    }
    function placerZoneCartes(hauteurDos) {
      appliquerReglagesCartes();
      if (statique) {
        largeurCarte = Math.min(240, defilement.clientWidth - 40);
        scene.style.setProperty('--carte-l', largeurCarte + 'px');
        scene.style.setProperty('--panneau', '104px');
        return;
      }
      const zoneHaut = nuqueTissu.offsetTop + nuqueTissu.offsetHeight + 14;
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
      let holoL = Math.min(largeurCarte * r.holoTaille, (libreDroite - 24) * 0.9, ((zoneHauteur - ecartFaisceau) * largeurCarte) / hauteurCarte);
      holoDisponible = !etroit && holoL >= 120;
      if (holoDisponible) {
        const holoH = (hauteurCarte * holoL) / largeurCarte;
        scene.style.setProperty('--holo-l', holoL + 'px');
        scene.style.setProperty('--holo-h', holoH + 'px');
        scene.style.setProperty('--holo-x', ((24 + libreDroite) / 2 - holoL / 2) + 'px');
        scene.style.setProperty('--holo-haut', Math.max(0, zoneHauteur - ecartFaisceau - holoH) + 'px');
        scene.style.setProperty('--holo-echelle', String(holoL / largeurCarte));
      }
      const libreAgent = largeur - 16 - (largeur / 2 + largeurChoisie / 2 + 24);
      const coteAgent = Math.min((zoneHauteur - ecartFaisceau) / 0.95, libreAgent / 0.48, (hauteurCarte * r.holoTaille) / 0.87);
      agentDisponible = !etroit && libreAgent >= 100 && coteAgent >= 160;
      if (agentDisponible) {
        holoAgent.style.setProperty('--holo-l', coteAgent + 'px');
        holoAgent.style.setProperty('--holo-h', coteAgent + 'px');
        holoAgent.style.setProperty('--holo-x', (largeur / 2 + largeurChoisie / 2 + 24 + (libreAgent - coteAgent) / 2) + 'px');
        holoAgent.style.setProperty('--holo-haut', Math.max(0, zoneHauteur - ecartFaisceau - coteAgent * 0.95) + 'px');
      }
      if (!holoDisponible || !r.hologramme) cacherHologramme();
      else if (!agentDisponible || !r.holoAgent) holoAgent.classList.remove('visible');
      scene.style.setProperty('--zone-haut', zoneHaut + 'px');
      scene.style.setProperty('--zone-hauteur', zoneHauteur + 'px');
      scene.style.setProperty('--carte-l', largeurCarte + 'px');
      scene.style.setProperty('--panneau', panneau + 'px');
      placerCartes();
    }
    function appliquerReglagesCartes() {
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
      scene.style.setProperty('--apercu-rotation', r.apercuRotation + 'deg');
      scene.style.setProperty('--apercu-leve', r.apercuSoulevement + 'px');
      if (r.apercuIndice) delete scene.dataset.sansIndice; else scene.dataset.sansIndice = '';
      scene.style.setProperty('--holo-obscurite', String(r.holoObscurite));
      if (r.equipeRespiration && !statique) scene.dataset.respiration = ''; else delete scene.dataset.respiration;
    }
    const longueurTotale = () => longueur + arretEquipe;
    const progressionTotale = () => (longueurTotale() > 0 ? Math.min(1, Math.max(0, defilement.scrollTop / longueurTotale())) : 0);
    function placerCartes() {
      if (statique) return;
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
        const arrive = entree && carte.dataset.entre !== 'oui';
        const part = !entree && carte.dataset.entre === 'oui';
        if (arrive) {
          const delai = (i * r.equipeEntree).toFixed(2);
          carte.style.transition = 'transform .6s cubic-bezier(.2, .9, .25, 1) ' + delai + 's, opacity .45s ease-out ' + delai + 's';
        } else if (part) {
          const delai = ((N - 1 - i) * r.equipeEntree * 0.7).toFixed(2);
          carte.style.transition = 'transform .5s cubic-bezier(.55, 0, .8, .2) ' + delai + 's, opacity .35s ease-in ' + (Number(delai) + 0.1).toFixed(2) + 's';
        } else if (entree) {
          carte.style.transition = '';
        }
        carte.dataset.entre = entree ? 'oui' : 'non';
        if (!entree) {
          y += 90;
          angle += (i - 2) * 5;
        }
        carte.style.transform = 'translate3d(' + x.toFixed(1) + 'px, ' + y.toFixed(1) + 'px, 0) rotate(' + angle.toFixed(2) + 'deg) scale(' + (entree ? echelle : echelle * 0.8).toFixed(4) + ')';
        carte.style.opacity = entree ? '1' : '0';
        carte.style.pointerEvents = entree ? '' : 'none';
        carte.style.zIndex = String(z);
        carte.style.setProperty('--delai-respiration', (i * 0.35).toFixed(2) + 's');
        voiles[i].style.opacity = voile.toFixed(3);
        carte.classList.toggle('active', i === actif);
      });
      const basCarte = -Z / 2 + (H * sChoisi) / 2 + 6 + (H * sChoisi * agrandi) / 2;
      const hautBanc = yBanc - (H * sBanc) / 2;
      retour.style.left = (largeur / 2) + 'px';
      retour.style.top = (Z / 2 + (basCarte + hautBanc) / 2) + 'px';
    }
    function suivreEquipe() {
      const doitEntrer = !statique && progression() >= 0.92;
      if (doitEntrer === entree) return;
      entree = doitEntrer;
      if (!entree && actif >= 0) choisir(-1);
      finApercu();
      placerCartes();
    }
    function choisir(i) {
      clearTimeout(minuterieRetournement);
      if (actif >= 0 && actif !== i) retourner(actif, false);
      actif = i;
      finApercu();
      placerCartes();
      if (i >= 0) {
        cartes[i].focus({ preventScroll: true });
        minuterieRetournement = setTimeout(() => { if (actif === i) retourner(i, true); }, 480);
      }
    }
    function montrerHologramme(i) {
      if (!holoDisponible || !r.hologramme) return;
      holoImage.replaceChildren(cartes[i].querySelector('.bcj-avant').cloneNode(true));
      holoCarte = i;
      holo.classList.add('visible');
      scene.dataset.holo = '';
      if (agentDisponible && r.holoAgent && joueurs[i].agentImage) {
        if (imageAgent.getAttribute('src') !== joueurs[i].agentImage) imageAgent.src = joueurs[i].agentImage;
        holoAgent.style.setProperty('--agent-masque', 'url("' + joueurs[i].agentImage + '")');
        holoAgent.querySelector('.bcj-holo-nom').textContent = joueurs[i].agent;
        holoAgent.classList.add('visible');
      }
    }
    function cacherHologramme() {
      holoCarte = -1;
      holo.classList.remove('visible');
      if (holoAgent) holoAgent.classList.remove('visible');
      delete scene.dataset.holo;
    }
    function retourner(i, oui) {
      const carte = cartes[i], flotte = flottes[i];
      if (carte.classList.contains('retournee') === oui) return;
      carte.classList.toggle('retournee', oui);
      if (statique) return;
      if (oui && i === actif) montrerHologramme(i);
      if (!oui && holoCarte === i) cacherHologramme();
      if (oui) {
        flotte.style.transition = '';
        flotte.style.transform = '';
        if (r.flottementCarte > 0) flotte.classList.add('flotte');
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
    function geometrie(p) {
      const orientation = 1;
      const sens = -1;
      const montee = r.pente * largeur / 2;
      const marge = margeV();
      const cacheeEnHaut = -marge - (orientation === 1 ? 0 : montee);
      const cacheeEnBas = hauteur + marge + (orientation === 1 ? montee : 0);
      const pointe = sens === 1 ? cacheeEnHaut + p * (cacheeEnBas - cacheeEnHaut) : cacheeEnBas + p * (cacheeEnHaut - cacheeEnBas);
      return { pointe, sens, yV: x => pointe - orientation * r.pente * Math.abs(x - largeur / 2) };
    }
    function dessiner(temps) {
      const cible = progression() * progressionArret();
      const ancienne = pLisse;
      const raideur = 0.16 - 0.14 * r.inertie;
      vitesseV = vitesseV * (1 - 2 * Math.sqrt(raideur)) + (cible - pLisse) * raideur;
      pLisse += vitesseV;
      if (Math.abs(cible - pLisse) < 0.0005 && Math.abs(vitesseV) < 0.0005) { pLisse = cible; vitesseV = 0; }
      vitesse += (Math.abs(pLisse - ancienne) - vitesse) * 0.1;
      const p = pLisse;
      ctx.clearRect(0, 0, largeur, hauteur);
      ctx.globalCompositeOperation = 'lighter';
      for (const g of poussieres) {
        g.y -= g.vy; if (g.y < -4) { g.y = hauteur + 4; g.x = Math.random() * largeur; }
        ctx.globalAlpha = 0.25 + 0.35 * (0.5 + 0.5 * Math.sin(temps / 600 + g.phase));
        ctx.fillStyle = or.clair;
        ctx.fillRect(g.x, g.y, g.taille, g.taille);
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
      if (p > 0) {
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
        const balayage = ((temps / 1800) % 1.6) - 0.3;
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
        if (p < 1 && r.etincelles > 0) {
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
      contenu.style.transform = `scale(${1 - 0.08 * p})`;
      contenu.style.opacity = String(1 - 0.6 * p);
      suivreEquipe();
      curseur.value = String(Math.round(progressionTotale() * 1000));
      affichage.textContent = Math.round(progressionTotale() * 100) + ' %';
    }
    function boucle(temps) {
      idImage = 0;
      if (!visible || statique) return;
      dessiner(temps);
      idImage = requestAnimationFrame(boucle);
    }
    const demarrer = () => { if (!idImage && visible && !statique) idImage = requestAnimationFrame(boucle); };
    function appliquerReflet() {
      const actif = r.refletLogo && !statique;
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
        if (statique) { retourner(i, true); return; }
        clearTimeout(minuterieApercu);
        if (i === actif || carte.classList.contains('retournee')) return;
        finApercu(); apercu = i; carte.classList.add('apercu'); placerCartes();
      });
      carte.addEventListener('pointerleave', e => {
        if (e.pointerType !== 'mouse') return;
        if (apercu === i) { clearTimeout(minuterieApercu); minuterieApercu = setTimeout(finApercu, 140); }
        if (statique && !verrouillee[i]) retourner(i, false);
      });
      const activer = () => {
        if (statique) { verrouillee[i] = !verrouillee[i]; retourner(i, verrouillee[i]); return; }
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
    const invite = scene.querySelector('.bc-invite');
    let aInteragi = false, enDemo = false, idDemo = 0, minuterieDemo = 0;
    function majInvite() {
      const montrer = !statique && r.invitation && (enDemo || defilement.scrollTop < 20);
      invite.classList.toggle('cachee', !montrer);
    }
    function arreterDemo() {
      clearTimeout(minuterieDemo); minuterieDemo = 0;
      if (idDemo) { cancelAnimationFrame(idDemo); idDemo = 0; }
      enDemo = false;
    }
    function programmerDemo(secondes) {
      clearTimeout(minuterieDemo); minuterieDemo = 0;
      if (statique || !r.invitation || aInteragi) return;
      minuterieDemo = setTimeout(jouerDemo, secondes * 1000);
    }
    function jouerDemo() {
      minuterieDemo = 0;
      if (aInteragi || !visible || idLecture || defilement.scrollTop > 2) { programmerDemo(r.invitationPause); return; }
      const debutV = geometrie(0).pointe, finV = geometrie(1).pointe;
      const pointeVisee = hauteur * (1 - r.invitationAmplitude) + r.pente * largeur / 2;
      const pV = Math.min(1, Math.max(0, (debutV - pointeVisee) / (debutV - finV)));
      const hauteurDemo = (longueur * pV) / Math.max(0.01, progressionArret()), duree = 2600, depart = performance.now();
      enDemo = true; majInvite();
      const pas = maintenant => {
        const k = Math.min(1, Math.max(0, (maintenant - depart) / duree));
        const forme = Math.min(1, Math.sin(Math.PI * k) * 1.35);
        defilement.scrollTop = hauteurDemo * forme * forme;
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
    defilement.addEventListener('scroll', () => { if (!enDemo) majInvite(); }, { passive: true });
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
    const nav = scene.querySelector('.bc-nav');
    const IDS_SECTIONS = ["accueil","equipe","calendrier","palmares","partenaires","contact"];
    const posEquipe = () => statique ? (scene.querySelector('.bc-dos--statique')?.offsetTop || 0) : longueur + 2;
    const cible = id => id === 'accueil' ? 0 : id === 'equipe' ? posEquipe() : (scene.querySelector('[data-section="' + id + '"]')?.offsetTop || 0);
    let sectionActive = '';
    function sectionCourante() {
      const y = defilement.scrollTop, h = defilement.clientHeight;
      let courante = y >= posEquipe() * 0.6 ? 'equipe' : 'accueil';
      for (const id of IDS_SECTIONS.slice(2)) if (y >= cible(id) - h * 0.45) courante = id;
      return courante;
    }
    function majNav() {
      const max = Math.max(1, defilement.scrollHeight - defilement.clientHeight);
      nav.style.setProperty('--bc-nav-progression', (defilement.scrollTop / max).toFixed(4));
      nav.dataset.haut = defilement.scrollTop < 40 ? 'oui' : 'non';
      const courante = sectionCourante();
      if (courante === sectionActive) return;
      sectionActive = courante;
      nav.dataset.actif = courante;
      nav.querySelectorAll('[data-cible]').forEach(a => { a.classList.toggle('actif', a.dataset.cible === courante); if (a.dataset.cible === courante) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
      apresChangement();
    }
    function allerA(id) {
      arreterLecture();
      defilement.scrollTo({ top: cible(id), behavior: statique ? 'auto' : 'smooth' });
    }
    nav.addEventListener('click', e => {
      const lien = e.target.closest('[data-cible]');
      if (!lien) return;
      e.preventDefault();
      allerA(lien.dataset.cible);
      fermerTiroir();
    });
    defilement.addEventListener('scroll', majNav, { passive: true });
    const observateurVedette = new MutationObserver(() => { nav.classList.toggle('bc-nav--efface', scene.dataset.mode === 'selection'); if (scene.dataset.mode === 'selection') fermerTiroir(); });
    observateurVedette.observe(scene, { attributes: true, attributeFilter: ['data-mode'] });
    let idMiseEnPageNav = 0;
    const miseEnPageNav = () => { idMiseEnPageNav = 0; nav.dataset.etroit = scene.clientWidth < 860 ? 'oui' : 'non'; nav.style.setProperty('--bc-hauteur-scene', scene.clientHeight + 'px'); apresMiseEnPage(); };
    const observateurNav = new ResizeObserver(() => { if (!idMiseEnPageNav) idMiseEnPageNav = requestAnimationFrame(miseEnPageNav); });
    observateurNav.observe(scene);
    const burger = nav.querySelector('.bc-nav-burger');
    function fermerTiroir() { nav.classList.remove('ouvert'); burger.setAttribute('aria-expanded', 'false'); burger.setAttribute('aria-label', 'Ouvrir le menu'); }
    burger.addEventListener('click', () => {
      const ouvert = nav.classList.toggle('ouvert');
      burger.setAttribute('aria-expanded', String(ouvert));
      burger.setAttribute('aria-label', ouvert ? 'Fermer le menu' : 'Ouvrir le menu');
    });
    const pastille = nav.querySelector('.bc-nav-pastille'), fantome = nav.querySelector('.bc-nav-fantome');
    const poser = (marque, lien) => { if (!lien) return; marque.style.setProperty('--x', lien.offsetLeft + 'px'); marque.style.setProperty('--w', lien.offsetWidth + 'px'); marque.style.top = lien.offsetTop + (lien.offsetHeight - 48) / 2 + 'px'; };
    function apresChangement() { poser(pastille, nav.querySelector('.bc-nav-lien.actif')); }
    function apresMiseEnPage() { apresChangement(); if (nav.dataset.etroit !== 'oui') fermerTiroir(); }
    nav.querySelectorAll('.bc-nav-lien').forEach(l => l.addEventListener('pointerenter', () => poser(fantome, l)));
    miseEnPageNav();
    majNav();
    function arreterNav() { observateurVedette.disconnect(); observateurNav.disconnect(); cancelAnimationFrame(idMiseEnPageNav); }
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
        clearTimeout(minuterieRetournement);
        clearTimeout(minuterieApercu);
        arreterLecture();
        arreterDemo();
        cancelAnimationFrame(idImage); idImage = 0; visible = false;
        observateurVisibilite.disconnect();
        observateurTaille.disconnect();
        arreterNav();
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
enregistrerEffet(EffetNavBandeauCapsule);
