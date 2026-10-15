const SECTIONS_THEMES = [
  { id: 'ecrin', nom: 'Écrin' },
  { id: 'neon', nom: 'Néon' }
];
const THEMES = [
  { id: 'obsidienne', nom: 'Obsidienne', section: 'ecrin', reference: true, description: 'La référence : noir du maillot et or mesuré sur le maillot de l\'asso.' },
  { id: 'albatre', nom: 'Albâtre', section: 'ecrin', description: 'Le thème clair, l\'opposé d\'Obsidienne : blanc os du maillot blanc, encre noire, or profond.' },
  { id: 'eclipse', nom: 'Éclipse', section: 'ecrin', description: 'Le plus proche d\'Obsidienne : noir plus profond, or cuivré et ambré.' },
  { id: 'saphir', nom: 'Saphir', section: 'ecrin', description: 'Noir à reflets bleu nuit, or d\'Obsidienne.' },
  { id: 'grenat', nom: 'Grenat', section: 'ecrin', description: 'Noir grenat et halo vin, or champagne rosé.' },
  { id: 'platine', nom: 'Platine', section: 'ecrin', description: 'L\'or devient platine glacé, halo cyan : trophée de ligue pro.' },
  { id: 'amethyste', nom: 'Améthyste', section: 'ecrin', description: 'Violet, beige et gris : maillot violet profond, métal beige champagne, fond anthracite.' },
  { id: 'mansur', nom: 'Tajine', section: 'ecrin', description: 'Les couleurs du site mansur-site-web : violet, bordeaux et or.' },
  { id: 'neon', nom: 'Néon', section: 'neon', description: '1/6 · Néon violet, magenta et cyan, façon arcade.' },
  { id: 'acide', nom: 'Acide', section: 'neon', description: '2/6 · Vert acide et jaune toxique.' },
  { id: 'magma', nom: 'Magma', section: 'neon', description: '3/6 · Lave en fusion, halo de chaleur sur les bords de l\'écran.' },
  { id: 'glitch', nom: 'Glitch', section: 'neon', description: '4/6 · Signal brouillé rouge, blanc et cyan, lignes de balayage.' },
  { id: 'outrun', nom: 'Outrun', section: 'neon', description: '5/6 · Coucher de soleil rétro, horizon lumineux et lignes de balayage.' },
  { id: 'supernova', nom: 'Supernova', section: 'neon', description: '6/6 · Le plus spectaculaire : blanc incandescent, cyan, magenta, halo qui respire.' }
];
const ALIAS_THEMES = { royal: 'mansur', neutre: 'obsidienne' };
function resoudreTheme(id) { return ALIAS_THEMES[id] || id; }
