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
        const jwtSecret = process.env.JWT_SECRET;

        if (!jwtSecret) {
            console.error('JWT_SECRET no está definido en las variables de entorno.');
            return res.status(500).json({ error: 'Error de configuración del servidor.' });
        }

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

export const adminMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const user = (req as AuthenticatedRequest).user;
    if (!user || user.rolId !== 2) {
        return res.status(403).json({
            error: 'Acceso denegado. Se requiere rol de administrador.'
        });
    }
    next();
};
