const HTML_SPLASH_VA = '<span class="va-nom"></span><div class="va-bas"><span class="va-ligne"></span><div class="va-invite"><span class="va-souris" aria-hidden="true"><i class="va-lueur"></i><i class="va-onde"></i><i class="va-onde" style="animation-delay:calc(var(--cycle,2.4s)*.08)"></i><i class="va-onde" style="animation-delay:calc(var(--cycle,2.4s)*.16)"></i><svg viewBox="0 0 48 72"><rect class="va-coque" x="3" y="3" width="42" height="66" rx="21"/><path class="va-bouton" d="M24 3A21 21 0 0 0 3 24V30H24Z"/><path class="va-trait" d="M3 30H45M24 3V30"/><rect class="va-molette" x="21" y="11" width="6" height="11" rx="3"/></svg><i class="va-etincelle" style="--a:0deg;--k:1"></i><i class="va-etincelle" style="--a:26deg;--k:0.75"></i><i class="va-etincelle" style="--a:51deg;--k:1.2"></i><i class="va-etincelle" style="--a:77deg;--k:0.9"></i><i class="va-etincelle" style="--a:103deg;--k:1.1"></i><i class="va-etincelle" style="--a:129deg;--k:0.8"></i><i class="va-etincelle" style="--a:154deg;--k:1.15"></i><i class="va-etincelle" style="--a:180deg;--k:0.95"></i><i class="va-etincelle" style="--a:206deg;--k:1.05"></i><i class="va-etincelle" style="--a:231deg;--k:0.8"></i><i class="va-etincelle" style="--a:257deg;--k:1.2"></i><i class="va-etincelle" style="--a:283deg;--k:0.85"></i><i class="va-etincelle" style="--a:309deg;--k:1.1"></i><i class="va-etincelle" style="--a:334deg;--k:0.9"></i></span><span class="va-clic"></span></div></div>';
const EffetVoileAccueil = {
  id: 'voile-accueil',
  nom: 'Splash art',
  description: 'Le splash art du lancement du lab : un calque noir pas tout à fait opaque, le nom de l\'outil en grand, un message et une souris qui clique pour inviter à cliquer n\'importe où. Réglez l\'opacité, la police, les tailles, le message, la souris (taille, vitesse, intensité du clic). Un clic le ferme ; « Rejouer le splash art » le refait apparaître. Le choix du nom permet de comparer les pistes de nom.',
  variables: ['--couleur-texte', '--metal-clair', '--metal-reflet', '--couleur-surface', '--couleur-nuit', '--police-identite', '--police-identite-texte'],
  parametres: [
    { categorie: 'Voile', id: 'opacite', libelle: 'Voile · opacité (%)', type: 'nombre', min: 0, max: 100, pas: 1, defaut: 93 },
    { categorie: 'Voile', id: 'teinte', libelle: 'Voile · teinte', type: 'choix', defaut: 'nuit',
      options: [{ valeur: 'noir', libelle: 'Noir franc' }, { valeur: 'nuit', libelle: 'Nuit du thème' }] },
    { categorie: 'Voile', id: 'fondu', libelle: 'Voile · durée du fondu de fermeture (s)', type: 'nombre', min: 0, max: 1.5, pas: 0.05, defaut: 0.95 },
    { categorie: 'Nom', id: 'nom', libelle: 'Nom · texte affiché', type: 'choix', defaut: 'Preview',
      options: [{ valeur: 'Preview', libelle: 'Preview (retenu)' }, { valeur: 'AniMotion', libelle: 'AniMotion (ancien nom)' }, { valeur: 'Idiome', libelle: 'Idiome' }, { valeur: 'Trame', libelle: 'Trame' }, { valeur: 'Épure', libelle: 'Épure' }, { valeur: 'Lexique', libelle: 'Lexique' }] },
    { categorie: 'Nom', id: 'police', libelle: 'Nom · police', type: 'choix', defaut: 'instrument',
      options: [{ valeur: 'instrument', libelle: 'Instrument Serif (retenue : serif élégant, étroit)' }, { valeur: 'big', libelle: 'Big Shoulders (condensée, celle du site)' }] },
    { categorie: 'Nom', id: 'style', libelle: 'Nom · composition', type: 'choix', defaut: 'duo',
      options: [{ valeur: 'duo', libelle: 'Début droit, fin en italique (Pre + view)' }, { valeur: 'droit', libelle: 'Tout droit' }, { valeur: 'italique', libelle: 'Tout en italique' }] },
    { categorie: 'Nom', id: 'tailleNom', libelle: 'Nom · taille (% de la largeur d\'écran)', type: 'nombre', min: 4, max: 40, pas: 0.5, defaut: 40 },
    { categorie: 'Nom', id: 'tailleMax', libelle: 'Nom · taille maximale (px)', type: 'nombre', min: 40, max: 500, pas: 2, defaut: 362 },
    { categorie: 'Nom', id: 'espacementNom', libelle: 'Nom · espacement des lettres (em)', type: 'nombre', min: -0.1, max: 0.5, pas: 0.01, defaut: -0.01 },
    { categorie: 'Message', id: 'accroche', libelle: 'Message · texte affiché', type: 'choix', defaut: 'dev',
      options: [{ valeur: 'dev', libelle: 'Vous visionnez du contenu en cours de développement' }, { valeur: 'outil', libelle: 'Outil de développement web' }, { valeur: 'aucune', libelle: 'Aucun message' }] },
    { categorie: 'Message', id: 'tailleLigne', libelle: 'Message · taille (% de la largeur d\'écran)', type: 'nombre', min: 0.8, max: 3, pas: 0.1, defaut: 2.4 },
    { categorie: 'Message', id: 'espacementLigne', libelle: 'Message · espacement des lettres (em)', type: 'nombre', min: -0.05, max: 0.4, pas: 0.01, defaut: 0.01 },
    { categorie: 'Message', id: 'ecart', libelle: 'Message · distance sous le nom (px)', type: 'nombre', min: 0, max: 60, pas: 1, defaut: 14 },
    { categorie: 'Souris', id: 'invitation', libelle: 'Souris · montrer l\'invitation à cliquer', type: 'interrupteur', defaut: true },
    { categorie: 'Souris', id: 'tailleIcone', libelle: 'Souris · taille (px)', type: 'nombre', min: 30, max: 180, pas: 2, defaut: 48 },
    { categorie: 'Souris', id: 'cycle', libelle: 'Souris · durée d\'un clic complet (s, plus petit = plus rapide)', type: 'nombre', min: 0.8, max: 4, pas: 0.1, defaut: 2.4 },
    { categorie: 'Souris', id: 'intensite', libelle: 'Souris · intensité du clic (ondes, lueur, étincelles, %)', type: 'nombre', min: 0, max: 100, pas: 5, defaut: 10 },
    { categorie: 'Fausse page', id: 'pageDerriere', libelle: 'Montrer une fausse page derrière', type: 'interrupteur', defaut: true }
  ],
  css: `
.va-scene { position: absolute; inset: 0; overflow: hidden; }
.va-page { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px; padding: 24px; text-align: center; color: var(--couleur-texte); }
.va-page[hidden] { display: none; }
.va-nav { position: absolute; top: 0; left: 0; right: 0; display: flex; gap: 22px; justify-content: center; padding: 18px; }
.va-nav i { width: 70px; height: 8px; border-radius: 4px; background: color-mix(in srgb, var(--couleur-texte) 28%, transparent); }
.va-titre { margin: 0; font: 800 clamp(30px, 7vw, 84px)/1 var(--police-titre, system-ui, sans-serif); letter-spacing: .06em; text-transform: uppercase; }
.va-texte { margin: 0; max-width: 46ch; color: color-mix(in srgb, var(--couleur-texte) 65%, transparent); }
.va-bouton { padding: 10px 22px; border-radius: 999px; font: 700 13px/1 system-ui, sans-serif; color: var(--couleur-surface);
  background: linear-gradient(135deg, var(--metal-sombre), var(--metal-clair) 45%, var(--metal-reflet) 55%, var(--metal-clair)); }
.va-commandes { position: absolute; right: 18px; bottom: 18px; z-index: 5; }
.va-commandes button { padding: 8px 16px; border: 1px solid color-mix(in srgb, var(--couleur-texte) 30%, transparent); border-radius: 999px; cursor: pointer;
  font: 600 12px/1 system-ui, sans-serif; color: var(--couleur-texte); background: color-mix(in srgb, var(--couleur-surface) 80%, transparent); }
.va-voile {
  position: absolute; inset: 0; z-index: 2; display: grid; grid-template-rows: 1fr auto minmax(max-content, 1fr); justify-items: center;
  padding: clamp(28px, 5vh, 60px) 24px; text-align: center; cursor: pointer; background: color-mix(in srgb, var(--couleur-nuit) 93%, transparent);
  transition: opacity var(--fondu-voile, .95s) ease, transform var(--fondu-voile, .95s) ease;
}
.va-bas { grid-row: 3; align-self: stretch; display: flex; flex-direction: column; align-items: center; justify-content: space-between; gap: 12px; padding-top: var(--ecart-voile, 14px); }
.va-voile.ferme { opacity: 0; transform: scale(1.04); pointer-events: none; }
.va-nom { grid-row: 2; font-family: var(--police-nom, var(--police-identite, Georgia, 'Times New Roman', serif)); font-weight: 400; font-size: min(clamp(56px, 40vw, 362px), 30vw); line-height: 1; letter-spacing: -.01em; color: var(--couleur-texte); }
.va-nom em { font-style: italic; margin-left: .03em; }
.va-ligne { max-width: 90vw; font-family: var(--police-identite-texte, system-ui, sans-serif); font-weight: 400; font-size: clamp(13px, 2.4vw, 24px); line-height: 1.5; letter-spacing: .01em; text-wrap: balance; color: var(--metal-clair); }
@media (max-width: 700px) { .va-ligne { max-width: 28ch; } }
.va-ligne:empty { display: none; }
.va-invite { display: flex; flex-direction: column; align-items: center; gap: 26px; }
.va-souris { position: relative; display: block; width: var(--t, 48px); height: calc(var(--t, 48px) * 1.5); animation: va-souris var(--cycle, 2.4s) ease-in-out infinite; }
.va-souris svg { display: block; width: 100%; height: 100%; overflow: visible; }
.va-coque { fill: color-mix(in srgb, var(--couleur-texte) 7%, transparent); stroke: var(--couleur-texte); stroke-width: 2.2; }
.va-trait { fill: none; stroke: var(--couleur-texte); stroke-width: 2; stroke-linecap: round; opacity: .75; }
.va-molette { fill: var(--couleur-texte); }
.va-bouton { fill: var(--metal-clair); opacity: 0; animation: va-bouton var(--cycle, 2.4s) linear infinite; }
.va-lueur, .va-onde, .va-etincelle { position: absolute; left: 28%; top: 22%; pointer-events: none; opacity: 0; }
.va-lueur { width: calc(var(--t, 48px) * 2.6); height: calc(var(--t, 48px) * 2.6); border-radius: 50%; background: radial-gradient(circle, var(--metal-reflet), transparent 65%); transform: translate(-50%, -50%) scale(.3); animation: va-lueur var(--cycle, 2.4s) ease-out infinite; }
.va-onde { width: calc(var(--t, 48px) * 4.6); height: calc(var(--t, 48px) * 4.6); border-radius: 50%; border: 3px solid var(--metal-clair); transform: translate(-50%, -50%) scale(.1); animation: va-onde var(--cycle, 2.4s) ease-out infinite; }
.va-etincelle { width: 4px; height: calc(var(--t, 48px) * .3); margin-left: -2px; border-radius: 2px; background: var(--metal-reflet); transform-origin: 50% 0; animation: va-etincelle var(--cycle, 2.4s) cubic-bezier(.2, .8, .2, 1) infinite; }
.va-clic { font-family: var(--police-identite-texte, system-ui, sans-serif); font-weight: 500; font-size: 11px; letter-spacing: .24em; text-transform: uppercase; color: color-mix(in srgb, var(--couleur-texte) 62%, transparent); animation: va-respire var(--cycle, 2.4s) ease-in-out infinite; }
@keyframes va-souris { 0%, 32% { transform: translateY(0) scale(1); } 40% { transform: translateY(4px) scale(.92, .9); } 50% { transform: translateY(-5px) scale(1.09, 1.1); } 57% { transform: translateY(1px) scale(.99); } 66%, 100% { transform: translateY(0) scale(1); } }
@keyframes va-bouton { 0%, 38% { opacity: 0; } 40%, 56% { opacity: .95; } 76%, 100% { opacity: 0; } }
@keyframes va-lueur { 0%, 39% { opacity: 0; transform: translate(-50%, -50%) scale(.3); } 44% { opacity: calc(var(--intensite, .1) * .95); } 100% { opacity: 0; transform: translate(-50%, -50%) scale(1.3); } }
@keyframes va-onde { 0%, 39% { opacity: 0; transform: translate(-50%, -50%) scale(.1); } 41% { opacity: calc(var(--intensite, .1) * .9); } 100% { opacity: 0; transform: translate(-50%, -50%) scale(1); } }
@keyframes va-etincelle { 0%, 39% { opacity: 0; transform: rotate(var(--a)) translateY(calc(var(--t, 48px) * .08)) scaleY(.2); } 42% { opacity: var(--intensite, .1); }
  100% { opacity: 0; transform: rotate(var(--a)) translateY(calc(var(--t, 48px) * .95 * var(--k, 1))) scaleY(1); } }
@keyframes va-respire { 0%, 100% { opacity: .55; } 45% { opacity: 1; } }
.va-impact { position: absolute; z-index: 3; width: 24px; height: 24px; margin: -12px 0 0 -12px; border-radius: 50%; border: 2px solid var(--metal-clair); pointer-events: none; animation: va-impact .6s ease-out forwards; }
@keyframes va-impact { from { opacity: 1; transform: scale(.2); } to { opacity: 0; transform: scale(16); } }
.va-voile.calme, .va-voile.calme * { animation: none !important; transition: none !important; }
.va-voile.calme .va-bouton { opacity: .95; }
.va-voile.calme .va-clic { opacity: 1; }`,
  monter(conteneur, reglages, options) {
    if (!document.getElementById('css-' + this.id)) {
      const style = document.createElement('style');
      style.id = 'css-' + this.id;
      style.textContent = this.css;
      document.head.appendChild(style);
    }
    let r = { ...reglages };
    const calme = options.reduireAnimations;
    const textesMessage = { dev: 'Vous visionnez du contenu en cours de développement', outil: 'Outil de développement web', aucune: '' };
    const polices = {
      instrument: { pile: '"Instrument Serif", Georgia, "Times New Roman", serif', graisse: 400 },
      big: { pile: '"Big Shoulders Display", "Arial Narrow", sans-serif', graisse: 700 }
    };
    const coupures = { Preview: 3, AniMotion: 3, Idiome: 2, Trame: 2, 'Épure': 2, Lexique: 3 };
    let minuterie = 0;
    const scene = document.createElement('div');
    scene.className = 'va-scene';
    scene.innerHTML =
      '<div class="va-page" aria-hidden="true"><div class="va-nav"><i></i><i></i><i></i><i></i></div>' +
        '<h2 class="va-titre">Le site de votre client</h2>' +
        '<p class="va-texte">Un exemple de page, pour juger la transparence du voile par-dessus.</p><span class="va-bouton">Découvrir</span></div>' +
      '<div class="va-voile">' + HTML_SPLASH_VA + '</div>' +
      '<div class="va-commandes"><button type="button">Rejouer le splash art</button></div>';
    conteneur.appendChild(scene);
    const page = scene.querySelector('.va-page');
    const voile = scene.querySelector('.va-voile');
    const nom = scene.querySelector('.va-nom');
    const ligne = scene.querySelector('.va-ligne');
    const invite = scene.querySelector('.va-invite');
    scene.querySelector('.va-clic').textContent = 'Cliquez n\'importe où';
    voile.classList.toggle('calme', !!calme);
    function ecrireNom() {
      nom.textContent = '';
      const coupe = r.style === 'duo' ? (coupures[r.nom] || Math.ceil(r.nom.length / 2)) : r.style === 'droit' ? r.nom.length : 0;
      if (coupe > 0) nom.append(document.createTextNode(r.nom.slice(0, coupe)));
      if (coupe < r.nom.length) { const italique = document.createElement('em'); italique.textContent = r.nom.slice(coupe); nom.append(italique); }
    }
    function appliquerReglages() {
      const base = r.teinte === 'nuit' ? 'var(--couleur-nuit)' : '#000';
      voile.style.background = `color-mix(in srgb, ${base} ${r.opacite}%, transparent)`;
      voile.style.setProperty('--ecart-voile', r.ecart + 'px');
      voile.style.setProperty('--fondu-voile', r.fondu + 's');
      voile.style.setProperty('--t', r.tailleIcone + 'px');
      voile.style.setProperty('--cycle', r.cycle + 's');
      voile.style.setProperty('--intensite', String(r.intensite / 100));
      const police = polices[r.police] || polices.instrument;
      nom.style.setProperty('--police-nom', police.pile);
      nom.style.fontWeight = String(police.graisse);
      ecrireNom();
      nom.style.fontSize = `min(clamp(56px, ${r.tailleNom}vw, ${r.tailleMax}px), 30vw)`;
      nom.style.letterSpacing = r.espacementNom + 'em';
      const texte = textesMessage[r.accroche] || '';
      ligne.textContent = texte;
      ligne.style.fontSize = `clamp(13px, ${r.tailleLigne}vw, ${Math.round(r.tailleLigne * 10)}px)`;
      ligne.style.letterSpacing = r.espacementLigne + 'em';
      invite.hidden = !r.invitation;
      page.hidden = !r.pageDerriere;
    }
    function fermer(x, y) {
      if (voile.classList.contains('ferme')) return;
      const onde = document.createElement('i');
      onde.className = 'va-impact';
      onde.style.left = x + 'px'; onde.style.top = y + 'px';
      scene.appendChild(onde);
      voile.classList.add('ferme');
      setTimeout(() => onde.remove(), 650);
    }
    function rejouer() { voile.classList.remove('ferme'); }
    voile.addEventListener('click', e => { const b = scene.getBoundingClientRect(); fermer(e.clientX - b.left, e.clientY - b.top); });
    scene.querySelector('.va-commandes button').addEventListener('click', rejouer);
    appliquerReglages();
    return {
      mettreAJour(nouveaux) {
        r = { ...nouveaux };
        appliquerReglages();
        rejouer();
      },
      rejouer,
      detruire() {
        clearTimeout(minuterie);
        scene.remove();
      }
    };
  }
};
enregistrerEffet(EffetVoileAccueil);
