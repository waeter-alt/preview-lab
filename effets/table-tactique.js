const EffetTableTactique = {
  id: 'table-tactique',
  nom: 'Table tactique',
  description: 'Table de briefing holographique : survolez une balise pour voir le joueur, cliquez pour que la caméra plonge vers lui et qu\'il s\'élève en hologramme avec ses statistiques en orbite. Clic sur le fond, « Vue d\'ensemble » ou Échap pour revenir.',
  variables: ['--metal-sombre', '--metal-moyen', '--metal-clair', '--metal-reflet', '--couleur-fond', '--couleur-lueur', '--couleur-texte', '--couleur-nuit', '--couleur-surface', '--police-titre', '--police-logo'],
  joueurs: [
    { numero: '01', pseudo: 'Noctis', role: 'Duelliste', agent: 'Jett', agentImage: 'images/agents/jett-full.webp', photo: 'images/joueurs/joueur-01.jpg', acs: 271, kd: 1.34, hs: 32, poste: { x: 21, y: 50 } },
    { numero: '02', pseudo: 'Kaze', role: 'Initiateur', agent: 'Sova', agentImage: 'images/agents/sova-full.webp', photo: 'images/joueurs/joueur-02.jpg', acs: 214, kd: 1.12, hs: 26, poste: { x: 50, y: 60 } },
    { numero: '03', pseudo: 'Lyra', role: 'Contrôleuse', agent: 'Omen', agentImage: 'images/agents/omen-full.webp', photo: 'images/joueurs/joueur-03.jpg', acs: 198, kd: 1.05, hs: 24, poste: { x: 50, y: 33 } },
    { numero: '04', pseudo: 'Sahir', role: 'Sentinelle', agent: 'Killjoy', agentImage: 'images/agents/killjoy-full.webp', photo: 'images/joueurs/joueur-04.jpg', acs: 205, kd: 1.18, hs: 28, poste: { x: 80, y: 31 } },
    { numero: '05', pseudo: 'Vortex', role: 'Flex · IGL', agent: 'Skye', agentImage: 'images/agents/skye-full.webp', photo: 'images/joueurs/joueur-05.jpg', acs: 189, kd: 0.97, hs: 22, poste: { x: 30, y: 89 } }
  ],
  liaisons: [[4, 0], [4, 1], [1, 2], [2, 3], [1, 3]],
  parametres: [
    { categorie: 'Hologramme', id: 'holoCouleur', libelle: 'Hologramme · couleur', type: 'couleur', defaut: '#8FB0CC' },
    { categorie: 'Hologramme', id: 'holoTaille', libelle: 'Hologramme · taille (part de la hauteur de l\'écran)', type: 'nombre', min: 0.4, max: 1.1, pas: 0.02, defaut: 0.8 },
    { categorie: 'Hologramme', id: 'holoTremblement', libelle: 'Hologramme · tremblement (0 = stable)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.4 },
    { categorie: 'Hologramme', id: 'holoLignes', libelle: 'Hologramme · lignes de balayage (0 = aucune)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.5 },
    { categorie: 'Table', id: 'inclinaison', libelle: 'Table · inclinaison (degrés, 0 = vue de dessus)', type: 'nombre', min: 35, max: 70, pas: 1, defaut: 58 },
    { categorie: 'Table', id: 'tableTaille', libelle: 'Table · taille', type: 'nombre', min: 0.7, max: 1.2, pas: 0.02, defaut: 1 },
    { categorie: 'Table', id: 'quadrillage', libelle: 'Table · quadrillage (opacité, 0 = caché)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.5 },
    { categorie: 'Radar', id: 'radarTour', libelle: 'Radar · durée d\'un tour (s)', type: 'nombre', min: 1.5, max: 12, pas: 0.5, defaut: 4 },
    { categorie: 'Radar', id: 'radarIntensite', libelle: 'Radar · intensité du balayage (0 = éteint)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.6 },
    { categorie: 'Radar', id: 'pings', libelle: 'Radar · « ping » quand il passe sur une balise', type: 'interrupteur', defaut: true },
    { categorie: 'Balises', id: 'pulsation', libelle: 'Balises · durée d\'une pulsation des anneaux (s)', type: 'nombre', min: 0.8, max: 5, pas: 0.1, defaut: 2.2 },
    { categorie: 'Balises', id: 'liaisons', libelle: 'Balises · intensité des liaisons entre coéquipiers (0 = aucune)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.55 },
    { categorie: 'Caméra', id: 'zoom', libelle: 'Caméra · zoom sur le joueur choisi', type: 'nombre', min: 1.2, max: 3.2, pas: 0.1, defaut: 2.1 },
    { categorie: 'Caméra', id: 'bascule', libelle: 'Caméra · durée de la bascule (s)', type: 'nombre', min: 0.3, max: 2.5, pas: 0.05, defaut: 1.1 },
    { categorie: 'Caméra', id: 'rotationCamera', libelle: 'Caméra · rotation pendant la bascule (degrés)', type: 'nombre', min: 0, max: 45, pas: 1, defaut: 18 },
    { categorie: 'Caméra', id: 'onde', libelle: 'Caméra · onde au sol à l\'arrivée', type: 'interrupteur', defaut: true },
    { categorie: 'Statistiques', id: 'orbiteTour', libelle: 'Statistiques · durée d\'un tour de l\'orbite (s)', type: 'nombre', min: 4, max: 40, pas: 1, defaut: 16 },
    { categorie: 'Statistiques', id: 'comptage', libelle: 'Statistiques · durée du comptage des chiffres (s)', type: 'nombre', min: 0.2, max: 3, pas: 0.1, defaut: 1.2 }
  ],
  css: `
.tt-scene { position: absolute; inset: 0; overflow: hidden; color: var(--couleur-texte); font-family: system-ui, sans-serif;
  background: radial-gradient(ellipse 75% 60% at 50% 58%, var(--couleur-lueur), transparent 72%), var(--couleur-fond);
  --tt-holo: #8FB0CC; --tt-force: .4; --tt-lignes: .5; --tt-grille: .5; --tt-radar: 4s; --tt-radar-force: .6; --tt-pulse: 2.2s;
  --tt-liaisons: .55; --tt-bascule: 1.1s; --tt-orbite: 16s; --tt-cote: 600px; --tt-persp: 1600px; --tt-holo-h: 400px; --tt-orbite-r: 240px;
  --tt-mat: 46px; --tt-anneau: 46px; --tt-rx: 58deg; --tt-rz: 0deg; --tt-k: 1; --tt-tx: 0%; --tt-ty: 0%; --tt-decal: 0px; }
.tt-scene button { font: inherit; color: inherit; }
.tt-scene[data-format="etroit"] { --tt-mat: 30px; --tt-anneau: 30px; }
.tt-plateau { position: absolute; inset: 0; transform: translateY(var(--tt-decal)); transition: transform var(--tt-bascule) cubic-bezier(.65,0,.2,1); }
.tt-vue { position: absolute; left: 50%; top: 50%; width: 0; height: 0; perspective: var(--tt-persp); perspective-origin: 0 0; }
.tt-table { position: absolute; left: calc(var(--tt-cote) / -2); top: calc(var(--tt-cote) / -2); width: var(--tt-cote); height: var(--tt-cote);
  transform-style: preserve-3d; transform: rotateX(var(--tt-rx)) rotateZ(var(--tt-rz)) scale(var(--tt-k)) translate(var(--tt-tx), var(--tt-ty));
  transition: transform var(--tt-bascule) cubic-bezier(.65,0,.2,1); }
.tt-verre { position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--couleur-nuit) 72%, transparent), color-mix(in srgb, var(--couleur-nuit) 92%, transparent) 75%); }
.tt-grille { position: absolute; inset: 0; opacity: var(--tt-grille);
  background: repeating-linear-gradient(90deg, color-mix(in srgb, var(--tt-holo) 26%, transparent) 0 1px, transparent 1px 5%),
              repeating-linear-gradient(0deg, color-mix(in srgb, var(--tt-holo) 26%, transparent) 0 1px, transparent 1px 5%); }
.tt-bord { position: absolute; inset: -6px; padding: 3px;
  background: linear-gradient(135deg, var(--metal-reflet), var(--metal-sombre) 30%, var(--metal-clair) 55%, var(--metal-sombre) 78%, var(--metal-reflet));
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0); }
.tt-carte { position: absolute; inset: 0; width: 100%; height: 100%; color: var(--tt-holo); overflow: visible; }
.tt-carte text { font-family: var(--police-logo, "Arial Black", sans-serif); fill: currentColor; }
.tt-carte .tt-site-lettre { font-size: 92px; font-weight: 900; opacity: .85; }
.tt-carte .tt-petit { font-family: var(--police-titre, "Arial Narrow", sans-serif); font-size: 22px; letter-spacing: .3em; opacity: .7; }
.tt-radar { position: absolute; inset: 0; border-radius: 50%; opacity: var(--tt-radar-force);
  background: conic-gradient(from 0deg, transparent 0 70%, color-mix(in srgb, var(--tt-holo) 10%, transparent) 82%, color-mix(in srgb, var(--tt-holo) 55%, transparent) 99.4%, var(--tt-holo) 99.6% 100%);
  animation: tt-tourne var(--tt-radar) linear infinite; }
@keyframes tt-tourne { to { transform: rotate(1turn); } }
.tt-liens { position: absolute; inset: 0; width: 100%; height: 100%; opacity: var(--tt-liaisons); transition: opacity .4s; }
.tt-liens line { stroke-width: 4; stroke-dasharray: 14 8; animation: tt-respire 2.6s ease-in-out infinite alternate; }
@keyframes tt-respire { from { opacity: .45; } to { opacity: 1; } }
.tt-paquet { fill: var(--metal-reflet); animation: tt-paquet 2.8s ease-in-out infinite; }
@keyframes tt-paquet { 0% { transform: translate(0, 0); opacity: 0; } 15%, 85% { opacity: 1; } 100% { transform: translate(var(--tt-dx), var(--tt-dy)); opacity: 0; } }
.tt-scene[data-mode="zoom"] .tt-liens { opacity: 0; }
.tt-balise { position: absolute; width: 0; height: 0; transform-style: preserve-3d; }
.tt-sol { position: absolute; left: calc(var(--tt-anneau) / -2); top: calc(var(--tt-anneau) / -2); width: var(--tt-anneau); height: var(--tt-anneau); }
.tt-sol i { position: absolute; inset: 0; border-radius: 50%; }
.tt-anneau { border: 2px solid var(--tt-holo); opacity: 0; animation: tt-pulse var(--tt-pulse) ease-out infinite; }
.tt-anneau + .tt-anneau { animation-delay: calc(var(--tt-pulse) / -2); }
@keyframes tt-pulse { 0% { transform: scale(.35); opacity: .95; } 100% { transform: scale(1.9); opacity: 0; } }
.tt-sol .tt-coeur { inset: 34%; background: radial-gradient(circle, var(--metal-reflet), var(--tt-holo) 45%, transparent 72%); transition: scale .25s; }
.tt-ping { border: 3px solid var(--metal-reflet); opacity: 0; animation: tt-ping var(--tt-radar) linear infinite; animation-delay: calc(var(--tt-radar) * var(--tt-a)); }
@keyframes tt-ping { 0% { transform: scale(.4); opacity: 1; } 16% { transform: scale(2.6); opacity: 0; } 100% { transform: scale(2.6); opacity: 0; } }
.tt-coeur { animation: tt-blip var(--tt-radar) linear infinite; animation-delay: calc(var(--tt-radar) * var(--tt-a)); }
@keyframes tt-blip { 0% { transform: scale(1.9); } 12%, 100% { transform: scale(1); } }
.tt-scene[data-pings="non"] .tt-ping { display: none; }
.tt-scene[data-pings="non"] .tt-coeur { animation: none; }
.tt-onde { border: 3px solid var(--metal-reflet); opacity: 0; }
.tt-balise.tt-active .tt-anneau { border-color: var(--metal-reflet); }
.tt-debout { position: absolute; left: 0; top: 0; width: 0; height: 0; transform-origin: 0 0;
  transform: rotateZ(calc(var(--tt-rz) * -1)) rotateX(calc(var(--tt-rx) * -1)) scale(calc(1 / var(--tt-k)));
  transition: transform var(--tt-bascule) cubic-bezier(.65,0,.2,1); }
.tt-faisceau { position: absolute; left: -2px; bottom: 0; width: 4px; height: var(--tt-mat); opacity: .8; transition: opacity .25s;
  background: linear-gradient(0deg, var(--tt-holo), color-mix(in srgb, var(--tt-holo) 30%, transparent) 70%, transparent); }
.tt-scene .tt-cible { position: absolute; left: 0; bottom: var(--tt-mat); transform: translateX(-50%); transform-origin: 50% 100%;
  display: flex; align-items: center; gap: 7px; padding: 5px 10px 5px 5px; border: 0; cursor: pointer; white-space: nowrap;
  background: none;
  transition: scale .2s cubic-bezier(.2,.9,.3,1.4), opacity .3s; animation: tt-apparait .6s cubic-bezier(.2,.9,.3,1.3) backwards; }
.tt-cible::before { content: ""; position: absolute; inset: 0; z-index: -1; background: color-mix(in srgb, var(--couleur-nuit) 78%, transparent);
  clip-path: polygon(0 0, 100% 0, 100% 70%, calc(100% - 8px) 100%, 0 100%); }
@keyframes tt-apparait { from { scale: 0; opacity: 0; } }
.tt-cible:focus-visible { outline: none; }
.tt-num { padding: 3px 5px; font: 800 12px/1 var(--police-titre, "Arial Narrow", sans-serif); color: var(--couleur-nuit);
  background: linear-gradient(135deg, var(--metal-reflet), var(--metal-clair) 50%, var(--metal-moyen)); }
.tt-nom { font: 800 14px/1 var(--police-titre, "Arial Narrow", sans-serif); letter-spacing: .14em; text-transform: uppercase; color: var(--tt-holo); }
.tt-scene[data-format="etroit"] .tt-cible { padding: 3px 7px 3px 3px; gap: 5px; }
.tt-scene[data-format="etroit"] .tt-num { font-size: 10px; padding: 2px 4px; }
.tt-scene[data-format="etroit"] .tt-nom { font-size: 11px; letter-spacing: .08em; }
.tt-balise:has(.tt-cible:hover) .tt-coeur, .tt-balise:has(.tt-cible:focus-visible) .tt-coeur { scale: 1.8; }
.tt-cible:hover, .tt-cible:focus-visible { scale: 1.12; }
.tt-balise:has(.tt-cible:hover) .tt-faisceau, .tt-balise:has(.tt-cible:focus-visible) .tt-faisceau { opacity: 1; }
.tt-bulle { position: absolute; left: 50%; bottom: calc(100% + 8px); display: grid; gap: 4px; min-width: 128px; padding: 8px 10px 9px; text-align: left; pointer-events: none;
  opacity: 0; transform: translate(-50%, 8px) scale(.9); transform-origin: 50% 100%; transition: opacity .2s, transform .25s cubic-bezier(.2,.9,.3,1.3);
  background: repeating-linear-gradient(0deg, color-mix(in srgb, var(--tt-holo) 10%, transparent) 0 1px, transparent 1px 4px), color-mix(in srgb, var(--couleur-nuit) 88%, transparent);
  border-left: 2px solid var(--tt-holo); font: 600 10px/1.2 var(--police-titre, sans-serif); letter-spacing: .16em; text-transform: uppercase; color: color-mix(in srgb, var(--tt-holo) 70%, transparent); }
.tt-bulle b { font-weight: 800; color: var(--metal-reflet); letter-spacing: .08em; }
.tt-cible:hover .tt-bulle, .tt-cible:focus-visible .tt-bulle { opacity: 1; transform: translate(-50%, 0); }
.tt-scene[data-mode="zoom"] .tt-bulle { display: none; }
.tt-scene[data-mode="zoom"] .tt-cible { opacity: .4; }
.tt-scene[data-mode="zoom"] .tt-cible:hover { opacity: .9; }
.tt-balise.tt-active .tt-cible, .tt-balise.tt-active .tt-faisceau { opacity: 0 !important; pointer-events: none; }
.tt-focus { position: absolute; left: 50%; top: 50%; width: 0; height: 0; pointer-events: none; opacity: 0; transition: opacity .25s; }
.tt-focus.tt-visible { opacity: 1; }
.tt-flaque { position: absolute; left: calc(var(--tt-holo-h) * -.8); top: calc(var(--tt-holo-h) * -1.08); width: calc(var(--tt-holo-h) * 1.6); height: calc(var(--tt-holo-h) * 1.3);
  background: radial-gradient(ellipse 50% 50% at 50% 56%, color-mix(in srgb, var(--couleur-nuit) 80%, transparent), transparent 72%); }
.tt-eclat { position: absolute; left: calc(var(--tt-holo-h) * -.3); top: calc(var(--tt-holo-h) * -.07); width: calc(var(--tt-holo-h) * .6); height: calc(var(--tt-holo-h) * .14); border-radius: 50%;
  mix-blend-mode: screen; background: radial-gradient(ellipse, color-mix(in srgb, var(--tt-holo) 85%, transparent), transparent 70%); }
.tt-holo { position: absolute; left: calc(var(--tt-holo-h) / -2); bottom: calc(var(--tt-holo-h) * -.05); width: var(--tt-holo-h); height: var(--tt-holo-h); }
.tt-holo-corps { position: absolute; inset: 0; transform-origin: 50% 95%; mix-blend-mode: screen; opacity: .92; }
.tt-holo-tremble { position: absolute; inset: 0; isolation: isolate; animation: tt-tremble 2.3s steps(1) infinite; }
.tt-holo-tremble.tt-allume { animation: tt-allume .6s linear, tt-tremble 2.3s steps(1) .6s infinite; }
.tt-holo-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; filter: grayscale(1) contrast(1.15) brightness(1.4); }
.tt-holo-teinte, .tt-holo-lignes { position: absolute; inset: 0; -webkit-mask: var(--tt-masque) center / contain no-repeat; mask: var(--tt-masque) center / contain no-repeat; }
.tt-holo-teinte { background: var(--tt-holo); mix-blend-mode: color; }
.tt-holo-lignes { opacity: var(--tt-lignes); background: repeating-linear-gradient(0deg, var(--couleur-nuit) 0 2px, transparent 2px 5px); background-size: 100% 5px; animation: tt-lignes .9s linear infinite; }
@keyframes tt-lignes { to { background-position: 0 5px; } }
@keyframes tt-tremble {
  0%, 9%, 40%, 69%, 89% { transform: none; opacity: 1; }
  7% { transform: translateX(calc(var(--tt-force) * 3px)); opacity: calc(1 - var(--tt-force) * .25); }
  38% { transform: translateX(calc(var(--tt-force) * -2px)) skewX(calc(var(--tt-force) * 2deg)); opacity: calc(1 - var(--tt-force) * .4); }
  66% { transform: translate(calc(var(--tt-force) * 1.5px), calc(var(--tt-force) * -1px)); opacity: calc(1 - var(--tt-force) * .15); }
  88% { transform: translateX(calc(var(--tt-force) * -4px)); opacity: calc(1 - var(--tt-force) * .5); } }
@keyframes tt-allume { 0% { opacity: .2; } 15% { opacity: 1; } 25% { opacity: .1; } 40% { opacity: 1; } 52% { opacity: .35; } 64%, 100% { opacity: 1; } }
.tt-holo-scan { position: absolute; left: 18%; right: 18%; bottom: 5%; height: 3px; opacity: 0;
  background: linear-gradient(90deg, transparent, var(--tt-holo) 30%, var(--metal-reflet) 50%, var(--tt-holo) 70%, transparent); }
.tt-stats { position: absolute; left: 0; top: calc(var(--tt-holo-h) * -.3); width: 0; height: 0; }
.tt-trace { position: absolute; left: calc(var(--tt-orbite-r) * -1); top: calc(var(--tt-orbite-r) * -.3); width: calc(var(--tt-orbite-r) * 2); height: calc(var(--tt-orbite-r) * .6);
  border-radius: 50%; border: 1px dashed color-mix(in srgb, var(--tt-holo) 55%, transparent); }
.tt-ellipse { position: absolute; left: 0; top: 0; width: 0; height: 0; transform: scaleY(.3); }
.tt-bras { position: absolute; left: 0; top: 0; width: 0; height: 0; transform: rotate(var(--tt-angle)); animation: tt-bras var(--tt-orbite) linear infinite; }
@keyframes tt-bras { from { transform: rotate(var(--tt-angle)); } to { transform: rotate(calc(var(--tt-angle) + 1turn)); } }
.tt-pos { position: absolute; left: 0; top: 0; transform: translateX(var(--tt-orbite-r)); }
.tt-contre { position: absolute; left: 0; top: 0; transform: rotate(calc(var(--tt-angle) * -1)); animation: tt-contre var(--tt-orbite) linear infinite; }
@keyframes tt-contre { from { transform: rotate(calc(var(--tt-angle) * -1)); } to { transform: rotate(calc(var(--tt-angle) * -1 - 1turn)); } }
.tt-redresse { position: absolute; left: 0; top: 0; transform: scaleY(3.3333); }
.tt-pastille { position: absolute; left: 0; top: 0; display: grid; justify-items: center; gap: 3px; min-width: 72px; padding: 6px 9px 7px; transform: translate(-50%, -50%); white-space: nowrap;
  background: repeating-linear-gradient(0deg, color-mix(in srgb, var(--tt-holo) 12%, transparent) 0 1px, transparent 1px 4px), color-mix(in srgb, var(--couleur-nuit) 82%, transparent);
  border-top: 2px solid var(--tt-holo); clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
  animation: tt-profondeur var(--tt-orbite) linear infinite; animation-delay: calc(var(--tt-orbite) * var(--tt-phase)); }
@keyframes tt-profondeur { 0%, 50%, 100% { opacity: 1; } 75% { opacity: .3; } }
.tt-pastille span { font: 700 9px/1 var(--police-titre, sans-serif); letter-spacing: .24em; text-transform: uppercase; color: color-mix(in srgb, var(--tt-holo) 75%, transparent); }
.tt-pastille b { font: 800 22px/1 var(--police-titre, "Arial Narrow", sans-serif); font-variant-numeric: tabular-nums; letter-spacing: .02em; color: var(--metal-reflet); }
.tt-pastille--texte b { font-size: 14px; letter-spacing: .1em; text-transform: uppercase; }
.tt-scene[data-format="etroit"] .tt-pastille { min-width: 58px; padding: 5px 7px 6px; }
.tt-scene[data-format="etroit"] .tt-pastille b { font-size: 17px; }
.tt-scene[data-format="etroit"] .tt-pastille--texte b { font-size: 11px; }
.tt-titre { position: absolute; right: clamp(20px, 3vw, 48px); top: clamp(20px, 4vh, 40px); text-align: right; z-index: 2; transition: opacity .4s, transform .4s; }
.tt-etiquette { margin: 0; font: 700 11px/1 var(--police-titre, sans-serif); letter-spacing: .32em; text-transform: uppercase; color: var(--metal-moyen); }
.tt-carte-nom { margin: 8px 0 0; font: 900 clamp(26px, 2.6vw, 40px)/1 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .06em;
  background: linear-gradient(180deg, var(--metal-reflet), var(--metal-clair) 45%, var(--metal-sombre)); -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; }
.tt-indice { margin: 10px 0 0; font-size: 11px; letter-spacing: .12em; opacity: .6; }
.tt-scene[data-mode="zoom"] .tt-titre { opacity: 0; transform: translateY(-10px); }
.tt-fiche { position: absolute; left: clamp(24px, 5vw, 90px); top: 50%; z-index: 2; max-width: 36vw; padding: 20px 26px 22px; opacity: 0;
  background: repeating-linear-gradient(0deg, color-mix(in srgb, var(--tt-holo) 8%, transparent) 0 1px, transparent 1px 4px), color-mix(in srgb, var(--couleur-nuit) 84%, transparent);
  border-left: 3px solid var(--tt-holo); clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%); transform: translate(-24px, -50%); pointer-events: none;
  transition: opacity .35s, transform .5s cubic-bezier(.2,.8,.3,1); }
.tt-scene[data-mode="zoom"] .tt-fiche.tt-visible { opacity: 1; transform: translate(0, -50%); }
.tt-fiche-num { margin: 0; font: 900 clamp(34px, 3.6vw, 58px)/.9 var(--police-titre, "Arial Narrow", sans-serif); font-variant-numeric: tabular-nums; color: var(--tt-holo); }
.tt-fiche-pseudo { margin: 6px 0 0; font: 900 clamp(48px, 6.4vw, 110px)/.9 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .02em; white-space: nowrap;
  background: linear-gradient(180deg, var(--metal-reflet), var(--metal-clair) 55%, var(--metal-moyen)); -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; }
.tt-fiche-role { margin: 12px 0 0; display: flex; align-items: center; gap: 8px; font: 700 12px/1 var(--police-titre, sans-serif); letter-spacing: .26em; text-transform: uppercase; color: color-mix(in srgb, var(--tt-holo) 85%, transparent); }
.tt-fiche-role i { width: 8px; height: 8px; transform: rotate(45deg); background: linear-gradient(135deg, var(--metal-reflet), var(--metal-sombre)); }
.tt-fiche-agent { margin: 18px 0 0; font: 700 11px/1 var(--police-titre, sans-serif); letter-spacing: .26em; text-transform: uppercase; color: color-mix(in srgb, var(--tt-holo) 60%, transparent); }
.tt-fiche-agent b { display: block; margin-top: 6px; font: 900 clamp(26px, 2.6vw, 40px)/1 var(--police-titre, "Arial Narrow", sans-serif); letter-spacing: .06em; color: var(--tt-holo); }
.tt-scene .tt-retour { position: absolute; left: 50%; bottom: 24px; z-index: 3; white-space: nowrap; display: inline-flex; align-items: center; gap: 10px; padding: 11px 20px; border: 0; border-radius: 999px; cursor: pointer;
  font: 800 12px/1 var(--police-titre, sans-serif); letter-spacing: .22em; text-transform: uppercase; color: var(--couleur-nuit);
  background: linear-gradient(135deg, var(--metal-sombre), var(--metal-clair) 40%, var(--metal-reflet) 52%, var(--metal-clair) 64%, var(--metal-moyen));
  opacity: 0; pointer-events: none; transform: translate(-50%, 12px); transition: opacity .3s, transform .3s; }
.tt-retour kbd { padding: 2px 5px; border: 1px solid currentColor; font: 700 9px/1 system-ui, sans-serif; letter-spacing: .1em; opacity: .7; }
.tt-scene[data-mode="zoom"] .tt-retour { opacity: 1; pointer-events: auto; transform: translate(-50%, 0); }
.tt-scene[data-mode="zoom"] .tt-retour:hover { transform: translate(-50%, 0) scale(1.05); }
.tt-scene[data-format="etroit"] .tt-titre { left: 16px; right: 16px; top: auto; bottom: 18px; text-align: center; }
.tt-scene[data-format="etroit"] .tt-carte-nom { font-size: 24px; }
.tt-scene[data-format="etroit"] .tt-fiche { left: 16px; right: 16px; top: 72px; max-width: none; padding: 12px 14px 14px; text-align: center; transform: translateY(-12px);
  display: flex; flex-wrap: wrap; justify-content: center; align-items: baseline; column-gap: 10px; }
.tt-scene[data-format="etroit"][data-mode="zoom"] .tt-fiche.tt-visible { transform: none; }
.tt-scene[data-format="etroit"] .tt-fiche-num { font-size: 30px; }
.tt-scene[data-format="etroit"] .tt-fiche-pseudo { margin: 0; font-size: 40px; }
.tt-scene[data-format="etroit"] .tt-fiche-role { flex-basis: 100%; justify-content: center; margin-top: 6px; font-size: 10px; }
.tt-scene[data-format="etroit"] .tt-fiche-agent { flex-basis: 100%; margin-top: 6px; font-size: 10px; }
.tt-scene[data-format="etroit"] .tt-fiche-agent b { display: inline; margin: 0 0 0 6px; font-size: 16px; }
.tt-scene[data-format="etroit"] .tt-retour { bottom: 16px; }
.tt-scene[data-statique] *, .tt-scene[data-statique] *::after { animation: none !important; transition: none !important; }
.tt-scene[data-statique] .tt-anneau { opacity: .6; transform: scale(1.1); }
.tt-scene[data-statique] .tt-ping, .tt-scene[data-statique] .tt-paquet { display: none; }`,
  carteSvg: '<svg class="tt-carte" viewBox="0 0 1000 1000" aria-hidden="true">' +
    '<g fill="none" stroke="currentColor" stroke-opacity=".22" stroke-dasharray="4 10"><circle cx="500" cy="500" r="160"/><circle cx="500" cy="500" r="320"/><circle cx="500" cy="500" r="480"/></g>' +
    '<g fill="currentColor" fill-opacity=".07" stroke="currentColor" stroke-width="3" stroke-linejoin="round">' +
      '<path d="M170 420 H250 V560 H460 V380 H470 V290 H530 V380 H540 V600 H760 V440 H840 V920 H600 V960 H400 V920 H170 Z M250 620 V860 H460 V620 Z M540 660 V860 H760 V660 Z"/>' +
      '<rect x="90" y="150" width="260" height="270"/><rect x="380" y="90" width="240" height="200"/><rect x="680" y="180" width="250" height="260"/>' +
    '</g>' +
    '<g fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="10 7" stroke-opacity=".7"><rect x="130" y="190" width="150" height="120"/><rect x="430" y="120" width="140" height="100"/><rect x="740" y="230" width="140" height="120"/></g>' +
    '<g fill="currentColor" fill-opacity=".28"><rect x="300" y="350" width="34" height="34"/><rect x="580" y="240" width="28" height="28"/><rect x="700" y="380" width="40" height="30"/><rect x="190" y="470" width="30" height="30"/><rect x="780" y="520" width="34" height="34"/><rect x="480" y="470" width="40" height="22"/></g>' +
    '<rect x="400" y="860" width="200" height="100" fill="currentColor" fill-opacity=".14" stroke="currentColor" stroke-width="3" stroke-dasharray="16 8"/>' +
    '<text class="tt-petit" x="500" y="918" text-anchor="middle">APPARITION</text>' +
    '<text class="tt-site-lettre" x="220" y="300" text-anchor="middle">A</text><text class="tt-site-lettre" x="500" y="205" text-anchor="middle">B</text><text class="tt-site-lettre" x="805" y="330" text-anchor="middle">C</text>' +
    '<text class="tt-petit" x="220" y="140" text-anchor="middle">SITE A</text><text class="tt-petit" x="500" y="80" text-anchor="middle">SITE B</text><text class="tt-petit" x="805" y="170" text-anchor="middle">SITE C</text>' +
    '<text class="tt-petit" x="500" y="730" text-anchor="middle" opacity=".5">MILIEU</text>' +
    '<g stroke="currentColor" stroke-opacity=".5" stroke-width="3">' + Array.from({ length: 19 }, (_, k) => {
      const v = 50 + k * 50;
      return '<line x1="' + v + '" y1="0" x2="' + v + '" y2="' + (k % 2 ? 12 : 24) + '"/><line x1="' + v + '" y1="1000" x2="' + v + '" y2="' + (k % 2 ? 988 : 976) + '"/>';
    }).join('') + '</g>' +
  '</svg>',
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
    scene.className = 'tt-scene';
    scene.dataset.mode = 'ensemble';
    if (statique) scene.dataset.statique = '1';
    const angleRadar = p => ((Math.atan2(p.x - 50, -(p.y - 50)) * 180 / Math.PI) + 360) % 360;
    const idDegrade = 'tt-or-' + Math.random().toString(36).slice(2, 8);
    const liens = this.liaisons.map(([a, b]) => {
      const p = joueurs[a].poste, q = joueurs[b].poste;
      return '<line x1="' + p.x * 10 + '" y1="' + p.y * 10 + '" x2="' + q.x * 10 + '" y2="' + q.y * 10 + '"/>' +
        '<circle class="tt-paquet" r="6" cx="' + p.x * 10 + '" cy="' + p.y * 10 + '" style="--tt-dx:' + (q.x - p.x) * 10 + 'px;--tt-dy:' + (q.y - p.y) * 10 + 'px;animation-delay:' + (-a * 0.7 - b * 0.3).toFixed(1) + 's"/>';
    }).join('');
    const balises = joueurs.map((j, i) =>
      '<div class="tt-balise" data-i="' + i + '" style="left:' + j.poste.x + '%;top:' + j.poste.y + '%;--tt-a:' + (angleRadar(j.poste) / 360 - 1).toFixed(3) + '">' +
        '<span class="tt-sol"><i class="tt-anneau"></i><i class="tt-anneau"></i><i class="tt-ping"></i><i class="tt-onde"></i><i class="tt-coeur"></i></span>' +
        '<div class="tt-debout"><span class="tt-faisceau"></span>' +
          '<button type="button" class="tt-cible" style="animation-delay:' + (0.25 + i * 0.12).toFixed(2) + 's" aria-label="' + j.pseudo + ', ' + j.role + ' : afficher le joueur">' +
            '<span class="tt-bulle"><span>' + j.role + '</span><span>Agent <b>' + j.agent + '</b></span><span>ACS <b>' + j.acs + '</b> · K/D <b>' + j.kd.toFixed(2) + '</b></span></span>' +
            '<span class="tt-num">' + j.numero + '</span><span class="tt-nom">' + j.pseudo + '</span></button>' +
        '</div>' +
      '</div>').join('');
    const pastilles = [['acs', 'ACS'], ['kd', 'K/D'], ['hs', 'HS %'], ['role', 'Rôle']].map(([cle, nom], k) => {
      const angle = 20 + k * 90;
      return '<div class="tt-bras" style="--tt-angle:' + angle + 'deg"><div class="tt-pos"><div class="tt-contre"><div class="tt-redresse">' +
        '<div class="tt-pastille' + (cle === 'role' ? ' tt-pastille--texte' : '') + '" data-stat="' + cle + '" style="--tt-phase:' + (-angle / 360).toFixed(3) + '"><span>' + nom + '</span><b>0</b></div>' +
        '</div></div></div></div>';
    }).join('');
    scene.innerHTML =
      '<div class="tt-plateau">' +
        '<div class="tt-vue"><div class="tt-table">' +
          '<div class="tt-verre"></div><div class="tt-grille"></div><div class="tt-radar"></div>' + this.carteSvg +
          '<svg class="tt-liens" viewBox="0 0 1000 1000" aria-hidden="true"><defs><linearGradient id="' + idDegrade + '" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="160" y2="120" spreadMethod="reflect">' +
            '<stop offset="0" style="stop-color:var(--metal-sombre)"/><stop offset=".5" style="stop-color:var(--metal-reflet)"/><stop offset="1" style="stop-color:var(--metal-clair)"/></linearGradient></defs>' +
            '<g stroke="url(#' + idDegrade + ')">' + liens + '</g></svg>' +
          '<div class="tt-bord"></div>' +
          balises +
        '</div></div>' +
        '<div class="tt-focus" aria-hidden="true"><div class="tt-flaque"></div><div class="tt-eclat"></div>' +
          '<div class="tt-stats tt-stats--trace"><div class="tt-trace"></div></div>' +
          '<div class="tt-holo"><div class="tt-holo-corps"><div class="tt-holo-tremble"><img class="tt-holo-img" alt="" decoding="async">' +
            '<span class="tt-holo-teinte"></span><span class="tt-holo-lignes"></span></div></div><span class="tt-holo-scan"></span></div>' +
          '<div class="tt-stats tt-stats--pastilles"><div class="tt-ellipse">' + pastilles + '</div></div>' +
        '</div>' +
      '</div>' +
      '<div class="tt-titre"><p class="tt-etiquette">Briefing tactique</p><p class="tt-carte-nom">Carte · Oasis</p><p class="tt-indice">Survolez une balise · cliquez pour zoomer</p></div>' +
      '<div class="tt-fiche" aria-live="polite"><p class="tt-fiche-num"></p><h2 class="tt-fiche-pseudo"></h2><p class="tt-fiche-role"><i></i><span></span></p>' +
        '<p class="tt-fiche-agent">Agent favori <b></b></p></div>' +
      '<button type="button" class="tt-retour" tabindex="-1">Vue d\'ensemble <kbd>Échap</kbd></button>';
    conteneur.appendChild(scene);
    const $ = s => scene.querySelector(s);
    const elBalises = [...scene.querySelectorAll('.tt-balise')];
    const cibles = [...scene.querySelectorAll('.tt-cible')];
    const focus = $('.tt-focus'), corps = $('.tt-holo-corps'), tremble = $('.tt-holo-tremble'), imageHolo = $('.tt-holo-img');
    const scan = $('.tt-holo-scan'), eclat = $('.tt-eclat'), statsPastilles = $('.tt-stats--pastilles'), statsTrace = $('.tt-stats--trace');
    const fiche = $('.tt-fiche'), retour = $('.tt-retour');
    const valeurs = {};
    scene.querySelectorAll('.tt-pastille').forEach(p => { valeurs[p.dataset.stat] = p.querySelector('b'); });
    joueurs.forEach(j => { new Image().src = j.agentImage; });
    const minuteries = new Set();
    const plusTard = (f, ms) => { const id = setTimeout(() => { minuteries.delete(id); f(); }, ms); minuteries.add(id); return id; };
    const boucles = new Map();
    const arreterBoucle = el => { cancelAnimationFrame(boucles.get(el)); boucles.delete(el); };
    const animations = new Set();
    const animer = (el, images, reglage) => { const a = el.animate(images, reglage); animations.add(a); a.onfinish = a.oncancel = () => animations.delete(a); return a; };
    let mode = 'ensemble', actif = -1, jeton = 0;
    let geo = { W: 0, H: 0, etroit: false };
    function ajuster() {
      const W = scene.clientWidth || 390, H = scene.clientHeight || 420, etroit = W < 760;
      geo = { W, H, etroit };
      scene.dataset.format = etroit ? 'etroit' : 'large';
      const cote = r.tableTaille * (etroit ? Math.min(W * 0.74, H * 0.6) : Math.min(W * 0.66, H * 1.15, 1100));
      const holoH = r.holoTaille * (etroit ? Math.min(H * 0.48, W * 0.95) : H * 0.66);
      const s = scene.style;
      s.setProperty('--tt-cote', cote.toFixed(1) + 'px');
      s.setProperty('--tt-persp', (cote * (etroit ? 3 : 2.1)).toFixed(0) + 'px');
      s.setProperty('--tt-holo-h', holoH.toFixed(1) + 'px');
      s.setProperty('--tt-orbite-r', Math.max(60, Math.min(holoH * 0.62, W / 2 - (etroit ? 52 : 90))).toFixed(1) + 'px');
      placerCamera();
    }
    function placerCamera() {
      const inclinaison = geo.etroit ? r.inclinaison * 0.75 : r.inclinaison;
      const s = scene.style;
      if (mode === 'zoom') {
        const p = joueurs[actif].poste;
        s.setProperty('--tt-rx', (inclinaison + 4) + 'deg');
        s.setProperty('--tt-rz', ((p.x < 50 ? 1 : -1) * r.rotationCamera) + 'deg');
        s.setProperty('--tt-k', r.zoom);
        s.setProperty('--tt-tx', (50 - p.x) + '%');
        s.setProperty('--tt-ty', (50 - p.y) + '%');
        s.setProperty('--tt-decal', (geo.H * (geo.etroit ? 0.18 : 0.22)).toFixed(0) + 'px');
      } else {
        s.setProperty('--tt-rx', inclinaison + 'deg');
        s.setProperty('--tt-rz', '0deg');
        s.setProperty('--tt-k', 1);
        s.setProperty('--tt-tx', '0%');
        s.setProperty('--tt-ty', '0%');
        s.setProperty('--tt-decal', (geo.H * (geo.etroit ? 0 : 0.04)).toFixed(0) + 'px');
      }
    }
    function appliquerReglages() {
      const s = scene.style;
      s.setProperty('--tt-holo', r.holoCouleur);
      s.setProperty('--tt-force', r.holoTremblement);
      s.setProperty('--tt-lignes', r.holoLignes);
      s.setProperty('--tt-grille', r.quadrillage);
      s.setProperty('--tt-radar', r.radarTour + 's');
      s.setProperty('--tt-radar-force', r.radarIntensite);
      s.setProperty('--tt-pulse', r.pulsation + 's');
      s.setProperty('--tt-liaisons', r.liaisons);
      s.setProperty('--tt-bascule', r.bascule + 's');
      s.setProperty('--tt-orbite', r.orbiteTour + 's');
      scene.dataset.pings = r.pings ? 'oui' : 'non';
      ajuster();
    }
    function compter(el, a, decimales) {
      arreterBoucle(el);
      if (statique) { el.textContent = a.toFixed(decimales); return; }
      const duree = r.comptage * 1000;
      let debut = 0;
      const pas = t => {
        if (!debut) debut = t;
        const k = Math.min(1, (t - debut) / duree), e = 1 - Math.pow(1 - k, 3);
        el.textContent = (a * e).toFixed(decimales);
        if (k < 1) boucles.set(el, requestAnimationFrame(pas)); else boucles.delete(el);
      };
      boucles.set(el, requestAnimationFrame(pas));
    }
    function eteindreHolo() {
      focus.classList.remove('tt-visible');
      fiche.classList.remove('tt-visible');
      animations.forEach(a => a.cancel());
      boucles.forEach(id => cancelAnimationFrame(id));
      boucles.clear();
    }
    function allumerHolo(j) {
      imageHolo.src = j.agentImage;
      corps.style.setProperty('--tt-masque', 'url("' + j.agentImage + '")');
      $('.tt-fiche-num').textContent = j.numero;
      $('.tt-fiche-pseudo').textContent = j.pseudo;
      $('.tt-fiche-role span').textContent = j.role;
      $('.tt-fiche-agent b').textContent = j.agent;
      valeurs.role.textContent = j.role;
      focus.classList.add('tt-visible');
      fiche.classList.add('tt-visible');
      compter(valeurs.acs, j.acs, 0);
      compter(valeurs.kd, j.kd, 2);
      compter(valeurs.hs, j.hs, 0);
      if (statique) return;
      const h = parseFloat(scene.style.getPropertyValue('--tt-holo-h')) || 400;
      tremble.classList.remove('tt-allume'); void tremble.offsetWidth; tremble.classList.add('tt-allume');
      animer(corps, [{ transform: 'scaleY(.01)', opacity: 0 }, { transform: 'scale(.94, .4)', opacity: .9, offset: .25 }, { transform: 'scale(1.03, 1.06)', opacity: 1, offset: .7 }, { transform: 'none', opacity: .92 }],
        { duration: 750, easing: 'cubic-bezier(.2,.8,.3,1)' });
      animer(scan, [{ transform: 'translateY(0)', opacity: 1 }, { transform: 'translateY(' + (-h * 0.9).toFixed(0) + 'px)', opacity: 1, offset: .85 }, { transform: 'translateY(' + (-h * 0.9).toFixed(0) + 'px)', opacity: 0 }],
        { duration: 750, easing: 'cubic-bezier(.3,.6,.4,1)' });
      animer(eclat, [{ transform: 'scale(.2)', opacity: 1 }, { transform: 'scale(1.6)', opacity: .9, offset: .3 }, { transform: 'scale(1)', opacity: 1 }], { duration: 700, easing: 'ease-out' });
      for (const el of [statsPastilles, statsTrace]) {
        animer(el, [{ transform: 'scale(.3)', opacity: 0 }, { transform: 'scale(1.06)', opacity: 1, offset: .7 }, { transform: 'none', opacity: 1 }],
          { duration: 650, delay: 300, easing: 'cubic-bezier(.2,.8,.3,1)', fill: 'backwards' });
      }
    }
    function onde(i) {
      const o = elBalises[i].querySelector('.tt-onde');
      animer(o, [{ transform: 'scale(.4)', opacity: 1 }, { transform: 'scale(7)', opacity: 0 }], { duration: 900, easing: 'cubic-bezier(.1,.6,.3,1)' });
      animer(o, [{ transform: 'scale(.4)', opacity: .7 }, { transform: 'scale(4.5)', opacity: 0 }], { duration: 900, delay: 160, easing: 'cubic-bezier(.1,.6,.3,1)', fill: 'backwards' });
    }
    function choisir(i) {
      if (mode === 'zoom' && actif === i) return;
      const n = ++jeton;
      eteindreHolo();
      mode = 'zoom';
      actif = i;
      scene.dataset.mode = 'zoom';
      elBalises.forEach((b, k) => b.classList.toggle('tt-active', k === i));
      retour.tabIndex = 0;
      placerCamera();
      if (statique) { allumerHolo(joueurs[i]); return; }
      plusTard(() => {
        if (n !== jeton) return;
        if (r.onde) onde(i);
        allumerHolo(joueurs[i]);
      }, r.bascule * 1000 * 0.72);
    }
    function vueEnsemble() {
      if (mode !== 'zoom') return;
      ++jeton;
      eteindreHolo();
      mode = 'ensemble';
      actif = -1;
      scene.dataset.mode = 'ensemble';
      elBalises.forEach(b => b.classList.remove('tt-active'));
      retour.tabIndex = -1;
      placerCamera();
    }
    cibles.forEach((c, i) => c.addEventListener('click', e => { e.stopPropagation(); choisir(i); }));
    retour.addEventListener('click', e => { e.stopPropagation(); vueEnsemble(); });
    scene.addEventListener('click', e => { if (!e.target.closest('button')) vueEnsemble(); });
    const toucheEchap = e => { if (e.key === 'Escape' && mode === 'zoom') vueEnsemble(); };
    document.addEventListener('keydown', toucheEchap);
    const observateurTaille = new ResizeObserver(() => ajuster());
    observateurTaille.observe(scene);
    appliquerReglages();
    return {
      mettreAJour(nouveaux) {
        r = { ...nouveaux };
        appliquerReglages();
      },
      detruire() {
        ++jeton;
        minuteries.forEach(clearTimeout);
        boucles.forEach(id => cancelAnimationFrame(id));
        animations.forEach(a => a.cancel());
        observateurTaille.disconnect();
        document.removeEventListener('keydown', toucheEchap);
        scene.remove();
      }
    };
  }
};
enregistrerEffet(EffetTableTactique);
