<template>
  <div class="competences">
    <Header />
    <h2 class="animated-text">✨ Mes Compétences ✨</h2>

    <!-- Section des compétences humaines -->
    <div class="section">
      <h3>🧠 Compétences Humaines</h3>
      <ul>
        <li>🎯 Sens de l'organisation</li>
        <li>🔎 Esprit critique</li>
        <li>💬 Capacité d'adaptation</li>
        <li>🛠 Gestion des plannings</li>
        <li>👩‍⚕️ Sens des responsabilités</li>
      </ul>

      <!-- Image de chat de l'API -->
      <div v-if="catImage">
        <img class="aesthetic-image-small" :src="catImage" alt="Chat API">
      </div>
      <p v-else>🐱 Chargement d'une image de chat...</p>
    </div>

    <!-- Section des compétences techniques -->
    <div class="section">
      <h3>🔬 Compétences Techniques</h3>
      <ul>
        <li>📜 Connaissance des normes réglementaires (ISO, MDR, etc.)</li>
        <li>📂 Gestion documentaire & suivi de conformité</li>
        <li>💻 Maîtrise de la suite Office (Excel, Word, PowerPoint)</li>
        <li>⚙️ Création de cartographie d’appareils biomédicaux</li>
      </ul>
      <img class="aesthetic-image-large" src="https://i.pinimg.com/736x/6c/77/3a/6c773a6a203b8c0a9d63ec3a2564a639.jpg" alt="Image esthétique 2">
    </div>

    <!-- Section des langues -->
    <div class="section">
      <h3>🌍 Langues Parlées</h3>
      <ul>
        <li>🇬🇧 Anglais - B2</li>
        <li>🇫🇷 Français - Natif</li>
        <li>🇸🇦 Arabe - C1</li>
        <li>🇩🇪 Allemand - A2</li>
      </ul>
      <div class="langue-images">
        <div v-for="(image, index) in catLangImages" :key="index">
          <img :src="image" alt="Chat langue">
        </div>
      </div>
    </div>

    <!-- Effet de paillettes -->
    <div class="paillettes-container">
      <div class="paillettes"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const catImage = ref(null);
const catLangImages = ref([]);

const fetchCatImage = async () => {
  try {
    const response = await axios.get('https://cataas.com/cat?json=true');
    if (response.data && response.data.url) {
      catImage.value = `https://cataas.com${response.data.url}`;
    }
  } catch (error) {
    console.error("Erreur lors du chargement de l'image de chat:", error);
  }
};

const fetchLangCats = async () => {
  try {
    const response = await axios.get('https://cataas.com/api/cats?limit=4');
    if (response.data && response.data.length > 0) {
      catLangImages.value = response.data.map(cat => `https://cataas.com/cat/${cat._id}`);
    }
  } catch (error) {
    console.error("Erreur lors du chargement des images de chats:", error);
  }
};

onMounted(() => {
  fetchCatImage();
  fetchLangCats();
});
</script>

<style scoped>
/* 🌸 Fond général */
.competences {
  text-align: center;
  padding: 40px;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #F5DEB3, #ffb3e6);
  min-height: 100vh;
}

/* ✨ Effet de texte qui s'écrit */
.animated-text {
  font-size: 2.5rem;
  color: #acebea;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-right: 3px solid #acebea;
  white-space: nowrap;
  width: 0;
  animation: typing 3s steps(30, end) forwards, blink 0.7s infinite;
}

/* 🎥 Animation de l'effet d'écriture */
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  50% { border-color: transparent; }
}

/* Section Styles */
.section {
  background: linear-gradient(135deg, rgba(39, 49, 238, 0.9), rgba(255, 102, 102, 0.9));
  border-radius: 15px;
  padding: 20px;
  margin: 20px auto;
  width: 60%;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.section:hover {
  transform: scale(1.02);
}

/* 🌍 Langue Images */
.langue-images {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
}

.langue-images img {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.langue-images img:hover {
  transform: scale(1.1);
}

/* ✨ Effet de paillettes en bas */
.paillettes-container {
  width: 100%;
  height: 100px;
  position: relative;
  overflow: hidden;
}

.paillettes {
  position: absolute;
  width: 100%;
  height: 100px;
  background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,215,0,0.6) 100%);
  animation: sparkle 3s infinite alternate;
}

@keyframes sparkle {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-20px); opacity: 0.5; }
}
</style>
