import axios from 'axios';
const API = axios.create({baseURL: ''});

export const fetchRecipes = () =>API.get('#');
export const register = (FormData) => API.post('#',FormData);
export const login = (FormData) => API.post('#',FormData);