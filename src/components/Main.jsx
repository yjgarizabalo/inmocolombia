// src/components/Main.jsx
import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardMedia, List, ListItem, Divider } from '@mui/material';

const Main = () => {
  // Ejemplo de datos para productos inmobiliarios, apartamentos y reseñas
  const productosInmobiliarios = [
    { id: 1, nombre: 'Casa de Lujo', imagen: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 2, nombre: 'Condominio Moderno', imagen: 'https://images.pexels.com/photos/709767/pexels-photo-709767.png?auto=compress&cs=tinysrgb&w=400' },
    // Agrega más productos inmobiliarios según sea necesario
  ];

  const apartamentos = [
    { id: 1, nombre: 'Apartamento de 2 habitaciones', imagen: 'https://images.pexels.com/photos/2009883/pexels-photo-2009883.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 2, nombre: 'Penthouse con vista panorámica', imagen: 'https://images.pexels.com/photos/16799770/pexels-photo-16799770/free-photo-of-zapatos-apartamento-suelo-planta-en-maceta.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 3, nombre: 'Apartamento divino', imagen: 'https://images.pexels.com/photos/16276051/pexels-photo-16276051/free-photo-of-casas-casa-apartamento-diseno.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 4, nombre: 'Con vista al mar', imagen: 'https://images.pexels.com/photos/5216366/pexels-photo-5216366.jpeg?auto=compress&cs=tinysrgb&w=400' },
    // Agrega más apartamentos según sea necesario
  ];

  const reseñas = [
    { id: 1, usuario: 'Maria Gonzales P.', comentario: '¡Excelente servicio y calidad!', puntuacion: 5 },
    { id: 2, usuario: 'Carlos Escobar G.', comentario: 'Me encanta mi nuevo hogar', puntuacion: 4 },
    // Agrega más reseñas según sea necesario
  ];

  return (
    <Container style={{marginTop: '100px'}}>
      <Grid container spacing={2}>
        {/* Sección de Productos Inmobiliarios */}
        <Grid item xs={12} style={{marginBottom: '30px'}}>
          <Typography variant="h4" color="text.primary" gutterBottom>
            Nuestros Productos Inmobiliarios
          </Typography>
          <Grid container spacing={2}>
            {productosInmobiliarios.map((producto) => (
              <Grid item key={producto.id} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={producto.nombre}
                    height="140"
                    image={producto.imagen}
                  />
                  <CardContent>
                    <Typography variant="h6" color="text.primary">
                      {producto.nombre}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Sección de Apartamentos */}
        <Grid item xs={12} style={{marginBottom: '30px'}}>
          <Typography variant="h4" color="text.primary" gutterBottom>
            Nuestros Apartamentos
          </Typography>
          <Grid container spacing={2}>
            {apartamentos.map((apartamento) => (
              <Grid item key={apartamento.id} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={apartamento.nombre}
                    height="140"
                    image={apartamento.imagen}
                  />
                  <CardContent>
                    <Typography variant="h6" color="text.primary">
                      {apartamento.nombre}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Sección de Reseñas */}
        <Grid item xs={12} marginBottom={{marginBottom: '100px'}}>
          <Typography variant="h4" color="text.primary" gutterBottom>
            Reseñas de Clientes
          </Typography>
          <Grid container spacing={2}>
            {reseñas.map((resena) => (
              <Grid item key={resena.id} xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="body1">
                      <strong>{resena.usuario}</strong>: {resena.comentario}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
