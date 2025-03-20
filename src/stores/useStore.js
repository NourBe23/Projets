import { defineStore } from 'pinia';
import axios from 'axios';

export const useStore = defineStore('main', {
  state: () => ({
    centres: [
      { 
        title: 'Sortie avec amis', 
        description: 'J\'adore passer du temps avec mes amis, sortir, découvrir de nouveaux endroits et partager des moments joyeux.',
        emoji: '👯‍♂️',
        gifUrl: 'https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Vidéo OK
      },
      { 
        title: 'Cinéma', 
        description: 'Je suis une grande amatrice de cinéma, en particulier les films d\'horreur, les thrillers et les classiques du cinéma.',
        emoji: '🎥',
        gifUrl: 'https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif',
        videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY' // Vidéo OK
      },
      { 
        title: 'Séries Psychologiques', 
        description: 'Les séries psychologiques sont captivantes pour moi, j\'aime les intrigues complexes et les personnages profonds.',
        emoji: '📺',
        gifUrl: 'https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif',
        videoUrl: 'https://www.youtube.com/embed/kQdEHQLHDAI' // Nouvelle vidéo OK
      },
      { 
        title: 'Escalade', 
        description: 'L\'escalade est un sport que j\'adore pratiquer pour repousser mes limites et me reconnecter à la nature.',
        emoji: '🧗‍♂️',
        gifUrl: 'https://media.giphy.com/media/l0ExdMHUDKteztyfe/giphy.gif',
        videoUrl: 'https://www.youtube.com/embed/qko15wCOP80' // Nouvelle vidéo OK
      },
      { 
        title: 'Musique', 
        description: 'La musique occupe une place très importante dans ma vie. J\'écoute différents genres, du rock au jazz en passant par la musique classique.',
        emoji: '🎶',
        gifUrl: 'https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif',
        videoUrl: 'https://www.youtube.com/embed/2Vv-BfVoq4g' // Vidéo OK
      },
      { 
        title: 'Jeux Vidéos', 
        description: 'Les jeux vidéo sont une de mes plus grandes passions. J\'adore découvrir de nouveaux jeux et participer à des compétitions en ligne.',
        emoji: '🎮',
        gifUrl: 'https://media.giphy.com/media/TdfyKrN7HGTIY/giphy.gif',
        videoUrl: 'https://www.youtube.com/embed/pria4wG_Vjs' // Nouvelle vidéo OK
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






