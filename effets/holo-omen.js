const EffetHoloOmen = {
  id: 'holo-omen',
  nom: 'Holo · Omen',
  description: 'L\'hologramme d\'Omen seul, devant son grand nom. Passez la souris dessus : l\'hologramme se brouille autour du curseur (tranches qui se décalent et se colorent, d\'autant plus que la souris va vite), puis se resynchronise quand elle s\'arrête ; un clic le décharge.',
  variables: ['--couleur-nuit'],
  image: 'images/agents/omen-full.webp',
  fond: 'ressources-maquette/V-valorant/agents/omen/fond.png',
  parametres: [
    { categorie: 'Hologramme', id: 'couleur', libelle: 'Hologramme · couleur', type: 'couleur', defaut: '#8FB0CC' },
    { categorie: 'Hologramme', id: 'obscurite', libelle: 'Hologramme · assombrissement de la scène (0 = aucun)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.85 },
    { categorie: 'Hologramme', id: 'taille', libelle: 'Hologramme · taille (part de la hauteur de l\'écran)', type: 'nombre', min: 0.4, max: 1.2, pas: 0.01, defaut: 0.95 },
    { categorie: 'Hologramme', id: 'tremblement', libelle: 'Hologramme · tremblement (0 = stable)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.3 },
    { categorie: 'Hologramme', id: 'lignes', libelle: 'Hologramme · lignes de balayage (0 = aucune)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.55 },
    { categorie: 'Hologramme', id: 'nomFond', libelle: 'Hologramme · grand nom derrière l\'agent (0 = caché)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.3 },
    { categorie: 'Hologramme', id: 'faisceau', libelle: 'Hologramme · intensité du faisceau (0 = éteint)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.4 },
    { categorie: 'Brouillage', id: 'brouillage', libelle: 'Brouillage · actif au passage de la souris', type: 'interrupteur', defaut: true },
    { categorie: 'Brouillage', id: 'style', libelle: 'Brouillage · style', type: 'choix', defaut: 'interference',
      options: [{ valeur: 'interference', libelle: 'Interférence : charge, glissement, couleur, resynchronisation' }, { valeur: 'saccade', libelle: 'Saccadé : la première version' }] },
    { categorie: 'Brouillage', id: 'rayon', libelle: 'Brouillage · largeur de la zone autour de la souris (px)', type: 'nombre', min: 30, max: 500, pas: 5, defaut: 170 },
    { categorie: 'Brouillage', id: 'hauteurZone', libelle: 'Brouillage · hauteur de la zone autour de la souris (px)', type: 'nombre', min: 20, max: 400, pas: 5, defaut: 120 },
    { categorie: 'Brouillage', id: 'tranches', libelle: 'Brouillage · nombre de tranches qui se décalent', type: 'nombre', min: 1, max: 8, pas: 1, defaut: 5 },
    { categorie: 'Brouillage', id: 'epaisseur', libelle: 'Brouillage · épaisseur des tranches (px)', type: 'nombre', min: 2, max: 40, pas: 1, defaut: 20 },
    { categorie: 'Brouillage', id: 'decalage', libelle: 'Brouillage · décalage des tranches (px)', type: 'nombre', min: 0, max: 80, pas: 1, defaut: 22 },
    { categorie: 'Brouillage', id: 'cadence', libelle: 'Brouillage · changements par seconde (plus = plus nerveux)', type: 'nombre', min: 4, max: 60, pas: 1, defaut: 60 },
    { categorie: 'Brouillage', id: 'eclat', libelle: 'Brouillage · saccadé : trait lumineux à la hauteur de la souris (0 = aucun)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.6 },
    { categorie: 'Brouillage', id: 'persistance', libelle: 'Brouillage · durée avant de se stabiliser quand la souris s\'arrête (s)', type: 'nombre', min: 0.1, max: 2, pas: 0.05, defaut: 0.45 },
    { categorie: 'Interférence', id: 'reactivite', libelle: 'Interférence · charge selon la vitesse de la souris (plus = se brouille plus vite)', type: 'nombre', min: 0.2, max: 3, pas: 0.05, defaut: 1 },
    { categorie: 'Interférence', id: 'glisse', libelle: 'Interférence · glissement des tranches entre deux positions (ms, 0 = saut sec)', type: 'nombre', min: 0, max: 300, pas: 5, defaut: 260 },
    { categorie: 'Interférence', id: 'elasticite', libelle: 'Interférence · élasticité : les tranches dépassent leur place puis reviennent (0 = aucune)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 1 },
    { categorie: 'Interférence', id: 'derive', libelle: 'Interférence · reflets de couleur des tranches (degrés, 0 = aucun)', type: 'nombre', min: 0, max: 120, pas: 1, defaut: 120 },
    { categorie: 'Interférence', id: 'resync', libelle: 'Interférence · resynchronisation (balayage lumineux) quand la souris s\'arrête', type: 'interrupteur', defaut: false },
    { categorie: 'Interférence', id: 'decharge', libelle: 'Interférence · décharge sur toute la hauteur au clic', type: 'interrupteur', defaut: true }
  ],
  css: `
.hom-scene { position: absolute; inset: 0; overflow: hidden; container-type: size; --holo-doux: color-mix(in srgb, var(--holo) 45%, transparent); }
.hom-nuit { position: absolute; inset: 0; background: var(--couleur-nuit); opacity: var(--obscurite, .85); }
.hom-agent { position: absolute; left: 50%; bottom: 3cqh; height: min(calc(var(--taille) * 100cqh), 100cqw); aspect-ratio: 1; transform: translateX(-50%); touch-action: none; }
.hom-faisceau { position: absolute; left: 30%; right: 30%; top: 66%; bottom: 1%; clip-path: polygon(50% 100%, 0 0, 100% 0); mix-blend-mode: screen; opacity: var(--faisceau);
  background: linear-gradient(0deg, color-mix(in srgb, var(--holo) 75%, transparent), color-mix(in srgb, var(--holo) 20%, transparent) 46%, transparent);
  animation: hom-scintille 3.1s steps(1) infinite; }
.hom-socle { position: absolute; left: 38%; right: 38%; bottom: 0; height: 2.4%; border-radius: 50%; background: radial-gradient(ellipse at center, var(--holo) 0%, var(--holo-doux) 45%, transparent 72%); }
.hom-projection { position: absolute; inset: 0; mix-blend-mode: screen; animation: hom-allumage .6s linear .2s both; }
.hom-nom-fond { position: absolute; left: 50%; top: 4%; height: 88%; aspect-ratio: 700 / 1024; transform: translateX(-50%); background: var(--holo); opacity: var(--nom-fond);
  -webkit-mask: var(--fond) center / contain no-repeat; mask: var(--fond) center / contain no-repeat; }
.hom-tremble { position: absolute; inset: 0; animation: hom-tremble 2.3s steps(1) infinite; }
.hom-copie { position: absolute; inset: 0; isolation: isolate; }
.hom-copie img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; filter: grayscale(1) contrast(1.25) brightness(1.15); }
.hom-teinte, .hom-lignes { position: absolute; inset: 0; -webkit-mask: var(--img) center / contain no-repeat; mask: var(--img) center / contain no-repeat; }
.hom-teinte { background: var(--holo); mix-blend-mode: color; }
.hom-lignes { background: repeating-linear-gradient(0deg, var(--couleur-nuit) 0 2px, transparent 2px 5px); opacity: var(--lignes); }
.hom-tranche { position: absolute; inset: 0; display: none; -webkit-mask: var(--img) center / contain no-repeat; mask: var(--img) center / contain no-repeat; }
.hom-tranche > .hom-copie { will-change: transform; }
.hom-tranche .hom-copie img { filter: grayscale(1) contrast(1.4) brightness(1.5); }
.hom-scene[data-brouille] .hom-tranche { display: block; }
.hom-trait { position: absolute; left: 0; width: 0; top: 0; height: 2px; display: none; background: var(--holo); box-shadow: 0 0 10px 2px var(--holo-doux); pointer-events: none; }
.hom-scene[data-brouille] .hom-trait { display: block; }
.hom-scene[data-style="interference"] .hom-tranche { transition: clip-path var(--glisse) cubic-bezier(.3, var(--rebond), .45, 1); }
.hom-scene[data-style="interference"] .hom-tranche > .hom-copie { transition: transform var(--glisse) cubic-bezier(.3, var(--rebond), .45, 1); }
.hom-scene[data-style="interference"] .hom-tranche:nth-child(odd) { filter: hue-rotate(var(--derive)) saturate(1.6); }
.hom-scene[data-style="interference"] .hom-tranche:nth-child(even) { filter: hue-rotate(calc(var(--derive) * -1)) saturate(1.6); }
.hom-scene[data-style="interference"] .hom-trait { display: none; }
.hom-scan { position: absolute; inset: 0; pointer-events: none; opacity: 0; background-repeat: no-repeat; background-size: 100% 300%;
  background-image: linear-gradient(180deg, transparent 0%, transparent 42%, color-mix(in srgb, var(--holo) 25%, transparent) 48%, var(--holo) 50%, transparent 51%, transparent 100%);
  -webkit-mask: var(--img) center / contain no-repeat; mask: var(--img) center / contain no-repeat; }
.hom-scan.joue { animation: hom-scan .55s cubic-bezier(.4, 0, .2, 1); }
@keyframes hom-scan { 0% { opacity: 1; background-position: 0 100%; } 85% { opacity: 1; } 100% { opacity: 0; background-position: 0 0; } }
.hom-copie.flash { animation: hom-flash .45s ease-out; }
@keyframes hom-flash { 0% { filter: brightness(1.7); } 100% { filter: none; } }
@keyframes hom-allumage { 0% { opacity: 0; } 12% { opacity: .85; } 20% { opacity: .05; } 34% { opacity: .9; } 42% { opacity: .2; } 56% { opacity: .9; } 66% { opacity: .55; } 76%, 100% { opacity: .95; } }
@keyframes hom-scintille { 0% { opacity: var(--faisceau); } 37% { opacity: calc(var(--faisceau) * .8); } 39% { opacity: var(--faisceau); } 87% { opacity: calc(var(--faisceau) * .65); } 89% { opacity: var(--faisceau); } }
@keyframes hom-tremble {
  0%, 9%, 40%, 69%, 89% { transform: translate3d(0, 0, 0); opacity: 1; }
  7% { transform: translate3d(calc(var(--force) * 3px), 0, 0); opacity: calc(1 - var(--force) * .25); }
  38% { transform: translate3d(calc(var(--force) * -2px), 0, 0) skewX(calc(var(--force) * 2deg)); opacity: calc(1 - var(--force) * .4); }
  66% { transform: translate3d(calc(var(--force) * 1.5px), calc(var(--force) * -1px), 0); opacity: calc(1 - var(--force) * .15); }
  88% { transform: translate3d(calc(var(--force) * -4px), 0, 0); opacity: calc(1 - var(--force) * .5); } }
.hom-scene[data-calme] * { animation: none !important; }`,
  monter(conteneur, reglages, options) {
    if (!document.getElementById('css-' + this.id)) {
      const style = document.createElement('style');
      style.id = 'css-' + this.id;
      style.textContent = this.css;
      document.head.appendChild(style);
    }
    let r = { ...reglages };
    const calme = options.reduireAnimations;
    const url = u => 'url("' + u + '")';
    const copie = classe => '<div class="hom-copie' + classe + '"><img src="' + this.image + '" alt="" decoding="async"><span class="hom-teinte"></span><span class="hom-lignes"></span></div>';
    const scene = document.createElement('div');
    scene.className = 'hom-scene';
    if (calme) scene.dataset.calme = '1';
    scene.innerHTML = '<span class="hom-nuit"></span>' +
      '<div class="hom-agent" style=\'--img:' + url(this.image) + ';--fond:' + url(this.fond) + '\' aria-hidden="true">' +
        '<span class="hom-faisceau"></span>' +
        '<div class="hom-projection"><span class="hom-nom-fond"></span><div class="hom-tremble">' + copie('') + '<div class="hom-tranches"></div></div><span class="hom-trait"></span><span class="hom-scan"></span></div>' +
        '<span class="hom-socle"></span>' +
      '</div>';
    conteneur.appendChild(scene);
    const agent = scene.querySelector('.hom-agent');
    const zoneTranches = scene.querySelector('.hom-tranches');
    const trait = scene.querySelector('.hom-trait');
    const scan = scene.querySelector('.hom-scan');
    const principale = scene.querySelector('.hom-copie');
    let tranches = [];
    function preparerTranches() {
      if (tranches.length === r.tranches) return;
      zoneTranches.innerHTML = Array.from({ length: r.tranches }, () => '<div class="hom-tranche">' + copie('') + '</div>').join('');
      tranches = [...zoneTranches.children];
    }
    let cibleX = 0, cibleY = 0, x = 0, y = 0, charge = 0, chargeMax = 0, intensite = 0;
    let dernierMouvement = 0, dernierTirage = 0, finDecharge = 0, finRetour = 0, precedent = 0, idImage = 0;
    const hasard = (min, max) => min + Math.random() * (max - min);
    const decouper = (tranche, haut, epaisseur, largeur, l, h) => {
      const gauche = Math.max(0, x - largeur / 2), droite = Math.max(0, l - (x + largeur / 2));
      tranche.style.clipPath = 'inset(' + Math.max(0, haut).toFixed(1) + 'px ' + droite.toFixed(1) + 'px ' + Math.max(0, h - haut - epaisseur).toFixed(1) + 'px ' + gauche.toFixed(1) + 'px)';
    };
    const rejouer = (element, classe) => { element.classList.remove(classe); void element.offsetWidth; element.classList.add(classe); };
    function saccade(maintenant, l, h) {
      x = cibleX; y = cibleY;
      intensite = Math.max(0, 1 - (maintenant - dernierMouvement) / (r.persistance * 1000));
      if (intensite <= 0) return false;
      if (maintenant - dernierTirage >= 1000 / r.cadence) {
        dernierTirage = maintenant;
        for (const tranche of tranches) {
          decouper(tranche, y + hasard(-r.hauteurZone / 2, r.hauteurZone / 2), r.epaisseur * hasard(0.5, 1.5), r.rayon, l, h);
          tranche.firstChild.style.transform = 'translate3d(' + (hasard(-1, 1) * r.decalage * intensite).toFixed(1) + 'px, 0, 0)';
        }
        trait.style.cssText = 'left:' + (x - r.rayon / 2).toFixed(1) + 'px;width:' + r.rayon + 'px;top:' + (y + hasard(-3, 3)).toFixed(1) + 'px;opacity:' + (r.eclat * intensite).toFixed(2);
      }
      return true;
    }
    function interference(maintenant, pas, l, h) {
      const suivi = 1 - Math.pow(0.6, pas);
      x += (cibleX - x) * suivi; y += (cibleY - y) * suivi;
      const decharge = maintenant < finDecharge;
      if (!decharge && maintenant - dernierMouvement > 80) charge *= Math.pow(1 - 0.12 / r.persistance * 0.45, pas);
      if (charge < 0.03 && !decharge) {
        if (!finRetour) {
          finRetour = maintenant + r.glisse * 1.6;
          for (const tranche of tranches) tranche.firstChild.style.transform = 'translate3d(0, 0, 0)';
        }
        if (maintenant < finRetour) return true;
        if (r.resync && chargeMax > 0.25) { rejouer(scan, 'joue'); rejouer(principale, 'flash'); }
        charge = 0; chargeMax = 0; finRetour = 0;
        return false;
      }
      finRetour = 0;
      if (maintenant - dernierTirage >= 1000 / r.cadence) {
        dernierTirage = maintenant;
        const actives = decharge ? tranches.length : Math.max(1, Math.ceil(tranches.length * charge));
        const hauteur = decharge ? h : r.hauteurZone * (0.6 + 0.4 * charge), largeur = decharge ? l * 2 : r.rayon * (0.7 + 0.5 * charge);
        const centre = decharge ? h / 2 : y;
        tranches.forEach((tranche, i) => {
          if (i >= actives) { tranche.style.clipPath = 'inset(50% 50% 50% 50%)'; return; }
          decouper(tranche, centre + hasard(-hauteur / 2, hauteur / 2), r.epaisseur * hasard(0.6, 1.6) * (decharge ? 1.6 : 1), largeur, l, h);
          tranche.firstChild.style.transform = 'translate3d(' + (hasard(-1, 1) * r.decalage * (0.4 + 0.9 * charge)).toFixed(1) + 'px, 0, 0)';
        });
      }
      return true;
    }
    function dessiner(maintenant) {
      const pas = precedent ? Math.min(3, (maintenant - precedent) / 16.7) : 1;
      precedent = maintenant;
      const l = agent.clientWidth, h = agent.clientHeight;
      const encore = r.style === 'saccade' ? saccade(maintenant, l, h) : interference(maintenant, pas, l, h);
      if (!encore) { scene.removeAttribute('data-brouille'); idImage = 0; return; }
      scene.setAttribute('data-brouille', '');
      idImage = requestAnimationFrame(dessiner);
    }
    let silhouette = null;
    const lecture = new Image();
    lecture.onload = () => {
      try {
        const toile = document.createElement('canvas');
        toile.width = toile.height = 100;
        const ctx = toile.getContext('2d', { willReadFrequently: true });
        ctx.drawImage(lecture, 0, 0, 100, 100);
        silhouette = ctx.getImageData(0, 0, 100, 100).data;
      } catch (erreur) { silhouette = null; }
    };
    lecture.src = this.image;
    function surSilhouette(u, v) {
      if (u < 0 || v < 0 || u >= 1 || v >= 1) return false;
      if (!silhouette) return true;
      return silhouette[(Math.floor(v * 100) * 100 + Math.floor(u * 100)) * 4 + 3] > 40;
    }
    function suivre(evenement) {
      if (calme || !r.brouillage) return;
      const b = agent.getBoundingClientRect();
      const nx = evenement.clientX - b.left, ny = evenement.clientY - b.top;
      if (!surSilhouette(nx / b.width, ny / b.height)) return;
      const chemin = idImage ? Math.hypot(nx - cibleX, ny - cibleY) : 0;
      if (!idImage) { x = nx; y = ny; precedent = 0; }
      cibleX = nx; cibleY = ny;
      charge = Math.min(1, charge + chemin / 240 * r.reactivite + 0.04);
      chargeMax = Math.max(chargeMax, charge);
      if (evenement.type === 'pointerdown' && r.decharge && r.style !== 'saccade') { finDecharge = performance.now() + 280; charge = 1; chargeMax = 1; }
      dernierMouvement = performance.now();
      if (!idImage) idImage = requestAnimationFrame(dessiner);
    }
    scene.addEventListener('pointermove', suivre);
    scene.addEventListener('pointerdown', suivre);
    function appliquer() {
      const v = (nom, valeur) => scene.style.setProperty(nom, String(valeur));
      v('--holo', r.couleur);
      v('--obscurite', r.obscurite);
      v('--taille', r.taille);
      v('--force', r.tremblement);
      v('--lignes', r.lignes);
      v('--nom-fond', r.nomFond);
      v('--faisceau', r.faisceau);
      v('--glisse', r.glisse + 'ms');
      v('--rebond', (1 + 1.6 * r.elasticite).toFixed(2));
      v('--derive', r.derive + 'deg');
      scene.dataset.style = r.style;
      preparerTranches();
    }
    appliquer();
    return {
      mettreAJour(nouveaux) { r = { ...nouveaux }; appliquer(); },
      detruire() { cancelAnimationFrame(idImage); idImage = 0; scene.remove(); }
    };
  }
};
enregistrerEffet(EffetHoloOmen);
