
import { useState } from 'react'
import './CardLogin.css'
import { useNavigate} from 'react-router-dom';
import ButtonBack from '../../../components/NavBar/ButtonBack/ButtonBack';

export default function CardLogin({sendRequest}){
    const navigate = useNavigate();
    const LOG_IN = {h3:"Login Here" , button:"Login" , changePage:"Sign Up" , statusReq:"login" }
    const SIGN_UP = {h3:"Sign Up" , button:"Sign Up" , changePage:"Login" , statusReq:"sign" }


    const [userInput , setUserInput] = useState({username:null,password:null})
    const [statusPage , updateStatusPage] = useState(LOG_IN)

    function onClickSubmit(){
        sendRequest(userInput ,statusPage.statusReq)
        // setUserInput({username:null,password:null})
    }

    function changePage(changePage){
        if(changePage === "Sign Up"){
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
                <label >Username</label>
                <input type="text" placeholder="Username" required onChange={(event)=>setUserInput({...userInput , username:event.target.value})}/>
                <label >Password</label>
                <input type="password" name="password" placeholder="Password" required onChange={(event)=>setUserInput({...userInput , password:event.target.value})}/>
                <button type="submit" onClick={()=>onClickSubmit()}>{statusPage.button}</button>
                <div className="social">
                    <div  onClick={()=>changePage(statusPage.changePage)}>{statusPage.changePage}</div>
                    <div className="fb" onClick={()=>navigate('/AboutUs')}><i className="fab fa-facebook"></i>About Us</div>
                </div>
            </div>
        </div>
    )
}