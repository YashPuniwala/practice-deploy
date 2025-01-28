import axios from "axios";

// Set base URL (update this if needed)
const API = axios.create({
  baseURL: "http://localhost:5000/api", // Change this if backend runs elsewhere
  withCredentials: true, // Allows sending cookies
});

// Register User
export const registerUser = async (userData) => {
  try {
    const response = await API.post("/register", userData);
    return response.data;
  } catch (error) {
    return error.response?.data || { message: "Server error" };
  }
};

// Login User
export const loginUser = async (userData) => {
  try {
    const response = await API.post("/login", userData);
    return response.data;
  } catch (error) {
    return error.response?.data || { message: "Server error" };
  }
};

// Get User Profile
export const getProfile = async () => {
  try {
    const response = await API.get("/profile");
    return response.data;
  } catch (error) {
    return error.response?.data || { message: "Unauthorized" };
  }
};
