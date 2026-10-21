const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Petición recibida - Método: ${req.method} | Ruta: ${req.url}`);
  next();
});

app.get('/inicio', (req, res) => {
  res.status(200).json({
    mensaje: "Bienvenido a nuestra API"
  });
});

app.get('/informacion', (req, res) => {
  res.status(200).json({
    servicio: "API de solicitudes de registro",
    estado: "Activo"
  });
});

app.post('/solicitudes', (req, res) => {
  const { nombre, apellido, correo } = req.body;

  if (!nombre || !apellido || !correo) {
    return res.status(400).json({
      error: "Debe enviar nombre, apellido y correo"
    });
  }

  if (!correo.includes('@') || !correo.includes('.')) {
    return res.status(400).json({
      error: "El correo electrónico no es válido"
    });
  }

  res.status(201).json({
    mensaje: "Solicitud recibida con éxito",
    datos: {
      nombre,
      apellido,
      correo
    }
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada"
  });
});

app.listen(PORT, () => {
  console.log('Servidor ejecutándose correctamente en el puerto ' + PORT);
});