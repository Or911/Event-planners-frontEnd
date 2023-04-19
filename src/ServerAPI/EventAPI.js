import axios from "axios";
const URL_SERVER = `http://localhost:4000/`;

function getEventsCategory() {
    
    return axios.request({
      method: "get",
      url: URL_SERVER + "eventsCategory",
    });
  }

function getEvents() {
    
  return axios.request({
    method: "get",
    url: URL_SERVER + "events",
  });
}

function getEventData(idEvent) {
  return axios.request({
    method: "get",
    url: URL_SERVER + "event/" + idEvent,
  });
}

export { getEvents , getEventData , getEventsCategory};
