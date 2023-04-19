import axios from "axios";
const URL_SERVER = `http://localhost:4000/`;

function getEvents() {
    
  return axios.request({
    method: "get",
    url: URL_SERVER + "events",
  });
}

export { getEvents };
