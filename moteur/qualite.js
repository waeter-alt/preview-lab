const Qualite = (() => {
  const NIVEAUX = ['complet', 'allege', 'minimal'];
  const CLE_MEMOIRE = 'animotion.qualite';
  const DUREE_MEMOIRE = 24 * 3600 * 1000;
  const FENETRE_MS = 2000;
  const CHAUFFE_MS = 1500;
  const MEDIANE_LENTE_MS = 26;
  const PART_LENTES = 0.25;
  const FENETRES_LENTES_REQUISES = 2;
  const IMAGE_ABERRANTE_MS = 250;
  const etat = {
    niveau: 'complet',
    auto: true,
    raison: 'départ',
    demarre: false,
    fenetre: [], cumul: 0, lentesDeSuite: 0, derniereImage: 0, chauffeJusqua: 0,
    dernierFps: null,
    ecouteurs: []
  };
  function lireMemoire() {
    try {
      const m = JSON.parse(localStorage.getItem(CLE_MEMOIRE));
      if (m && NIVEAUX.includes(m.niveau) && Date.now() - m.date < DUREE_MEMOIRE) return m.niveau;
    } catch (e) {   }
    return null;
  }
  function ecrireMemoire(niveau) {
    try { localStorage.setItem(CLE_MEMOIRE, JSON.stringify({ niveau, date: Date.now() })); } catch (e) {   }
  }
  function moteurDeRendu() {
    try {
      const toile = document.createElement('canvas');
      const gl = toile.getContext('webgl') || toile.getContext('experimental-webgl');
      if (!gl) return { nom: 'pas de WebGL', logiciel: true };
      const info = gl.getExtension('WEBGL_debug_renderer_info');
      const nom = info ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)) : 'inconnu';
      return { nom, logiciel: /swiftshader|basic render|llvmpipe|software|softpipe|microsoft basic/i.test(nom) };
    } catch (e) { return { nom: 'illisible', logiciel: false }; }
  }
  function appliquer(niveau, raison) {
    if (niveau === etat.niveau) return;
    etat.niveau = niveau;
    etat.raison = raison;
    document.documentElement.dataset.qualite = niveau;
    etat.chauffeJusqua = performance.now() + CHAUFFE_MS;
    etat.fenetre = []; etat.cumul = 0; etat.lentesDeSuite = 0;
    for (const fonction of etat.ecouteurs) { try { fonction(niveau); } catch (e) { console.error(e); } }
  }
  function descendre(raison) {
    const suivant = NIVEAUX[NIVEAUX.indexOf(etat.niveau) + 1];
    if (!suivant) return;
    appliquer(suivant, raison);
    ecrireMemoire(suivant);
  }
  function traiterImage(delta, maintenant) {
    if (!etat.auto || !(delta > 0) || delta > IMAGE_ABERRANTE_MS || maintenant < etat.chauffeJusqua) return;
    etat.fenetre.push(delta);
    etat.cumul += delta;
    if (etat.cumul < FENETRE_MS) return;
    const tri = [...etat.fenetre].sort((a, b) => a - b);
    const mediane = tri[Math.floor(tri.length / 2)];
    const partLentes = etat.fenetre.filter(d => d > 33.4).length / etat.fenetre.length;
    etat.dernierFps = Math.round(1000 / mediane);
    etat.fenetre = []; etat.cumul = 0;
    if (mediane > MEDIANE_LENTE_MS || partLentes > PART_LENTES) {
      if (++etat.lentesDeSuite >= FENETRES_LENTES_REQUISES) {
        etat.lentesDeSuite = 0;
        descendre(`affichage trop lent (${etat.dernierFps} images/s mesurées)`);
      }
    } else {
      etat.lentesDeSuite = 0;
    }
  }
  function boucle(t) {
    if (!document.hidden && etat.derniereImage) traiterImage(t - etat.derniereImage, t);
    etat.derniereImage = document.hidden ? 0 : t;
    requestAnimationFrame(boucle);
  }
  function demarrer() {
    if (etat.demarre) return;
    etat.demarre = true;
    const moteur = moteurDeRendu();
    etat.moteur = moteur;
    const memorise = lireMemoire();
    const economieDonnees = !!(navigator.connection && navigator.connection.saveData);
    let depart = 'complet', raison = 'machine rapide supposée';
    if (moteur.logiciel) { depart = 'allege'; raison = `rendu logiciel détecté (${moteur.nom})`; }
    else if (economieDonnees) { depart = 'allege'; raison = 'mode économie de données du navigateur'; }
    if (memorise && NIVEAUX.indexOf(memorise) > NIVEAUX.indexOf(depart)) { depart = memorise; raison = 'niveau mémorisé lors d\'une visite récente'; }
    etat.chauffeJusqua = performance.now() + CHAUFFE_MS;
    if (depart !== etat.niveau) appliquer(depart, raison);
    else { etat.raison = raison; document.documentElement.dataset.qualite = etat.niveau; }
    requestAnimationFrame(boucle);
  }
  function choisir(choix) {
    if (choix === 'auto') {
      etat.auto = true;
      etat.fenetre = []; etat.cumul = 0; etat.lentesDeSuite = 0;
      etat.chauffeJusqua = performance.now() + CHAUFFE_MS;
      return;
    }
    if (!NIVEAUX.includes(choix)) return;
    etat.auto = false;
    if (choix === etat.niveau) { etat.raison = 'choisi à la main'; return; }
    appliquer(choix, 'choisi à la main');
  }
  function surChangement(fonction) {
    etat.ecouteurs.push(fonction);
    return () => { etat.ecouteurs = etat.ecouteurs.filter(f => f !== fonction); };
  }
  function rapport() {
    return {
      niveau: etat.niveau,
      mode: etat.auto ? 'auto' : 'manuel',
      raison: etat.raison,
      imagesParSecondeMesurees: etat.dernierFps,
      moteurDeRendu: etat.moteur ? etat.moteur.nom : null,
      renduLogiciel: etat.moteur ? etat.moteur.logiciel : null,
      coeurs: navigator.hardwareConcurrency || null,
      memoireGo: navigator.deviceMemory || null,
      ecran: `${screen.width}x${screen.height} @${window.devicePixelRatio}`,
      reduireAnimationsSysteme: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    };
  }
  return {
    NIVEAUX,
    get niveau() { return etat.niveau; },
    demarrer, choisir, surChangement, rapport,
    _nourrir(deltas) { etat.chauffeJusqua = 0; deltas.forEach(d => traiterImage(d, Infinity)); },
    _reinitialiser() { etat.niveau = 'complet'; etat.auto = true; etat.fenetre = []; etat.cumul = 0; etat.lentesDeSuite = 0; etat.chauffeJusqua = 0; document.documentElement.dataset.qualite = 'complet'; }
  };
})();
