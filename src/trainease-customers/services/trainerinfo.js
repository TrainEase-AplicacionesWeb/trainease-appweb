// trainerinfo.js
import axios from 'axios';

const API_URL = 'https://6635c54e415f4e1a5e254e43.mockapi.io/trainers/trainers';

const TrainerService = {
    async getAllTrainers() {
        try {
            const response = await axios.get(API_URL);
            console.log("API Response:", response.data);  // Agregar esto para ver la respuesta del API
            return response.data;
        } catch (error) {
            console.error('Error fetching trainers:', error);
            throw error;
        }
    }
};

export default TrainerService;
