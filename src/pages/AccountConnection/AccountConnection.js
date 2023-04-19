import './AccountConnection.css'
import {signUp , login} from '../../ServerAPI/LoginUserAPI'
import CardLogin from './CardLogin/CardLogin'
import { useNavigate} from 'react-router-dom';

export default function AccountConnection({updateLoggedIn}){
  const navigate = useNavigate();

    function sendRequest(userInput ,typeRequest){
      if(typeRequest === "sign"){
        signUp(userInput)
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
          updateLoggedIn(true)
          localStorage.setItem("token" ,token.data.token )
          localStorage.setItem("userName" ,userInput.username )
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
