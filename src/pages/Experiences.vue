<template>
    <div class="experiences">
      <Header />
      <h2>✨ Mes Expériences Professionnelles ✨</h2>
  
      <!-- ✅ Bouton pour afficher le formulaire -->
      <button v-if="!showForm" @click="toggleForm">➕ Ajouter une Expérience</button>
  
      <!-- ✅ Formulaire pour ajouter une nouvelle expérience -->
      <div v-if="showForm" class="experience-form">
        <h3>Ajoutez une Expérience 🏆</h3>
        <input v-model="newTitle" type="text" placeholder="Titre de l'expérience">
        <textarea v-model="newDescription" placeholder="Décrivez votre expérience"></textarea>
        <input type="file" @change="uploadImage">
        <button @click="addExperience">Ajouter</button>
      </div>
  
      <!-- ✅ Liste des expériences affichées -->
      <div v-if="experiences.length" class="experience-list">
        <div v-for="(experience, index) in experiences" :key="index" class="experience-item">
          <h3>{{ experience.title }}</h3>
          <p>{{ experience.description }}</p>
          <img v-if="experience.image" :src="experience.image" alt="Image de l'expérience">
  
          <!-- ✅ Bouton de suppression -->
          <button @click="deleteExperience(index)" class="delete-btn">Supprimer</button>
        </div>
      </div>
  
      <p v-else class="no-experience">Aucune expérience ajoutée pour l’instant.</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // Références pour stocker les expériences
  const newTitle = ref('');
  const newDescription = ref('');
  const newImage = ref('');
  const experiences = ref([]);
  const showForm = ref(false); // Affichage du formulaire
  
  // Charger les expériences stockées dans localStorage
  onMounted(() => {
    const storedExperiences = localStorage.getItem('experiences');
    if (storedExperiences) {
      experiences.value = JSON.parse(storedExperiences);
    }
  });
  
  // Fonction pour ajouter une expérience
  const addExperience = () => {
    if (newTitle.value && newDescription.value) {
      experiences.value.push({
        title: newTitle.value,
        description: newDescription.value,
        image: newImage.value
      });
  
      // Sauvegarde dans localStorage
      localStorage.setItem('experiences', JSON.stringify(experiences.value));
  
      // Réinitialiser les champs après ajout
      newTitle.value = '';
      newDescription.value = '';
      newImage.value = '';
      showForm.value = false; // Cacher le formulaire après ajout
    }
  };
  
  // Fonction pour afficher/masquer le formulaire
  const toggleForm = () => {
    showForm.value = !showForm.value;
  };
  
  // Fonction pour charger une image
  const uploadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      newImage.value = URL.createObjectURL(file);
    }
  };
  
  // Fonction pour supprimer une expérience
  const deleteExperience = (index) => {
    experiences.value.splice(index, 1);
    // Sauvegarde dans localStorage après suppression
    localStorage.setItem('experiences', JSON.stringify(experiences.value));
  };
  </script>
  
  <style scoped>
  /* 🌸 Fond beige & rose */
  .experiences {
    text-align: center;
    padding: 40px;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #F5DEB3, #FFB6C1);
    min-height: 100vh;
  }
  
  /* 🎀 Titre principal */
  h2 {
    font-size: 2.5rem;
    color: #4A235A;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
  
  /* ✅ Bouton d'affichage du formulaire */
  button {
    background-color: #FF69B4;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s;
    margin-bottom: 20px;
  }
  
  button:hover {
    background-color: #D87093;
  }
  
  /* ✅ Style du formulaire */
  .experience-form {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 15px;
    padding: 20px;
    width: 60%;
    margin: auto;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 2px solid #FFD700;
    border-radius: 8px;
    font-size: 1rem;
  }
  
  /* 🖼️ Expériences affichées */
  .experience-list {
    margin-top: 30px;
  }
  
  .experience-item {
    background: linear-gradient(135deg, rgba(173, 216, 230, 0.9), rgba(255, 255, 102, 0.9));
    padding: 20px;
    border-radius: 15px;
    margin: 20px auto;
    width: 60%;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  }
  
  .experience-item img {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    margin-top: 10px;
  }
  
  /* 📝 Message si aucune expérience */
  .no-experience {
    font-size: 1.2rem;
    color: #4A235A;
    margin-top: 20px;
  }
  
  /* 🎀 Style du bouton de suppression */
  .delete-btn {
    background-color: #FF6347;
    color: white;
    padding: 8px 12px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s;
  }
  
  .delete-btn:hover {
    background-color: #FF4500;
  }
  </style>
  