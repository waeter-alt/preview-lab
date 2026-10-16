const EffetHologrammeJoueur = {
  id: 'hologramme-joueur',
  nom: 'Labo - HOLOGRAMME',
  description: 'Le joueur choisi, retourné sur le dos de son maillot, avec ses deux hologrammes : sa fiche (photo, description, setup) à gauche, son agent favori devant son grand nom à droite. C\'est l\'état final de la sélection dans Labo - JOUEURS, isolé pour travailler les hologrammes et la description du joueur.',
  variables: ['--metal-sombre', '--metal-moyen', '--metal-clair', '--metal-reflet', '--couleur-surface', '--couleur-lueur', '--couleur-texte', '--couleur-motif', '--couleur-nuit', '--police-titre'],
  base: 'ressources-maquette/',
  joueurs: [
    { numero: '01', pseudo: 'Sevroze', identite: 'Sami · 25 ans · Côte d\'Azur', role: 'Second duelliste', agent: 'Yoru', icone: 'duelliste', dossier: 'yoru',
      bio: ['Joue à Valorant depuis mars 2023.', 'Passé de duelliste entry à smoker, puis second duelliste (Yoru, Phoenix).', 'Vainqueur Élite 2 et Élite 5 sur le circuit Premier.'],
      setup: [['Clavier', 'Razer Huntsman Mini'], ['Souris', 'Logitech G PRO X Superlight 2 DEX'], ['Tapis', 'Artisan FX Zero Soft XL'], ['Écouteurs', 'Moondrop Chu II']] },
    { numero: '02', pseudo: 'Shiaga', identite: 'IGL · initiateur de l\'équipe', role: 'Initiateur · IGL', agent: 'Sova', icone: 'initiateur', dossier: 'sova',
      bio: ['Joue depuis 4 ans, « toujours la niaque ».', 'Pointilleux et exigeant, et ça se voit dans son lead.', 'Sait aussi s\'amuser et prendre les choses à la rigolade.'],
      setup: [['Clavier', 'Wooting 60HE+'], ['Casque', 'Razer BlackShark V3'], ['Souris', 'Logitech Superlight 2 (8 kHz)']] },
    { numero: '03', pseudo: 'Medhielm', identite: 'Tristan · 27 ans', role: 'Contrôleur · smoker', agent: 'Omen', icone: 'controleur', dossier: 'omen',
      bio: ['Joueur compétitif, le smoker de l\'équipe.', 'Passionné de danse depuis l\'enfance.'],
      setup: [['Clavier', 'Wooting 80HE+'], ['Souris', 'Logitech Pro X Superlight 2 SE'], ['Écouteurs', 'Linsoul Kiwi Ears']] },
    { numero: '04', pseudo: 'Blackkzon', identite: 'Jason · 23 ans', role: 'Duelliste entry', agent: 'Jett', icone: 'duelliste', dossier: 'jett',
      bio: ['Joue à Valorant depuis 6 ans, à fond depuis au moins 4 ans.', 'En dehors du jeu : cuisine, lecture, temps avec ses amis.'],
      setup: [['Souris', 'Razer DeathAdder V3 Pro'], ['Clavier', 'Keychron K2 Ultra'], ['Casque', 'HyperX Cloud III']] },
    { numero: '05', pseudo: 'Tsolma', identite: 'Fiche à venir', role: 'Rôle à confirmer', agent: 'Killjoy', icone: 'sentinelle', dossier: 'killjoy',
      bio: ['Arrivé dans l\'équipe à la mi-2026.', 'Sa fiche joueur n\'a pas encore été reçue.'], setup: [] }
  ],
  parametres: [
    { categorie: 'Joueur', id: 'joueur', libelle: 'Joueur · affiché', type: 'choix', defaut: '0',
      options: [{ valeur: '0', libelle: '01 · Sevroze' }, { valeur: '1', libelle: '02 · Shiaga' }, { valeur: '2', libelle: '03 · Medhielm' }, { valeur: '3', libelle: '04 · Blackkzon' }, { valeur: '4', libelle: '05 · Tsolma' }] },
    { categorie: 'Carte', id: 'tailleChoisie', libelle: 'Carte · taille (1 = la plus grande possible)', type: 'nombre', min: 0.5, max: 1, pas: 0.02, defaut: 0.74 },
    { categorie: 'Carte', id: 'rappelClic', libelle: 'Carte · pastille « Retourner la carte »', type: 'interrupteur', defaut: true },
    { categorie: 'Carte', id: 'flottementCarte', libelle: 'Carte · flottement (px, 0 = immobile)', type: 'nombre', min: 0, max: 20, pas: 1, defaut: 6 },
    { categorie: 'Hologramme', id: 'hologramme', libelle: 'Hologramme · projeter la fiche du joueur à gauche', type: 'interrupteur', defaut: true },
    { categorie: 'Hologramme', id: 'holoAgent', libelle: 'Hologramme · projeter l\'agent favori à droite', type: 'interrupteur', defaut: true },
    { categorie: 'Hologramme', id: 'holoCouleur', libelle: 'Hologramme · couleur', type: 'couleur', defaut: '#8FB0CC' },
    { categorie: 'Hologramme', id: 'holoTaille', libelle: 'Hologramme · largeur de la fiche (par rapport à la carte)', type: 'nombre', min: 1, max: 2, pas: 0.05, defaut: 1.4 },
    { categorie: 'Hologramme', id: 'holoObscurite', libelle: 'Hologramme · assombrissement de la scène (0 = aucun)', type: 'nombre', min: 0, max: 0.9, pas: 0.05, defaut: 0.85 },
    { categorie: 'Hologramme', id: 'holoTremblement', libelle: 'Hologramme · tremblement (0 = stable)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.5 },
    { categorie: 'Hologramme', id: 'nomFond', libelle: 'Hologramme · grand nom derrière l\'agent (0 = caché)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.3 }
  ],
  css: `
.hj-scene { position: absolute; inset: 0; overflow: hidden; }
.hj-obscurite { position: absolute; inset: 0; background: var(--couleur-nuit); opacity: var(--holo-obscurite, .85); pointer-events: none; }
.hj-zone { position: absolute; left: 0; right: 0; top: var(--zone-haut); height: var(--zone-hauteur); }
.hj-carte { position: absolute; left: 50%; top: 50%; width: var(--carte-l); height: calc(var(--carte-l) * 1.25 + var(--panneau));
  margin-left: calc(var(--carte-l) / -2); margin-top: calc((var(--carte-l) * 1.25 + var(--panneau)) / -2);
  transform: scale(var(--carte-echelle, .74)); color: var(--hj-encre, var(--couleur-texte)); text-align: left; }
.hj-flotte { position: absolute; inset: 0; }
.hj-scene[data-flotte] .hj-flotte { animation: hj-flotte 3.2s ease-in-out infinite; }
@keyframes hj-flotte {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
  30% { transform: translate3d(0, calc(var(--hj-flotte, 6px) * -1), 0) rotate(.6deg); }
  70% { transform: translate3d(0, calc(var(--hj-flotte, 6px) * .5), 0) rotate(-.5deg); } }
.hj-face { position: absolute; inset: 0; overflow: hidden; border-radius: 12px; border: 1.5px solid transparent;
  container-type: inline-size; box-shadow: 0 18px 40px -18px var(--couleur-nuit);
  background: linear-gradient(var(--hj-fond, var(--couleur-surface)), var(--hj-fond, var(--couleur-surface))) padding-box,
              linear-gradient(150deg, var(--metal-reflet), var(--metal-sombre) 35%, var(--metal-clair) 65%, var(--metal-sombre)) border-box; }
.hj-face p { margin: 0; max-width: none; opacity: 1; }
.hj-dos { display: grid; justify-items: center; align-content: start; text-align: center; }
.hj-dos::before { content: ""; position: absolute; inset: 0; pointer-events: none; background-color: var(--couleur-motif); opacity: .16;
  --etoile: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.2'%3E%3Crect x='12' y='12' width='16' height='16'/%3E%3Crect x='12' y='12' width='16' height='16' transform='rotate(45 20 20)'/%3E%3C/g%3E%3Cpath d='M0 -2.5L2.5 0L0 2.5L-2.5 0Z M40 -2.5L42.5 0L40 2.5L37.5 0Z M0 37.5L2.5 40L0 42.5L-2.5 40Z M40 37.5L42.5 40L40 42.5L37.5 40Z'/%3E%3C/svg%3E");
  -webkit-mask: var(--etoile) 0 0 / 34px 34px repeat; mask: var(--etoile) 0 0 / 34px 34px repeat; }
.hj-dos > * { position: relative; }
.hj-dos-col { position: absolute !important; left: 0; top: 0; width: 100%; height: 16%; }
.hj-dos-arabe { margin-top: 17cqw !important; font: 600 8cqw/1 "Segoe UI", "Noto Naskh Arabic", "Arial", sans-serif; color: var(--metal-moyen); }
.hj-dos-pseudo { margin-top: 9cqw !important; font: 800 15cqw/.9 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .06em; color: var(--hj-encre, var(--couleur-texte)); }
.hj-dos-numero { margin-top: 3cqw !important; font: 800 62cqw/.85 var(--police-titre, "Arial Narrow", sans-serif); letter-spacing: -.02em;
  background: linear-gradient(180deg, var(--metal-reflet) 0%, var(--metal-clair) 40%, var(--metal-moyen) 70%, var(--metal-sombre) 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; }
.hj-dos-ourlet { position: absolute !important; left: 0; bottom: 0; width: 100%; height: 9%; }
.hj-rappel { position: absolute !important; left: 50%; bottom: 13%; display: inline-flex; align-items: center; gap: .5em; padding: .55em 1.1em; border-radius: 999px;
  white-space: nowrap; font: 800 4.4cqw/1 system-ui, sans-serif; letter-spacing: .14em; text-transform: uppercase; color: var(--couleur-nuit);
  background: linear-gradient(135deg, var(--metal-sombre), var(--metal-clair) 40%, var(--metal-reflet) 52%, var(--metal-clair) 64%, var(--metal-moyen));
  transform: translate(-50%, 0); }
.hj-rappel i { font-style: normal; font-size: 1.35em; line-height: 1; }
.hj-scene:not([data-rappel]) .hj-rappel { display: none; }
.hj-holo { position: absolute; top: 0; bottom: 0; left: var(--holo-x); width: var(--holo-l); pointer-events: none; opacity: 0; transition: opacity .35s ease-out;
  --holo-doux: color-mix(in srgb, var(--holo-couleur) 45%, transparent); --holo-pale: color-mix(in srgb, var(--holo-couleur) 16%, transparent); }
.hj-holo.visible { opacity: 1; }
.hj-holo-faisceau { position: absolute; left: 0; right: 0; top: calc(var(--holo-haut) + var(--holo-h) * .67); bottom: 6px; clip-path: polygon(50% 100%, 0 0, 100% 0);
  background: linear-gradient(0deg,
    color-mix(in srgb, var(--holo-couleur) 75%, transparent) 0%,
    color-mix(in srgb, var(--holo-couleur) 52%, transparent) 12%,
    color-mix(in srgb, var(--holo-couleur) 34%, transparent) 28%,
    color-mix(in srgb, var(--holo-couleur) 20%, transparent) 46%,
    color-mix(in srgb, var(--holo-couleur) 10%, transparent) 66%,
    color-mix(in srgb, var(--holo-couleur) 4%, transparent) 84%,
    transparent 100%);
  mix-blend-mode: screen; transform-origin: 50% 100%; transform: scaleY(0); transition: transform .4s ease-out .15s; }
.hj-holo.visible .hj-holo-faisceau { transform: none; transition-delay: 0s; animation: hj-holo-scintille 3.1s steps(1) infinite; }
.hj-holo-source { position: absolute; left: 30%; right: 30%; bottom: 0; height: 12px; border-radius: 50%;
  background: radial-gradient(ellipse at center, var(--holo-couleur) 0%, color-mix(in srgb, var(--holo-couleur) 45%, transparent) 45%, transparent 72%); }
.hj-holo-projection { position: absolute; left: 0; width: 100%; top: var(--holo-haut); height: var(--holo-h); mix-blend-mode: screen; opacity: 0; transition: opacity .18s; }
.hj-holo.visible .hj-holo-projection { opacity: .9; animation: hj-holo-allumage .6s linear .42s both; }
@keyframes hj-holo-allumage {
  0% { opacity: 0; } 12% { opacity: .85; } 20% { opacity: .05; } 34% { opacity: .9; } 42% { opacity: .2; }
  56% { opacity: .9; } 66% { opacity: .55; } 76%, 100% { opacity: .9; } }
.hj-holo-tremble { position: absolute; inset: 0; isolation: isolate; }
.hj-holo.visible .hj-holo-tremble { animation: hj-holo-tremble 2.3s steps(1) infinite; }
.hj-holo-image { position: absolute; inset: 0; filter: grayscale(1) contrast(1.25) brightness(1.15); }
.hj-holo-teinte { position: absolute; inset: 0; background: var(--holo-couleur); mix-blend-mode: color; }
.hj-holo-lignes { position: absolute; inset: -8px 0 0; background: repeating-linear-gradient(0deg, var(--couleur-nuit) 0 2px, transparent 2px 5px); opacity: .55; }
.hj-holo.visible .hj-holo-lignes { animation: hj-holo-lignes .9s linear infinite; }
@keyframes hj-holo-lignes { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(0, 5px, 0); } }
@keyframes hj-holo-tremble {
  0% { transform: translate3d(0, 0, 0); opacity: 1; }
  7% { transform: translate3d(calc(var(--holo-force) * 3px), 0, 0); opacity: calc(1 - var(--holo-force) * .25); }
  9% { transform: translate3d(0, 0, 0); opacity: 1; }
  38% { transform: translate3d(calc(var(--holo-force) * -2px), 0, 0) skewX(calc(var(--holo-force) * 2deg)); opacity: calc(1 - var(--holo-force) * .4); }
  40% { transform: translate3d(0, 0, 0); opacity: 1; }
  66% { transform: translate3d(calc(var(--holo-force) * 1.5px), calc(var(--holo-force) * -1px), 0); opacity: calc(1 - var(--holo-force) * .15); }
  69% { transform: translate3d(0, 0, 0); opacity: 1; }
  88% { transform: translate3d(calc(var(--holo-force) * -4px), 0, 0); opacity: calc(1 - var(--holo-force) * .5); }
  89% { transform: translate3d(0, 0, 0); opacity: 1; } }
@keyframes hj-holo-scintille { 0% { opacity: 1; } 37% { opacity: .8; } 39% { opacity: 1; } 87% { opacity: .65; } 89% { opacity: 1; } }
.hj-holo--fiche .hj-holo-image { container-type: inline-size; filter: none; }
.hj-fiche { position: absolute; inset: 0; box-sizing: border-box; padding: 5.5cqw 6cqw; color: var(--holo-couleur);
  background: linear-gradient(160deg, var(--holo-pale), transparent 75%); clip-path: polygon(0 0, calc(100% - 5cqw) 0, 100% 5cqw, 100% 100%, 5cqw 100%, 0 calc(100% - 5cqw));
  display: grid; align-content: start; gap: 3.4cqw; font-family: system-ui, sans-serif; }
.hj-fiche p { margin: 0; }
.hj-cadre { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
.hj-cadre polygon { fill: none; stroke: var(--holo-doux); stroke-width: 1; vector-effect: non-scaling-stroke; }
.hj-fiche-haut { display: flex; justify-content: space-between; font: 600 2.5cqw/1 ui-monospace, Consolas, monospace; letter-spacing: .2em; text-transform: uppercase; opacity: .7; }
.hj-fiche-tete { display: grid; grid-template-columns: 26cqw 1fr; gap: 4.5cqw; align-items: end; }
.hj-fiche-photo { position: relative; aspect-ratio: 1; overflow: hidden; clip-path: polygon(0 0, calc(100% - 4cqw) 0, 100% 4cqw, 100% 100%, 0 100%);
  background: radial-gradient(circle at 50% 38%, var(--couleur-lueur) 0 18%, transparent 19%), radial-gradient(ellipse 60% 40% at 50% 100%, var(--couleur-lueur) 0 70%, transparent 71%), var(--couleur-surface); }
.hj-fiche-photo img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 50% 20%; filter: grayscale(1) contrast(1.25) brightness(1.15); }
.hj-sans-photo img { display: none; }
.hj-fiche-role { display: flex; align-items: center; gap: 2cqw; font: 700 2.6cqw/1.2 system-ui, sans-serif; letter-spacing: .2em; text-transform: uppercase; }
.hj-icone { flex: none; width: 5cqw; height: 5cqw; background: var(--holo-couleur); -webkit-mask: var(--icone) center / contain no-repeat; mask: var(--icone) center / contain no-repeat; }
.hj-fiche-pseudo { margin-top: 2cqw !important; font: 800 10.5cqw/.85 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .01em; }
.hj-fiche-identite { margin-top: 2.2cqw !important; font: 600 2.7cqw/1.2 system-ui, sans-serif; letter-spacing: .08em; opacity: .75; }
.hj-fiche-bio { display: grid; gap: 1.2cqw; padding-top: 3.4cqw; border-top: 1px solid var(--holo-doux); font: 500 2.95cqw/1.32 system-ui, sans-serif; }
.hj-fiche-bio p::before { content: '◆'; margin-right: 1.8cqw; font-size: .7em; vertical-align: .15em; opacity: .7; }
.hj-fiche-titre { font: 700 2.4cqw/1 ui-monospace, Consolas, monospace; letter-spacing: .24em; text-transform: uppercase; opacity: .7; }
.hj-fiche-setup { display: grid; grid-template-columns: 1fr 1fr; gap: 2cqw 4cqw; margin-top: 2cqw; }
.hj-fiche-setup span { display: block; font: 600 2.2cqw/1 system-ui, sans-serif; letter-spacing: .2em; text-transform: uppercase; opacity: .6; margin-bottom: .8cqw; }
.hj-fiche-setup b { font: 700 2.7cqw/1.2 system-ui, sans-serif; }
.hj-holo-agent-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; }
.hj-nom-fond { position: absolute; left: 50%; top: 4%; height: 88%; aspect-ratio: 700 / 1024; transform: translateX(-50%); background: var(--holo-couleur); opacity: var(--nom-fond, .3);
  -webkit-mask: var(--fond) center / contain no-repeat; mask: var(--fond) center / contain no-repeat; }
.hj-holo--agent .hj-holo-teinte, .hj-holo--agent .hj-holo-lignes { -webkit-mask: var(--agent-masque) center / contain no-repeat; mask: var(--agent-masque) center / contain no-repeat; }
.hj-holo--fiche .hj-holo-faisceau { left: 26%; right: 26%; top: calc(var(--holo-haut) + var(--holo-h)); }
.hj-holo--agent .hj-holo-faisceau { left: 30%; right: 30%; top: calc(var(--holo-haut) + var(--holo-h) * .66); }
.hj-holo--agent .hj-holo-source { left: 38%; right: 38%; }
.hj-holo--agent.visible .hj-holo-tremble { animation-delay: -1.1s; }
.hj-scene[data-calme] .hj-flotte, .hj-scene[data-calme] .hj-holo.visible .hj-holo-faisceau, .hj-scene[data-calme] .hj-holo.visible .hj-holo-tremble,
.hj-scene[data-calme] .hj-holo.visible .hj-holo-lignes { animation: none; }
.hj-scene[data-calme] .hj-holo, .hj-scene[data-calme] .hj-holo-faisceau, .hj-scene[data-calme] .hj-holo-projection { transition: none; }
.hj-scene[data-calme] .hj-holo.visible .hj-holo-projection { animation: none; opacity: .9; }`,
  monter(conteneur, reglages, options) {
    if (!document.getElementById('css-' + this.id)) {
      const style = document.createElement('style');
      style.id = 'css-' + this.id;
      style.textContent = this.css;
      document.head.appendChild(style);
    }
    let r = { ...reglages };
    const base = this.base, joueurs = this.joueurs;
    const imageAgentDe = j => base + 'V-valorant/agents-detoures/' + j.dossier + '-full.webp';
    const url = u => 'url("' + u + '")';
    joueurs.forEach(j => { new Image().src = imageAgentDe(j); });
    const scene = document.createElement('div');
    scene.className = 'hj-scene';
    if (options.reduireAnimations) scene.dataset.calme = '1';
    const colCarte = '<svg class="hj-dos-col" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true">' +
      '<polygon points="30,0 50,9 70,0 64,0 50,5.5 36,0" style="fill:var(--metal-moyen)"/>' +
      '<polyline points="0,14 16,0" fill="none" style="stroke:var(--metal-sombre)" stroke-width=".8" vector-effect="non-scaling-stroke"/>' +
      '<polyline points="100,14 84,0" fill="none" style="stroke:var(--metal-sombre)" stroke-width=".8" vector-effect="non-scaling-stroke"/></svg>';
    const ourletCarte = '<svg class="hj-dos-ourlet" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true">' +
      '<polygon points="0,20 50,4 100,20" style="fill:var(--couleur-nuit)"/>' +
      '<polyline points="0,20 50,4 100,20" fill="none" style="stroke:var(--metal-moyen)" stroke-width="1.5" vector-effect="non-scaling-stroke"/></svg>';
    const fiche = j =>
      '<div class="hj-fiche">' +
        '<svg class="hj-cadre" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polygon points="0,0 95,0 100,5 100,100 5,100 0,95"/></svg>' +
        '<div class="hj-fiche-haut"><span>// Joueur ' + j.numero + '</span><span>Mansur Esport</span></div>' +
        '<div class="hj-fiche-tete"><div class="hj-fiche-photo"><img src="' + base + '_cartes/joueur-' + j.numero + '.jpg" alt="" decoding="async"><span class="hj-holo-teinte"></span></div>' +
          '<div><div class="hj-fiche-role"><span class="hj-icone" style=\'--icone:' + url(base + 'V-valorant/roles/' + j.icone + '.png') + '\'></span>' + j.role + '</div>' +
          '<p class="hj-fiche-pseudo">' + j.pseudo + '</p><p class="hj-fiche-identite">' + j.identite + ' · agent favori ' + j.agent + '</p></div></div>' +
        '<div class="hj-fiche-bio">' + j.bio.map(ligne => '<p>' + ligne + '</p>').join('') + '</div>' +
        (j.setup.length ? '<div><p class="hj-fiche-titre">Setup</p><div class="hj-fiche-setup">' +
          j.setup.map(([type, modele]) => '<div><span>' + type + '</span><b>' + modele + '</b></div>').join('') + '</div></div>' : '') +
      '</div>';
    const dos = j =>
      '<div class="hj-face hj-dos">' + colCarte +
        '<p class="hj-dos-arabe" lang="ar" dir="rtl">منصور</p>' +
        '<p class="hj-dos-pseudo">' + j.pseudo + '</p>' +
        '<p class="hj-dos-numero">' + j.numero + '</p>' + ourletCarte +
        '<span class="hj-rappel"><i aria-hidden="true">↻</i>Retourner la carte</span>' +
      '</div>';
    const holo = (classe, contenu) =>
      '<div class="hj-holo ' + classe + '" aria-hidden="true"><div class="hj-holo-faisceau"></div>' +
        '<div class="hj-holo-projection">' + contenu + '</div>' +
        '<div class="hj-holo-source"></div></div>';
    scene.innerHTML = '<span class="hj-obscurite"></span><div class="hj-zone">' +
      holo('hj-holo--fiche', '<div class="hj-holo-tremble"><div class="hj-holo-image"></div><span class="hj-holo-lignes"></span></div>') +
      '<div class="hj-carte" role="img"><div class="hj-flotte"></div></div>' +
      holo('hj-holo--agent', '<span class="hj-nom-fond"></span><div class="hj-holo-tremble"><div class="hj-holo-image"><img class="hj-holo-agent-img" alt="" decoding="async"></div><span class="hj-holo-teinte"></span><span class="hj-holo-lignes"></span></div>') +
      '</div>';
    conteneur.appendChild(scene);
    const holoFiche = scene.querySelector('.hj-holo--fiche');
    const holoAgent = scene.querySelector('.hj-holo--agent');
    const imageFiche = holoFiche.querySelector('.hj-holo-image');
    const imageAgent = holoAgent.querySelector('.hj-holo-agent-img');
    const carte = scene.querySelector('.hj-carte');
    const flotte = scene.querySelector('.hj-flotte');
    let joueurAffiche = -1, ficheDisponible = false, agentDisponible = false, agentManquant = false;
    imageAgent.addEventListener('error', () => { agentManquant = true; holoAgent.classList.remove('visible'); });
    const styles = getComputedStyle(scene);
    const lire = nom => styles.getPropertyValue(nom).trim() || '#000000';
    const luminance = hex => {
      const n = parseInt(hex.replace('#', '').slice(0, 6), 16);
      const canal = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
      return 0.2126 * canal(n >> 16 & 255) + 0.7152 * canal(n >> 8 & 255) + 0.0722 * canal(n & 255);
    };
    const sombre = lire('--couleur-surface'), clair = lire('--couleur-texte'), nuit = lire('--couleur-nuit');
    scene.style.setProperty('--hj-fond', luminance(nuit) <= luminance(sombre) ? nuit : sombre);
    scene.style.setProperty('--hj-encre', luminance(clair) >= luminance(sombre) ? clair : sombre);
    function afficherJoueur(i) {
      const j = joueurs[i];
      joueurAffiche = i;
      agentManquant = false;
      carte.setAttribute('aria-label', j.pseudo + ', ' + j.role + ', agent favori ' + j.agent);
      flotte.innerHTML = dos(j);
      imageFiche.innerHTML = fiche(j);
      const photo = imageFiche.querySelector('img');
      photo.addEventListener('error', () => photo.parentElement.classList.add('hj-sans-photo'));
      imageAgent.src = imageAgentDe(j);
      holoAgent.style.setProperty('--agent-masque', url(imageAgentDe(j)));
      holoAgent.style.setProperty('--fond', url(base + 'V-valorant/agents/' + j.dossier + '/fond.png'));
      holoFiche.classList.remove('visible');
      holoAgent.classList.remove('visible');
      void scene.offsetWidth;
    }
    function mettreEnPage() {
      const largeur = scene.clientWidth, hauteur = scene.clientHeight;
      const zoneHaut = 24, zoneHauteur = Math.max(160, hauteur - 48);
      const etroit = largeur < 640;
      const tailleAvec = panneau => Math.min(380, largeur * (etroit ? 0.62 : 0.34), (zoneHauteur - panneau) / 1.25);
      let panneau = 104;
      if (tailleAvec(panneau) < 190) panneau = 62;
      const largeurCarte = Math.max(110, tailleAvec(panneau));
      const largeurChoisie = largeurCarte * r.tailleChoisie;
      const libreDroite = largeur / 2 - largeurChoisie / 2 - 24;
      const ecartFaisceau = Math.max(50, zoneHauteur * 0.14);
      const cote = Math.min(largeurCarte * r.holoTaille, (libreDroite - 24) * 0.9, zoneHauteur - ecartFaisceau);
      ficheDisponible = !etroit && cote >= 220;
      if (ficheDisponible) {
        holoFiche.style.setProperty('--holo-l', cote + 'px');
        holoFiche.style.setProperty('--holo-h', cote + 'px');
        holoFiche.style.setProperty('--holo-x', ((24 + libreDroite) / 2 - cote / 2) + 'px');
        holoFiche.style.setProperty('--holo-haut', Math.max(0, zoneHauteur - ecartFaisceau - cote) + 'px');
      }
      const libreAgent = largeur - 16 - (largeur / 2 + largeurChoisie / 2 + 24);
      const coteAgent = Math.min((zoneHauteur - ecartFaisceau) / 0.95, libreAgent / 0.48);
      agentDisponible = !etroit && libreAgent >= 100 && coteAgent >= 160;
      if (agentDisponible) {
        holoAgent.style.setProperty('--holo-l', coteAgent + 'px');
        holoAgent.style.setProperty('--holo-h', coteAgent + 'px');
        holoAgent.style.setProperty('--holo-x', (largeur / 2 + largeurChoisie / 2 + 24 + (libreAgent - coteAgent) / 2) + 'px');
        holoAgent.style.setProperty('--holo-haut', Math.max(0, zoneHauteur - ecartFaisceau - coteAgent * 0.95) + 'px');
      }
      scene.style.setProperty('--zone-haut', zoneHaut + 'px');
      scene.style.setProperty('--zone-hauteur', zoneHauteur + 'px');
      scene.style.setProperty('--carte-l', largeurCarte + 'px');
      scene.style.setProperty('--panneau', panneau + 'px');
      holoFiche.classList.toggle('visible', ficheDisponible && r.hologramme);
      holoAgent.classList.toggle('visible', agentDisponible && r.holoAgent && !agentManquant);
    }
    function appliquer() {
      const i = Number(r.joueur) || 0;
      if (i !== joueurAffiche) afficherJoueur(i);
      scene.style.setProperty('--carte-echelle', String(r.tailleChoisie));
      scene.style.setProperty('--hj-flotte', r.flottementCarte + 'px');
      scene.toggleAttribute('data-flotte', r.flottementCarte > 0);
      scene.toggleAttribute('data-rappel', r.rappelClic);
      scene.style.setProperty('--holo-couleur', r.holoCouleur);
      scene.style.setProperty('--holo-force', String(r.holoTremblement));
      scene.style.setProperty('--holo-obscurite', String(r.holoObscurite));
      scene.style.setProperty('--nom-fond', String(r.nomFond));
      mettreEnPage();
    }
    const observateurTaille = new ResizeObserver(mettreEnPage);
    observateurTaille.observe(scene);
    appliquer();
    return {
      mettreAJour(nouveaux) { r = { ...nouveaux }; appliquer(); },
      detruire() { observateurTaille.disconnect(); scene.remove(); }
    };
  }
};
enregistrerEffet(EffetHologrammeJoueur);
