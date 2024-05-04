<template>
    <div>
      <TrainerCard
        v-for="trainer in trainers"
        :key="trainer.id"
        :trainer="trainer" />
    </div>
  </template>
  
  
  <script>
  import TrainerCard from '../components/trainercard.component.vue';
  import TrainerService from '../services/trainerinfo.js'; 
  
  export default {
    components: {
      TrainerCard
    },
    data() {
      return {
        trainers: []
      };
    },
    async created() {
      try {
        this.trainers = await TrainerService.getAllTrainers();
        console.log('Datos de trainers:', this.trainers);
      } catch (error) {
        console.error('Error fetching trainers:', error);
      }
    }
  }
  </script>
  
