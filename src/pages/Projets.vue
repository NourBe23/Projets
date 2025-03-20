<template>
  <div class="projets">
    <h1>📂 Mes Projets</h1>

    <div class="section" v-for="(projet, index) in projets" :key="index">
      <h2>{{ projet.nom }}</h2>
      <p>{{ projet.description }}</p>
      <img :src="projet.gif" :alt="projet.nom">
    </div>

    <button @click="goBack">Retour à l'accueil</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goBack = () => {
  router.push('/');
};

// Définition des projets avec leurs GIFs
const projets = ref([
  {
    nom: "👨‍💻 Site web pour malvoyants",
    description: "Développement d'une plateforme web adaptée aux personnes malvoyantes en L2.",
    gif: "https://media1.tenor.com/m/m1Mr-khUDVgAAAAC/anime-hacking.gif" // Nouveau GIF ici ✅
  },
  {
    nom: "👥 Application de répit pour proches aidants",
    description: "Maquette et pré-lancement d'une application destinée aux proches aidants lors de ma L3.",
    gif: "https://healthcaresalute-soinsdesantesalute.com/wp-content/uploads/c4c-tool-kit-1.gif"
  },
  {
    nom: "🩺 Base de données d’échographes durant mon stage en tant qu'assistante technicienne biomédicale",
    description: "Création d'une base de données pour recenser 100 échographes hospitaliers.",
    gif: "https://media1.tenor.com/m/GrA7AzpkDNUAAAAd/alex-geerken-geerken.gif"
  }
]);
</script>

<style scoped>
.projets {
  padding: 20px;
  text-align: center;
  background: linear-gradient(135deg, #F4F1F7, #EADAE2);
  color: #6A4C93;
  font-family: 'Poppins', sans-serif;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.section {
  background: white;
  border-radius: 15px;
  padding: 20px;
  margin: 20px auto;
  width: 60%;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.8rem;
  color: #4A235A;
}

p {
  font-size: 1.2rem;
  color: #333;
}

img {
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-top: 15px;
  border-radius: 10px;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.2);
}

button {
  background-color: #6A4C93;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;
}

button:hover {
  background-color: #5E3D7E;
}
</style>
