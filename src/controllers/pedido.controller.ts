import { Request, Response } from 'express';
import prisma from '../config/db';

export const crearPedido = async (
    req: Request,
    res: Response
) => {

    try {
        const {
            usuarioId,
            direccionId,
            total
        } = req.body;

        // Validar campos
        if (
            !usuarioId ||
            !direccionId ||
            !total
        ) {

            return res.status(400).json({
                error: 'Faltan campos obligatorios'
            });
        }

        // Crear pedido
        const pedido = await prisma.pedido.create({
            data: {
                usuarioId,
                direccionId,
                total,
                estado: 'PENDIENTE'
            }
        });

        res.status(201).json({
            message: 'Pedido creado correctamente',
            pedido
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error al crear pedido'
        });
    }
};

export const obtenerPedidos = async (
    req: Request,
    res: Response
) => {

    try {
        const pedidos = await prisma.pedido.findMany({
            include: {
                usuario: true,
                direccion: {
                    include: {
                        ciudad: true
                    }
                },
                detalles: {
                    include: {
                        producto: true
                    }
                }
            }
        });

        const pedidosFormateados = pedidos.map((p: any) => ({
            id: p.id,
            usuarioId: p.usuarioId,
            clienteNombre: `${p.usuario?.primerNombre || ''} ${p.usuario?.primerApellido || ''}`.trim(),
            clienteCorreo: p.usuario?.correo,
            direccion: `${p.direccion?.callePrincipal || ''} ${p.direccion?.numeroExterior || ''}, ${p.direccion?.barrio || ''}${p.direccion?.ciudad ? ', ' + p.direccion.ciudad.nombre : ''}`,
            fechaPedido: p.fechaPedido,
            estado: p.estado,
            total: p.total,
            items: p.detalles.map((d: any) => ({
                productoId: d.productoId,
                nombre: d.producto?.nombre || `Producto ID ${d.productoId}`,
                cantidad: d.cantidad,
                precioUnitario: d.precioUnitario
            }))
        }));

        res.json(pedidosFormateados);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error al obtener pedidos'
        });
    }
};

export const obtenerPedido = async (
    req: Request,
    res: Response
) => {

    try {
        const { id } = req.params;
        const pedido = await prisma.pedido.findUnique({
            where: {
                id: Number(id)
            },
            include: {
                usuario: true,
                direccion: {
                    include: {
                        ciudad: true
                    }
                },
                detalles: {
                    include: {
                        producto: true
                    }
                }
            }
        });

        if (!pedido) {
            return res.status(404).json({
                error: 'Pedido no encontrado'
            });
        }

        const p: any = pedido;
        const pedidoFormateado = {
            id: p.id,
            usuarioId: p.usuarioId,
            clienteNombre: `${p.usuario?.primerNombre || ''} ${p.usuario?.primerApellido || ''}`.trim(),
            clienteCorreo: p.usuario?.correo,
            direccion: `${p.direccion?.callePrincipal || ''} ${p.direccion?.numeroExterior || ''}, ${p.direccion?.barrio || ''}${p.direccion?.ciudad ? ', ' + p.direccion.ciudad.nombre : ''}`,
            fechaPedido: p.fechaPedido,
            estado: p.estado,
            total: p.total,
            items: p.detalles.map((d: any) => ({
                productoId: d.productoId,
                nombre: d.producto?.nombre || `Producto ID ${d.productoId}`,
                cantidad: d.cantidad,
                precioUnitario: d.precioUnitario
            }))
        };

        res.json(pedidoFormateado);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error al obtener pedido'
        });
    }
};

export const actualizarEstadoPedido = async (
    req: Request,
    res: Response
) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;

        const estadosValidos = ['PENDIENTE', 'PROCESADO', 'ENVIADO', 'ENTREGADO', 'CANCELADO'];
        if (!estado || !estadosValidos.includes(estado)) {
            return res.status(400).json({
                error: `Estado inválido. Valores permitidos: ${estadosValidos.join(', ')}`
            });
        }

        const pedidoExistente = await prisma.pedido.findUnique({
            where: { id: Number(id) },
            include: { detalles: true }
        });

        if (!pedidoExistente) {
            return res.status(404).json({ error: 'Pedido no encontrado' });
        }

        const estadoAnterior = pedidoExistente.estado;

        // Si cambia de PENDIENTE a algo pagado/entregado (PROCESADO, ENVIADO, ENTREGADO), descontar stock
        if (estadoAnterior === 'PENDIENTE' && (estado === 'PROCESADO' || estado === 'ENVIADO' || estado === 'ENTREGADO')) {
            for (const detalle of pedidoExistente.detalles) {
                await prisma.producto.update({
                    where: { id: detalle.productoId },
                    data: {
                        stock: {
                            decrement: detalle.cantidad
                        }
                    }
                });
            }
        }
        
        // Si el estado anterior NO era PENDIENTE ni CANCELADO (ya se había descontado stock)
        // y el nuevo estado es CANCELADO, entonces DEVOLVER el stock.
        if (estadoAnterior !== 'PENDIENTE' && estadoAnterior !== 'CANCELADO' && estado === 'CANCELADO') {
            for (const detalle of pedidoExistente.detalles) {
                await prisma.producto.update({
                    where: { id: detalle.productoId },
                    data: {
                        stock: {
                            increment: detalle.cantidad
                        }
                    }
                });
            }
        }

        const pedidoActualizado = await prisma.pedido.update({
            where: { id: Number(id) },
            data: { estado },
            include: {
                usuario: true,
                direccion: true,
                detalles: true
            }
        });

        res.json({
            message: 'Estado del pedido actualizado',
            pedido: pedidoActualizado
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error al actualizar estado del pedido'
        });
    }
};