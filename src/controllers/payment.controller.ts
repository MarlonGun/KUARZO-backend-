import { Request, Response } from 'express';
import { MercadoPagoConfig, Preference } from 'mercadopago';

export const crearPreferencia = async (req: Request, res: Response) => {
    try {
        const { productos, backUrlOrigin } = req.body;
        const origin = backUrlOrigin || 'http://localhost:8081';

        // Crear cliente DENTRO del handler para que el token ya esté cargado por dotenv
        const client = new MercadoPagoConfig({
            accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
        });

        const preference = new Preference(client);

        // back_urls solo funcionan con URLs públicas (no localhost)
        const isLocalhost = origin.includes('localhost') || origin.includes('127.0.0.1');

        const preferenceBody: any = {
            items: productos.map((p: any) => ({
                title: p.nombre,
                quantity: p.cantidad,
                unit_price: Number(p.precio),
                currency_id: 'COP',
            })),
        };

        if (!isLocalhost) {
            preferenceBody.back_urls = {
                success: `${origin}/checkout?status=success`,
                failure: `${origin}/checkout?status=failure`,
                pending: `${origin}/checkout?status=pending`,
            };
            preferenceBody.auto_return = 'approved';
        }

        const response = await preference.create({
            body: preferenceBody,
        });

        res.json({
            id: response.id,
            init_point: response.init_point,
        });
    } catch (error: any) {
        console.error('Error Mercado Pago:', error?.message || error);
        res.status(500).json({
            error: 'Error al crear preferencia',
            detalle: error?.message || 'Error desconocido',
        });
    }
};