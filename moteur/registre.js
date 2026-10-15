const EFFETS = [];
const ERREURS_EFFETS = [];
const TYPES_PARAMETRES = ['nombre', 'interrupteur', 'couleur', 'choix', 'listeCouleurs'];
function verifierEffet(effet) {
  const problemes = [];
  if (!effet || typeof effet !== 'object') return ['l\'effet n\'est pas un objet'];
  for (const cle of ['id', 'nom', 'description']) {
    if (typeof effet[cle] !== 'string' || !effet[cle]) problemes.push(`« ${cle} » manquant`);
  }
  if (EFFETS.some(autre => autre.id === effet.id)) problemes.push(`l'identifiant « ${effet.id} » est déjà pris`);
  if (!Array.isArray(effet.variables)) problemes.push('« variables » manquant (liste des variables de couleur utilisées)');
  if (typeof effet.css !== 'string') problemes.push('« css » manquant');
  if (typeof effet.monter !== 'function') problemes.push('« monter » manquant');
  if (!Array.isArray(effet.parametres)) { problemes.push('« parametres » manquant'); return problemes; }
  const dejaVus = new Set();
  for (const p of effet.parametres) {
    const nom = `paramètre « ${p && p.id} »`;
    if (!p || typeof p.id !== 'string' || !p.id) { problemes.push('un paramètre n\'a pas d\'identifiant'); continue; }
    if (dejaVus.has(p.id)) problemes.push(`${nom} : identifiant en double`);
    dejaVus.add(p.id);
    if (typeof p.libelle !== 'string' || !p.libelle) problemes.push(`${nom} : libellé manquant`);
    if (!TYPES_PARAMETRES.includes(p.type)) { problemes.push(`${nom} : type « ${p.type} » inconnu (${TYPES_PARAMETRES.join(', ')})`); continue; }
    if (p.type === 'nombre') {
      if (![p.min, p.max, p.pas, p.defaut].every(Number.isFinite)) problemes.push(`${nom} : min, max, pas et defaut doivent être des nombres`);
      else if (!(p.min < p.max)) problemes.push(`${nom} : min doit être plus petit que max`);
      else if (!(p.pas > 0)) problemes.push(`${nom} : pas doit être supérieur à 0`);
      else if (p.defaut < p.min || p.defaut > p.max) problemes.push(`${nom} : defaut (${p.defaut}) hors de l'intervalle ${p.min} à ${p.max}`);
    } else if (p.type === 'interrupteur') {
      if (typeof p.defaut !== 'boolean') problemes.push(`${nom} : defaut doit être true ou false`);
    } else if (p.type === 'listeCouleurs') {
      if (!Number.isInteger(p.nombre) || p.nombre < 1 || p.nombre > 12) problemes.push(`${nom} : nombre doit être un entier de 1 à 12`);
      else if (!Array.isArray(p.defaut) || p.defaut.length !== p.nombre || !p.defaut.every(c => /^#[0-9a-f]{6}$/i.test(c))) problemes.push(`${nom} : defaut doit être une liste de ${p.nombre} couleurs au format #RRGGBB`);
    } else if (p.type === 'couleur') {
      if (!/^#[0-9a-f]{6}$/i.test(p.defaut)) problemes.push(`${nom} : defaut doit être une couleur au format #RRGGBB`);
    } else if (p.type === 'choix') {
      if (!Array.isArray(p.options) || !p.options.length) problemes.push(`${nom} : options manquantes`);
      else if (!p.options.some(o => o.valeur === p.defaut)) problemes.push(`${nom} : defaut absent de la liste d'options`);
    }
  }
  return problemes;
}
function enregistrerEffet(effet) {
  const problemes = verifierEffet(effet);
  if (problemes.length) {
    ERREURS_EFFETS.push({ id: (effet && effet.id) || '(effet sans identifiant)', problemes });
    return;
  }
  EFFETS.push(effet);
}
window.addEventListener('error', evenement => {
  const cible = evenement.target;
  if (cible && cible.tagName === 'SCRIPT') {
    ERREURS_EFFETS.push({ id: cible.getAttribute('src'), problemes: ['fichier introuvable ou illisible'] });
  } else if (evenement.message) {
    ERREURS_EFFETS.push({ id: evenement.filename ? evenement.filename.split('/').pop() : 'script', problemes: [evenement.message] });
  }
}, true);
