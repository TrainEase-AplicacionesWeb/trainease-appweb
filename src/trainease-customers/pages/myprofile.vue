<template>

    <ToolbarComponent/>

    <div class="flex-container">
      <Card>
        <template #title>
          <div class="image-upload-container">
            <img :src="user.photo || 'https://via.placeholder.com/100'" class="user-image" />
            <Button label="Upload" class="p-button-outlined upload-button" />
          </div>
        </template>
  
        <template #content>
          <div class="user-details">
            <div class="input-group">
              <label for="fullName">Name:</label>
              <InputText id="fullName" v-model="user.fullName" placeholder="Full Name" />
              <Button icon="pi pi-pencil" class="p-button-rounded p-button-warning" />
            </div>
    
            <div class="input-group">
              <label for="password">Password:</label>
              <InputText id="password" v-model="user.password" type="password" placeholder="Password" />
              <Button icon="pi pi-pencil" class="p-button-rounded p-button-warning" />
            </div>
    
            <div class="input-group">
              <label for="mobileNumber">Mobile Number:</label>
              <InputText id="mobileNumber" v-model="user.mobileNumber" type="tel" placeholder="Mobile Number" />
              <Button icon="pi pi-pencil" class="p-button-rounded p-button-warning" />
            </div>
          </div>
        </template>
      </Card>
      <Button label="ACEPTAR Y GUARDAR" class="p-button-raised p-button-warning save-button" />
      <a href=""></a>
    </div>
  </template>
  
  
  <script>
  import Button from 'primevue/button';
  import Card from 'primevue/card';
  import InputText from 'primevue/inputtext';
  import ToolbarComponent from '../components/toolbar.component.vue';

  export default {
    name: 'UserProfile',
    components: {
      Card,
      Button,
      InputText,
      ToolbarComponent
    },
    data() {
      return {
        user: {
          fullName: 'John Doe',
          password: 'password123',
          mobileNumber: '+1234567890',
          photo: 'https://via.placeholder.com/100'  // Default image URL
        }
      };
    },
    methods: {
      saveUser() {
        console.log('User saved:', this.user);
        // This is where you would normally handle the API call to save the user data
      }
    }
  }
  </script>
  
  <style scoped>
  .flex-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; /* Hace que el contenedor ocupe toda la altura de la vista */
    background-color: #fff3cd; /* Fondo amarillo claro */
  }
  
  .card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil para la tarjeta */
    border-radius: 8px; /* Bordes redondeados */
  }
  
  .image-upload-container {
    text-align: center; /* Centra la imagen y el botón de subida */
    margin-bottom: 20px;
  }
  
  .user-image {
    width: 100px;
    height: 100px;
    border-radius: 50%; /* Foto redonda */
    border: 3px solid #ffc107; /* Borde amarillo */
  }
  
  .upload-button {
    background-color: #ffc107; /* Botón amarillo */
    color: #ffffff; /* Texto blanco para el botón */
  }
  
  .input-group {
    display: flex;
    align-items: center;
    margin-bottom: 20px; /* Mejor espaciado entre grupos de entrada */
  }
  
  .input-group label {
    color: #666; /* Color de texto más oscuro para mejor contraste */
    margin-right: 10px; /* Espacio entre etiqueta y entrada */
  }
  
  .input-group InputText, .input-group Button {
    flex-grow: 1;
  }
  
  .save-button {
    margin-top: 20px; /* Espacio antes del botón de guardar */
  }
  </style>
  