const bouton = document.getElementById('genererBtn');
const codeCouleur = document.getElementById('codeCouleur');

function genererCouleur() {
    // Génère une couleur hexadécimale aléatoire
    const couleur = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    
    // Change le fond
    document.body.style.backgroundColor = couleur;
    
    // Affiche le code couleur
    codeCouleur.textContent = couleur;
    
    // Met à jour l'aperçu visuel
    const apercu = document.getElementById('apercuCouleur');
    apercu.style.backgroundColor = couleur;
}

// Interaction 1 : Clic sur le bouton
bouton.addEventListener('click', genererCouleur);

// Interaction 2 : Touche Espace
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        e.preventDefault();
        genererCouleur();
    }
});

// Interaction 3 : Clic sur le code couleur pour copier
codeCouleur.addEventListener('click', function() {
    if (codeCouleur.textContent) {
        navigator.clipboard.writeText(codeCouleur.textContent);
        codeCouleur.textContent = 'Copié !';
        setTimeout(() => {
            genererCouleur();
        }, 500);
    }
});

// Aperçu visuel de la couleur (fonctionnalité originale)
const apercu = document.getElementById('apercuCouleur');

// Fonctionnalité palette de couleurs
const paletteBtn = document.getElementById('paletteBtn');
const paletteDiv = document.getElementById('palette');

function creerPalette() {
    paletteDiv.innerHTML = '';
    
    for (let i = 0; i < 5; i++) {
        const couleur = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        
        const couleurItem = document.createElement('div');
        couleurItem.className = 'palette-item';
        couleurItem.style.backgroundColor = couleur;
        
        const code = document.createElement('div');
        code.className = 'palette-code';
        code.textContent = couleur;
        code.title = 'Cliquez pour copier';
        
        code.addEventListener('click', function() {
            navigator.clipboard.writeText(couleur);
            code.textContent = 'Copié !';
            setTimeout(() => {
                code.textContent = couleur;
            }, 500);
        });
        
        couleurItem.appendChild(code);
        paletteDiv.appendChild(couleurItem);
    }
}

paletteBtn.addEventListener('click', creerPalette);

// Génère une couleur au chargement
genererCouleur();


