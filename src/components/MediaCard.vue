<template>
  <div class="acceuil">
    <header>
      <h1>Bienvenue sur mon Portfolio</h1>
      <p>Développeuse & Designer passionnée par l'innovation en santé</p>
    </header>

    <div class="content">
      <div class="image-container">
        <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Image esthétique 1" class="img1" />
        <img src="https://www.w3schools.com/w3images/nature.jpg" alt="Image esthétique 2" class="img2" />
      </div>

      <div class="buttons">
        <button @click="goToProjects">Mes Projets</button>
        <button @click="goToCompetences">Mes Compétences</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// Fonctions pour naviguer vers les autres pages
const goToProjects = () => {
  router.push('/projects');
};

const goToCompetences = () => {
  router.push('/comp');
};
</script>

<style scoped>
.acceuil {
  text-align: center;
  background-color: #F8E1F4;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

header {
  margin-bottom: 30px;
}

h1 {
  font-size: 3rem;
  color: #6A4C93;
}

p {
  font-size: 1.5rem;
  color: #8A2BE2;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.image-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

img {
  width: 250px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.buttons {
  display: flex;
  gap: 20px;
}

button {
  background-color: #FF69B4;
  color: white;
  padding: 15px 30px;
  font-size: 1.2rem;
  margin: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: #D87093;
}
</style>

