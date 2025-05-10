import axios from 'axios';

// Create an Axios instance for production-ready API communication
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api', // Production API URL from .env
  withCredentials: true, // Enable cookies for CSRF and sessions
  timeout: 10000, // 10-second timeout for production
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access (e.g., token expired)
      localStorage.removeItem('auth_token');
      window.location.href = '/login';
    } else if (error.response?.status === 429) {
      // Handle rate limiting
      console.warn('Too many requests. Please try again later.');
    }
    return Promise.reject(error);
  }
);

// CSRF token fetch for Laravel Sanctum
export const getCsrfToken = () => api.get('/sanctum/csrf-cookie');

// Authentication API calls
export const login = async (credentials) => {
  await getCsrfToken(); // Ensure CSRF token is fetched
  const response = await api.post('/login', credentials);
  localStorage.setItem('auth_token', response.data.token);
  return response.data;
};

export const register = async (data) => {
  await getCsrfToken();
  const response = await api.post('/register', data);
  localStorage.setItem('auth_token', response.data.token);
  return response.data;
};

export const logout = async () => {
  const response = await api.post('/logout');
  localStorage.removeItem('auth_token');
  return response.data;
};

// Example protected API call
export const getUsers = () => api.get('/user');

export default api;