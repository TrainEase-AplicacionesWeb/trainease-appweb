
<template>
    <div>
      <ToolbarComponent />
      <!-- Asegúrate de que estás usando v-for para pasar cada trainer a TrainerCard -->
      <TrainerCard
        v-for="trainer in trainers"
        :key="trainer.id"
        :trainer="trainer" />
    </div>
  </template>
  

  
<script>
import ToolbarComponent from '../components/toolbar.component.vue';
import TrainerCard from '../components/trainercard.component.vue';
import TrainerService from '../services/trainerinfo.js'; 

export default {
  components: {
    ToolbarComponent,
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
      console.log('Datos de trainers:', this.trainer);
    } catch (error) {
      console.error('Error fetching trainers:', error);
    }
  }
  
}
</script>
  
<style>
/* Estilos adicionales si son necesarios */
</style>
