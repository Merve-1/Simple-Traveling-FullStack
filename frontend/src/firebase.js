import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import axios from "axios";

const firebaseConfig = {
  apiKey: "AIzaSyCyEB-2kj0nXH2FU-axt1FXZBdDDimbv84",
  authDomain: "softwie-task.firebaseapp.com",
  projectId: "softwie-task",
  storageBucket: "softwie-task.appspot.com", 
  messagingSenderId: "658786327854",
  appId: "1:658786327854:web:b95b3826ca3ba7a3c7eebf",
  measurementId: "G-DWWPSBX03N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 
// Axios API Configuration
const API_BASE_URL = "http://localhost:5000/api";

export const registerUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.error : error.message;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.error : error.message;
  }
};

export const saveContactMessage = async (name, email, message) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/contact`, {
      name,
      email,
      message,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.error : error.message;
  }
};
