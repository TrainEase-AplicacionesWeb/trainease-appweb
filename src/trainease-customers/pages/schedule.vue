<template>
  <div class="schedule-container">
    <ToolbarComponent />
    <h1>Horario Semanal</h1>
    <DataTable :value="schedule" class="schedule-table">
      <Column field="time" header="Hora"></Column>
      <Column v-for="day in days" :key="day" :field="day" :header="day"></Column>
    </DataTable>
  </div>
</template>

<script>
import ToolbarComponent from '../components/toolbar.component.vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
  components: {
    ToolbarComponent,
    DataTable,
    Column
  },
  data() {
    return {
      days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
      schedule: []
    };
  },
  created() {
    this.schedule = this.generateSchedule();
  },
  methods: {
    generateSchedule() {
      const times = [];
      for (let hour = 6; hour <= 21; hour++) {
        times.push(`${hour}:00`); // Corrected template literals
        times.push(`${hour}:30`); // Corrected template literals
      }
      const schedule = times.map(time => {
        const row = { time };
        this.days.forEach(day => {
          row[day] = ''; // Initial empty slots for each day and time
        });
        return row;
      });
      return schedule;
    }
  }
};
</script>

<style scoped>
.schedule-container {
  background-color: #e2f787; /* Fondo blanco para el contenedor */
  color: #333; /* Texto oscuro para mejor contraste */
  min-height: 100vh; /* Altura mínima para cubrir toda la altura de la ventana */
  padding: 20px; /* Espaciado interno */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.schedule-table {
  width: 100%;
  max-width: 1200px; /* Ancho máximo para el cuadro horario */
  margin-top: 20px;
}
</style>