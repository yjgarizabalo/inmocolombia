// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
