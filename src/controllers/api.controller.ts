import { Request, Response } from 'express';
import prisma from '../config/db';

//Definimos la funcion asincrona para evitar fallos de respues de la bd

export const index = async (req: Request, res: Response) => {


    //Obtenemos los datos de la tabla users
    const usuarios = await prisma.user.findMany();

    //Devolvemos la respuesta en formato JSON
    res.json({
        message: 'Conexion a Kuarzo_DB Exitosa!',
        users: usuarios
    });
};

export const healthCheck = (req: Request, res: Response) => {
    res.json({
        status: 'ok',
        message: 'Servidor de Kuarzo funcionando correctamente.'
    });
};