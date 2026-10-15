let CLE_PRESETS = 'animotion.presets.v1';
const presetsUtilisateur = [];
let stockageDisponible = true;
function presetBienForme(p) {
  return !!p && typeof p === 'object'
    && typeof p.nom === 'string' && p.nom.trim() !== '' && p.nom.length <= 60
    && typeof p.effet === 'string' && p.effet !== ''
    && (p.theme === undefined || typeof p.theme === 'string')
    && (p.fond === undefined || typeof p.fond === 'string')
    && !!p.reglages && typeof p.reglages === 'object' && !Array.isArray(p.reglages);
}
function presetNettoye(p) {
  const propre = { nom: p.nom.trim(), effet: p.effet, reglages: { ...p.reglages } };
  if (p.theme !== undefined) propre.theme = p.theme;
  if (p.fond !== undefined) propre.fond = p.fond;
  return propre;
}
function chargerPresetsUtilisateur() {
  presetsUtilisateur.length = 0;
  try {
    const brut = localStorage.getItem(CLE_PRESETS);
    const liste = brut ? JSON.parse(brut) : [];
    if (Array.isArray(liste)) for (const p of liste) if (presetBienForme(p)) presetsUtilisateur.push(presetNettoye(p));
    stockageDisponible = true;
  } catch (erreur) {
    stockageDisponible = false;
  }
}
function lireDatesPresets() {
  try { return JSON.parse(localStorage.getItem(CLE_PRESETS + '.dates')) || {}; } catch (erreur) { return {}; }
}
function ecrireDatesPresets(changements) {
  try { localStorage.setItem(CLE_PRESETS + '.dates', JSON.stringify({ ...lireDatesPresets(), ...changements })); } catch (erreur) {   }
}
function memoriserPresetsUtilisateur() {
  try {
    localStorage.setItem(CLE_PRESETS, JSON.stringify(presetsUtilisateur));
    stockageDisponible = true;
    ecrireDatesPresets({ modifie: Date.now() });
  } catch (erreur) {
    stockageDisponible = false;
  }
  return stockageDisponible;
}
function marquerExportPresets() { ecrireDatesPresets({ exporte: Date.now() }); }
function etatSauvegardePresets() {
  if (!presetsUtilisateur.length) return { niveau: 'aucun' };
  if (!stockageDisponible) return { niveau: 'non-conserve' };
  const dates = lireDatesPresets();
  if (!dates.exporte) return { niveau: 'jamais' };
  return { niveau: (dates.modifie || 0) > dates.exporte ? 'en-retard' : 'a-jour', date: dates.exporte };
}
function renommerPresetUtilisateur(preset, nouveauNom) {
  const nom = String(nouveauNom).trim();
  if (!nom) return { ok: false, raison: 'vide' };
  if (nom.length > 60) return { ok: false, raison: 'trop-long' };
  if (presetsUtilisateur.some(p => p !== preset && p.effet === preset.effet && p.nom === nom)) return { ok: false, raison: 'existe' };
  preset.nom = nom;
  return { ok: true, conserve: memoriserPresetsUtilisateur() };
}
function ajouterPresetUtilisateur(brut) {
  const preset = presetNettoye(brut);
  const index = presetsUtilisateur.findIndex(p => p.effet === preset.effet && p.nom === preset.nom);
  if (index >= 0) presetsUtilisateur[index] = preset; else presetsUtilisateur.push(preset);
  return { preset, remplace: index >= 0, conserve: memoriserPresetsUtilisateur() };
}
function supprimerPresetUtilisateur(preset) {
  const index = presetsUtilisateur.indexOf(preset);
  if (index < 0) return true;
  presetsUtilisateur.splice(index, 1);
  return memoriserPresetsUtilisateur();
}
function exporterPresetsUtilisateur() {
  return JSON.stringify({ format: 'animotion-presets', version: 1, exporteLe: new Date().toISOString(), presets: presetsUtilisateur }, null, 2);
}
function analyserImportPresets(texte) {
  let donnees;
  try { donnees = JSON.parse(texte); } catch (erreur) { return null; }
  if (!donnees || donnees.format !== 'animotion-presets' || !Array.isArray(donnees.presets)) return null;
  const valides = donnees.presets.filter(presetBienForme);
  return { valides, ignores: donnees.presets.length - valides.length };
}
function simulerImportPresets(texte) {
  const analyse = analyserImportPresets(texte);
  if (!analyse) return null;
  const existants = new Set(presetsUtilisateur.map(p => p.effet + '\n' + p.nom));
  const apercu = { ajoutes: 0, remplaces: 0, ignores: analyse.ignores };
  for (const p of analyse.valides) {
    const cle = p.effet + '\n' + p.nom.trim();
    if (existants.has(cle)) apercu.remplaces++; else { apercu.ajoutes++; existants.add(cle); }
  }
  return apercu;
}
function importerPresetsUtilisateur(texte) {
  const analyse = analyserImportPresets(texte);
  if (!analyse) return null;
  const bilan = { ajoutes: 0, remplaces: 0, ignores: analyse.ignores, conserve: true };
  for (const p of analyse.valides) {
    const { remplace } = ajouterPresetUtilisateur(p);
    if (remplace) bilan.remplaces++; else bilan.ajoutes++;
  }
  bilan.conserve = memoriserPresetsUtilisateur();
  return bilan;
}
