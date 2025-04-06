import axios from 'axios';

const API_BASE_URL = 'https://api.communitycenter.com'; // Replace with your actual API base URL

export const fetchEvents = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/events`);
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};

export const submitContactForm = async (formData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/contact`, formData);
        return response.data;
    } catch (error) {
        console.error('Error submitting contact form:', error);
        throw error;
    }
};