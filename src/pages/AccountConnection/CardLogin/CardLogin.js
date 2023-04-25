
import { useState } from 'react'
import './CardLogin.css'
import { useNavigate} from 'react-router-dom';
import ButtonBack from '../../../components/ButtonBack/ButtonBack';

export default function CardLogin({sendRequest}){
    const navigate = useNavigate();
    const LOG_IN = {h3:"התחבר כאן" , button:"התחבר" , changePage:"הרשמה" , statusReq:"login" }
    const SIGN_UP = {h3:"הרשמה" , button:"הירשם" , changePage:"התחברות" , statusReq:"sign" }


    const [userInput , setUserInput] = useState({username:null,password:null})
    const [statusPage , updateStatusPage] = useState(LOG_IN)

    function onClickSubmit(){
        sendRequest(userInput ,statusPage.statusReq)
        // setUserInput({username:null,password:null})
    }

    function changePage(changePage){
        if(changePage === "הרשמה"){
            updateStatusPage(SIGN_UP)
        }
        else{
            updateStatusPage(LOG_IN)
        }
    }

    return(
        <div className='loginPage'>
            <div className='cardLogin'>
                <h3>{statusPage.h3}</h3>
                <ButtonBack/>
                <label >שם משתמש</label>
                <input type="text" placeholder="שם משתמש" required onChange={(event)=>setUserInput({...userInput , username:event.target.value})}/>
                <label >סיסמא</label>
                <input type="password" name="password" placeholder="סיסמא" required onChange={(event)=>setUserInput({...userInput , password:event.target.value})}/>
                <button type="submit" onClick={()=>onClickSubmit()}>{statusPage.button}</button>
                <div className="social">
                    <div  onClick={()=>changePage(statusPage.changePage)}>{statusPage.changePage}</div>
                    <div className="fb" onClick={()=>navigate('/AboutUs')}><i className="fab fa-facebook"></i>אודות</div>
                </div>
            </div>
        </div>
    )
}