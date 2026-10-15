const NOM_FICHIER_SAUVEGARDE = 'sauvegarde-presets.js';
let NOM_BASE_POIGNEE = 'animotion';
const magasinPoignee = {
  _ouvrir() {
    return new Promise((resolve, reject) => {
      const demande = indexedDB.open(NOM_BASE_POIGNEE, 1);
      demande.onupgradeneeded = () => demande.result.createObjectStore('poignees');
      demande.onsuccess = () => resolve(demande.result);
      demande.onerror = () => reject(demande.error);
    });
  },
  async _transaction(mode, operation) {
    const base = await this._ouvrir();
    try {
      return await new Promise((resolve, reject) => {
        const demande = operation(base.transaction('poignees', mode).objectStore('poignees'));
        demande.onsuccess = () => resolve(demande.result);
        demande.onerror = () => reject(demande.error);
      });
    } finally { base.close(); }
  },
  async lire() { try { return (await this._transaction('readonly', s => s.get('sauvegarde'))) || null; } catch (erreur) { return null; } },
  async ecrire(poignee) { try { await this._transaction('readwrite', s => s.put(poignee, 'sauvegarde')); } catch (erreur) {   } },
  async oublier() { try { await this._transaction('readwrite', s => s.delete('sauvegarde')); } catch (erreur) {   } }
};
function contenuSauvegardePresets() {
  return `\nwindow.SAUVEGARDE_PRESETS = ${exporterPresetsUtilisateur()};\n`;
}
function jsonDepuisSauvegarde(texte) {
  const nettoye = String(texte).trim();
  if (nettoye.startsWith('{')) return nettoye;
  const trouve = nettoye.match(/window\.SAUVEGARDE_PRESETS\s*=\s*(\{[\s\S]*\})\s*;?\s*$/);
  return trouve ? trouve[1] : null;
}
function sauvegardeDeLApplication() {
  const donnees = window.SAUVEGARDE_PRESETS;
  if (!donnees || !Array.isArray(donnees.presets) || !donnees.presets.length) return null;
  return JSON.stringify(donnees);
}
function nombreDansSauvegardeApplication() {
  const texte = sauvegardeDeLApplication();
  const analyse = texte && analyserImportPresets(texte);
  return analyse ? analyse.valides.length : 0;
}
function telechargerSauvegarde(contenu) {
  const lien = document.createElement('a');
  lien.href = URL.createObjectURL(new Blob([contenu], { type: 'text/javascript' }));
  lien.download = NOM_FICHIER_SAUVEGARDE;
  document.body.appendChild(lien);
  lien.click();
  lien.remove();
  setTimeout(() => URL.revokeObjectURL(lien.href), 1000);
}
async function autoriserEcriture(poignee) {
  const mode = { mode: 'readwrite' };
  if ((await poignee.queryPermission(mode)) === 'granted') return true;
  return (await poignee.requestPermission(mode)) === 'granted';
}
async function exporterPresets() {
  const contenu = contenuSauvegardePresets();
  if (typeof window.showSaveFilePicker === 'function') {
    let motifRepli = null;
    try {
      let poignee = await magasinPoignee.lire();
      let premiereFois = false;
      if (poignee) {
        let autorise = false;
        try { autorise = await autoriserEcriture(poignee); } catch (erreur) { await magasinPoignee.oublier(); poignee = null; }
        if (poignee && !autorise) motifRepli = 'refus';
      }
      if (!motifRepli) {
        if (!poignee) {
          poignee = await window.showSaveFilePicker({
            id: 'animotion-presets',
            suggestedName: NOM_FICHIER_SAUVEGARDE,
            types: [{ description: 'Sauvegarde AniMotion (.js)', accept: { 'text/javascript': ['.js'] } }]
          });
          await magasinPoignee.ecrire(poignee);
          premiereFois = true;
        }
        const flux = await poignee.createWritable();
        await flux.write(contenu);
        await flux.close();
        return { mode: 'fichier', nom: poignee.name, premiereFois };
      }
    } catch (erreur) {
      if (erreur && erreur.name === 'AbortError') return { mode: 'annule' };
      await magasinPoignee.oublier();
    }
  }
  telechargerSauvegarde(contenu);
  return { mode: 'telechargement', nom: NOM_FICHIER_SAUVEGARDE };
}
