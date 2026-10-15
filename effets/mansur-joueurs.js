const EffetMansurJoueurs = {
  id: 'mansur-joueurs',
  nom: 'MANSUR - JOUEURS V1',
  description: 'Le site enfile le maillot, puis les cartes des joueurs défilent sur le dos du maillot, à la place du pseudo. Survolez la carte active (ou touchez-la sur téléphone) pour la retourner ; cliquer sur la carte suivante y amène directement. Faites défiler la maquette, ou utilisez Lecture.',
  variables: ['--metal-sombre', '--metal-moyen', '--metal-clair', '--metal-reflet', '--couleur-fond', '--couleur-surface', '--couleur-lueur', '--couleur-texte', '--couleur-motif', '--opacite-motif', '--couleur-nuit', '--police-titre', '--police-logo'],
  joueurs: [
    { numero: '01', pseudo: 'Noctis', role: 'Duelliste', agent: 'Jett', agentImage: 'images/agents/jett-full.webp', photo: 'images/joueurs/joueur-01.jpg', acs: 271, kd: '1.34', hs: 32 },
    { numero: '02', pseudo: 'Kaze', role: 'Initiateur', agent: 'Sova', agentImage: 'images/agents/sova-full.webp', photo: 'images/joueurs/joueur-02.jpg', acs: 214, kd: '1.12', hs: 26 },
    { numero: '03', pseudo: 'Lyra', role: 'Contrôleuse', agent: 'Omen', agentImage: 'images/agents/omen-full.webp', photo: 'images/joueurs/joueur-03.jpg', acs: 198, kd: '1.05', hs: 24 },
    { numero: '04', pseudo: 'Sahir', role: 'Sentinelle', agent: 'Killjoy', agentImage: 'images/agents/killjoy-full.webp', photo: 'images/joueurs/joueur-04.jpg', acs: 205, kd: '1.18', hs: 28 },
    { numero: '05', pseudo: 'Vortex', role: 'Flex · IGL', agent: 'Skye', agentImage: 'images/agents/skye-full.webp', photo: 'images/joueurs/joueur-05.jpg', acs: 189, kd: '0.97', hs: 22 }
  ],
  parametres: [
    { categorie: 'Défilement', id: 'longueur', libelle: 'Défilement · durée de la transition (% de hauteur d\'écran)', type: 'nombre', min: 60, max: 250, pas: 5, defaut: 120 },
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
    { categorie: 'Cartes · défilement', id: 'cartesLongueur', libelle: 'Cartes · distance par carte (% de hauteur d\'écran)', type: 'nombre', min: 30, max: 200, pas: 5, defaut: 80 },
    { categorie: 'Cartes · défilement', id: 'cartesMarges', libelle: 'Cartes · arrêt avant la 1re et après la dernière carte (% de hauteur d\'écran)', type: 'nombre', min: 0, max: 150, pas: 5, defaut: 60 },
    { categorie: 'Cartes · défilement', id: 'cartesInertie', libelle: 'Cartes · fluidité (0 = sec, 1 = très amorti)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.6 },
    { categorie: 'Cartes · défilement', id: 'cartesAimant', libelle: 'Cartes · arrêt sur chaque carte (0 = glissement continu)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.6 },
    { categorie: 'Cartes · suivante', id: 'ecart', libelle: 'Cartes · écart de la carte suivante (part de la largeur)', type: 'nombre', min: 0.3, max: 1.3, pas: 0.02, defaut: 0.62 },
    { categorie: 'Cartes · suivante', id: 'tailleSuivante', libelle: 'Cartes · taille de la carte suivante (1 = même taille)', type: 'nombre', min: 0.5, max: 1, pas: 0.02, defaut: 0.82 },
    { categorie: 'Cartes · suivante', id: 'cartesVisibles', libelle: 'Cartes · nombre de cartes en attente visibles à droite', type: 'nombre', min: 1, max: 4, pas: 1, defaut: 3 },
    { categorie: 'Cartes · suivante', id: 'positionActive', libelle: 'Cartes · position de la carte active (0 = centre, + = vers la droite)', type: 'nombre', min: -0.2, max: 0.35, pas: 0.01, defaut: 0.08 },
    { categorie: 'Cartes · suivante', id: 'ombreSuivante', libelle: 'Cartes · assombrissement de la carte suivante', type: 'nombre', min: 0, max: 0.9, pas: 0.05, defaut: 0.55 },
    { categorie: 'Cartes · suivante', id: 'inclinaison', libelle: 'Cartes · inclinaison 3D de la carte suivante (degrés)', type: 'nombre', min: 0, max: 40, pas: 1, defaut: 12 },
    { categorie: 'Cartes · photo', id: 'desaturation', libelle: 'Cartes · photo : désaturation (0 = couleurs d\'origine)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.25 },
    { categorie: 'Cartes · photo', id: 'teinte', libelle: 'Cartes · photo : voile doré', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.4 },
    { categorie: 'Cartes · photo', id: 'trame', libelle: 'Cartes · photo : lignes d\'écran', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.2 },
    { categorie: 'Cartes · photo', id: 'reflet', libelle: 'Cartes · photo : reflet qui passe sur la carte active', type: 'interrupteur', defaut: true },
    { categorie: 'Cartes · retournement', id: 'agrandissement', libelle: 'Cartes · agrandissement au survol', type: 'nombre', min: 1, max: 1.4, pas: 0.01, defaut: 1.1 },
    { categorie: 'Cartes · retournement', id: 'dureeRetournement', libelle: 'Cartes · durée du retournement (s)', type: 'nombre', min: 0.3, max: 1.6, pas: 0.05, defaut: 0.8 },
    { categorie: 'Cartes · retournement', id: 'rebond', libelle: 'Cartes · rebond en fin de rotation (0 = aucun)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.5 },
    { categorie: 'Cartes · retournement', id: 'flottementCarte', libelle: 'Cartes · flottement au survol (px, 0 = immobile)', type: 'nombre', min: 0, max: 20, pas: 1, defaut: 6 },
    { categorie: 'Cartes · aperçu', id: 'apercuRotation', libelle: 'Cartes · survol d\'une carte en attente : rotation vers la droite (degrés)', type: 'nombre', min: 0, max: 10, pas: 0.5, defaut: 3 },
    { categorie: 'Cartes · aperçu', id: 'apercuSoulevement', libelle: 'Cartes · survol d\'une carte en attente : soulèvement (px)', type: 'nombre', min: 0, max: 30, pas: 1, defaut: 12 },
    { categorie: 'Cartes · aperçu', id: 'apercuIndice', libelle: 'Cartes · survol d\'une carte en attente : pastille « Voir le joueur »', type: 'interrupteur', defaut: true },
    { categorie: 'Hologramme', id: 'hologramme', libelle: 'Hologramme · projeter la carte à gauche au retournement', type: 'interrupteur', defaut: true },
    { categorie: 'Hologramme', id: 'holoAgent', libelle: 'Hologramme · projeter aussi l\'agent favori à droite', type: 'interrupteur', defaut: true },
    { categorie: 'Hologramme', id: 'holoCouleur', libelle: 'Hologramme · couleur', type: 'couleur', defaut: '#8FB0CC' },
    { categorie: 'Hologramme', id: 'holoTaille', libelle: 'Hologramme · taille (par rapport à la carte)', type: 'nombre', min: 1, max: 2, pas: 0.05, defaut: 1.4 },
    { categorie: 'Hologramme', id: 'holoObscurite', libelle: 'Hologramme · assombrissement de la scène pendant la projection (0 = aucun)', type: 'nombre', min: 0, max: 0.9, pas: 0.05, defaut: 0.85 },
    { categorie: 'Hologramme', id: 'holoTremblement', libelle: 'Hologramme · tremblement (0 = stable)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.5 }
  ],
  css: `
.mj-scene { position: absolute; inset: 0; --h: 600px; --long: 720px; }
.mj-defilement { position: absolute; inset: 0; overflow-x: hidden; overflow-y: auto; scrollbar-width: thin; }
.mj-hero { position: relative; height: calc(var(--h) + var(--long)); }
.mj-etage { position: sticky; top: 0; height: var(--h); overflow: hidden; display: grid; place-items: center;
  background: radial-gradient(ellipse 110% 90% at 50% 45%, var(--couleur-lueur) 0%, var(--couleur-fond) 60%, var(--couleur-surface) 100%); }
.mj-etage::before { content: ""; position: absolute; inset: 0; pointer-events: none; background-color: var(--couleur-motif); opacity: var(--opacite-motif);
  --etoile: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.4'%3E%3Crect x='16' y='16' width='24' height='24'/%3E%3Crect x='16' y='16' width='24' height='24' transform='rotate(45 28 28)'/%3E%3C/g%3E%3Ccircle cx='0' cy='0' r='2'/%3E%3C/svg%3E");
  -webkit-mask: var(--etoile) 0 0 / 56px 56px repeat; mask: var(--etoile) 0 0 / 56px 56px repeat; }
.mj-contenu { position: relative; z-index: 1; display: grid; justify-items: center; gap: 14px; padding: 24px; text-align: center; will-change: transform, opacity; }
.mj-logo { width: clamp(90px, 16vw, 170px); height: auto; overflow: visible; }
.mj-logo .etoile { filter: drop-shadow(0 0 6px var(--metal-reflet)); }
.mj-mot { margin: 6px 0 0; font: 400 clamp(20px, 4.2vw, 46px)/1 var(--police-logo, "Arial Black", sans-serif); letter-spacing: .42em; padding-left: .42em; color: var(--couleur-texte); }
.mj-arabe { margin: 0; font: 600 clamp(14px, 2vw, 20px)/1 "Segoe UI", "Noto Naskh Arabic", "Arial", sans-serif; color: var(--metal-moyen); }
.mj-accroche { margin: 8px 0 0; font: 700 clamp(13px, 1.6vw, 17px)/1 var(--police-titre, "Arial Narrow", sans-serif); letter-spacing: .28em; text-transform: uppercase; color: var(--metal-moyen); }
.mj-toile { position: absolute; inset: 0; z-index: 3; width: 100%; height: 100%; pointer-events: none; }
.mj-tissu { position: absolute; left: 0; top: 0; z-index: 2; width: 100%; height: calc(var(--h) + var(--montee) + var(--marge));
  background: var(--mj-tissu); clip-path: polygon(0 0, 50% var(--montee), 100% 0, 100% 100%, 0 100%);
  overflow: hidden; pointer-events: none; will-change: transform; transform: translate3d(0, 300vh, 0); }
.mj-imprime { position: absolute; inset: -24px -40px; will-change: transform;
  animation: mj-flotte var(--flotte-duree, 5s) ease-in-out infinite alternate; }
@keyframes mj-flotte {
  from { transform: translate3d(0, calc(var(--flottement, .5) * -7px), 0) skewY(calc(var(--flottement, .5) * -.7deg)); }
  to { transform: translate3d(0, calc(var(--flottement, .5) * 7px), 0) skewY(calc(var(--flottement, .5) * .7deg)); } }
.mj-imprime::before { content: ""; position: absolute; inset: 0; background-color: var(--mj-motif-couleur); opacity: calc(var(--tissu, .5) * .35);
  -webkit-mask: var(--motif-maillot) 0 0 / var(--motif-taille) var(--motif-taille) repeat;
  mask: var(--motif-maillot) 0 0 / var(--motif-taille) var(--motif-taille) repeat; }
.mj-plis { position: absolute; inset: 0; overflow: hidden; opacity: 0; pointer-events: none; }
.mj-pli { position: absolute; top: 0; left: 0; height: 100%; will-change: transform; }
.mj-pli-a { width: calc(100% + var(--pas-a)); animation: mj-pli-a var(--plis-duree, 14s) linear infinite;
  background: repeating-linear-gradient(76deg, var(--plis-sombre) 0, transparent calc(var(--plis-taille) * .24), var(--plis-clair) calc(var(--plis-taille) * .5), transparent calc(var(--plis-taille) * .76), var(--plis-sombre) var(--plis-taille)); }
.mj-pli-b { width: calc(100% + var(--pas-b)); opacity: .75; animation: mj-pli-b calc(var(--plis-duree, 14s) * 1.45) linear infinite;
  background: repeating-linear-gradient(114deg, var(--plis-sombre) 0, transparent calc(var(--plis-taille-b) * .24), var(--plis-clair) calc(var(--plis-taille-b) * .5), transparent calc(var(--plis-taille-b) * .76), var(--plis-sombre) var(--plis-taille-b)); }
@keyframes mj-pli-a { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(calc(-1 * var(--pas-a)), 0, 0); } }
@keyframes mj-pli-b { from { transform: translate3d(calc(-1 * var(--pas-b)), 0, 0); } to { transform: translate3d(0, 0, 0); } }
.mj-scene[data-vent-fige] .mj-pli, .mj-scene[data-vent-fige] .mj-imprime { animation-play-state: paused; }
.mj-dos { position: relative; overflow: hidden; min-height: var(--h); padding: calc(var(--h) * .1) 24px calc(var(--h) * .22);
  background: var(--mj-tissu); color: var(--mj-encre); text-align: center; display: grid; justify-items: center; align-content: start; gap: 10px; }
.mj-dos::before { content: ""; position: absolute; inset: 0; pointer-events: none; background-color: var(--mj-motif-couleur); opacity: calc(var(--tissu, .5) * .35);
  -webkit-mask: var(--motif-maillot) 0 0 / var(--motif-taille) var(--motif-taille) repeat; mask: var(--motif-maillot) 0 0 / var(--motif-taille) var(--motif-taille) repeat; }
.mj-dos > * { position: relative; }
.mj-nuque { margin: 0; font: 600 clamp(26px, 4.2vw, 54px)/1.15 "Segoe UI", "Noto Naskh Arabic", "Arial", sans-serif; color: var(--metal-moyen); }
.mj-pseudo { margin: calc(var(--h) * .04) 0 0; font: 800 clamp(48px, 11vw, 120px)/.9 var(--police-titre, "Arial Narrow", sans-serif); letter-spacing: .04em; text-transform: uppercase; color: var(--mj-encre); }
.mj-soulignement { width: clamp(120px, 22vw, 240px); height: 2px; background: var(--metal-moyen); }
.mj-filigrane { width: clamp(110px, 20vw, 220px); margin-top: 10px; opacity: .14; }
.mj-dos > p { margin: 6px auto 0; max-width: 40ch; opacity: .7; }
.mj-dos .mj-ourlet { position: absolute; left: 0; right: 0; bottom: 0; width: 100%; height: calc(var(--h) * .2); }
.mj-dos--tissu { position: absolute; left: 40px; right: 40px; top: calc(var(--dos-haut) + 24px); height: var(--dos-hauteur); min-height: 0;
  background: none; padding: 0 24px calc(var(--dos-hauteur) * .2); align-content: center; }
.mj-dos--tissu .mj-ourlet { height: calc(var(--dos-hauteur) * .16); }
.mj-dos--tissu { align-content: start; padding-top: calc(var(--dos-hauteur) * .012); }
.mj-dos--tissu::before { content: none; }
.mj-dos--statique { display: none; }
.mj-scene[data-statique] .mj-dos--statique { display: grid; }
.mj-dos--statique { padding-bottom: calc(var(--h) * .26); }
.mjc-zone { position: absolute; left: 0; right: 0; z-index: 1; top: calc(var(--dos-haut) + var(--zone-haut)); height: var(--zone-hauteur); pointer-events: none; }
.mjc-cartes { position: absolute; inset: 0; perspective: 1400px; }
.mjc-carte { position: absolute; left: 50%; top: 50%; width: var(--carte-l); height: calc(var(--carte-l) * 1.25 + var(--panneau));
  margin-left: calc(var(--carte-l) / -2); margin-top: calc((var(--carte-l) * 1.25 + var(--panneau)) / -2);
  will-change: transform, opacity; cursor: pointer; pointer-events: auto; color: var(--couleur-texte); text-align: left; -webkit-tap-highlight-color: transparent; }
.mjc-survol { position: absolute; inset: 0; perspective: 1100px; transition: transform var(--cj-duree, .8s) var(--cj-courbe, ease); }
.mjc-carte.retournee .mjc-survol { transform: scale(var(--cj-agrandi, 1.1)); }
.mjc-flotte { position: absolute; inset: 0; }
.mjc-flotte.flotte { animation: mjc-flotte 3.2s ease-in-out calc(var(--cj-duree, .8s) * .5) infinite; }
@keyframes mjc-flotte {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
  30% { transform: translate3d(0, calc(var(--cj-flotte, 6px) * -1), 0) rotate(.6deg); }
  70% { transform: translate3d(0, calc(var(--cj-flotte, 6px) * .5), 0) rotate(-.5deg); } }
.mjc-pivot { position: absolute; inset: 0; transform-style: preserve-3d; transition: transform var(--cj-duree, .8s) var(--cj-courbe, ease); }
.mjc-carte.retournee .mjc-pivot { transform: rotateY(180deg); }
.mjc-face { position: absolute; inset: 0; overflow: hidden; border-radius: 12px; border: 1.5px solid transparent; backface-visibility: hidden; -webkit-backface-visibility: hidden;
  container-type: inline-size; box-shadow: 0 18px 40px -18px var(--couleur-nuit);
  background: linear-gradient(var(--couleur-surface), var(--couleur-surface)) padding-box,
              linear-gradient(150deg, var(--metal-reflet), var(--metal-sombre) 35%, var(--metal-clair) 65%, var(--metal-sombre)) border-box; }
.mjc-voile { position: absolute; inset: 0; border-radius: 12px; background: var(--couleur-nuit); opacity: 0; pointer-events: none; transition: opacity .25s ease-out; }
.mjc-carte:not(.retournee) .mjc-survol { transition: transform .45s cubic-bezier(.3, 1.5, .5, 1); }
.mjc-carte.apercu .mjc-survol { transform: translate3d(0, calc(var(--apercu-leve, 12px) * -1), 0) rotate(var(--apercu-rotation, 3deg)) scale(1.04); }
.mjc-carte.apercu .mjc-flotte { animation: mjc-balance 2.6s ease-in-out .45s infinite; }
@keyframes mjc-balance { 0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); } 50% { transform: translate3d(0, -4px, 0) rotate(.8deg); } }
.mjc-contour { position: absolute; inset: -3px; border-radius: 14px; border: 1.5px solid var(--metal-reflet); pointer-events: none; opacity: 0; transition: opacity .3s;
  box-shadow: 0 0 16px color-mix(in srgb, var(--metal-reflet) 45%, transparent), inset 0 0 12px color-mix(in srgb, var(--metal-reflet) 25%, transparent); }
.mjc-carte.apercu .mjc-contour { opacity: 1; }
.mjc-carte.apercu .mjc-brillance { opacity: 1; animation: mjc-brillance 1.4s ease-out both; }
.mjc-indice { position: absolute; left: 50%; bottom: -34px; padding: 6px 14px; border-radius: 999px; white-space: nowrap; pointer-events: none;
  font: 700 10px/1 system-ui, sans-serif; letter-spacing: .2em; text-transform: uppercase; color: var(--couleur-surface);
  background: linear-gradient(135deg, var(--metal-sombre), var(--metal-clair) 45%, var(--metal-reflet) 55%, var(--metal-clair));
  opacity: 0; transform: translate(-50%, 6px); transition: opacity .3s, transform .3s; }
.mjc-carte.apercu .mjc-indice { opacity: 1; transform: translate(-50%, 0); }
.mj-scene[data-sans-indice] .mjc-indice { display: none; }
.mjc-photo { position: relative; height: calc(var(--carte-l) * 1.25); overflow: hidden;
  background: radial-gradient(circle at 50% 38%, var(--couleur-lueur) 0 18%, transparent 19%), radial-gradient(ellipse 60% 40% at 50% 100%, var(--couleur-lueur) 0 70%, transparent 71%), var(--couleur-surface); }
.mjc-photo img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: grayscale(var(--cj-desat, .25)) contrast(1.06); }
.mjc-sans-photo img { display: none; }
.mjc-teinte { position: absolute; inset: 0; mix-blend-mode: overlay; opacity: var(--cj-teinte, .4);
  background: linear-gradient(200deg, var(--metal-reflet) 0%, var(--metal-moyen) 45%, var(--metal-sombre) 100%); }
.mjc-trame { position: absolute; inset: 0; opacity: var(--cj-trame, .2); background: repeating-linear-gradient(0deg, var(--couleur-nuit) 0 1px, transparent 1px 3px); }
.mjc-degrade { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 42%, color-mix(in srgb, var(--couleur-surface) 70%, transparent) 66%, color-mix(in srgb, var(--couleur-surface) 94%, transparent) 84%, var(--couleur-surface) 100%); }
.mjc-brillance { position: absolute; inset: -10% -60%; opacity: 0; pointer-events: none;
  background: linear-gradient(105deg, transparent 40%, color-mix(in srgb, var(--metal-reflet) 45%, transparent) 50%, transparent 60%); }
.mjc-carte.active .mjc-brillance { opacity: 1; animation: mjc-brillance 4.5s ease-in-out infinite; }
.mj-scene[data-sans-reflet] .mjc-brillance { display: none; }
@keyframes mjc-brillance { 0% { transform: translate3d(-60%, 0, 0); } 45%, 100% { transform: translate3d(60%, 0, 0); } }
.mjc-numero { position: absolute; right: 7cqw; top: 4cqw; font: 800 19cqw/1 var(--police-titre, "Arial Narrow", sans-serif); color: transparent; -webkit-text-stroke: 1px var(--metal-clair); opacity: .85; }
.mjc-identite { position: absolute; left: 7cqw; right: 7cqw; bottom: 4cqw; }
.mjc-identite small { display: block; font: 700 3.6cqw/1 system-ui, sans-serif; letter-spacing: .3em; text-transform: uppercase; color: var(--metal-clair); }
.mjc-pseudo { margin: 1.5cqw 0 0; font: 800 15cqw/.9 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .02em; color: var(--couleur-texte); }
.mjc-panneau { box-sizing: border-box; height: var(--panneau); padding: 10px 7cqw 12px; display: grid; align-content: space-between; }
.mjc-ligne { display: flex; justify-content: space-between; gap: 8px; font: 700 12px/1.2 system-ui, sans-serif; }
.mjc-ligne span { display: block; font-size: 9px; font-weight: 600; letter-spacing: .2em; text-transform: uppercase; opacity: .55; margin-bottom: 3px; }
.mjc-ligne > div:last-child { text-align: right; }
.mjc-losange { display: inline-block; width: 7px; height: 7px; margin-right: 6px; transform: rotate(45deg) translateY(-1px); background: linear-gradient(135deg, var(--metal-reflet), var(--metal-sombre)); }
.mjc-stats { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid color-mix(in srgb, var(--metal-moyen) 35%, transparent); padding-top: 8px; text-align: center; }
.mjc-stats b { display: block; font: 700 20px/1 var(--police-titre, "Arial Narrow", sans-serif); color: var(--metal-clair); }
.mjc-stats span { font: 600 9px/1 system-ui, sans-serif; letter-spacing: .2em; text-transform: uppercase; opacity: .55; }
.mj-scene[data-compact] .mjc-panneau { padding: 6px 5cqw 7px; }
.mj-scene[data-compact] .mjc-ligne { justify-content: center; font-size: 10px; }
.mj-scene[data-compact] .mjc-ligne > div:first-child, .mj-scene[data-compact] .mjc-ligne span { display: none; }
.mj-scene[data-compact] .mjc-stats { padding-top: 4px; }
.mj-scene[data-compact] .mjc-stats b { font-size: 14px; }
.mj-scene[data-compact] .mjc-stats span { font-size: 7px; letter-spacing: .12em; }
.mjc-dos { transform: rotateY(180deg); display: grid; justify-items: center; align-content: start; text-align: center; }
.mjc-dos::before { content: ""; position: absolute; inset: 0; pointer-events: none; background-color: var(--couleur-motif); opacity: .16;
  --etoile: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.2'%3E%3Crect x='12' y='12' width='16' height='16'/%3E%3Crect x='12' y='12' width='16' height='16' transform='rotate(45 20 20)'/%3E%3C/g%3E%3Cpath d='M0 -2.5L2.5 0L0 2.5L-2.5 0Z M40 -2.5L42.5 0L40 2.5L37.5 0Z M0 37.5L2.5 40L0 42.5L-2.5 40Z M40 37.5L42.5 40L40 42.5L37.5 40Z'/%3E%3C/svg%3E");
  -webkit-mask: var(--etoile) 0 0 / 34px 34px repeat; mask: var(--etoile) 0 0 / 34px 34px repeat; }
.mjc-dos > * { position: relative; }
.mjc-dos-col { position: absolute; left: 0; top: 0; width: 100%; height: 16%; }
.mjc-dos-arabe { margin: 17cqw 0 0; font: 600 8cqw/1 "Segoe UI", "Noto Naskh Arabic", "Arial", sans-serif; color: var(--metal-moyen); }
.mjc-dos-pseudo { margin: 9cqw 0 0; font: 800 15cqw/.9 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .06em; color: var(--couleur-texte); }
.mjc-dos-numero { margin: 3cqw 0 0; font: 800 62cqw/.85 var(--police-titre, "Arial Narrow", sans-serif); letter-spacing: -.02em;
  background: linear-gradient(180deg, var(--metal-reflet) 0%, var(--metal-clair) 40%, var(--metal-moyen) 70%, var(--metal-sombre) 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; }
.mjc-dos-ourlet { position: absolute; left: 0; bottom: 0; width: 100%; height: 9%; }
.mjc-dos p, .mjc-carte p { max-width: none; opacity: 1; }
.mjc-zone--statique { position: relative; top: auto; height: auto; width: 100%; margin-top: 24px; pointer-events: auto; }
.mjc-zone--statique .mjc-cartes { position: relative; display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; perspective: none; top: auto; bottom: auto; }
.mjc-zone--statique .mjc-carte { position: relative; left: auto; top: auto; margin: 0; }
.mjc-zone--statique .mjc-survol, .mjc-zone--statique .mjc-pivot { transition: none; }
.mjc-zone--statique .mjc-carte.retournee .mjc-survol { transform: none; }
.mjc-holo { position: absolute; top: 0; bottom: 0; left: var(--holo-x); width: var(--holo-l); pointer-events: none; opacity: 0; transition: opacity .35s ease-out; }
.mjc-holo.visible { opacity: 1; }
.mjc-holo-faisceau { position: absolute; left: 0; right: 0; top: calc(var(--holo-haut) + var(--holo-h) * .67); bottom: 6px; clip-path: polygon(50% 100%, 0 0, 100% 0);
  background: linear-gradient(0deg,
    color-mix(in srgb, var(--holo-couleur) 75%, transparent) 0%,
    color-mix(in srgb, var(--holo-couleur) 52%, transparent) 12%,
    color-mix(in srgb, var(--holo-couleur) 34%, transparent) 28%,
    color-mix(in srgb, var(--holo-couleur) 20%, transparent) 46%,
    color-mix(in srgb, var(--holo-couleur) 10%, transparent) 66%,
    color-mix(in srgb, var(--holo-couleur) 4%, transparent) 84%,
    transparent 100%);
  mix-blend-mode: screen; transform-origin: 50% 100%; transform: scaleY(0); transition: transform .4s ease-out .15s; }
.mjc-holo.visible .mjc-holo-faisceau { transform: none; transition-delay: 0s; animation: mjc-holo-scintille 3.1s steps(1) infinite; }
.mjc-holo-source { position: absolute; left: 30%; right: 30%; bottom: 0; height: 12px; border-radius: 50%;
  background: radial-gradient(ellipse at center, var(--holo-couleur) 0%, color-mix(in srgb, var(--holo-couleur) 45%, transparent) 45%, transparent 72%); }
.mjc-holo-projection { position: absolute; left: 0; width: 100%; top: var(--holo-haut); height: var(--holo-h); mix-blend-mode: screen; opacity: 0; transition: opacity .18s; }
.mjc-holo.visible .mjc-holo-projection { opacity: .9; animation: mjc-holo-allumage .6s linear .42s both; }
@keyframes mjc-holo-allumage {
  0% { opacity: 0; } 12% { opacity: .85; } 20% { opacity: .05; } 34% { opacity: .9; } 42% { opacity: .2; }
  56% { opacity: .9; } 66% { opacity: .55; } 76%, 100% { opacity: .9; } }
.mjc-holo-tremble { position: absolute; inset: 0; isolation: isolate; }
.mjc-holo.visible .mjc-holo-tremble { animation: mjc-holo-tremble 2.3s steps(1) infinite; }
.mjc-holo-image { position: absolute; inset: 0; overflow: hidden; border-radius: 12px; filter: grayscale(1) contrast(1.25) brightness(1.15); }
.mjc-holo-image > .mjc-face { inset: auto; left: 0; top: 0; width: var(--carte-l); height: calc(var(--carte-l) * 1.25 + var(--panneau)); transform-origin: 0 0; transform: scale(var(--holo-echelle)); }
.mjc-holo-teinte { position: absolute; inset: 0; border-radius: 12px; background: var(--holo-couleur); mix-blend-mode: color; }
.mjc-holo-lignes { position: absolute; inset: -8px 0 0; background: repeating-linear-gradient(0deg, var(--couleur-nuit) 0 2px, transparent 2px 5px); opacity: .55; }
.mjc-holo.visible .mjc-holo-lignes { animation: mjc-holo-lignes .9s linear infinite; }
@keyframes mjc-holo-lignes { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(0, 5px, 0); } }
@keyframes mjc-holo-tremble {
  0% { transform: translate3d(0, 0, 0); opacity: 1; }
  7% { transform: translate3d(calc(var(--holo-force) * 3px), 0, 0); opacity: calc(1 - var(--holo-force) * .25); }
  9% { transform: translate3d(0, 0, 0); opacity: 1; }
  38% { transform: translate3d(calc(var(--holo-force) * -2px), 0, 0) skewX(calc(var(--holo-force) * 2deg)); opacity: calc(1 - var(--holo-force) * .4); }
  40% { transform: translate3d(0, 0, 0); opacity: 1; }
  66% { transform: translate3d(calc(var(--holo-force) * 1.5px), calc(var(--holo-force) * -1px), 0); opacity: calc(1 - var(--holo-force) * .15); }
  69% { transform: translate3d(0, 0, 0); opacity: 1; }
  88% { transform: translate3d(calc(var(--holo-force) * -4px), 0, 0); opacity: calc(1 - var(--holo-force) * .5); }
  89% { transform: translate3d(0, 0, 0); opacity: 1; } }
@keyframes mjc-holo-scintille { 0% { opacity: 1; } 37% { opacity: .8; } 39% { opacity: 1; } 87% { opacity: .65; } 89% { opacity: 1; } }
.mjc-zone--statique .mjc-holo { display: none; }
.mjc-holo--agent .mjc-holo-image { border-radius: 0; overflow: visible; }
.mjc-holo-agent-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; }
.mjc-holo--agent .mjc-holo-teinte { border-radius: 0; -webkit-mask: var(--agent-masque) center / contain no-repeat; mask: var(--agent-masque) center / contain no-repeat; }
.mjc-holo--agent .mjc-holo-lignes { -webkit-mask: var(--agent-masque) center / contain no-repeat; mask: var(--agent-masque) center / contain no-repeat; }
.mjc-holo--agent .mjc-holo-faisceau { left: 30%; right: 30%; top: calc(var(--holo-haut) + var(--holo-h) * .66); }
.mjc-holo--agent .mjc-holo-source { left: 38%; right: 38%; }
.mjc-holo--agent.visible .mjc-holo-tremble { animation-delay: -1.1s; }
.mjc-obscurite { position: absolute; inset: -300vh -300vw; z-index: 45; background: var(--couleur-nuit); opacity: 0; pointer-events: none; transition: opacity .5s ease-out; }
.mj-obscurite-fond { position: absolute; inset: 0; z-index: 1; background: var(--couleur-nuit); opacity: 0; pointer-events: none; transition: opacity .5s ease-out; }
.mj-toile { transition: opacity .5s ease-out; }
.mj-scene[data-holo] .mjc-obscurite, .mj-scene[data-holo] .mj-obscurite-fond { opacity: var(--holo-obscurite, .85); }
.mj-scene[data-holo] .mj-toile { opacity: calc(1 - var(--holo-obscurite, .85)); }
.mj-commandes { position: absolute; left: 50%; bottom: 12px; z-index: 5; transform: translateX(-50%); display: flex; align-items: center; gap: 10px;
  padding: 8px 12px; border-radius: 999px; background: color-mix(in srgb, var(--couleur-surface) 88%, transparent);
  border: 1px solid color-mix(in srgb, var(--couleur-texte) 18%, transparent); color: var(--couleur-texte); font: 600 12px/1 system-ui, sans-serif; }
.mj-commandes button { padding: 6px 12px; border: 0; border-radius: 999px; cursor: pointer; font: inherit; color: var(--couleur-surface);
  background: linear-gradient(135deg, var(--metal-sombre), var(--metal-moyen) 45%, var(--metal-reflet) 55%, var(--metal-moyen)); }
.mj-commandes input[type="range"] { width: clamp(90px, 22vw, 220px); accent-color: var(--metal-moyen); }
.mj-commandes output { min-width: 5ch; text-align: right; font-family: ui-monospace, Consolas, monospace; }
.mj-scene[data-statique] .mj-toile, .mj-scene[data-statique] .mj-commandes, .mj-scene[data-statique] .mj-tissu { display: none; }
html[data-qualite="allege"] .mj-plis, html[data-qualite="minimal"] .mj-plis { display: none; }
html[data-qualite="allege"] .mj-imprime, html[data-qualite="minimal"] .mj-imprime { animation: none; }
html[data-qualite="minimal"] .mj-imprime::before, html[data-qualite="minimal"] .mj-dos::before { display: none; }`,
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
    scene.className = 'mj-scene';
    if (statique) scene.dataset.statique = '1';
    const nuque = '<p class="mj-nuque" lang="ar" dir="rtl">منصور</p>';
    const ourletDos = '<svg class="mj-ourlet" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true"><polygon points="0,20 50,6 100,20" style="fill:var(--mj-ourlet)"/><polyline points="0,20 50,6 100,20" fill="none" style="stroke:var(--metal-moyen)" stroke-width="1.2" vector-effect="non-scaling-stroke"/></svg>';
    const joueurs = this.joueurs;
    const N = joueurs.length;
    const colCarte = '<svg class="mjc-dos-col" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true">' +
      '<polygon points="30,0 50,9 70,0 64,0 50,5.5 36,0" style="fill:var(--metal-moyen)"/>' +
      '<polyline points="0,14 16,0" fill="none" style="stroke:var(--metal-sombre)" stroke-width=".8" vector-effect="non-scaling-stroke"/>' +
      '<polyline points="100,14 84,0" fill="none" style="stroke:var(--metal-sombre)" stroke-width=".8" vector-effect="non-scaling-stroke"/></svg>';
    const ourletCarte = '<svg class="mjc-dos-ourlet" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true">' +
      '<polygon points="0,20 50,4 100,20" style="fill:var(--couleur-nuit)"/>' +
      '<polyline points="0,20 50,4 100,20" fill="none" style="stroke:var(--metal-moyen)" stroke-width="1.5" vector-effect="non-scaling-stroke"/></svg>';
    const carte = (j, i) =>
      '<div class="mjc-carte" data-i="' + i + '" role="button" tabindex="0" aria-label="' + j.pseudo + ', ' + j.role + ' : retourner la carte">' +
        '<div class="mjc-survol"><div class="mjc-flotte"><div class="mjc-pivot">' +
          '<div class="mjc-face mjc-avant">' +
            '<div class="mjc-photo"><img src="' + j.photo + '" alt="' + j.pseudo + '" decoding="async">' +
              '<span class="mjc-teinte"></span><span class="mjc-trame"></span><span class="mjc-degrade"></span><span class="mjc-brillance"></span>' +
              '<span class="mjc-numero">' + j.numero + '</span>' +
              '<div class="mjc-identite"><small>' + j.role + '</small><p class="mjc-pseudo">' + j.pseudo + '</p></div>' +
            '</div>' +
            '<div class="mjc-panneau">' +
              '<div class="mjc-ligne"><div><span>Rôle</span>' + j.role + '</div><div><span>Agent favori</span><i class="mjc-losange"></i>' + j.agent + '</div></div>' +
              '<div class="mjc-stats"><div><b>' + j.acs + '</b><span>ACS</span></div><div><b>' + j.kd + '</b><span>K/D</span></div><div><b>' + j.hs + '%</b><span>HS</span></div></div>' +
            '</div>' +
          '</div>' +
          '<div class="mjc-face mjc-dos" aria-hidden="true">' + colCarte +
            '<p class="mjc-dos-arabe" lang="ar" dir="rtl">منصور</p>' +
            '<p class="mjc-dos-pseudo">' + j.pseudo + '</p>' +
            '<p class="mjc-dos-numero">' + j.numero + '</p>' + ourletCarte +
          '</div>' +
        '</div>' +
        '<span class="mjc-voile"></span><span class="mjc-contour"></span></div>' +
        '<span class="mjc-indice">Voir le joueur</span></div>' +
      '</div>';
    const zoneCartes = classe =>
      '<div class="mjc-zone ' + classe + '">' +
        '<div class="mjc-cartes"><span class="mjc-obscurite"></span>' + joueurs.map(carte).join('') + '</div>' +
        '<div class="mjc-holo" aria-hidden="true"><div class="mjc-holo-faisceau"></div>' +
          '<div class="mjc-holo-projection"><div class="mjc-holo-tremble"><div class="mjc-holo-image"></div><span class="mjc-holo-teinte"></span><span class="mjc-holo-lignes"></span></div></div>' +
          '<div class="mjc-holo-source"></div></div>' +
        '<div class="mjc-holo mjc-holo--agent" aria-hidden="true"><div class="mjc-holo-faisceau"></div>' +
          '<div class="mjc-holo-projection"><div class="mjc-holo-tremble"><div class="mjc-holo-image"><img class="mjc-holo-agent-img" alt="" decoding="async"></div><span class="mjc-holo-teinte"></span><span class="mjc-holo-lignes"></span></div></div>' +
          '<div class="mjc-holo-source"></div></div>' +
      '</div>';
    scene.innerHTML =
      '<div class="mj-defilement" tabindex="0" role="region" aria-label="Maquette de page : faites défiler pour voir le site enfiler le maillot">' +
        '<section class="mj-hero"><div class="mj-etage">' +
          '<div class="mj-contenu">' +
            '<svg class="mj-logo" viewBox="-6 -8 112 114" aria-label="Logo M">' +
              '<defs><linearGradient id="mj-reflet" gradientUnits="userSpaceOnUse" x1="-40" y1="0" x2="0" y2="-20">' +
                '<stop offset="0" style="stop-color:var(--metal-moyen)"/><stop offset=".5" style="stop-color:var(--metal-reflet)"/><stop offset="1" style="stop-color:var(--metal-moyen)"/>' +
                '<animateTransform attributeName="gradientTransform" type="translate" values="-20 0; 170 0; 170 0" keyTimes="0; .45; 1" dur="3.6s" repeatCount="indefinite"/>' +
              '</linearGradient></defs>' +
              '<polygon points="0,0 22,0 50,48 78,0 100,0 100,100 80,100 80,40 50,88 20,40 20,100 0,100" style="fill:var(--metal-moyen)"/>' +
              '<polygon class="mj-brillance" points="0,0 22,0 50,48 78,0 100,0 100,100 80,100 80,40 50,88 20,40 20,100 0,100" fill="url(#mj-reflet)" opacity=".9"/>' +
              '<polygon class="etoile" style="fill:var(--metal-reflet)" points="' + this.pointsEtoile(50, 15, 14, 8).map(p => p.join(',')).join(' ') + '"/>' +
            '</svg>' +
            '<p class="mj-mot">MANSUR</p>' +
            '<p class="mj-arabe" lang="ar" dir="rtl">منصور</p>' +
            '<p class="mj-accroche">Esport · Saison 2026-27</p>' +
          '</div>' +
          '<span class="mj-obscurite-fond"></span>' +
          '<div class="mj-tissu">' +
            '<div class="mj-imprime" aria-hidden="true"><div class="mj-dos mj-dos--tissu">' + nuque + ourletDos + '</div></div>' +
            '<div class="mj-plis" aria-hidden="true"><div class="mj-pli mj-pli-a"></div><div class="mj-pli mj-pli-b"></div></div>' +
            (statique ? '' : zoneCartes('mjc-zone--tissu')) +
          '</div>' +
          '<canvas class="mj-toile" aria-hidden="true"></canvas>' +
        '</div></section>' +
        '<section class="mj-dos mj-dos--statique">' + nuque + (statique ? zoneCartes('mjc-zone--statique') : '') + ourletDos + '</section>' +
      '</div>' +
      '<div class="mj-commandes"><button type="button" data-lecture>Lecture</button>' +
        '<input type="range" min="0" max="1000" step="1" value="0" aria-label="Progression de la transition et des cartes"><output>0 %</output></div>';
    conteneur.appendChild(scene);
    const defilement = scene.querySelector('.mj-defilement');
    const contenu = scene.querySelector('.mj-contenu');
    const toile = scene.querySelector('.mj-toile');
    const tissu = scene.querySelector('.mj-tissu');
    const plisCalque = scene.querySelector('.mj-plis');
    const ctx = toile.getContext('2d');
    const brillance = scene.querySelector('.mj-brillance');
    const animationReflet = scene.querySelector('animateTransform');
    const boutonLecture = scene.querySelector('[data-lecture]');
    const curseur = scene.querySelector('input[type="range"]');
    const affichage = scene.querySelector('output');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cartes = [...scene.querySelectorAll('.mjc-carte')];
    const voiles = cartes.map(c => c.querySelector('.mjc-voile'));
    const flottes = cartes.map(c => c.querySelector('.mjc-flotte'));
    const holo = scene.querySelector('.mjc-holo');
    const holoImage = scene.querySelector('.mjc-holo-image');
    const holoAgent = scene.querySelector('.mjc-holo--agent');
    const imageAgent = scene.querySelector('.mjc-holo-agent-img');
    if (imageAgent) imageAgent.addEventListener('error', () => holoAgent.classList.remove('visible'));
    const nuqueTissu = scene.querySelector('.mj-dos--tissu .mj-nuque');
    scene.querySelectorAll('.mjc-photo img').forEach(img => img.addEventListener('error', () => img.parentElement.classList.add('mjc-sans-photo')));
    const styles = getComputedStyle(scene);
    const lireCouleur = nom => styles.getPropertyValue(nom).trim() || '#C9A646';
    const orTheme = { sombre: lireCouleur('--metal-sombre'), moyen: lireCouleur('--metal-moyen'), clair: lireCouleur('--metal-clair'), reflet: lireCouleur('--metal-reflet') };
    let or = { ...orTheme };
    let remplissage = lireCouleur('--couleur-surface');
    let couleurMotif = lireCouleur('--couleur-motif');
    const rgba = (hex, a) => { const n = parseInt(hex.replace('#', '').slice(0, 6), 16); return 'rgba(' + (n >> 16 & 255) + ',' + (n >> 8 & 255) + ',' + (n & 255) + ',' + a.toFixed(3) + ')'; };
    const melange = (a, b, t) => {
      const ca = parseInt(a.replace('#', '').slice(0, 6), 16), cb = parseInt(b.replace('#', '').slice(0, 6), 16);
      const canal = decalage => Math.round(((ca >> decalage) & 255) * (1 - t) + ((cb >> decalage) & 255) * t);
      return '#' + [16, 8, 0].map(d => canal(d).toString(16).padStart(2, '0')).join('');
    };
    const etage = scene.querySelector('.mj-etage');
    const dosStatique = scene.querySelector('.mj-dos--statique');
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
      scene.style.setProperty('--mj-tissu', remplissage);
      scene.style.setProperty('--mj-encre', encre);
      scene.style.setProperty('--mj-motif-couleur', couleurMotif);
      scene.style.setProperty('--mj-ourlet', blanc ? encre : 'transparent');
      for (const el of [etage.querySelector('.mj-tissu'), dosStatique]) {
        for (const [nom, valeur] of Object.entries(or)) {
          if (blanc) el.style.setProperty('--metal-' + nom, valeur); else el.style.removeProperty('--metal-' + nom);
        }
      }
      const profondeur = r.plisProfondeur;
      scene.style.setProperty('--plis-clair', blanc ? rgba('#FFFFFF', 0.5 * profondeur) : rgba(orTheme.clair, 0.18 * profondeur));
      scene.style.setProperty('--plis-sombre', rgba('#000000', (blanc ? 0.22 : 0.5) * profondeur));
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
    let margeCartes = 0, longueurCartes = 0, largeurCarte = 200;
    let positionCartes = 0;
    let actif = -1, dernierePlace = '';
    const verrouillee = cartes.map(() => false);
    let apercu = -1;
    let clicEnAttente = null;
    let centreActif = 0;
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
      margeCartes = statique ? 0 : (r.cartesMarges / 100) * defilement.clientHeight;
      longueurCartes = statique ? 0 : (N - 1) * (r.cartesLongueur / 100) * defilement.clientHeight;
      scene.style.setProperty('--long', (longueur + 2 * margeCartes + longueurCartes) + 'px');
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
      const tailleAvec = panneau => Math.min(380, largeur * (etroit ? 0.5 : 0.34), (zoneHauteur - panneau) / 1.25);
      let panneau = 104;
      if (tailleAvec(panneau) < 190) panneau = 62;
      largeurCarte = Math.max(110, tailleAvec(panneau));
      if (panneau < 104) scene.dataset.compact = ''; else delete scene.dataset.compact;
      centreActif = (etroit ? -0.14 : r.positionActive) * largeur;
      const hauteurCarte = largeurCarte * 1.25 + panneau;
      const libreDroite = largeur / 2 + centreActif - largeurCarte / 2 - 24;
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
      const libreAgent = largeur - 16 - (largeur / 2 + centreActif + largeurCarte / 2 + 24);
      const coteAgent = Math.min((zoneHauteur - ecartFaisceau) / 0.95, libreAgent / 0.48, (hauteurCarte * r.holoTaille) / 0.87);
      agentDisponible = !etroit && libreAgent >= 100 && coteAgent >= 160;
      if (agentDisponible) {
        holoAgent.style.setProperty('--holo-l', coteAgent + 'px');
        holoAgent.style.setProperty('--holo-h', coteAgent + 'px');
        holoAgent.style.setProperty('--holo-x', (largeur / 2 + centreActif + largeurCarte / 2 + 24 + (libreAgent - coteAgent) / 2) + 'px');
        holoAgent.style.setProperty('--holo-haut', Math.max(0, zoneHauteur - ecartFaisceau - coteAgent * 0.95) + 'px');
      }
      if (!holoDisponible || !r.hologramme) cacherHologramme();
      else if (!agentDisponible || !r.holoAgent) holoAgent.classList.remove('visible');
      scene.style.setProperty('--zone-haut', zoneHaut + 'px');
      scene.style.setProperty('--zone-hauteur', zoneHauteur + 'px');
      scene.style.setProperty('--carte-l', largeurCarte + 'px');
      scene.style.setProperty('--panneau', panneau + 'px');
      dernierePlace = '';
    }
    function appliquerReglagesCartes() {
      scene.style.setProperty('--cj-duree', r.dureeRetournement + 's');
      scene.style.setProperty('--cj-courbe', 'cubic-bezier(.35, ' + (1 + 0.7 * r.rebond).toFixed(2) + ', .45, 1)');
      scene.style.setProperty('--cj-agrandi', String(r.agrandissement));
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
    }
    const debutCartes = () => longueur + margeCartes;
    const progressionCartes = () => (longueurCartes > 0 ? Math.min(1, Math.max(0, (defilement.scrollTop - debutCartes()) / longueurCartes)) : 0);
    const longueurTotale = () => longueur + 2 * margeCartes + longueurCartes;
    const progressionTotale = () => (longueurTotale() > 0 ? Math.min(1, Math.max(0, defilement.scrollTop / longueurTotale())) : 0);
    function positionVisee() {
      const brute = progressionCartes() * (N - 1);
      const base = Math.floor(brute), f = brute - base;
      const aimantee = f < 0.5 ? 0.5 * Math.pow(2 * f, 3) : 1 - 0.5 * Math.pow(2 - 2 * f, 3);
      return Math.min(N - 1, base + (1 - r.cartesAimant) * f + r.cartesAimant * aimantee);
    }
    function placerCartes() {
      const cle = positionCartes.toFixed(4) + '|' + largeurCarte + '|' + apercu;
      if (cle === dernierePlace) return;
      dernierePlace = cle;
      const L = largeurCarte, s = r.tailleSuivante, ecart = r.ecart * L, visibles = r.cartesVisibles;
      cartes.forEach((carte, i) => {
        const d = i - positionCartes;
        let x, echelle, opacite, voile, angle;
        if (d >= 0) {
          x = ecart * (s === 1 ? d : (1 - Math.pow(s, d)) / (1 - s));
          echelle = Math.pow(s, d);
          opacite = d <= visibles ? 1 : Math.max(0, 1 - (d - visibles));
          voile = Math.min(0.92, 1 - Math.pow(1 - r.ombreSuivante, d));
          angle = -r.inclinaison * Math.min(d, 1);
        } else {
          const g = Math.max(d, -1.5);
          x = g * L * 1.1;
          echelle = 1 + 0.08 * g;
          opacite = Math.max(0, 1 + g * 1.3);
          voile = Math.min(1, -g) * 0.4;
          angle = r.inclinaison * Math.min(1, -g);
        }
        carte.style.transform = 'translate3d(' + (x + centreActif).toFixed(1) + 'px, 0, 0) rotateY(' + angle.toFixed(2) + 'deg) scale(' + echelle.toFixed(4) + ')';
        carte.style.opacity = opacite.toFixed(3);
        carte.style.visibility = opacite < 0.002 ? 'hidden' : '';
        carte.style.zIndex = String(50 - Math.round(Math.abs(d) * 10));
        voiles[i].style.opacity = (i === apercu ? voile * 0.35 : voile).toFixed(3);
      });
      const nouvelActif = Math.round(positionCartes);
      if (nouvelActif !== actif) {
        actif = nouvelActif;
        cartes.forEach((carte, i) => {
          carte.classList.toggle('active', i === actif);
          if (i !== actif) { verrouillee[i] = false; retourner(i, false); }
        });
      }
    }
    let derniereImageCartes = 0;
    function suivreCartes(temps) {
      const ecart = derniereImageCartes ? Math.min(0.05, (temps - derniereImageCartes) / 1000) : 1 / 60;
      derniereImageCartes = temps;
      const visee = positionVisee();
      const suivi = r.cartesInertie <= 0 ? 1 : 1 - Math.pow(1 - (1 - r.cartesInertie) * 0.35 - 0.02, ecart * 60);
      positionCartes += (visee - positionCartes) * suivi;
      if (Math.abs(visee - positionCartes) < 0.0005) positionCartes = visee;
      placerCartes();
      if (clicEnAttente !== null && actif === clicEnAttente && Math.abs(positionCartes - clicEnAttente) < 0.02) {
        const i = clicEnAttente;
        clicEnAttente = null;
        cartes[i].focus({ preventScroll: true });
        if (apercu === i) finApercu();
        verrouillee[i] = true;
        retourner(i, true);
      }
    }
    function montrerHologramme(i) {
      if (!holoDisponible || !r.hologramme) return;
      holoImage.replaceChildren(cartes[i].querySelector('.mjc-avant').cloneNode(true));
      holoCarte = i;
      holo.classList.add('visible');
      scene.dataset.holo = '';
      if (agentDisponible && r.holoAgent && joueurs[i].agentImage) {
        if (imageAgent.getAttribute('src') !== joueurs[i].agentImage) imageAgent.src = joueurs[i].agentImage;
        holoAgent.style.setProperty('--agent-masque', 'url("' + joueurs[i].agentImage + '")');
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
      suivreCartes(temps);
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
      const duree = 4000 + N * 1600;
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
      dernierePlace = '';
      if (!statique) placerCartes();
    }
    cartes.forEach((carte, i) => {
      carte.addEventListener('pointerenter', e => {
        if (e.pointerType !== 'mouse') return;
        if (statique) { retourner(i, true); return; }
        if (carte.classList.contains('retournee')) return;
        finApercu(); apercu = i; carte.classList.add('apercu'); dernierePlace = ''; placerCartes();
      });
      carte.addEventListener('pointerleave', e => {
        if (e.pointerType !== 'mouse') return;
        if (apercu === i) finApercu();
        if (statique && !verrouillee[i]) retourner(i, false);
      });
      const activer = () => {
        if (!statique && i !== actif) {
          arreterLecture();
          clicEnAttente = i;
          defilement.scrollTo({ top: versCarte(i), behavior: 'smooth' });
        } else if (verrouillee[i]) {
          verrouillee[i] = false;
          retourner(i, false);
        } else {
          finApercu();
          verrouillee[i] = true;
          retourner(i, true);
        }
      };
      carte.addEventListener('click', activer);
      carte.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activer(); } });
    });
    const versCarte = i => debutCartes() + (i / (N - 1)) * longueurCartes;
    const reprendreLaMain = () => { arreterLecture(); clicEnAttente = null; };
    defilement.addEventListener('wheel', reprendreLaMain, { passive: true });
    defilement.addEventListener('touchstart', reprendreLaMain, { passive: true });
    const observateurVisibilite = new IntersectionObserver(entrees => { visible = entrees[0].isIntersecting; demarrer(); });
    observateurVisibilite.observe(scene);
    const observateurTaille = new ResizeObserver(() => { mettreEnPage(); });
    observateurTaille.observe(defilement);
    mettreEnPage();
    appliquerReflet();
    if (!statique) { positionCartes = positionVisee(); placerCartes(); }
    demarrer();
    return {
      mettreAJour(nouveaux) {
        const p = progressionTotale();
        r = { ...nouveaux };
        mettreEnPage();
        defilement.scrollTop = p * longueurTotale();
        positionCartes = positionVisee();
        dernierePlace = '';
        appliquerReflet();
      },
      detruire() {
        arreterLecture();
        cancelAnimationFrame(idImage); idImage = 0; visible = false;
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
enregistrerEffet(EffetMansurJoueurs);
