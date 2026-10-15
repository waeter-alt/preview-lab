const FONDS = [
  { id: 'uni', nom: 'Uni' },
  { id: 'degrade', nom: 'Dégradé' },
  { id: 'motif', nom: 'Motif' }
];
const RANGEMENT_EFFETS = {
  references: ['mansur-joueurs', 'mansur-joueurs-v2'],
  archives: ['dissolve', 'rouleau', 'pixel-scan', 'hero-v', 'maillot', 'cartes-joueurs'],
  sousCategories: [
    { titre: 'Équipe et joueurs', effets: ['maillot-cartes', 'selection-joueurs', 'table-tactique', 'entree-arene'] },
    { titre: 'Menus de navigation', effets: ['nav-bandeau', 'nav-rail', 'nav-jeu', 'nav-bandeau-ecusson', 'nav-bandeau-capsule', 'nav-bandeau-diffusion'] },
    { titre: 'Identité du lab', effets: ['voile-accueil'] }
  ]
};
const CLE_CATALOGUE = 'animotion.catalogue';
const EFFET_DE_DEPART = 'maillot-cartes';
const CLE_INTERFACE = 'animotion.interface';
const $ = selecteur => document.querySelector(selecteur);
const preferenceSysteme = window.matchMedia('(prefers-reduced-motion: reduce)');
const etat = {
  effet: null,
  instance: null,
  theme: document.documentElement.dataset.theme,
  fond: $('#scene').dataset.fond,
  reduire: false,
  valeurs: {},
  presetActif: null,
  modifie: false
};
const valeursMemorisees = {};
function valeursParDefaut(effet) {
  const valeurs = {};
  for (const p of effet.parametres) valeurs[p.id] = Array.isArray(p.defaut) ? [...p.defaut] : p.defaut;
  return valeurs;
}
function decimales(pas) { return (String(pas).split('.')[1] || '').length; }
function arrondir(valeur, pas) { return Number((Math.round(valeur / pas) * pas).toFixed(decimales(pas))); }
function construireBoutons(conteneur, elements, idActif, surChoix) {
  conteneur.innerHTML = '';
  for (const element of elements) {
    const bouton = document.createElement('button');
    bouton.type = 'button';
    bouton.textContent = element.nom;
    bouton.setAttribute('aria-pressed', element.id === idActif);
    bouton.addEventListener('click', () => {
      for (const autre of conteneur.children) autre.setAttribute('aria-pressed', autre === bouton);
      surChoix(element.id);
    });
    conteneur.appendChild(bouton);
  }
}
function monterEffet() {
  if (etat.instance) etat.instance.detruire();
  const zone = $('#zone-effet');
  zone.innerHTML = '';
  etat.instance = etat.effet.monter(zone, { ...etat.valeurs }, { reduireAnimations: etat.reduire, qualite: Qualite.niveau });
}
function changerValeur(id, valeur) {
  etat.valeurs[id] = valeur;
  etat.modifie = true;
  majBlocPresets();
  majModifications();
  etat.instance.mettreAJour({ ...etat.valeurs });
}
const estModifie = p => JSON.stringify(etat.valeurs[p.id]) !== JSON.stringify(p.defaut);
function libelleCourt(p) {
  if (!p.categorie) return p.libelle;
  const prefixe = p.categorie.split(' · ')[0] + ' · ';
  const court = p.libelle.startsWith(prefixe) ? p.libelle.slice(prefixe.length) : p.libelle;
  return court.charAt(0).toUpperCase() + court.slice(1);
}
function majModifications() {
  for (const ligne of document.querySelectorAll('#reglages [data-parametre]')) {
    const p = etat.effet.parametres.find(x => x.id === ligne.dataset.parametre);
    if (p) ligne.classList.toggle('modifie', estModifie(p));
  }
  for (const section of document.querySelectorAll('#reglages .section-reglages')) {
    const pastille = section.querySelector('.pastille-modifs');
    if (!pastille) continue;
    const nombre = section.querySelectorAll('[data-parametre].modifie').length;
    pastille.textContent = nombre;
    pastille.hidden = !nombre;
  }
}
function majBlocPresets() {
  const actif = presetsUtilisateur.includes(etat.presetActif) ? etat.presetActif : null;
  $('#sauver-preset').textContent = actif ? `Sauvegarder « ${actif.nom} »` : 'Sauvegarder le preset';
  $('#sauver-sous').hidden = !actif;
  $('#etat-preset').hidden = !(actif && etat.modifie);
  majDock();
}
function majDock() {
  if (!etat.effet) return;
  $('#dock-effet').textContent = etat.effet.nom;
  const preset = etat.presetActif;
  $('#dock-preset').hidden = !preset;
  if (preset) {
    $('#dock-preset').textContent = 'Preset : ' + preset.nom;
    $('#dock-preset').classList.toggle('modifie', etat.modifie);
  }
}
function creerControle(p) {
  const ligne = document.createElement('div');
  ligne.className = 'reglage reglage-' + p.type;
  ligne.dataset.parametre = p.id;
  ligne.classList.toggle('modifie', estModifie(p));
  const libelle = document.createElement('label');
  libelle.className = 'reglage-libelle';
  const court = libelleCourt(p);
  const parenthese = court.indexOf(' (');
  libelle.textContent = parenthese > 0 ? court.slice(0, parenthese) : court;
  if (parenthese > 0) {
    const precision = document.createElement('span');
    precision.className = 'reglage-precision';
    precision.textContent = court.slice(parenthese + 1);
    libelle.appendChild(precision);
  }
  libelle.title = p.libelle;
  libelle.htmlFor = 'reglage-' + p.id;
  const retour = document.createElement('button');
  retour.type = 'button';
  retour.className = 'retour-defaut';
  retour.textContent = '↺';
  retour.title = 'Remettre la valeur d\'origine';
  retour.setAttribute('aria-label', 'Remettre « ' + libelleCourt(p) + ' » à sa valeur d\'origine');
  retour.addEventListener('click', () => {
    changerValeur(p.id, Array.isArray(p.defaut) ? [...p.defaut] : p.defaut);
    construireReglages();
  });
  const entete = document.createElement('div');
  entete.className = 'reglage-entete';
  const valeur = etat.valeurs[p.id];
  if (p.type === 'nombre') {
    const affichage = document.createElement('output');
    affichage.className = 'reglage-valeur';
    affichage.textContent = valeur.toFixed(decimales(p.pas));
    entete.append(libelle, retour, affichage);
    const curseur = document.createElement('input');
    Object.assign(curseur, { type: 'range', min: p.min, max: p.max, step: p.pas, value: valeur, id: 'reglage-' + p.id });
    curseur.addEventListener('input', () => {
      const nouvelle = arrondir(parseFloat(curseur.value), p.pas);
      affichage.textContent = nouvelle.toFixed(decimales(p.pas));
      changerValeur(p.id, nouvelle);
    });
    ligne.append(entete, curseur);
  } else if (p.type === 'interrupteur') {
    const caseACocher = document.createElement('input');
    Object.assign(caseACocher, { type: 'checkbox', className: 'interrupteur', checked: valeur, id: 'reglage-' + p.id });
    caseACocher.addEventListener('change', () => changerValeur(p.id, caseACocher.checked));
    entete.append(libelle, retour, caseACocher);
    ligne.append(entete);
  } else if (p.type === 'listeCouleurs') {
    const rangee = document.createElement('span');
    rangee.className = 'reglage-couleurs';
    valeur.forEach((couleur, i) => {
      const selecteur = document.createElement('input');
      Object.assign(selecteur, { type: 'color', value: couleur });
      selecteur.setAttribute('aria-label', `${p.libelle} : couleur ${i + 1}`);
      selecteur.addEventListener('input', () => {
        const copie = [...etat.valeurs[p.id]];
        copie[i] = selecteur.value;
        changerValeur(p.id, copie);
      });
      rangee.appendChild(selecteur);
    });
    entete.append(libelle, retour);
    ligne.append(entete, rangee);
  } else if (p.type === 'couleur') {
    const selecteur = document.createElement('input');
    Object.assign(selecteur, { type: 'color', value: valeur, id: 'reglage-' + p.id });
    selecteur.addEventListener('input', () => changerValeur(p.id, selecteur.value));
    entete.append(libelle, retour, selecteur);
    ligne.append(entete);
  } else if (p.type === 'choix') {
    const liste = document.createElement('select');
    liste.id = 'reglage-' + p.id;
    for (const option of p.options) liste.add(new Option(option.libelle, option.valeur, false, option.valeur === valeur));
    liste.addEventListener('change', () => changerValeur(p.id, liste.value));
    entete.append(libelle, retour);
    ligne.append(entete, liste);
  }
  return ligne;
}
function enDeuxClics(bouton, libelleInitial, libelleConfirmation, action) {
  let minuterie = 0;
  bouton.addEventListener('click', () => {
    if (bouton.dataset.confirmer !== 'oui') {
      bouton.dataset.confirmer = 'oui';
      bouton.textContent = libelleConfirmation;
      minuterie = setTimeout(() => { bouton.dataset.confirmer = ''; bouton.textContent = libelleInitial; }, 3000);
      return;
    }
    clearTimeout(minuterie);
    action();
  });
}
function appliquerPreset(preset) {
  if (!EFFETS.some(e => e.id === preset.effet)) { afficherMessage('Cet effet n\'existe plus : ce preset ne peut pas être appliqué.'); return false; }
  if (etat.modifie && presetsUtilisateur.includes(etat.presetActif)) {
    const meme = etat.presetActif === preset;
    const question = meme
      ? `Revenir à la version sauvegardée de « ${preset.nom} » ? Les modifications en cours seront perdues.`
      : `« ${etat.presetActif.nom} » a des modifications non sauvegardées. Les abandonner pour appliquer « ${preset.nom} » ?`;
    if (!window.confirm(question)) return false;
  }
  appliquerConfig(preset, preset);
  afficherMessage(`Preset « ${preset.nom} » appliqué.`);
  return true;
}
function creerSelecteurPresets() {
  const parNom = (a, b) => a.nom.localeCompare(b.nom, 'fr');
  const duProjet = PRESETS.filter(p => p.effet === etat.effet.id).sort(parNom);
  const personnels = presetsUtilisateur.filter(p => p.effet === etat.effet.id).sort(parNom);
  const tous = [...duProjet, ...personnels];
  if (!tous.length) return null;
  const bloc = document.createElement('div');
  bloc.className = 'reglage liste-presets-effet';
  const ligne = document.createElement('label');
  ligne.className = 'reglage reglage-choix';
  const libelle = document.createElement('span');
  libelle.textContent = 'Presets de cet effet';
  const liste = document.createElement('select');
  liste.add(new Option('Choisir…', ''));
  const ajouterGroupe = (titre, elements, decalage) => {
    if (!elements.length) return;
    const groupe = document.createElement('optgroup');
    groupe.label = titre;
    elements.forEach((p, i) => groupe.appendChild(new Option(p.nom, String(decalage + i))));
    liste.appendChild(groupe);
  };
  ajouterGroupe('Presets du projet', duProjet, 0);
  ajouterGroupe('Mes presets', personnels, duProjet.length);
  const indexActif = tous.indexOf(etat.presetActif);
  liste.value = indexActif >= 0 ? String(indexActif) : '';
  liste.addEventListener('change', () => {
    if (liste.value === '') return;
    if (!appliquerPreset(tous[Number(liste.value)])) liste.value = indexActif >= 0 ? String(indexActif) : '';
  });
  ligne.append(libelle, liste);
  bloc.appendChild(ligne);
  if (personnels.includes(etat.presetActif)) {
    const actif = etat.presetActif;
    const renommer = document.createElement('button');
    renommer.type = 'button';
    renommer.className = 'bouton bouton-discret';
    renommer.textContent = 'Renommer ce preset';
    const formulaire = document.createElement('form');
    formulaire.className = 'form-preset';
    formulaire.hidden = true;
    const champ = document.createElement('input');
    Object.assign(champ, { type: 'text', maxLength: 60, required: true, autocomplete: 'off' });
    champ.setAttribute('aria-label', 'Nouveau nom du preset');
    const actions = document.createElement('div');
    actions.className = 'actions';
    const valider = document.createElement('button');
    Object.assign(valider, { type: 'submit', className: 'bouton', textContent: 'Renommer' });
    const annuler = document.createElement('button');
    Object.assign(annuler, { type: 'button', className: 'bouton', textContent: 'Annuler' });
    actions.append(valider, annuler);
    formulaire.append(champ, actions);
    const supprimer = document.createElement('button');
    supprimer.type = 'button';
    supprimer.className = 'bouton bouton-discret';
    supprimer.textContent = 'Supprimer ce preset';
    const fermerFormulaire = () => { formulaire.hidden = true; renommer.hidden = false; supprimer.hidden = false; };
    renommer.addEventListener('click', () => {
      renommer.hidden = true;
      supprimer.hidden = true;
      formulaire.hidden = false;
      champ.value = actif.nom;
      champ.focus();
      champ.select();
    });
    annuler.addEventListener('click', fermerFormulaire);
    champ.addEventListener('keydown', evenement => { if (evenement.key === 'Escape') fermerFormulaire(); });
    formulaire.addEventListener('submit', evenement => {
      evenement.preventDefault();
      const ancienNom = actif.nom;
      const resultat = renommerPresetUtilisateur(actif, champ.value);
      if (!resultat.ok) {
        afficherMessage({ vide: 'Le nom ne peut pas être vide.', 'trop-long': 'Nom trop long (60 caractères maximum).', existe: 'Un preset de cet effet porte déjà ce nom.' }[resultat.raison]);
        return;
      }
      construirePanneau();
      afficherMessage(`« ${ancienNom} » renommé en « ${actif.nom} ».`
        + (resultat.conserve ? '' : ' Attention : ce navigateur ne conserve pas les presets, utilisez « Exporter ».'));
    });
    enDeuxClics(supprimer, 'Supprimer ce preset', 'Confirmer la suppression ?', () => {
      const conserve = supprimerPresetUtilisateur(actif);
      etat.presetActif = null;
      construirePanneau();
      afficherMessage(`Preset « ${actif.nom} » supprimé.` + (conserve ? '' : ' Attention : ce navigateur ne conserve pas les presets, utilisez « Exporter ».'));
    });
    bloc.append(renommer, formulaire, supprimer);
  }
  return bloc;
}
const sectionOuverte = {};
function construireReglages() {
  const conteneur = $('#reglages');
  conteneur.innerHTML = '';
  const params = etat.effet.parametres;
  if (!params.some(p => p.categorie)) {
    const section = document.createElement('div');
    section.className = 'section-reglages sans-titre';
    const corps = document.createElement('div');
    corps.className = 'corps-section';
    params.forEach(p => corps.appendChild(creerControle(p)));
    section.appendChild(corps);
    conteneur.appendChild(section);
    return;
  }
  const groupes = [];
  for (const p of params) {
    const titre = p.categorie || 'Autres';
    let groupe = groupes.find(g => g.titre === titre);
    if (!groupe) groupes.push(groupe = { titre, params: [] });
    groupe.params.push(p);
  }
  if (!(etat.effet.id in sectionOuverte)) sectionOuverte[etat.effet.id] = groupes[0].titre;
  for (const groupe of groupes) {
    const section = document.createElement('div');
    section.className = 'section-reglages';
    const ouverte = sectionOuverte[etat.effet.id] === groupe.titre;
    section.dataset.ouverte = ouverte ? 'oui' : 'non';
    const titre = document.createElement('button');
    titre.type = 'button';
    titre.setAttribute('aria-expanded', String(ouverte));
    const nom = document.createElement('span');
    nom.textContent = groupe.titre;
    const pastille = document.createElement('span');
    pastille.className = 'pastille-modifs';
    pastille.title = 'Réglages modifiés dans cette section';
    const chevron = document.createElement('span');
    chevron.className = 'chevron';
    chevron.textContent = '›';
    titre.append(nom, pastille, chevron);
    titre.addEventListener('click', () => {
      sectionOuverte[etat.effet.id] = ouverte ? null : groupe.titre;
      construireReglages();
    });
    const corps = document.createElement('div');
    corps.className = 'corps-section';
    if (ouverte) groupe.params.forEach(p => corps.appendChild(creerControle(p)));
    else groupe.params.forEach(p => {
      const repere = document.createElement('span');
      repere.dataset.parametre = p.id;
      repere.hidden = true;
      corps.appendChild(repere);
    });
    section.append(titre, corps);
    conteneur.appendChild(section);
  }
  majModifications();
}
function construirePanneau() {
  $('#titre-effet').textContent = etat.effet.nom;
  $('#description-effet').textContent = etat.effet.description;
  construireReglages();
  const presetsEffet = $('#presets-effet');
  presetsEffet.innerHTML = '';
  const selecteurPresets = creerSelecteurPresets();
  if (selecteurPresets) presetsEffet.appendChild(selecteurPresets);
  $('#form-preset').hidden = true;
  majListePresets();
  majBlocPresets();
}
function choisirEffet(id) {
  if (etat.presetActif && etat.presetActif.effet !== id) etat.presetActif = null;
  etat.effet = EFFETS.find(e => e.id === id);
  valeursMemorisees[id] = valeursMemorisees[id] || valeursParDefaut(etat.effet);
  etat.valeurs = valeursMemorisees[id];
  construirePanneau();
  monterEffet();
  ecrireInterface();
}
function valeursValides(effet, brutes) {
  const valeurs = valeursParDefaut(effet);
  if (!brutes || typeof brutes !== 'object') return valeurs;
  for (const p of effet.parametres) {
    const v = brutes[p.id];
    if (p.type === 'nombre' && typeof v === 'number' && Number.isFinite(v)) valeurs[p.id] = arrondir(Math.min(p.max, Math.max(p.min, v)), p.pas);
    else if (p.type === 'interrupteur' && typeof v === 'boolean') valeurs[p.id] = v;
    else if (p.type === 'couleur' && typeof v === 'string' && /^#[0-9a-f]{6}$/i.test(v)) valeurs[p.id] = v;
    else if (p.type === 'listeCouleurs' && Array.isArray(v)) valeurs[p.id] = p.defaut.map((defaut, i) => (typeof v[i] === 'string' && /^#[0-9a-f]{6}$/i.test(v[i]) ? v[i] : defaut));
    else if (p.type === 'choix' && p.options.some(o => o.valeur === v)) valeurs[p.id] = v;
  }
  return valeurs;
}
function lireCatalogue() {
  try { return JSON.parse(localStorage.getItem(CLE_CATALOGUE)) || {}; } catch (erreur) { return {}; }
}
function ecrireCatalogue(ouvertes) {
  try { localStorage.setItem(CLE_CATALOGUE, JSON.stringify(ouvertes)); } catch (erreur) {   }
}
function creerBoutonEffet(effet, lectureSeule) {
  const bouton = document.createElement('button');
  bouton.type = 'button';
  bouton.className = 'bouton-effet';
  bouton.dataset.effet = effet.id;
  bouton.textContent = effet.nom;
  if (lectureSeule) {
    const cadenas = document.createElement('span');
    cadenas.className = 'cadenas';
    cadenas.textContent = 'lecture seule';
    bouton.appendChild(cadenas);
  }
  bouton.addEventListener('click', () => { choisirEffet(effet.id); marquerEffetActif(effet.id); });
  return bouton;
}
function creerSousCategorie(titre, effets) {
  const details = document.createElement('details');
  details.className = 'sous-groupe-effets';
  details.open = lireCatalogue()[titre] === true;
  const resume = document.createElement('summary');
  resume.textContent = titre;
  const compte = document.createElement('span');
  compte.className = 'compte-effets';
  compte.textContent = String(effets.length);
  resume.appendChild(compte);
  details.appendChild(resume);
  for (const effet of effets) details.appendChild(creerBoutonEffet(effet));
  details.addEventListener('toggle', () => { const ouvertes = lireCatalogue(); ouvertes[titre] = details.open; ecrireCatalogue(ouvertes); });
  return details;
}
function construireListeEffets() {
  const conteneur = $('#liste-effets');
  conteneur.innerHTML = '';
  const dans = liste => EFFETS.filter(e => liste.includes(e.id));
  const groupes = [
    { titre: 'Références', effets: dans(RANGEMENT_EFFETS.references), lectureSeule: true },
    { titre: 'En travail', effets: EFFETS.filter(e => !RANGEMENT_EFFETS.references.includes(e.id) && !RANGEMENT_EFFETS.archives.includes(e.id)), sousCategories: RANGEMENT_EFFETS.sousCategories },
    { titre: 'Archives', effets: dans(RANGEMENT_EFFETS.archives), repliable: true }
  ];
  for (const groupe of groupes) {
    if (!groupe.effets.length) continue;
    const bloc = document.createElement(groupe.repliable ? 'details' : 'div');
    bloc.className = 'groupe-effets';
    const titre = document.createElement(groupe.repliable ? 'summary' : 'h2');
    titre.textContent = groupe.titre;
    bloc.appendChild(titre);
    if (groupe.sousCategories) {
      const ranges = new Set();
      for (const sous of groupe.sousCategories) {
        const effetsDeLaSousCategorie = groupe.effets.filter(e => sous.effets.includes(e.id));
        if (!effetsDeLaSousCategorie.length) continue;
        effetsDeLaSousCategorie.forEach(e => ranges.add(e.id));
        bloc.appendChild(creerSousCategorie(sous.titre, effetsDeLaSousCategorie));
      }
      for (const effet of groupe.effets.filter(e => !ranges.has(e.id))) bloc.appendChild(creerBoutonEffet(effet));
    } else {
      for (const effet of groupe.effets) bloc.appendChild(creerBoutonEffet(effet, groupe.lectureSeule));
    }
    conteneur.appendChild(bloc);
  }
}
function marquerEffetActif(id) {
  for (const bouton of document.querySelectorAll('#liste-effets [data-effet]')) {
    const actif = bouton.dataset.effet === id;
    bouton.setAttribute('aria-pressed', String(actif));
    if (actif && bouton.parentElement.tagName === 'DETAILS') bouton.parentElement.open = true;
  }
}
function construireThemes() {
  const conteneur = $('#choix-theme');
  conteneur.innerHTML = '';
  for (const section of SECTIONS_THEMES) {
    const themes = THEMES.filter(t => t.section === section.id);
    if (!themes.length) continue;
    const titre = document.createElement('h3');
    titre.className = 'titre-section-themes';
    titre.textContent = section.nom;
    const grille = document.createElement('div');
    grille.className = 'grille-themes';
    conteneur.append(titre, grille);
    for (const theme of themes) grille.appendChild(creerBoutonTheme(theme));
  }
}
function creerBoutonTheme(theme) {
  const bouton = document.createElement('button');
  bouton.type = 'button';
  bouton.setAttribute('aria-pressed', String(theme.id === etat.theme));
  if (theme.description) bouton.title = theme.description;
  const echantillon = document.createElement('span');
  echantillon.className = 'echantillon-theme';
  echantillon.dataset.theme = theme.id;
  const nom = document.createElement('span');
  nom.textContent = theme.nom;
  bouton.append(echantillon, nom);
  if (theme.reference) {
    const etoile = document.createElement('span');
    etoile.className = 'etoile-reference';
    etoile.textContent = '★';
    etoile.title = 'Thème de référence';
    bouton.appendChild(etoile);
  }
  bouton.dataset.choixTheme = theme.id;
  bouton.addEventListener('click', () => {
    for (const autre of document.querySelectorAll('#choix-theme button')) autre.setAttribute('aria-pressed', String(autre === bouton));
    choisirTheme(theme.id);
  });
  return bouton;
}
function marquerActif(conteneur, elements, idActif) {
  [...conteneur.children].forEach((bouton, i) => bouton.setAttribute('aria-pressed', elements[i].id === idActif));
}
function appliquerConfig(config, preset = null) {
  if (!config || typeof config !== 'object') return false;
  const effet = EFFETS.find(e => e.id === config.effet);
  if (!effet) return false;
  etat.presetActif = preset;
  etat.modifie = false;
  const theme = resoudreTheme(config.theme);
  if (THEMES.some(t => t.id === theme)) {
    etat.theme = theme;
    document.documentElement.dataset.theme = theme;
  }
  if (FONDS.some(f => f.id === config.fond)) {
    etat.fond = config.fond;
    $('#scene').dataset.fond = config.fond;
  }
  valeursMemorisees[effet.id] = valeursValides(effet, config.reglages);
  choisirEffet(effet.id);
  marquerEffetActif(effet.id);
  for (const bouton of document.querySelectorAll('#choix-theme button')) bouton.setAttribute('aria-pressed', String(bouton.dataset.choixTheme === etat.theme));
  return true;
}
function configDepuisLien() {
  const trouve = location.hash.match(/^#config=(.+)$/);
  if (!trouve) return null;
  try { return JSON.parse(decodeURIComponent(trouve[1])); } catch (erreur) { return {}; }
}
function choisirTheme(id) {
  etat.theme = id;
  document.documentElement.dataset.theme = id;
  monterEffet();
}
function choisirFond(id) {
  etat.fond = id;
  $('#scene').dataset.fond = id;
}
function changerReduction(active) {
  etat.reduire = active;
  document.documentElement.toggleAttribute('data-animations-reduites', active);
  $('#reduire').checked = active;
  $('#note-systeme').hidden = !preferenceSysteme.matches;
  monterEffet();
}
let minuterieMessage = 0;
function afficherMessage(texte) {
  const message = $('#message');
  message.textContent = texte;
  message.classList.add('visible');
  clearTimeout(minuterieMessage);
  minuterieMessage = setTimeout(() => message.classList.remove('visible'), Math.max(2200, texte.length * 60));
}
async function copierTexte(texte) {
  try {
    await navigator.clipboard.writeText(texte);
    return true;
  } catch (erreur) {
    const zone = document.createElement('textarea');
    zone.value = texte;
    zone.style.position = 'fixed';
    zone.style.opacity = '0';
    document.body.appendChild(zone);
    zone.select();
    let reussi = false;
    try { reussi = document.execCommand('copy'); } catch (e) { reussi = false; }
    zone.remove();
    return reussi;
  }
}
function reglagesEnJson() {
  return JSON.stringify({
    effet: etat.effet.id,
    theme: etat.theme,
    fond: etat.fond,
    reduireAnimations: etat.reduire,
    reglages: etat.valeurs
  }, null, 2);
}
function sourceDeLEffet(effet) {
  const decaler = texte => texte.replace(/\n/g, '\n  ');
  const lignes = Object.keys(effet).map(cle => {
    const valeur = effet[cle];
    if (typeof valeur === 'function') return '  ' + decaler(valeur.toString());
    if (cle === 'css') return `  css: \`${valeur.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')}\``;
    return `  ${cle}: ${decaler(JSON.stringify(valeur, null, 2))}`;
  });
  return `const EffetExtrait = {\n${lignes.join(',\n')}\n};`;
}
function codeExportable() {
  const module = sourceDeLEffet(etat.effet);
  const nomObjet = 'EffetExtrait';
  const styles = getComputedStyle(document.documentElement);
  const variables = etat.effet.variables.map(v => `  ${v}: ${styles.getPropertyValue(v).trim()};`).join('\n');
  return `<!-- Effet « ${etat.effet.nom} » extrait d'AniMotion (thème ${etat.theme}) -->
<style>
:root {
${variables}
}
</style>
<div id="zone-effet" style="position: relative; height: 480px;"></div>
<script>
${module}
${nomObjet}.monter(
  document.getElementById('zone-effet'),
  ${JSON.stringify(etat.valeurs)},
  { reduireAnimations: window.matchMedia('(prefers-reduced-motion: reduce)').matches }
);
<\/script>
`;
}
let imagesComptees = 0, debutComptage = performance.now(), dernierFps = null;
function majAffichageFps() {
  if (dernierFps === null) return;
  const niveau = Qualite.niveau === 'complet' ? '' : ' · ' + NOMS_QUALITE[Qualite.niveau];
  $('#fps').textContent = dernierFps + ' FPS' + niveau;
}
function compterFps(t) {
  imagesComptees++;
  if (t - debutComptage >= 500) {
    dernierFps = Math.round(imagesComptees * 1000 / (t - debutComptage));
    majAffichageFps();
    imagesComptees = 0;
    debutComptage = t;
  }
  requestAnimationFrame(compterFps);
afficherAccueil();
}
function verifierPresets() {
  const valides = PRESETS.filter(p => {
    const problemes = [];
    if (!p || typeof p.nom !== 'string' || !p.nom) problemes.push('nom manquant');
    if (!p || !EFFETS.some(e => e.id === p.effet)) problemes.push(`effet « ${p && p.effet} » inconnu`);
    if (problemes.length) ERREURS_EFFETS.push({ id: `preset « ${(p && p.nom) || '?'} »`, problemes });
    return !problemes.length;
  });
  PRESETS.length = 0;
  PRESETS.push(...valides);
}
function afficherErreursEffets() {
  if (!ERREURS_EFFETS.length) return;
  const alerte = document.createElement('div');
  alerte.className = 'alerte';
  alerte.setAttribute('role', 'alert');
  alerte.innerHTML = '<strong>Effet(s) non chargé(s)</strong>';
  for (const erreur of ERREURS_EFFETS) {
    const ligne = document.createElement('p');
    ligne.textContent = `${erreur.id} : ${erreur.problemes.join(' ; ')}`;
    alerte.appendChild(ligne);
  }
  $('#scene').appendChild(alerte);
}
const NOMS_QUALITE = { complet: 'Complet', allege: 'Allégé', minimal: 'Minimal' };
const CHOIX_QUALITE = [{ id: 'auto', nom: 'Auto' }, ...Qualite.NIVEAUX.map(id => ({ id, nom: NOMS_QUALITE[id] }))];
let choixQualite = new URLSearchParams(location.search).get('niveau');
if (!CHOIX_QUALITE.some(c => c.id === choixQualite)) choixQualite = 'complet';
Qualite.demarrer();
Qualite.choisir(choixQualite);
function majNoteQualite() {
  const r = Qualite.rapport();
  $('#note-qualite').textContent = `Niveau actuel : ${NOMS_QUALITE[r.niveau]} (${r.mode === 'auto' ? 'automatique' : 'choisi'}). ${r.mode === 'auto' ? 'Raison : ' + r.raison + '.' : "Auto = ce que fera un site : le niveau s'adapte à la fluidité mesurée."}`;
  majAffichageFps();
}
construireBoutons($('#choix-qualite'), CHOIX_QUALITE, choixQualite, id => { choixQualite = id; Qualite.choisir(id); majNoteQualite(); });
Qualite.surChangement(niveau => {
  if (etat.instance && typeof etat.instance.changerQualite === 'function') etat.instance.changerQualite(niveau);
  majNoteQualite();
});
$('#copier-rapport').addEventListener('click', async () => {
  const rapport = { ...Qualite.rapport(), imagesParSecondeAffichees: dernierFps, effet: etat.effet.id, theme: etat.theme, fenetre: `${innerWidth}x${innerHeight}`, navigateur: navigator.userAgent };
  afficherMessage(await copierTexte(JSON.stringify(rapport, null, 2)) ? 'Rapport de performance copié.' : 'Copie impossible dans ce navigateur.');
});
function ecrireNom(element) {
  const coupe = IDENTITE.nomItalique && IDENTITE.nom.endsWith(IDENTITE.nomItalique) ? IDENTITE.nom.length - IDENTITE.nomItalique.length : IDENTITE.nom.length;
  element.textContent = '';
  element.append(document.createTextNode(IDENTITE.nom.slice(0, coupe)));
  if (coupe < IDENTITE.nom.length) { const italique = document.createElement('em'); italique.textContent = IDENTITE.nom.slice(coupe); element.append(italique); }
}
function appliquerIdentite() {
  ecrireNom($('#dock-marque'));
  ecrireNom($('#identite-nom'));
  $('#identite-ligne').textContent = IDENTITE.accroche;
  document.title = IDENTITE.nom + ' — ' + IDENTITE.accroche.toLowerCase();
}
const CLE_ACCUEIL = 'animotion.accueil';
const HTML_SPLASH = '<span class="accueil-nom"></span><div class="accueil-bas"><span class="accueil-ligne"></span><div class="accueil-invite"><span class="accueil-souris" aria-hidden="true"><i class="accueil-lueur"></i><i class="accueil-onde"></i><i class="accueil-onde" style="animation-delay:calc(var(--cycle,2.4s)*.08)"></i><i class="accueil-onde" style="animation-delay:calc(var(--cycle,2.4s)*.16)"></i><svg viewBox="0 0 48 72"><rect class="accueil-coque" x="3" y="3" width="42" height="66" rx="21"/><path class="accueil-bouton" d="M24 3A21 21 0 0 0 3 24V30H24Z"/><path class="accueil-trait" d="M3 30H45M24 3V30"/><rect class="accueil-molette" x="21" y="11" width="6" height="11" rx="3"/></svg><i class="accueil-etincelle" style="--a:0deg;--k:1"></i><i class="accueil-etincelle" style="--a:26deg;--k:0.75"></i><i class="accueil-etincelle" style="--a:51deg;--k:1.2"></i><i class="accueil-etincelle" style="--a:77deg;--k:0.9"></i><i class="accueil-etincelle" style="--a:103deg;--k:1.1"></i><i class="accueil-etincelle" style="--a:129deg;--k:0.8"></i><i class="accueil-etincelle" style="--a:154deg;--k:1.15"></i><i class="accueil-etincelle" style="--a:180deg;--k:0.95"></i><i class="accueil-etincelle" style="--a:206deg;--k:1.05"></i><i class="accueil-etincelle" style="--a:231deg;--k:0.8"></i><i class="accueil-etincelle" style="--a:257deg;--k:1.2"></i><i class="accueil-etincelle" style="--a:283deg;--k:0.85"></i><i class="accueil-etincelle" style="--a:309deg;--k:1.1"></i><i class="accueil-etincelle" style="--a:334deg;--k:0.9"></i></span><span class="accueil-clic"></span></div></div>';
function afficherAccueil(forcer = false) {
  if (document.querySelector('.accueil-voile')) return;
  if (!forcer) {
    if (new URLSearchParams(location.search).get('accueil') === 'non') return;
    try { if (sessionStorage.getItem(CLE_ACCUEIL)) return; sessionStorage.setItem(CLE_ACCUEIL, '1'); } catch (e) {   }
  }
  const voile = document.createElement('div');
  voile.className = 'accueil-voile' + (etat.reduire ? ' calme' : '');
  voile.innerHTML = HTML_SPLASH;
  ecrireNom(voile.querySelector('.accueil-nom'));
  voile.querySelector('.accueil-ligne').textContent = IDENTITE.avertissement;
  voile.querySelector('.accueil-clic').textContent = IDENTITE.invite;
  document.body.appendChild(voile);
  function fermer(x, y) {
    document.removeEventListener('keydown', surTouche);
    const onde = document.createElement('i');
    onde.className = 'accueil-impact';
    onde.style.left = x + 'px'; onde.style.top = y + 'px';
    document.body.appendChild(onde);
    voile.classList.add('ferme');
    setTimeout(() => { voile.remove(); onde.remove(); }, 650);
  }
  function surTouche() { fermer(innerWidth / 2, innerHeight / 2); }
  voile.addEventListener('click', e => fermer(e.clientX, e.clientY), { once: true });
  document.addEventListener('keydown', surTouche, { once: true });
}
appliquerIdentite();
if (!EFFETS.length) { afficherErreursEffets(); throw new Error('Aucun effet valide à afficher.'); }
verifierPresets();
afficherErreursEffets();
construireListeEffets();
construireThemes();
majNoteQualite();
$('#reduire').checked = etat.reduire;
document.documentElement.toggleAttribute('data-animations-reduites', etat.reduire);
$('#note-systeme').hidden = !preferenceSysteme.matches;
$('#reduire').addEventListener('change', e => changerReduction(e.target.checked));
preferenceSysteme.addEventListener('change', e => { $('#note-systeme').hidden = !e.matches; });
$('#copier-reglages').addEventListener('click', async () => {
  afficherMessage(await copierTexte(reglagesEnJson()) ? 'Réglages copiés.' : 'Copie impossible dans ce navigateur.');
});
$('#reinitialiser').addEventListener('click', () => {
  valeursMemorisees[etat.effet.id] = etat.valeurs = valeursParDefaut(etat.effet);
  etat.modifie = true;
  construirePanneau();
  etat.instance.mettreAJour({ ...etat.valeurs });
  afficherMessage('Valeurs par défaut rétablies.');
});
$('#copier-code').addEventListener('click', async () => {
  afficherMessage(await copierTexte(codeExportable()) ? 'Code de l\'effet copié, prêt à coller dans un site.' : 'Copie impossible dans ce navigateur.');
});
$('#copier-lien').addEventListener('click', async () => {
  const config = { effet: etat.effet.id, theme: etat.theme, fond: etat.fond, reglages: etat.valeurs };
  const lien = location.href.split('#')[0] + '#config=' + encodeURIComponent(JSON.stringify(config));
  if (!await copierTexte(lien)) { afficherMessage('Copie impossible dans ce navigateur.'); return; }
  afficherMessage(location.protocol === 'file:'
    ? 'Lien copié, mais il ne servira à un client qu\'une fois le lab hébergé en ligne.'
    : 'Lien copié : il rouvre le lab avec ces réglages.');
});
const sansAccents = texte => texte.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
function presetsParEffet() {
  const groupes = EFFETS.map(effet => ({ effet, items: [] }));
  const orphelins = [];
  const classer = (preset, origine) => {
    const groupe = groupes.find(g => g.effet.id === preset.effet);
    (groupe ? groupe.items : orphelins).push({ preset, origine });
  };
  PRESETS.forEach(p => classer(p, 'projet'));
  presetsUtilisateur.forEach(p => classer(p, 'perso'));
  const ordre = (a, b) => (a.origine === b.origine ? a.preset.nom.localeCompare(b.preset.nom, 'fr') : a.origine === 'projet' ? -1 : 1);
  groupes.forEach(g => g.items.sort(ordre));
  orphelins.sort(ordre);
  return { groupes: groupes.filter(g => g.items.length), orphelins };
}
function creerLigneDePreset({ preset, origine }, effet) {
  const ligne = document.createElement('li');
  const bouton = document.createElement('button');
  bouton.type = 'button';
  bouton.setAttribute('aria-pressed', preset === etat.presetActif);
  const nom = document.createElement('span');
  nom.className = 'nom-preset';
  nom.textContent = preset.nom;
  bouton.title = effet ? `${preset.nom} — ${effet.nom}` : `${preset.nom} — effet introuvable`;
  bouton.appendChild(nom);
  if (origine === 'projet') {
    const badge = document.createElement('span');
    badge.className = 'badge-projet';
    badge.textContent = 'projet';
    bouton.appendChild(badge);
  }
  if (effet) {
    bouton.addEventListener('click', () => {
      if (!appliquerPreset(preset)) return;
      if (window.matchMedia('(max-width: 700px)').matches) basculerMenu(false);
    });
    ligne.appendChild(bouton);
  } else {
    bouton.disabled = true;
    ligne.appendChild(bouton);
    const supprimer = document.createElement('button');
    supprimer.type = 'button';
    supprimer.className = 'bouton bouton-discret';
    supprimer.textContent = 'Supprimer';
    enDeuxClics(supprimer, 'Supprimer', 'Confirmer ?', () => {
      supprimerPresetUtilisateur(preset);
      construirePanneau();
      afficherMessage(`Preset « ${preset.nom} » supprimé.`);
    });
    ligne.appendChild(supprimer);
  }
  return ligne;
}
function creerGroupeDePresets(titre, items, effet) {
  const groupe = document.createElement('section');
  groupe.className = 'groupe-presets';
  const entete = document.createElement('h3');
  entete.textContent = titre;
  const liste = document.createElement('ul');
  items.forEach(item => liste.appendChild(creerLigneDePreset(item, effet)));
  groupe.append(entete, liste);
  return groupe;
}
const NIVEAUX_SAUVEGARDE = {
  'non-conserve': 'Ce navigateur ne conserve pas vos presets : exportez-les pour ne pas les perdre.',
  jamais: 'Vos presets n\'ont jamais été exportés : pensez à les sauvegarder.',
  'en-retard': 'Des presets ont changé depuis le dernier export.'
};
function majEtatSauvegarde() {
  const { niveau, date } = etatSauvegardePresets();
  const dansLAppli = nombreDansSauvegardeApplication();
  const boutonAppli = $('#importer-appli');
  boutonAppli.textContent = dansLAppli ? `Importer la sauvegarde de l'appli (${dansLAppli})` : 'Importer la sauvegarde de l\'appli';
  boutonAppli.disabled = !dansLAppli;
  boutonAppli.title = dansLAppli ? '' : 'La sauvegarde de l\'appli (presets/sauvegarde-presets.js) est vide : exportez d\'abord vos presets.';
  const note = $('#etat-sauvegarde');
  const retrouvable = niveau === 'aucun' && dansLAppli > 0;
  note.hidden = niveau === 'aucun' && !retrouvable;
  note.classList.toggle('note-alerte', retrouvable || (niveau !== 'a-jour' && niveau !== 'aucun'));
  note.textContent = retrouvable
    ? `Une sauvegarde de ${dansLAppli} preset(s) est disponible : utilisez « Importer la sauvegarde de l'appli ».`
    : niveau === 'a-jour'
      ? `Dernier export : ${new Date(date).toLocaleDateString('fr-FR')} (à jour).`
      : (NIVEAUX_SAUVEGARDE[niveau] || '');
}
function majListePresets() {
  const { groupes, orphelins } = presetsParEffet();
  const total = groupes.reduce((n, g) => n + g.items.length, 0) + orphelins.length;
  $('#compte-presets').textContent = total;
  const champRecherche = $('#recherche-presets');
  champRecherche.hidden = total < 6;
  const filtre = champRecherche.hidden ? '' : sansAccents(champRecherche.value.trim());
  const conteneur = $('#liste-presets');
  conteneur.innerHTML = '';
  if (!total) {
    const vide = document.createElement('p');
    vide.className = 'note';
    vide.textContent = 'Aucun preset pour l\'instant. Réglez un effet puis cliquez sur « Sauvegarder le preset ».';
    conteneur.appendChild(vide);
  }
  const retenir = (items, nomEffet) => items.filter(({ preset }) => !filtre || sansAccents(preset.nom).includes(filtre) || sansAccents(nomEffet).includes(filtre));
  let affiches = 0;
  for (const { effet, items } of groupes) {
    const retenus = retenir(items, effet.nom);
    if (!retenus.length) continue;
    affiches += retenus.length;
    conteneur.appendChild(creerGroupeDePresets(`${effet.nom} (${retenus.length})`, retenus, effet));
  }
  const orphelinsRetenus = retenir(orphelins, 'effet introuvable');
  if (orphelinsRetenus.length) {
    affiches += orphelinsRetenus.length;
    conteneur.appendChild(creerGroupeDePresets(`Effet introuvable (${orphelinsRetenus.length})`, orphelinsRetenus, null));
  }
  if (total && !affiches) {
    const aucun = document.createElement('p');
    aucun.className = 'note';
    aucun.textContent = 'Aucun preset ne correspond à cette recherche.';
    conteneur.appendChild(aucun);
  }
  majEtatSauvegarde();
}
$('#recherche-presets').addEventListener('input', majListePresets);
function enregistrerPreset(nom) {
  const { preset, remplace, conserve } = ajouterPresetUtilisateur({
    nom, effet: etat.effet.id, theme: etat.theme, fond: etat.fond, reglages: { ...etat.valeurs }
  });
  etat.presetActif = preset;
  etat.modifie = false;
  construirePanneau();
  afficherMessage(`Preset « ${nom} » ${remplace ? 'mis à jour' : 'enregistré'}.`
    + (conserve ? '' : ' Attention : ce navigateur ne le conserve pas après fermeture, utilisez « Exporter mes presets ».'));
}
function ouvrirFormulairePreset() {
  $('#form-preset').hidden = false;
  $('#nom-preset').value = '';
  $('#nom-preset').focus();
}
$('#sauver-preset').addEventListener('click', () => {
  if (presetsUtilisateur.includes(etat.presetActif)) enregistrerPreset(etat.presetActif.nom);
  else ouvrirFormulairePreset();
});
$('#sauver-sous').addEventListener('click', ouvrirFormulairePreset);
$('#annuler-preset').addEventListener('click', () => { $('#form-preset').hidden = true; });
$('#form-preset').addEventListener('submit', evenement => {
  evenement.preventDefault();
  const nom = $('#nom-preset').value.trim();
  if (nom) enregistrerPreset(nom);
});
let exportEnCours = false;
$('#exporter-presets').addEventListener('click', async () => {
  if (!presetsUtilisateur.length) { afficherMessage('Aucun preset à exporter.'); return; }
  if (exportEnCours) return;
  exportEnCours = true;
  try {
    const resultat = await exporterPresets();
    if (resultat.mode === 'annule') { afficherMessage('Export annulé.'); return; }
    marquerExportPresets();
    majListePresets();
    if (resultat.mode === 'fichier') {
      afficherMessage(resultat.premiereFois
        ? `Exporté dans « ${resultat.nom} ». Il doit se trouver dans le dossier presets du projet : le lab le relira tout seul au chargement. Les prochains exports se feront en un clic.`
        : `Presets exportés dans « ${resultat.nom} ».`);
    } else {
      afficherMessage(`Ce navigateur ne peut pas écrire directement : « ${resultat.nom} » a été téléchargé. Placez-le dans le dossier presets du projet, à la place du fichier du même nom.`);
    }
  } finally { exportEnCours = false; }
});
function importerTexte(texte, provenance) {
  const json = jsonDepuisSauvegarde(texte);
  const apercu = json && simulerImportPresets(json);
  if (!apercu) { afficherMessage('Ce fichier n\'est pas une sauvegarde de presets AniMotion.'); return; }
  if (apercu.remplaces && !window.confirm(
    `${apercu.ajoutes} preset(s) seront ajoutés et ${apercu.remplaces} remplacés (même effet, même nom : la version importée écrase celle d'ici). Continuer ?`)) {
    afficherMessage('Import annulé : rien n\'a été modifié.');
    return;
  }
  const bilan = importerPresetsUtilisateur(json);
  construirePanneau();
  afficherMessage(`Import ${provenance} : ${bilan.ajoutes} ajouté(s), ${bilan.remplaces} remplacé(s), ${bilan.ignores} ignoré(s).`
    + (bilan.conserve ? '' : ' Attention : ce navigateur ne conserve pas les presets.'));
}
$('#importer-fichier').addEventListener('click', () => $('#fichier-presets').click());
$('#fichier-presets').addEventListener('change', async evenement => {
  const fichier = evenement.target.files[0];
  evenement.target.value = '';
  if (!fichier) return;
  if (fichier.size > 1000000) { afficherMessage('Ce fichier est trop gros pour être une sauvegarde de presets.'); return; }
  importerTexte(await fichier.text(), 'depuis le fichier');
});
$('#importer-appli').addEventListener('click', () => {
  const texte = sauvegardeDeLApplication();
  if (!texte) { afficherMessage('La sauvegarde de l\'appli est vide. Exportez d\'abord vos presets.'); return; }
  importerTexte(texte, 'depuis la sauvegarde de l\'appli');
});
function lireInterface() {
  try { return JSON.parse(localStorage.getItem(CLE_INTERFACE)) || {}; } catch (erreur) { return {}; }
}
function ecrireInterface() {
  try {
    localStorage.setItem(CLE_INTERFACE, JSON.stringify({
      ouvert: $('#dock').dataset.ouvert === 'oui',
      onglet: document.querySelector('.onglets [aria-selected="true"]').dataset.onglet,
      effet: etat.effet ? etat.effet.id : interfaceMemorisee.effet,
      position: positionMenu,
      echelle: echelleMenu
    }));
  } catch (erreur) {   }
}
function basculerMenu(ouvrir) {
  $('#dock').dataset.ouvert = ouvrir ? 'oui' : 'non';
  $('#basculer-menu').setAttribute('aria-expanded', String(ouvrir));
  placerMenu();
  ecrireInterface();
}
function ouvrirOnglet(nom) {
  for (const bouton of document.querySelectorAll('.onglets [data-onglet]')) bouton.setAttribute('aria-selected', String(bouton.dataset.onglet === nom));
  for (const panneau of document.querySelectorAll('.contenu-onglet')) panneau.hidden = panneau.dataset.panneau !== nom;
  ecrireInterface();
}
$('#basculer-menu').addEventListener('click', () => basculerMenu($('#dock').dataset.ouvert !== 'oui'));
$('#dock-titre').addEventListener('click', () => { basculerMenu(true); ouvrirOnglet('reglages'); });
for (const bouton of document.querySelectorAll('.onglets [data-onglet]')) bouton.addEventListener('click', () => ouvrirOnglet(bouton.dataset.onglet));
const interfaceMemorisee = lireInterface();
const LARGEUR_MENU = 360;
const dock = $('#dock');
let positionMenu = interfaceMemorisee.position && Number.isFinite(interfaceMemorisee.position.x) ? { ...interfaceMemorisee.position } : { x: 12, y: 12 };
let echelleMenu = Number.isFinite(interfaceMemorisee.echelle) ? interfaceMemorisee.echelle : 1;
const surTelephone = () => window.matchMedia('(max-width: 700px)').matches;
const borner = (v, min, max) => Math.min(Math.max(v, min), Math.max(min, max));
function placerMenu() {
  if (surTelephone()) return;
  echelleMenu = borner(echelleMenu, 0.8, Math.min(1.8, (window.innerWidth - 8) / LARGEUR_MENU));
  dock.style.setProperty('--echelle-menu', echelleMenu.toFixed(3));
  const hauteurBarre = $('.dock-barre').getBoundingClientRect().height;
  positionMenu.x = borner(positionMenu.x, 4, window.innerWidth - LARGEUR_MENU * echelleMenu - 4);
  const placeMenu = dock.dataset.ouvert === 'oui' ? 260 * echelleMenu : 0;
  positionMenu.y = borner(positionMenu.y, 4, window.innerHeight - hauteurBarre - placeMenu - 4);
  dock.style.left = positionMenu.x + 'px';
  dock.style.top = positionMenu.y + 'px';
  const hauteurDispo = (window.innerHeight - positionMenu.y - hauteurBarre - 18) / echelleMenu;
  dock.style.setProperty('--hauteur-menu', Math.max(140, hauteurDispo) + 'px');
}
let geste = null;
let aGlisse = false;
$('.dock-barre').addEventListener('pointerdown', e => {
  if (e.button !== 0 || surTelephone()) return;
  geste = { type: 'deplacer', x0: e.clientX, y0: e.clientY, px: positionMenu.x, py: positionMenu.y };
  aGlisse = false;
});
$('#poignee-taille').addEventListener('pointerdown', e => {
  if (e.button !== 0 || surTelephone()) return;
  e.preventDefault();
  const menu = $('#menu-flottant').getBoundingClientRect();
  geste = { type: 'agrandir', x0: e.clientX, y0: e.clientY, echelle0: echelleMenu, largeur0: menu.width, hauteur0: menu.height };
  dock.classList.add('agrandissement');
});
window.addEventListener('pointermove', e => {
  if (!geste) return;
  const dx = e.clientX - geste.x0, dy = e.clientY - geste.y0;
  if (geste.type === 'deplacer') {
    if (!aGlisse && Math.hypot(dx, dy) < 5) return;
    aGlisse = true;
    dock.classList.add('deplacement');
    positionMenu = { x: geste.px + dx, y: geste.py + dy };
  } else {
    const avance = (dx + dy * (geste.largeur0 / geste.hauteur0)) / 2;
    echelleMenu = geste.echelle0 * (geste.largeur0 + avance) / geste.largeur0;
  }
  placerMenu();
});
window.addEventListener('pointerup', () => {
  if (!geste) return;
  const modifie = geste.type === 'agrandir' || aGlisse;
  geste = null;
  dock.classList.remove('deplacement', 'agrandissement');
  if (modifie) ecrireInterface();
});
$('.dock-barre').addEventListener('click', e => {
  if (!aGlisse) return;
  e.stopPropagation();
  e.preventDefault();
  aGlisse = false;
}, true);
$('#rejouer-splash').addEventListener('click', () => {
  basculerMenu(false);
  afficherAccueil(true);
});
$('#replacer-menu').addEventListener('click', () => {
  positionMenu = { x: 12, y: 12 };
  echelleMenu = 1;
  placerMenu();
  ecrireInterface();
});
window.addEventListener('resize', placerMenu);
ouvrirOnglet('effets');
basculerMenu(interfaceMemorisee.ouvert === true);
placerMenu();
chargerPresetsUtilisateur();
const effetDeDepart = EFFETS.some(e => e.id === EFFET_DE_DEPART) ? EFFET_DE_DEPART
  : EFFETS.some(e => e.id === interfaceMemorisee.effet) ? interfaceMemorisee.effet : EFFETS[0].id;
choisirEffet(effetDeDepart);
marquerEffetActif(effetDeDepart);
const configDuLien = configDepuisLien();
if (configDuLien && !appliquerConfig(configDuLien)) afficherMessage('Lien de réglages invalide : valeurs par défaut utilisées.');
requestAnimationFrame(compterFps);
