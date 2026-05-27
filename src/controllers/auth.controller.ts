import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../config/db';


export const register = async (req: Request, res: Response) => {
    try {
        //Obtenemos los datos que enviara el frontend
        const { primerNombre, segundoNombre, primerApellido, segundoApellido, correo, contrasena, telefono, rolId } = req.body;

        //Validamos que todos los campos obligatorios hayan llegado
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
                segundoNombre,
                primerApellido,
                segundoApellido,
                correo,
                contrasena: passHashed,
                telefono,
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
};

export const login = async (req: Request, res: Response) => {
    try {
        const { correo, contrasena } = req.body;

        if (!correo || !contrasena) {
            return res.status(400).json({ error: 'Correo y contraseña son obligatorios' });
        }

        const usuario = await prisma.usuario.findUnique({
            where: { correo },
            include: { rol: true }
        });

        if (!usuario) {
            return res.status(401).json({ error: 'Credenciales incorrectas' });
        }

        if (usuario.estado !== 'ACTIVO') {
            return res.status(403).json({ error: 'Cuenta inactiva o suspendida' });
        }

        const contrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena);

        if (!contrasenaValida) {
            return res.status(401).json({ error: 'Credenciales incorrectas' });
        }

        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            console.error('JWT_SECRET no está definido en las variables de entorno');
            return res.status(500).json({ error: 'Error de configuración del servidor' });
        }

        const token = jwt.sign(
            { userId: usuario.id, rolId: usuario.rolId },
            jwtSecret,
            { expiresIn: '7d' }
        );

        res.json({
            message: 'Inicio de sesión exitoso',
            token,
            usuario: {
                id: usuario.id,
                primerNombre: usuario.primerNombre,
                primerApellido: usuario.primerApellido,
                correo: usuario.correo,
                rol: usuario.rol.nombre
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
};