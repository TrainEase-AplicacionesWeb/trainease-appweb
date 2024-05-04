<template>
    <div class="form-container">
      
        <h3 class="title">TRAINEASE</h3>
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
          <Button label="Ingresar" class="submit-button" />
        </form>
      
    </div>
</template>
  
  <script>
    import { ref } from 'vue';
    import InputText from 'primevue/inputtext';
    import Password from 'primevue/password';
    import Button from 'primevue/button';
   
    export default {
      name: "Signin",
      components: {
        InputText,
        Password,
        Button,
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
      
        function submitForm() {
          alert('Form submitted! Check the console for details.');
          console.log(form.value);
        }
      
        return { form, submitForm };
      }
    };
  </script>
  
  <style scoped>
  .form-container {
    max-width: 360px;
    margin: 2rem auto;
    background: #fff;
    padding: 1rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  
  .title {
    text-align: center;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  
  .p-field {
    margin-bottom: 1rem;
  }
  
  .p-inputtext, .p-password {
    width: 100%;
    padding: 0.5rem;
  }
  
  .submit-button {
    width: 100%;
    margin-top: 1rem;
  }
  </style>
  