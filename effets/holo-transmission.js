const EffetHoloTransmission = {
  id: 'holo-transmission',
  nom: 'Holo · Transmission',
  description: 'Le message holographique façon Star Wars : le joueur apparaît en buste au-dessus d\'un émetteur, avec parasites et décalages d\'image, pendant que sa fiche se tape à côté. Changez de joueur pour recevoir une nouvelle transmission.',
  variables: ['--couleur-nuit', '--couleur-lueur', '--couleur-surface', '--police-titre'],
  base: 'ressources-maquette/',
  joueurs: [
    { numero: '01', pseudo: 'Noctis', role: 'Duelliste', agent: 'Jett', icone: 'duelliste', acs: 271, kd: '1.34', hs: 32 },
    { numero: '02', pseudo: 'Kaze', role: 'Initiateur', agent: 'Sova', icone: 'initiateur', acs: 214, kd: '1.12', hs: 26 },
    { numero: '03', pseudo: 'Lyra', role: 'Contrôleuse', agent: 'Omen', icone: 'controleur', acs: 198, kd: '1.05', hs: 24 },
    { numero: '04', pseudo: 'Sahir', role: 'Sentinelle', agent: 'Killjoy', icone: 'sentinelle', acs: 205, kd: '1.18', hs: 28 },
    { numero: '05', pseudo: 'Vortex', role: 'Flex · IGL', agent: 'Skye', icone: 'initiateur', acs: 189, kd: '0.97', hs: 22 }
  ],
  parametres: [
    { categorie: 'Joueur', id: 'joueur', libelle: 'Joueur · affiché', type: 'choix', defaut: '0',
      options: [{ valeur: '0', libelle: '01 · Noctis' }, { valeur: '1', libelle: '02 · Kaze' }, { valeur: '2', libelle: '03 · Lyra' }, { valeur: '3', libelle: '04 · Sahir' }, { valeur: '4', libelle: '05 · Vortex' }] },
    { categorie: 'Hologramme', id: 'couleur', libelle: 'Hologramme · couleur', type: 'couleur', defaut: '#8FB0CC' },
    { categorie: 'Hologramme', id: 'obscurite', libelle: 'Hologramme · assombrissement de la scène (0 = aucun)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.85 },
    { categorie: 'Hologramme', id: 'lignes', libelle: 'Hologramme · lignes de balayage (0 = aucune)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.6 },
    { categorie: 'Hologramme', id: 'parasites', libelle: 'Hologramme · parasites (bande et décalages ; 0 = image propre)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.5 },
    { categorie: 'Hologramme', id: 'transparence', libelle: 'Hologramme · transparence du joueur (0 = opaque)', type: 'nombre', min: 0, max: 0.8, pas: 0.05, defaut: 0.15 },
    { categorie: 'Fiche', id: 'frappe', libelle: 'Fiche · vitesse de frappe (caractères par seconde)', type: 'nombre', min: 10, max: 150, pas: 5, defaut: 45 }
  ],
  css: `
.htr-scene { position: absolute; inset: 0; overflow: hidden; container-type: size; color: var(--holo); font-family: system-ui, sans-serif;
  --holo-doux: color-mix(in srgb, var(--holo) 45%, transparent); --holo-pale: color-mix(in srgb, var(--holo) 18%, transparent); }
.htr-grille { position: absolute; inset: 0; display: grid; grid-template-columns: auto minmax(0, 460px); align-items: center; justify-content: center; gap: 6cqw; padding: 4cqh 5cqw; box-sizing: border-box; }
.htr-nuit { position: absolute; inset: 0; background: var(--couleur-nuit); opacity: var(--obscurite, .85); }
.htr-projecteur { position: relative; height: min(82cqh, 70cqw); aspect-ratio: 3 / 4; }
.htr-image { position: absolute; left: 0; right: 0; top: 0; bottom: 12%; mix-blend-mode: screen; opacity: calc(1 - var(--transparence));
  -webkit-mask: radial-gradient(ellipse 50% 52% at 50% 46%, #000 62%, transparent 100%); mask: radial-gradient(ellipse 50% 52% at 50% 46%, #000 62%, transparent 100%);
  animation: htr-allumage .7s linear both, htr-scintille 2.7s steps(1) .7s infinite; }
.htr-photo { position: absolute; inset: 0; isolation: isolate; overflow: hidden;
  background: radial-gradient(circle at 50% 38%, var(--couleur-lueur) 0 18%, transparent 19%), radial-gradient(ellipse 60% 40% at 50% 100%, var(--couleur-lueur) 0 70%, transparent 71%), var(--couleur-surface); }
.htr-photo img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 50% 20%; filter: grayscale(1) contrast(1.3) brightness(1.1); }
.htr-sans-photo img { display: none; }
.htr-photo .teinte { position: absolute; inset: 0; background: var(--holo); mix-blend-mode: color; }
.htr-photo .lignes { position: absolute; inset: -6px 0 0; background: repeating-linear-gradient(0deg, var(--couleur-nuit) 0 2px, transparent 2px 4px); opacity: var(--lignes); animation: htr-defile .8s linear infinite; }
.htr-bande { position: absolute; left: 0; right: 0; top: -20%; height: 14%; opacity: calc(var(--parasites) * .7);
  background: linear-gradient(180deg, transparent, var(--holo-doux) 45%, var(--holo) 50%, var(--holo-doux) 55%, transparent); animation: htr-bande 3.6s linear infinite; }
.htr-tranche { position: absolute; inset: 0; animation: htr-tranche 2.9s steps(1) infinite; }
.htr-tranche.deux { animation-duration: 4.3s; animation-delay: -1.7s; }
.htr-socle { position: absolute; left: 34%; right: 34%; bottom: 0; height: 3%; border-radius: 50%; border: 1px solid var(--holo);
  background: radial-gradient(ellipse at center, var(--holo) 0%, var(--holo-doux) 40%, transparent 72%); }
.htr-faisceau { position: absolute; left: 22%; right: 22%; top: 62%; bottom: 1.5%; clip-path: polygon(50% 100%, 0 0, 100% 0); mix-blend-mode: screen;
  background: linear-gradient(0deg, color-mix(in srgb, var(--holo) 60%, transparent), transparent); animation: htr-scintille 3.1s steps(1) infinite; }
.htr-fiche { position: relative; text-shadow: 0 0 10px var(--holo-doux); font: 500 14px/1.7 ui-monospace, Consolas, monospace; letter-spacing: .06em; }
.htr-entete { display: flex; align-items: center; gap: 10px; padding-bottom: 12px; margin-bottom: 14px; border-bottom: 1px solid var(--holo-doux);
  font: 700 12px/1 ui-monospace, Consolas, monospace; letter-spacing: .24em; text-transform: uppercase; }
.htr-voyant { width: 9px; height: 9px; border-radius: 50%; background: var(--holo); box-shadow: 0 0 8px var(--holo); animation: htr-voyant 1s steps(1) infinite; }
.htr-icone { margin-left: auto; width: 26px; height: 26px; background: var(--holo); -webkit-mask: var(--icone) center / contain no-repeat; mask: var(--icone) center / contain no-repeat; }
.htr-pseudo { margin: 0 0 10px; font: 800 clamp(40px, 7cqw, 84px)/.9 var(--police-titre, "Arial Narrow", sans-serif); letter-spacing: .02em; text-transform: uppercase; }
.htr-texte { margin: 0; white-space: pre-wrap; min-height: 7em; }
.htr-curseur { display: inline-block; width: .6em; height: 1.1em; margin-left: 2px; vertical-align: -.2em; background: var(--holo); animation: htr-voyant .9s steps(1) infinite; }
@keyframes htr-allumage { 0% { opacity: 0; } 12% { opacity: .85; } 20% { opacity: .05; } 34% { opacity: .9; } 42% { opacity: .2; } 56% { opacity: .9; } 66% { opacity: .55; } 76%, 100% { opacity: calc(1 - var(--transparence)); } }
@keyframes htr-scintille { 0% { filter: none; } 37% { filter: brightness(.75); } 39% { filter: none; } 87% { filter: brightness(.6); } 89% { filter: none; } }
@keyframes htr-defile { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(0, 4px, 0); } }
@keyframes htr-bande { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(0, 900%, 0); } }
@keyframes htr-voyant { 0% { opacity: 1; } 50% { opacity: .15; } }
@keyframes htr-tranche {
  0% { clip-path: inset(30% 0 64% 0); transform: translate3d(calc(var(--parasites) * 14px), 0, 0); }
  6% { clip-path: inset(0 0 100% 0); transform: none; }
  41% { clip-path: inset(62% 0 30% 0); transform: translate3d(calc(var(--parasites) * -10px), 0, 0); }
  45% { clip-path: inset(0 0 100% 0); transform: none; }
  77% { clip-path: inset(12% 0 84% 0); transform: translate3d(calc(var(--parasites) * 18px), 0, 0); }
  79% { clip-path: inset(0 0 100% 0); transform: none; } }
@container (max-width: 700px) {
  .htr-grille { grid-template-columns: minmax(0, 1fr); grid-template-rows: auto auto; align-content: center; justify-items: center; gap: 18px; padding: 16px; }
  .htr-projecteur { height: min(50cqh, 90cqw); }
  .htr-fiche { width: 100%; font-size: 12px; }
  .htr-pseudo { font-size: clamp(34px, 12cqw, 56px); }
  .htr-texte { min-height: 6em; }
}
.htr-scene[data-calme] * { animation: none !important; }
.htr-scene[data-calme] .htr-bande, .htr-scene[data-calme] .htr-tranche { display: none; }`,
  monter(conteneur, reglages, options) {
    if (!document.getElementById('css-' + this.id)) {
      const style = document.createElement('style');
      style.id = 'css-' + this.id;
      style.textContent = this.css;
      document.head.appendChild(style);
    }
    let r = { ...reglages };
    const base = this.base, joueurs = this.joueurs;
    const calme = options.reduireAnimations;
    const scene = document.createElement('div');
    scene.className = 'htr-scene';
    if (calme) scene.dataset.calme = '1';
    conteneur.appendChild(scene);
    let joueurAffiche = -1, minuterie = 0;
    function afficherJoueur(i) {
      const j = joueurs[i];
      joueurAffiche = i;
      const photo = '<div class="htr-photo"><img src="' + base + '_cartes/joueur-' + j.numero + '.jpg" alt="" decoding="async"><span class="teinte"></span><span class="lignes"></span></div>';
      scene.innerHTML =
        '<span class="htr-nuit"></span>' +
        '<div class="htr-grille"><div class="htr-projecteur" aria-hidden="true"><span class="htr-faisceau"></span><span class="htr-socle"></span>' +
          '<div class="htr-image">' + photo + '<div class="htr-tranche">' + photo + '</div><div class="htr-tranche deux">' + photo + '</div><span class="htr-bande"></span></div></div>' +
        '<div class="htr-fiche"><div class="htr-entete"><span class="htr-voyant"></span>Transmission entrante<span class="htr-icone" style=\'--icone:url("' + base + 'V-valorant/roles/' + j.icone + '.png")\'></span></div>' +
          '<p class="htr-pseudo">' + j.pseudo + '</p><p class="htr-texte" aria-label="' + j.role + ', agent favori ' + j.agent + '"></p></div></div>';
      scene.querySelectorAll('.htr-photo img').forEach(img => img.addEventListener('error', () => img.parentElement.classList.add('htr-sans-photo')));
      const points = (etiquette, valeur) => '> ' + etiquette + ' ' + '.'.repeat(Math.max(2, 18 - etiquette.length)) + ' ' + valeur;
      const texte = [
        points('Canal', 'MANSUR / ' + j.numero),
        points('Poste', j.role.toUpperCase()),
        points('Agent favori', j.agent.toUpperCase()),
        '> ACS ' + j.acs + ' · K/D ' + j.kd + ' · HS ' + j.hs + ' %',
        '> Fin de transmission'
      ].join('\n');
      const zone = scene.querySelector('.htr-texte');
      clearTimeout(minuterie);
      if (calme) { zone.textContent = texte; return; }
      let n = 0;
      const curseur = '<span class="htr-curseur"></span>';
      const taper = () => {
        n++;
        zone.textContent = texte.slice(0, n);
        zone.insertAdjacentHTML('beforeend', curseur);
        if (n < texte.length) minuterie = setTimeout(taper, 1000 / r.frappe);
      };
      minuterie = setTimeout(taper, 900);
    }
    function appliquer() {
      const i = Number(r.joueur) || 0;
      if (i !== joueurAffiche) afficherJoueur(i);
      const v = (nom, valeur) => scene.style.setProperty(nom, String(valeur));
      v('--holo', r.couleur);
      v('--obscurite', r.obscurite);
      v('--lignes', r.lignes);
      v('--parasites', r.parasites);
      v('--transparence', r.transparence);
    }
    appliquer();
    return {
      mettreAJour(nouveaux) { r = { ...nouveaux }; appliquer(); },
      detruire() { clearTimeout(minuterie); scene.remove(); }
    };
  }
};
enregistrerEffet(EffetHoloTransmission);
