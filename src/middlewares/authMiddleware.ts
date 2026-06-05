import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthenticatedRequest extends Request {
    user?: {
        userId: number;
        rolId: number;
    };
}

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                error: 'Acceso no autorizado. Token no proporcionado.'
            });
        }

        const token = authHeader.split(' ')[1];
        const jwtSecret = process.env.JWT_SECRET || 'KUARZO_SUPER_SECRET_2026';

        const decoded = jwt.verify(token, jwtSecret) as {
            userId: number;
            rolId: number;
        };

        // Casteamos req a AuthenticatedRequest para añadir la propiedad user
        (req as AuthenticatedRequest).user = {
            userId: decoded.userId,
            rolId: decoded.rolId
        };

        next();

    } catch (error) {
        console.error('Error al verificar JWT:', error);
        return res.status(401).json({
            error: 'Acceso no autorizado. Token inválido o expirado.'
        });
    }
};
