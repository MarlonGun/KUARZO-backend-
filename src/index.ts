import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.routes';
import authRoutes from './routes/auth.routes';

// Iniciar la lectura de variables de entorno
dotenv.config();

// Crear la instancia de Express (La apliacion que estamos creando)
const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(cors()); //Permite conexiones a nuestra api desde cualquier origen
app.use(express.json()); //Permite que nuestra api reciba datos en formato JSON

//Rutas
app.use('/api', apiRoutes);
app.use('/api/auth', authRoutes);

//Iniciar el servidor en el puerto definido
app.listen(PORT, () => {
    console.log(`Servidor de desarrollo activo en http://localhost:${PORT}`);
});