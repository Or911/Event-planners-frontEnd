import axios from "axios";
const URL_SERVER = `http://localhost:4000/`;

function signUp(userInput) {
  return axios.request({
    method: "post",
    url: URL_SERVER + "sign",
    data: userInput,
  });
}

function login(userInput) {
  return axios.request({
    method: "post",
    url: URL_SERVER + "login",
    data: userInput,
  });
}

export { login, signUp };
