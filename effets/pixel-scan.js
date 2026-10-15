const EffetPixelScan = {
  id: 'pixel-scan',
  nom: 'Pixel Scan',
  description: 'Chaque bloc apparaît derrière un balayage de pixels dorés quand il entre à l\'écran, et s\'efface à l\'envers quand il en sort. Faites défiler la maquette, ou cliquez sur Rejouer (chaque réglage modifié rejoue aussi le balayage).',
  variables: ['--metal-sombre', '--metal-moyen', '--metal-clair', '--metal-reflet', '--couleur-texte', '--couleur-surface', '--police-titre', '--police-logo'],
  parametres: [
    { id: 'direction', libelle: 'Sens du balayage', type: 'choix', defaut: 'gauche', options: [
      { valeur: 'gauche', libelle: 'De gauche à droite' },
      { valeur: 'droite', libelle: 'De droite à gauche' },
      { valeur: 'haut', libelle: 'De haut en bas' },
      { valeur: 'bas', libelle: 'De bas en haut' },
      { valeur: 'cercle', libelle: 'En cercle depuis le centre' }
    ] },
    { id: 'duree', libelle: 'Durée du balayage (s)', type: 'nombre', min: 0.2, max: 4, pas: 0.1, defaut: 1.2 },
    { id: 'taille', libelle: 'Taille des pixels, ordinateur (px)', type: 'nombre', min: 4, max: 48, pas: 1, defaut: 16 },
    { id: 'tailleMobile', libelle: 'Taille des pixels, mobile (px)', type: 'nombre', min: 3, max: 32, pas: 1, defaut: 10 },
    { id: 'couches', libelle: 'Tailles de pixels superposées (1 = une seule)', type: 'nombre', min: 1, max: 3, pas: 1, defaut: 2 },
    { id: 'bande', libelle: 'Largeur de la bande lumineuse (part de l\'élément)', type: 'nombre', min: 0.05, max: 0.8, pas: 0.01, defaut: 0.3 },
    { id: 'bruit', libelle: 'Bord dentelé (0 = ligne nette, 1 = très irrégulier)', type: 'nombre', min: 0, max: 1, pas: 0.01, defaut: 0.5 },
    { id: 'lueur', libelle: 'Lueur des pixels de tête (0 = aucune)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.6 },
    { id: 'decalage', libelle: 'Décalage entre blocs qui entrent ensemble (s)', type: 'nombre', min: 0, max: 0.6, pas: 0.02, defaut: 0.12 },
    { id: 'seuil', libelle: 'Part du bloc visible pour lancer le balayage (%)', type: 'nombre', min: 5, max: 90, pas: 5, defaut: 30 },
    { id: 'sortie', libelle: 'Rejouer à l\'envers quand le bloc sort de l\'écran', type: 'interrupteur', defaut: true }
  ],
  css: `
.scan-cible { position: relative; }
.scan-toile { position: absolute; z-index: 1; pointer-events: none; }
.scan-scene { position: absolute; inset: 0; color: var(--couleur-texte); }
.scan-defilement { position: absolute; inset: 0; overflow-x: hidden; overflow-y: auto; scrollbar-width: thin; }
.scan-hero { box-sizing: border-box; min-height: 100%; display: grid; place-content: center; justify-items: center; gap: 14px; padding: 40px 24px 96px; text-align: center; }
.scan-logo svg { display: block; width: clamp(90px, 16vw, 160px); height: auto; overflow: visible; }
.scan-mot { margin: 4px 0 0; font: 400 clamp(22px, 4.4vw, 48px)/1.1 var(--police-logo, "Arial Black", sans-serif); letter-spacing: .42em; padding-left: .42em;
  background: linear-gradient(180deg, var(--metal-reflet) 0%, var(--metal-clair) 45%, var(--metal-sombre) 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; }
.scan-accroche { margin: 0; font: 700 clamp(12px, 1.6vw, 16px)/1.2 var(--police-titre, "Arial Narrow", sans-serif); letter-spacing: .28em; text-transform: uppercase; color: var(--metal-moyen); }
.scan-indice { position: absolute; left: 0; right: 0; bottom: 70px; margin: 0; font: 600 11px/1 system-ui, sans-serif; letter-spacing: .3em; text-transform: uppercase; opacity: .5; text-align: center; }
.scan-hero { position: relative; }
.scan-section { box-sizing: border-box; padding: 56px 24px; display: grid; justify-items: center; gap: 28px; }
.scan-titre { margin: 0; font: 700 clamp(24px, 3.6vw, 40px)/1.1 var(--police-titre, Georgia, serif); letter-spacing: .12em; text-transform: uppercase; text-align: center; }
.scan-grille { width: min(100%, 640px); display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 14px; }
.scan-sponsor { display: flex; align-items: center; justify-content: center; gap: 10px; height: 84px; border-radius: 6px;
  border: 1px solid color-mix(in srgb, var(--metal-moyen) 45%, transparent); background: color-mix(in srgb, var(--couleur-surface) 55%, transparent);
  font: 800 16px/1 var(--police-logo, "Arial Black", sans-serif); letter-spacing: .14em; color: var(--couleur-texte); }
.scan-forme { width: 22px; height: 22px; background: linear-gradient(135deg, var(--metal-reflet), var(--metal-moyen) 55%, var(--metal-sombre)); }
.scan-forme--rond { border-radius: 50%; }
.scan-forme--losange { transform: rotate(45deg) scale(.8); }
.scan-forme--triangle { clip-path: polygon(50% 0, 100% 100%, 0 100%); }
.scan-forme--anneau { border-radius: 50%; -webkit-mask: radial-gradient(circle, transparent 40%, #000 42%); mask: radial-gradient(circle, transparent 40%, #000 42%); }
.scan-forme--barres { clip-path: polygon(0 0, 28% 0, 28% 100%, 0 100%, 0 0, 36% 0, 64% 0, 64% 100%, 36% 100%, 36% 0, 72% 0, 100% 0, 100% 100%, 72% 100%, 72% 0); }
.scan-carte { width: min(100%, 420px); box-sizing: border-box; padding: 26px 28px; border-radius: 10px; border: 2px solid transparent;
  background: linear-gradient(var(--couleur-surface), var(--couleur-surface)) padding-box,
              linear-gradient(135deg, var(--metal-reflet), var(--metal-sombre) 40%, var(--metal-clair) 70%, var(--metal-sombre)) border-box; }
.scan-carte-role { margin: 0; font: 600 11px/1 system-ui, sans-serif; letter-spacing: .3em; text-transform: uppercase; color: var(--metal-moyen); }
.scan-carte-pseudo { margin: 10px 0 18px; font: 800 clamp(40px, 7vw, 64px)/.95 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .03em; }
.scan-stat { display: grid; grid-template-columns: 7.5em 1fr 2.5em; align-items: center; gap: 10px; margin-top: 8px; font: 600 12px/1 system-ui, sans-serif; }
.scan-stat i { display: block; height: 6px; border-radius: 3px; background: color-mix(in srgb, var(--couleur-texte) 14%, transparent); }
.scan-stat i b { display: block; height: 100%; border-radius: 3px; background: linear-gradient(90deg, var(--metal-sombre), var(--metal-clair) 80%, var(--metal-reflet)); }
.scan-stat span:last-child { text-align: right; color: var(--metal-clair); }
.scan-fin { padding-bottom: 140px; }
.scan-grand { margin: 0; font: 800 clamp(36px, 8vw, 96px)/.95 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; text-align: center;
  background: linear-gradient(180deg, var(--metal-reflet) 0%, var(--metal-clair) 45%, var(--metal-sombre) 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; }
.scan-texte { margin: 0; max-width: 42ch; text-align: center; line-height: 1.6; opacity: .78; }
.scan-commandes {
  position: absolute; left: 50%; bottom: 12px; z-index: 5; transform: translateX(-50%); display: flex; align-items: center; gap: 10px;
  padding: 8px 12px; border-radius: 999px; background: color-mix(in srgb, var(--couleur-surface) 88%, transparent);
  border: 1px solid color-mix(in srgb, var(--couleur-texte) 18%, transparent); color: var(--couleur-texte); font: 600 12px/1 system-ui, sans-serif;
}
.scan-commandes button { padding: 6px 14px; border: 0; border-radius: 999px; cursor: pointer; font: inherit; color: var(--couleur-surface);
  background: linear-gradient(135deg, var(--metal-sombre), var(--metal-clair) 45%, var(--metal-reflet) 55%, var(--metal-clair)); }
.scan-scene[data-statique] .scan-commandes { display: none; }`,
  creerScan(element, config, couleurs, nouveauAleatoire) {
    const contenu = document.createElement('div');
    contenu.className = 'scan-contenu';
    while (element.firstChild) contenu.appendChild(element.firstChild);
    element.appendChild(contenu);
    element.classList.add('scan-cible');
    const toile = document.createElement('canvas');
    toile.className = 'scan-toile';
    toile.setAttribute('aria-hidden', 'true');
    element.appendChild(toile);
    const ctx = toile.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let cfg = config;
    let largeur = 0, hauteur = 0, marge = 0, taille = 0;
    let axe = 0, travers = 0;
    let bandes = 0;
    let decalagesBandes = new Float32Array(0);
    let couches = [];
    let progression = 0, sens = 0, idImage = 0, attente = 0, dernierTemps = 0;
    const lineaire = () => cfg.direction !== 'cercle';
    function versScan(x, y) {
      switch (cfg.direction) {
        case 'droite': return [1 - x / largeur, y / hauteur];
        case 'haut': return [y / hauteur, x / largeur];
        case 'bas': return [1 - y / hauteur, x / largeur];
        case 'cercle': {
          const dx = x - largeur / 2, dy = y - hauteur / 2;
          return [Math.hypot(dx, dy) / Math.hypot(largeur / 2, hauteur / 2), (Math.atan2(dy, dx) / (2 * Math.PI) + 1) % 1];
        }
        default: return [x / largeur, y / hauteur];
      }
    }
    function depuisScan(u, v) {
      switch (cfg.direction) {
        case 'droite': return [(1 - u) * largeur, v * hauteur];
        case 'haut': return [v * largeur, u * hauteur];
        case 'bas': return [v * largeur, (1 - u) * hauteur];
        case 'cercle': {
          const rayon = u * Math.hypot(largeur / 2, hauteur / 2), angle = v * 2 * Math.PI;
          return [largeur / 2 + rayon * Math.cos(angle), hauteur / 2 + rayon * Math.sin(angle)];
        }
        default: return [u * largeur, v * hauteur];
      }
    }
    function construire() {
      largeur = contenu.offsetWidth;
      hauteur = contenu.offsetHeight;
      taille = window.innerWidth < 640 ? cfg.tailleMobile : cfg.taille;
      marge = Math.ceil(taille);
      toile.style.left = (contenu.offsetLeft - marge) + 'px';
      toile.style.top = (contenu.offsetTop - marge) + 'px';
      toile.style.width = (largeur + 2 * marge) + 'px';
      toile.style.height = (hauteur + 2 * marge) + 'px';
      toile.width = Math.round((largeur + 2 * marge) * dpr);
      toile.height = Math.round((hauteur + 2 * marge) * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, marge * dpr, marge * dpr);
      couches = [];
      if (largeur < 1 || hauteur < 1) { bandes = 0; return; }
      const vertical = cfg.direction === 'haut' || cfg.direction === 'bas';
      axe = vertical ? hauteur : largeur;
      travers = vertical ? largeur : hauteur;
      bandes = lineaire()
        ? Math.max(1, Math.ceil(travers / taille))
        : Math.min(160, Math.max(16, Math.round(Math.PI * Math.hypot(largeur, hauteur) / 2 / taille)));
      const alea = nouveauAleatoire();
      decalagesBandes = new Float32Array(bandes);
      for (let i = 0; i < bandes; i++) decalagesBandes[i] = alea() - 0.5;
      for (let l = 0; l < cfg.couches; l++) {
        const s = Math.max(3, taille / Math.pow(2, l));
        const colonnes = Math.ceil(largeur / s), lignes = Math.ceil(hauteur / s), n = colonnes * lignes;
        const couche = { taille: s, x: new Float32Array(n), y: new Float32Array(n), u: new Float32Array(n), bande: new Uint16Array(n), hasard: new Float32Array(n) };
        for (let r = 0, i = 0; r < lignes; r++) {
          for (let c = 0; c < colonnes; c++, i++) {
            const [u, v] = versScan(c * s + s / 2, r * s + s / 2);
            couche.x[i] = c * s;
            couche.y[i] = r * s;
            couche.u[i] = u;
            couche.bande[i] = Math.min(bandes - 1, Math.floor(lineaire() ? (v * travers) / taille : v * bandes));
            couche.hasard[i] = alea();
          }
        }
        couches.push(couche);
      }
    }
    function front() {
      const e = (1 - Math.cos(Math.PI * progression)) / 2;
      const b = cfg.bande, amp = cfg.bruit * b;
      const debut = -b / 2 - 0.55 * amp, fin = 1 + b / 2 + 0.55 * amp;
      return debut + e * (fin - debut);
    }
    function appliquerDecoupe() {
      if (progression <= 0 || !bandes) { contenu.style.clipPath = progression >= 1 ? '' : 'inset(50%)'; return; }
      if (progression >= 1) { contenu.style.clipPath = ''; return; }
      const f = front(), amp = cfg.bruit * cfg.bande;
      const points = [];
      const ajouter = (u, v) => { const [x, y] = depuisScan(u, v); points.push(x.toFixed(1) + 'px ' + y.toFixed(1) + 'px'); };
      let toutVisible = true;
      if (lineaire()) ajouter(0, 0);
      for (let i = 0; i < bandes; i++) {
        let u = f - amp * 0.75 * decalagesBandes[i];
        let v0, v1;
        if (lineaire()) {
          u = Math.min(axe, Math.max(0, Math.round((u * axe) / taille) * taille)) / axe;
          v0 = Math.min(1, (i * taille) / travers);
          v1 = Math.min(1, ((i + 1) * taille) / travers);
        } else {
          u = Math.min(1, Math.max(0, u));
          v0 = i / bandes;
          v1 = (i + 1) / bandes;
        }
        if (u < 1) toutVisible = false;
        ajouter(u, v0);
        ajouter(u, v1);
      }
      if (lineaire()) ajouter(0, 1);
      contenu.style.clipPath = toutVisible ? '' : 'polygon(' + points.join(',') + ')';
    }
    function dessiner() {
      ctx.clearRect(-marge, -marge, largeur + 2 * marge, hauteur + 2 * marge);
      if (progression <= 0 || progression >= 1) return;
      const b = cfg.bande, amp = cfg.bruit * b, f = front();
      for (let l = 0; l < couches.length; l++) {
        const couche = couches[l], s = couche.taille, n = couche.u.length;
        for (let i = 0; i < n; i++) {
          const t = couche.u[i] + amp * (0.75 * decalagesBandes[couche.bande[i]] + 0.3 * (couche.hasard[i] - 0.5));
          let k = (f - t) / b + 0.5;
          const x = couche.x[i], y = couche.y[i];
          if (l === 0) {
            if (k <= 0 || k >= 1) continue;
            if (k < 0.25) {
              const a = k / 0.25;
              if (cfg.lueur > 0) {
                const g = s * 1.8;
                ctx.globalAlpha = cfg.lueur * 0.35 * (1 - a);
                ctx.fillStyle = couleurs.reflet;
                ctx.fillRect(x + (s - g) / 2, y + (s - g) / 2, g, g);
              }
              const z = Math.max(2, Math.round(s * (0.35 + 0.65 * a))), o = (s - z) / 2;
              ctx.globalAlpha = 0.5 + 0.5 * a;
              ctx.fillStyle = couleurs.reflet;
              ctx.fillRect(x + o, y + o, z, z);
            } else if (k < 0.75) {
              ctx.globalAlpha = 1;
              ctx.fillStyle = k < 0.5 ? couleurs.clair : couleurs.moyen;
              ctx.fillRect(x, y, s, s);
            } else {
              ctx.globalAlpha = (1 - k) / 0.25;
              ctx.fillStyle = couleurs.sombre;
              ctx.fillRect(x, y, s, s);
            }
          } else {
            if (couche.hasard[i] < 0.55) continue;
            k += 0.2 * l;
            if (k <= 0 || k >= 0.6) continue;
            ctx.globalAlpha = (k < 0.2 ? k / 0.2 : (0.6 - k) / 0.4) * (1 - 0.25 * l);
            ctx.fillStyle = k < 0.3 ? couleurs.reflet : couleurs.clair;
            ctx.fillRect(x, y, s, s);
          }
        }
      }
      ctx.globalAlpha = 1;
    }
    function rendre() { appliquerDecoupe(); dessiner(); }
    function pas(temps) {
      idImage = 0;
      const ecart = dernierTemps ? Math.min(0.05, (temps - dernierTemps) / 1000) : 0;
      dernierTemps = temps;
      progression = Math.min(1, Math.max(0, progression + (sens * ecart) / cfg.duree));
      rendre();
      if ((sens > 0 && progression < 1) || (sens < 0 && progression > 0)) idImage = requestAnimationFrame(pas);
    }
    function arreter() { clearTimeout(attente); attente = 0; cancelAnimationFrame(idImage); idImage = 0; }
    construire();
    rendre();
    return {
      jouer(nouveauSens, delai = 0) {
        arreter();
        sens = nouveauSens;
        attente = setTimeout(() => { attente = 0; dernierTemps = 0; idImage = requestAnimationFrame(pas); }, delai * 1000);
      },
      placer(p) { arreter(); progression = p; rendre(); },
      reconstruire() { construire(); rendre(); },
      mettreAJour(nouvelle) { cfg = nouvelle; construire(); rendre(); },
      detruire() {
        arreter();
        toile.remove();
        while (contenu.firstChild) element.insertBefore(contenu.firstChild, contenu);
        contenu.remove();
        element.classList.remove('scan-cible');
      }
    };
  },
  monter(conteneur, reglages, options) {
    if (!document.getElementById('css-' + this.id)) {
      const style = document.createElement('style');
      style.id = 'css-' + this.id;
      style.textContent = this.css;
      document.head.appendChild(style);
    }
    let r = { ...reglages };
    const statique = options.reduireAnimations;
    const scene = document.createElement('div');
    scene.className = 'scan-scene';
    if (statique) scene.dataset.statique = '1';
    const M = '0,0 22,0 50,48 78,0 100,0 100,100 80,100 80,40 50,88 20,40 20,100 0,100';
    const sponsors = [['NOVA', 'rond'], ['KRYPT', 'losange'], ['ORBIT', 'anneau'], ['VANTA', 'triangle'], ['HELIX', 'barres'], ['PULSE', 'carre']];
    const stat = (nom, valeur) => '<div class="scan-stat"><span>' + nom + '</span><i><b style="width:' + valeur + '%"></b></i><span>' + valeur + '</span></div>';
    scene.innerHTML =
      '<div class="scan-defilement" tabindex="0" role="region" aria-label="Maquette de page : faites défiler, chaque bloc apparaît par un balayage de pixels">' +
        '<section class="scan-hero">' +
          '<div class="scan-logo" data-scan><svg viewBox="-6 -8 112 114" aria-label="Logo M">' +
            '<defs><linearGradient id="scan-or" x1="0" y1="0" x2="1" y2="1">' +
              '<stop offset="0" style="stop-color:var(--metal-reflet)"/><stop offset=".45" style="stop-color:var(--metal-clair)"/><stop offset="1" style="stop-color:var(--metal-sombre)"/>' +
            '</linearGradient></defs>' +
            '<polygon points="' + M + '" fill="url(#scan-or)"/>' +
            '<polygon style="fill:var(--metal-reflet)" points="' + this.pointsEtoile(50, 15, 14, 8).map(p => p.join(',')).join(' ') + '"/>' +
          '</svg></div>' +
          '<div data-scan><p class="scan-mot">MANSUR</p></div>' +
          '<div data-scan><p class="scan-accroche">Esport · Saison 2026-27</p></div>' +
          '<p class="scan-indice">Faites défiler ↓</p>' +
        '</section>' +
        '<section class="scan-section">' +
          '<div data-scan><h3 class="scan-titre">Nos partenaires</h3></div>' +
          '<div class="scan-grille">' + sponsors.map(([nom, forme]) =>
            '<div data-scan><div class="scan-sponsor"><span class="scan-forme scan-forme--' + forme + '"></span>' + nom + '</div></div>').join('') + '</div>' +
        '</section>' +
        '<section class="scan-section">' +
          '<div data-scan><div class="scan-carte"><p class="scan-carte-role">Duelliste · Valorant</p><p class="scan-carte-pseudo">Pseudo</p>' +
            stat('Précision', 78) + stat('Éliminations', 64) + stat('Clutchs', 52) + '</div></div>' +
        '</section>' +
        '<section class="scan-section scan-fin">' +
          '<div data-scan><h3 class="scan-grand">Saison 2026-27</h3></div>' +
          '<div data-scan><p class="scan-texte">Les logos, les titres et les sponsors apparaissent derrière un balayage de pixels dorés. Remontez : ils s\'effacent à l\'envers.</p></div>' +
        '</section>' +
      '</div>' +
      '<div class="scan-commandes"><button type="button" data-rejouer>Rejouer</button></div>';
    conteneur.appendChild(scene);
    const defilement = scene.querySelector('.scan-defilement');
    const cibles = [...scene.querySelectorAll('[data-scan]')];
    const styles = getComputedStyle(scene);
    const texte = styles.getPropertyValue('--couleur-texte').trim() || 'currentColor';
    const lire = nom => styles.getPropertyValue(nom).trim() || texte;
    const couleurs = { reflet: lire('--metal-reflet'), clair: lire('--metal-clair'), moyen: lire('--metal-moyen'), sombre: lire('--metal-sombre') };
    const aleatoire = graine => () => { let a = graine; return () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
    const coeurs = statique ? [] : cibles.map((cible, i) => this.creerScan(cible, r, couleurs, aleatoire(20261013 + i * 7919)));
    const entres = new Set();
    let observateur = null, attenteRejouer = 0;
    function observer() {
      if (observateur) observateur.disconnect();
      const seuil = r.seuil / 100;
      observateur = new IntersectionObserver(entrees => {
        const entrants = [];
        for (const entree of entrees) {
          const i = cibles.indexOf(entree.target);
          if (entree.isIntersecting && entree.intersectionRatio >= seuil - 0.01) {
            if (!entres.has(i)) { entres.add(i); entrants.push(i); }
          } else if (entree.intersectionRatio < seuil / 2 && entres.has(i)) {
            entres.delete(i);
            if (r.sortie) coeurs[i].jouer(-1);
          }
        }
        entrants.sort((a, b) => a - b).forEach((i, n) => coeurs[i].jouer(1, n * r.decalage));
      }, { root: defilement, threshold: [0, seuil / 2, seuil] });
      cibles.forEach(cible => observateur.observe(cible));
    }
    function rejouer() {
      clearTimeout(attenteRejouer); attenteRejouer = 0;
      [...entres].sort((a, b) => a - b).forEach((i, n) => { coeurs[i].placer(0); coeurs[i].jouer(1, n * r.decalage); });
    }
    scene.querySelector('[data-rejouer]').addEventListener('click', rejouer);
    const observateurTaille = new ResizeObserver(entrees => {
      for (const entree of entrees) { const i = cibles.indexOf(entree.target); if (coeurs[i]) coeurs[i].reconstruire(); }
    });
    if (!statique) {
      cibles.forEach(cible => observateurTaille.observe(cible));
      observer();
    }
    return {
      mettreAJour(nouveaux) {
        const seuilChange = nouveaux.seuil !== r.seuil;
        r = { ...nouveaux };
        if (statique) return;
        coeurs.forEach(coeur => coeur.mettreAJour(r));
        if (seuilChange) observer();
        clearTimeout(attenteRejouer);
        attenteRejouer = setTimeout(rejouer, 300);
      },
      detruire() {
        clearTimeout(attenteRejouer);
        if (observateur) observateur.disconnect();
        observateurTaille.disconnect();
        coeurs.forEach(coeur => coeur.detruire());
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
enregistrerEffet(EffetPixelScan);
