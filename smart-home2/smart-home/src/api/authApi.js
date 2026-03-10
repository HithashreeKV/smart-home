// // // // import axios from "axios";

// // // // const API = axios.create({
// // // //   baseURL: "http://localhost:8080/api/auth", // change if different
// // // // });

// // // // // SIGNUP - send OTP
// // // // export const signup = (data) => API.post("/signup", data);

// // // // // VERIFY OTP
// // // // export const verifyOtp = (data) => API.post("/verify-otp", data);

// // // // // LOGIN
// // // // export const login = (data) => API.post("/login", data);

// // // // // FORGOT PASSWORD - send OTP
// // // // export const forgotPassword = (data) => API.post("/forgot-password", data);

// // // // // RESET PASSWORD
// // // // export const resetPassword = (data) => API.post("/reset-password", data);


// // // import axios from "axios";

// // // const API = axios.create({
// // //   baseURL: "http://localhost:8080/api/users"
// // // });

// // // export const registerUser = (data) => API.post("/register", data);

// // // export const loginUser = (data) => API.post("/login", data);

// // // export const verifyOtp = (data) => API.post("/verify", data);

// // // export const forgotPassword = (data) => API.post("/forgot-password", data);

// // // export const resetPassword = (data) => API.post("/reset-password", data);

// // import axios from "axios";

// // const API = axios.create({
// //   baseURL: "http://localhost:8080/api/users"
// // });

// // // SIGNUP - send OTP
// // export const signupUser = (data) => API.post("/signup", data);

// // // VERIFY OTP
// // export const verifyOtp = (data) => API.post("/verify-otp", data);

// // // LOGIN
// // export const loginUser = (data) => API.post("/login", data);

// // // FORGOT PASSWORD - send OTP
// // export const forgotPassword = (data) => API.post("/forgot-password", data);

// // // RESET PASSWORD
// // export const resetPassword = (data) => API.post("/reset-password", data);

// const BASE_URL = "http://localhost:8080/api/users";

// export const registerUser = async (userData) => {
//   const response = await fetch(`${BASE_URL}/register`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(userData),
//   });
//   return response.json();
// };

// export const loginUser = async (userData) => {
//   const response = await fetch(`${BASE_URL}/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(userData),
//   });
//   return response.text();
// };

const BASE_URL = "http://localhost:8080/api/users";

// SIGNUP
export const signupUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return response.text();
};

// LOGIN
export const loginUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  // backend returns either a string error or a user object
  const contentType = response.headers.get('Content-Type') || '';
  if (contentType.includes('application/json')) {
    return response.json();
  }
  return response.text();
};

// FORGOT PASSWORD
export const forgotPassword = async (email) => {
  const response = await fetch(`${BASE_URL}/forgot-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  return response.text();
};

// // VERIFY OTP (TEMP)
// export const verifyOtp = async (data) => {
//   const response = await fetch(`${BASE_URL}/verify-otp`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   return response.text();
// };

export const verifyOtp = async (data) => {
  const response = await fetch(`${BASE_URL}/verify-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.text();
};

// RESET PASSWORD
export const resetPassword = async (data) => {
  const response = await fetch(`${BASE_URL}/reset-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.text();
};

// PROFILE UPDATE
export const updateProfile = async (profile) => {
  const response = await fetch(`${BASE_URL}/profile`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(profile),
  });
  return response.json();
};

// GET PROFILE
export const getProfile = async (email) => {
  const url = new URL(`${BASE_URL}/profile`);
  url.searchParams.append('email', email);
  const response = await fetch(url.toString(), {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
  return response.json();
};