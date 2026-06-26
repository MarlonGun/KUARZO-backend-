import { Response } from 'express';
import prisma from '../config/db';
import { AuthenticatedRequest } from '../middlewares/authMiddleware';

export const obtenerCarrito = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const usuarioId = req.user?.userId;
        if (!usuarioId) {
            return res.status(401).json({ error: 'No autorizado' });
        }

        let carrito = await prisma.carrito.findUnique({
            where: { usuarioId },
            include: {
                detalles: {
                    include: {
                        producto: {
                            include: {
                                imagenes: true
                            }
                        }
                    }
                }
            }
        });

        if (!carrito) {
            return res.json([]);
        }

        const ahora = new Date();
        const fechaCreacion = new Date(carrito.fechaCreacion);
        const diffMs = ahora.getTime() - fechaCreacion.getTime();
        const horasPasadas = diffMs / (1000 * 60 * 60);

        if (horasPasadas >= 24) {
            await prisma.detalleCarrito.deleteMany({
                where: { carritoId: carrito.id }
            });
            await prisma.carrito.update({
                where: { id: carrito.id },
                data: { fechaCreacion: ahora, estado: 'ACTIVO' }
            });
            return res.json([]);
        }

        const items = carrito.detalles.map(d => ({
            id: d.productoId,
            nombre: d.producto.nombre,
            precio: Number(d.producto.precio),
            imagen: d.producto.imagenes.length > 0 ? d.producto.imagenes[0].urlImagen : '',
            cantidad: d.cantidad,
            selected: true
        }));

        res.json(items);
    } catch (error) {
        console.error('Error al obtener carrito:', error);
        res.status(500).json({ error: 'Error al obtener carrito' });
    }
};

export const sincronizarCarrito = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const usuarioId = req.user?.userId;
        const { items } = req.body; 
        
        if (!usuarioId) {
            return res.status(401).json({ error: 'No autorizado' });
        }

        let carrito = await prisma.carrito.findUnique({
            where: { usuarioId }
        });

        if (!carrito) {
            carrito = await prisma.carrito.create({
                data: {
                    usuarioId,
                    fechaCreacion: new Date()
                }
            });
        } else {
            carrito = await prisma.carrito.update({
                where: { id: carrito.id },
                data: { fechaCreacion: new Date(), estado: 'ACTIVO' }
            });
        }

        await prisma.detalleCarrito.deleteMany({
            where: { carritoId: carrito.id }
        });

        if (items && items.length > 0) {
            const nuevosDetalles = items.map((i: any) => ({
                carritoId: carrito!.id,
                productoId: Number(i.id),
                cantidad: Number(i.cantidad)
            }));

            await prisma.detalleCarrito.createMany({
                data: nuevosDetalles
            });
        }

        res.json({ message: 'Carrito sincronizado correctamente' });
    } catch (error) {
        console.error('Error al sincronizar carrito:', error);
        res.status(500).json({ error: 'Error al sincronizar carrito' });
    }
};

export const vaciarCarrito = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const usuarioId = req.user?.userId;
        if (!usuarioId) {
            return res.status(401).json({ error: 'No autorizado' });
        }

        const carrito = await prisma.carrito.findUnique({
            where: { usuarioId }
        });

        if (carrito) {
            await prisma.detalleCarrito.deleteMany({
                where: { carritoId: carrito.id }
            });
        }

        res.json({ message: 'Carrito vaciado' });
    } catch (error) {
        console.error('Error al vaciar carrito:', error);
        res.status(500).json({ error: 'Error al vaciar carrito' });
    }
};
