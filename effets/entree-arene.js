const EffetEntreeArene = {
  id: 'entree-arene',
  nom: 'Entrée en arène',
  description: 'L\'entrée des joueurs dans l\'arène, vue en profondeur : faites défiler (ou appuyez sur Lecture) pour avancer dans le tunnel. Chaque joueur surgit du fond (hologramme de son agent, pseudo géant, photo, statistiques, éclats dorés), puis passe derrière la caméra. Finale : l\'équipe en formation sur l\'estrade.',
  variables: ['--metal-sombre', '--metal-moyen', '--metal-clair', '--metal-reflet', '--couleur-fond', '--couleur-lueur', '--couleur-texte', '--couleur-nuit', '--couleur-surface', '--police-titre', '--police-logo'],
  joueurs: [
    { numero: '01', pseudo: 'Noctis', role: 'Duelliste', agent: 'Jett', agentImage: 'images/agents/jett-full.webp', photo: 'images/joueurs/joueur-01.jpg', acs: 271, kd: 1.34, hs: 32 },
    { numero: '02', pseudo: 'Kaze', role: 'Initiateur', agent: 'Sova', agentImage: 'images/agents/sova-full.webp', photo: 'images/joueurs/joueur-02.jpg', acs: 214, kd: 1.12, hs: 26 },
    { numero: '03', pseudo: 'Lyra', role: 'Contrôleuse', agent: 'Omen', agentImage: 'images/agents/omen-full.webp', photo: 'images/joueurs/joueur-03.jpg', acs: 198, kd: 1.05, hs: 24 },
    { numero: '04', pseudo: 'Sahir', role: 'Sentinelle', agent: 'Killjoy', agentImage: 'images/agents/killjoy-full.webp', photo: 'images/joueurs/joueur-04.jpg', acs: 205, kd: 1.18, hs: 28 },
    { numero: '05', pseudo: 'Vortex', role: 'Flex · IGL', agent: 'Skye', agentImage: 'images/agents/skye-full.webp', photo: 'images/joueurs/joueur-05.jpg', acs: 189, kd: 0.97, hs: 22 }
  ],
  equipe: 'Mansur',
  parametres: [
    { categorie: 'Défilement', id: 'longueurJoueur', libelle: 'Défilement · longueur à faire défiler par joueur (en hauteurs d\'écran)', type: 'nombre', min: 0.4, max: 3, pas: 0.1, defaut: 1.2 },
    { categorie: 'Défilement', id: 'fluidite', libelle: 'Défilement · inertie (0 = suit sec, 0.95 = très coulé)', type: 'nombre', min: 0, max: 0.95, pas: 0.05, defaut: 0.85 },
    { categorie: 'Défilement', id: 'lectureDuree', libelle: 'Défilement · durée de la Lecture par joueur (s)', type: 'nombre', min: 0.8, max: 6, pas: 0.1, defaut: 2.6 },
    { categorie: 'Tunnel', id: 'focale', libelle: 'Tunnel · focale (petite = perspective plus forte)', type: 'nombre', min: 0.4, max: 2, pas: 0.05, defaut: 0.9 },
    { categorie: 'Tunnel', id: 'profondeur', libelle: 'Tunnel · profondeur visible (en focales)', type: 'nombre', min: 3, max: 14, pas: 0.5, defaut: 7 },
    { categorie: 'Tunnel', id: 'anneaux', libelle: 'Tunnel · nombre d\'anneaux', type: 'nombre', min: 4, max: 30, pas: 1, defaut: 16 },
    { categorie: 'Tunnel', id: 'vitesseTunnel', libelle: 'Tunnel · anneaux franchis par joueur', type: 'nombre', min: 0.5, max: 8, pas: 0.5, defaut: 3 },
    { categorie: 'Tunnel', id: 'sol', libelle: 'Tunnel · grille au sol (opacité, 0 = cachée)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.45 },
    { categorie: 'Projecteurs', id: 'projecteurs', libelle: 'Projecteurs · intensité des faisceaux (0 = éteints)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.5 },
    { categorie: 'Projecteurs', id: 'balayage', libelle: 'Projecteurs · durée d\'un balayage (s)', type: 'nombre', min: 2, max: 16, pas: 0.5, defaut: 7 },
    { categorie: 'Projecteurs', id: 'flash', libelle: 'Projecteurs · éclair à chaque arrivée (0 = aucun)', type: 'nombre', min: 0, max: 0.6, pas: 0.02, defaut: 0.24 },
    { categorie: 'Hologramme', id: 'holoCouleur', libelle: 'Hologramme · couleur', type: 'couleur', defaut: '#8FB0CC' },
    { categorie: 'Hologramme', id: 'holoTaille', libelle: 'Hologramme · taille (part de la hauteur de l\'écran)', type: 'nombre', min: 0.4, max: 1, pas: 0.02, defaut: 0.72 },
    { categorie: 'Hologramme', id: 'holoTremblement', libelle: 'Hologramme · tremblement (0 = stable)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.5 },
    { categorie: 'Hologramme', id: 'holoLignes', libelle: 'Hologramme · lignes de balayage (0 = aucune)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.5 },
    { categorie: 'Joueur', id: 'taillePseudo', libelle: 'Joueur · taille du pseudo géant', type: 'nombre', min: 0.5, max: 1.6, pas: 0.05, defaut: 1 },
    { categorie: 'Joueur', id: 'decalageLettres', libelle: 'Joueur · décalage entre les lettres du pseudo', type: 'nombre', min: 0, max: 0.2, pas: 0.01, defaut: 0.07 },
    { categorie: 'Joueur', id: 'eclats', libelle: 'Joueur · éclats dorés à chaque arrivée (0 = aucun)', type: 'nombre', min: 0, max: 80, pas: 2, defaut: 36 },
    { categorie: 'Joueur', id: 'sortie', libelle: 'Joueur · sortie', type: 'choix', defaut: 'camera', options: [
      { valeur: 'camera', libelle: 'Passe derrière la caméra' },
      { valeur: 'cote', libelle: 'S\'écarte sur le côté' }
    ] },
    { categorie: 'Finale', id: 'salve', libelle: 'Finale · salve de lumière', type: 'interrupteur', defaut: true }
  ],
  css: `
.ea-scene { position: absolute; inset: 0; overflow: hidden; color: var(--couleur-texte); font-family: system-ui, sans-serif;
  background: radial-gradient(ellipse 55% 50% at 50% 45%, var(--couleur-lueur), transparent 72%), var(--couleur-fond);
  --ea-holo: #8FB0CC; --ea-force: .5; --ea-lignes: .5; --ea-sol: .45; --ea-proj: .5; --ea-balayage: 7s; --ea-vp: 45%; }
.ea-etage { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
.ea-voile { position: absolute; inset: 0; background: radial-gradient(ellipse 70% 65% at 50% var(--ea-vp), transparent 35%, color-mix(in srgb, var(--couleur-nuit) 55%, transparent)); }
.ea-bout { position: absolute; left: 50%; top: var(--ea-vp); width: 46vmin; aspect-ratio: 1; transform: translate(-50%, -50%); border-radius: 50%;
  background: radial-gradient(circle, color-mix(in srgb, var(--metal-reflet) 55%, transparent), color-mix(in srgb, var(--ea-holo) 22%, transparent) 30%, transparent 65%); }
.ea-anneau { position: absolute; left: 50%; top: var(--ea-vp); width: 108%; height: 100%; opacity: 0; box-sizing: border-box;
  border-radius: 48% 48% 10% 10% / 58% 58% 8% 8%; will-change: transform, opacity; }
.ea-anneau--or { padding: 5px; background: linear-gradient(90deg, var(--metal-sombre), var(--metal-clair) 28%, var(--metal-reflet) 50%, var(--metal-clair) 72%, var(--metal-sombre));
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0); }
.ea-anneau--holo { border: 3px solid color-mix(in srgb, var(--ea-holo) 75%, transparent); }
.ea-anneau--tirets { border: 4px dashed color-mix(in srgb, var(--ea-holo) 55%, transparent); }
.ea-sol { position: absolute; left: -40%; right: -40%; bottom: 0; height: 52%; overflow: hidden; opacity: var(--ea-sol);
  transform: perspective(520px) rotateX(70deg); transform-origin: 50% 100%;
  -webkit-mask: linear-gradient(0deg, #000 15%, transparent 92%); mask: linear-gradient(0deg, #000 15%, transparent 92%); }
.ea-sol-grille { position: absolute; left: 0; right: 0; top: -80px; bottom: 0; will-change: transform;
  background: repeating-linear-gradient(90deg, color-mix(in srgb, var(--metal-moyen) 55%, transparent) 0 2px, transparent 2px 80px),
              repeating-linear-gradient(0deg, color-mix(in srgb, var(--metal-moyen) 55%, transparent) 0 2px, transparent 2px 80px); }
.ea-projecteurs { position: absolute; inset: 0; opacity: var(--ea-proj); }
.ea-faisceau { position: absolute; top: -10%; width: 34%; height: 130%; margin-left: -17%; transform-origin: 50% 0;
  clip-path: polygon(47% 0, 53% 0, 100% 100%, 0 100%);
  background: linear-gradient(180deg, color-mix(in srgb, var(--metal-reflet) 60%, transparent), color-mix(in srgb, var(--metal-reflet) 10%, transparent) 55%, transparent 85%);
  animation: ea-balaye var(--ea-balayage) ease-in-out infinite alternate; }
.ea-faisceau--holo { background: linear-gradient(180deg, color-mix(in srgb, var(--ea-holo) 55%, transparent), color-mix(in srgb, var(--ea-holo) 10%, transparent) 55%, transparent 85%); }
@keyframes ea-balaye { from { transform: rotate(var(--de, -24deg)); } to { transform: rotate(var(--a, 24deg)); } }
.ea-intro { position: absolute; left: 16px; right: 16px; top: 20%; text-align: center; will-change: transform, opacity; }
.ea-intro-sur { margin: 0; font: 700 12px/1 var(--police-titre, sans-serif); letter-spacing: .42em; text-transform: uppercase; color: var(--metal-moyen); }
.ea-intro-titre, .ea-or { background: linear-gradient(180deg, var(--metal-reflet), var(--metal-clair) 45%, var(--metal-sombre));
  -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; }
.ea-intro-titre { margin: 14px 0 0; font: 900 clamp(34px, 7vw, 100px)/.95 var(--police-logo, "Arial Black", sans-serif); text-transform: uppercase; letter-spacing: .04em; }
.ea-intro-indice { margin: 22px 0 0; font: 700 11px/1 var(--police-titre, sans-serif); letter-spacing: .32em; text-transform: uppercase; opacity: .7;
  animation: ea-indice 1.6s ease-in-out infinite; }
@keyframes ea-indice { 50% { transform: translateY(6px); } }
.ea-joueur, .ea-finale { position: absolute; inset: 0; visibility: hidden; }
.ea-joueur:not(.ea-visible) *, .ea-finale:not(.ea-visible) * { animation-play-state: paused !important; }
.ea-pseudo { position: absolute; left: 0; right: 0; top: 66%; margin: 0; text-align: center; white-space: nowrap;
  font: 900 var(--ea-fs, 160px)/.86 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .02em; }
.ea-lettre { display: inline-block; opacity: 0; will-change: transform, opacity; }
.ea-holo { position: absolute; left: 50%; top: 0; width: 300px; height: 300px; transform-origin: 50% 95%; opacity: 0; will-change: transform, opacity; }
.ea-flaque { position: absolute; inset: 4% -35% -6%; background: radial-gradient(ellipse 34% 48% at 50% 58%, color-mix(in srgb, var(--couleur-nuit) 80%, transparent), transparent 72%); }
.ea-cone { position: absolute; left: 22%; right: 22%; top: 8%; bottom: 5%; opacity: .4; mix-blend-mode: screen;
  clip-path: polygon(0 0, 100% 0, 66% 100%, 34% 100%);
  background: linear-gradient(0deg, color-mix(in srgb, var(--ea-holo) 70%, transparent), color-mix(in srgb, var(--ea-holo) 12%, transparent) 60%, transparent); }
.ea-socle { position: absolute; left: 22%; right: 22%; top: 91%; height: 8%; border-radius: 50%; mix-blend-mode: screen;
  border: 2px solid color-mix(in srgb, var(--ea-holo) 85%, transparent);
  background: radial-gradient(closest-side, color-mix(in srgb, var(--ea-holo) 70%, transparent), color-mix(in srgb, var(--ea-holo) 12%, transparent) 70%, transparent); }
.ea-holo-corps { position: absolute; inset: 0; mix-blend-mode: screen; opacity: .92; }
.ea-holo-tremble { position: absolute; inset: 0; isolation: isolate; animation: ea-tremble 2.3s steps(1) infinite; }
.ea-holo-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; filter: grayscale(1) contrast(1.15) brightness(1.4); }
.ea-holo-teinte, .ea-holo-lignes { position: absolute; inset: 0; -webkit-mask: var(--ea-masque) center / contain no-repeat; mask: var(--ea-masque) center / contain no-repeat; }
.ea-holo-teinte { background: var(--ea-holo); mix-blend-mode: color; }
.ea-holo-lignes { overflow: hidden; opacity: var(--ea-lignes); }
.ea-holo-lignes i { position: absolute; left: 0; right: 0; top: -5px; bottom: 0; background: repeating-linear-gradient(0deg, var(--couleur-nuit) 0 2px, transparent 2px 5px);
  animation: ea-lignes .9s linear infinite; }
@keyframes ea-lignes { to { transform: translateY(5px); } }
@keyframes ea-tremble {
  0%, 9%, 40%, 69%, 89% { transform: none; opacity: 1; }
  7% { transform: translateX(calc(var(--ea-force) * 3px)); opacity: calc(1 - var(--ea-force) * .25); }
  38% { transform: translateX(calc(var(--ea-force) * -2px)) skewX(calc(var(--ea-force) * 2deg)); opacity: calc(1 - var(--ea-force) * .4); }
  66% { transform: translate(calc(var(--ea-force) * 1.5px), calc(var(--ea-force) * -1px)); opacity: calc(1 - var(--ea-force) * .15); }
  88% { transform: translateX(calc(var(--ea-force) * -4px)); opacity: calc(1 - var(--ea-force) * .5); } }
.ea-gauche { position: absolute; left: 6%; top: 17%; display: grid; justify-items: start; opacity: 0; will-change: transform, opacity; }
.ea-numero { position: relative; z-index: 1; margin: 0 0 -.14em .1em; font: 900 clamp(64px, 8vw, 132px)/.8 var(--police-titre, "Arial Narrow", sans-serif); font-variant-numeric: tabular-nums; }
.ea-photo { position: relative; width: clamp(140px, 15vw, 230px); aspect-ratio: .62; clip-path: polygon(24% 0, 100% 0, 76% 100%, 0 100%);
  background: linear-gradient(160deg, var(--metal-reflet), var(--metal-sombre) 40%, var(--metal-clair) 70%, var(--metal-sombre)); }
.ea-photo-in { position: absolute; inset: 5px; overflow: hidden; isolation: isolate; clip-path: polygon(24% 0, 100% 0, 76% 100%, 0 100%); background: var(--ea-holo); }
.ea-photo-in img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 50% 20%; filter: grayscale(1) contrast(1.15); mix-blend-mode: multiply; }
.ea-photo-in::after { content: ''; position: absolute; inset: 0; background: var(--couleur-nuit); mix-blend-mode: lighten; }
.ea-droite { position: absolute; right: 6%; top: 24%; width: min(25%, 340px); opacity: 0; will-change: transform, opacity; }
.ea-role { margin: 0; min-height: 1em; font: 700 13px/1 var(--police-titre, sans-serif); letter-spacing: .3em; text-transform: uppercase; color: var(--metal-moyen); white-space: nowrap; }
.ea-agent { margin: 10px 0 18px; font: 900 clamp(30px, 3.4vw, 54px)/.95 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .06em;
  color: color-mix(in srgb, var(--ea-holo) 60%, var(--couleur-texte)); }
.ea-agent small { display: block; margin-bottom: 6px; font: 700 10px/1 var(--police-titre, sans-serif); letter-spacing: .3em; color: var(--metal-moyen); }
.ea-stat { display: grid; grid-template-columns: 1fr auto; align-items: baseline; margin-top: 12px; }
.ea-stat span { font: 700 11px/1 var(--police-titre, sans-serif); letter-spacing: .24em; text-transform: uppercase; color: var(--metal-moyen); }
.ea-stat b { font: 800 28px/1 var(--police-titre, sans-serif); font-variant-numeric: tabular-nums; color: var(--couleur-texte); }
.ea-jauge { grid-column: 1 / -1; height: 7px; margin-top: 6px; overflow: hidden; transform: skewX(-20deg); background: color-mix(in srgb, var(--metal-sombre) 35%, transparent); }
.ea-jauge i { display: block; height: 100%; transform-origin: 0 50%; transform: scaleX(0); will-change: transform;
  background: linear-gradient(90deg, var(--metal-sombre), var(--metal-clair) 60%, var(--metal-reflet)); }
.ea-estrade { position: absolute; left: 50%; top: 0; width: 72%; height: 9%; margin-left: -36%; transform-origin: 50% 0; opacity: 0; will-change: transform, opacity; }
.ea-estrade-dessus { position: absolute; left: 0; right: 0; top: -40%; height: 80%; border-radius: 50%; mix-blend-mode: screen;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--ea-holo) 55%, transparent), color-mix(in srgb, var(--ea-holo) 10%, transparent) 75%, transparent);
  border: 2px solid color-mix(in srgb, var(--ea-holo) 70%, transparent); }
.ea-estrade-face { position: absolute; left: 3%; right: 3%; top: 0; bottom: 0; clip-path: polygon(0 0, 100% 0, 96% 100%, 4% 100%);
  background: linear-gradient(180deg, var(--metal-reflet), var(--metal-clair) 18%, var(--metal-sombre) 60%, color-mix(in srgb, var(--metal-sombre) 30%, var(--couleur-nuit))); }
.ea-equipe { position: absolute; left: 0; right: 0; top: 9%; margin: 0; text-align: center; white-space: nowrap;
  font: 900 var(--ea-fs-equipe, 150px)/.9 var(--police-logo, "Arial Black", sans-serif); text-transform: uppercase; letter-spacing: .06em; }
.ea-equipe-sous { position: absolute; left: 16px; right: 16px; top: 0; margin: 0; text-align: center; opacity: 0;
  font: 700 13px/1 var(--police-titre, sans-serif); letter-spacing: .5em; text-transform: uppercase; color: var(--metal-moyen); }
.ea-salve { position: absolute; left: 0; right: 0; top: 0; height: 80%; pointer-events: none; }
.ea-salve i { position: absolute; bottom: 0; width: 3%; height: 100%; margin-left: -1.5%; opacity: 0; transform-origin: 50% 100%;
  background: linear-gradient(0deg, color-mix(in srgb, var(--metal-reflet) 80%, transparent), color-mix(in srgb, var(--ea-holo) 30%, transparent) 50%, transparent); }
.ea-eclats { position: absolute; left: 0; top: 0; width: 0; height: 0; }
.ea-eclat { position: absolute; left: 0; top: 0; opacity: 0; background: linear-gradient(135deg, var(--metal-reflet), var(--metal-clair) 50%, var(--metal-sombre)); }
.ea-eclat:nth-child(4n) { background: linear-gradient(135deg, var(--metal-reflet), var(--ea-holo)); }
.ea-onde { position: absolute; left: 50%; top: var(--ea-vp); width: 108%; height: 100%; opacity: 0; transform: translate(-50%, -50%) scale(.05); }
.ea-flash { position: absolute; inset: 0; opacity: 0; pointer-events: none; background: radial-gradient(ellipse 65% 60% at 50% var(--ea-vp), var(--metal-reflet), transparent 75%); }
.ea-defilement { position: absolute; inset: 0; z-index: 2; overflow-x: hidden; overflow-y: auto; scrollbar-width: thin; outline: none; }
.ea-piste { width: 100%; }
.ea-commandes { position: absolute; left: 50%; bottom: 12px; z-index: 5; transform: translateX(-50%); display: flex; align-items: center; gap: 10px;
  padding: 8px 12px; border-radius: 999px; background: color-mix(in srgb, var(--couleur-surface) 88%, transparent);
  border: 1px solid color-mix(in srgb, var(--couleur-texte) 18%, transparent); color: var(--couleur-texte); font: 600 12px/1 system-ui, sans-serif; }
.ea-commandes button { padding: 6px 12px; border: 0; border-radius: 999px; cursor: pointer; font: inherit; color: var(--couleur-surface);
  background: linear-gradient(135deg, var(--metal-sombre), var(--metal-moyen) 45%, var(--metal-reflet) 55%, var(--metal-moyen)); }
.ea-commandes input[type="range"] { width: clamp(90px, 22vw, 220px); accent-color: var(--metal-moyen); }
.ea-commandes output { min-width: 5ch; text-align: right; font-family: ui-monospace, Consolas, monospace; }
.ea-scene[data-format="etroit"] .ea-pseudo { top: 12%; }
.ea-scene[data-format="etroit"] .ea-gauche { left: 14px; top: auto; bottom: 66px; }
.ea-scene[data-format="etroit"] .ea-numero { font-size: 44px; }
.ea-scene[data-format="etroit"] .ea-photo { width: 78px; }
.ea-scene[data-format="etroit"] .ea-photo-in { inset: 3px; }
.ea-scene[data-format="etroit"] .ea-droite { right: 14px; top: auto; bottom: 66px; width: calc(100% - 130px); }
.ea-scene[data-format="etroit"] .ea-role { font-size: 10px; letter-spacing: .2em; }
.ea-scene[data-format="etroit"] .ea-agent { margin: 5px 0 2px; font-size: 20px; }
.ea-scene[data-format="etroit"] .ea-agent small { display: none; }
.ea-scene[data-format="etroit"] .ea-stat { margin-top: 5px; }
.ea-scene[data-format="etroit"] .ea-stat span { font-size: 9px; }
.ea-scene[data-format="etroit"] .ea-stat b { font-size: 17px; }
.ea-scene[data-format="etroit"] .ea-jauge { height: 5px; margin-top: 3px; }
.ea-scene[data-format="etroit"] .ea-equipe { top: 13%; }
.ea-scene[data-format="etroit"] .ea-equipe-sous { font-size: 10px; letter-spacing: .3em; }
.ea-scene[data-format="etroit"] .ea-estrade { width: 96%; margin-left: -48%; height: 7%; }
.ea-scene[data-format="etroit"] .ea-intro { top: 24%; }
.ea-scene[data-statique] *, .ea-scene[data-statique] *::after { animation: none !important; transition: none !important; }
.ea-liste { padding: 76px 6% 40px; }
.ea-liste-tete { text-align: center; margin-bottom: 36px; }
.ea-fiche { display: grid; grid-template-columns: auto 340px minmax(0, 440px); justify-content: center; align-items: center; gap: 28px; padding: 26px 0;
  border-bottom: 1px solid color-mix(in srgb, var(--metal-sombre) 45%, transparent); }
.ea-scene .ea-fiche .ea-gauche, .ea-scene .ea-fiche .ea-droite, .ea-scene .ea-fiche .ea-holo { position: relative; left: auto; right: auto; top: auto; bottom: auto; opacity: 1; transform: none; }
.ea-fiche .ea-holo { width: 340px; height: 340px; }
.ea-scene .ea-fiche .ea-droite { width: auto; }
.ea-fiche-pseudo { margin: 0 0 8px; font: 900 clamp(40px, 5vw, 76px)/.9 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; }
.ea-fiche-finale { padding: 34px 0 10px; text-align: center; }
.ea-fiche-finale .ea-equipe { position: static; font-size: clamp(40px, 9vw, 120px); }
.ea-fiche-formation { display: flex; justify-content: center; flex-wrap: wrap; margin-top: 10px; }
.ea-fiche-formation .ea-holo { position: relative; left: auto; top: auto; width: 150px; height: 150px; margin: 0 -30px; opacity: 1; }
.ea-scene[data-format="etroit"] .ea-liste { padding: 76px 16px 30px; }
.ea-scene[data-format="etroit"] .ea-fiche { grid-template-columns: 84px 1fr; justify-content: stretch; gap: 12px 16px; }
.ea-scene[data-format="etroit"] .ea-fiche .ea-holo { width: 150px; height: 150px; justify-self: center; }
.ea-scene[data-format="etroit"] .ea-fiche-textes { grid-column: 1 / -1; }
.ea-scene[data-format="etroit"] .ea-fiche-formation .ea-holo { width: 96px; height: 96px; margin: 0 -22px; }
html[data-qualite="allege"] .ea-faisceau, html[data-qualite="minimal"] .ea-faisceau { animation: none; }
html[data-qualite="allege"] .ea-holo-tremble, html[data-qualite="minimal"] .ea-holo-tremble,
html[data-qualite="allege"] .ea-holo-lignes i, html[data-qualite="minimal"] .ea-holo-lignes i { animation: none; }
html[data-qualite="minimal"] .ea-faisceau { display: none; }`,
  monter(conteneur, reglages, options) {
    if (!document.getElementById('css-' + this.id)) {
      const style = document.createElement('style');
      style.id = 'css-' + this.id;
      style.textContent = this.css;
      document.head.appendChild(style);
    }
    let r = { ...reglages };
    const statique = !!options.reduireAnimations;
    const joueurs = this.joueurs, equipe = this.equipe;
    const scene = document.createElement('div');
    scene.className = 'ea-scene';
    if (statique) scene.dataset.statique = '1';
    const STATS = [{ cle: 'acs', nom: 'ACS', max: 300, decimales: 0 }, { cle: 'kd', nom: 'K/D', max: 2, decimales: 2 }, { cle: 'hs', nom: 'HS %', max: 40, decimales: 0 }];
    const htmlHolo = (j, classe = '') => '<div class="ea-holo ' + classe + '" style="--ea-masque:url(&quot;' + j.agentImage + '&quot;)"><span class="ea-flaque"></span><span class="ea-cone"></span>' +
      '<div class="ea-holo-corps"><div class="ea-holo-tremble" style="animation-delay:' + (-Math.random() * 2.3).toFixed(2) + 's"><img class="ea-holo-img" alt="" decoding="async" src="' + j.agentImage + '">' +
      '<span class="ea-holo-teinte"></span><span class="ea-holo-lignes"><i></i></span></div></div><span class="ea-socle"></span></div>';
    const htmlGauche = j => '<div class="ea-gauche"><p class="ea-numero ea-or">' + (statique ? j.numero : '00') + '</p>' +
      '<div class="ea-photo"><div class="ea-photo-in"><img alt="" decoding="async" src="' + j.photo + '"></div></div></div>';
    const htmlDroite = j => '<div class="ea-droite"><p class="ea-role">' + (statique ? j.role : '') + '</p>' +
      '<p class="ea-agent"><small>Agent favori</small>' + j.agent + '</p>' +
      STATS.map(s => '<div class="ea-stat" data-stat="' + s.cle + '"><span>' + s.nom + '</span><b>' + (statique ? j[s.cle].toFixed(s.decimales) : '0') + '</b>' +
        '<div class="ea-jauge"><i' + (statique ? ' style="transform:scaleX(' + Math.min(1, j[s.cle] / s.max).toFixed(3) + ')"' : '') + '></i></div></div>').join('') + '</div>';
    const htmlLettres = texte => [...texte].map(c => '<span class="ea-lettre ea-or">' + (c === ' ' ? '&nbsp;' : c) + '</span>').join('');
    if (statique) {
      scene.innerHTML = '<div class="ea-defilement" tabindex="0" role="region" aria-label="Les joueurs de l\'équipe">' +
        '<div class="ea-liste"><header class="ea-liste-tete"><p class="ea-intro-sur">' + equipe + ' · Line-up</p><h2 class="ea-intro-titre">Entrée en arène</h2></header>' +
        joueurs.map(j => '<section class="ea-fiche">' + htmlGauche(j) + htmlHolo(j) +
          '<div class="ea-fiche-textes"><h3 class="ea-fiche-pseudo ea-or">' + j.pseudo + '</h3>' + htmlDroite(j) + '</div></section>').join('') +
        '<section class="ea-fiche-finale"><p class="ea-equipe ea-or">' + equipe + '</p><div class="ea-fiche-formation">' + joueurs.map(j => htmlHolo(j)).join('') + '</div></section>' +
        '</div></div>';
      conteneur.appendChild(scene);
      const appliquer = () => {
        scene.style.setProperty('--ea-holo', r.holoCouleur);
        scene.style.setProperty('--ea-lignes', r.holoLignes);
      };
      const format = () => { scene.dataset.format = scene.clientWidth < 760 ? 'etroit' : 'large'; };
      const observateur = new ResizeObserver(format);
      observateur.observe(scene);
      format(); appliquer();
      return {
        mettreAJour(nouveaux) { r = { ...nouveaux }; appliquer(); },
        detruire() { observateur.disconnect(); scene.remove(); }
      };
    }
    const faisceaux = [
      { x: 8, de: -8, a: 34, holo: false, d: 0 }, { x: 30, de: -26, a: 18, holo: true, d: -2.1 },
      { x: 70, de: -18, a: 26, holo: true, d: -4.3 }, { x: 92, de: -34, a: 8, holo: false, d: -1.2 }
    ];
    scene.innerHTML =
      '<div class="ea-etage" aria-hidden="true">' +
        '<div class="ea-bout"></div><div class="ea-sol"><div class="ea-sol-grille"></div></div><div class="ea-tunnel"></div>' +
        '<div class="ea-projecteurs">' + faisceaux.map(f => '<i class="ea-faisceau' + (f.holo ? ' ea-faisceau--holo' : '') + '" style="left:' + f.x + '%;--de:' + f.de + 'deg;--a:' + f.a + 'deg;animation-delay:' + f.d + 's"></i>').join('') + '</div>' +
        '<div class="ea-voile"></div>' +
        '<div class="ea-intro"><p class="ea-intro-sur">' + equipe + ' · Line-up</p><p class="ea-intro-titre">Entrée en arène</p><p class="ea-intro-indice">Faites défiler ↓</p></div>' +
        joueurs.map(j => '<div class="ea-joueur">' + htmlGauche(j) + htmlHolo(j) + '<p class="ea-pseudo">' + htmlLettres(j.pseudo) + '</p>' + htmlDroite(j) + '</div>').join('') +
        '<div class="ea-finale"><div class="ea-salve">' + [8, 22, 36, 50, 64, 78, 92].map(x => '<i style="left:' + x + '%"></i>').join('') + '</div>' +
          '<div class="ea-estrade"><span class="ea-estrade-face"></span><span class="ea-estrade-dessus"></span></div>' +
          joueurs.map(j => htmlHolo(j, 'ea-holo--formation')).join('') +
          '<p class="ea-equipe">' + htmlLettres(equipe) + '</p><p class="ea-equipe-sous">Line-up · saison 2026</p></div>' +
        '<span class="ea-anneau ea-anneau--or ea-onde"></span><div class="ea-eclats"></div><div class="ea-flash"></div>' +
      '</div>' +
      '<div class="ea-defilement" tabindex="0" role="region" aria-label="Faites défiler pour faire entrer les joueurs dans l\'arène"><div class="ea-piste"></div></div>' +
      '<div class="ea-commandes"><button type="button" data-lecture>Lecture</button>' +
        '<input type="range" min="0" max="1000" step="1" value="0" aria-label="Progression de l\'entrée en arène"><output>0 %</output></div>';
    conteneur.appendChild(scene);
    const $ = s => scene.querySelector(s);
    const defilement = $('.ea-defilement'), piste = $('.ea-piste'), tunnel = $('.ea-tunnel'), grille = $('.ea-sol-grille');
    const intro = $('.ea-intro'), projecteurs = $('.ea-projecteurs'), eclats = $('.ea-eclats'), onde = $('.ea-onde'), flash = $('.ea-flash');
    const boutonLecture = $('[data-lecture]'), curseur = $('.ea-commandes input'), affichage = $('.ea-commandes output');
    const fiches = [...scene.querySelectorAll('.ea-joueur')].map((el, i) => ({
      el, j: joueurs[i], visible: false, avant: -9,
      holo: el.querySelector('.ea-holo'), gauche: el.querySelector('.ea-gauche'), droite: el.querySelector('.ea-droite'),
      numero: el.querySelector('.ea-numero'), role: el.querySelector('.ea-role'), pseudo: el.querySelector('.ea-pseudo'),
      lettres: [...el.querySelectorAll('.ea-lettre')].map(l => ({ el: l, dx: 0, dy: 0 })),
      stats: STATS.map(s => ({ ...s, b: el.querySelector('[data-stat="' + s.cle + '"] b'), jauge: el.querySelector('[data-stat="' + s.cle + '"] .ea-jauge i') })),
      textes: {}, maisonG: { x: 0, y: 0 }, maisonD: { x: 0, y: 0 }
    }));
    const finale = {
      el: $('.ea-finale'), visible: false, avant: -9, estrade: $('.ea-estrade'), sous: $('.ea-equipe-sous'), salve: [...scene.querySelectorAll('.ea-salve i')],
      holos: [...scene.querySelectorAll('.ea-holo--formation')], equipe: $('.ea-equipe'),
      lettres: [...scene.querySelectorAll('.ea-equipe .ea-lettre')].map(l => ({ el: l, dx: 0, dy: 0 }))
    };
    let anneaux = [], pixels = [];
    const INTRO = 0.7, FINALE = 1.4, TOTAL = INTRO + joueurs.length + FINALE;
    const DEBUT_FINALE = INTRO + joueurs.length - 0.15;
    const borne = v => (v < 0 ? 0 : v > 1 ? 1 : v);
    const lisse = v => v * v * (3 - 2 * v);
    const freine = v => 1 - Math.pow(1 - v, 3);
    const materialise = e => (e >= 0.75 ? 1 : Math.min(1, e * 1.5) * (0.55 + 0.45 * Math.abs(Math.sin(e * 31))));
    let W = 0, H = 0, L = 0, F = 1, Zmax = 1, vpx = 0, vpy = 0, solY = 0, hb = 0, hf = 0, etroit = false;
    let tCible = 0, tLisse = 0, idImage = 0, idLecture = 0, tempsPrecedent = 0, visible = true, detruit = false;
    const ponctuelles = new Set();
    function appliquerReglages() {
      const s = scene.style;
      s.setProperty('--ea-holo', r.holoCouleur);
      s.setProperty('--ea-force', r.holoTremblement);
      s.setProperty('--ea-lignes', r.holoLignes);
      s.setProperty('--ea-sol', r.sol);
      s.setProperty('--ea-proj', r.projecteurs);
      s.setProperty('--ea-balayage', r.balayage + 's');
      if (anneaux.length !== r.anneaux) {
        tunnel.innerHTML = Array.from({ length: r.anneaux }, (_, k) =>
          '<span class="ea-anneau ' + (k % 3 === 0 ? 'ea-anneau--or' : k % 3 === 1 ? 'ea-anneau--holo' : 'ea-anneau--tirets') + '"></span>').join('');
        anneaux = [...tunnel.children];
      }
      if (pixels.length !== r.eclats) {
        eclats.innerHTML = '<i class="ea-eclat"></i>'.repeat(r.eclats);
        pixels = [...eclats.children];
      }
    }
    function mettreEnPage() {
      const avant = L > 0 ? defilement.scrollTop / L : 0;
      W = scene.clientWidth; H = scene.clientHeight;
      etroit = W < 760;
      scene.dataset.format = etroit ? 'etroit' : 'large';
      L = TOTAL * r.longueurJoueur * H;
      piste.style.height = (H + L) + 'px';
      defilement.scrollTop = avant * L;
      F = r.focale * H; Zmax = r.profondeur * F;
      vpx = W / 2; vpy = H * 0.45;
      solY = H * (etroit ? 0.67 : 0.84);
      hb = r.holoTaille * H * (etroit ? 0.62 : 1);
      hf = hb * (etroit ? 0.6 : 0.62);
      const placer = (el, taille) => { el.style.width = el.style.height = taille + 'px'; el.style.marginLeft = (-taille / 2) + 'px'; el.style.top = (solY - 0.95 * taille) + 'px'; };
      fiches.forEach(f => placer(f.holo, hb));
      finale.holos.forEach(h => placer(h, hf));
      finale.estrade.style.top = (solY - hf * 0.03) + 'px';
      finale.el.querySelector('.ea-salve').style.height = solY + 'px';
      const taillePseudo = r.taillePseudo * (etroit ? Math.min(W * 0.2, H * 0.1) : Math.min(W * 0.15, H * 0.24));
      fiches.forEach(f => ajusterTexte(f.pseudo, f.lettres, taillePseudo, '--ea-fs'));
      ajusterTexte(finale.equipe, finale.lettres, etroit ? W * 0.13 : Math.min(W * 0.12, H * 0.19), '--ea-fs-equipe');
      finale.sous.style.top = (finale.equipe.offsetTop + finale.equipe.offsetHeight + 14) + 'px';
      fiches.forEach(f => {
        f.maisonG = { x: f.gauche.offsetLeft + f.gauche.offsetWidth / 2, y: f.gauche.offsetTop + f.gauche.offsetHeight / 2 };
        f.maisonD = { x: f.droite.offsetLeft + f.droite.offsetWidth / 2, y: f.droite.offsetTop + f.droite.offsetHeight / 2 };
      });
      tCible = tLisse = progressionCible();
      dessiner();
    }
    function ajusterTexte(bloc, lettres, taille, variable) {
      bloc.style.setProperty(variable, taille + 'px');
      const largeur = () => (lettres.length ? lettres[lettres.length - 1].el.offsetLeft + lettres[lettres.length - 1].el.offsetWidth - lettres[0].el.offsetLeft : 0);
      const maxi = W - 32;
      if (largeur() > maxi) bloc.style.setProperty(variable, (taille * maxi / largeur()) + 'px');
      lettres.forEach(l => {
        l.dx = vpx - (bloc.offsetLeft + l.el.offsetLeft + l.el.offsetWidth / 2);
        l.dy = vpy - (bloc.offsetTop + l.el.offsetTop + l.el.offsetHeight / 2);
      });
    }
    const progressionCible = () => (L > 0 ? borne(defilement.scrollTop / L) * TOTAL : 0);
    const ecrire = (f, cle, el, texte) => { if (f.textes[cle] !== texte) { f.textes[cle] = texte; el.textContent = texte; } };
    const montrer = (o, oui) => { if (o.visible !== oui) { o.visible = oui; o.el.style.visibility = oui ? 'visible' : 'hidden'; o.el.classList.toggle('ea-visible', oui); } };
    const projeter = (z, x) => { const s = F / (F + z); return { s, dx: x * s, dy: (solY - vpy) * (s - 1) }; };
    function dessinerLettres(lettres, a, decalage, debutSortie) {
      lettres.forEach((l, k) => {
        const e = lisse(borne((a - k * decalage) / 0.35));
        const x = debutSortie === null ? 0 : lisse(borne((a - debutSortie - k * 0.02) / 0.32));
        const rot = (((k * 37) % 11) - 5) * 9 * x;
        const tx = l.dx * (1 - e) - l.dx * 1.4 * x, ty = l.dy * (1 - e) - l.dy * 1.4 * x;
        l.el.style.transform = 'translate(' + tx.toFixed(1) + 'px,' + ty.toFixed(1) + 'px) scale(' + (0.06 + 0.94 * e + 2.4 * x).toFixed(3) + ') rotate(' + rot.toFixed(1) + 'deg)';
        l.el.style.opacity = (e * (1 - x)).toFixed(3);
      });
    }
    function dessiner() {
      const t = tLisse;
      const avance = t * r.vitesseTunnel, n = anneaux.length, zProche = -0.35 * F;
      anneaux.forEach((el, k) => {
        const phase = ((k + avance) / n) % 1;
        const z = Zmax - phase * (Zmax - zProche);
        const s = F / (F + z);
        const op = borne((Zmax - z) / (0.3 * Zmax)) * borne((z - zProche) / (0.5 * F));
        el.style.transform = 'translate(-50%,-50%) scale(' + s.toFixed(4) + ')';
        el.style.opacity = op.toFixed(3);
      });
      grille.style.transform = 'translateY(' + ((avance * 80) % 80).toFixed(1) + 'px)';
      const ti = borne(t / 0.5);
      intro.style.opacity = (1 - ti).toFixed(3);
      intro.style.transform = 'scale(' + (1 + ti * 0.8).toFixed(3) + ')';
      intro.style.visibility = ti >= 1 ? 'hidden' : 'visible';
      fiches.forEach((f, i) => {
        const a = t - INTRO - i;
        montrer(f, a > -0.15 && a < 1.15);
        if (f.avant < 0.3 && a >= 0.3 && a < 0.9) feu(false);
        f.avant = a;
        if (!f.visible) return;
        const e = lisse(borne((a + 0.15) / 0.55));
        const x = lisse(borne((a - 0.72) / 0.4));
        const cote = i % 2 ? 1 : -1;
        let z = Zmax * 0.7 * (1 - e), ox = 0;
        if (r.sortie === 'camera') { z -= 0.5 * F * x; ox = cote * W * 0.2 * x; } else { ox = cote * W * 0.8 * x; z += 0.2 * F * x; }
        const p = projeter(z, ox);
        f.holo.style.transform = 'translate(' + p.dx.toFixed(1) + 'px,' + p.dy.toFixed(1) + 'px) scale(' + p.s.toFixed(4) + ')';
        f.holo.style.opacity = (materialise(e) * (1 - Math.pow(x, 1.4))).toFixed(3);
        const eg = freine(borne((a - 0.05) / 0.35)), xg = lisse(borne((a - 0.66) / 0.3));
        const colonne = (el, maison, sens) => {
          const tx = (vpx - maison.x) * (1 - eg) + sens * W * 0.45 * xg, ty = (vpy - maison.y) * (1 - eg);
          el.style.transform = 'translate(' + tx.toFixed(1) + 'px,' + ty.toFixed(1) + 'px) scale(' + (0.2 + 0.8 * eg).toFixed(3) + ')';
          el.style.opacity = (eg * (1 - xg)).toFixed(3);
        };
        colonne(f.gauche, f.maisonG, -1);
        colonne(f.droite, f.maisonD, 1);
        const cn = freine(borne((a - 0.08) / 0.3));
        ecrire(f, 'numero', f.numero, String(Math.round(Number(f.j.numero) * cn)).padStart(2, '0'));
        const texteRole = f.j.role;
        ecrire(f, 'role', f.role, texteRole.slice(0, Math.round(texteRole.length * borne((a - 0.12) / 0.25))));
        f.stats.forEach((s, k) => {
          const c = freine(borne((a - 0.18 - 0.07 * k) / 0.32));
          ecrire(f, s.cle, s.b, (f.j[s.cle] * c).toFixed(s.decimales));
          s.jauge.style.transform = 'scaleX(' + (Math.min(1, f.j[s.cle] / s.max) * c).toFixed(4) + ')';
        });
        dessinerLettres(f.lettres, a + 0.05, r.decalageLettres, 0.74);
      });
      const af = t - DEBUT_FINALE;
      montrer(finale, af > 0);
      if (finale.avant < 0.6 && af >= 0.6 && af < 1.2) feu(true);
      finale.avant = af;
      const ef = lisse(borne(af / 0.6));
      projecteurs.style.opacity = (0.75 + 0.25 * ef).toFixed(3);
      if (finale.visible) {
        const pe = projeter(Zmax * 0.6 * (1 - ef), 0);
        finale.estrade.style.transform = 'translate(0,' + pe.dy.toFixed(1) + 'px) scale(' + pe.s.toFixed(4) + ')';
        finale.estrade.style.opacity = borne(ef * 1.5).toFixed(3);
        const ecart = etroit ? W * 0.19 : Math.min(W * 0.16, hf * 0.62);
        finale.holos.forEach((h, k) => {
          const rang = Math.abs(k - 2);
          const ek = lisse(borne((af - 0.12 - 0.07 * rang) / 0.45));
          const p = projeter(Zmax * 0.6 * (1 - ek) + rang * 0.14 * F, (k - 2) * ecart);
          h.style.transform = 'translate(' + p.dx.toFixed(1) + 'px,' + p.dy.toFixed(1) + 'px) scale(' + p.s.toFixed(4) + ')';
          h.style.opacity = materialise(ek).toFixed(3);
        });
        dessinerLettres(finale.lettres, af - 0.3, 0.05, null);
        finale.sous.style.opacity = borne((af - 0.75) / 0.25).toFixed(3);
      }
      curseur.value = String(Math.round((t / TOTAL) * 1000));
      affichage.textContent = Math.round((t / TOTAL) * 100) + ' %';
    }
    function feu(estFinale) {
      const joue = (el, images, reglage) => { const anim = el.animate(images, reglage); ponctuelles.add(anim); anim.onfinish = anim.oncancel = () => ponctuelles.delete(anim); };
      const cy = estFinale ? solY - hf * 0.55 : solY - hb * 0.5;
      eclats.style.transform = 'translate(' + vpx.toFixed(0) + 'px,' + cy.toFixed(0) + 'px)';
      const portee = Math.max(0.5, Math.min(1, W / 900)) * (estFinale ? 1.7 : 1);
      pixels.forEach(p => {
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.7;
        const d = (120 + Math.random() * 260) * portee;
        const taille = 3 + Math.round(Math.random() * 7);
        p.style.width = p.style.height = taille + 'px';
        const x0 = (Math.random() - 0.5) * 60, y0 = (Math.random() - 0.5) * 120;
        joue(p, [
          { transform: 'translate(' + x0.toFixed(0) + 'px,' + y0.toFixed(0) + 'px) scale(1.5)', opacity: 1 },
          { opacity: 1, offset: 0.65 },
          { transform: 'translate(' + (x0 + Math.cos(angle) * d * 1.3).toFixed(0) + 'px,' + (y0 + Math.sin(angle) * d).toFixed(0) + 'px) rotate(' + (Math.random() * 360).toFixed(0) + 'deg) scale(.3)', opacity: 0 }
        ], { duration: 900 + Math.random() * 500, delay: Math.random() * 120, easing: 'cubic-bezier(.15,.7,.3,1)' });
      });
      joue(onde, [{ transform: 'translate(-50%,-50%) scale(.05)', opacity: 1 }, { transform: 'translate(-50%,-50%) scale(1.5)', opacity: 0 }],
        { duration: estFinale ? 1000 : 750, easing: 'cubic-bezier(.1,.6,.3,1)' });
      if (r.flash > 0) joue(flash, [{ opacity: Math.min(1, r.flash * (estFinale ? 1.8 : 1)) }, { opacity: 0 }], { duration: estFinale ? 1000 : 480, easing: 'ease-out' });
      if (estFinale && r.salve) finale.salve.forEach((s, k) => joue(s, [
        { transform: 'scaleY(0)', opacity: 1 }, { transform: 'scaleY(1)', opacity: 1, offset: 0.35 }, { transform: 'scaleY(1)', opacity: 0 }
      ], { duration: 1300, delay: Math.abs(k - 3) * 90, easing: 'ease-out', fill: 'backwards' }));
    }
    function boucle(temps) {
      idImage = 0;
      if (!visible || detruit) return;
      const dt = tempsPrecedent ? Math.min(64, temps - tempsPrecedent) : 16.7;
      tempsPrecedent = temps;
      tLisse += (tCible - tLisse) * (1 - Math.pow(r.fluidite, dt / 16.7));
      if (Math.abs(tCible - tLisse) < 0.0005) tLisse = tCible;
      dessiner();
      if (tLisse !== tCible) idImage = requestAnimationFrame(boucle); else tempsPrecedent = 0;
    }
    const demarrer = () => { if (!idImage && visible && !detruit) idImage = requestAnimationFrame(boucle); };
    function arreterLecture() { cancelAnimationFrame(idLecture); idLecture = 0; boutonLecture.textContent = 'Lecture'; }
    function lire() {
      if (idLecture) { arreterLecture(); return; }
      if (L <= 0) return;
      const duree = TOTAL * r.lectureDuree * 1000;
      const aLaFin = defilement.scrollTop >= L - 1;
      if (aLaFin) defilement.scrollTop = 0;
      const depart = performance.now() - (aLaFin ? 0 : (defilement.scrollTop / L) * duree);
      boutonLecture.textContent = 'Pause';
      const pas = maintenant => {
        const p = borne((maintenant - depart) / duree);
        defilement.scrollTop = p * L;
        if (p < 1) idLecture = requestAnimationFrame(pas); else arreterLecture();
      };
      idLecture = requestAnimationFrame(pas);
    }
    boutonLecture.addEventListener('click', lire);
    curseur.addEventListener('input', () => { arreterLecture(); defilement.scrollTop = (Number(curseur.value) / 1000) * L; });
    defilement.addEventListener('scroll', () => { tCible = progressionCible(); demarrer(); }, { passive: true });
    defilement.addEventListener('wheel', arreterLecture, { passive: true });
    defilement.addEventListener('touchstart', arreterLecture, { passive: true });
    const observateurVisibilite = new IntersectionObserver(entrees => { visible = entrees[0].isIntersecting; demarrer(); });
    observateurVisibilite.observe(scene);
    const observateurTaille = new ResizeObserver(() => mettreEnPage());
    observateurTaille.observe(scene);
    appliquerReglages();
    mettreEnPage();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (!detruit) mettreEnPage(); });
    return {
      mettreAJour(nouveaux) {
        r = { ...nouveaux };
        appliquerReglages();
        mettreEnPage();
      },
      detruire() {
        detruit = true;
        arreterLecture();
        cancelAnimationFrame(idImage); idImage = 0;
        ponctuelles.forEach(a => a.cancel());
        observateurVisibilite.disconnect();
        observateurTaille.disconnect();
        scene.remove();
      }
    };
  }
};
enregistrerEffet(EffetEntreeArene);
