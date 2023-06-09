import './NavBar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideMenu from './SideMenu'
import { useNavigate} from 'react-router-dom';

export default function NavBar({isLogin , updateLoggedIn}){
    const navigate = useNavigate();


    function clickConnection (){
        if (isLogin){
            localStorage.clear()
            updateLoggedIn(false)
            return
        }
        navigate('/login')
    }


    return(
        <div className='navBar'>
            <div className='iconsBar'><SideMenu/></div>  
            <h1 className='headerName'>אירוע ברגע </h1>
            <button className='loginBt buttonHoverLow' onClick={clickConnection}>{isLogin?'התנתק':'התחבר'}</button>
            <div className='iconsBar'><h3>{isLogin?localStorage.getItem("userName"):null}</h3></div>
    
        </div>
    )
}