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
            <h1 className='headerName'>event planner </h1>
            <button className='loginBt' onClick={clickConnection}>{isLogin?'Sign out':'Login'}</button>
            <div className='iconsBar'><AccountCircleIcon fontSize='large' /><h3>{isLogin?localStorage.getItem("userName"):null}</h3></div>
    
        </div>
    )
}