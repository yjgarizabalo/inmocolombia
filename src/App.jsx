// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Main from './components/Main'
import Footer from './components/Footer'

import { CssBaseline, Container } from '@mui/material';

function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Container>
        <Hero />
        <Main />
        <Footer />
      </Container>
    </div>
  );
}

export default App;

