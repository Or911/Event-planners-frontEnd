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

    // function getUserEventByID(id){
    //   return axios.request({
    //       method: "get",
    //       url: URL_SERVER + "user/event/" + id,
    //       headers: {
    //         Authorization: `Bearer ${localStorage.getItem("token")}`,
    //       }
    //     });
    //   }    
    


export {getuserData }