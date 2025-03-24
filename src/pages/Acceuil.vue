<template>
  <div class="acceuil">
    <!-- Section 1: Introduction -->
    <section class="intro">
      <Header />
      <div class="content">
        <h2 class="title">Nour Bentabet - Étudiante en 3ème année de Licence Sciences pour la Santé</h2>
        <p class="description">Jeune passionnée par l'innovation en santé et aspirante ingénieure biomédicale. Ceci est mon site web personnel sous forme de portfolio pour partager mes projets, compétences et expériences ainsi que mes centres d'intérêts.</p>
        <div class="square-image">
          <img src="/src/health-tech.jpg" alt="Innovation en santé" />
        </div>
      </div>
      <nav>
        <router-link to="/projects">
          <button class="dynamic-btn">Mes Projets</button>
        </router-link>

        <router-link to="/competences">
          <button class="dynamic-btn">Mes Compétences</button>
        </router-link>

        <router-link to="/experiences">
          <button class="dynamic-btn">Mes Expériences 📖</button>
        </router-link>
        
      </nav>
    </section>

    <!-- Section À propos de moi -->
    <div class="about-section">
      <h2>Qui suis-je ?</h2>
      <div class="about-content">
        <div class="image-container">
          <img v-if="image" :src="image" alt="Image à propos" class="profile-image" />
        </div>
        <div class="description">
          <p class="bio-text">Je suis Nour Bentabet, étudiante en Licence Sciences pour la Santé, passionnée par le développement et le design, et je cherche à innover dans le domaine de la santé.</p>
        </div>
        <button class="add-image-btn" @click="triggerFileInput">Ajouter une image</button>
        <input type="file" ref="fileInput" class="image-upload" @change="handleImageUpload" hidden />
      </div>
    </div>

    <!-- Section Contact -->
    <section id="contact" class="contact">
      <h3>📩 Me Contacter</h3>
      <form @submit.prevent="sendMessage">
        <input v-model="name" type="text" placeholder="Votre Nom" required />
        <input v-model="email" type="email" placeholder="Votre Email" required />
        <textarea v-model="message" placeholder="Votre Message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter();

//  Vérifie si une image existe déjà dans LocalStorage et charge-la
onMounted(() => {
  const savedImage = localStorage.getItem('profileImage');
  if (savedImage) {
    console.log("Image trouvée dans LocalStorage !");
    image.value = savedImage;
  } else {
    console.log("Aucune image trouvée dans LocalStorage.");
  }
});

// 📌 Fonction pour gérer l'upload de l'image et la sauvegarder
const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      image.value = reader.result;
      localStorage.setItem('profileImage', reader.result);
      console.log("Image sauvegardée !");
    };
    reader.readAsDataURL(file);
  }
};

// 📌 Fonction pour déclencher l'input file
const triggerFileInput = () => {
  document.querySelector('input[type="file"]').click();
};

// Fonction pour gérer l'envoi du message
const sendMessage = () => {
  alert(`Merci ${name.value}, votre message a été envoyé !`);
  name.value = '';
  email.value = '';
  message.value = '';
};

// Déclaration des variables pour les messages de contact
const name = ref('');
const email = ref('');
const message = ref('');
const image = ref(null); // Pour l'image de profil
</script>

<style scoped>
.acceuil {
  font-family: 'Poppins', sans-serif;
}

/* Section d'introduction */
.intro {
  background: linear-gradient(135deg, #FF69B4, #FFC0CB);
  padding: 50px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

/* Titre principal */
.title {
  font-size: 2rem;
  color: #4A235A;
  margin-top: 30px;
}

.description {
  color: #6A4E79;
  margin-top: 10px;
  font-size: 1.1rem;
}

/* Conteneur carré pour l'image */
.square-image {
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 10px;
  margin: 20px auto;
  overflow: hidden;
}

.square-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Boutons dynamiques */
.dynamic-btn {
  background-color: #FF69B4;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin: 10px;
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;
}

.dynamic-btn:hover {
  transform: scale(1.1);
  background-color: #D87093;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Section À propos */
.about-section {
  text-align: center;
  margin-top: 40px;
}

h2 {
  font-size: 2.5rem;
  color: #4A235A;
  margin-bottom: 30px;
}

.image-container {
  width: 150px;
  height: 150px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  background: linear-gradient(to right, #7B68EE, #D8BFD8);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.add-image-btn {
  background-color: #FF69B4;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1rem;
  transition: 0.3s;
}

.add-image-btn:hover {
  background-color: #D87093;
}

.bio-text {
  font-size: 1.2rem;
  color: #6A4E79;
  margin-top: 20px;
  background: -webkit-linear-gradient(#6A4E79, #D8BFD8);
  -webkit-background-clip: text;
  color: transparent;
}

/* Section Contact */
.contact {
  background: rgba(255, 255, 255, 0.9);
  padding: 40px 20px;
  text-align: center;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
}

.contact h3 {
  font-size: 1.8rem;
  color: #4A235A;
}

.contact form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact input, .contact textarea {
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  border: 2px solid #D8BFD8;
  border-radius: 8px;
  font-size: 1rem;
}

.contact button {
  background-color: #f1aace;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
}

.contact button:hover {
  background-color: #D87093;
}
</style>
