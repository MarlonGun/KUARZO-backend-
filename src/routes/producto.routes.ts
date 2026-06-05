import { Router } from 'express';
import { 
    crearProducto, 
    obtenerProductos, 
    obtenerProducto, 
    actualizarProducto, 
    eliminarProducto 
} from '../controllers/producto.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', obtenerProductos);
router.get('/:id', obtenerProducto);
router.post('/', crearProducto);
router.put('/:id', authMiddleware, actualizarProducto);
router.delete('/:id', authMiddleware, eliminarProducto);

export default router;
