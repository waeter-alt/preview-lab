const EffetSelectionJoueurs = {
  id: 'selection-joueurs',
  nom: 'Sélection',
  description: 'Écran de sélection façon jeu vidéo : survolez une alvéole pour voir le joueur, cliquez pour le verrouiller (hologramme qui se redéploie, onde, gerbe de pixels, tampon). Le bouton « Verrouiller » rejoue l\'animation.',
  variables: ['--metal-sombre', '--metal-moyen', '--metal-clair', '--metal-reflet', '--couleur-fond', '--couleur-lueur', '--couleur-texte', '--couleur-nuit', '--couleur-surface', '--police-titre', '--police-logo'],
  joueurs: [
    { numero: '01', pseudo: 'Noctis', role: 'Duelliste', agent: 'Jett', agentImage: 'images/agents/jett-full.webp', photo: 'images/joueurs/joueur-01.jpg', acs: 271, kd: 1.34, hs: 32 },
    { numero: '02', pseudo: 'Kaze', role: 'Initiateur', agent: 'Sova', agentImage: 'images/agents/sova-full.webp', photo: 'images/joueurs/joueur-02.jpg', acs: 214, kd: 1.12, hs: 26 },
    { numero: '03', pseudo: 'Lyra', role: 'Contrôleuse', agent: 'Omen', agentImage: 'images/agents/omen-full.webp', photo: 'images/joueurs/joueur-03.jpg', acs: 198, kd: 1.05, hs: 24 },
    { numero: '04', pseudo: 'Sahir', role: 'Sentinelle', agent: 'Killjoy', agentImage: 'images/agents/killjoy-full.webp', photo: 'images/joueurs/joueur-04.jpg', acs: 205, kd: 1.18, hs: 28 },
    { numero: '05', pseudo: 'Vortex', role: 'Flex · IGL', agent: 'Skye', agentImage: 'images/agents/skye-full.webp', photo: 'images/joueurs/joueur-05.jpg', acs: 189, kd: 0.97, hs: 22 }
  ],
  parametres: [
    { categorie: 'Hologramme', id: 'holoCouleur', libelle: 'Hologramme · couleur', type: 'couleur', defaut: '#8FB0CC' },
    { categorie: 'Hologramme', id: 'holoTaille', libelle: 'Hologramme · taille (part de la hauteur de la zone centrale)', type: 'nombre', min: 0.5, max: 1.1, pas: 0.02, defaut: 0.86 },
    { categorie: 'Hologramme', id: 'holoTremblement', libelle: 'Hologramme · tremblement (0 = stable)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.5 },
    { categorie: 'Hologramme', id: 'holoLignes', libelle: 'Hologramme · lignes de balayage (0 = aucune)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.5 },
    { categorie: 'Socle', id: 'socleTour', libelle: 'Socle · durée d\'un tour des anneaux (s)', type: 'nombre', min: 4, max: 40, pas: 1, defaut: 16 },
    { categorie: 'Socle', id: 'faisceau', libelle: 'Socle · intensité du faisceau (0 = éteint)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.45 },
    { categorie: 'Changement', id: 'dureeChangement', libelle: 'Changement · durée du changement de joueur (s)', type: 'nombre', min: 0.2, max: 1.2, pas: 0.05, defaut: 0.5 },
    { categorie: 'Changement', id: 'brouillage', libelle: 'Changement · lettres brouillées avant de se fixer', type: 'interrupteur', defaut: true },
    { categorie: 'Changement', id: 'comptage', libelle: 'Changement · durée du comptage des statistiques (s)', type: 'nombre', min: 0.2, max: 2, pas: 0.1, defaut: 0.9 },
    { categorie: 'Changement', id: 'segments', libelle: 'Changement · nombre de segments par barre', type: 'nombre', min: 6, max: 20, pas: 1, defaut: 12 },
    { categorie: 'Changement', id: 'apercuSurvol', libelle: 'Changement · aperçu du joueur au survol', type: 'interrupteur', defaut: true },
    { categorie: 'Verrouillage', id: 'particules', libelle: 'Verrouillage · nombre de pixels qui jaillissent (0 = aucun)', type: 'nombre', min: 0, max: 60, pas: 2, defaut: 28 },
    { categorie: 'Verrouillage', id: 'tampon', libelle: 'Verrouillage · tampon « VERROUILLÉ »', type: 'interrupteur', defaut: true },
    { categorie: 'Verrouillage', id: 'onde', libelle: 'Verrouillage · onde de choc au sol', type: 'interrupteur', defaut: true },
    { categorie: 'Verrouillage', id: 'flash', libelle: 'Verrouillage · éclair de l\'écran (0 = aucun)', type: 'nombre', min: 0, max: 0.5, pas: 0.02, defaut: 0.16 },
    { categorie: 'Ambiance', id: 'nomGeant', libelle: 'Ambiance · nom géant en fond (opacité, 0 = caché)', type: 'nombre', min: 0, max: 0.4, pas: 0.01, defaut: 0.1 },
    { categorie: 'Ambiance', id: 'sol', libelle: 'Ambiance · grille au sol (opacité, 0 = cachée)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.5 }
  ],
  css: `
.sj-scene { position: absolute; inset: 0; overflow: hidden; color: var(--couleur-texte); font-family: system-ui, sans-serif;
  background: radial-gradient(ellipse 70% 60% at 50% 72%, var(--couleur-lueur), transparent 70%), var(--couleur-fond);
  --sj-holo: #8FB0CC; --sj-taille: .86; --sj-force: .5; --sj-lignes: .5; --sj-tour: 16s; --sj-faisceau: .45; --sj-nom: .1; --sj-sol: .5; }
.sj-scene button { font: inherit; color: inherit; }
.sj-sol { position: absolute; left: -30%; right: -30%; bottom: -8%; height: 52%; opacity: var(--sj-sol); pointer-events: none;
  background: repeating-linear-gradient(90deg, color-mix(in srgb, var(--metal-sombre) 55%, transparent) 0 1px, transparent 1px 64px),
              repeating-linear-gradient(0deg, color-mix(in srgb, var(--metal-sombre) 55%, transparent) 0 1px, transparent 1px 64px);
  transform: perspective(600px) rotateX(68deg); transform-origin: 50% 100%;
  -webkit-mask: linear-gradient(0deg, #000 10%, transparent 85%); mask: linear-gradient(0deg, #000 10%, transparent 85%); }
.sj-nom-geant { position: absolute; left: 0; right: 0; top: 44%; margin: 0; transform: translateY(-50%); text-align: center; white-space: nowrap; pointer-events: none;
  font: 900 clamp(90px, 23vw, 380px)/1 var(--police-logo, "Arial Black", sans-serif); text-transform: uppercase; letter-spacing: .02em;
  color: transparent; -webkit-text-stroke: 2px var(--metal-moyen); opacity: var(--sj-nom); }
.sj-nom-geant span { display: inline-block; animation: sj-derive 22s ease-in-out infinite alternate; }
@keyframes sj-derive { from { transform: translateX(-3%); } to { transform: translateX(3%); } }
.sj-centre { position: absolute; left: 50%; top: 5%; bottom: 168px; width: 38vw; transform: translateX(-50%); pointer-events: none; }
.sj-bassin { position: absolute; inset: -10% -30% 0; background: radial-gradient(ellipse 42% 50% at 50% 62%, color-mix(in srgb, var(--couleur-nuit) 82%, transparent), transparent 72%); }
.sj-faisceau { position: absolute; left: 50%; bottom: 10%; width: 56%; height: calc(var(--sj-taille) * 92%); transform: translateX(-50%); opacity: var(--sj-faisceau);
  clip-path: polygon(30% 100%, 70% 100%, 100% 0, 0 0); mix-blend-mode: screen;
  background: linear-gradient(0deg, color-mix(in srgb, var(--sj-holo) 70%, transparent), color-mix(in srgb, var(--sj-holo) 18%, transparent) 45%, transparent); }
.sj-faisceau.sj-eclair { animation: sj-eclair .5s ease-out; }
@keyframes sj-eclair { 0% { opacity: 1; } 100% { opacity: var(--sj-faisceau); } }
.sj-poussiere { position: absolute; bottom: 12%; width: 3px; height: 3px; background: var(--sj-holo); opacity: 0; mix-blend-mode: screen;
  animation: sj-monte 4.5s linear infinite; }
@keyframes sj-monte { 0% { transform: translateY(0); opacity: 0; } 15% { opacity: .9; } 100% { transform: translateY(calc(var(--sj-taille) * -46vh)); opacity: 0; } }
.sj-socle { position: absolute; left: 50%; bottom: 10%; width: min(70%, 46vh); aspect-ratio: 1; transform: translate(-50%, 50%) perspective(900px) rotateX(74deg); }
.sj-anneau { position: absolute; inset: 0; border-radius: 50%; }
.sj-anneau--plein { inset: 18%; background: radial-gradient(circle, color-mix(in srgb, var(--sj-holo) 75%, transparent), color-mix(in srgb, var(--sj-holo) 18%, transparent) 55%, transparent 72%); mix-blend-mode: screen; }
.sj-anneau--tirets { border: 3px dashed color-mix(in srgb, var(--sj-holo) 80%, transparent); animation: sj-tourne var(--sj-tour) linear infinite; }
.sj-anneau--arcs { inset: 9%; background: conic-gradient(from 0deg, var(--metal-clair) 0 18%, transparent 18% 33%, var(--metal-moyen) 33% 52%, transparent 52% 70%, var(--metal-reflet) 70% 80%, transparent 80%);
  -webkit-mask: radial-gradient(circle, transparent 64%, #000 65% 70%, transparent 71%); mask: radial-gradient(circle, transparent 64%, #000 65% 70%, transparent 71%);
  animation: sj-tourne calc(var(--sj-tour) * 1.6) linear infinite reverse; }
.sj-anneau--graduations { inset: -6%; background: repeating-conic-gradient(color-mix(in srgb, var(--sj-holo) 70%, transparent) 0 1.2deg, transparent 1.2deg 7.5deg);
  -webkit-mask: radial-gradient(circle, transparent 66%, #000 67% 70%, transparent 71%); mask: radial-gradient(circle, transparent 66%, #000 67% 70%, transparent 71%);
  animation: sj-tourne calc(var(--sj-tour) * 3) linear infinite; }
@keyframes sj-tourne { to { transform: rotate(1turn); } }
.sj-onde { position: absolute; inset: 0; border-radius: 50%; border: 4px solid var(--metal-reflet); opacity: 0; }
.sj-onde.sj-joue { animation: sj-onde .8s cubic-bezier(.1,.6,.3,1); }
@keyframes sj-onde { 0% { transform: scale(.3); opacity: 1; } 100% { transform: scale(2.6); opacity: 0; } }
.sj-holo { position: absolute; left: 50%; bottom: calc(10% - var(--sj-taille) * 5%); height: calc(var(--sj-taille) * 100%); aspect-ratio: 1; transform: translateX(-50%); }
.sj-holo-corps { position: absolute; inset: 0; transform-origin: 50% 95%; mix-blend-mode: screen; opacity: .92; }
.sj-holo-tremble { position: absolute; inset: 0; isolation: isolate; animation: sj-tremble 2.3s steps(1) infinite; }
.sj-holo-tremble.sj-allume { animation: sj-allume .55s linear, sj-tremble 2.3s steps(1) .55s infinite; }
.sj-holo-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; filter: grayscale(1) contrast(1.15) brightness(1.4); }
.sj-holo-teinte, .sj-holo-lignes { position: absolute; inset: 0; -webkit-mask: var(--sj-masque) center / contain no-repeat; mask: var(--sj-masque) center / contain no-repeat; }
.sj-holo-teinte { background: var(--sj-holo); mix-blend-mode: color; }
.sj-holo-lignes { opacity: var(--sj-lignes); background: repeating-linear-gradient(0deg, var(--couleur-nuit) 0 2px, transparent 2px 5px); background-size: 100% 5px; animation: sj-lignes .9s linear infinite; }
@keyframes sj-lignes { to { background-position: 0 5px; } }
@keyframes sj-tremble {
  0%, 9%, 40%, 69%, 89% { transform: none; opacity: 1; }
  7% { transform: translateX(calc(var(--sj-force) * 3px)); opacity: calc(1 - var(--sj-force) * .25); }
  38% { transform: translateX(calc(var(--sj-force) * -2px)) skewX(calc(var(--sj-force) * 2deg)); opacity: calc(1 - var(--sj-force) * .4); }
  66% { transform: translate(calc(var(--sj-force) * 1.5px), calc(var(--sj-force) * -1px)); opacity: calc(1 - var(--sj-force) * .15); }
  88% { transform: translateX(calc(var(--sj-force) * -4px)); opacity: calc(1 - var(--sj-force) * .5); } }
@keyframes sj-allume { 0% { opacity: .2; } 15% { opacity: 1; } 25% { opacity: .15; } 40% { opacity: 1; } 52% { opacity: .4; } 64%, 100% { opacity: 1; } }
.sj-gerbe { position: absolute; left: 50%; bottom: 10%; width: 0; height: 0; }
.sj-pixel { position: absolute; left: 0; top: 0; width: var(--t, 6px); height: var(--t, 6px); margin: calc(var(--t, 6px) / -2); opacity: 0; background: var(--metal-reflet); }
.sj-pixel:nth-child(3n) { background: var(--sj-holo); }
.sj-pixel:nth-child(3n+1) { background: var(--metal-clair); }
.sj-pixel.sj-joue { animation: sj-jaillit .95s cubic-bezier(.15,.7,.3,1) var(--d, 0s) both; }
@keyframes sj-jaillit { 0% { transform: translate(0, 0) scale(1.4); opacity: 1; } 70% { opacity: 1; } 100% { transform: translate(var(--dx), var(--dy)) scale(.3); opacity: 0; } }
.sj-tampon { position: absolute; left: 50%; top: 38%; margin: 0; padding: .3em .7em .25em; white-space: nowrap; opacity: 0; transform: translate(-50%, -50%) rotate(-7deg);
  font: 900 clamp(26px, 3.6vw, 54px)/1 var(--police-logo, "Arial Black", sans-serif); letter-spacing: .14em; text-transform: uppercase;
  border: 4px double var(--metal-clair); color: var(--metal-clair);
  background: color-mix(in srgb, var(--couleur-nuit) 55%, transparent); }
.sj-tampon span { background: linear-gradient(180deg, var(--metal-reflet), var(--metal-clair) 45%, var(--metal-sombre));
  -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; }
.sj-tampon.sj-joue { animation: sj-tampon 1.5s cubic-bezier(.2,.9,.3,1); }
@keyframes sj-tampon {
  0% { opacity: 0; transform: translate(-50%, -50%) rotate(-7deg) scale(1.9); }
  12% { opacity: 1; transform: translate(-50%, -50%) rotate(-7deg) scale(.94); }
  18% { transform: translate(-50%, -50%) rotate(-7deg) scale(1); }
  78% { opacity: 1; transform: translate(-50%, -50%) rotate(-7deg) scale(1); }
  100% { opacity: 0; transform: translate(-50%, -50%) rotate(-7deg) scale(1.04); } }
.sj-flash { position: absolute; inset: 0; background: var(--metal-reflet); opacity: 0; pointer-events: none; z-index: 6; }
.sj-flash.sj-joue { animation: sj-flash .45s ease-out; }
@keyframes sj-flash { 0% { opacity: var(--sj-flash, .16); } 100% { opacity: 0; } }
.sj-gauche { position: absolute; left: clamp(24px, 5vw, 90px); top: 50%; transform: translateY(-58%); width: min(27vw, 400px); display: grid; gap: 26px; z-index: 2; }
.sj-infos { display: grid; grid-template-columns: auto 1fr; column-gap: 18px; align-items: end; }
.sj-photo { grid-row: span 2; position: relative; width: 96px; aspect-ratio: .87; clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  background: linear-gradient(135deg, var(--metal-reflet), var(--metal-sombre) 45%, var(--metal-clair) 75%, var(--metal-sombre)); }
.sj-photo img { position: absolute; inset: 3px; width: calc(100% - 6px); height: calc(100% - 6px); object-fit: cover; object-position: 50% 18%;
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%); }
.sj-numero { margin: 0; font: 900 clamp(40px, 4.6vw, 72px)/.9 var(--police-titre, "Arial Narrow", sans-serif); font-variant-numeric: tabular-nums;
  background: linear-gradient(180deg, var(--metal-reflet), var(--metal-clair) 45%, var(--metal-sombre)); -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; }
.sj-role { margin: 6px 0 0; display: flex; align-items: center; gap: 8px; font: 700 12px/1 var(--police-titre, sans-serif); letter-spacing: .26em; text-transform: uppercase; color: var(--metal-moyen); }
.sj-role i { width: 8px; height: 8px; transform: rotate(45deg); background: linear-gradient(135deg, var(--metal-reflet), var(--metal-sombre)); }
.sj-pseudo { grid-column: 1 / -1; margin: 16px 0 0; font: 900 clamp(44px, 5.6vw, 92px)/.9 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .02em; white-space: nowrap; }
.sj-stats { display: grid; gap: 14px; }
.sj-stat-tete { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px; font: 700 11px/1 var(--police-titre, sans-serif); letter-spacing: .24em; text-transform: uppercase; color: var(--metal-moyen); }
.sj-stat-tete b { font: 800 22px/1 var(--police-titre, sans-serif); letter-spacing: .02em; color: var(--couleur-texte); font-variant-numeric: tabular-nums; }
.sj-barre { display: flex; gap: 3px; height: 10px; }
.sj-seg { position: relative; flex: 1; transform: skewX(-18deg); background: color-mix(in srgb, var(--metal-sombre) 35%, transparent); }
.sj-seg::after { content: ''; position: absolute; inset: 0; opacity: 0; transform: scaleY(.3); transition: opacity .15s, transform .2s cubic-bezier(.2,.9,.3,1.4);
  background: linear-gradient(180deg, var(--metal-reflet), var(--metal-clair) 50%, var(--metal-moyen)); }
.sj-seg.sj-on::after { opacity: 1; transform: none; }
.sj-seg.sj-pointe::after { background: var(--metal-reflet); }
.sj-droite { position: absolute; right: clamp(24px, 5vw, 90px); top: 50%; transform: translateY(-58%); width: min(22vw, 320px); text-align: right; z-index: 2; }
.sj-etiquette { margin: 0; font: 700 11px/1 var(--police-titre, sans-serif); letter-spacing: .3em; text-transform: uppercase; color: var(--metal-moyen); }
.sj-agent { margin: 10px 0 0; font: 900 clamp(34px, 3.8vw, 62px)/.95 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .06em;
  color: color-mix(in srgb, var(--sj-holo) 60%, var(--couleur-texte)); }
.sj-trait { height: 2px; margin: 18px 0 18px auto; width: 60%; background: linear-gradient(90deg, transparent, var(--metal-clair)); }
.sj-scene .sj-verrouiller { display: inline-flex; align-items: center; gap: 10px; padding: 12px 22px; border: 0; border-radius: 999px; cursor: pointer;
  font: 800 13px/1 var(--police-titre, sans-serif); letter-spacing: .22em; text-transform: uppercase; color: var(--couleur-nuit);
  background: linear-gradient(135deg, var(--metal-sombre), var(--metal-clair) 40%, var(--metal-reflet) 52%, var(--metal-clair) 64%, var(--metal-moyen));
  transition: transform .15s; }
.sj-verrouiller:hover { transform: scale(1.05); }
.sj-verrouiller:active { transform: scale(.96); }
.sj-indice { margin: 14px 0 0; font-size: 11px; letter-spacing: .12em; opacity: .55; }
.sj-selecteur { position: absolute; left: 50%; bottom: 26px; transform: translateX(-50%); display: flex; gap: 16px; z-index: 3; }
.sj-alveole { position: relative; display: grid; justify-items: center; gap: 8px; padding: 0; border: 0; background: none; cursor: pointer; transition: transform .2s cubic-bezier(.2,.9,.3,1.4); }
.sj-alveole:hover, .sj-alveole:focus-visible, .sj-alveole.sj-apercu { transform: translateY(-6px) scale(1.06); }
.sj-alveole:focus-visible { outline: none; }
.sj-alveole-halo { position: absolute; left: 50%; top: 44px; width: 150px; height: 150px; transform: translate(-50%, -50%); border-radius: 50%; opacity: 0; transition: opacity .25s; pointer-events: none;
  background: radial-gradient(circle, color-mix(in srgb, var(--metal-clair) 45%, transparent), transparent 65%); }
.sj-alveole.sj-verrouille .sj-alveole-halo { opacity: 1; }
.sj-alveole-cadre { position: relative; width: 78px; aspect-ratio: .87; clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  background: color-mix(in srgb, var(--metal-sombre) 70%, transparent); transition: background .2s; }
.sj-alveole:hover .sj-alveole-cadre, .sj-alveole.sj-apercu .sj-alveole-cadre { background: var(--metal-moyen); }
.sj-alveole.sj-verrouille .sj-alveole-cadre { background: linear-gradient(135deg, var(--metal-reflet), var(--metal-sombre) 45%, var(--metal-clair) 75%, var(--metal-sombre)); }
.sj-alveole-cadre img { position: absolute; inset: 3px; width: calc(100% - 6px); height: calc(100% - 6px); object-fit: cover; object-position: 50% 15%;
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%); opacity: .55; transition: opacity .2s; }
.sj-alveole:hover img, .sj-alveole.sj-apercu img, .sj-alveole.sj-verrouille img { opacity: 1; }
.sj-alveole-num { position: absolute; left: 50%; bottom: 4px; transform: translateX(-50%); padding: 2px 5px; font: 800 11px/1 var(--police-titre, sans-serif); color: var(--couleur-nuit);
  background: linear-gradient(135deg, var(--metal-clair), var(--metal-reflet)); }
.sj-alveole-nom { font: 700 11px/1 var(--police-titre, sans-serif); letter-spacing: .2em; text-transform: uppercase; opacity: .6; }
.sj-alveole.sj-verrouille .sj-alveole-nom { opacity: 1; color: var(--metal-clair); }
.sj-scene[data-format="etroit"] .sj-centre { top: 150px; bottom: 236px; width: 100%; }
.sj-scene[data-format="etroit"] .sj-gauche { display: contents; }
.sj-scene[data-format="etroit"] .sj-infos { position: absolute; left: 16px; right: 16px; top: 74px; z-index: 2; display: flex; flex-wrap: wrap; align-items: baseline; justify-content: center; column-gap: 12px; text-align: center; }
.sj-scene[data-format="etroit"] .sj-photo { display: none; }
.sj-scene[data-format="etroit"] .sj-numero { font-size: 34px; }
.sj-scene[data-format="etroit"] .sj-pseudo { order: -1; flex-basis: auto; margin: 0; font-size: 42px; }
.sj-scene[data-format="etroit"] .sj-role { flex-basis: 100%; justify-content: center; margin-top: 4px; font-size: 10px; }
.sj-scene[data-format="etroit"] .sj-stats { position: absolute; left: 16px; right: 16px; bottom: 124px; z-index: 2; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.sj-scene[data-format="etroit"] .sj-stat-tete { flex-direction: column-reverse; align-items: flex-start; gap: 4px; font-size: 9px; }
.sj-scene[data-format="etroit"] .sj-stat-tete b { font-size: 18px; }
.sj-scene[data-format="etroit"] .sj-barre { gap: 2px; height: 7px; }
.sj-scene[data-format="etroit"] .sj-droite { left: 16px; right: 16px; top: auto; bottom: 192px; width: auto; transform: none; text-align: center; display: flex; justify-content: center; align-items: baseline; gap: 10px; }
.sj-scene[data-format="etroit"] .sj-agent { margin: 0; font-size: 20px; }
.sj-scene[data-format="etroit"] .sj-trait, .sj-scene[data-format="etroit"] .sj-verrouiller, .sj-scene[data-format="etroit"] .sj-indice { display: none; }
.sj-scene[data-format="etroit"] .sj-selecteur { bottom: 16px; gap: 8px; }
.sj-scene[data-format="etroit"] .sj-alveole-cadre { width: 56px; }
.sj-scene[data-format="etroit"] .sj-alveole-halo { top: 32px; width: 100px; height: 100px; }
.sj-scene[data-format="etroit"] .sj-alveole-nom { font-size: 9px; letter-spacing: .12em; }
.sj-scene[data-format="etroit"] .sj-tampon { top: 34%; }
.sj-scene[data-statique] *, .sj-scene[data-statique] *::after { animation: none !important; transition: none !important; }
.sj-scene[data-statique] .sj-poussiere { display: none; }`,
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
    const scene = document.createElement('div');
    scene.className = 'sj-scene';
    if (statique) scene.dataset.statique = '1';
    const stat = (cle, nom) => '<div class="sj-stat" data-stat="' + cle + '"><div class="sj-stat-tete"><span>' + nom + '</span><b>0</b></div><div class="sj-barre"></div></div>';
    scene.innerHTML =
      '<div class="sj-sol" aria-hidden="true"></div>' +
      '<p class="sj-nom-geant" aria-hidden="true"><span></span></p>' +
      '<div class="sj-centre" aria-hidden="true">' +
        '<div class="sj-bassin"></div>' +
        '<div class="sj-socle"><span class="sj-anneau sj-anneau--plein"></span><span class="sj-anneau sj-anneau--graduations"></span>' +
          '<span class="sj-anneau sj-anneau--arcs"></span><span class="sj-anneau sj-anneau--tirets"></span><span class="sj-onde"></span></div>' +
        '<div class="sj-faisceau"></div>' +
        [18, 31, 44, 52, 61, 70, 79].map((x, n) => '<i class="sj-poussiere" style="left:' + x + '%;animation-delay:' + (-n * 0.65).toFixed(2) + 's"></i>').join('') +
        '<div class="sj-holo"><div class="sj-holo-corps"><div class="sj-holo-tremble"><img class="sj-holo-img" alt="" decoding="async">' +
          '<span class="sj-holo-teinte"></span><span class="sj-holo-lignes"></span></div></div></div>' +
        '<div class="sj-gerbe"></div>' +
        '<p class="sj-tampon"><span>Verrouillé</span></p>' +
      '</div>' +
      '<div class="sj-gauche">' +
        '<div class="sj-infos"><div class="sj-photo"><img alt=""></div><p class="sj-numero"></p><p class="sj-role"><i></i><span></span></p><h2 class="sj-pseudo"></h2></div>' +
        '<div class="sj-stats">' + stat('acs', 'ACS') + stat('kd', 'K/D') + stat('hs', 'HS %') + '</div>' +
      '</div>' +
      '<div class="sj-droite"><p class="sj-etiquette">Agent favori</p><p class="sj-agent"></p><div class="sj-trait"></div>' +
        '<button type="button" class="sj-verrouiller">Verrouiller</button><p class="sj-indice">Survolez un joueur · cliquez pour le verrouiller</p></div>' +
      '<div class="sj-selecteur" role="group" aria-label="Choisir un joueur">' + joueurs.map((j, i) =>
        '<button type="button" class="sj-alveole" data-i="' + i + '" aria-label="' + j.pseudo + ', ' + j.role + '"><span class="sj-alveole-halo"></span>' +
          '<span class="sj-alveole-cadre"><img alt="" src="' + j.photo + '"><span class="sj-alveole-num">' + j.numero + '</span></span>' +
          '<span class="sj-alveole-nom">' + j.pseudo + '</span></button>').join('') + '</div>' +
      '<div class="sj-flash" aria-hidden="true"></div>';
    conteneur.appendChild(scene);
    const $ = s => scene.querySelector(s);
    const corps = $('.sj-holo-corps'), tremble = $('.sj-holo-tremble'), imageHolo = $('.sj-holo-img');
    const faisceau = $('.sj-faisceau'), onde = $('.sj-onde'), gerbe = $('.sj-gerbe'), tampon = $('.sj-tampon'), flash = $('.sj-flash');
    const nomGeant = $('.sj-nom-geant span'), numero = $('.sj-numero'), pseudo = $('.sj-pseudo'), role = $('.sj-role span'), agent = $('.sj-agent');
    const photo = $('.sj-photo img');
    const alveoles = [...scene.querySelectorAll('.sj-alveole')];
    const stats = { acs: { el: $('[data-stat="acs"]'), max: 300, decimales: 0 }, kd: { el: $('[data-stat="kd"]'), max: 2, decimales: 2 }, hs: { el: $('[data-stat="hs"]'), max: 40, decimales: 0 } };
    joueurs.forEach(j => { new Image().src = j.agentImage; });
    const minuteries = new Set();
    const plusTard = (f, ms) => { const id = setTimeout(() => { minuteries.delete(id); f(); }, ms); minuteries.add(id); return id; };
    const boucles = new Map();
    const arreterBoucle = el => { cancelAnimationFrame(boucles.get(el)); boucles.delete(el); };
    const rejouer = (el, classe = 'sj-joue') => { el.classList.remove(classe); void el.offsetWidth; el.classList.add(classe); };
    let affiche = -1, verrouille = 0, jeton = 0, animHolo = null, attenteRetour = 0;
    function appliquerReglages() {
      const s = scene.style;
      s.setProperty('--sj-holo', r.holoCouleur);
      s.setProperty('--sj-taille', r.holoTaille);
      s.setProperty('--sj-force', r.holoTremblement);
      s.setProperty('--sj-lignes', r.holoLignes);
      s.setProperty('--sj-tour', r.socleTour + 's');
      s.setProperty('--sj-faisceau', r.faisceau);
      s.setProperty('--sj-flash', r.flash);
      s.setProperty('--sj-nom', r.nomGeant);
      s.setProperty('--sj-sol', r.sol);
      for (const cle in stats) {
        const barre = stats[cle].el.querySelector('.sj-barre');
        if (barre.children.length !== r.segments) barre.innerHTML = '<i class="sj-seg"></i>'.repeat(r.segments);
      }
      if (gerbe.children.length !== r.particules) gerbe.innerHTML = '<i class="sj-pixel"></i>'.repeat(r.particules);
    }
    const SIGNES = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#%&@$/<>';
    function ecrire(el, texte) {
      arreterBoucle(el);
      if (statique || !r.brouillage) { el.textContent = texte; return; }
      const lettres = [...texte], duree = r.dureeChangement * 1000 * 0.9;
      const fins = lettres.map((c, i) => duree * (0.3 + 0.7 * (i + 1) / lettres.length));
      let debut = 0, dernier = -1e9, affichage = lettres.map(() => '');
      const pas = t => {
        if (!debut) debut = t;
        const e = t - debut, renouveler = t - dernier > 55;
        if (renouveler) dernier = t;
        let fini = true;
        affichage = lettres.map((c, i) => {
          if (c === ' ' || e >= fins[i]) return c;
          fini = false;
          return renouveler || !affichage[i] ? SIGNES[(Math.random() * SIGNES.length) | 0] : affichage[i];
        });
        el.textContent = affichage.join('');
        if (fini) boucles.delete(el); else boucles.set(el, requestAnimationFrame(pas));
      };
      boucles.set(el, requestAnimationFrame(pas));
    }
    function compter(el, de, a, decimales) {
      arreterBoucle(el);
      if (statique) { el.textContent = a.toFixed(decimales); return; }
      const duree = r.comptage * 1000;
      let debut = 0;
      const pas = t => {
        if (!debut) debut = t;
        const k = Math.min(1, (t - debut) / duree), e = 1 - Math.pow(1 - k, 3);
        el.textContent = (de + (a - de) * e).toFixed(decimales);
        if (k < 1) boucles.set(el, requestAnimationFrame(pas)); else boucles.delete(el);
      };
      boucles.set(el, requestAnimationFrame(pas));
    }
    function allumer(barre, part) {
      const segs = [...barre.children], n = Math.max(1, Math.round(part * segs.length));
      const pasMs = statique ? 0 : (r.comptage * 1000 * 0.8) / segs.length;
      segs.forEach(s => { s.classList.remove('sj-on', 'sj-pointe'); s.style.transitionDelay = '0s'; });
      void barre.offsetWidth;
      segs.forEach((s, k) => {
        if (k >= n) return;
        s.style.transitionDelay = (k * pasMs) / 1000 + 's';
        s.classList.add('sj-on');
        if (k === n - 1) s.classList.add('sj-pointe');
      });
    }
    function changerHolo(j, depuisLigne) {
      const n = ++jeton;
      const poser = () => { imageHolo.src = j.agentImage; corps.style.setProperty('--sj-masque', 'url("' + j.agentImage + '")'); };
      if (statique) { poser(); return; }
      const d = r.dureeChangement * 1000;
      const ligne = 'scale(1.15, .012)';
      let sortie = null;
      const deployer = () => {
        if (n !== jeton) return;
        if (sortie) sortie.cancel();
        poser();
        rejouer(faisceau, 'sj-eclair');
        rejouer(tremble, 'sj-allume');
        animHolo = corps.animate([{ transform: ligne, opacity: .9 }, { transform: 'scale(.96, 1.05)', opacity: 1, offset: .62 }, { transform: 'none', opacity: .92 }],
          { duration: d * 0.6, easing: 'cubic-bezier(.2,.8,.3,1)' });
      };
      const actuel = getComputedStyle(corps).transform;
      if (animHolo) animHolo.cancel();
      if (depuisLigne) { corps.style.transform = ''; deployer(); return; }
      sortie = animHolo = corps.animate([{ transform: actuel === 'none' ? 'none' : actuel, opacity: .92 }, { transform: ligne, opacity: .9 }],
        { duration: d * 0.4, easing: 'cubic-bezier(.55,0,1,.45)', fill: 'forwards' });
      sortie.onfinish = deployer;
    }
    function afficher(i, depuisLigne = false) {
      if (i === affiche) return;
      const avant = joueurs[affiche], j = joueurs[i];
      affiche = i;
      alveoles.forEach((a, k) => a.classList.toggle('sj-apercu', k === i && k !== verrouille));
      changerHolo(j, depuisLigne);
      ecrire(numero, j.numero);
      ecrire(pseudo, j.pseudo);
      ecrire(role, j.role);
      ecrire(agent, j.agent);
      photo.src = j.photo;
      nomGeant.textContent = j.pseudo;
      if (!statique) nomGeant.parentElement.animate([{ opacity: 0, transform: 'translateY(-50%) translateX(4%)' }, { opacity: 1, transform: 'translateY(-50%)' }],
        { duration: r.dureeChangement * 1000 * 1.4, easing: 'cubic-bezier(.2,.8,.3,1)' });
      for (const cle in stats) {
        const s = stats[cle];
        compter(s.el.querySelector('b'), avant ? avant[cle] : 0, j[cle], s.decimales);
        allumer(s.el.querySelector('.sj-barre'), Math.min(1, j[cle] / s.max));
      }
    }
    function gerbePixels() {
      const echelle = Math.min(1, scene.clientWidth / 900);
      [...gerbe.children].forEach(p => {
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.5;
        const distance = (90 + Math.random() * 220) * Math.max(0.55, echelle);
        p.style.setProperty('--dx', (Math.cos(angle) * distance * 1.4).toFixed(1) + 'px');
        p.style.setProperty('--dy', (Math.sin(angle) * distance).toFixed(1) + 'px');
        p.style.setProperty('--t', (3 + Math.round(Math.random() * 7)) + 'px');
        p.style.setProperty('--d', (Math.random() * 0.12).toFixed(2) + 's');
        p.classList.remove('sj-joue');
      });
      void gerbe.offsetWidth;
      [...gerbe.children].forEach(p => p.classList.add('sj-joue'));
    }
    function verrouiller(i) {
      const dejaAffiche = i === affiche;
      verrouille = i;
      alveoles.forEach((a, k) => { a.classList.toggle('sj-verrouille', k === i); a.classList.remove('sj-apercu'); a.setAttribute('aria-pressed', String(k === i)); });
      afficher(i);
      if (statique) return;
      plusTard(() => {
        if (verrouille !== i) return;
        if (r.onde) rejouer(onde);
        if (r.particules > 0) gerbePixels();
        if (r.tampon) rejouer(tampon);
        if (r.flash > 0) rejouer(flash);
      }, dejaAffiche ? 0 : r.dureeChangement * 1000 * 0.45);
    }
    alveoles.forEach((a, i) => {
      a.addEventListener('pointerenter', e => {
        if (e.pointerType !== 'mouse' || !r.apercuSurvol) return;
        clearTimeout(attenteRetour);
        afficher(i);
      });
      a.addEventListener('focus', () => { if (r.apercuSurvol) { clearTimeout(attenteRetour); afficher(i); } });
      a.addEventListener('click', () => verrouiller(i));
      a.addEventListener('keydown', e => {
        const k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (k) { e.preventDefault(); alveoles[(i + k + alveoles.length) % alveoles.length].focus(); }
      });
    });
    const selecteur = $('.sj-selecteur');
    const revenir = () => { clearTimeout(attenteRetour); attenteRetour = plusTard(() => afficher(verrouille), 160); };
    selecteur.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') revenir(); });
    selecteur.addEventListener('focusout', e => { if (!selecteur.contains(e.relatedTarget)) revenir(); });
    $('.sj-verrouiller').addEventListener('click', () => { clearTimeout(attenteRetour); verrouiller(affiche); });
    const observateurTaille = new ResizeObserver(() => { scene.dataset.format = scene.clientWidth < 760 ? 'etroit' : 'large'; });
    observateurTaille.observe(scene);
    scene.dataset.format = scene.clientWidth < 760 ? 'etroit' : 'large';
    appliquerReglages();
    afficher(0, true);
    alveoles[0].classList.add('sj-verrouille');
    alveoles[0].setAttribute('aria-pressed', 'true');
    if (!statique) plusTard(() => { if (verrouille === 0 && affiche === 0) verrouiller(0); }, 700);
    return {
      mettreAJour(nouveaux) {
        r = { ...nouveaux };
        appliquerReglages();
      },
      detruire() {
        minuteries.forEach(clearTimeout);
        boucles.forEach(id => cancelAnimationFrame(id));
        if (animHolo) animHolo.cancel();
        observateurTaille.disconnect();
        scene.remove();
      }
    };
  }
};
enregistrerEffet(EffetSelectionJoueurs);
