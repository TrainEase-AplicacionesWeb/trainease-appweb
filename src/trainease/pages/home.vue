<template>
    <div>
      <!-- Usar el componente de toolbar aquí -->
      <toolbarComponent />
    </div>
  </template>
  
  <script>
  import toolbarComponent from '../components/toolbar.component.vue'; // Asegúrate de que la ruta es correcta
  
  export default {
    components: {
      toolbarComponent // Registrar el componente
    }
  }
  </script>
  
  <style>
  /* Estilos adicionales si son necesarios */
  </style>
  