import { Request, Response } from 'express';
import { MercadoPagoConfig, Preference } from 'mercadopago';
import prisma from '../config/db';

export const crearPreferencia = async (req: Request, res: Response) => {
    try {
        const { productos, cliente, backUrlOrigin } = req.body;
        const origin = backUrlOrigin || 'http://localhost:8081';

        // 1. Guardar en Base de Datos
        let usuario;
        let pedido;

        if (cliente && cliente.email) {
            // Buscar o crear usuario
            usuario = await prisma.usuario.findUnique({ where: { correo: cliente.email } });
            
            if (!usuario) {
                const partesNombre = cliente.nombre ? cliente.nombre.trim().split(' ') : ['Cliente'];
                const primerNombre = partesNombre[0] || 'Cliente';
                const primerApellido = partesNombre.length > 1 ? partesNombre.slice(1).join(' ') : 'Kuarzo';
                
                usuario = await prisma.usuario.create({
                    data: {
                        primerNombre,
                        primerApellido,
                        correo: cliente.email,
                        contrasena: Math.random().toString(36).slice(-8), // Pass temporal
                        telefono: cliente.telefono || null,
                        rolId: 1, // Por defecto COMPRADOR
                    }
                });
            }

            // Buscar ciudad o crear dummy
            let ciudad = await prisma.ciudad.findFirst({
                where: { nombre: { contains: cliente.ciudad || '' } }
            });

            if (!ciudad) {
                ciudad = await prisma.ciudad.findFirst(); // Toma cualquiera
                if (!ciudad) {
                    let depto = await prisma.departamento.findFirst();
                    if (!depto) depto = await prisma.departamento.create({ data: { nombre: 'General' } });
                    ciudad = await prisma.ciudad.create({ data: { nombre: cliente.ciudad || 'General', departamentoId: depto.id } });
                }
            }

            // Crear Dirección
            const direccion = await prisma.direccion.create({
                data: {
                    usuarioId: usuario.id,
                    ciudadId: ciudad.id,
                    callePrincipal: cliente.direccion || 'Conocida',
                    numeroExterior: 'S/N',
                    barrio: 'General',
                    referencia: cliente.documento ? `CC/NIT: ${cliente.documento}` : null
                }
            });

            // Crear Pedido y Detalles
            const total = productos.reduce((acc: number, p: any) => acc + (Number(p.precio) * Number(p.cantidad)), 0);
            
            pedido = await prisma.pedido.create({
                data: {
                    usuarioId: usuario.id,
                    direccionId: direccion.id,
                    total,
                    estado: 'PENDIENTE',
                    detalles: {
                        create: productos.map((p: any) => ({
                            productoId: Number(p.id),
                            cantidad: Number(p.cantidad),
                            precioUnitario: Number(p.precio)
                        }))
                    }
                }
            });
        }

        // 2. Crear Preferencia Mercado Pago
        const client = new MercadoPagoConfig({
            accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
        });

        const preference = new Preference(client);

        const preferenceBody: any = {
            items: productos.map((p: any) => ({
                title: p.nombre,
                quantity: Number(p.cantidad),
                unit_price: Number(p.precio),
                currency_id: 'COP',
            })),
            back_urls: {
                success: `${origin}/checkout?status=success${pedido ? `&orderId=${pedido.id}` : ''}`,
                failure: `${origin}/checkout?status=failure${pedido ? `&orderId=${pedido.id}` : ''}`,
                pending: `${origin}/checkout?status=pending${pedido ? `&orderId=${pedido.id}` : ''}`,
            },
            auto_return: 'approved'
        };

        const response = await preference.create({
            body: preferenceBody,
        });

        res.json({
            id: response.id,
            init_point: response.init_point,
            pedidoId: pedido?.id
        });
    } catch (error: any) {
        console.error('Error Mercado Pago:', error?.message || error);
        res.status(500).json({
            error: 'Error al crear preferencia',
            detalle: error?.message || 'Error desconocido',
        });
    }
};

export const confirmarPago = async (req: Request, res: Response) => {
    try {
        const { orderId } = req.body;
        
        if (!orderId) {
            return res.status(400).json({ error: 'Falta orderId' });
        }

        const pedidoData = await prisma.pedido.findUnique({
            where: { id: Number(orderId) },
            include: { detalles: true }
        });

        if (!pedidoData) {
            return res.status(404).json({ error: 'Pedido no encontrado' });
        }

        // Evitar descontar stock múltiples veces si el usuario recarga la página
        if (pedidoData.estado === 'PROCESADO') {
            return res.json({
                message: 'El pedido ya estaba procesado',
                pedido: pedidoData
            });
        }

        const pedido = await prisma.pedido.update({
            where: { id: Number(orderId) },
            data: { estado: 'PROCESADO' }
        });

        // Descontar stock de los productos comprados
        for (const detalle of pedidoData.detalles) {
            await prisma.producto.update({
                where: { id: detalle.productoId },
                data: {
                    stock: {
                        decrement: detalle.cantidad
                    }
                }
            });
        }

        res.json({
            message: 'Pago confirmado, estado actualizado y stock descontado',
            pedido
        });
    } catch (error: any) {
        console.error('Error al confirmar pago:', error);
        res.status(500).json({ error: 'Error interno al actualizar pedido' });
    }
};