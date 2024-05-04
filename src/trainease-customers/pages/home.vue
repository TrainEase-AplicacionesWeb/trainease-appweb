<template>
  <div class="container">
    <ToolbarComponent />
    <!-- Usando v-for para renderizar cada TrainerCard -->
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
    const trainersData = await TrainerService.getAllTrainers();
    this.trainers = trainersData; // Asegúrate de que los datos están siendo asignados correctamente
    console.log('Datos de trainers:', this.trainers);
  } catch (error) {
    console.error('Error fetching trainers:', error);
  }
}
}
</script>

<style scoped>
.container {
background-color: #000000; /* Fondo negro para el contenedor */
color: #fff; /* Texto blanco para mejor contraste */
min-height: 100vh; /* Altura mínima para cubrir toda la altura de la ventana */
padding: 20px; /* Espaciado interno */
}
</style>
