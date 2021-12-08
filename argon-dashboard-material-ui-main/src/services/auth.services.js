import axios from "axios";


const register = (username, email, password) => {
  return axios.post("http://127.0.0.1:8000/users/", {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post("http://127.0.0.1:8000/token/", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};