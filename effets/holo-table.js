const EffetHoloTable = {
  id: 'holo-table',
  nom: 'Holo · Table de projection',
  description: 'Une table holographique façon Star Wars : l\'agent favori se tient sur un disque émetteur, ses 4 capacités tournent autour de lui en passant devant et derrière, son pseudo et son rôle flottent au-dessus de sa tête.',
  variables: ['--couleur-nuit', '--police-titre'],
  base: 'ressources-maquette/V-valorant/',
  joueurs: [
    { numero: '01', pseudo: 'Noctis', role: 'Duelliste', agent: 'Jett', icone: 'duelliste', dossier: 'jett', capacites: ['Averse', 'Courant ascendant', 'Vent arrière', 'Tempête de lames'] },
    { numero: '02', pseudo: 'Kaze', role: 'Initiateur', agent: 'Sova', icone: 'initiateur', dossier: 'sova', capacites: ['Drone rapace', 'Électroflèche', 'Flèche de reconnaissance', 'Fureur du chasseur'] },
    { numero: '03', pseudo: 'Lyra', role: 'Contrôleuse', agent: 'Omen', icone: 'controleur', dossier: 'omen', capacites: ['Voie des ombres', 'Paranoïa', 'Voile sombre', 'Depuis les ombres'] },
    { numero: '04', pseudo: 'Sahir', role: 'Sentinelle', agent: 'Killjoy', icone: 'sentinelle', dossier: 'killjoy', capacites: ['Essaim de nanites', 'Bot-alarme', 'Tourelle', 'Confinement'] },
    { numero: '05', pseudo: 'Vortex', role: 'Flex · IGL', agent: 'Skye', icone: 'initiateur', dossier: 'skye', capacites: ['Revitalisation', 'Éclaireur', 'Guide éclatant', 'Traqueurs'] }
  ],
  parametres: [
    { categorie: 'Joueur', id: 'joueur', libelle: 'Joueur · affiché', type: 'choix', defaut: '0',
      options: [{ valeur: '0', libelle: '01 · Noctis (Jett)' }, { valeur: '1', libelle: '02 · Kaze (Sova)' }, { valeur: '2', libelle: '03 · Lyra (Omen)' }, { valeur: '3', libelle: '04 · Sahir (Killjoy)' }, { valeur: '4', libelle: '05 · Vortex (Skye)' }] },
    { categorie: 'Hologramme', id: 'couleur', libelle: 'Hologramme · couleur', type: 'couleur', defaut: '#8FB0CC' },
    { categorie: 'Hologramme', id: 'obscurite', libelle: 'Hologramme · assombrissement de la scène (0 = aucun)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.85 },
    { categorie: 'Hologramme', id: 'tremblement', libelle: 'Hologramme · tremblement (0 = stable)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.5 },
    { categorie: 'Hologramme', id: 'lignes', libelle: 'Hologramme · lignes de balayage (0 = aucune)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.55 },
    { categorie: 'Table', id: 'inclinaison', libelle: 'Table · inclinaison du disque (petit = vu de profil)', type: 'nombre', min: 0.12, max: 0.5, pas: 0.01, defaut: 0.26 },
    { categorie: 'Table', id: 'colonne', libelle: 'Table · intensité de la colonne de lumière (0 = aucune)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.5 },
    { categorie: 'Orbite', id: 'tour', libelle: 'Orbite · durée d\'un tour (s)', type: 'nombre', min: 4, max: 40, pas: 1, defaut: 14 },
    { categorie: 'Orbite', id: 'rayon', libelle: 'Orbite · rayon (part de la largeur du disque)', type: 'nombre', min: 0.5, max: 1.4, pas: 0.05, defaut: 0.95 },
    { categorie: 'Orbite', id: 'hauteurOrbite', libelle: 'Orbite · hauteur (part de la taille de l\'agent ; 0 = aux pieds)', type: 'nombre', min: 0.1, max: 0.9, pas: 0.05, defaut: 0.45 },
    { categorie: 'Orbite', id: 'nomsCapacites', libelle: 'Orbite · afficher le nom des capacités', type: 'interrupteur', defaut: true }
  ],
  css: `
.hpt-scene { position: absolute; inset: 0; overflow: hidden; container-type: size; color: var(--holo); font-family: system-ui, sans-serif;
  --holo-doux: color-mix(in srgb, var(--holo) 45%, transparent); --holo-pale: color-mix(in srgb, var(--holo) 18%, transparent);
  --disque-l: min(74cqw, 95cqh); --disque-h: calc(var(--disque-l) * var(--incl)); --disque-bas: 5cqh;
  --agent-h: min(76cqh, 110cqw); }
.hpt-nuit { position: absolute; inset: 0; background: var(--couleur-nuit); opacity: var(--obscurite, .85); }
.hpt-disque { position: absolute; left: 50%; bottom: var(--disque-bas); width: var(--disque-l); height: var(--disque-h); transform: translateX(-50%); }
.hpt-disque > span { position: absolute; border-radius: 50%; border: 1px solid var(--holo-doux); }
.hpt-disque .lueur { inset: 0; border: 0; background: radial-gradient(ellipse at center, color-mix(in srgb, var(--holo) 50%, transparent) 0%, var(--holo-pale) 40%, transparent 70%); }
.hpt-disque .a1 { inset: 0; border-color: var(--holo); }
.hpt-disque .a2 { inset: 16%; }
.hpt-disque .a3 { inset: 34%; border-color: var(--holo); }
.hpt-tirets { position: absolute; inset: -6% -3%; width: 106%; height: 112%; overflow: visible; }
.hpt-tirets ellipse { fill: none; stroke: var(--holo); stroke-width: 2; stroke-dasharray: 3 9; vector-effect: non-scaling-stroke; animation: hpt-tirets 20s linear infinite; }
@keyframes hpt-tirets { to { stroke-dashoffset: -240; } }
.hpt-colonne { position: absolute; left: 50%; bottom: calc(var(--disque-bas) + var(--disque-h) / 2); width: calc(var(--disque-l) * .7); height: calc(var(--agent-h) * .95);
  transform: translateX(-50%); clip-path: polygon(14% 0, 86% 0, 100% 100%, 0 100%); mix-blend-mode: screen; opacity: var(--colonne);
  background: linear-gradient(0deg, color-mix(in srgb, var(--holo) 45%, transparent), color-mix(in srgb, var(--holo) 10%, transparent) 55%, transparent);
  animation: hpt-scintille 3.1s steps(1) infinite; }
.hpt-agent { position: absolute; z-index: 2; left: 50%; width: var(--agent-h); height: var(--agent-h); transform: translateX(-50%);
  bottom: calc(var(--disque-bas) + var(--disque-h) / 2 - var(--agent-h) * .05); mix-blend-mode: screen; animation: hpt-allumage .6s linear .2s both; }
.hpt-tremble { position: absolute; inset: 0; isolation: isolate; animation: hpt-tremble 2.3s steps(1) infinite; }
.hpt-tremble img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; filter: grayscale(1) contrast(1.25) brightness(1.15); }
.hpt-teinte, .hpt-lignes { position: absolute; inset: 0; -webkit-mask: var(--img) center / contain no-repeat; mask: var(--img) center / contain no-repeat; }
.hpt-teinte { background: var(--holo); mix-blend-mode: color; }
.hpt-lignes { background: repeating-linear-gradient(0deg, var(--couleur-nuit) 0 2px, transparent 2px 5px); opacity: var(--lignes); }
.hpt-titre { position: absolute; z-index: 3; left: 50%; bottom: calc(var(--disque-bas) + var(--disque-h) / 2 + var(--agent-h) * .9); transform: translateX(-50%);
  display: grid; justify-items: center; gap: 4px; text-align: center; text-shadow: 0 0 10px var(--holo-doux); animation: hpt-allumage .6s linear .7s both; }
.hpt-titre p { margin: 0; font: 800 clamp(26px, 5cqw, 52px)/.9 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .04em; }
.hpt-titre div { display: flex; align-items: center; gap: 8px; font: 700 11px/1 system-ui, sans-serif; letter-spacing: .24em; text-transform: uppercase; opacity: .85; }
.hpt-icone { width: 20px; height: 20px; flex: none; background: var(--holo); -webkit-mask: var(--icone) center / contain no-repeat; mask: var(--icone) center / contain no-repeat; }
.hpt-orbite { position: absolute; left: 50%; bottom: calc(var(--disque-bas) + var(--disque-h) / 2 + var(--agent-h) * var(--hauteur-orbite)); width: 0; height: 0; }
.hpt-capa { position: absolute; left: 0; top: 0; width: clamp(46px, 7cqw, 78px); margin: calc(clamp(46px, 7cqw, 78px) / -2) 0 0 calc(clamp(46px, 7cqw, 78px) / -2);
  display: grid; justify-items: center; gap: 6px; text-align: center; will-change: transform, opacity; }
.hpt-capa-case { position: relative; width: 100%; aspect-ratio: 1; display: grid; place-items: center; background: var(--holo-pale); border: 1px solid var(--holo-doux);
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px)); }
.hpt-capa-case .hpt-icone { width: 60%; height: 60%; }
.hpt-capa-case i { position: absolute; left: 5px; top: 4px; font: 700 10px/1 ui-monospace, Consolas, monospace; font-style: normal; opacity: .75; }
.hpt-capa > span { width: 150%; font: 600 9px/1.2 system-ui, sans-serif; letter-spacing: .1em; text-transform: uppercase; text-shadow: 0 0 8px var(--holo-doux); }
.hpt-scene:not([data-noms]) .hpt-capa > span { display: none; }
@keyframes hpt-allumage { 0% { opacity: 0; } 12% { opacity: .85; } 20% { opacity: .05; } 34% { opacity: .9; } 42% { opacity: .2; } 56% { opacity: .9; } 66% { opacity: .55; } 76%, 100% { opacity: .95; } }
@keyframes hpt-scintille { 0% { opacity: var(--colonne); } 37% { opacity: calc(var(--colonne) * .8); } 39% { opacity: var(--colonne); } 87% { opacity: calc(var(--colonne) * .6); } 89% { opacity: var(--colonne); } }
@keyframes hpt-tremble {
  0%, 9%, 40%, 69%, 89% { transform: translate3d(0, 0, 0); opacity: 1; }
  7% { transform: translate3d(calc(var(--force) * 3px), 0, 0); opacity: calc(1 - var(--force) * .25); }
  38% { transform: translate3d(calc(var(--force) * -2px), 0, 0) skewX(calc(var(--force) * 2deg)); opacity: calc(1 - var(--force) * .4); }
  66% { transform: translate3d(calc(var(--force) * 1.5px), calc(var(--force) * -1px), 0); opacity: calc(1 - var(--force) * .15); }
  88% { transform: translate3d(calc(var(--force) * -4px), 0, 0); opacity: calc(1 - var(--force) * .5); } }
@container (max-width: 700px) { .hpt-scene > * { --disque-l: 92cqw; --disque-h: calc(92cqw * var(--incl)); --agent-h: min(64cqh, 120cqw); } .hpt-capa > span { display: none; } }
.hpt-scene[data-calme] * { animation: none !important; }`,
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
    const image = j => base + 'agents-detoures/' + j.dossier + '-full.webp';
    const url = u => 'url("' + u + '")';
    joueurs.forEach(j => { new Image().src = image(j); });
    const scene = document.createElement('div');
    scene.className = 'hpt-scene';
    if (calme) scene.dataset.calme = '1';
    conteneur.appendChild(scene);
    let joueurAffiche = -1, capas = [], idImage = 0, visible = true;
    function afficherJoueur(i) {
      const j = joueurs[i];
      joueurAffiche = i;
      scene.innerHTML =
        '<span class="hpt-nuit"></span>' +
        '<div class="hpt-disque" aria-hidden="true"><span class="lueur"></span><span class="a1"></span><span class="a2"></span><span class="a3"></span>' +
          '<svg class="hpt-tirets" viewBox="0 0 100 100" preserveAspectRatio="none"><ellipse cx="50" cy="50" rx="49" ry="49"/></svg></div>' +
        '<span class="hpt-colonne" aria-hidden="true"></span>' +
        '<div class="hpt-agent" style=\'--img:' + url(image(j)) + '\' aria-hidden="true"><div class="hpt-tremble"><img src="' + image(j) + '" alt="" decoding="async"><span class="hpt-teinte"></span><span class="hpt-lignes"></span></div></div>' +
        '<div class="hpt-titre"><p>' + j.pseudo + '</p><div><span class="hpt-icone" style=\'--icone:' + url(base + 'roles/' + j.icone + '.png') + '\'></span>' + j.agent + ' · ' + j.role + '</div></div>' +
        '<div class="hpt-orbite">' + j.capacites.map((nom, k) =>
          '<div class="hpt-capa"><div class="hpt-capa-case"><i>' + 'CQEX'[k] + '</i><span class="hpt-icone" style=\'--icone:' + url(base + 'agents/' + j.dossier + '/' + ['grenade', 'ability1', 'ability2', 'ultimate'][k] + '.png') + '\'></span></div><span>' + nom + '</span></div>').join('') +
        '</div>';
      capas = [...scene.querySelectorAll('.hpt-capa')];
    }
    function placer(temps) {
      const disque = Math.min(scene.clientWidth * (scene.clientWidth <= 700 ? 0.92 : 0.74), scene.clientHeight * 0.95);
      const rx = (disque / 2) * r.rayon * (scene.clientWidth <= 700 ? 0.78 : 1), ry = rx * r.inclinaison;
      const angle0 = calme ? Math.PI / 4 : (temps / 1000) * (2 * Math.PI / r.tour);
      capas.forEach((capa, k) => {
        const a = angle0 + k * Math.PI / 2;
        const profondeur = Math.sin(a);
        const echelle = 0.82 + 0.22 * profondeur;
        capa.style.transform = 'translate3d(' + (Math.cos(a) * rx).toFixed(1) + 'px,' + (profondeur * ry).toFixed(1) + 'px,0) scale(' + echelle.toFixed(3) + ')';
        capa.style.opacity = (0.45 + 0.55 * (profondeur + 1) / 2).toFixed(3);
        capa.style.zIndex = profondeur > 0 ? '3' : '1';
      });
    }
    function boucle(temps) {
      idImage = 0;
      if (!visible || calme) return;
      placer(temps);
      idImage = requestAnimationFrame(boucle);
    }
    const demarrer = () => { if (!idImage && visible && !calme) idImage = requestAnimationFrame(boucle); };
    function appliquer() {
      const i = Number(r.joueur) || 0;
      if (i !== joueurAffiche) afficherJoueur(i);
      const v = (nom, valeur) => scene.style.setProperty(nom, String(valeur));
      v('--holo', r.couleur);
      v('--obscurite', r.obscurite);
      v('--force', r.tremblement);
      v('--lignes', r.lignes);
      v('--incl', r.inclinaison);
      v('--colonne', r.colonne);
      v('--hauteur-orbite', r.hauteurOrbite);
      scene.toggleAttribute('data-noms', r.nomsCapacites);
      placer(performance.now());
    }
    appliquer();
    const observateurVisibilite = new IntersectionObserver(entrees => { visible = entrees[0].isIntersecting; demarrer(); });
    observateurVisibilite.observe(scene);
    const observateurTaille = new ResizeObserver(() => placer(performance.now()));
    observateurTaille.observe(scene);
    demarrer();
    return {
      mettreAJour(nouveaux) { r = { ...nouveaux }; appliquer(); },
      detruire() {
        cancelAnimationFrame(idImage); idImage = 0; visible = false;
        observateurVisibilite.disconnect();
        observateurTaille.disconnect();
        scene.remove();
      }
    };
  }
};
enregistrerEffet(EffetHoloTable);
