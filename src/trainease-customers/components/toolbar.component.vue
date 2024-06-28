<template>
  <Toolbar class="custom-toolbar">
    <template #start>
      <a href="/home" class="logo-link">
        <img src="//src/assets/Logo.svg" alt="TrainEase Logo" class="logo-image">
      </a>
    </template>

    <template #center>
      <div class="search-container">
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText placeholder="Search" />
        </span>
      </div>
    </template>

    <template #end>
      <div class="flex align-items-center gap-2 end-container">
        <a href="/myprofile" class="profile-button">My Profile</a>
        <Avatar image="" class="profile-avatar" />
      </div>
    </template>
  </Toolbar>
</template>

<script>
import Toolbar from 'primevue/toolbar';
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';

export default {
  components: {
    Toolbar,
    InputText,
    Avatar
  }
}
</script>

<style scoped>
.custom-toolbar {
  background-color: #212121; /* Dark gray background */
  color: #ffffff; /* Ensures text is white for contrast */
  display: flex;
  justify-content: space-between; /* Space between elements */
  align-items: center; /* Align items vertically center */
  width: 100%; /* Make toolbar full width */
  max-width: 1200px; /* Maximum width, adjust as needed */
  margin: 0 auto; /* Center the toolbar */
}

.logo-link {
  background: transparent; /* Elimina el fondo */
  border: none; /* Elimina cualquier borde que pueda estar presente */
  display: inline-block; /* Asegura que el enlace no ocupe más espacio del necesario */
  padding: 0; /* Elimina el padding si existe */
}

.logo-image {
  display: block; /* Elimina espacios extra abajo de la imagen */
  width: auto; /* O ajusta según tus necesidades de diseño */
  height: auto; /* Mantiene la proporción original del logo */
}

.search-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

.p-input-icon-left .pi {
  color: #ccc; /* Icon color inside search */
}

.p-inputtext {
  background-color: #333; /* Darker background for input */
  color: #fff; /* White text color for input */
  border: none; /* No border for input */
}

.end-container {
  display: flex;
  align-items: center;
}

.profile-button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 20px; /* Aumenta el tamaño del botón */
  text-decoration: none; /* Elimina el subrayado */
  transition: background-color 0.3s ease; /* Transición suave */
}

.profile-button:hover {
  background-color: #0056b3;
}

.profile-avatar {
  border-radius: 50%; /* Circular avatar */
  width: 32px;
  height: 32px;
}
</style>