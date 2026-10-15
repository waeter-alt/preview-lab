const EffetHeroV = {
  id: 'hero-v',
  nom: 'Transition du hero en V',
  description: 'Un V en or luisant descend sur le hero pendant le défilement, avec étincelles, poussière d\'or et reflet sur le logo. Faites défiler la maquette, ou utilisez Lecture.',
  variables: ['--metal-sombre', '--metal-moyen', '--metal-clair', '--metal-reflet', '--couleur-fond', '--couleur-surface', '--couleur-lueur', '--couleur-texte', '--couleur-motif', '--opacite-motif', '--police-titre', '--police-logo'],
  parametres: [
    { id: 'longueur', libelle: 'Durée en scroll (% de hauteur d\'écran)', type: 'nombre', min: 60, max: 250, pas: 5, defaut: 120 },
    { id: 'pente', libelle: 'Ouverture du V (petit = V plat, grand = V pointu)', type: 'nombre', min: 0.15, max: 1.2, pas: 0.05, defaut: 0.5 },
    { id: 'epaisseur', libelle: 'Épaisseur du V (px)', type: 'nombre', min: 4, max: 60, pas: 1, defaut: 16 },
    { id: 'lueur', libelle: 'Lueur de l\'or (0 = mat)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.7 },
    { id: 'etincelles', libelle: 'Quantité d\'étincelles', type: 'nombre', min: 0, max: 3, pas: 0.1, defaut: 1.2 },
    { id: 'inertie', libelle: 'Fluidité du V (0 = suit le scroll sec, 1 = très amorti)', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.6 },
    { id: 'poussiere', libelle: 'Poussière d\'or dans le hero', type: 'nombre', min: 0, max: 1, pas: 0.05, defaut: 0.5 },
    { id: 'doubleTrait', libelle: 'Double trait (comme le col du maillot)', type: 'interrupteur', defaut: true },
    { id: 'refletLogo', libelle: 'Reflet qui balaie le logo', type: 'interrupteur', defaut: true },
    { id: 'provenance', libelle: 'Le V arrive par', type: 'choix', defaut: 'haut',
      options: [{ valeur: 'haut', libelle: 'Le haut (il descend)' }, { valeur: 'bas', libelle: 'Le bas (il monte)' }] },
    { id: 'pointe', libelle: 'La pointe du V est tournée vers', type: 'choix', defaut: 'bas',
      options: [{ valeur: 'bas', libelle: 'Le bas (V)' }, { valeur: 'haut', libelle: 'Le haut (Λ)' }] }
  ],
  css: `
.herov-scene { position: absolute; inset: 0; --h: 600px; --long: 720px; }
.herov-defilement { position: absolute; inset: 0; overflow-x: hidden; overflow-y: auto; scrollbar-width: thin; }
.herov-hero { position: relative; height: calc(var(--h) + var(--long)); }
.herov-etage { position: sticky; top: 0; height: var(--h); overflow: hidden; display: grid; place-items: center;
  background: radial-gradient(ellipse 110% 90% at 50% 45%, var(--couleur-lueur) 0%, var(--couleur-fond) 60%, var(--couleur-surface) 100%); }
.herov-etage::before { content: ""; position: absolute; inset: 0; pointer-events: none; background-color: var(--couleur-motif); opacity: var(--opacite-motif);
  --etoile: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.4'%3E%3Crect x='16' y='16' width='24' height='24'/%3E%3Crect x='16' y='16' width='24' height='24' transform='rotate(45 28 28)'/%3E%3C/g%3E%3Ccircle cx='0' cy='0' r='2'/%3E%3C/svg%3E");
  -webkit-mask: var(--etoile) 0 0 / 56px 56px repeat; mask: var(--etoile) 0 0 / 56px 56px repeat; }
.herov-contenu { position: relative; z-index: 1; display: grid; justify-items: center; gap: 14px; padding: 24px; text-align: center; will-change: transform, opacity; }
.herov-logo { width: clamp(90px, 16vw, 170px); height: auto; overflow: visible; }
.herov-logo .etoile { filter: drop-shadow(0 0 6px var(--metal-reflet)); }
.herov-mot { margin: 6px 0 0; font: 400 clamp(20px, 4.2vw, 46px)/1 var(--police-logo, "Arial Black", sans-serif); letter-spacing: .42em; padding-left: .42em; color: var(--couleur-texte); }
.herov-arabe { margin: 0; font: 600 clamp(14px, 2vw, 20px)/1 "Segoe UI", "Noto Naskh Arabic", "Arial", sans-serif; color: var(--metal-moyen); }
.herov-accroche { margin: 8px 0 0; font: 700 clamp(13px, 1.6vw, 17px)/1 var(--police-titre, "Arial Narrow", sans-serif); letter-spacing: .28em; text-transform: uppercase; color: var(--metal-moyen); }
.herov-toile { position: absolute; inset: 0; z-index: 2; width: 100%; height: 100%; pointer-events: none; }
.herov-suite { position: relative; padding: calc(var(--h) * .28) 24px; background: var(--couleur-surface); color: var(--couleur-texte); text-align: center; min-height: var(--h); }
.herov-suite h3 { margin: 0 0 12px; font: 800 clamp(30px, 6vw, 64px)/1 var(--police-titre, "Arial Narrow", sans-serif); letter-spacing: .06em; text-transform: uppercase; color: var(--couleur-texte); }
.herov-suite p { margin: 0 auto; max-width: 38ch; opacity: .7; }
.herov-commandes { position: absolute; left: 50%; bottom: 12px; z-index: 5; transform: translateX(-50%); display: flex; align-items: center; gap: 10px;
  padding: 8px 12px; border-radius: 999px; background: color-mix(in srgb, var(--couleur-surface) 88%, transparent);
  border: 1px solid color-mix(in srgb, var(--couleur-texte) 18%, transparent); color: var(--couleur-texte); font: 600 12px/1 system-ui, sans-serif; }
.herov-commandes button { padding: 6px 12px; border: 0; border-radius: 999px; cursor: pointer; font: inherit; color: var(--couleur-surface);
  background: linear-gradient(135deg, var(--metal-sombre), var(--metal-moyen) 45%, var(--metal-reflet) 55%, var(--metal-moyen)); }
.herov-commandes input[type="range"] { width: clamp(90px, 22vw, 220px); accent-color: var(--metal-moyen); }
.herov-commandes output { min-width: 5ch; text-align: right; font-family: ui-monospace, Consolas, monospace; }
.herov-scene[data-statique] .herov-toile, .herov-scene[data-statique] .herov-commandes { display: none; }`,
  monter(conteneur, reglages, options) {
    if (!document.getElementById('css-' + this.id)) {
      const style = document.createElement('style');
      style.id = 'css-' + this.id;
      style.textContent = this.css;
      document.head.appendChild(style);
    }
    let r = { ...reglages };
    const statique = options.reduireAnimations;
    const scene = document.createElement('div');
    scene.className = 'herov-scene';
    if (statique) scene.dataset.statique = '1';
    scene.innerHTML =
      '<div class="herov-defilement" tabindex="0" role="region" aria-label="Maquette de page : faites défiler pour voir la transition en V">' +
        '<section class="herov-hero"><div class="herov-etage">' +
          '<div class="herov-contenu">' +
            '<svg class="herov-logo" viewBox="-6 -8 112 114" aria-label="Logo M">' +
              '<defs><linearGradient id="herov-reflet" gradientUnits="userSpaceOnUse" x1="-40" y1="0" x2="0" y2="-20">' +
                '<stop offset="0" style="stop-color:var(--metal-moyen)"/><stop offset=".5" style="stop-color:var(--metal-reflet)"/><stop offset="1" style="stop-color:var(--metal-moyen)"/>' +
                '<animateTransform attributeName="gradientTransform" type="translate" values="-20 0; 170 0; 170 0" keyTimes="0; .45; 1" dur="3.6s" repeatCount="indefinite"/>' +
              '</linearGradient></defs>' +
              '<polygon points="0,0 22,0 50,48 78,0 100,0 100,100 80,100 80,40 50,88 20,40 20,100 0,100" style="fill:var(--metal-moyen)"/>' +
              '<polygon class="herov-brillance" points="0,0 22,0 50,48 78,0 100,0 100,100 80,100 80,40 50,88 20,40 20,100 0,100" fill="url(#herov-reflet)" opacity=".9"/>' +
              '<polygon class="etoile" style="fill:var(--metal-reflet)" points="' + this.pointsEtoile(50, 15, 14, 8) + '"/>' +
            '</svg>' +
            '<p class="herov-mot">MANSUR</p>' +
            '<p class="herov-arabe" lang="ar" dir="rtl">منصور</p>' +
            '<p class="herov-accroche">Esport · Saison 2026-27</p>' +
          '</div>' +
          '<canvas class="herov-toile" aria-hidden="true"></canvas>' +
        '</div></section>' +
        '<section class="herov-suite"><h3>Section suivante</h3><p>Son fond est la couleur que dépose le V en descendant.</p></section>' +
      '</div>' +
      '<div class="herov-commandes"><button type="button" data-lecture>Lecture</button>' +
        '<input type="range" min="0" max="1000" step="1" value="0" aria-label="Progression de la transition"><output>0 %</output></div>';
    conteneur.appendChild(scene);
    const defilement = scene.querySelector('.herov-defilement');
    const contenu = scene.querySelector('.herov-contenu');
    const toile = scene.querySelector('.herov-toile');
    const ctx = toile.getContext('2d');
    const brillance = scene.querySelector('.herov-brillance');
    const animationReflet = scene.querySelector('animateTransform');
    const boutonLecture = scene.querySelector('[data-lecture]');
    const curseur = scene.querySelector('input[type="range"]');
    const affichage = scene.querySelector('output');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const styles = getComputedStyle(scene);
    const lireCouleur = nom => styles.getPropertyValue(nom).trim() || '#C9A646';
    const or = { sombre: lireCouleur('--metal-sombre'), moyen: lireCouleur('--metal-moyen'), clair: lireCouleur('--metal-clair'), reflet: lireCouleur('--metal-reflet') };
    const remplissage = lireCouleur('--couleur-surface');
    let largeur = 0, hauteur = 0, longueur = 0;
    let idImage = 0, idLecture = 0, visible = true;
    let pLisse = 0;
    let vitesseV = 0;
    let vitesse = 0;
    let resteEmission = 0;
    let numeroEtincelle = 0;
    const etincelles = [];
    let poussieres = [];
    function mettreEnPage() {
      longueur = statique ? 0 : (r.longueur / 100) * defilement.clientHeight;
      scene.style.setProperty('--h', defilement.clientHeight + 'px');
      scene.style.setProperty('--long', longueur + 'px');
      largeur = toile.clientWidth; hauteur = toile.clientHeight;
      toile.width = Math.round(largeur * dpr); toile.height = Math.round(hauteur * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      creerPoussiere();
    }
    function creerPoussiere() {
      const nombre = Math.round(90 * r.poussiere * Math.min(1.4, largeur * hauteur / 900000 + 0.4));
      poussieres = Array.from({ length: nombre }, () => ({ x: Math.random() * largeur, y: Math.random() * hauteur, vy: 0.1 + Math.random() * 0.35, phase: Math.random() * 6.28, taille: 1 + Math.random() * 1.8 }));
    }
    const progression = () => (longueur > 0 ? Math.min(1, Math.max(0, defilement.scrollTop / longueur)) : 0);
    function geometrie(p) {
      const orientation = r.pointe === 'haut' ? -1 : 1;
      const sens = r.provenance === 'bas' ? -1 : 1;
      const montee = r.pente * largeur / 2;
      const marge = r.epaisseur * 2 + (r.doubleTrait ? r.epaisseur * 2 : 0);
      const cacheeEnHaut = -marge - (orientation === 1 ? 0 : montee);
      const cacheeEnBas = hauteur + marge + (orientation === 1 ? montee : 0);
      const pointe = sens === 1 ? cacheeEnHaut + p * (cacheeEnBas - cacheeEnHaut) : cacheeEnBas + p * (cacheeEnHaut - cacheeEnBas);
      return { pointe, sens, yV: x => pointe - orientation * r.pente * Math.abs(x - largeur / 2) };
    }
    function dessiner(temps) {
      const cible = progression();
      const ancienne = pLisse;
      const raideur = 0.16 - 0.14 * r.inertie;
      vitesseV = vitesseV * (1 - 2 * Math.sqrt(raideur)) + (cible - pLisse) * raideur;
      pLisse += vitesseV;
      if (Math.abs(cible - pLisse) < 0.0005 && Math.abs(vitesseV) < 0.0005) { pLisse = cible; vitesseV = 0; }
      vitesse += (Math.abs(pLisse - ancienne) - vitesse) * 0.1;
      const p = pLisse;
      ctx.clearRect(0, 0, largeur, hauteur);
      ctx.globalCompositeOperation = 'lighter';
      for (const g of poussieres) {
        g.y -= g.vy; if (g.y < -4) { g.y = hauteur + 4; g.x = Math.random() * largeur; }
        ctx.globalAlpha = 0.25 + 0.35 * (0.5 + 0.5 * Math.sin(temps / 600 + g.phase));
        ctx.fillStyle = or.clair;
        ctx.fillRect(g.x, g.y, g.taille, g.taille);
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
      if (p > 0) {
        const { pointe, sens, yV } = geometrie(p);
        const bord = sens === 1 ? -10 : hauteur + 10;
        ctx.fillStyle = remplissage;
        ctx.beginPath(); ctx.moveTo(-20, bord); ctx.lineTo(largeur + 20, bord); ctx.lineTo(largeur + 20, yV(largeur + 20));
        ctx.lineTo(largeur / 2, pointe); ctx.lineTo(-20, yV(-20)); ctx.closePath(); ctx.fill();
        const balayage = ((temps / 1800) % 1.6) - 0.3;
        const borne = v => Math.min(1, Math.max(0, v));
        const degrade = ctx.createLinearGradient(0, 0, largeur, 0);
        degrade.addColorStop(0, or.sombre);
        degrade.addColorStop(borne(balayage - 0.12), or.moyen);
        degrade.addColorStop(borne(balayage), or.reflet);
        degrade.addColorStop(borne(balayage + 0.12), or.moyen);
        degrade.addColorStop(1, or.sombre);
        const trait = (decalage, epaisseur) => {
          ctx.beginPath(); ctx.moveTo(-20, yV(-20) + decalage); ctx.lineTo(largeur / 2, pointe + decalage); ctx.lineTo(largeur + 20, yV(largeur + 20) + decalage);
          ctx.lineWidth = epaisseur; ctx.lineJoin = 'miter'; ctx.miterLimit = 20; ctx.stroke();
        };
        ctx.strokeStyle = degrade;
        ctx.shadowColor = or.reflet; ctx.shadowBlur = 36 * r.lueur;
        trait(0, r.epaisseur);
        if (r.doubleTrait) trait(-sens * r.epaisseur * 1.7, Math.max(2, r.epaisseur * 0.32));
        ctx.shadowBlur = 0;
        if (r.lueur > 0) {
          const rayon = r.epaisseur * (3 + 1.5 * Math.sin(temps / 260)) * (0.6 + r.lueur);
          const halo = ctx.createRadialGradient(largeur / 2, pointe, 0, largeur / 2, pointe, rayon);
          halo.addColorStop(0, or.reflet); halo.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 0.55 * r.lueur;
          ctx.fillStyle = halo; ctx.fillRect(largeur / 2 - rayon, pointe - rayon, rayon * 2, rayon * 2);
          ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
        }
        if (p < 1 && r.etincelles > 0) {
          resteEmission += r.etincelles * 2 * (0.6 + Math.min(1, vitesse * 150));
          while (resteEmission >= 1 && etincelles.length < 500) {
            resteEmission -= 1;
            const s = ((numeroEtincelle++ * 0.618034) % 1) * 2 - 1;
            const vieMax = 55 + Math.random() * 45;
            etincelles.push({ s, vs: Math.sign(s || 1) * (0.0012 + Math.random() * 0.0022), d: 0, vd: 0.25 + Math.random() * 0.4,
              vie: vieMax, vieMax, taille: 1.2 + Math.random() * 2, phase: Math.random() * 6.28, couleur: [or.reflet, or.clair, or.moyen][Math.floor(Math.random() * 3)] });
          }
          resteEmission = Math.min(resteEmission, 1);
        }
        ctx.globalCompositeOperation = 'lighter';
        for (let i = etincelles.length - 1; i >= 0; i--) {
          const e = etincelles[i];
          e.s += e.vs; e.d += e.vd; e.vd *= 0.97; e.vie--;
          if (e.vie <= 0 || Math.abs(e.s) > 1.05) { etincelles.splice(i, 1); continue; }
          const x = largeur / 2 + e.s * (largeur / 2);
          const y = yV(x) + sens * (r.epaisseur / 2 + 1.5 + e.d);
          const apparition = Math.min(1, (e.vieMax - e.vie) / 10);
          const scintillement = 0.8 + 0.2 * Math.sin(temps / 120 + e.phase);
          ctx.globalAlpha = apparition * (e.vie / e.vieMax) * scintillement;
          ctx.fillStyle = e.couleur;
          ctx.fillRect(x - e.taille / 2, y - e.taille / 2, e.taille, e.taille);
        }
        ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
      } else {
        etincelles.length = 0;
      }
      contenu.style.transform = `scale(${1 - 0.08 * p})`;
      contenu.style.opacity = String(1 - 0.6 * p);
      curseur.value = String(Math.round(cible * 1000));
      affichage.textContent = Math.round(cible * 100) + ' %';
    }
    function boucle(temps) {
      idImage = 0;
      if (!visible || statique) return;
      dessiner(temps);
      idImage = requestAnimationFrame(boucle);
    }
    const demarrer = () => { if (!idImage && visible && !statique) idImage = requestAnimationFrame(boucle); };
    function appliquerReflet() {
      const actif = r.refletLogo && !statique;
      brillance.style.display = actif ? '' : 'none';
      if (actif) animationReflet.beginElement?.(); else animationReflet.endElement?.();
    }
    function arreterLecture() { cancelAnimationFrame(idLecture); idLecture = 0; boutonLecture.textContent = 'Lecture'; }
    function lire() {
      if (idLecture) { arreterLecture(); return; }
      const duree = 4000;
      const aLaFin = progression() >= 0.995;
      const depart = performance.now() - (aLaFin ? 0 : progression() * duree);
      if (aLaFin) defilement.scrollTop = 0;
      boutonLecture.textContent = 'Pause';
      const pas = maintenant => {
        const p = Math.min(1, (maintenant - depart) / duree);
        defilement.scrollTop = p * longueur;
        if (p < 1) idLecture = requestAnimationFrame(pas); else arreterLecture();
      };
      idLecture = requestAnimationFrame(pas);
    }
    boutonLecture.addEventListener('click', lire);
    curseur.addEventListener('input', () => { arreterLecture(); defilement.scrollTop = (Number(curseur.value) / 1000) * longueur; });
    defilement.addEventListener('wheel', arreterLecture, { passive: true });
    defilement.addEventListener('touchstart', arreterLecture, { passive: true });
    const observateurVisibilite = new IntersectionObserver(entrees => { visible = entrees[0].isIntersecting; demarrer(); });
    observateurVisibilite.observe(scene);
    const observateurTaille = new ResizeObserver(() => { mettreEnPage(); });
    observateurTaille.observe(defilement);
    mettreEnPage();
    appliquerReflet();
    demarrer();
    return {
      mettreAJour(nouveaux) {
        const p = progression();
        r = { ...nouveaux };
        mettreEnPage();
        defilement.scrollTop = p * longueur;
        appliquerReflet();
      },
      detruire() {
        arreterLecture();
        cancelAnimationFrame(idImage); idImage = 0; visible = false;
        observateurVisibilite.disconnect();
        observateurTaille.disconnect();
        scene.remove();
      }
    };
  },
  pointsEtoile(cx, cy, rayon, branches) {
    const points = [];
    for (let i = 0; i < branches * 2; i++) {
      const angle = (Math.PI / branches) * i - Math.PI / 2;
      const d = i % 2 === 0 ? rayon : rayon * 0.62;
      points.push((cx + d * Math.cos(angle)).toFixed(2) + ',' + (cy + d * Math.sin(angle)).toFixed(2));
    }
    return points.join(' ');
  }
};
enregistrerEffet(EffetHeroV);
