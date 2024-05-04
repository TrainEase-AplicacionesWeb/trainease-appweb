
<template>
  <div class="container">
    <ToolbarComponent />
    <!-- Asegúrate de que estás usando v-for para pasar cada trainer a TrainerCard -->
    <ExerciseCard
      v-for="exercise in exercises"
      :key="exercise.id"
      :exercise="exercise" />
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
    console.log('Datos de exercises:', this.exercise);
  } catch (error) {
    console.error('Error fetching exercises:', error);
  }
}

}
</script>

<style>
.container {
background-color: #ffdc7a; /* Fondo negro para el contenedor */
color: #fff; /* Texto blanco para mejor contraste */
min-height: 100vh; /* Altura mínima para cubrir toda la altura de la ventana */
padding: 20px; /* Espaciado interno */
}
</style>