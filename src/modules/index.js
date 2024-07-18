import axios from 'axios';

// Set up Axios instance
const baseURL = 'https://worldwide-restaurants.p.rapidapi.com';
const instance = axios.create({ baseURL });

// No need for authorization interceptor as token is not used
export { instance };