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
    


export {getuserData}