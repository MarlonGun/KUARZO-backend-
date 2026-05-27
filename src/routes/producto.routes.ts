import { Router } from 'express';
import { crearProducto, obtenerProductos } from '../controllers/producto.controller';

const router = Router();

router.get('/', obtenerProductos);
router.post('/', crearProducto);

export default router;
