import axios from 'axios';
import dotenv from 'dotenv';

const baseURL = process.env.REACT_APP_API_BASE_URL;
const API = axios.create({baseURL});

//export const defaultFetcher = (relativeUrl, ...options) => API.get(relativeUrl, ...options).then(res => res.data);

export default API;