import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';

import {
    crearPedido,
    obtenerPedidos,
    obtenerPedido,
    actualizarEstadoPedido
} from '../controllers/pedido.controller';

const router = Router();

// Obtener todos (solo admin autenticado)
router.get('/', authMiddleware, obtenerPedidos);

// Obtener uno
router.get('/:id', obtenerPedido);

// Crear
router.post('/', crearPedido);

// Actualizar estado (solo admin)
router.put('/:id', authMiddleware, actualizarEstadoPedido);

export default router;