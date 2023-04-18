import './AccountConnection.css'
import {sginUp , login} from '../../ServerAPI/LoginUserAPI'
import CardLogin from './CardLogin/CardLogin'
import { useNavigate} from 'react-router-dom';

export default function AccountConnection(){
  const navigate = useNavigate();

    function sendRequest(userInput ,typeRequest){
      if(typeRequest === "sign"){
        sginUp(userInput)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      }
      if(typeRequest === "login"){
        login(userInput)
        .then((token) => {
          console.log(token)
          localStorage.setItem("token" ,token.data.token )
          navigate(-1)
        })
        .catch((error) => {
          console.log(error);
        });
      }
    }

  return (
    <CardLogin sendRequest={sendRequest}/>
  )
}
