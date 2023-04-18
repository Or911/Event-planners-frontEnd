import './NavBar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideMenu from './SideMenu'
import { useNavigate} from 'react-router-dom';
export default function NavBar(){
    const navigate = useNavigate();


    return(
        <div className='navBar'>
            <div className='iconsBar'><SideMenu/></div>  
            <h1 className='headerName'>event planner </h1>
            <button className='loginBt' onClick={()=>navigate('/login')}>Login</button>
            <div className='iconsBar'><AccountCircleIcon fontSize='large' /></div>
    
        </div>
    )
}