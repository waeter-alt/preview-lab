const EffetDissolve = {
  id: 'dissolve',
  nom: 'Dissolution au défilement',
  description: 'Le hero est « mangé » par une vague de pixels dorés pendant qu\'on défile. Faites défiler la maquette, ou utilisez Lecture et le curseur de progression.',
  origine: { projet: 'mansur-site-web', element: 'dissolve', cleReglages: 'dissolve', provenance: 'projets/mansur-site-web/elements/dissolve.provenance.json' },
  variables: ['--metal-reflet', '--metal-clair', '--metal-sombre', '--couleur-lueur', '--couleur-surface', '--couleur-nuit', '--couleur-texte'],
  parametres: [
    { id: 'enabled', libelle: 'Activer la transition', type: 'interrupteur', defaut: true },
    { id: 'length', libelle: 'Durée en scroll (% de hauteur d\'écran)', type: 'nombre', min: 40, max: 250, pas: 5, defaut: 110 },
    { id: 'cellSize', libelle: 'Taille des pixels, ordinateur (px)', type: 'nombre', min: 6, max: 64, pas: 1, defaut: 24 },
    { id: 'cellSizeMobile', libelle: 'Taille des pixels, mobile (px)', type: 'nombre', min: 6, max: 48, pas: 1, defaut: 16 },
    { id: 'noise', libelle: 'Bruit (0 = ligne nette, 1 = hasard)', type: 'nombre', min: 0, max: 1, pas: 0.01, defaut: 0.38 },
    { id: 'edge', libelle: 'Épaisseur de la vague dorée', type: 'nombre', min: 0.02, max: 0.5, pas: 0.01, defaut: 0.5 },
    { id: 'heroScale', libelle: 'Réduction du hero pendant la transition', type: 'nombre', min: 0.6, max: 1, pas: 0.01, defaut: 0.92 },
    { id: 'fillColor', libelle: 'Couleur finale (= fond de la section suivante)', type: 'couleur', defaut: '#120A1C' },
    { id: 'frontColors', libelle: 'Couleurs de la vague (de l\'étincelle au bordeaux)', type: 'listeCouleurs', nombre: 6,
      defaut: ['#F9F0D5', '#E1C157', '#D4AF37', '#9C7A14', '#6B1E2E', '#5C1A2B'] }
  ],
  css: `
.dissolve-scene { position: absolute; inset: 0; --h: 600px; --long: 660px; --remplissage: #120A1C; }
.dissolve-defilement { position: absolute; inset: 0; overflow-x: hidden; overflow-y: auto; scrollbar-width: thin; }
.dissolve-scene[data-statique] .dissolve-defilement { overflow-y: auto; }
.dissolve-hero { position: relative; height: calc(var(--h) + var(--long)); }
.dissolve-etage {
  position: sticky; top: 0; height: var(--h); overflow: hidden; display: grid; place-items: center;
  background: radial-gradient(ellipse 120% 100% at 50% 42%, var(--couleur-lueur) 0%, var(--couleur-surface) 55%, var(--couleur-nuit) 100%);
}
.dissolve-contenu { position: relative; z-index: 1; padding: 24px; text-align: center; will-change: transform, opacity; }
.dissolve-titre {
  margin: 0; font: 700 clamp(40px, 8vw, 92px)/1 Georgia, "Times New Roman", serif; letter-spacing: .24em; padding-left: .24em;
  background: linear-gradient(180deg, var(--metal-reflet) 0%, var(--metal-clair) 55%, var(--metal-sombre) 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent;
}
.dissolve-accroche { margin: 18px 0 0; font: 600 12px/1.4 system-ui, sans-serif; letter-spacing: .3em; text-transform: uppercase; color: color-mix(in srgb, var(--couleur-texte) 70%, transparent); }
.dissolve-toile { position: absolute; inset: 0; z-index: 2; width: 100%; height: 100%; pointer-events: none; }
.dissolve-suite { position: relative; padding: calc(var(--h) * .3) 24px calc(var(--h) * .25); background: var(--remplissage); margin-top: calc(var(--long) * -0.35); color: var(--couleur-texte); text-align: center; }
.dissolve-suite h3 { margin: 0 0 12px; font: 700 clamp(26px, 4vw, 44px)/1.1 Georgia, "Times New Roman", serif; }
.dissolve-suite p { margin: 0 auto; max-width: 36ch; opacity: .75; }
.dissolve-suite2 { position: relative; padding: calc(var(--h) * .35) 24px; background: linear-gradient(180deg, var(--remplissage) 0%, var(--couleur-surface) 30%, var(--couleur-surface) 100%); color: var(--couleur-texte); text-align: center; min-height: var(--h); }
.dissolve-suite2 p { margin: 0 auto; max-width: 36ch; opacity: .75; }
.dissolve-scene[data-statique] .dissolve-toile { display: none; }
.dissolve-scene[data-statique] .dissolve-suite { margin-top: 0; }
.dissolve-commandes {
  position: absolute; left: 50%; bottom: 12px; z-index: 5; transform: translateX(-50%); display: flex; align-items: center; gap: 10px;
  padding: 8px 12px; border-radius: 999px; background: color-mix(in srgb, var(--couleur-surface) 88%, transparent);
  border: 1px solid color-mix(in srgb, var(--couleur-texte) 18%, transparent); color: var(--couleur-texte); font: 600 12px/1 system-ui, sans-serif;
}
.dissolve-commandes button { padding: 6px 12px; border: 0; border-radius: 999px; cursor: pointer; font: inherit; color: var(--couleur-surface);
  background: linear-gradient(135deg, var(--metal-sombre), var(--metal-clair) 45%, var(--metal-reflet) 55%, var(--metal-clair)); }
.dissolve-commandes input[type="range"] { width: clamp(90px, 22vw, 220px); accent-color: var(--metal-clair); }
.dissolve-commandes output { min-width: 5ch; text-align: right; white-space: nowrap; font-family: ui-monospace, Consolas, monospace; }
.dissolve-scene[data-statique] .dissolve-commandes { display: none; }`,
  creerCoeur(canvas, config, nouveauAleatoire) {
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let cfg = config;
    let colonnes = 0, lignes = 0, cellule = 0;
    let hasard = new Float64Array(0);
    let seuils = new Float32Array(0);
    let progression = 0;
    let dernierDessin = -1;
    function taillePixel(largeur) { return largeur < 640 ? cfg.cellSizeMobile : cfg.cellSize; }
    function calculerSeuils() {
      for (let r = 0; r < lignes; r++) {
        const hauteur = 1 - (r + 0.5) / lignes;
        for (let c = 0; c < colonnes; c++) seuils[r * colonnes + c] = (1 - cfg.noise) * hauteur + cfg.noise * hasard[r * colonnes + c];
      }
    }
    function dessiner() {
      if (progression === dernierDessin) return;
      dernierDessin = progression;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (progression <= 0) return;
      const bord = cfg.edge;
      const q = progression * (1 + bord);
      const ligneDeRemplissage = q - bord;
      const couleurs = cfg.frontColors;
      const n = couleurs.length;
      for (let r = 0; r < lignes; r++) {
        for (let c = 0; c < colonnes; c++) {
          const t = seuils[r * colonnes + c];
          if (t >= q) continue;
          const x = c * cellule;
          const y = r * cellule;
          if (t < ligneDeRemplissage) {
            ctx.fillStyle = cfg.fillColor;
            ctx.fillRect(x, y, cellule, cellule);
          } else {
            const k = (q - t) / bord;
            const s = Math.max(2, Math.round(cellule * (0.3 + 0.7 * k)));
            const o = Math.round((cellule - s) / 2);
            ctx.fillStyle = couleurs[Math.min(n - 1, Math.floor(k * n))];
            ctx.fillRect(x + o, y + o, s, s);
          }
        }
      }
    }
    function construire() {
      const largeur = canvas.clientWidth;
      const hauteur = canvas.clientHeight;
      canvas.width = Math.round(largeur * dpr);
      canvas.height = Math.round(hauteur * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cellule = taillePixel(largeur);
      colonnes = Math.ceil(largeur / cellule);
      lignes = Math.ceil(hauteur / cellule);
      seuils = new Float32Array(colonnes * lignes);
      hasard = new Float64Array(colonnes * lignes);
      const alea = nouveauAleatoire();
      for (let i = 0; i < hasard.length; i++) hasard[i] = alea();
      calculerSeuils();
      dernierDessin = -1;
      dessiner();
    }
    construire();
    return {
      definirProgression(p) { progression = Math.round(p * 1000) / 1000; dessiner(); },
      reconstruire() { construire(); },
      mettreAJour(nouvelle) {
        const ancienne = cfg;
        cfg = nouvelle;
        if (taillePixel(canvas.clientWidth) !== cellule) { construire(); return; }
        if (cfg.noise !== ancienne.noise) calculerSeuils();
        dernierDessin = -1;
        dessiner();
      },
      detruire() { ctx.clearRect(0, 0, canvas.width, canvas.height); }
    };
  },
  monter(conteneur, reglages, options) {
    if (!document.getElementById('css-' + this.id)) {
      const style = document.createElement('style');
      style.id = 'css-' + this.id;
      style.textContent = this.css;
      document.head.appendChild(style);
    }
    let r = { ...reglages, frontColors: [...reglages.frontColors] };
    const statique = options.reduireAnimations;
    const scene = document.createElement('div');
    scene.className = 'dissolve-scene';
    if (statique) scene.dataset.statique = '1';
    scene.innerHTML =
      '<div class="dissolve-defilement" tabindex="0" role="region" aria-label="Maquette de page : faites défiler pour voir la dissolution">' +
        '<section class="dissolve-hero"><div class="dissolve-etage">' +
          '<div class="dissolve-contenu"><h2 class="dissolve-titre">HERO</h2><p class="dissolve-accroche">contenu de démonstration</p></div>' +
          '<canvas class="dissolve-toile" aria-hidden="true"></canvas>' +
        '</div></section>' +
        '<section class="dissolve-suite"><h3>Section suivante</h3><p>Son fond prend la couleur finale de la vague ; elle remonte sur la fin du hero.</p></section>' +
        '<section class="dissolve-suite2"><p>Section d\'après : son dégradé part de la couleur finale.</p></section>' +
      '</div>' +
      '<div class="dissolve-commandes"><button type="button" data-lecture>Lecture</button>' +
        '<input type="range" min="0" max="1000" step="1" value="0" aria-label="Progression de la transition"><output>0 %</output></div>';
    conteneur.appendChild(scene);
    const defilement = scene.querySelector('.dissolve-defilement');
    const contenu = scene.querySelector('.dissolve-contenu');
    const toile = scene.querySelector('.dissolve-toile');
    const boutonLecture = scene.querySelector('[data-lecture]');
    const curseur = scene.querySelector('input[type="range"]');
    const affichage = scene.querySelector('output');
    const nouveauAleatoire = () => { let a = 20260101; return () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
    const coeur = this.creerCoeur(toile, r, nouveauAleatoire);
    let hauteurEcran = 0, longueur = 0, idLecture = 0;
    const longueurEnPx = () => (statique || !r.enabled ? 0 : (r.length / 100) * hauteurEcran);
    const progressionActuelle = () => (longueur > 0 ? Math.min(1, Math.max(0, defilement.scrollTop / longueur)) : 0);
    function appliquerProgression() {
      const p = progressionActuelle();
      const animee = !statique && r.enabled;
      coeur.definirProgression(animee ? p : 0);
      toile.style.display = animee ? '' : 'none';
      const echelle = animee ? 1 + (r.heroScale - 1) * p : 1;
      const opacite = animee ? 1 + (0.35 - 1) * p : 1;
      contenu.style.transform = `scale(${echelle})`;
      contenu.style.opacity = String(opacite);
      curseur.value = String(Math.round(p * 1000));
      affichage.textContent = Math.round(p * 100) + ' %';
    }
    function mettreEnPage() {
      hauteurEcran = defilement.clientHeight;
      longueur = longueurEnPx();
      scene.style.setProperty('--h', hauteurEcran + 'px');
      scene.style.setProperty('--long', longueur + 'px');
      scene.style.setProperty('--remplissage', r.fillColor);
    }
    function arreterLecture() { cancelAnimationFrame(idLecture); idLecture = 0; boutonLecture.textContent = 'Lecture'; }
    function lire() {
      if (idLecture) { arreterLecture(); return; }
      const duree = 4000;
      const aLaFin = progressionActuelle() >= 0.995;
      const depart = performance.now() - (aLaFin ? 0 : progressionActuelle() * duree);
      if (aLaFin) defilement.scrollTop = 0;
      boutonLecture.textContent = 'Pause';
      const pas = maintenant => {
        const p = Math.min(1, (maintenant - depart) / duree);
        defilement.scrollTop = p * longueur;
        if (p < 1) idLecture = requestAnimationFrame(pas); else arreterLecture();
      };
      idLecture = requestAnimationFrame(pas);
    }
    boutonLecture.addEventListener('click', lire);
    curseur.addEventListener('input', () => { arreterLecture(); defilement.scrollTop = (Number(curseur.value) / 1000) * longueur; });
    defilement.addEventListener('scroll', appliquerProgression, { passive: true });
    const observateur = new ResizeObserver(() => { mettreEnPage(); coeur.reconstruire(); appliquerProgression(); });
    observateur.observe(defilement);
    mettreEnPage();
    appliquerProgression();
    return {
      mettreAJour(nouveaux) {
        const p = progressionActuelle();
        r = { ...nouveaux, frontColors: [...nouveaux.frontColors] };
        mettreEnPage();
        coeur.mettreAJour(r);
        defilement.scrollTop = p * longueur;
        appliquerProgression();
      },
      detruire() {
        arreterLecture();
        observateur.disconnect();
        coeur.detruire();
        scene.remove();
      }
    };
  }
};
enregistrerEffet(EffetDissolve);
