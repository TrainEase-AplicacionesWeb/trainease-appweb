<template>
  <div class="container">
    <ToolbarComponent />
    <div class="carousel-container">
      <button class="nav-button left" @click="scrollLeft">&#9664;</button>
      <div class="carousel" ref="carousel">
        <div class="carousel-track">
          <TrainerCard
            v-for="trainer in trainers"
            :key="trainer.id"
            :trainer="trainer" />
        </div>
      </div>
      <button class="nav-button right" @click="scrollRight">&#9654;</button>
    </div>
    <a href="/schedule" class="schedule-button">Ver Horarios</a>
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
  },
  methods: {
    scrollLeft() {
      const cardWidth = this.$refs.carousel.querySelector('.trainer-card').clientWidth;
      this.$refs.carousel.scrollBy({ left: -cardWidth * 4, behavior: 'smooth' });
    },
    scrollRight() {
      const cardWidth = this.$refs.carousel.querySelector('.trainer-card').clientWidth;
      this.$refs.carousel.scrollBy({ left: cardWidth * 4, behavior: 'smooth' });
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

.carousel-container {
  display: flex;
  align-items: center;
  overflow: hidden; /* Oculta las tarjetas que no caben en el contenedor */
  max-width: 1440px; /* Ajusta el ancho máximo para 4 tarjetas */
}

.carousel {
  display: flex;
  flex: 1;
  overflow-x: auto; /* Permite el desplazamiento horizontal */
  scroll-behavior: smooth; /* Desplazamiento suave */
}

.carousel-track {
  display: flex;
  flex-wrap: nowrap; /* Evita que las tarjetas se envuelvan */
}

.nav-button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 2rem;
  padding: 0.5rem;
  margin: 0 1rem;
  transition: background-color 0.3s ease; /* Transición suave */
}

.nav-button:hover {
  background-color: #0056b3;
}

.nav-button.left {
  transform: rotate(180deg);
}

.carousel::-webkit-scrollbar {
  display: none; /* Oculta la barra de desplazamiento */
}

.schedule-button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 20px; /* Aumenta el tamaño del botón */
  text-decoration: none; /* Elimina el subrayado */
  transition: background-color 0.3s ease; /* Transición suave */
  margin-top: 20px; /* Espacio superior para separar del carrusel */
}

.schedule-button:hover {
  background-color: #0056b3;
}
</style>