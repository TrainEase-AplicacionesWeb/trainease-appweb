<template>
  <Toolbar class="custom-toolbar">
    <template #start>
      <a href="/home" class="logo-link">
        <img src="../../assets/Logo.svg" alt="TrainEase Logo" class="logo-image">
      </a>
    </template>

    <template #center>
      <span class="p-input-icon-left" >
        <i class="pi pi-search" />
        <InputText placeholder="Search" />
      </span>
    </template>

    <template #end>
      <div class="flex align-items-center gap-2">
        <a label="My Profile" href="/myprofile" class="profile-button">My Profile</a>
        <Avatar image="" class="profile-avatar" />
      </div>
    </template>
  </Toolbar>
</template>

<script>
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';

export default {
  components: {
    Toolbar,
    Button,
    InputText,
    Avatar
  }
}
</script>

<style scoped>
.custom-toolbar {
  background-color: #212121; /* Dark gray background */
  color: #ffffff; /* Ensures text is white for contrast */
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
.profile-button {
  background-color: #f0f0f0; /* Light gray for button */
  color: #333333; /* Dark text color for button */
  border: none; /* No border for a cleaner look */
}

.profile-avatar {
  border-radius: 50%; /* Circular avatar */
  width: 32px;
  height: 32px;
}

.p-input-icon-left .pi {
  color: #ccc; /* Icon color inside search */
}

.p-inputtext {
  background-color: #333; /* Darker background for input */
  color: #fff; /* White text color for input */
  border: none; /* No border for input */
}
</style>
