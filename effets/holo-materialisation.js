const EffetHoloMaterialisation = {
  id: 'holo-materialisation',
  nom: 'Holo · Matérialisation',
  description: 'L\'hologramme se construit : une ligne de balayage monte des pieds à la tête, l\'agent apparaît d\'abord en grille puis en entier, et le pseudo du joueur se décode lettre par lettre. Puis il s\'efface et le joueur suivant se matérialise.',
  variables: ['--couleur-nuit', '--police-titre'],
  base: 'ressources-maquette/V-valorant/',
  joueurs: [
    { numero: '01', pseudo: 'Noctis', role: 'Duelliste', agent: 'Jett', icone: 'duelliste', dossier: 'jett' },
    { numero: '02', pseudo: 'Kaze', role: 'Initiateur', agent: 'Sova', icone: 'initiateur', dossier: 'sova' },
    { numero: '03', pseudo: 'Lyra', role: 'Contrôleuse', agent: 'Omen', icone: 'controleur', dossier: 'omen' },
    { numero: '04', pseudo: 'Sahir', role: 'Sentinelle', agent: 'Killjoy', icone: 'sentinelle', dossier: 'killjoy' },
    { numero: '05', pseudo: 'Vortex', role: 'Flex · IGL', agent: 'Skye', icone: 'initiateur', dossier: 'skye' }
  ],
  parametres: [
    { categorie: 'Joueur', id: 'joueur', libelle: 'Joueur · premier affiché', type: 'choix', defaut: '0',
      options: [{ valeur: '0', libelle: '01 · Noctis (Jett)' }, { valeur: '1', libelle: '02 · Kaze (Sova)' }, { valeur: '2', libelle: '03 · Lyra (Omen)' }, { valeur: '3', libelle: '04 · Sahir (Killjoy)' }, { valeur: '4', libelle: '05 · Vortex (Skye)' }] },
    { categorie: 'Joueur', id: 'enchainement', libelle: 'Joueur · enchaîner les 5 joueurs', type: 'interrupteur', defaut: true },
    { categorie: 'Hologramme', id: 'couleur', libelle: 'Hologramme · couleur', type: 'couleur', defaut: '#8FB0CC' },
    { categorie: 'Hologramme', id: 'obscurite', libelle: 'Hologramme · assombrissement de la scène (0 = aucun)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.85 },
    { categorie: 'Hologramme', id: 'lignes', libelle: 'Hologramme · lignes de balayage (0 = aucune)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.55 },
    { categorie: 'Balayage', id: 'dureeScan', libelle: 'Balayage · durée de la construction (s)', type: 'nombre', min: 0.6, max: 5, pas: 0.1, defaut: 1.8 },
    { categorie: 'Balayage', id: 'affichage', libelle: 'Balayage · temps d\'affichage avant le joueur suivant (s)', type: 'nombre', min: 1, max: 12, pas: 0.5, defaut: 4 },
    { categorie: 'Balayage', id: 'bandeGrille', libelle: 'Balayage · hauteur de la bande en grille (part de l\'agent)', type: 'nombre', min: 0, max: 0.4, pas: 0.01, defaut: 0.14 },
    { categorie: 'Balayage', id: 'grille', libelle: 'Balayage · taille des mailles de la grille (px)', type: 'nombre', min: 4, max: 24, pas: 1, defaut: 9 }
  ],
  css: `
.hma-scene { position: absolute; inset: 0; overflow: hidden; container-type: size; color: var(--holo); font-family: system-ui, sans-serif;
  --holo-doux: color-mix(in srgb, var(--holo) 45%, transparent); --holo-pale: color-mix(in srgb, var(--holo) 18%, transparent); --y: 1; }
.hma-nuit { position: absolute; inset: 0; background: var(--couleur-nuit); opacity: var(--obscurite, .85); }
.hma-agent { position: absolute; left: 50%; bottom: 2cqh; height: min(94cqh, 120cqw); aspect-ratio: 1; transform: translateX(-50%); }
.hma-complet, .hma-grille { position: absolute; inset: 0; mix-blend-mode: screen; }
.hma-complet { clip-path: inset(calc(var(--y) * 100%) 0 0 0); }
.hma-complet img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; filter: grayscale(1) contrast(1.25) brightness(1.15); }
.hma-teinte, .hma-lignes, .hma-grille { -webkit-mask: var(--img) center / contain no-repeat; mask: var(--img) center / contain no-repeat; }
.hma-teinte, .hma-lignes { position: absolute; inset: 0; }
.hma-complet { isolation: isolate; }
.hma-teinte { background: var(--holo); mix-blend-mode: color; }
.hma-lignes { background: repeating-linear-gradient(0deg, var(--couleur-nuit) 0 2px, transparent 2px 5px); opacity: var(--lignes); }
.hma-grille { clip-path: inset(calc(max(0, var(--y) - var(--bande)) * 100%) 0 calc((1 - var(--y)) * 100%) 0);
  background: repeating-linear-gradient(0deg, var(--holo) 0 1px, transparent 1px var(--maille)), repeating-linear-gradient(90deg, var(--holo) 0 1px, transparent 1px var(--maille)), var(--holo-pale); }
.hma-ligne { position: absolute; left: 12%; right: 12%; top: calc(var(--y) * 100%); height: 2px; margin-top: -1px; background: var(--holo);
  box-shadow: 0 0 14px 3px var(--holo-doux); opacity: var(--ligne-visible, 1); }
.hma-socle { position: absolute; left: 36%; right: 36%; bottom: 3%; height: 2.4%; border-radius: 50%; background: radial-gradient(ellipse at center, var(--holo) 0%, var(--holo-doux) 45%, transparent 72%); }
.hma-info { position: absolute; left: 6cqw; bottom: 8cqh; max-width: 40cqw; text-shadow: 0 0 10px var(--holo-doux); }
.hma-compteur { font: 600 11px/1 ui-monospace, Consolas, monospace; letter-spacing: .2em; text-transform: uppercase; opacity: .75; }
.hma-pseudo { margin: 10px 0 0; font: 800 clamp(40px, 8cqw, 92px)/.85 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .02em; white-space: nowrap; }
.hma-role { display: flex; align-items: center; gap: 10px; margin-top: 12px; font: 700 12px/1.2 system-ui, sans-serif; letter-spacing: .22em; text-transform: uppercase; opacity: var(--texte-visible, 1); }
.hma-icone { width: 24px; height: 24px; flex: none; background: var(--holo); -webkit-mask: var(--icone) center / contain no-repeat; mask: var(--icone) center / contain no-repeat; }
.hma-barre { margin-top: 14px; height: 2px; background: var(--holo-pale); }
.hma-barre i { display: block; height: 100%; width: calc((1 - var(--y)) * 100%); background: var(--holo); box-shadow: 0 0 8px var(--holo-doux); }
@container (max-width: 700px) {
  .hma-agent { bottom: auto; top: 0; height: min(66cqh, 120cqw); }
  .hma-info { left: 16px; right: 16px; bottom: 20px; max-width: none; text-align: center; }
  .hma-role { justify-content: center; }
  .hma-pseudo { font-size: clamp(36px, 14cqw, 64px); }
}`,
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
    scene.className = 'hma-scene';
    scene.innerHTML =
      '<span class="hma-nuit"></span>' +
      '<div class="hma-agent" aria-hidden="true"><span class="hma-socle"></span>' +
        '<div class="hma-complet"><img alt="" decoding="async"><span class="hma-teinte"></span><span class="hma-lignes"></span></div>' +
        '<div class="hma-grille"></div><span class="hma-ligne"></span></div>' +
      '<div class="hma-info" aria-live="polite"><div class="hma-compteur"></div><p class="hma-pseudo"></p>' +
        '<div class="hma-role"><span class="hma-icone"></span><span class="hma-role-texte"></span></div><div class="hma-barre"><i></i></div></div>';
    conteneur.appendChild(scene);
    const agent = scene.querySelector('.hma-agent');
    const img = agent.querySelector('img');
    const compteur = scene.querySelector('.hma-compteur');
    const pseudo = scene.querySelector('.hma-pseudo');
    const icone = scene.querySelector('.hma-icone');
    const roleTexte = scene.querySelector('.hma-role-texte');
    let joueur = Number(r.joueur) || 0, phase = 'construction', debutPhase = performance.now(), idImage = 0, visible = true, dernierTexte = '';
    const SIGNES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/<>';
    function chargerJoueur(i) {
      const j = joueurs[i];
      joueur = i;
      img.src = image(j);
      agent.style.setProperty('--img', url(image(j)));
      icone.style.setProperty('--icone', url(base + 'roles/' + j.icone + '.png'));
      roleTexte.textContent = j.agent + ' · ' + j.role;
      pseudo.setAttribute('aria-label', j.pseudo);
    }
    function dessiner(p) {
      const j = joueurs[joueur];
      let y, decode;
      if (phase === 'construction') { y = 1 - p; decode = p; }
      else if (phase === 'affichage') { y = 0; decode = 1; }
      else { y = p; decode = 1 - p; }
      scene.style.setProperty('--y', y.toFixed(4));
      scene.style.setProperty('--ligne-visible', phase === 'affichage' ? '0' : '1');
      scene.style.setProperty('--texte-visible', decode.toFixed(3));
      compteur.textContent = 'Joueur ' + j.numero + ' · matérialisation ' + Math.round((1 - y) * 100) + ' %';
      const trouvees = Math.floor(decode * j.pseudo.length + 0.0001);
      const tic = Math.floor(performance.now() / 50);
      let texte = '';
      for (let k = 0; k < j.pseudo.length; k++) texte += k < trouvees ? j.pseudo[k] : SIGNES[(tic * 7 + k * 13 + joueur * 5) % SIGNES.length];
      if (texte !== dernierTexte) { pseudo.textContent = texte; dernierTexte = texte; }
    }
    function boucle(temps) {
      idImage = 0;
      if (!visible) return;
      const durees = { construction: r.dureeScan, affichage: r.affichage, effacement: r.dureeScan * 0.6 };
      let p = (temps - debutPhase) / 1000 / durees[phase];
      if (p >= 1) {
        if (phase === 'construction') phase = 'affichage';
        else if (phase === 'affichage') { if (r.enchainement) phase = 'effacement'; else { dessiner(1); return; } }
        else { chargerJoueur((joueur + 1) % joueurs.length); phase = 'construction'; }
        debutPhase = temps; p = 0;
      }
      dessiner(Math.min(p, 1));
      idImage = requestAnimationFrame(boucle);
    }
    let minuterieCalme = 0;
    function cycleCalme() {
      phase = 'affichage';
      dessiner(1);
      clearTimeout(minuterieCalme);
      if (r.enchainement) minuterieCalme = setTimeout(() => { chargerJoueur((joueur + 1) % joueurs.length); cycleCalme(); }, r.affichage * 1000);
    }
    function demarrer() {
      if (calme) cycleCalme();
      else if (!idImage && visible) idImage = requestAnimationFrame(boucle);
    }
    function recommencer() {
      chargerJoueur(Number(r.joueur) || 0);
      phase = 'construction'; debutPhase = performance.now();
      dessiner(0);
      demarrer();
    }
    function appliquer() {
      const v = (nom, valeur) => scene.style.setProperty(nom, String(valeur));
      v('--holo', r.couleur);
      v('--obscurite', r.obscurite);
      v('--lignes', r.lignes);
      v('--bande', r.bandeGrille);
      v('--maille', r.grille + 'px');
    }
    appliquer();
    recommencer();
    const observateurVisibilite = new IntersectionObserver(entrees => { visible = entrees[0].isIntersecting; if (!calme) demarrer(); });
    observateurVisibilite.observe(scene);
    return {
      mettreAJour(nouveaux) {
        const changeJoueur = nouveaux.joueur !== r.joueur, relancer = nouveaux.enchainement && !r.enchainement;
        r = { ...nouveaux };
        appliquer();
        if (changeJoueur) recommencer();
        else if (relancer || calme) demarrer();
      },
      detruire() {
        cancelAnimationFrame(idImage); idImage = 0; visible = false;
        clearTimeout(minuterieCalme);
        observateurVisibilite.disconnect();
        scene.remove();
      }
    };
  }
};
enregistrerEffet(EffetHoloMaterialisation);
