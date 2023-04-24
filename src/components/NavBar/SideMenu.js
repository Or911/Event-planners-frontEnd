import { Fragment, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link } from "react-router-dom";

export default function Menu() {
  const [activeMenu, setActiveMenu] = useState({
    right: false,
  });

  const pages = ['Home', 'Create event', 'Tickets', 'About Us' ,'profile']
  const links = ['/', '/createEvent', '/tickets' , '/AboutUs' ,'/profile']
  const icons = [<HomeIcon/> , <AddBoxIcon/> , <LocalActivityIcon/>, <Diversity3Icon/> , <ManageAccountsIcon/>]

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setActiveMenu({ ...activeMenu, [anchor]: open });
  }

  return (
    <div>
        <Fragment key={'right'}>
          <Button onClick={toggleDrawer('right', true)}><MenuIcon sx={{ color: 'white'}} fontSize='large'/></Button>
          <Drawer anchor={'right'} open={activeMenu['right']} onClose={toggleDrawer('right', false)}>
            <Box role="presentation" onClick={toggleDrawer('right', false)} onKeyDown={toggleDrawer('right', false)}>
              <List>
                {pages.map((page , index) => (
                <Link to={links[index]} key={index} className='linkSideM'>
                  <ListItem key={page}>
                    <ListItemButton>
                      {icons[index]}
                      <ListItemText primary={page} className='txtLinkM'/>
                    </ListItemButton>
                  </ListItem>
                </Link>  
                ))}   
              </List>
            </Box>
          </Drawer>
        </Fragment>
    </div>
  );
}
