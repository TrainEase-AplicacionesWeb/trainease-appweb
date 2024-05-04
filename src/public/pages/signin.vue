<template>
  <div class="form-container">
    <img src="../../assets/Logo.svg" alt="">
    <p></p>
    <form @submit.prevent="submitForm">
      <div class="p-field">
        <label for="fullname">Full Name</label>
        <InputText id="fullname" v-model="form.fullname" placeholder="Enter your full name" />
      </div>
      <div class="p-field">
        <label for="email">Email</label>
        <InputText id="email" v-model="form.email" placeholder="Enter your email" />
      </div>
      <div class="p-field">
        <label for="cellphone">Cellphone</label>
        <InputText id="cellphone" v-model="form.cellphone" placeholder="Enter your cellphone number" />
      </div>
      <div class="p-field">
        <label for="dni">DNI</label>
        <InputText id="dni" v-model="form.dni" placeholder="Enter your DNI" />
      </div>
      <div class="p-field">
        <label for="password">Password</label>
        <Password id="password" v-model="form.password" placeholder="Enter your password" toggleMask feedback />
      </div>
      <div class="p-field">
        <label for="confirmPassword">Confirm Password</label>
        <Password id="confirmPassword" v-model="form.confirmPassword" placeholder="Confirm your password" toggleMask feedback />
      </div>
      <div class="button-container">
        <a href="/" class="link-button">Ingresar</a>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';

export default {
  name: "Signin",
  components: {
    InputText,
    Password
  },
  setup() {
    const form = ref({
      fullname: '',
      email: '',
      cellphone: '',
      dni: '',
      password: '',
      confirmPassword: ''
    });

    const submitForm = () => {
      alert('Form submitted! Check the console for details.');
      console.log(form.value);
    };

    return { form, submitForm };
  }
};
</script>

<style scoped>
.form-container {
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

.p-field {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 5px;
}

.p-inputtext, .p-password {
  width: 100%;
  padding: 0.5rem;
}

.link-button {
  display: block;
  width: 100%;
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
</style>
