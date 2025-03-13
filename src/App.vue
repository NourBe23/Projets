<template>
  <div class="app-container">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style>
/* 🌈 Fond dégradé holographique animé */
body {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: linear-gradient(-45deg, #c7a4ff, #f5deb3, #d6c3fc, #ffecb3);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  color: #ffb6c1; /* Texte en rose clair */
}

/* Animation du fond */
@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* 📌 Fixe le footer en bas */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

router-view {
  flex-grow: 1;
}
</style>
