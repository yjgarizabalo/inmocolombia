import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" color='primary'>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          InmoColomiba 🚀
        </Typography>
        <Button color="inherit">Inicio</Button>
        <Button color="inherit">Acerca de</Button>
        <Button color="inherit">Contacto</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
