import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import {
    obtenerCarrito,
    sincronizarCarrito,
    vaciarCarrito
} from '../controllers/carrito.controller';

const router = Router();

// Todas las rutas requieren autenticación
router.get('/', authMiddleware as any, obtenerCarrito as any);
router.post('/sync', authMiddleware as any, sincronizarCarrito as any);
router.delete('/', authMiddleware as any, vaciarCarrito as any);

export default router;
