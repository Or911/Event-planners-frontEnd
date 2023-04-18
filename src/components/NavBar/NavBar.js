import './NavBar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideMenu from './SideMenu'
export default function NavBar(){



    return(
        <div className='navBar'>
            <div className='iconsBar'><SideMenu/></div>  
            <h1 className='headerName'>event planner </h1>
            <div className='iconsBar'><AccountCircleIcon fontSize='large' /></div>
    
        </div>
    )
}