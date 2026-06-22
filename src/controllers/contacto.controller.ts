import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Crear un nuevo contacto (Público)
export const crearContacto = async (req: Request, res: Response) => {
    try {
        const { nombre, apellido, correo, telefono } = req.body;

        if (!nombre || !apellido || !correo || !telefono) {
            return res.status(400).json({ error: 'Faltan campos obligatorios' });
        }

        const contacto = await prisma.contacto.create({
            data: { nombre, apellido, correo, telefono }
        });

        res.status(201).json({
            message: 'Contacto guardado con éxito',
            contacto
        });
    } catch (error) {
        console.error('Error al guardar contacto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Obtener todos los contactos (Admin)
export const obtenerContactos = async (req: Request, res: Response) => {
    try {
        const contactos = await prisma.contacto.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.json(contactos);
    } catch (error) {
        console.error('Error al obtener contactos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Marcar como leído (Admin)
export const marcarLeido = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const contacto = await prisma.contacto.update({
            where: { id: Number(id) },
            data: { leido: true }
        });
        res.json({ message: 'Marcado como leído', contacto });
    } catch (error) {
        console.error('Error al marcar contacto:', error);
        res.status(500).json({ error: 'Error al actualizar' });
    }
};

// Eliminar contacto (Admin)
export const eliminarContacto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await prisma.contacto.delete({
            where: { id: Number(id) }
        });
        res.json({ message: 'Contacto eliminado' });
    } catch (error) {
        console.error('Error al eliminar contacto:', error);
        res.status(500).json({ error: 'Error al eliminar' });
    }
};
