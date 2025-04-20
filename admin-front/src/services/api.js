import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' });

export const addEtudiant = (data) => API.post('/etudiants/', data);
export const getEtudiants = () => API.get('/etudiants');
