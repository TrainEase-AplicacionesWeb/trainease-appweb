<template>
  <div class="trainer-card">
    <div class="photo-container">
      <img :src="trainer.photo" :alt="trainer.fullname" class="trainer-photo">
    </div>
    <div class="info-container">
      <h2>{{ trainer.fullname }}</h2>
      <p><strong>Specializations:</strong> {{ trainer.specializations }}</p>
      <p><strong>Experience:</strong> {{ trainer.experience }} Years</p>
      <p><strong>Services Offered:</strong> {{ trainer.services }}</p>
      <p><strong>Price:</strong> ${{ trainer.price }}</p>
      <a href="/routine" class="book-button">Ver Ejercicios</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrainerCard',
  props: {
    trainer: Object
  }
}
</script>

<style scoped>
.trainer-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff0c0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px; /* Ajustado para el carrusel */
  padding: 20px;
  width: 300px; /* Ajusta el ancho de las tarjetas */
  flex: 0 0 auto; /* Asegura que las tarjetas no se expandan */
}

.photo-container {
  width: 100%;
  padding: 10px;
}

.trainer-photo {
  width: 100%;
  height: auto; /* Mantiene la proporción de la imagen */
  border-radius: 8px; /* Cambia a 8px para mantener la coherencia */
  border: 3px solid #ddd;
}

.info-container {
  flex: 1;
  padding: 10px;
  margin: 10px 0;
  color: #333;
  text-align: center; /* Centra el texto */
}

.book-button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 20px; /* Aumenta el tamaño del botón */
  text-decoration: none; /* Elimina el subrayado */
  transition: background-color 0.3s ease; /* Transición suave */
  margin-top: 20px; /* Aumenta el espacio superior del botón */
}

.book-button:hover {
  background-color: #0056b3;
}
</style>
