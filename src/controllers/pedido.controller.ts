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
                direccion: true,
                detalles: true
            }
        });

        res.json(pedidos);

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
                direccion: true,
                detalles: true
            }
        });

        if (!pedido) {
            return res.status(404).json({
                error: 'Pedido no encontrado'
            });
        }

        res.json(pedido);

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
            where: { id: Number(id) }
        });

        if (!pedidoExistente) {
            return res.status(404).json({ error: 'Pedido no encontrado' });
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