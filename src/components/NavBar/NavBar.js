import './NavBar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
export default function NavBar(){

    return(
        <div className='navBar'>
            <div className='menuIcon'><MenuIcon fontSize='large' /></div>
            <h1 className='headerName'>event planner</h1>
            <div className='userIcon'><AccountCircleIcon fontSize='large' /></div>
        
        </div>
    )
}