import axios from 'axios';

const API_URL = 'https://6635c54e415f4e1a5e254e43.mockapi.io/trainers/trainers'; // Cambia esta URL por la real

export default {
  async getAllTrainers() {
    try {
      const response = await axios.get(API_URL);
      return response.data; // Asegúrate de que esto retorna el array de entrenadores
    } catch (error) {
      console.error('Error fetching trainers:', error);
      throw error; // Lanza el error para manejarlo en el componente
    }
  }
};