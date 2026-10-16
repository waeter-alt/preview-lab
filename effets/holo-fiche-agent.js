const EffetHoloFicheAgent = {
  id: 'holo-fiche-agent',
  nom: 'Holo · Fiche d\'agent',
  description: 'L\'écran de sélection d\'agent de Valorant en hologramme : l\'agent favori sur son émetteur devant son grand nom, et la fiche du joueur (rôle, statistiques, capacités qui s\'allument une à une). Changez de joueur pour rejouer l\'allumage.',
  variables: ['--couleur-nuit', '--police-titre'],
  base: 'ressources-maquette/V-valorant/',
  joueurs: [
    { numero: '01', pseudo: 'Noctis', role: 'Duelliste', agent: 'Jett', roleAgent: 'Duelliste', icone: 'duelliste', dossier: 'jett', acs: 271, kd: '1.34', hs: 32, capacites: ['Averse', 'Courant ascendant', 'Vent arrière', 'Tempête de lames'] },
    { numero: '02', pseudo: 'Kaze', role: 'Initiateur', agent: 'Sova', roleAgent: 'Initiateur', icone: 'initiateur', dossier: 'sova', acs: 214, kd: '1.12', hs: 26, capacites: ['Drone rapace', 'Électroflèche', 'Flèche de reconnaissance', 'Fureur du chasseur'] },
    { numero: '03', pseudo: 'Lyra', role: 'Contrôleuse', agent: 'Omen', roleAgent: 'Contrôleur', icone: 'controleur', dossier: 'omen', acs: 198, kd: '1.05', hs: 24, capacites: ['Voie des ombres', 'Paranoïa', 'Voile sombre', 'Depuis les ombres'] },
    { numero: '04', pseudo: 'Sahir', role: 'Sentinelle', agent: 'Killjoy', roleAgent: 'Sentinelle', icone: 'sentinelle', dossier: 'killjoy', acs: 205, kd: '1.18', hs: 28, capacites: ['Essaim de nanites', 'Bot-alarme', 'Tourelle', 'Confinement'] },
    { numero: '05', pseudo: 'Vortex', role: 'Flex · IGL', agent: 'Skye', roleAgent: 'Initiateur', icone: 'initiateur', dossier: 'skye', acs: 189, kd: '0.97', hs: 22, capacites: ['Revitalisation', 'Éclaireur', 'Guide éclatant', 'Traqueurs'] }
  ],
  parametres: [
    { categorie: 'Joueur', id: 'joueur', libelle: 'Joueur · affiché', type: 'choix', defaut: '0',
      options: [{ valeur: '0', libelle: '01 · Noctis (Jett)' }, { valeur: '1', libelle: '02 · Kaze (Sova)' }, { valeur: '2', libelle: '03 · Lyra (Omen)' }, { valeur: '3', libelle: '04 · Sahir (Killjoy)' }, { valeur: '4', libelle: '05 · Vortex (Skye)' }] },
    { categorie: 'Hologramme', id: 'couleur', libelle: 'Hologramme · couleur', type: 'couleur', defaut: '#8FB0CC' },
    { categorie: 'Hologramme', id: 'obscurite', libelle: 'Hologramme · assombrissement de la scène (0 = aucun)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.85 },
    { categorie: 'Hologramme', id: 'tremblement', libelle: 'Hologramme · tremblement (0 = stable)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.5 },
    { categorie: 'Hologramme', id: 'lignes', libelle: 'Hologramme · lignes de balayage (0 = aucune)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.55 },
    { categorie: 'Agent', id: 'tailleAgent', libelle: 'Agent · taille (part de la hauteur de l\'écran)', type: 'nombre', min: 0.5, max: 1.1, pas: 0.02, defaut: 0.96 },
    { categorie: 'Agent', id: 'nomFond', libelle: 'Agent · grand nom derrière l\'agent (0 = caché)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.3 },
    { categorie: 'Fiche', id: 'delaiCapacites', libelle: 'Fiche · délai entre l\'allumage de deux capacités (s)', type: 'nombre', min: 0, max: 0.6, pas: 0.02, defaut: 0.16 }
  ],
  css: `
.hfa-scene { position: absolute; inset: 0; overflow: hidden; container-type: size; color: var(--holo); font-family: system-ui, sans-serif;
  --holo-doux: color-mix(in srgb, var(--holo) 45%, transparent); --holo-pale: color-mix(in srgb, var(--holo) 18%, transparent); }
.hfa-nuit { position: absolute; inset: 0; background: var(--couleur-nuit); opacity: var(--obscurite, .85); }
.hfa-agent { position: absolute; right: 4cqw; bottom: 0; height: min(calc(var(--taille-agent) * 100cqh), 62cqw); aspect-ratio: 1; }
.hfa-nom-fond { position: absolute; left: 50%; top: 4%; height: 88%; aspect-ratio: 700 / 1024; transform: translateX(-50%); background: var(--holo); opacity: var(--nom-fond);
  -webkit-mask: var(--fond) center / contain no-repeat; mask: var(--fond) center / contain no-repeat; }
.hfa-faisceau { position: absolute; left: 28%; right: 28%; top: 66%; bottom: 2%; clip-path: polygon(50% 100%, 0 0, 100% 0); mix-blend-mode: screen;
  background: linear-gradient(0deg, color-mix(in srgb, var(--holo) 70%, transparent), color-mix(in srgb, var(--holo) 25%, transparent) 30%, transparent);
  transform-origin: 50% 100%; animation: hfa-monte .4s ease-out both, hfa-scintille 3.1s steps(1) .4s infinite; }
.hfa-socle { position: absolute; left: 36%; right: 36%; bottom: 0; height: 2.4%; border-radius: 50%;
  background: radial-gradient(ellipse at center, var(--holo) 0%, var(--holo-doux) 45%, transparent 72%); }
.hfa-projection { position: absolute; inset: 0; mix-blend-mode: screen; animation: hfa-allumage .6s linear .35s both; }
.hfa-tremble { position: absolute; inset: 0; isolation: isolate; animation: hfa-tremble 2.3s steps(1) infinite; }
.hfa-tremble img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; filter: grayscale(1) contrast(1.25) brightness(1.15); }
.hfa-teinte, .hfa-lignes { position: absolute; inset: 0; -webkit-mask: var(--img) center / contain no-repeat; mask: var(--img) center / contain no-repeat; }
.hfa-teinte { background: var(--holo); mix-blend-mode: color; }
.hfa-lignes { background: repeating-linear-gradient(0deg, var(--couleur-nuit) 0 2px, transparent 2px 5px); opacity: var(--lignes); }
.hfa-fiche { position: absolute; left: 6cqw; top: 50%; width: min(440px, 42cqw); transform: translateY(-50%); padding: 26px 28px 24px; box-sizing: border-box;
  background: linear-gradient(160deg, var(--holo-pale), transparent 70%);
  clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 22px 100%, 0 calc(100% - 22px));
  text-shadow: 0 0 10px var(--holo-doux); animation: hfa-allumage .6s linear both; }
.hfa-cadre { position: absolute; inset: 0; pointer-events: none; overflow: visible; }
.hfa-cadre polygon { fill: none; stroke: var(--holo-doux); stroke-width: 1; vector-effect: non-scaling-stroke; }
.hfa-fiche::after { content: ""; position: absolute; inset: 0; pointer-events: none; opacity: calc(var(--lignes) * .5);
  background: repeating-linear-gradient(0deg, var(--couleur-nuit) 0 1px, transparent 1px 4px); animation: hfa-defile 1s linear infinite; }
.hfa-ligne-haut { display: flex; justify-content: space-between; font: 600 11px/1 ui-monospace, Consolas, monospace; letter-spacing: .2em; text-transform: uppercase; opacity: .7; }
.hfa-pseudo { margin: 14px 0 0; font: 800 clamp(44px, 9cqw, 96px)/.85 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .01em; }
.hfa-role { display: flex; align-items: center; gap: 10px; margin-top: 16px; font: 700 13px/1.2 system-ui, sans-serif; letter-spacing: .22em; text-transform: uppercase; }
.hfa-icone { flex: none; width: 26px; height: 26px; background: var(--holo); -webkit-mask: var(--icone) center / contain no-repeat; mask: var(--icone) center / contain no-repeat; }
.hfa-role small { display: block; font-size: 10px; letter-spacing: .2em; opacity: .6; }
.hfa-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 18px; padding-top: 14px; border-top: 1px solid var(--holo-doux); }
.hfa-stats b { display: block; font: 800 26px/1 var(--police-titre, "Arial Narrow", sans-serif); }
.hfa-stats span { font: 600 9px/1 system-ui, sans-serif; letter-spacing: .2em; text-transform: uppercase; opacity: .6; }
.hfa-capacites { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 18px; }
.hfa-capa { position: relative; display: grid; justify-items: center; gap: 6px; text-align: center; animation: hfa-allumage .5s linear both; animation-delay: calc(.6s + var(--k) * var(--delai-capa)); }
.hfa-capa-case { position: relative; width: 100%; aspect-ratio: 1; display: grid; place-items: center; background: var(--holo-pale);
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px)); }
.hfa-capa-case .hfa-icone { width: 58%; height: 58%; }
.hfa-capa-case i { position: absolute; left: 5px; top: 4px; font: 700 10px/1 ui-monospace, Consolas, monospace; font-style: normal; opacity: .75; }
.hfa-capa > span { font: 600 9px/1.2 system-ui, sans-serif; letter-spacing: .08em; text-transform: uppercase; opacity: .8; }
@keyframes hfa-allumage { 0% { opacity: 0; } 12% { opacity: .85; } 20% { opacity: .05; } 34% { opacity: .9; } 42% { opacity: .2; } 56% { opacity: .9; } 66% { opacity: .55; } 76%, 100% { opacity: .95; } }
@keyframes hfa-monte { from { transform: scaleY(0); } to { transform: none; } }
@keyframes hfa-scintille { 0% { opacity: 1; } 37% { opacity: .8; } 39% { opacity: 1; } 87% { opacity: .65; } 89% { opacity: 1; } }
@keyframes hfa-defile { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(0, 4px, 0); } }
@keyframes hfa-tremble {
  0%, 9%, 40%, 69%, 89% { transform: translate3d(0, 0, 0); opacity: 1; }
  7% { transform: translate3d(calc(var(--force) * 3px), 0, 0); opacity: calc(1 - var(--force) * .25); }
  38% { transform: translate3d(calc(var(--force) * -2px), 0, 0) skewX(calc(var(--force) * 2deg)); opacity: calc(1 - var(--force) * .4); }
  66% { transform: translate3d(calc(var(--force) * 1.5px), calc(var(--force) * -1px), 0); opacity: calc(1 - var(--force) * .15); }
  88% { transform: translate3d(calc(var(--force) * -4px), 0, 0); opacity: calc(1 - var(--force) * .5); } }
@container (max-width: 700px) {
  .hfa-agent { right: auto; left: 50%; bottom: auto; top: 0; height: min(62cqh, 100cqw); transform: translateX(-50%); }
  .hfa-fiche { left: 16px; right: 16px; top: auto; bottom: 16px; width: auto; transform: none; padding: 18px 18px 16px; }
  .hfa-pseudo { font-size: clamp(36px, 13cqw, 64px); margin-top: 8px; }
  .hfa-role { margin-top: 10px; }
  .hfa-stats { margin-top: 10px; padding-top: 10px; }
  .hfa-stats b { font-size: 20px; }
  .hfa-capacites { margin-top: 12px; gap: 8px; }
  .hfa-capa > span { display: none; }
}
.hfa-scene[data-calme] *, .hfa-scene[data-calme] .hfa-fiche::after { animation: none !important; }`,
  monter(conteneur, reglages, options) {
    if (!document.getElementById('css-' + this.id)) {
      const style = document.createElement('style');
      style.id = 'css-' + this.id;
      style.textContent = this.css;
      document.head.appendChild(style);
    }
    let r = { ...reglages };
    const base = this.base, joueurs = this.joueurs;
    const image = j => base + 'agents-detoures/' + j.dossier + '-full.webp';
    const capacite = (j, k) => base + 'agents/' + j.dossier + '/' + ['grenade', 'ability1', 'ability2', 'ultimate'][k] + '.png';
    joueurs.forEach(j => { new Image().src = image(j); });
    const scene = document.createElement('div');
    scene.className = 'hfa-scene';
    if (options.reduireAnimations) scene.dataset.calme = '1';
    conteneur.appendChild(scene);
    let joueurAffiche = -1;
    function afficherJoueur(i) {
      const j = joueurs[i];
      joueurAffiche = i;
      const url = u => 'url("' + u + '")';
      scene.innerHTML =
        '<span class="hfa-nuit"></span>' +
        '<div class="hfa-agent" style=\'--img:' + url(image(j)) + ';--fond:' + url(base + 'agents/' + j.dossier + '/fond.png') + '\' aria-hidden="true">' +
          '<span class="hfa-faisceau"></span>' +
          '<div class="hfa-projection"><span class="hfa-nom-fond"></span><div class="hfa-tremble"><img src="' + image(j) + '" alt="" decoding="async"><span class="hfa-teinte"></span><span class="hfa-lignes"></span></div></div>' +
          '<span class="hfa-socle"></span>' +
        '</div>' +
        '<div class="hfa-fiche" role="group" aria-label="' + j.pseudo + ', ' + j.role + ', agent favori ' + j.agent + '">' +
          '<svg class="hfa-cadre" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polygon points="0,0 94,0 100,6 100,100 6,100 0,94"/></svg>' +
          '<div class="hfa-ligne-haut"><span>// Joueur ' + j.numero + '</span><span>Mansur</span></div>' +
          '<p class="hfa-pseudo">' + j.pseudo + '</p>' +
          '<div class="hfa-role"><span class="hfa-icone" style=\'--icone:' + url(base + 'roles/' + j.icone + '.png') + '\'></span>' +
            '<div><small>Agent favori · ' + j.roleAgent + '</small>' + j.agent + ' · ' + j.role + '</div></div>' +
          '<div class="hfa-stats"><div><b>' + j.acs + '</b><span>ACS</span></div><div><b>' + j.kd + '</b><span>K/D</span></div><div><b>' + j.hs + '%</b><span>HS</span></div></div>' +
          '<div class="hfa-capacites">' + j.capacites.map((nom, k) =>
            '<div class="hfa-capa" style="--k:' + k + '"><div class="hfa-capa-case"><i>' + 'CQEX'[k] + '</i><span class="hfa-icone" style=\'--icone:' + url(capacite(j, k)) + '\'></span></div><span>' + nom + '</span></div>').join('') +
          '</div>' +
        '</div>';
    }
    function appliquer() {
      const i = Number(r.joueur) || 0;
      if (i !== joueurAffiche) afficherJoueur(i);
      const v = (nom, valeur) => scene.style.setProperty(nom, String(valeur));
      v('--holo', r.couleur);
      v('--obscurite', r.obscurite);
      v('--force', r.tremblement);
      v('--lignes', r.lignes);
      v('--taille-agent', r.tailleAgent);
      v('--nom-fond', r.nomFond);
      v('--delai-capa', r.delaiCapacites + 's');
    }
    appliquer();
    return {
      mettreAJour(nouveaux) { r = { ...nouveaux }; appliquer(); },
      detruire() { scene.remove(); }
    };
  }
};
enregistrerEffet(EffetHoloFicheAgent);
