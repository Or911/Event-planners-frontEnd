import axios from "axios";
import { SERVER_URL } from "../utilities/conectsToAPIs";
const URL_SERVER = SERVER_URL;

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
