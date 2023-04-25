import axios from "axios";
const URL_SERVER = `http://localhost:4000/`;


function getuserData(){
    return axios.request({
        method: "get",
        url: URL_SERVER + "userInfo",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });
    }

    function getTicketsOfEvent(id){
      return axios.request({
          method: "get",
          url: URL_SERVER + "userEvent/" + id,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        });
      } 
      function confirmTicket(eventID,ticketID){
        return axios.request({
            method: "get",
            url: URL_SERVER + "/confirmTicket",
            data: {eventID: eventID , ticketID: ticketID},
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
          });
        }       
    


export {getuserData , getTicketsOfEvent , confirmTicket}