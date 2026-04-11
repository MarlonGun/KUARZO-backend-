import { Request, Response } from 'express';
import prisma from '../config/db';

// Función para la página principal de la API
export const index = async (req: Request, res: Response) => {
    try {
        const usuarios = await prisma.usuario.findMany();

        res.json({
            message: 'Conexion a Kuarzo_DB Exitosa!',
            users: usuarios
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Fallo al conectar con la base de datos' });
    }
};

export const healthCheck = (req: Request, res: Response) => {
    res.json({
        status: 'ok',
        message: 'El servidor de Kuarzo está operando correctamente'
    });
};
