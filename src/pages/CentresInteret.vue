<template>
    <div class="centresinteret">
      <h1>🎭 Mes Centres d'Intérêt</h1>
  
      <!-- Boucle sur les centres d'intérêt -->
      <div v-for="centre in store.centres" :key="centre.title" class="section">
        <h2 class="dynamic-text">{{ centre.title }} <span>{{ centre.emoji }}</span></h2>
        <p class="description">{{ centre.description }}</p>
        
        <!-- Affichage du GIF -->
        <img v-if="centre.gifUrl" :src="centre.gifUrl" :alt="centre.title" class="gif" />
  
        <!-- Section vidéo spécifique à chaque centre -->
        <VideoSection 
          :title="`Vidéo sur ${centre.title}`"
          :description="`Une vidéo en lien avec mon intérêt pour ${centre.title}.`"
          :videoUrl="centre.videoUrl"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { useStore } from '../stores/useStore';
  import VideoSection from '../components/VideoSection.vue';
  import { onMounted } from 'vue';
  
  const store = useStore();
  
  // Charger les centres d'intérêt depuis l'API
  onMounted(() => {
    store.fetchCentres();
  });
  </script>
  
  <style scoped>
  .centresinteret {
    padding: 20px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
  }
  
  h1 {
    font-size: 2.5rem;
    color: #4A235A;
    margin-bottom: 30px;
  }
  
  .section {
    margin-bottom: 50px;
    background-color: #f0f8ff; /* Couleur pastel */
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .dynamic-text {
    font-size: 2rem;
    color: #4A235A;
  }
  
  .description {
    font-size: 1.2rem;
    color: #34495e;
    margin-top: 10px;
  }
  
  .gif {
    width: 300px;
    height: auto;
    border-radius: 10px;
    margin-top: 10px;
  }
  </style>
  
  