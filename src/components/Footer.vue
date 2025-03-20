<template>
    <footer>
      <div class="footer-content">
        <div class="contact-info">
          <p>📩 Email : <a href="mailto:nour.bentabet@etu.univ-lyon1.fr">nour.bentabet@etu.univ-lyon1.fr</a></p>
          <p>📱 Instagram : <a href="https://www.instagram.com/tonprofil" target="_blank">@tonprofil</a></p>
          <p>💼 LinkedIn : <a href="https://www.linkedin.com/in/tonprofil" target="_blank">Mon LinkedIn</a></p>
        </div>
  
        <!-- Bouton pour accéder à la FAQ -->
        <router-link to="/FAQ">
          <button class="faq-button" :style="buttonStyle">Accéder à la FAQ</button>
        </router-link>
  
        <p class="footer-text">© 2025 Nour Bentabet - Tous droits réservés 😊</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  // Fonction pour générer une couleur pastel aléatoire
  const generateRandomPastelColor = () => {
    const r = Math.floor(Math.random() * 128) + 127; // Entre 127 et 255 pour une couleur pastel
    const g = Math.floor(Math.random() * 128) + 127;
    const b = Math.floor(Math.random() * 128) + 127;
    return `rgb(${r}, ${g}, ${b})`;
  };
  
  // Style dynamique pour le bouton
  const buttonStyle = {
    backgroundColor: generateRandomPastelColor()
  };
  </script>
  
  <style scoped>
  footer {
    width: 100%;
    background: linear-gradient(45deg, #FFD1DC, #FFB6C1); /* Dégradé rose très clair */
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    text-align: center;
    padding: 15px 0;
    margin-top: auto; /* Permet au footer de toujours rester en bas */
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    width: 90%;
    max-width: 1200px;
    align-items: center;
    margin: auto;
  }
  
  .contact-info a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  
  .contact-info a:hover {
    text-decoration: underline;
  }
  
  .faq-button {
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .faq-button:hover {
    opacity: 0.9; /* Effet de survol plus léger */
  }
  </style>
  