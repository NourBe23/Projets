<template>
  <div class="content-page">
    <h2>✨ Questions Fréquentes (FAQ) ✨</h2>

    <div class="faq-section">
      <div class="faq-item">
        <h3 class="faq-question">💻 Quelles technologies maîtrises-tu ?</h3>
        <p class="faq-answer">Je maîtrise des technologies comme React, Vue.js, Node.js, Python, ainsi que des outils comme Docker et Kubernetes pour les applications modernes.</p>
      </div>

      <div class="faq-item">
        <h3 class="faq-question">🤝 Comment puis-je collaborer avec toi sur un projet ?</h3>
        <p class="faq-answer">Tu peux me contacter directement par email ou via les plateformes de collaboration pour discuter des projets sur lesquels tu aimerais travailler ensemble.</p>
      </div>

      <div class="faq-item">
        <h3 class="faq-question">🔮 Quels sont les types de projets que tu cherches à réaliser dans le futur ?</h3>
        <p class="faq-answer">Je cherche à travailler sur des projets innovants dans le domaine de la santé, de l'IoT, ou sur des projets open-source. Je suis également intéressé par des missions dans le domaine du développement durable.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Pas de logique spécifique ici
</script>

<style scoped>
/* Style de la page FAQ */
.content-page {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  min-height: 100vh;
  padding-bottom: 60px; /* Pour éviter que le footer couvre la dernière partie */
}

.content-page h2 {
  color: #4A235A;
  font-size: 2rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: color 0.3s ease;
}

.content-page h2:hover {
  color: #FF69B4; /* Change la couleur au survol */
}

/* Style des questions et réponses */
.faq-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

.faq-item {
  background: linear-gradient(135deg, rgba(173, 216, 230, 0.9), rgba(255, 255, 102, 0.9)); /* Dégradé */
  border-radius: 10px;
  padding: 15px;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.faq-item:hover {
  box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.3); /* Ombre plus marquée au survol */
  transform: scale(1.02); /* Légère agrandissement au survol */
}

.faq-question {
  color: #f461c8;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  transition: color 0.3s ease;
}

.faq-question:hover {
  color: #D87093; /* Changement de couleur au survol */
}

.faq-answer {
  color: #333;
  font-size: 1.1rem;
  line-height: 1.6;
  transition: color 0.3s ease;
}

.faq-answer:hover {
  color: #555; /* Légère modification de la couleur au survol */
}

/* Assurer la responsivité de la FAQ */
@media (max-width: 768px) {
  .content-page {
    padding: 10px;
  }

  .faq-question {
    font-size: 1.2rem;
  }

  .faq-answer {
    font-size: 1rem;
  }

  .faq-item {
    padding: 10px;
  }
}
</style>

