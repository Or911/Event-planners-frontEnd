import { Fragment, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

export default function Menu() {
  const [activeMenu, setActiveMenu] = useState({
    left: false,
  });

  const pages = ['Home', 'Create event', 'Tickets']
  const links = ['/', '/', '/']
  const icons = [<MenuIcon/> , <MenuIcon/> , <MenuIcon/>]

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setActiveMenu({ ...activeMenu, [anchor]: open });
  };

  return (
    <div>
        <Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}><MenuIcon sx={{ color: 'white'}} fontSize='large' /></Button>
          <Drawer anchor={'left'} open={activeMenu['left']} onClose={toggleDrawer('left', false)}>
            <Box role="presentation" onClick={toggleDrawer('left', false)} onKeyDown={toggleDrawer('left', false)}>
              <List>
                {pages.map((page , index) => (
                <Link to={links[index]} key={index}>
                  <ListItem key={page}>
                    <ListItemButton>
                      {icons[index]}
                      <ListItemText primary={page} />
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