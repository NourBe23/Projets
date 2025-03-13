<template>
  <header>
    <span class="emoji">🧸</span>
    <h1>Bienvenue sur mon Portfolio</h1>
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/projects">Mes Projets</router-link>
      <router-link to="/competences">Mes Compétences</router-link>
      <router-link to="/experiences">Mes Expériences 📖</router-link> 
      <router-link to="/CentresInteret">Mes Centres d'Intérêt</router-link>

    </nav>
  </header>
</template>

<script setup>
// Pas de script nécessaire ici
</script>

<style scoped>
/* Import de la police Poppins depuis Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

/* Animation pour l'apparition du titre */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

header {
  font-family: 'Poppins', sans-serif; /* Applique la police Poppins */
  font-size: 2.5rem;
  display: flex;
  flex-direction: column; /* Organise le contenu en colonne */
  align-items: center; /* Centre horizontalement */
  justify-content: center; /* Centre verticalement */
  gap: 10px; /* Espace entre l'emoji et le titre */
  animation: fadeIn 1s ease-out; /* Animation pour faire apparaître le titre */
  margin-top: 30px;
}

/* Style de l'emoji */
header .emoji {
  font-size: 3rem; /* Taille de l'emoji */
}

/* Style du titre */
header h1 {
  font-size: 2.5rem;
  background: linear-gradient(45deg, #A8E6CF, #e7c1ed); /* Dégradé vert menthe pastel */
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); /* Ombre légère au texte */
  text-align: center;
}

/* Styles pour la navigation */
nav {
  margin-top: 20px;
}

nav a {
  margin: 0 15px;
  font-size: 1.2rem;
  color: #4A235A;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #FF69B4; /* Changement de couleur au survol */
}
</style>
