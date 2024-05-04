<template>
  <div class="login-container">
    <h1>Iniciar Sesión</h1>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">Nombre de usuario:</label>
        <input id="username" type="text" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input id="password" type="password" v-model="password" required>
      </div>
      <div class="buttons-group"> <!-- Contenedor para los botones -->
        <a href="/home" class="link-button">Ingresar</a>
        <a href="/signin" class="link-button">Registrar</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      console.log('Intento de inicio de sesión con:', this.username, this.password);
    },
    handleRegister() {
      this.$router.push('/signin');
    }
  }
}
</script>

<style>
.login-container {
  width: 100%;
  max-width: 400px;
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  background-color: #fff;
  border-radius: 8px;
}

body, html {
  height: 100%;
  margin: 0;
  background: url('../../assets/fondo.png') no-repeat center center fixed;
  background-size: cover;
}

.form-group {
  margin-bottom: 20px;
}

.buttons-group {
  display: flex;
  justify-content: space-between; /* Distribuye los botones uniformemente */
}

.link-button {
  flex: 1;  /* Hace que cada botón expanda para llenar el espacio asignado */
  margin: 5px; /* Añade un pequeño margen entre los botones */
  padding: 10px 0;
  text-align: center;
  color: white;
  background-color: #007bff;
  text-decoration: none;
  border-radius: 4px;
}

.link-button:hover {
  background-color: #0056b3;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"], input[type="password"] {
  width: 100%;
  padding: 8px;
  line-height: 20px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
}

h1 {
  text-align: center;
}
</style>
