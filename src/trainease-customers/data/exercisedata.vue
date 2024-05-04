<template>
  <div>
    <ExerciseCard
      v-for="exercise in exercises"
      :key="exercise.id"
      :exercise="exercise" />
  </div>
</template>

<script>
import ExerciseCard from '../components/exercisecard.component.vue';

export default {
  components: {
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
        console.log('Datos de exercisesdata.vue:', this.exercises);
      } catch (error) {
        console.error('Error fetching trainers:', error);
      }
    }
}
</script>
