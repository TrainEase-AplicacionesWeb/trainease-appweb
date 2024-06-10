<template>
  <div class="container">
    <ToolbarComponent />
    <div class="grid-container">
      <!-- Asegúrate de que estás usando v-for para pasar cada trainer a TrainerCard -->
      <ExerciseCard
        v-for="exercise in exercises"
        :key="exercise.id"
        :exercise="exercise" />
    </div>
  </div>
</template>

<script>
import ToolbarComponent from '../components/toolbar.component.vue';
import ExerciseCard from '../components/exercisecard.component.vue';
import ExerciseService from '../services/exerciseinfo.js'; 

export default {
  components: {
    ToolbarComponent,
    ExerciseCard
  },
  data() {
    return {
      exercises: []
    };
  },
  async created() {
    try {
      this.exercises = await ExerciseService.getAllExercises();
      console.log('Datos de exercises:', this.exercises);
    } catch (error) {
      console.error('Error fetching exercises:', error);
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
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrar el contenido horizontalmente */
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columnas de igual tamaño */
  gap: 20px; /* Espacio entre las tarjetas */
  justify-items: center; /* Centra las tarjetas horizontalmente */
  width: 100%;
  max-width: 1200px; /* Ajusta según sea necesario */
}

.card-container {
  width: 100%;
}

.exercise-card {
  width: 100%;
}
</style>
