import axios from "axios";
const URL_SERVER = `http://localhost:4000/`;

function getTickets() {
  return axios.request({
    method: "get",
    url: URL_SERVER + "tickets",
  });
}

export { getTickets };
