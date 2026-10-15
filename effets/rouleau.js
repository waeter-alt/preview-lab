const EffetRouleau = {
  id: 'rouleau',
  nom: 'Défilement en rouleau',
  description: 'La page défile sur la face intérieure d\'un rouleau : les blocs s\'enroulent de plus en plus en s\'éloignant du centre. Faites défiler la maquette, ou utilisez Lecture.',
  variables: ['--metal-sombre', '--metal-clair', '--metal-reflet', '--couleur-surface', '--couleur-lueur', '--couleur-fond-2', '--couleur-ombre', '--couleur-nuit', '--couleur-texte'],
  parametres: [
    { id: 'rayon', libelle: 'Rayon du rouleau (% de la hauteur d\'écran, plus petit = plus enroulé)', type: 'nombre', min: 60, max: 300, pas: 5, defaut: 75 },
    { id: 'ombre', libelle: 'Assombrissement des bords (0 = aucun)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.6 }
  ],
  css: `
.rouleau-scene { position: absolute; inset: 0; --ombre: .6; --profondeur: 800px; }
.rouleau-defilement { position: absolute; inset: 0; overflow-x: hidden; overflow-y: auto; scrollbar-width: thin;
  perspective: var(--profondeur); perspective-origin: 50% 50%; container-type: inline-size; }
.rouleau-page { position: relative; max-width: 1100px; margin: 0 auto; padding: 18vh 24px 30vh; color: var(--couleur-texte);
  font: 400 13px/1.5 ui-monospace, Consolas, "Courier New", monospace; }
.rouleau-page, .rouleau-grille { transform-style: preserve-3d; }
.rouleau-intro { margin: 0 0 12vh; }
.rouleau-intro p { margin: 0 0 14px; letter-spacing: .14em; text-transform: uppercase; opacity: .75; }
.rouleau-titre { margin: 0; font: 700 clamp(34px, 7vw, 84px)/1 Georgia, "Times New Roman", serif; letter-spacing: .02em;
  background: linear-gradient(180deg, var(--metal-reflet) 0%, var(--metal-clair) 55%, var(--metal-sombre) 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; }
.rouleau-grille { display: grid; grid-template-columns: 1fr; gap: 7vh 5%; max-width: 240px; margin: 0 auto; }
@container (min-width: 560px) { .rouleau-grille { grid-template-columns: 1fr 1fr; max-width: none; } .rouleau-carte:nth-child(even) { margin-top: 16vh; } }
@container (min-width: 880px) {
  .rouleau-grille { grid-template-columns: 1fr 1fr 1fr; }
  .rouleau-carte:nth-child(even) { margin-top: 0; }
  .rouleau-carte:nth-child(3n+2) { margin-top: 14vh; }
}
.rouleau-carte { position: relative; margin: 0; }
.rouleau-intro, .rouleau-carte { will-change: transform; transform-origin: 50% 50%; backface-visibility: hidden; }
.rouleau-visuel { position: relative; aspect-ratio: 4 / 3; display: grid; place-items: center; overflow: hidden; border-radius: 4px;
  border: 1px solid color-mix(in srgb, var(--metal-clair) 35%, transparent); }
.rouleau-carte:nth-child(3n) .rouleau-visuel { aspect-ratio: 3 / 4; }
.rouleau-visuel[data-style="or"] { background: linear-gradient(135deg, var(--metal-sombre), var(--metal-clair) 42%, var(--metal-reflet) 52%, var(--metal-clair) 62%, var(--metal-sombre)); color: var(--couleur-surface); }
.rouleau-visuel[data-style="nuit"] { background: radial-gradient(ellipse at 50% 40%, var(--couleur-lueur), var(--couleur-surface) 60%, var(--couleur-nuit)); }
.rouleau-visuel[data-style="bordeaux"] { background: linear-gradient(160deg, var(--couleur-fond-2), var(--couleur-ombre)); }
.rouleau-visuel strong { font: 700 clamp(30px, 5vw, 64px)/1 Georgia, "Times New Roman", serif; letter-spacing: .2em; padding-left: .2em; }
.rouleau-visuel[data-style="nuit"] strong, .rouleau-visuel[data-style="bordeaux"] strong {
  background: linear-gradient(180deg, var(--metal-reflet), var(--metal-clair) 55%, var(--metal-sombre));
  -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; }
.rouleau-etiquette { position: absolute; top: 8px; right: 8px; padding: 2px 6px; font-size: 10px; letter-spacing: .12em;
  background: var(--metal-clair); color: var(--couleur-surface); }
.rouleau-carte figcaption { display: flex; justify-content: space-between; gap: 12px; margin-top: 8px; font-size: 11px; letter-spacing: .12em; text-transform: uppercase; opacity: .8; }
.rouleau-ombre { position: absolute; inset: 0; pointer-events: none; opacity: var(--ombre);
  background: linear-gradient(180deg, var(--couleur-nuit) 0%, color-mix(in srgb, var(--couleur-nuit) 55%, transparent) 14%,
    color-mix(in srgb, var(--couleur-nuit) 18%, transparent) 30%, transparent 50%, color-mix(in srgb, var(--couleur-nuit) 18%, transparent) 70%,
    color-mix(in srgb, var(--couleur-nuit) 55%, transparent) 86%, var(--couleur-nuit) 100%); }
.rouleau-commandes { position: absolute; left: 50%; bottom: 12px; z-index: 2; transform: translateX(-50%); }
.rouleau-commandes button { padding: 7px 14px; border: 0; border-radius: 999px; cursor: pointer; font: 600 12px/1 system-ui, sans-serif; color: var(--couleur-surface);
  background: linear-gradient(135deg, var(--metal-sombre), var(--metal-clair) 45%, var(--metal-reflet) 55%, var(--metal-clair)); }
.rouleau-scene[data-statique] .rouleau-ombre, .rouleau-scene[data-statique] .rouleau-commandes { display: none; }
.rouleau-scene[data-statique] :is(.rouleau-intro, .rouleau-carte) { transform: none !important; visibility: visible !important; opacity: 1 !important; will-change: auto; }`,
  monter(conteneur, reglages, options) {
    if (!document.getElementById('css-' + this.id)) {
      const style = document.createElement('style');
      style.id = 'css-' + this.id;
      style.textContent = this.css;
      document.head.appendChild(style);
    }
    let r = { ...reglages };
    const statique = options.reduireAnimations;
    const styles = ['or', 'nuit', 'bordeaux'];
    let cartes = '';
    for (let i = 1; i <= 12; i++) {
      const numero = String(i).padStart(2, '0');
      cartes +=
        `<figure class="rouleau-carte"><div class="rouleau-visuel" data-style="${styles[(i - 1) % 3]}">` +
        (i % 3 === 1 ? '<span class="rouleau-etiquette">PROJET</span>' : '') +
        `<strong>${numero}</strong></div><figcaption><span>Projet ${numero}</span><span>2026</span></figcaption></figure>`;
    }
    const scene = document.createElement('div');
    scene.className = 'rouleau-scene';
    if (statique) scene.dataset.statique = '1';
    scene.innerHTML =
      '<div class="rouleau-defilement" tabindex="0" role="region" aria-label="Maquette de page : faites défiler pour voir le rouleau">' +
        '<div class="rouleau-page">' +
          '<header class="rouleau-intro"><p>Maquette · défilement en rouleau</p><h2 class="rouleau-titre">Le site défile<br>dans un rouleau</h2></header>' +
          `<div class="rouleau-grille">${cartes}</div>` +
        '</div>' +
      '</div>' +
      '<div class="rouleau-ombre" aria-hidden="true"></div>' +
      '<div class="rouleau-commandes"><button type="button" data-lecture>Lecture</button></div>';
    conteneur.appendChild(scene);
    const defilement = scene.querySelector('.rouleau-defilement');
    const elementsCartes = [...scene.querySelectorAll('.rouleau-intro, .rouleau-carte')];
    const boutonLecture = scene.querySelector('[data-lecture]');
    let positions = [];
    let idImage = 0, idLecture = 0;
    function mesurer() {
      positions = elementsCartes.map(carte => {
        let haut = 0;
        for (let e = carte; e && e !== defilement; e = e.offsetParent) haut += e.offsetTop;
        return { haut, hauteur: carte.offsetHeight };
      });
    }
    function appliquerReglages() {
      scene.style.setProperty('--ombre', String(r.ombre));
    }
    function dessiner() {
      idImage = 0;
      if (statique) return;
      const hauteurEcran = defilement.clientHeight;
      const centreEcran = defilement.scrollTop + hauteurEcran / 2;
      const rayon = (r.rayon / 100) * hauteurEcran;
      scene.style.setProperty('--profondeur', rayon.toFixed(1) + 'px');
      elementsCartes.forEach((carte, i) => {
        const { haut: hautCarte, hauteur } = positions[i];
        const arc = hautCarte + hauteur / 2 - centreEcran;
        const angle = arc / rayon;
        const distanceBordOeil = rayon * Math.cos(angle) - (hauteur / 2) * Math.sin(Math.abs(angle));
        const angleBordEcran = Math.atan(hauteurEcran / 2 / rayon);
        const horsEcran = (Math.abs(arc) - hauteur / 2) / rayon > angleBordEcran + 0.05;
        if (horsEcran || Math.abs(angle) > Math.PI / 2 || distanceBordOeil < 0.15 * rayon) { carte.style.visibility = 'hidden'; return; }
        carte.style.visibility = '';
        const fondu = Math.min(1, (distanceBordOeil - 0.15 * rayon) / (0.25 * rayon));
        carte.style.opacity = fondu < 1 ? fondu.toFixed(3) : '';
        const decalage = rayon * Math.sin(angle) - arc;
        const rapprochement = rayon * (1 - Math.cos(angle));
        carte.style.transform = `translate3d(0, ${decalage.toFixed(1)}px, ${rapprochement.toFixed(1)}px) rotateX(${(angle * 180 / Math.PI).toFixed(2)}deg)`;
      });
    }
    const demanderDessin = () => { if (!idImage) idImage = requestAnimationFrame(dessiner); };
    function arreterLecture() { cancelAnimationFrame(idLecture); idLecture = 0; boutonLecture.textContent = 'Lecture'; }
    function lire() {
      if (idLecture) { arreterLecture(); return; }
      const max = defilement.scrollHeight - defilement.clientHeight;
      if (defilement.scrollTop >= max - 1) defilement.scrollTop = 0;
      boutonLecture.textContent = 'Pause';
      let precedent = performance.now();
      let position = defilement.scrollTop;
      const pas = maintenant => {
        position = Math.min(max, position + (maintenant - precedent) * 0.12);
        precedent = maintenant;
        defilement.scrollTop = position;
        if (position < max) idLecture = requestAnimationFrame(pas); else arreterLecture();
      };
      idLecture = requestAnimationFrame(pas);
    }
    boutonLecture.addEventListener('click', lire);
    defilement.addEventListener('scroll', demanderDessin, { passive: true });
    defilement.addEventListener('wheel', arreterLecture, { passive: true });
    defilement.addEventListener('touchstart', arreterLecture, { passive: true });
    const observateur = new ResizeObserver(() => { mesurer(); demanderDessin(); });
    observateur.observe(defilement);
    appliquerReglages();
    mesurer();
    dessiner();
    return {
      mettreAJour(nouveaux) {
        r = { ...nouveaux };
        appliquerReglages();
        demanderDessin();
      },
      detruire() {
        arreterLecture();
        cancelAnimationFrame(idImage);
        observateur.disconnect();
        scene.remove();
      }
    };
  }
};
enregistrerEffet(EffetRouleau);
