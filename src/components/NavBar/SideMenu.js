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
import { Link } from "react-router-dom";

export default function Menu() {
  const [activeMenu, setActiveMenu] = useState({
    left: false,
  });

  const pages = ['Home', 'Create event', 'Tickets', 'About Us']
  const links = ['/', '/createEvent', '/tickets' , '/AboutUs']
  const icons = [<HomeIcon/> , <AddBoxIcon/> , <LocalActivityIcon/>, <Diversity3Icon/>]

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setActiveMenu({ ...activeMenu, [anchor]: open });
  }

  return (
    <div>
        <Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}><MenuIcon sx={{ color: 'white'}} fontSize='large' /></Button>
          <Drawer anchor={'left'} open={activeMenu['left']} onClose={toggleDrawer('left', false)}>
            <Box role="presentation" onClick={toggleDrawer('left', false)} onKeyDown={toggleDrawer('left', false)}>
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
