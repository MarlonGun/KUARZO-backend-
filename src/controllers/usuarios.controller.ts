import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const obtenerUsuarios = async (req: Request, res: Response) => {
    try {
        const usuarios = await prisma.usuario.findMany({
            include: {
                rol: true
            }
        });

        // Mapear para la aplicación de escritorio
        const usuariosFormat = usuarios.map(u => ({
            id: u.id,
            primerNombre: u.primerNombre,
            segundoNombre: u.segundoNombre,
            primerApellido: u.primerApellido,
            segundoApellido: u.segundoApellido,
            correo: u.correo,
            estado: u.estado,
            rol: u.rol.nombre
        }));

        res.json(usuariosFormat);
    } catch (error: any) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: "Error al obtener usuarios." });
    }
};

export const actualizarEstadoUsuario = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;

        const usuarioActualizado = await prisma.usuario.update({
            where: { id: Number(id) },
            data: { estado }
        });

        res.json({ success: true, usuario: usuarioActualizado });
    } catch (error: any) {
        console.error('Error al actualizar estado:', error);
        res.status(500).json({ error: "Error al actualizar estado del usuario." });
    }
};

export const actualizarRolUsuario = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { rolId } = req.body;

        const usuarioActualizado = await prisma.usuario.update({
            where: { id: Number(id) },
            data: { rolId: Number(rolId) }
        });

        res.json({ success: true, usuario: usuarioActualizado });
    } catch (error: any) {
        console.error('Error al actualizar rol:', error);
        res.status(500).json({ error: "Error al actualizar rol del usuario." });
    }
};
