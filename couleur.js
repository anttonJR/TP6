const bouton = document.getElementById('genererBtn');
const codeCouleur = document.getElementById('codeCouleur');

function genererCouleur() {
    // Génère une couleur hexadécimale aléatoire
    const couleur = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    
    // Change le fond
    document.body.style.backgroundColor = couleur;
    
    // Affiche le code couleur
    codeCouleur.textContent = couleur;
}

bouton.addEventListener('click', genererCouleur);


