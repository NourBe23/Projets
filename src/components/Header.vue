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
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  animation: fadeIn 1s ease-out;
  margin-top: 30px;
}

/* Style de l'emoji */
header .emoji {
  font-size: 3rem;
}

/* Style du titre */
header h1 {
  font-size: 2.5rem;
  background: linear-gradient(45deg, #A8E6CF, #e7c1ed);
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Styles pour la navigation */
nav {
  margin-top: 20px;
  display: flex;
  gap: 15px;
}

/* Style des liens */
nav a {
  padding: 10px 15px;
  font-size: 1.2rem;
  color: #4A235A;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid transparent; /* Bordure invisible de base */
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}

/* Ajout de l'encadrement rose saumon au survol */
nav a:hover {
  color: #FF69B4;
  border-color: #FA8072; /* Apparition de l'encadrement */
  box-shadow: 0 0 10px rgba(250, 128, 114, 0.6); /* Effet lumineux */
}
</style>

