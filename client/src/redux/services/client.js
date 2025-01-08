import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL;
const client = axios.create({baseURL});

export default client;