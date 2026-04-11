import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import prisma from '../config/db';


export const register = async (req: Request, res: Response) => {
    try {
        //Obtenemos los datos que enviara el frontend
        const { primerNombre, primerApellido, correo, contrasena, rolId } = req.body;

        //Validamos que todos los campos hayan llegado
        if (!primerNombre || !primerApellido || !correo || !contrasena || !rolId) {
            return res.status(400).json({ error: 'Faltan campos obligatorios' });
        }

        //Validamos que el correo no este registrado
        const exists = await prisma.usuario.findUnique({ where: { correo } });

        if (exists) {
            return res.status(400).json({ error: 'Este correo ya tiene una cuenta ' });
        }

        //Encriptamos la contraseña
        const salt = await bcrypt.genSalt(10);
        const passHashed = await bcrypt.hash(contrasena, salt);

        //Creamos el registro en la base de datos
        const usuarioNuevo = await prisma.usuario.create({
            data: {
                primerNombre,
                primerApellido,
                correo,
                contrasena: passHashed,
                rolId
            }
        });

        res.status(201).json({
            message: '¡Registro exitoso!',
            userId: usuarioNuevo.id
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al registrar usuario' });

    }
}