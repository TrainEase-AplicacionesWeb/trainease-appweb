<template>
  <div class="container">
    <ToolbarComponent />
    <div class="flex-container">
      <Card class="user-card">
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
      <a href="/home" class="save-button" @click="saveUser">ACEPTAR Y GUARDAR</a>
    </div>
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
.container {
  background-color: #000000; /* Fondo amarillo claro */
  color: #333; /* Texto oscuro para mejor contraste */
  min-height: 100vh; /* Altura mínima para cubrir toda la altura de la ventana */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px; /* Espaciado interno */
}

.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px; /* Ancho máximo para el contenedor */
  margin-top: 20px; /* Espacio superior para separar del toolbar */
}

.user-card {
  width: 100%;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil para la tarjeta */
  border-radius: 8px; /* Bordes redondeados */
  background-color: #fff; /* Fondo blanco para la tarjeta */
  margin-bottom: 20px; /* Espacio inferior para separar del botón */
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
  margin-top: 10px; /* Espacio superior para separar del botón de subida */
}

.user-details {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Espacio entre los grupos de entrada */
}

.input-group {
  display: flex;
  align-items: center;
  gap: 10px; /* Espacio entre la etiqueta y el input */
}

.input-group label {
  color: #666; /* Color de texto más oscuro para mejor contraste */
}

.input-group InputText {
  flex: 1; /* Crece para llenar el espacio disponible */
}

.save-button {
  background-color: #ffc107; /* Botón amarillo */
  color: #ffffff; /* Texto blanco para el botón */
  padding: 10px 20px; /* Aumenta el tamaño del botón */
  text-decoration: none; /* Elimina el subrayado */
  border-radius: 4px; /* Bordes redondeados */
  display: inline-block;
  margin-top: 20px; /* Espacio superior para separar del botón de guardar */
  text-align: center;
}

.save-button:hover {
  background-color: #e0a800; /* Color más oscuro al pasar el mouse */
}
</style>