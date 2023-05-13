import axios from 'axios';

// criar uma isntancia para setar informações padrão para todas as requisições
export const api = axios.create({
    baseURL: (import.meta.env.VITE_API_URL),
})