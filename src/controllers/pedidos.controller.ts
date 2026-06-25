import { Request, Response } from 'express';
import prisma from '../config/db';

export const crearPedido = async (req: Request, res: Response) => {
    try {
        const { cliente, productos, total, payment_id } = req.body;

        if (!cliente || !productos || productos.length === 0) {
            return res.status(400).json({ error: "Datos incompletos para crear el pedido." });
        }

        // 1. Buscar o crear el Usuario basado en el correo
        // En un caso real, la contraseña sería generada o se pediría al usuario registrarse.
        // Aquí le damos una por defecto si es invitado.
        let usuario = await prisma.usuario.findUnique({
            where: { correo: cliente.email }
        });

        if (!usuario) {
            usuario = await prisma.usuario.create({
                data: {
                    correo: cliente.email,
                    primerNombre: cliente.nombre.split(' ')[0] || 'Invitado',
                    primerApellido: cliente.nombre.split(' ')[1] || 'Usuario',
                    contrasena: "123456", // Contraseña temporal
                    telefono: cliente.telefono,
                    rolId: 1 // COMPRADOR
                }
            });
        }

        // 2. Buscar o crear la Ciudad (usando la del form o una por defecto)
        let ciudad = await prisma.ciudad.findFirst({
            where: { nombre: cliente.ciudad }
        });

        if (!ciudad) {
            // Asignar al primer departamento por simplicidad si la ciudad no existe
            const depto = await prisma.departamento.findFirst();
            ciudad = await prisma.ciudad.create({
                data: {
                    nombre: cliente.ciudad,
                    departamentoId: depto?.id || 1
                }
            });
        }

        // 3. Crear Dirección
        const direccion = await prisma.direccion.create({
            data: {
                usuarioId: usuario.id,
                ciudadId: ciudad.id,
                callePrincipal: cliente.direccion,
                numeroExterior: "N/A",
                barrio: "N/A"
            }
        });

        // 4. Crear el Pedido y Detalles
        const pedido = await prisma.pedido.create({
            data: {
                usuarioId: usuario.id,
                direccionId: direccion.id,
                estado: "PAGADO",
                total: parseFloat(total),
                detalles: {
                    create: productos.map((p: any) => ({
                        productoId: p.id,
                        cantidad: p.cantidad,
                        precioUnitario: p.precio
                    }))
                }
            },
            include: {
                detalles: true
            }
        });

        // 5. Crear registro de Pago si aplica
        if (payment_id) {
            await prisma.pago.create({
                data: {
                    pedidoId: pedido.id,
                    montoPago: parseFloat(total),
                    estado: "APROBADO"
                }
            });
        }

        // 6. Descontar Stock de Productos
        for (const p of productos) {
            await prisma.producto.update({
                where: { id: p.id },
                data: {
                    stock: {
                        decrement: p.cantidad
                    }
                }
            });
        }

        res.status(201).json({ success: true, pedido });
    } catch (error: any) {
        console.error('Error al crear pedido:', error);
        res.status(500).json({ error: "Error interno del servidor al crear el pedido." });
    }
};

export const obtenerPedidos = async (req: Request, res: Response) => {
    try {
        const pedidos = await prisma.pedido.findMany({
            include: {
                usuario: true,
                direccion: {
                    include: { ciudad: true }
                },
                detalles: {
                    include: { producto: true }
                },
                pago: true
            },
            orderBy: {
                fechaPedido: 'desc'
            }
        });

        // Mapear para la aplicación de escritorio
        const pedidosFormat = pedidos.map(p => ({
            id: p.id,
            clienteNombre: `${p.usuario.primerNombre} ${p.usuario.primerApellido}`,
            clienteCorreo: p.usuario.correo,
            direccion: `${p.direccion.callePrincipal}, ${p.direccion.ciudad.nombre}`,
            total: Number(p.total),
            estado: p.estado,
            fechaPedido: p.fechaPedido.toISOString(),
            items: p.detalles.map(d => ({
                productoId: d.producto.id,
                nombre: d.producto.nombre,
                cantidad: d.cantidad,
                precioUnitario: Number(d.precioUnitario)
            }))
        }));

        res.json(pedidosFormat);
    } catch (error: any) {
        console.error('Error al obtener pedidos:', error);
        res.status(500).json({ error: "Error al obtener pedidos." });
    }
};

export const actualizarEstadoPedido = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;

        const pedidoActualizado = await prisma.pedido.update({
            where: { id: Number(id) },
            data: { estado }
        });

        res.json({ success: true, pedido: pedidoActualizado });
    } catch (error: any) {
        console.error('Error al actualizar pedido:', error);
        res.status(500).json({ error: "Error al actualizar estado del pedido." });
    }
};
