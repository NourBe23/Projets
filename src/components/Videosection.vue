<template>
    <div class="video-section">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <iframe 
        v-if="videoUrl" 
        :src="videoUrl" 
        frameborder="0" 
        allow="autoplay; encrypted-media" 
        allowfullscreen>
      </iframe>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    title: String,
    description: String,
    videoUrl: String
  });
  </script>
  
  <style scoped>
  .video-section {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }
  </style>
  
  
  