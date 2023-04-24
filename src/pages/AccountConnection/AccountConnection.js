import './AccountConnection.css'
import {signUp , login} from '../../ServerAPI/LoginUserAPI'
import CardLogin from './CardLogin/CardLogin'
import { useNavigate} from 'react-router-dom';

export default function AccountConnection({updateLoggedIn , updateNotificationData}){
  const navigate = useNavigate();

    function sendRequest(userInput ,typeRequest){
      if(typeRequest === "sign"){
        signUp(userInput)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          updateNotificationData('הרשמתך לאפליקציה עברה בהצלחה', 'success')
        })
        .catch((error) => {
          console.log(error);
          updateNotificationData('הרשמתך לאפליקציה נכשלה', 'error')
        });
      }
      if(typeRequest === "login"){
        login(userInput)
        .then((token) => {
          updateNotificationData(`ברוך הבא ${userInput.username}`, 'success')
          updateLoggedIn(true)
          localStorage.setItem("token" ,token.data.token )
          localStorage.setItem("userName" ,userInput.username )
          navigate(-1)
        })
        .catch((error) => {
          updateNotificationData('שם משתמש או סיסמא שגויים', 'error')
          console.log(error);
        });
      }
    }

  return (
    <CardLogin sendRequest={sendRequest}/>
  )
}
