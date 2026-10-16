const EffetCartePortrait = {
  id: 'carte-portrait',
  nom: 'Carte · Portrait',
  description: 'Carte verticale façon carte à collectionner : la photo du joueur occupe toute la moitié haute, son pseudo géant posé dessus avec son numéro ; dessous, sa description et son équipement en objets.',
  variables: ['--couleur-nuit', '--couleur-lueur', '--couleur-surface', '--police-titre'],
  joueurs: [
    { numero: '01', pseudo: 'Sevroze', identite: 'Sami · 25 ans · Côte d\'Azur', role: 'Second duelliste', agent: 'Yoru', icone: 'duelliste',
      bio: ['Joue à Valorant depuis mars 2023.', 'De duelliste entry à smoker, puis second duelliste.', 'Vainqueur Élite 2 et Élite 5 (circuit Premier).'],
      setup: [['Clavier', 'Razer Huntsman Mini'], ['Souris', 'Logitech G Pro X Superlight 2 DEX'], ['Tapis', 'Artisan FX Zero Soft XL'], ['Écouteurs', 'Moondrop Chu II']] },
    { numero: '02', pseudo: 'Shiaga', identite: 'IGL · initiateur de l\'équipe', role: 'Initiateur · IGL', agent: 'Sova', icone: 'initiateur',
      bio: ['Joue depuis 4 ans, « toujours la niaque ».', 'Pointilleux et exigeant dans son lead.', 'Sait aussi prendre les choses à la rigolade.'],
      setup: [['Clavier', 'Wooting 60HE+'], ['Casque', 'Razer BlackShark V3'], ['Souris', 'Logitech Superlight 2 (8 kHz)']] },
    { numero: '03', pseudo: 'Medhielm', identite: 'Tristan · 27 ans', role: 'Contrôleur · smoker', agent: 'Omen', icone: 'controleur',
      bio: ['Joueur compétitif, le smoker de l\'équipe.', 'Passionné de danse depuis l\'enfance.'],
      setup: [['Clavier', 'Wooting 80HE+'], ['Souris', 'Logitech Pro X Superlight 2 SE'], ['Écouteurs', 'Linsoul Kiwi Ears']] },
    { numero: '04', pseudo: 'Blackkzon', identite: 'Jason · 23 ans', role: 'Duelliste entry', agent: 'Jett', icone: 'duelliste',
      bio: ['Joue à Valorant depuis 6 ans, à fond depuis 4 ans.', 'Hors du jeu : cuisine, lecture, temps entre amis.'],
      setup: [['Souris', 'Razer DeathAdder V3 Pro'], ['Clavier', 'Keychron K2 Ultra'], ['Casque', 'HyperX Cloud III']] },
    { numero: '05', pseudo: 'Tsolma', identite: 'Fiche à venir', role: 'Rôle à confirmer', agent: 'Killjoy', icone: 'sentinelle',
      bio: ['Arrivé dans l\'équipe à la mi-2026.', 'Sa fiche joueur n\'a pas encore été reçue.'], setup: [] }
  ],
  icones: {
    Clavier: '<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h1M9.5 10h1M13 10h1M16.5 10h1M6 14h1M17 14h1M9 14h6"/>',
    Souris: '<rect x="6.5" y="2.5" width="11" height="19" rx="5.5"/><path d="M12 2.5v6.5M6.5 9h11"/><path d="M12 5v2" stroke-width="2.4"/>',
    Casque: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="2.5" y="13.5" width="5" height="7" rx="1.6"/><rect x="16.5" y="13.5" width="5" height="7" rx="1.6"/>',
    'Écouteurs': '<circle cx="7.5" cy="9" r="3.5"/><path d="M9 12.2l1 7.3h-3l-.6-6"/><circle cx="16.5" cy="9" r="3.5"/><path d="M15 12.2l-1 7.3h3l.6-6"/>',
    Tapis: '<path d="M3 17l3-10h15l-3 10z"/><rect x="11.5" y="9" width="4" height="6" rx="2"/>'
  },
  parametres: [
    { categorie: 'Joueur', id: 'joueur', libelle: 'Joueur · affiché', type: 'choix', defaut: '0',
      options: [{ valeur: '0', libelle: '01 · Sevroze' }, { valeur: '1', libelle: '02 · Shiaga' }, { valeur: '2', libelle: '03 · Medhielm' }, { valeur: '3', libelle: '04 · Blackkzon' }, { valeur: '4', libelle: '05 · Tsolma' }] },
    { categorie: 'Carte', id: 'taille', libelle: 'Carte · hauteur (part de la hauteur de l\'écran)', type: 'nombre', min: 0.4, max: 0.95, pas: 0.01, defaut: 0.82 },
    { categorie: 'Hologramme', id: 'couleur', libelle: 'Hologramme · couleur', type: 'couleur', defaut: '#8FB0CC' },
    { categorie: 'Hologramme', id: 'texte', libelle: 'Hologramme · couleur des textes (plus clair = plus lisible)', type: 'couleur', defaut: '#DCEBF7' },
    { categorie: 'Hologramme', id: 'obscurite', libelle: 'Hologramme · assombrissement de la scène (0 = aucun)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.85 },
    { categorie: 'Hologramme', id: 'tremblement', libelle: 'Hologramme · tremblement (0 = stable)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.3 },
    { categorie: 'Hologramme', id: 'lignes', libelle: 'Hologramme · lignes de balayage (0 = aucune)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.35 },
    { categorie: 'Photo', id: 'photoTeinte', libelle: 'Photo · teinte de l\'hologramme (0 = couleurs d\'origine, 1 = monochrome)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 1 }
  ],
  css: `
.hcp-scene { position: absolute; inset: 0; overflow: hidden; container-type: size; color: var(--texte-holo); font-family: system-ui, sans-serif;
  --holo-doux: color-mix(in srgb, var(--holo) 45%, transparent); --holo-pale: color-mix(in srgb, var(--holo) 16%, transparent); }
.hcp-nuit { position: absolute; inset: 0; background: var(--couleur-nuit); opacity: var(--obscurite, .85); }
.hcp-carte { position: absolute; left: 50%; top: 50%; aspect-ratio: 3 / 4; height: min(calc(var(--taille) * 100cqh), calc(92cqw / (3 / 4)));
  transform: translate(-50%, -50%); container-type: inline-size; mix-blend-mode: screen; animation: hcp-allumage .6s linear both; }
.hcp-tremble { position: absolute; inset: 0; animation: hcp-tremble 2.3s steps(1) .6s infinite;
  clip-path: polygon(0 0, calc(100% - 6cqw) 0, 100% 6cqw, 100% 100%, 6cqw 100%, 0 calc(100% - 6cqw));
  background: linear-gradient(160deg, var(--holo-pale), color-mix(in srgb, var(--holo) 4%, transparent) 70%); }
.hcp-cadre { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 2; }
.hcp-cadre polygon { fill: none; stroke: var(--holo-doux); stroke-width: 1.2; vector-effect: non-scaling-stroke; }
.hcp-lignes { position: absolute; inset: -8px 0 0; z-index: 3; pointer-events: none; opacity: var(--lignes);
  background: repeating-linear-gradient(0deg, var(--couleur-nuit) 0 1px, transparent 1px 4px); animation: hcp-defile 1s linear infinite; }
.hcp-carte p { margin: 0; }
.hcp-photo { position: relative; overflow: hidden; isolation: isolate;
  background: radial-gradient(circle at 50% 38%, var(--couleur-lueur) 0 18%, transparent 19%), radial-gradient(ellipse 60% 40% at 50% 100%, var(--couleur-lueur) 0 70%, transparent 71%), var(--couleur-surface); }
.hcp-photo img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 50% 18%;
  filter: grayscale(var(--photo-teinte)) contrast(1.15) brightness(1.08); }
.hcp-sans-photo img { display: none; }
.hcp-teinte { position: absolute; inset: 0; background: var(--holo); mix-blend-mode: color; opacity: var(--photo-teinte); }
.hcp-etiquette { font: 600 max(10px, 2.4cqw)/1 ui-monospace, Consolas, monospace; letter-spacing: .22em; text-transform: uppercase; opacity: .75; }
.hcp-pseudo { font: 800 var(--pseudo, 14cqw)/.85 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .01em;
  text-shadow: 0 0 2.5cqw var(--holo-doux); }
.hcp-role { display: flex; align-items: center; gap: 2.2cqw; font: 700 max(11px, 3cqw)/1.15 system-ui, sans-serif; letter-spacing: .16em; text-transform: uppercase; }
.hcp-role small { display: block; font-size: .78em; font-weight: 600; opacity: .7; }
.hcp-icone { flex: none; width: 6.5cqw; height: 6.5cqw; background: var(--texte-holo); -webkit-mask: var(--icone) center / contain no-repeat; mask: var(--icone) center / contain no-repeat; }
.hcp-bio { display: grid; gap: 1.2cqw; font: 500 max(11px, 3.2cqw)/1.3 system-ui, sans-serif; }
.hcp-bio p::before { content: '◆'; margin-right: 1.8cqw; font-size: .65em; vertical-align: .18em; color: var(--holo); }
.hcp-objets { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 3cqw; }
.hcp-objet { display: grid; justify-items: center; align-content: start; gap: 1.4cqw; text-align: center; min-width: 0; }
.hcp-case { position: relative; width: 100%; aspect-ratio: 1; display: grid; place-items: center; box-sizing: border-box;
  background: linear-gradient(160deg, color-mix(in srgb, var(--holo) 26%, transparent), var(--holo-pale));
  clip-path: polygon(0 0, calc(100% - 22%) 0, 100% 22%, 100% 100%, 0 100%); }
.hcp-case::after { content: ""; position: absolute; left: 12%; right: 12%; bottom: 7%; height: 2px; background: var(--holo); opacity: .7; }
.hcp-case svg { width: 54%; height: 54%; fill: none; stroke: var(--texte-holo); stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round;
  filter: drop-shadow(0 0 3px var(--holo)); }
.hcp-case i { position: absolute; left: 9%; top: 8%; font: 700 max(8px, 1.9cqw)/1 ui-monospace, Consolas, monospace; font-style: normal; letter-spacing: .12em; text-transform: uppercase; opacity: .8; }
.hcp-objet > span { font: 600 max(9px, 2.3cqw)/1.2 system-ui, sans-serif; letter-spacing: .04em; opacity: .9; overflow-wrap: anywhere; }
.hcp-vide { font: 600 max(10px, 2.6cqw)/1 ui-monospace, Consolas, monospace; letter-spacing: .2em; text-transform: uppercase; opacity: .6; }
@keyframes hcp-allumage { 0% { opacity: 0; } 12% { opacity: .85; } 20% { opacity: .1; } 34% { opacity: 1; } 42% { opacity: .3; } 56% { opacity: 1; } 66% { opacity: .7; } 76%, 100% { opacity: 1; } }
@keyframes hcp-defile { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(0, 4px, 0); } }
@keyframes hcp-tremble {
  0%, 9%, 40%, 69%, 89% { transform: translate3d(0, 0, 0); opacity: 1; }
  7% { transform: translate3d(calc(var(--force) * 3px), 0, 0); opacity: calc(1 - var(--force) * .2); }
  38% { transform: translate3d(calc(var(--force) * -2px), 0, 0) skewX(calc(var(--force) * 1.5deg)); opacity: calc(1 - var(--force) * .3); }
  66% { transform: translate3d(calc(var(--force) * 1.5px), calc(var(--force) * -1px), 0); opacity: calc(1 - var(--force) * .1); }
  88% { transform: translate3d(calc(var(--force) * -4px), 0, 0); opacity: calc(1 - var(--force) * .35); } }
.hcp-scene[data-calme] * { animation: none !important; }
.hcp-contenu { position: absolute; inset: 0; display: flex; flex-direction: column; }
.hcp-haut { position: relative; flex: 1; min-height: 0; }
.hcp-haut .hcp-photo { position: absolute; inset: 0; -webkit-mask: linear-gradient(#000 55%, transparent 100%); mask: linear-gradient(#000 55%, transparent 100%); }
.hcp-numero { position: absolute; right: 6cqw; top: 5cqw; font: 800 20cqw/1 var(--police-titre, "Arial Narrow", sans-serif); color: transparent; -webkit-text-stroke: 1px var(--texte-holo); opacity: .8; }
.hcp-haut .hcp-etiquette { position: absolute; left: 6cqw; top: 6cqw; }
.hcp-titre { position: absolute; left: 6cqw; right: 6cqw; bottom: 0; display: grid; gap: 2cqw; }
.hcp-bas { display: grid; gap: 4cqw; padding: 4cqw 6cqw 7cqw; }`,
  monter(conteneur, reglages, options) {
    if (!document.getElementById('css-' + this.id)) {
      const style = document.createElement('style');
      style.id = 'css-' + this.id;
      style.textContent = this.css;
      document.head.appendChild(style);
    }
    let r = { ...reglages };
    const base = 'ressources-maquette/', joueurs = this.joueurs, icones = this.icones;
    const url = u => 'url("' + u + '")';
    const scene = document.createElement('div');
    scene.className = 'hcp-scene';
    if (options.reduireAnimations) scene.dataset.calme = '1';
    conteneur.appendChild(scene);
    const photo = j => '<div class="hcp-photo"><img src="' + base + '_cartes/joueur-' + j.numero + '.jpg" alt="" decoding="async"><span class="hcp-teinte"></span></div>';
    const role = j => '<div class="hcp-role"><span class="hcp-icone" style=\'--icone:' + url(base + 'V-valorant/roles/' + j.icone + '.png') + '\'></span>' +
      '<div><small>Agent favori · ' + j.agent + '</small>' + j.role + '</div></div>';
    const pseudo = (j, max, largeur) => '<p class="hcp-pseudo" style="--pseudo:' + Math.min(max, largeur * 2 / j.pseudo.length).toFixed(2) + 'cqw">' + j.pseudo + '</p>';
    const bio = j => '<div class="hcp-bio">' + j.bio.map(ligne => '<p>' + ligne + '</p>').join('') + '</div>';
    const objet = ([type, modele]) => '<div class="hcp-objet"><div class="hcp-case"><i>' + type + '</i><svg viewBox="0 0 24 24" aria-hidden="true">' + (icones[type] || '') + '</svg></div><span>' + modele + '</span></div>';
    const objets = j => j.setup.length ? '<div class="hcp-objets">' + j.setup.map(objet).join('') + '</div>' : '<p class="hcp-vide">Équipement à venir</p>';
    const cadre = '<svg class="hcp-cadre" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polygon points="0,0 94,0 100,6 100,100 6,100 0,94"/></svg>';
    function carte(j) {
      return '<div class="hcp-contenu"><div class="hcp-haut">' + photo(j) + '<span class="hcp-etiquette">// Joueur ' + j.numero + '</span><span class="hcp-numero">' + j.numero + '</span>' +
        '<div class="hcp-titre">' + role(j) + pseudo(j, 17, 86) + '</div></div>' +
        '<div class="hcp-bas">' + bio(j) + objets(j) + '</div></div>';
    }
    let joueurAffiche = -1;
    function afficherJoueur(i) {
      const j = joueurs[i];
      joueurAffiche = i;
      scene.innerHTML = '<span class="hcp-nuit"></span><div class="hcp-carte" role="group" aria-label="' + j.pseudo + ', ' + j.role + '"><div class="hcp-tremble">' +
        carte(j) + '</div>' + cadre + '<span class="hcp-lignes"></span></div>';
      const img = scene.querySelector('.hcp-photo img');
      img.addEventListener('error', () => img.parentElement.classList.add('hcp-sans-photo'));
    }
    function appliquer() {
      const i = Number(r.joueur) || 0;
      if (i !== joueurAffiche) afficherJoueur(i);
      const v = (nom, valeur) => scene.style.setProperty(nom, String(valeur));
      v('--holo', r.couleur);
      v('--texte-holo', r.texte);
      v('--taille', r.taille);
      v('--obscurite', r.obscurite);
      v('--force', r.tremblement);
      v('--lignes', r.lignes);
      v('--photo-teinte', r.photoTeinte);
    }
    appliquer();
    return {
      mettreAJour(nouveaux) { r = { ...nouveaux }; appliquer(); },
      detruire() { scene.remove(); }
    };
  }
};
enregistrerEffet(EffetCartePortrait);
