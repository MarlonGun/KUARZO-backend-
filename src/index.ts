import dotenv from 'dotenv';
// Cargar variables de entorno ANTES de cualquier otro import que las use
dotenv.config();

import express from 'express';
import cors from 'cors';

import apiRoutes from './routes/api.routes';
import authRoutes from './routes/auth.routes';
import pedidoRoutes from './routes/pedido.routes';
import productoRoutes from './routes/producto.routes';
import paymentRoutes from './routes/payment.routes';
import contactoRoutes from './routes/contacto.routes';

// Crear la instancia de Express (La apliacion que estamos creando)
const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(cors()); //Permite conexiones a nuestra api desde cualquier origen
app.use(express.json()); //Permite que nuestra api reciba datos en formato JSON

app.get('/', (req, res) => {
    res.send('Kuarzo Backend funcionando 🚀');
});

//Rutas
app.use('/api', apiRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/pedidos', pedidoRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/contacto', contactoRoutes);

// Iniciar el servidor en el puerto definido
app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Servidor activo en puerto ${PORT}`);
});