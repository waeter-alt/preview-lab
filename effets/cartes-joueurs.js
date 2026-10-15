const EffetCartesJoueurs = {
  id: 'cartes-joueurs',
  nom: 'Cartes joueurs (carrousel)',
  description: 'Cinq cartes de joueurs façon écran de sélection : le défilement fait passer les cartes de droite à gauche. Survolez la carte (ou touchez-la sur téléphone) pour la retourner sur le dos du maillot. Cliquer sur la carte suivante y amène directement.',
  variables: ['--metal-sombre', '--metal-moyen', '--metal-clair', '--metal-reflet', '--couleur-fond', '--couleur-surface', '--couleur-nuit', '--couleur-lueur', '--couleur-texte', '--couleur-motif', '--police-titre', '--police-logo'],
  joueurs: [
    { numero: '01', pseudo: 'Noctis', role: 'Duelliste', agent: 'Jett', photo: 'images/joueurs/joueur-01.jpg', acs: 271, kd: '1.34', hs: 32 },
    { numero: '02', pseudo: 'Kaze', role: 'Initiateur', agent: 'Sova', photo: 'images/joueurs/joueur-02.jpg', acs: 214, kd: '1.12', hs: 26 },
    { numero: '03', pseudo: 'Lyra', role: 'Contrôleuse', agent: 'Omen', photo: 'images/joueurs/joueur-03.jpg', acs: 198, kd: '1.05', hs: 24 },
    { numero: '04', pseudo: 'Sahir', role: 'Sentinelle', agent: 'Killjoy', photo: 'images/joueurs/joueur-04.jpg', acs: 205, kd: '1.18', hs: 28 },
    { numero: '05', pseudo: 'Vortex', role: 'Flex · IGL', agent: 'Skye', photo: 'images/joueurs/joueur-05.jpg', acs: 189, kd: '0.97', hs: 22 }
  ],
  parametres: [
    { categorie: 'Défilement', id: 'longueur', libelle: 'Défilement · distance par carte (% de hauteur d\'écran)', type: 'nombre', min: 30, max: 200, pas: 5, defaut: 80 },
    { categorie: 'Défilement', id: 'marges', libelle: 'Défilement · arrêt avant la 1re et après la dernière carte (% de hauteur d\'écran)', type: 'nombre', min: 0, max: 150, pas: 5, defaut: 60 },
    { categorie: 'Défilement', id: 'inertie', libelle: 'Défilement · fluidité (0 = sec, 1 = très amorti)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.6 },
    { categorie: 'Défilement', id: 'aimant', libelle: 'Défilement · arrêt sur chaque carte (0 = glissement continu)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.6 },
    { categorie: 'Carte suivante', id: 'ecart', libelle: 'Carte suivante · écart (part de la largeur d\'une carte)', type: 'nombre', min: 0.4, max: 1.3, pas: 0.02, defaut: 0.8 },
    { categorie: 'Carte suivante', id: 'tailleSuivante', libelle: 'Carte suivante · taille (1 = même taille)', type: 'nombre', min: 0.5, max: 1, pas: 0.02, defaut: 0.8 },
    { categorie: 'Carte suivante', id: 'ombreSuivante', libelle: 'Carte suivante · assombrissement', type: 'nombre', min: 0, max: 0.9, pas: 0.05, defaut: 0.55 },
    { categorie: 'Carte suivante', id: 'inclinaison', libelle: 'Carte suivante · inclinaison 3D (degrés)', type: 'nombre', min: 0, max: 40, pas: 1, defaut: 12 },
    { categorie: 'Photo', id: 'desaturation', libelle: 'Photo · désaturation (0 = couleurs d\'origine)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.25 },
    { categorie: 'Photo', id: 'teinte', libelle: 'Photo · voile doré', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.4 },
    { categorie: 'Photo', id: 'trame', libelle: 'Photo · lignes d\'écran', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.2 },
    { categorie: 'Photo', id: 'reflet', libelle: 'Photo · reflet qui passe sur la carte active', type: 'interrupteur', defaut: true },
    { categorie: 'Retournement', id: 'agrandissement', libelle: 'Retournement · agrandissement au survol', type: 'nombre', min: 1, max: 1.4, pas: 0.01, defaut: 1.1 },
    { categorie: 'Retournement', id: 'dureeRetournement', libelle: 'Retournement · durée (s)', type: 'nombre', min: 0.3, max: 1.6, pas: 0.05, defaut: 0.8 },
    { categorie: 'Retournement', id: 'rebond', libelle: 'Retournement · rebond en fin de rotation (0 = aucun)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.5 },
    { categorie: 'Retournement', id: 'flottement', libelle: 'Retournement · flottement au survol (px, 0 = immobile)', type: 'nombre', min: 0, max: 20, pas: 1, defaut: 6 }
  ],
  css: `
.cj-scene { position: absolute; inset: 0; --h: 600px; --long: 1200px; --carte-l: 260px; --panneau: 104px; color: var(--couleur-texte); }
.cj-defilement { position: absolute; inset: 0; overflow-x: hidden; overflow-y: auto; scrollbar-width: thin; }
.cj-intro { box-sizing: border-box; min-height: calc(var(--h) * .7); display: grid; place-content: center; justify-items: center; gap: 12px; padding: 32px 24px; text-align: center; }
.cj-intro h2 { margin: 0; font: 800 clamp(44px, 9vw, 110px)/.9 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .04em;
  background: linear-gradient(180deg, var(--metal-reflet) 0%, var(--metal-clair) 45%, var(--metal-sombre) 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; }
.cj-intro p { margin: 0; font: 600 12px/1.4 system-ui, sans-serif; letter-spacing: .3em; text-transform: uppercase; opacity: .65; }
.cj-piste { position: relative; height: calc(var(--h) + var(--long)); }
.cj-etage { position: sticky; top: 0; height: var(--h); overflow: hidden; }
.cj-etage::before { content: ""; position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(ellipse 38% 46% at 46% 54%, color-mix(in srgb, var(--metal-moyen) 22%, transparent), transparent 70%); }
.cj-entete { position: absolute; left: 20px; top: 16px; z-index: 60; display: grid; gap: 6px; }
.cj-entete small { font: 600 10px/1 system-ui, sans-serif; letter-spacing: .3em; text-transform: uppercase; opacity: .6; }
.cj-compteur { font: 800 34px/1 var(--police-titre, "Arial Narrow", sans-serif); color: var(--metal-clair); }
.cj-compteur span { font-size: 16px; color: var(--couleur-texte); opacity: .5; }
.cj-points { display: flex; gap: 6px; }
.cj-points i { width: 16px; height: 3px; background: color-mix(in srgb, var(--couleur-texte) 25%, transparent); transition: background .3s, width .3s; }
.cj-points i.actif { width: 28px; background: linear-gradient(90deg, var(--metal-sombre), var(--metal-reflet)); }
.cj-cartes { position: absolute; inset: 0; perspective: 1400px; }
.cj-carte { position: absolute; left: 50%; top: 50%; width: var(--carte-l); height: calc(var(--carte-l) * 1.25 + var(--panneau));
  margin-left: calc(var(--carte-l) / -2); margin-top: calc((var(--carte-l) * 1.25 + var(--panneau)) / -2 - 4px);
  will-change: transform, opacity; cursor: pointer; -webkit-tap-highlight-color: transparent; }
.cj-survol { position: absolute; inset: 0; perspective: 1100px; transition: transform var(--cj-duree, .8s) var(--cj-courbe, ease); }
.cj-carte.retournee .cj-survol { transform: scale(var(--cj-agrandi, 1.1)); }
.cj-flotte { position: absolute; inset: 0; }
.cj-flotte.flotte { animation: cj-flotte 3.2s ease-in-out calc(var(--cj-duree, .8s) * .5) infinite; }
@keyframes cj-flotte {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
  30% { transform: translate3d(0, calc(var(--cj-flotte, 6px) * -1), 0) rotate(.6deg); }
  70% { transform: translate3d(0, calc(var(--cj-flotte, 6px) * .5), 0) rotate(-.5deg); } }
.cj-pivot { position: absolute; inset: 0; transform-style: preserve-3d; transition: transform var(--cj-duree, .8s) var(--cj-courbe, ease); }
.cj-carte.retournee .cj-pivot { transform: rotateY(180deg); }
.cj-face { position: absolute; inset: 0; overflow: hidden; border-radius: 12px; border: 1.5px solid transparent; backface-visibility: hidden; -webkit-backface-visibility: hidden;
  container-type: inline-size; box-shadow: 0 18px 40px -18px var(--couleur-nuit);
  background: linear-gradient(var(--couleur-surface), var(--couleur-surface)) padding-box,
              linear-gradient(150deg, var(--metal-reflet), var(--metal-sombre) 35%, var(--metal-clair) 65%, var(--metal-sombre)) border-box; }
.cj-voile { position: absolute; inset: 0; border-radius: 12px; background: var(--couleur-nuit); opacity: 0; pointer-events: none; }
.cj-photo { position: relative; height: calc(var(--carte-l) * 1.25); overflow: hidden;
  background: radial-gradient(circle at 50% 38%, var(--couleur-lueur) 0 18%, transparent 19%), radial-gradient(ellipse 60% 40% at 50% 100%, var(--couleur-lueur) 0 70%, transparent 71%), var(--couleur-surface); }
.cj-photo img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: grayscale(var(--cj-desat, .25)) contrast(1.06); }
.cj-sans-photo img { display: none; }
.cj-teinte { position: absolute; inset: 0; mix-blend-mode: overlay; opacity: var(--cj-teinte, .4);
  background: linear-gradient(200deg, var(--metal-reflet) 0%, var(--metal-moyen) 45%, var(--metal-sombre) 100%); }
.cj-trame { position: absolute; inset: 0; opacity: var(--cj-trame, .2);
  background: repeating-linear-gradient(0deg, var(--couleur-nuit) 0 1px, transparent 1px 3px); }
.cj-degrade { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 42%, color-mix(in srgb, var(--couleur-surface) 70%, transparent) 66%, color-mix(in srgb, var(--couleur-surface) 94%, transparent) 84%, var(--couleur-surface) 100%); }
.cj-brillance { position: absolute; inset: -10% -60%; opacity: 0; pointer-events: none;
  background: linear-gradient(105deg, transparent 40%, color-mix(in srgb, var(--metal-reflet) 45%, transparent) 50%, transparent 60%); }
.cj-carte.active .cj-brillance { opacity: 1; animation: cj-brillance 4.5s ease-in-out infinite; }
.cj-scene[data-sans-reflet] .cj-brillance { display: none; }
@keyframes cj-brillance { 0% { transform: translate3d(-60%, 0, 0); } 45%, 100% { transform: translate3d(60%, 0, 0); } }
.cj-numero { position: absolute; right: 7cqw; top: 4cqw; font: 800 19cqw/1 var(--police-titre, "Arial Narrow", sans-serif); color: transparent;
  -webkit-text-stroke: 1px var(--metal-clair); opacity: .85; }
.cj-identite { position: absolute; left: 7cqw; right: 7cqw; bottom: 4cqw; }
.cj-identite small { display: block; font: 700 3.6cqw/1 system-ui, sans-serif; letter-spacing: .3em; text-transform: uppercase; color: var(--metal-clair); }
.cj-pseudo { margin: 1.5cqw 0 0; font: 800 15cqw/.9 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .02em; color: var(--couleur-texte); }
.cj-panneau { box-sizing: border-box; height: var(--panneau); padding: 10px 7cqw 12px; display: grid; align-content: space-between; }
.cj-ligne { display: flex; justify-content: space-between; gap: 8px; font: 700 12px/1.2 system-ui, sans-serif; }
.cj-ligne span { display: block; font-size: 9px; font-weight: 600; letter-spacing: .2em; text-transform: uppercase; opacity: .55; margin-bottom: 3px; }
.cj-ligne > div:last-child { text-align: right; }
.cj-losange { display: inline-block; width: 7px; height: 7px; margin-right: 6px; transform: rotate(45deg) translateY(-1px);
  background: linear-gradient(135deg, var(--metal-reflet), var(--metal-sombre)); }
.cj-stats { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid color-mix(in srgb, var(--metal-moyen) 35%, transparent); padding-top: 8px; text-align: center; }
.cj-stats b { display: block; font: 700 20px/1 var(--police-titre, "Arial Narrow", sans-serif); color: var(--metal-clair); }
.cj-stats span { font: 600 9px/1 system-ui, sans-serif; letter-spacing: .2em; text-transform: uppercase; opacity: .55; }
.cj-dos { transform: rotateY(180deg); display: grid; justify-items: center; align-content: start; text-align: center; }
.cj-dos::before { content: ""; position: absolute; inset: 0; pointer-events: none; background-color: var(--couleur-motif); opacity: .16;
  --etoile: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.2'%3E%3Crect x='12' y='12' width='16' height='16'/%3E%3Crect x='12' y='12' width='16' height='16' transform='rotate(45 20 20)'/%3E%3C/g%3E%3Cpath d='M0 -2.5L2.5 0L0 2.5L-2.5 0Z M40 -2.5L42.5 0L40 2.5L37.5 0Z M0 37.5L2.5 40L0 42.5L-2.5 40Z M40 37.5L42.5 40L40 42.5L37.5 40Z'/%3E%3C/svg%3E");
  -webkit-mask: var(--etoile) 0 0 / 34px 34px repeat; mask: var(--etoile) 0 0 / 34px 34px repeat; }
.cj-dos > * { position: relative; }
.cj-dos-col { position: absolute; left: 0; top: 0; width: 100%; height: 16%; }
.cj-dos-arabe { margin: 17cqw 0 0; font: 600 8cqw/1 "Segoe UI", "Noto Naskh Arabic", "Arial", sans-serif; color: var(--metal-moyen); }
.cj-dos-pseudo { margin: 9cqw 0 0; font: 800 15cqw/.9 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .06em; color: var(--couleur-texte); }
.cj-dos-numero { margin: 3cqw 0 0; font: 800 62cqw/.85 var(--police-titre, "Arial Narrow", sans-serif); letter-spacing: -.02em;
  background: linear-gradient(180deg, var(--metal-reflet) 0%, var(--metal-clair) 40%, var(--metal-moyen) 70%, var(--metal-sombre) 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; }
.cj-dos-ourlet { position: absolute; left: 0; bottom: 0; width: 100%; height: 9%; }
.cj-aide { position: absolute; left: 0; right: 0; bottom: 64px; z-index: 60; margin: 0; text-align: center; font: 600 10px/1 system-ui, sans-serif; letter-spacing: .25em; text-transform: uppercase; opacity: .5; }
.cj-aide .tactile { display: none; }
@media (hover: none) { .cj-aide .souris { display: none; } .cj-aide .tactile { display: inline; } }
.cj-fin { box-sizing: border-box; min-height: calc(var(--h) * .6); display: grid; place-content: center; padding: 40px 24px 90px; text-align: center; }
.cj-fin p { margin: 0; max-width: 40ch; line-height: 1.6; opacity: .7; }
.cj-commandes {
  position: absolute; left: 50%; bottom: 12px; z-index: 70; transform: translateX(-50%); display: flex; align-items: center; gap: 10px;
  padding: 8px 12px; border-radius: 999px; background: color-mix(in srgb, var(--couleur-surface) 88%, transparent);
  border: 1px solid color-mix(in srgb, var(--couleur-texte) 18%, transparent); color: var(--couleur-texte); font: 600 12px/1 system-ui, sans-serif;
}
.cj-commandes button { padding: 6px 12px; border: 0; border-radius: 999px; cursor: pointer; font: inherit; color: var(--couleur-surface);
  background: linear-gradient(135deg, var(--metal-sombre), var(--metal-clair) 45%, var(--metal-reflet) 55%, var(--metal-clair)); }
.cj-commandes input[type="range"] { width: clamp(90px, 22vw, 220px); accent-color: var(--metal-clair); }
.cj-commandes output { min-width: 4ch; text-align: right; font-family: ui-monospace, Consolas, monospace; }
.cj-scene[data-statique] .cj-piste { height: auto; }
.cj-scene[data-statique] .cj-etage { position: relative; height: auto; overflow: visible; padding: 70px 16px 40px; }
.cj-scene[data-statique] .cj-cartes { position: relative; display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; perspective: none; }
.cj-scene[data-statique] .cj-carte { position: relative; left: auto; top: auto; margin: 0; }
.cj-scene[data-statique] .cj-survol, .cj-scene[data-statique] .cj-pivot { transition: none; }
.cj-scene[data-statique] .cj-carte.retournee .cj-survol { transform: none; }
.cj-scene[data-statique] .cj-points, .cj-scene[data-statique] .cj-compteur, .cj-scene[data-statique] .cj-aide,
.cj-scene[data-statique] .cj-commandes { display: none; }`,
  monter(conteneur, reglages, options) {
    if (!document.getElementById('css-' + this.id)) {
      const style = document.createElement('style');
      style.id = 'css-' + this.id;
      style.textContent = this.css;
      document.head.appendChild(style);
    }
    let r = { ...reglages };
    const statique = options.reduireAnimations;
    const joueurs = this.joueurs;
    const N = joueurs.length;
    const scene = document.createElement('div');
    scene.className = 'cj-scene';
    if (statique) scene.dataset.statique = '1';
    const col = '<svg class="cj-dos-col" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true">' +
      '<polygon points="30,0 50,9 70,0 64,0 50,5.5 36,0" style="fill:var(--metal-moyen)"/>' +
      '<polyline points="0,14 16,0" fill="none" style="stroke:var(--metal-sombre)" stroke-width=".8" vector-effect="non-scaling-stroke"/>' +
      '<polyline points="100,14 84,0" fill="none" style="stroke:var(--metal-sombre)" stroke-width=".8" vector-effect="non-scaling-stroke"/></svg>';
    const ourlet = '<svg class="cj-dos-ourlet" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true">' +
      '<polygon points="0,20 50,4 100,20" style="fill:var(--couleur-nuit)"/>' +
      '<polyline points="0,20 50,4 100,20" fill="none" style="stroke:var(--metal-moyen)" stroke-width="1.5" vector-effect="non-scaling-stroke"/></svg>';
    const carte = (j, i) =>
      '<div class="cj-carte" data-i="' + i + '" role="button" tabindex="0" aria-label="' + j.pseudo + ', ' + j.role + ' : retourner la carte">' +
        '<div class="cj-survol"><div class="cj-flotte"><div class="cj-pivot">' +
          '<div class="cj-face cj-avant">' +
            '<div class="cj-photo"><img src="' + j.photo + '" alt="' + j.pseudo + '" decoding="async">' +
              '<span class="cj-teinte"></span><span class="cj-trame"></span><span class="cj-degrade"></span><span class="cj-brillance"></span>' +
              '<span class="cj-numero">' + j.numero + '</span>' +
              '<div class="cj-identite"><small>' + j.role + '</small><p class="cj-pseudo">' + j.pseudo + '</p></div>' +
            '</div>' +
            '<div class="cj-panneau">' +
              '<div class="cj-ligne"><div><span>Rôle</span>' + j.role + '</div><div><span>Agent favori</span><i class="cj-losange"></i>' + j.agent + '</div></div>' +
              '<div class="cj-stats"><div><b>' + j.acs + '</b><span>ACS</span></div><div><b>' + j.kd + '</b><span>K/D</span></div><div><b>' + j.hs + '%</b><span>HS</span></div></div>' +
            '</div>' +
          '</div>' +
          '<div class="cj-face cj-dos" aria-hidden="true">' + col +
            '<p class="cj-dos-arabe" lang="ar" dir="rtl">منصور</p>' +
            '<p class="cj-dos-pseudo">' + j.pseudo + '</p>' +
            '<p class="cj-dos-numero">' + j.numero + '</p>' + ourlet +
          '</div>' +
        '</div></div></div>' +
        '<span class="cj-voile"></span>' +
      '</div>';
    scene.innerHTML =
      '<div class="cj-defilement" tabindex="0" role="region" aria-label="Maquette de page : faites défiler pour faire passer les cartes des joueurs">' +
        '<section class="cj-intro"><h2>L\'équipe</h2><p>Valorant · Saison 2026-27 · faites défiler ↓</p></section>' +
        '<section class="cj-piste"><div class="cj-etage">' +
          '<div class="cj-entete"><small>Sélection du joueur</small><div class="cj-compteur">01 <span>/ ' + String(N).padStart(2, '0') + '</span></div>' +
            '<div class="cj-points">' + joueurs.map(() => '<i></i>').join('') + '</div></div>' +
          '<div class="cj-cartes">' + joueurs.map(carte).join('') + '</div>' +
          '<p class="cj-aide"><span class="souris">Survolez la carte pour la retourner</span><span class="tactile">Touchez la carte pour la retourner</span></p>' +
        '</div></section>' +
        '<section class="cj-fin"><p>Fin de la présentation de l\'équipe. Remontez pour revoir les cartes défiler dans l\'autre sens.</p></section>' +
      '</div>' +
      '<div class="cj-commandes"><button type="button" data-lecture>Lecture</button>' +
        '<input type="range" min="0" max="1000" step="1" value="0" aria-label="Progression du carrousel"><output>0 %</output></div>';
    conteneur.appendChild(scene);
    const defilement = scene.querySelector('.cj-defilement');
    const piste = scene.querySelector('.cj-piste');
    const etage = scene.querySelector('.cj-etage');
    const cartes = [...scene.querySelectorAll('.cj-carte')];
    const voiles = cartes.map(c => c.querySelector('.cj-voile'));
    const flottes = cartes.map(c => c.querySelector('.cj-flotte'));
    const points = [...scene.querySelectorAll('.cj-points i')];
    const compteur = scene.querySelector('.cj-compteur');
    const boutonLecture = scene.querySelector('[data-lecture]');
    const curseur = scene.querySelector('input[type="range"]');
    const affichage = scene.querySelector('output');
    scene.querySelectorAll('.cj-photo img').forEach(img => img.addEventListener('error', () => img.parentElement.classList.add('cj-sans-photo')));
    let hauteurEcran = 0, longueur = 0, marge = 0, largeurCarte = 260;
    const debutCartes = () => piste.offsetTop + marge;
    let position = 0;
    let derniereImage = 0, idImage = 0, idLecture = 0, visible = true, actif = -1;
    const progression = () => (longueur > 0 ? Math.min(1, Math.max(0, (defilement.scrollTop - debutCartes()) / longueur)) : 0);
    function positionVisee() {
      const brute = progression() * (N - 1);
      const base = Math.floor(brute), f = brute - base;
      const aimantee = f < 0.5 ? 0.5 * Math.pow(2 * f, 3) : 1 - 0.5 * Math.pow(2 - 2 * f, 3);
      return Math.min(N - 1, base + (1 - r.aimant) * f + r.aimant * aimantee);
    }
    function appliquerReglages() {
      scene.style.setProperty('--cj-duree', r.dureeRetournement + 's');
      scene.style.setProperty('--cj-courbe', 'cubic-bezier(.35, ' + (1 + 0.7 * r.rebond).toFixed(2) + ', .45, 1)');
      scene.style.setProperty('--cj-agrandi', String(r.agrandissement));
      scene.style.setProperty('--cj-flotte', r.flottement + 'px');
      scene.style.setProperty('--cj-desat', String(r.desaturation));
      scene.style.setProperty('--cj-teinte', String(r.teinte));
      scene.style.setProperty('--cj-trame', String(r.trame));
      if (r.reflet) delete scene.dataset.sansReflet; else scene.dataset.sansReflet = '1';
    }
    function mettreEnPage() {
      hauteurEcran = defilement.clientHeight;
      longueur = statique ? 0 : (N - 1) * (r.longueur / 100) * hauteurEcran;
      marge = statique ? 0 : (r.marges / 100) * hauteurEcran;
      scene.style.setProperty('--h', hauteurEcran + 'px');
      scene.style.setProperty('--long', (longueur + 2 * marge) + 'px');
      const largeurEcran = defilement.clientWidth;
      const panneau = 104;
      const hauteurLibre = (hauteurEcran - 180) / r.agrandissement;
      largeurCarte = Math.max(140, Math.min(300, largeurEcran * 0.55, (hauteurLibre - panneau) / 1.25));
      if (statique) largeurCarte = Math.min(260, largeurEcran - 40);
      scene.style.setProperty('--carte-l', largeurCarte + 'px');
      scene.style.setProperty('--panneau', panneau + 'px');
    }
    function placerCartes() {
      const L = largeurCarte, s = r.tailleSuivante, ecart = r.ecart * L;
      const centrage = (L / 2 - ecart - (s * L) / 2) / 2;
      cartes.forEach((carte, i) => {
        const d = i - position;
        let x, echelle, opacite, voile, angle;
        if (d >= 0) {
          const d1 = Math.min(d, 1), d2 = Math.min(Math.max(d - 1, 0), 1);
          x = ecart * d1 + ecart * 0.6 * s * d2;
          echelle = Math.pow(s, Math.min(d, 2));
          opacite = d <= 1 ? 1 : Math.max(0, 1 - (d - 1) * 1.4);
          voile = r.ombreSuivante * d1 + (1 - r.ombreSuivante) * 0.5 * d2;
          angle = -r.inclinaison * d1;
        } else {
          const g = Math.max(d, -1.5);
          x = g * L * 1.1;
          echelle = 1 + 0.08 * g;
          opacite = Math.max(0, 1 + g * 1.3);
          voile = Math.min(1, -g) * 0.4;
          angle = r.inclinaison * Math.min(1, -g);
        }
        carte.style.transform = 'translate3d(' + (x + centrage).toFixed(1) + 'px, 0, 0) rotateY(' + angle.toFixed(2) + 'deg) scale(' + echelle.toFixed(4) + ')';
        carte.style.opacity = opacite.toFixed(3);
        carte.style.visibility = opacite < 0.002 ? 'hidden' : '';
        carte.style.zIndex = String(50 - Math.round(Math.abs(d) * 10));
        voiles[i].style.opacity = voile.toFixed(3);
      });
      const nouvelActif = Math.round(position);
      if (nouvelActif !== actif) {
        actif = nouvelActif;
        cartes.forEach((carte, i) => {
          carte.classList.toggle('active', i === actif);
          if (i !== actif) retourner(i, false);
        });
        points.forEach((p, i) => p.classList.toggle('actif', i === actif));
        compteur.firstChild.textContent = String(actif + 1).padStart(2, '0') + ' ';
      }
      curseur.value = String(Math.round(progression() * 1000));
      affichage.textContent = Math.round(progression() * 100) + ' %';
    }
    function retourner(i, oui) {
      const carte = cartes[i], flotte = flottes[i];
      if (carte.classList.contains('retournee') === oui) return;
      carte.classList.toggle('retournee', oui);
      if (statique) return;
      if (oui) {
        flotte.style.transition = '';
        flotte.style.transform = '';
        if (r.flottement > 0) flotte.classList.add('flotte');
      } else if (flotte.classList.contains('flotte')) {
        flotte.style.transform = getComputedStyle(flotte).transform;
        flotte.classList.remove('flotte');
        void flotte.offsetWidth;
        flotte.style.transition = 'transform .45s ease-out';
        flotte.style.transform = 'none';
      }
    }
    function boucle(temps) {
      idImage = 0;
      if (!visible) return;
      const ecart = derniereImage ? Math.min(0.05, (temps - derniereImage) / 1000) : 1 / 60;
      derniereImage = temps;
      const visee = positionVisee();
      const suivi = r.inertie <= 0 ? 1 : 1 - Math.pow(1 - (1 - r.inertie) * 0.35 - 0.02, ecart * 60);
      position += (visee - position) * suivi;
      if (Math.abs(visee - position) < 0.0005) position = visee;
      placerCartes();
      if (position !== visee) idImage = requestAnimationFrame(boucle); else derniereImage = 0;
    }
    const demarrer = () => { if (!idImage && visible && !statique) idImage = requestAnimationFrame(boucle); };
    function arreterLecture() { cancelAnimationFrame(idLecture); idLecture = 0; boutonLecture.textContent = 'Lecture'; }
    function lire() {
      if (idLecture) { arreterLecture(); return; }
      const duree = N * 1600;
      const aLaFin = progression() >= 0.995;
      const depart = performance.now() - (aLaFin ? 0 : progression() * duree);
      boutonLecture.textContent = 'Pause';
      const pas = maintenant => {
        const p = Math.min(1, (maintenant - depart) / duree);
        defilement.scrollTop = debutCartes() + p * longueur;
        if (p < 1) idLecture = requestAnimationFrame(pas); else arreterLecture();
      };
      idLecture = requestAnimationFrame(pas);
    }
    let dernierPointeur = 'mouse';
    cartes.forEach((carte, i) => {
      carte.addEventListener('pointerenter', e => { dernierPointeur = e.pointerType; if (e.pointerType === 'mouse' && (statique || i === actif)) retourner(i, true); });
      carte.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') retourner(i, false); });
      carte.addEventListener('pointerdown', e => { dernierPointeur = e.pointerType; });
      const activer = () => {
        if (!statique && i !== actif) {
          arreterLecture();
          defilement.scrollTo({ top: debutCartes() + (i / (N - 1)) * longueur, behavior: 'smooth' });
        } else if (dernierPointeur !== 'mouse') retourner(i, !carte.classList.contains('retournee'));
      };
      carte.addEventListener('click', activer);
      carte.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); dernierPointeur = 'clavier'; activer(); } });
    });
    boutonLecture.addEventListener('click', lire);
    curseur.addEventListener('input', () => { arreterLecture(); defilement.scrollTop = debutCartes() + (Number(curseur.value) / 1000) * longueur; });
    defilement.addEventListener('scroll', demarrer, { passive: true });
    defilement.addEventListener('wheel', arreterLecture, { passive: true });
    defilement.addEventListener('touchstart', arreterLecture, { passive: true });
    const observateurVisibilite = new IntersectionObserver(entrees => { visible = entrees[0].isIntersecting; demarrer(); });
    observateurVisibilite.observe(etage);
    const observateurTaille = new ResizeObserver(() => { mettreEnPage(); if (!statique) placerCartes(); });
    observateurTaille.observe(defilement);
    appliquerReglages();
    mettreEnPage();
    if (!statique) { position = positionVisee(); placerCartes(); }
    return {
      mettreAJour(nouveaux) {
        const p = progression();
        r = { ...nouveaux };
        appliquerReglages();
        mettreEnPage();
        if (statique) return;
        defilement.scrollTop = debutCartes() + p * longueur;
        position = positionVisee();
        placerCartes();
      },
      detruire() {
        arreterLecture();
        cancelAnimationFrame(idImage); idImage = 0; visible = false;
        observateurVisibilite.disconnect();
        observateurTaille.disconnect();
        scene.remove();
      }
    };
  }
};
enregistrerEffet(EffetCartesJoueurs);
