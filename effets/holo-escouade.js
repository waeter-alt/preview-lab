const EffetHoloEscouade = {
  id: 'holo-escouade',
  nom: 'Holo · Escouade',
  description: 'Toute l\'équipe en hologrammes sur cinq émetteurs : survolez un joueur pour l\'allumer pleinement (les autres baissent). Sans survol, la mise en avant passe d\'un joueur à l\'autre toute seule.',
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
    { categorie: 'Hologramme', id: 'couleur', libelle: 'Hologramme · couleur', type: 'couleur', defaut: '#8FB0CC' },
    { categorie: 'Hologramme', id: 'obscurite', libelle: 'Hologramme · assombrissement de la scène (0 = aucun)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.85 },
    { categorie: 'Hologramme', id: 'tremblement', libelle: 'Hologramme · tremblement (0 = stable)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.5 },
    { categorie: 'Hologramme', id: 'lignes', libelle: 'Hologramme · lignes de balayage (0 = aucune)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.55 },
    { categorie: 'Équipe', id: 'tailleAgents', libelle: 'Équipe · taille des agents (part de la hauteur de l\'écran)', type: 'nombre', min: 0.3, max: 0.9, pas: 0.02, defaut: 0.66 },
    { categorie: 'Mise en avant', id: 'attenuation', libelle: 'Mise en avant · luminosité des autres joueurs (1 = aucune baisse)', type: 'nombre', min: 0.1, max: 1, pas: 0.05, defaut: 0.35 },
    { categorie: 'Mise en avant', id: 'grossissement', libelle: 'Mise en avant · grossissement du joueur mis en avant', type: 'nombre', min: 1, max: 1.3, pas: 0.01, defaut: 1.08 },
    { categorie: 'Mise en avant', id: 'auto', libelle: 'Mise en avant · automatique sans survol', type: 'interrupteur', defaut: true },
    { categorie: 'Mise en avant', id: 'autoDelai', libelle: 'Mise en avant · temps par joueur en automatique (s)', type: 'nombre', min: 1, max: 8, pas: 0.25, defaut: 2.5 }
  ],
  css: `
.hes-scene { position: absolute; inset: 0; overflow: hidden; container-type: size; color: var(--holo); font-family: system-ui, sans-serif;
  --holo-doux: color-mix(in srgb, var(--holo) 45%, transparent); --holo-pale: color-mix(in srgb, var(--holo) 18%, transparent);
  --agent-h: min(calc(var(--taille) * 100cqh), 36cqw); }
.hes-nuit { position: absolute; inset: 0; background: var(--couleur-nuit); opacity: var(--obscurite, .85); }
.hes-rang { position: absolute; left: 0; right: 0; bottom: 6cqh; display: flex; justify-content: center; align-items: flex-end; gap: 1cqw; }
.hes-joueur { position: relative; width: 17cqw; height: calc(var(--agent-h) + 90px); cursor: pointer; outline: none;
  opacity: 1; transition: opacity .35s ease-out; -webkit-tap-highlight-color: transparent; }
.hes-scene[data-avant] .hes-joueur:not(.avant) { opacity: var(--attenuation); }
.hes-corps { position: absolute; inset: 0; transform-origin: 50% 100%; transition: transform .45s cubic-bezier(.3, 1.4, .5, 1); }
.hes-joueur.avant .hes-corps { transform: scale(var(--grossi)); }
.hes-agent { position: absolute; left: 50%; bottom: 0; width: var(--agent-h); height: var(--agent-h); transform: translateX(-50%); mix-blend-mode: screen;
  animation: hes-allumage .6s linear both; animation-delay: calc(.2s + var(--k) * .15s); }
.hes-tremble { position: absolute; inset: 0; isolation: isolate; animation: hes-tremble 2.3s steps(1) infinite; animation-delay: calc(var(--k) * -.7s); }
.hes-tremble img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; filter: grayscale(1) contrast(1.25) brightness(1.15); }
.hes-teinte, .hes-lignes { position: absolute; inset: 0; -webkit-mask: var(--img) center / contain no-repeat; mask: var(--img) center / contain no-repeat; }
.hes-teinte { background: var(--holo); mix-blend-mode: color; }
.hes-lignes { background: repeating-linear-gradient(0deg, var(--couleur-nuit) 0 2px, transparent 2px 5px); opacity: var(--lignes); }
.hes-faisceau { position: absolute; left: 50%; bottom: 0; width: calc(var(--agent-h) * .34); height: calc(var(--agent-h) * .3); transform: translateX(-50%);
  clip-path: polygon(50% 100%, 0 0, 100% 0); mix-blend-mode: screen; background: linear-gradient(0deg, color-mix(in srgb, var(--holo) 65%, transparent), transparent);
  opacity: .5; transition: opacity .35s; }
.hes-joueur.avant .hes-faisceau { opacity: 1; }
.hes-socle { position: absolute; left: 50%; bottom: -5px; width: calc(var(--agent-h) * .3); height: 10px; transform: translateX(-50%); border-radius: 50%;
  background: radial-gradient(ellipse at center, var(--holo) 0%, var(--holo-doux) 45%, transparent 72%); }
.hes-etiquette { position: absolute; left: -20%; right: -20%; top: 0; display: grid; justify-items: center; gap: 5px; text-align: center; text-shadow: 0 0 10px var(--holo-doux);
  animation: hes-allumage .6s linear both; animation-delay: calc(.5s + var(--k) * .15s); }
.hes-icone { width: 26px; height: 26px; background: var(--holo); -webkit-mask: var(--icone) center / contain no-repeat; mask: var(--icone) center / contain no-repeat; }
.hes-pseudo { margin: 0; font: 800 clamp(18px, 2.6cqw, 34px)/.9 var(--police-titre, "Arial Narrow", sans-serif); text-transform: uppercase; letter-spacing: .04em; }
.hes-agent-nom { font: 600 10px/1 system-ui, sans-serif; letter-spacing: .22em; text-transform: uppercase; opacity: .7; }
@keyframes hes-allumage { 0% { opacity: 0; } 12% { opacity: .85; } 20% { opacity: .05; } 34% { opacity: .9; } 42% { opacity: .2; } 56% { opacity: .9; } 66% { opacity: .55; } 76%, 100% { opacity: .95; } }
@keyframes hes-tremble {
  0%, 9%, 40%, 69%, 89% { transform: translate3d(0, 0, 0); opacity: 1; }
  7% { transform: translate3d(calc(var(--force) * 3px), 0, 0); opacity: calc(1 - var(--force) * .25); }
  38% { transform: translate3d(calc(var(--force) * -2px), 0, 0) skewX(calc(var(--force) * 2deg)); opacity: calc(1 - var(--force) * .4); }
  66% { transform: translate3d(calc(var(--force) * 1.5px), calc(var(--force) * -1px), 0); opacity: calc(1 - var(--force) * .15); }
  88% { transform: translate3d(calc(var(--force) * -4px), 0, 0); opacity: calc(1 - var(--force) * .5); } }
@container (max-width: 700px) {
  .hes-rang { --agent-h: min(calc(var(--taille) * 50cqh), 62cqw); }
  .hes-rang { top: 16px; bottom: 16px; flex-wrap: wrap; align-content: space-evenly; row-gap: 12px; column-gap: 0; }
  .hes-joueur { width: 32cqw; height: calc(var(--agent-h) + 70px); }
  .hes-icone { width: 20px; height: 20px; }
  .hes-agent-nom { display: none; }
}
.hes-scene[data-calme] * { animation: none !important; transition: none !important; }`,
  monter(conteneur, reglages, options) {
    if (!document.getElementById('css-' + this.id)) {
      const style = document.createElement('style');
      style.id = 'css-' + this.id;
      style.textContent = this.css;
      document.head.appendChild(style);
    }
    let r = { ...reglages };
    const base = this.base;
    const calme = options.reduireAnimations;
    const url = u => 'url("' + u + '")';
    const scene = document.createElement('div');
    scene.className = 'hes-scene';
    if (calme) scene.dataset.calme = '1';
    scene.innerHTML = '<span class="hes-nuit"></span><div class="hes-rang">' + this.joueurs.map((j, k) => {
      const image = base + 'agents-detoures/' + j.dossier + '-full.webp';
      return '<div class="hes-joueur" style="--k:' + k + '" tabindex="0" role="button" aria-label="' + j.pseudo + ', ' + j.role + ', agent favori ' + j.agent + '"><div class="hes-corps">' +
        '<div class="hes-etiquette"><span class="hes-icone" style=\'--icone:' + url(base + 'roles/' + j.icone + '.png') + '\'></span><p class="hes-pseudo">' + j.pseudo + '</p><span class="hes-agent-nom">' + j.agent + '</span></div>' +
        '<span class="hes-faisceau"></span><span class="hes-socle"></span>' +
        '<div class="hes-agent" style=\'--img:' + url(image) + '\' aria-hidden="true"><div class="hes-tremble"><img src="' + image + '" alt="" decoding="async"><span class="hes-teinte"></span><span class="hes-lignes"></span></div></div>' +
      '</div></div>';
    }).join('') + '</div>';
    conteneur.appendChild(scene);
    const joueurs = [...scene.querySelectorAll('.hes-joueur')];
    let survole = -1, tour = -1, minuterie = 0;
    function mettreEnAvant() {
      const i = survole >= 0 ? survole : (r.auto ? tour : -1);
      joueurs.forEach((el, k) => el.classList.toggle('avant', k === i));
      scene.toggleAttribute('data-avant', i >= 0);
    }
    function programmer() {
      clearTimeout(minuterie);
      if (!r.auto || survole >= 0) return;
      minuterie = setTimeout(() => { tour = (tour + 1) % joueurs.length; mettreEnAvant(); programmer(); }, tour < 0 ? 1400 : r.autoDelai * 1000);
    }
    joueurs.forEach((el, k) => {
      const entrer = () => { survole = k; mettreEnAvant(); programmer(); };
      const sortir = () => { if (survole === k) { survole = -1; tour = k; mettreEnAvant(); programmer(); } };
      el.addEventListener('pointerenter', entrer);
      el.addEventListener('pointerleave', sortir);
      el.addEventListener('focus', entrer);
      el.addEventListener('blur', sortir);
    });
    function appliquer() {
      const v = (nom, valeur) => scene.style.setProperty(nom, String(valeur));
      v('--holo', r.couleur);
      v('--obscurite', r.obscurite);
      v('--force', r.tremblement);
      v('--lignes', r.lignes);
      v('--taille', r.tailleAgents);
      v('--attenuation', r.attenuation);
      v('--grossi', r.grossissement);
      mettreEnAvant();
      programmer();
    }
    appliquer();
    return {
      mettreAJour(nouveaux) { r = { ...nouveaux }; appliquer(); },
      detruire() { clearTimeout(minuterie); scene.remove(); }
    };
  }
};
enregistrerEffet(EffetHoloEscouade);
