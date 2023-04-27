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
            method: "post",
            url: URL_SERVER + "confirmTicket/",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            data: {eventID,ticketID}
          });
        }       
    


export {getuserData , getTicketsOfEvent , confirmTicket}