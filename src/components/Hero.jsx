// src/components/Hero.jsx
import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Container style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Typography variant="h2" align="center" color="text.primary" gutterBottom>
      La búsqueda del hogar ideal 🏠
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
      Encuentra la casa de tus sueños.
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" color="primary">
          Conoce más
        </Button>
      </div>
    </Container>
  );
};

export default Hero;
