<template>
  <div class="experiences">
    <Header />
    <h2>✨ Mes Expériences ✨</h2>

    <!-- Stages -->
    <div class="experience-section stage">
      <h3>📑 Stages Professionnels</h3>
      <div class="experience-card stage-card">
        <h4>Stage Assistante Technicienne Biomédicale</h4>
        <p>📍 CHU Nord, Saint-Étienne (Avril - Juin 2024)</p>
        <p>Durant ce stage de 9 semaines, j'ai participé à la gestion et à la maintenance des équipements biomédicaux, en respectant les normes de sécurité et de qualité. J'ai également contribué à la cartographie d'environ 90 appareils biomédicaux.</p>
      </div>
      <div class="experience-card stage-card">
        <h4>Stage Cabinet Infirmier Libéral</h4>
        <p>📍 Vénissieux (Avril - Mai 2023)</p>
        <p>Expérience immersive dans le domaine des soins infirmiers, où j'ai observé et participé à des soins techniques aux patients (injections, suivi médical) et découvert l'utilisation de divers dispositifs médicaux.</p>
      </div>
    </div>

    <!-- Job Étudiant -->
    <div class="experience-section job">
      <h3>👶 Job Étudiant</h3>
      <div class="experience-card job-card">
        <h4>Garde d'enfants</h4>
        <p>Expérience enrichissante en tant que baby-sitter, me permettant de développer mon sens des responsabilités, ma patience et ma capacité à organiser des activités adaptées aux enfants.</p>
      </div>
    </div>

    <!-- Voyages avec carte interactive -->
    <div class="experience-section">
      <h3> Expériences de Voyage</h3>
      <div id="map"></div>
      <div class="country-section">
        <h4>Pays visités :</h4>
        <div class="country-cards">
          <div class="country-card">🇫🇷 France</div>
          <div class="country-card">🇬🇧 Londres</div>
          <div class="country-card">🇪🇸 Espagne</div>
          <div class="country-card">🇩🇪 Allemagne</div>
          <div class="country-card">🇨🇭 Suisse</div>
          <div class="country-card">🇮🇹 Italie</div>
          <div class="country-card">🇩🇿 Algérie</div>
          <div class="country-card">🇹🇳 Tunisie</div>
          <div class="country-card">🇬🇷 Grèce</div>
          <div class="country-card">🇦🇱 Albanie</div>
          <div class="country-card">🇹🇷 Turquie</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

onMounted(() => {
  const map = L.map('map').setView([48.8566, 2.3522], 3);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  const countries = [
    { name: 'France', lat: 46.6034, lon: 1.8883, description: 'Pays de la gastronomie et de la culture, j\'ai visité plusieurs villes, notamment Paris.' },
    { name: 'Londres', lat: 51.5074, lon: -0.1278, description: 'Capitale britannique pleine de charme, entre Big Ben et les musées incontournables.' },
    { name: 'Espagne', lat: 40.4637, lon: -3.7492, description: 'Entre Barcelone et Madrid, j\'ai découvert une culture vibrante et une gastronomie savoureuse.' },
    { name: 'Allemagne', lat: 51.1657, lon: 10.4515, description: 'J\'ai exploré Berlin et son histoire fascinante.' },
    { name: 'Suisse', lat: 46.8182, lon: 8.2275, description: 'Les paysages alpins suisses sont à couper le souffle.' },
    { name: 'Italie', lat: 41.8719, lon: 12.5674, description: 'Rome, Florence, Venise... un voyage dans l\'histoire et l\'art.' },
    { name: 'Algérie', lat: 28.0339, lon: 1.6596, description: 'Un pays aux paysages variés entre désert et mer Méditerranée.' },
    { name: 'Tunisie', lat: 33.8869, lon: 9.5375, description: 'Plages magnifiques et culture riche, j\'ai adoré découvrir la Tunisie.' },
    { name: 'Grèce', lat: 39.0742, lon: 21.8243, description: 'Athènes, Santorin... Un voyage dans l\'Antiquité et des paysages incroyables.' },
    { name: 'Albanie', lat: 41.1533, lon: 20.1683, description: 'Un pays encore méconnu, mais d\'une grande beauté naturelle.' },
    { name: 'Turquie', lat: 38.9637, lon: 35.2433, description: 'Istanbul, Cappadoce... Un mélange fascinant d\'histoire et de modernité.' }
  ];

  countries.forEach(country => {
    L.marker([country.lat, country.lon])
      .addTo(map)
      .bindPopup(`
        <b>${country.name}</b><br>
        <img src="https://via.placeholder.com/150" alt="${country.name}" width="150"><br>
        ${country.description}
      `);
  });
});
</script>

<style scoped>
.experiences {
  text-align: center;
  padding: 40px;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #F5DEB3, #FFB6C1);
  min-height: 100vh;
}

h2 {
  font-size: 2.5rem;
  color: #6D4C41; /* Couleur douce et naturelle */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

h3 {
  color: #6D4C41; /* Couleur douce et agréable */
}

.experience-section {
  margin: 30px auto;
  width: 80%;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
}

.stage-card {
  background: linear-gradient(45deg, #FFDDC1, #FFC3A0, #FFABAB);
  color: #6D4C41; /* Texte doux et en harmonie */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: shimmer 1.5s infinite alternate;
}

.job-card {
  background: linear-gradient(45deg, #e0e0b8, #f7cba2, #f49772);
  color: #6D4C41; /* Texte doux et apaisant */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: shimmer 1.5s infinite alternate;
}

.country-card {
  background: linear-gradient(45deg, #FFE156, #FF7D5B);
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px;
  transition: transform 0.3s ease;
}

.country-card:hover {
  transform: scale(1.1);
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
}

#map {
  width: 100%;
  height: 400px;
  border-radius: 10px;
  margin-top: 20px;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
