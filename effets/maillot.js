const EffetMaillot = {
  id: 'maillot',
  nom: 'Transition maillot',
  description: 'Le site enfile le maillot : le col en V dépose le tissu étoilé et cousu, et la transition se termine directement sur le dos du maillot. Faites défiler la maquette, ou utilisez Lecture.',
  variables: ['--metal-sombre', '--metal-moyen', '--metal-clair', '--metal-reflet', '--couleur-fond', '--couleur-surface', '--couleur-lueur', '--couleur-texte', '--couleur-motif', '--opacite-motif', '--police-titre', '--police-logo'],
  parametres: [
    { categorie: 'Défilement', id: 'longueur', libelle: 'Défilement · durée (% de hauteur d\'écran)', type: 'nombre', min: 60, max: 250, pas: 5, defaut: 120 },
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
    { categorie: 'Motif', id: 'tissu', libelle: 'Motif · visibilité (0 = tissu uni)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.5 },
    { categorie: 'Motif', id: 'motifTaille', libelle: 'Motif · écart entre deux étoiles (px)', type: 'nombre', min: 24, max: 120, pas: 2, defaut: 56 },
    { categorie: 'Motif', id: 'motifEtoile', libelle: 'Motif · taille des étoiles (part de l\'écart)', type: 'nombre', min: 0.3, max: 1, pas: 0.05, defaut: 0.7 },
    { categorie: 'Motif', id: 'motifTrait', libelle: 'Motif · épaisseur du contour des étoiles (px)', type: 'nombre', min: 0.5, max: 3, pas: 0.1, defaut: 1.2 },
    { categorie: 'Motif', id: 'motifLosanges', libelle: 'Motif · taille des petits losanges (px, 0 = aucun)', type: 'nombre', min: 0, max: 12, pas: 0.5, defaut: 3 },
    { categorie: 'Motif', id: 'motifLosangeCentre', libelle: 'Motif · un losange au cœur de chaque étoile', type: 'interrupteur', defaut: false },
    { categorie: 'Hero', id: 'poussiere', libelle: 'Hero · poussière d\'or', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.65 },
    { categorie: 'Hero', id: 'refletLogo', libelle: 'Hero · reflet qui balaie le logo', type: 'interrupteur', defaut: true }
  ],
  css: `
.maillot-scene { position: absolute; inset: 0; --h: 600px; --long: 720px; }
.maillot-defilement { position: absolute; inset: 0; overflow-x: hidden; overflow-y: auto; scrollbar-width: thin; }
.maillot-hero { position: relative; height: calc(var(--h) + var(--long)); }
.maillot-etage { position: sticky; top: 0; height: var(--h); overflow: hidden; display: grid; place-items: center;
  background: radial-gradient(ellipse 110% 90% at 50% 45%, var(--couleur-lueur) 0%, var(--couleur-fond) 60%, var(--couleur-surface) 100%); }
.maillot-etage::before { content: ""; position: absolute; inset: 0; pointer-events: none; background-color: var(--couleur-motif); opacity: var(--opacite-motif);
  --etoile: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.4'%3E%3Crect x='16' y='16' width='24' height='24'/%3E%3Crect x='16' y='16' width='24' height='24' transform='rotate(45 28 28)'/%3E%3C/g%3E%3Ccircle cx='0' cy='0' r='2'/%3E%3C/svg%3E");
  -webkit-mask: var(--etoile) 0 0 / 56px 56px repeat; mask: var(--etoile) 0 0 / 56px 56px repeat; }
.maillot-contenu { position: relative; z-index: 1; display: grid; justify-items: center; gap: 14px; padding: 24px; text-align: center; will-change: transform, opacity; }
.maillot-logo { width: clamp(90px, 16vw, 170px); height: auto; overflow: visible; }
.maillot-logo .etoile { filter: drop-shadow(0 0 6px var(--metal-reflet)); }
.maillot-mot { margin: 6px 0 0; font: 400 clamp(20px, 4.2vw, 46px)/1 var(--police-logo, "Arial Black", sans-serif); letter-spacing: .42em; padding-left: .42em; color: var(--couleur-texte); }
.maillot-arabe { margin: 0; font: 600 clamp(14px, 2vw, 20px)/1 "Segoe UI", "Noto Naskh Arabic", "Arial", sans-serif; color: var(--metal-moyen); }
.maillot-accroche { margin: 8px 0 0; font: 700 clamp(13px, 1.6vw, 17px)/1 var(--police-titre, "Arial Narrow", sans-serif); letter-spacing: .28em; text-transform: uppercase; color: var(--metal-moyen); }
.maillot-toile { position: absolute; inset: 0; z-index: 3; width: 100%; height: 100%; pointer-events: none; }
.maillot-tissu { position: absolute; left: 0; top: 0; z-index: 2; width: 100%; height: calc(var(--h) + var(--montee) + var(--marge));
  background: var(--maillot-tissu); clip-path: polygon(0 0, 50% var(--montee), 100% 0, 100% 100%, 0 100%);
  overflow: hidden; pointer-events: none; will-change: transform; transform: translate3d(0, 300vh, 0); }
.maillot-imprime { position: absolute; inset: -24px -40px; will-change: transform;
  animation: maillot-flotte var(--flotte-duree, 5s) ease-in-out infinite alternate; }
@keyframes maillot-flotte {
  from { transform: translate3d(0, calc(var(--flottement, .5) * -7px), 0) skewY(calc(var(--flottement, .5) * -.7deg)); }
  to { transform: translate3d(0, calc(var(--flottement, .5) * 7px), 0) skewY(calc(var(--flottement, .5) * .7deg)); } }
.maillot-imprime::before { content: ""; position: absolute; inset: 0; background-color: var(--maillot-motif-couleur); opacity: calc(var(--tissu, .5) * .35);
  -webkit-mask: var(--motif-maillot) 0 0 / var(--motif-taille) var(--motif-taille) repeat;
  mask: var(--motif-maillot) 0 0 / var(--motif-taille) var(--motif-taille) repeat; }
.maillot-plis { position: absolute; inset: 0; overflow: hidden; opacity: 0; pointer-events: none; }
.maillot-pli { position: absolute; top: 0; left: 0; height: 100%; will-change: transform; }
.maillot-pli-a { width: calc(100% + var(--pas-a)); animation: maillot-pli-a var(--plis-duree, 14s) linear infinite;
  background: repeating-linear-gradient(76deg, var(--plis-sombre) 0, transparent calc(var(--plis-taille) * .24), var(--plis-clair) calc(var(--plis-taille) * .5), transparent calc(var(--plis-taille) * .76), var(--plis-sombre) var(--plis-taille)); }
.maillot-pli-b { width: calc(100% + var(--pas-b)); opacity: .75; animation: maillot-pli-b calc(var(--plis-duree, 14s) * 1.45) linear infinite;
  background: repeating-linear-gradient(114deg, var(--plis-sombre) 0, transparent calc(var(--plis-taille-b) * .24), var(--plis-clair) calc(var(--plis-taille-b) * .5), transparent calc(var(--plis-taille-b) * .76), var(--plis-sombre) var(--plis-taille-b)); }
@keyframes maillot-pli-a { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(calc(-1 * var(--pas-a)), 0, 0); } }
@keyframes maillot-pli-b { from { transform: translate3d(calc(-1 * var(--pas-b)), 0, 0); } to { transform: translate3d(0, 0, 0); } }
.maillot-scene[data-vent-fige] .maillot-pli, .maillot-scene[data-vent-fige] .maillot-imprime { animation-play-state: paused; }
.maillot-dos { position: relative; overflow: hidden; min-height: var(--h); padding: calc(var(--h) * .1) 24px calc(var(--h) * .22);
  background: var(--maillot-tissu); color: var(--maillot-encre); text-align: center; display: grid; justify-items: center; align-content: start; gap: 10px; }
.maillot-dos::before { content: ""; position: absolute; inset: 0; pointer-events: none; background-color: var(--maillot-motif-couleur); opacity: calc(var(--tissu, .5) * .35);
  -webkit-mask: var(--motif-maillot) 0 0 / var(--motif-taille) var(--motif-taille) repeat; mask: var(--motif-maillot) 0 0 / var(--motif-taille) var(--motif-taille) repeat; }
.maillot-dos > * { position: relative; }
.maillot-nuque { margin: 0; font: 600 clamp(14px, 2vw, 20px)/1 "Segoe UI", "Noto Naskh Arabic", "Arial", sans-serif; color: var(--metal-moyen); }
.maillot-pseudo { margin: calc(var(--h) * .04) 0 0; font: 800 clamp(48px, 11vw, 120px)/.9 var(--police-titre, "Arial Narrow", sans-serif); letter-spacing: .04em; text-transform: uppercase; color: var(--maillot-encre); }
.maillot-soulignement { width: clamp(120px, 22vw, 240px); height: 2px; background: var(--metal-moyen); }
.maillot-filigrane { width: clamp(110px, 20vw, 220px); margin-top: 10px; opacity: .14; }
.maillot-dos p { margin: 6px auto 0; max-width: 40ch; opacity: .7; }
.maillot-dos .maillot-ourlet { position: absolute; left: 0; right: 0; bottom: 0; width: 100%; height: calc(var(--h) * .2); }
.maillot-dos--tissu { position: absolute; left: 40px; right: 40px; top: calc(var(--dos-haut) + 24px); height: var(--dos-hauteur); min-height: 0;
  background: none; padding: 0 24px calc(var(--dos-hauteur) * .2); align-content: center; }
.maillot-dos--tissu .maillot-ourlet { height: calc(var(--dos-hauteur) * .16); }
.maillot-dos--tissu .maillot-filigrane { position: absolute; left: 50%; top: calc(50% - var(--dos-hauteur) * .1); transform: translate(-50%, -50%); margin: 0;
  width: min(42%, calc(var(--dos-hauteur) * .55)); z-index: 0; }
.maillot-dos--tissu .maillot-pseudo, .maillot-dos--tissu .maillot-nuque, .maillot-dos--tissu .maillot-soulignement { z-index: 1; }
.maillot-dos--tissu p:not(.maillot-nuque) { display: none; }
.maillot-dos--tissu .maillot-soulignement { margin-bottom: calc(var(--dos-hauteur) * .08); }
.maillot-dos--tissu::before { content: none; }
.maillot-dos--statique { display: none; }
.maillot-scene[data-statique] .maillot-dos--statique { display: grid; }
.maillot-commandes { position: absolute; left: 50%; bottom: 12px; z-index: 5; transform: translateX(-50%); display: flex; align-items: center; gap: 10px;
  padding: 8px 12px; border-radius: 999px; background: color-mix(in srgb, var(--couleur-surface) 88%, transparent);
  border: 1px solid color-mix(in srgb, var(--couleur-texte) 18%, transparent); color: var(--couleur-texte); font: 600 12px/1 system-ui, sans-serif; }
.maillot-commandes button { padding: 6px 12px; border: 0; border-radius: 999px; cursor: pointer; font: inherit; color: var(--couleur-surface);
  background: linear-gradient(135deg, var(--metal-sombre), var(--metal-moyen) 45%, var(--metal-reflet) 55%, var(--metal-moyen)); }
.maillot-commandes input[type="range"] { width: clamp(90px, 22vw, 220px); accent-color: var(--metal-moyen); }
.maillot-commandes output { min-width: 5ch; text-align: right; font-family: ui-monospace, Consolas, monospace; }
.maillot-scene[data-statique] .maillot-toile, .maillot-scene[data-statique] .maillot-commandes, .maillot-scene[data-statique] .maillot-tissu { display: none; }
html[data-qualite="allege"] .maillot-plis, html[data-qualite="minimal"] .maillot-plis { display: none; }
html[data-qualite="allege"] .maillot-imprime, html[data-qualite="minimal"] .maillot-imprime { animation: none; }
html[data-qualite="minimal"] .maillot-imprime::before, html[data-qualite="minimal"] .maillot-dos::before { display: none; }`,
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
    scene.className = 'maillot-scene';
    if (statique) scene.dataset.statique = '1';
    const contenuDos =
      '<p class="maillot-nuque" lang="ar" dir="rtl">منصور</p>' +
      '<h3 class="maillot-pseudo">Pseudo</h3><span class="maillot-soulignement"></span>' +
      '<svg class="maillot-filigrane" viewBox="0 0 100 100" aria-hidden="true"><polygon points="0,0 22,0 50,48 78,0 100,0 100,100 80,100 80,40 50,88 20,40 20,100 0,100" style="fill:var(--metal-moyen)"/></svg>' +
      '<p>Le dos du maillot : la transition se termine directement dessus.</p>' +
      '<svg class="maillot-ourlet" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true"><polygon points="0,20 50,6 100,20" style="fill:var(--maillot-ourlet)"/><polyline points="0,20 50,6 100,20" fill="none" style="stroke:var(--metal-moyen)" stroke-width="1.2" vector-effect="non-scaling-stroke"/></svg>';
    scene.innerHTML =
      '<div class="maillot-defilement" tabindex="0" role="region" aria-label="Maquette de page : faites défiler pour voir le site enfiler le maillot">' +
        '<section class="maillot-hero"><div class="maillot-etage">' +
          '<div class="maillot-contenu">' +
            '<svg class="maillot-logo" viewBox="-6 -8 112 114" aria-label="Logo M">' +
              '<defs><linearGradient id="maillot-reflet" gradientUnits="userSpaceOnUse" x1="-40" y1="0" x2="0" y2="-20">' +
                '<stop offset="0" style="stop-color:var(--metal-moyen)"/><stop offset=".5" style="stop-color:var(--metal-reflet)"/><stop offset="1" style="stop-color:var(--metal-moyen)"/>' +
                '<animateTransform attributeName="gradientTransform" type="translate" values="-20 0; 170 0; 170 0" keyTimes="0; .45; 1" dur="3.6s" repeatCount="indefinite"/>' +
              '</linearGradient></defs>' +
              '<polygon points="0,0 22,0 50,48 78,0 100,0 100,100 80,100 80,40 50,88 20,40 20,100 0,100" style="fill:var(--metal-moyen)"/>' +
              '<polygon class="maillot-brillance" points="0,0 22,0 50,48 78,0 100,0 100,100 80,100 80,40 50,88 20,40 20,100 0,100" fill="url(#maillot-reflet)" opacity=".9"/>' +
              '<polygon class="etoile" style="fill:var(--metal-reflet)" points="' + this.pointsEtoile(50, 15, 14, 8).map(p => p.join(',')).join(' ') + '"/>' +
            '</svg>' +
            '<p class="maillot-mot">MANSUR</p>' +
            '<p class="maillot-arabe" lang="ar" dir="rtl">منصور</p>' +
            '<p class="maillot-accroche">Esport · Saison 2026-27</p>' +
          '</div>' +
          '<div class="maillot-tissu" aria-hidden="true">' +
            '<div class="maillot-imprime"><div class="maillot-dos maillot-dos--tissu">' + contenuDos + '</div></div>' +
            '<div class="maillot-plis"><div class="maillot-pli maillot-pli-a"></div><div class="maillot-pli maillot-pli-b"></div></div>' +
          '</div>' +
          '<canvas class="maillot-toile" aria-hidden="true"></canvas>' +
        '</div></section>' +
        '<section class="maillot-dos maillot-dos--statique">' + contenuDos + '</section>' +
      '</div>' +
      '<div class="maillot-commandes"><button type="button" data-lecture>Lecture</button>' +
        '<input type="range" min="0" max="1000" step="1" value="0" aria-label="Progression de la transition"><output>0 %</output></div>';
    conteneur.appendChild(scene);
    const defilement = scene.querySelector('.maillot-defilement');
    const contenu = scene.querySelector('.maillot-contenu');
    const toile = scene.querySelector('.maillot-toile');
    const tissu = scene.querySelector('.maillot-tissu');
    const plisCalque = scene.querySelector('.maillot-plis');
    const ctx = toile.getContext('2d');
    const brillance = scene.querySelector('.maillot-brillance');
    const animationReflet = scene.querySelector('animateTransform');
    const boutonLecture = scene.querySelector('[data-lecture]');
    const curseur = scene.querySelector('input[type="range"]');
    const affichage = scene.querySelector('output');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
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
    const etage = scene.querySelector('.maillot-etage');
    const dosStatique = scene.querySelector('.maillot-dos--statique');
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
      scene.style.setProperty('--maillot-tissu', remplissage);
      scene.style.setProperty('--maillot-encre', encre);
      scene.style.setProperty('--maillot-motif-couleur', couleurMotif);
      scene.style.setProperty('--maillot-ourlet', blanc ? encre : 'transparent');
      for (const el of [etage.querySelector('.maillot-tissu'), dosStatique]) {
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
      scene.style.setProperty('--long', longueur + 'px');
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
      scene.style.setProperty('--dos-hauteur', Math.max(120, hauteur - basDuCol) + 'px');
      creerPoussiere();
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
      curseur.value = String(Math.round(progression() * 1000));
      affichage.textContent = Math.round(progression() * 100) + ' %';
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
      const duree = 4000;
      const aLaFin = progression() >= 0.995;
      const depart = performance.now() - (aLaFin ? 0 : progression() * duree);
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
    defilement.addEventListener('wheel', arreterLecture, { passive: true });
    defilement.addEventListener('touchstart', arreterLecture, { passive: true });
    const observateurVisibilite = new IntersectionObserver(entrees => { visible = entrees[0].isIntersecting; demarrer(); });
    observateurVisibilite.observe(scene);
    const observateurTaille = new ResizeObserver(() => { mettreEnPage(); });
    observateurTaille.observe(defilement);
    mettreEnPage();
    appliquerReflet();
    demarrer();
    return {
      mettreAJour(nouveaux) {
        const p = progression();
        r = { ...nouveaux };
        mettreEnPage();
        defilement.scrollTop = p * longueur;
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
enregistrerEffet(EffetMaillot);
