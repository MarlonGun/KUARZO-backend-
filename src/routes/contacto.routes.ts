import { Router } from 'express';
import {
    crearContacto,
    obtenerContactos,
    marcarLeido,
    eliminarContacto
} from '../controllers/contacto.controller';
import { authMiddleware, adminMiddleware } from '../middlewares/auth.middleware';

const router = Router();

// Ruta pública (para el formulario de contacto en la web)
router.post('/', crearContacto);

// Rutas protegidas (para el panel de administrador)
router.get('/', authMiddleware, adminMiddleware, obtenerContactos);
router.put('/:id/leido', authMiddleware, adminMiddleware, marcarLeido);
router.delete('/:id', authMiddleware, adminMiddleware, eliminarContacto);

export default router;
