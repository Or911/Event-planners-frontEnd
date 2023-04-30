import axios from "axios";
import { SERVER_URL } from "../utilities/conectsToAPIs";
const URL_SERVER = SERVER_URL;

function getTickets() {
  return axios.request({
    method: "get",
    url: URL_SERVER + "tickets",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
  });
}

function createTicket(eventId , eventPrice) {
  return axios.request({
    method: "post",
    url: URL_SERVER + "ticket",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: {
      eventId : eventId,
      eventPrice : eventPrice
    },
  });
}

export { getTickets , createTicket };
