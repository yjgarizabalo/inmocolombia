// src/components/Footer.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Container>
      <Typography variant="body2" color="text.secondary" align="center">
        © 2023 InmoColomiba | Todos los derechos reservados
      </Typography>
    </Container>
  );
};

export default Footer;
