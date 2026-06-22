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
            stock,
            imagen,
            destacado
        } = req.body;

        const producto = await prisma.producto.create({
            data: {
                categoriaId: Number(categoriaId),
                nombre,
                descripcion,
                precio: Number(precio),
                stock: Number(stock),
                destacado: destacado === true || destacado === 'true' || destacado === 1 || String(destacado).toLowerCase() === 'true',
                // Si envían una url de imagen, se crea la relación en la tabla ImagenProducto
                ...(imagen && {
                    imagenes: {
                        create: {
                            urlImagen: imagen
                        }
                    }
                })
            },
            include: {
                imagenes: true
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

export const actualizarProducto = async (
    req: Request,
    res: Response
) => {
    try {
        const { id } = req.params;
        const productoId = Number(id);

        const productoExistente = await prisma.producto.findUnique({
            where: { id: productoId }
        });

        if (!productoExistente) {
            return res.status(404).json({
                error: 'Producto no encontrado'
            });
        }

        const {
            categoriaId,
            nombre,
            descripcion,
            precio,
            stock,
            estado,
            imagen
        } = req.body;

        const updateData: any = {};
        if (categoriaId !== undefined) updateData.categoriaId = Number(categoriaId);
        if (nombre !== undefined) updateData.nombre = nombre;
        if (descripcion !== undefined) updateData.descripcion = descripcion;
        if (precio !== undefined) updateData.precio = Number(precio);
        if (stock !== undefined) updateData.stock = Number(stock);
        if (estado !== undefined) updateData.estado = estado;
        if (req.body.destacado !== undefined) {
            const dest = req.body.destacado;
            updateData.destacado = dest === true || dest === 'true' || dest === 1 || String(dest).toLowerCase() === 'true';
        }

        // Si se incluye url de imagen, actualizarla o crearla en la tabla ImagenProducto
        if (imagen) {
            const imagenExistente = await prisma.imagenProducto.findFirst({
                where: { productoId }
            });

            if (imagenExistente) {
                await prisma.imagenProducto.update({
                    where: { id: imagenExistente.id },
                    data: { urlImagen: imagen }
                });
            } else {
                await prisma.imagenProducto.create({
                    data: {
                        productoId,
                        urlImagen: imagen
                    }
                });
            }
        }

        const productoActualizado = await prisma.producto.update({
            where: { id: productoId },
            data: updateData,
            include: {
                imagenes: true
            }
        });

        res.json({
            message: 'Producto actualizado con éxito',
            producto: productoActualizado
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error al actualizar producto'
        });
    }
};

export const eliminarProducto = async (
    req: Request,
    res: Response
) => {
    try {
        const { id } = req.params;
        const productoId = Number(id);

        const productoExistente = await prisma.producto.findUnique({
            where: { id: productoId }
        });

        if (!productoExistente) {
            return res.status(404).json({
                error: 'Producto no encontrado'
            });
        }

        try {
            await prisma.producto.delete({
                where: { id: productoId }
            });
            res.json({
                message: 'Producto eliminado físicamente con éxito'
            });
        } catch (error: any) {
            // P2003 es el código de error de Prisma para violación de restricción de clave externa (FK constraint)
            if (error.code === 'P2003') {
                const productoDesactivado = await prisma.producto.update({
                    where: { id: productoId },
                    data: { estado: 'INACTIVO' }
                });
                res.json({
                    message: 'El producto no se pudo borrar físicamente porque está referenciado en pedidos o carritos. Se ha marcado como INACTIVO.',
                    producto: productoDesactivado
                });
            } else {
                throw error;
            }
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error al eliminar producto'
        });
    }
};

export const obtenerProductosDestacados = async (
    req: Request,
    res: Response
) => {
    try {
        const productos = await prisma.producto.findMany({
            where: {
                destacado: true,
                estado: 'ACTIVO'
            },
            take: 10,
            include: {
                categoria: true,
                imagenes: true
            }
        });

        res.json(productos);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error al obtener productos destacados'
        });
    }
};