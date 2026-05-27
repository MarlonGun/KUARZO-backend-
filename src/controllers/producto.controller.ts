import { Request, Response } from 'express';
import prisma from '../config/db';

export const obtenerProductos = async (
    req: Request,
    res: Response
) => {

    try {
        const productos = await prisma.producto.findMany({
            include: {
                categoria: true,
                imagenes: true
            }
        });

        res.json(productos);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error al obtener productos'
        });
    }
};

export const obtenerProducto = async (
    req: Request,
    res: Response
) => {

    try {
        const { id } = req.params;
        const producto = await prisma.producto.findUnique({
            where: {
                id: Number(id)
            },
            include: {
                categoria: true,
                imagenes: true
            }
        });

        if (!producto) {
            return res.status(404).json({
                error: 'Producto no encontrado'
            });
        }

        res.json(producto);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error al obtener producto'
        });
    }
};

export const crearProducto = async (
    req: Request,
    res: Response
) => {
    try {
        const {
            categoriaId,
            nombre,
            descripcion,
            precio,
            stock
        } = req.body;

        const producto = await prisma.producto.create({
            data: {
                categoriaId,
                nombre,
                descripcion,
                precio,
                stock
            }
        });

        res.status(201).json({
            message: 'Producto creado',
            producto
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error al crear producto'
        });
    }
};