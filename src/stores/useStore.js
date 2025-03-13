import { defineStore } from 'pinia';
import axios from 'axios';

export const useStore = defineStore('main', {
  state: () => ({
    centres: [
      { 
        title: 'Sortie avec amis', 
        description: 'J\'adore passer du temps avec mes amis...', 
        emoji: '👯‍♂️',
        gifUrl: 'https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' 
      },
      { 
        title: 'Cinéma', 
        description: 'Je suis un grand amateur de cinéma...', 
        emoji: '🎥',
        gifUrl: 'https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif',
        videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY' 
      },
      { 
        title: 'Séries Psychologiques', 
        description: 'Les séries psychologiques sont captivantes...', 
        emoji: '📺',
        gifUrl: 'https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif',
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID' 
      },
      { 
        title: 'Escalade', 
        description: 'L\'escalade est un sport qui me passionne...', 
        emoji: '🧗‍♂️',
        gifUrl: 'https://media.giphy.com/media/l0ExdMHUDKteztyfe/giphy.gif',
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID' 
      }
    ],
    loading: false,
    error: null
  }),

  actions: {
    async fetchCentres() {
      this.loading = true;
      this.error = null;

      try {
        // Simulation d'un appel API pour récupérer des centres d'intérêt avec GIFs et vidéos
        const response = await axios.get('https://api.example.com/centres');
        this.centres = response.data;
      } catch (err) {
        console.error('Erreur lors de la récupération des centres:', err);
        this.error = 'Impossible de charger les centres d\'intérêt.';
      } finally {
        this.loading = false;
      }
    }
  }
});




