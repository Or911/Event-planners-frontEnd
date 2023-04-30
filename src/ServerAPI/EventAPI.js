import axios from "axios";
import { SERVER_URL } from "../utilities/conectsToAPIs";

const URL_SERVER = SERVER_URL;

function getEvents(category , date ) {
    
  return axios.request({
    method: "get",
    url: URL_SERVER + "events",
    params: {category : category , date : date , id : 'category'}
  });
  
}
function getEventData(idEvent) {
  return axios.request({
    method: "get",
    url: URL_SERVER + "event/" + idEvent,
  });
}

function deleteEvent(eventId){
  return axios.request({
    method: "delete",
    url: URL_SERVER + "event/" + eventId,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    
  }).then((res)=>{console.log(res)});
}

export { getEvents , getEventData, deleteEvent};
