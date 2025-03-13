import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Acceuil from './pages/Acceuil.vue';
import Experiences from './pages/Experiences.vue';
import ContentPage from './pages/ContentPage.vue';
import CentresInteret from './pages/CentresInteret.vue';
import MesProjets from './pages/Projets.vue';
import Competences from './pages/Competences.vue';

// Importer Pinia
import { createPinia } from 'pinia';

// Définition des routes
const routes = [
  { path: '/', component: Acceuil }, // La page d'accueil
  { path: '/projects', component: MesProjets }, // La page des projets
  { path: '/competences', component: Competences }, // La page des compétences
  { path: '/experiences', component: Experiences }, // La page des expériences
  { path: '/FAQ', component: ContentPage }, // La page FAQ
  { path: '/CentresInteret', component: CentresInteret }, // La page des centres d'intérêt
];

// Configuration du router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Création de l'application Vue avec Pinia et Vue Router
const app = createApp(App);
app.use(createPinia()); // Ajout de Pinia
app.use(router); // Ajout du router

app.mount('#app');

