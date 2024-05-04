
<template>
    <div>
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
/* Estilos adicionales si son necesarios */
</style>