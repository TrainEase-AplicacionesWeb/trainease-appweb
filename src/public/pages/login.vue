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
        <button type="submit">Ingresar</button>
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
        // Aquí iría la lógica para verificar las credenciales
        console.log('Intento de inicio de sesión con:', this.username, this.password);
        // Normalmente aquí enviarías las credenciales a un servidor para la verificación
      }
    }
  }
  </script>
  
  <style>
  .login-container {
    max-width: 300px;
    margin: 50px auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 8px;
    line-height: 20px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
  }
  
  button {
    padding: 10px 20px;
    color: white;
    background-color: #007bff;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  