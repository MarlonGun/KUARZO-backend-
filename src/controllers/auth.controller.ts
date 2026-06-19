import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../config/db';
import nodemailer from 'nodemailer';


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

export const forgotPassword = async (req: Request, res: Response) => {
    try {
        const { correo } = req.body;

        if (!correo) {
            return res.status(400).json({ error: 'El correo electrónico es obligatorio' });
        }

        const usuario = await prisma.usuario.findUnique({ where: { correo } });
        if (!usuario) {
            return res.status(404).json({ error: 'El correo no está registrado en la base de datos' });
        }

        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            return res.status(500).json({ error: 'Error de configuración del servidor' });
        }
        const token = jwt.sign({ userId: usuario.id }, jwtSecret, { expiresIn: '15m' });

        // Enlace de restablecimiento — usa la URL de producción de la web
        const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:8081';
        const resetLink = `${frontendUrl}/reset-password?token=${token}`;

        // Configuración de nodemailer
        let transporter;
        let isTest = false;

        if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
            transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT) || 587,
                secure: process.env.SMTP_SECURE === 'true',
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });
        } else {
            // Ethereal fallback para desarrollo
            const testAccount = await nodemailer.createTestAccount();
            transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                secure: false,
                auth: {
                    user: testAccount.user,
                    pass: testAccount.pass,
                },
            });
            isTest = true;
        }

        const info = await transporter.sendMail({
            from: '"Kuarzo Soporte" <no-reply@kuarzo.com>',
            to: correo,
            subject: 'Restablecer contraseña - Kuarzo',
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; border: 1px solid #eaeaea; border-radius: 10px; background-color: #fafafa; margin: 0 auto;">
                    <h2 style="color: #f97316; text-align: center;">Kuarzo</h2>
                    <h3 style="color: #111827; text-align: center;">Recuperación de Contraseña</h3>
                    <p style="color: #4b5563; font-size: 16px; line-height: 24px;">Hola, ${usuario.primerNombre}. Has solicitado restablecer tu contraseña para acceder a la aplicación Kuarzo.</p>
                    <p style="color: #4b5563; font-size: 16px; line-height: 24px;">Por favor, haz clic en el botón de abajo para cambiar tu contraseña. Este enlace expira en 15 minutos.</p>
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${resetLink}" style="background-color: #f97316; color: white; padding: 14px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; display: inline-block;">
                            Cambiar contraseña
                        </a>
                    </div>
                    <p style="color: #9ca3af; font-size: 13px; text-align: center; margin-top: 30px;">Si no solicitaste este cambio, puedes ignorar este correo de forma segura.</p>
                </div>
            `,
        });

        const testUrl = isTest ? nodemailer.getTestMessageUrl(info) : null;
        if (testUrl) {
            console.log(`[TEST MAIL] Mensaje enviado a Ethereal. Ver en: ${testUrl}`);
        }

        res.json({
            message: 'Correo de recuperación enviado con éxito',
            testUrl
        });

    } catch (error) {
        console.error('Error al enviar correo de recuperación:', error);
        res.status(500).json({ error: 'Error interno del servidor al procesar la solicitud' });
    }
};

export const resetPassword = async (req: Request, res: Response) => {
    try {
        const { token, contrasena } = req.body;

        if (!token || !contrasena) {
            return res.status(400).json({ error: 'Token y contraseña nueva son obligatorios' });
        }

        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            return res.status(500).json({ error: 'Error de configuración del servidor' });
        }
        let decoded: any;

        try {
            decoded = jwt.verify(token, jwtSecret);
        } catch (err) {
            return res.status(400).json({ error: 'El enlace ha expirado o es inválido' });
        }

        // Encriptar la contraseña
        const salt = await bcrypt.genSalt(10);
        const passHashed = await bcrypt.hash(contrasena, salt);

        await prisma.usuario.update({
            where: { id: decoded.userId },
            data: { contrasena: passHashed },
        });

        res.json({ message: 'Contraseña restablecida con éxito' });

    } catch (error) {
        console.error('Error al restablecer la contraseña:', error);
        res.status(500).json({ error: 'Error interno del servidor al procesar la solicitud' });
    }
};