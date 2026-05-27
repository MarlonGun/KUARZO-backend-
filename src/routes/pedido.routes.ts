import { Router } from 'express';

import {
    crearPedido,
    obtenerPedidos,
    obtenerPedido
} from '../controllers/pedido.controller';

const router = Router();

// Obtener todos
router.get('/', obtenerPedidos);

// Obtener uno
router.get('/:id', obtenerPedido);

// Crear
router.post('/', crearPedido);

export default router;