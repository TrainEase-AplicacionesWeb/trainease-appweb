<template>
  <div class="card-container">
    <Card>
      <template #content>
        <h3>{{ exercise.name }}</h3>
        <div class="exercise-details">
          <div class="photo-container">
            <img :src="exercise.photo" alt="Exercise Image" class="exercise-photo">
          </div>
          <div class="info-container">
            <p><strong>Peso:</strong> {{ exercise.weight }} kg</p>
            <p><strong>Series:</strong> {{ exercise.series }}</p>
            <p><strong>Repeticiones:</strong> {{ exercise.reps }}</p>
            <p><strong>Descanso:</strong> {{ exercise.rest }} segundos</p>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from 'primevue/card';

export default {
  name: 'ExerciseCard',
  components: {
    Card
  },
  props: {
    exercise: Object
  },
  mounted() {
    console.log('Exercise data:', this.exercise); // Esto mostrará los datos en la consola del navegador
  }
}
</script>

<style scoped>
.card-container {
  max-width: 300px; /* Ajusta el ancho máximo de la tarjeta */
  margin: 10px; /* Aumenta el margen para separar más las tarjetas */
}

.exercise-details {
  display: flex;
  align-items: center;
  margin-top: 10px; /* Espacio adicional después del título */
}

.photo-container {
  flex: 0 0 auto;
  margin-right: 20px; /* Espacio entre la foto y la información */
}

.exercise-photo {
  width: 100px; /* Controla el tamaño de la imagen */
  height: 100px;
  border-radius: 5%; /* Foto redonda */
}

.info-container {
  flex: 1;
  border-left: 2px solid #ccc; /* Línea divisoria como en la imagen */
  padding-left: 20px;
}

.info-container p {
  margin: 5px 0; /* Margen entre parágrafos para mejor legibilidad */
}
</style>