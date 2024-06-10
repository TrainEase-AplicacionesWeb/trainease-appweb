<template>

  <ToolbarComponent />

  <div class="flex-container">
    <!-- FAQ Section in a Card -->
    <Card class="faq-container">
      <template #title>
        <h2 class="faq-title">Frequently Asked Questions</h2>
      </template>
      <template #content>
        <div class="faq-grid">
          <Card class="faq-card" v-for="faq in faqs" :key="faq.title">
            <template #content>
              <h3>{{ faq.title }}</h3>
              <p>{{ faq.content }}</p>
            </template>
          </Card>
        </div>
      </template>
    </Card>
  
    <!-- Policy Section in a Card -->
    <Card class="policy-container">
      <template #title>
        <h2 class="policy-title">Policy Terms</h2>
      </template>
      <template #content>
        <div v-for="(section, index) in policySections" :key="index">
          <h3>{{ section.title }}</h3>
          <ul>
            <li v-for="item in section.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </template>
    </Card>
  </div>
</template>


<script>
import Card from 'primevue/card';
import ToolbarComponent from '../components/toolbar.component.vue';

export default {
  components: {
    Card,
    ToolbarComponent
  },
  data() {
    return {
      faqs: [
        {
          title: "¿Cómo selecciona la aplicación los entrenadores personales?",
          content: "Todos nuestros entrenadores están certificados y han pasado por un riguroso proceso de verificación."
        },
        {
          title: "¿Puedo cambiar de entrenador si no estoy satisfecho con mi actual?",
          content: "Sí, puedes cambiar de entrenador en cualquier momento directamente desde la aplicación.",
        },{
          title: "¿Qué medidas de seguridad se implementan durante las sesiones de entrenamiento presencial?",
          content: "Aseguramos un ambiente seguro siguiendo estrictas directrices de higiene y seguridad.",
        },{
          title: "¿Ofrece la aplicación planes de nutrición personalizados?",
            content: "Sí, muchos entrenadores ofrecen orientación nutricional y planes de alimentación personalizados.",
        }, {
            title: "¿Cómo se manejan los problemas de conexión o técnicos durante las sesiones virtuales?",
            content: "Verifica tu conexión; si el problema sigue, contacta a nuestro soporte técnico. Las sesiones afectadas serán reprogramadas.",
        }, {
            title: "¿Cómo puedo dejar reseñas sobre mi experiencia con un Entrenador Personal reservado a través de TrainEase?",
            content: "Después de completar cada sesión con un entrenador, recibirás una invitación para dejar una reseña sobre tu experiencia. También puedes acceder directamente a tu historial de sesiones en la plataforma TrainEase.",
          },
        ],

      policySections: [
          {
            title: "Reservas y Sesiones:",
            items: [
              "Los usuarios pueden programar sesiones de entrenamiento personal a través de la plataforma en línea.",
              "Las reservas están sujetas a disponibilidad y pueden variar según la ubicación y el entrenador seleccionado."
            ]
          },
          {
            title: "Responsabilidad del Usuario:",
            items: [
              "Los usuarios son responsables de proporcionar información precisa y actualizada sobre su estado de salud y objetivos de fitness al programar sesiones.",
              "Los usuarios deben cumplir con las directrices y procedimientos de seguridad durante las sesiones de entrenamiento, ya sean virtuales o presenciales."
            ]
          },
          {
            title: "Calificaciones y Reseñas:",
            items: [
              "Los usuarios pueden dejar comentarios y calificaciones sobre sus experiencias con los entrenadores personales recibidos a través de la plataforma.",
              "Se anima a los usuarios a proporcionar comentarios constructivos y precisos para ayudar a otros miembros de la comunidad a elegir los mejores entrenadores."
            ]
          },
          {
            title: "Privacidad y Seguridad:",
            items: [
              "La plataforma se compromete a proteger la privacidad y seguridad de la información personal y de salud de los usuarios.",
              "La información proporcionada por los usuarios se utilizará únicamente con el propósito de facilitar las sesiones de entrenamiento y mejorar la experiencia del usuario en la plataforma."
            ]
          },
          {
            title: "Modificaciones de los Términos:",
            items: [
              "La plataforma se reserva el derecho de actualizar y modificar estos términos en cualquier momento sin previo aviso.",
              "Se alienta a los usuarios a revisar periódicamente los términos para estar al tanto de cualquier cambio."
            ]
          },
        ]
    };
  }
}
</script>

<style scoped>
.flex-container {
  background-color: #000000;
  display: flex;
  flex-direction: row; /* Cambiado de columna a fila */
  justify-content: center;
  align-items: start; /* Asegura que los elementos se alineen al inicio de su contenedor */
  padding: 20px;
  gap: 20px; /* Espacio entre las tarjetas */
}

.faq-container, .policy-container {
  
  border: 1px solid #ffc107;
  border-radius: 15px;
  padding: 20px;
  width: 45%; /* Ancho ajustado para que cada sección ocupe aproximadamente la mitad del espacio disponible */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.faq-title, .policy-title {
  color: #333;
  text-align: center;
}

.faq-card {
  padding: 15px;
  background-color: #ffffff;
  border: none;
}

h3, p {
  margin: 10px 0;
}
</style>
