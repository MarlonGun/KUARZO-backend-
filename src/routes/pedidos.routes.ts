import { Router } from 'express';
import { crearPedido, obtenerPedidos, actualizarEstadoPedido } from '../controllers/pedidos.controller';

const router = Router();

router.post('/', crearPedido);
router.get('/', obtenerPedidos); // Idealmente protegido con authMiddleware, pero lo dejamos abierto por simplicidad como en la Desktop App
router.put('/:id', actualizarEstadoPedido);

export default router;
