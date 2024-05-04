
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

import Button from 'primevue/button'; // Asegúrate de que 'Button' es exportado por PrimeVue

export default {
    name: 'TrainerCard',
    components: {
      Button
    },
    props: {
      trainer: Object
    }
}
</script>

<style scoped>
.trainer-card {
    display: flex;
    background-color: #fff0c0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    margin: 20px;
    padding: 20px;
}

.photo-container {
    flex: 0 0 150px;
    padding: 10px;
}

.trainer-photo {
    width: 100%;
    border-radius: 50%;
    border: 3px solid #ddd;
}

.info-container {
    flex: 1;
    padding: 10px;
    margin: 0 0 10px 0;
    color: #333;
}

.book-button {
    background-color: #007BFF;
    color: rgb(0, 0, 0);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

.book-button:hover {
    background-color: #0056b3;
}
</style>
