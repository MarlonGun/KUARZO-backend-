import { Router } from 'express';
import { 
    crearProducto, 
    obtenerProductos, 
    obtenerProducto, 
    actualizarProducto, 
    eliminarProducto,
    obtenerProductosDestacados
} from '../controllers/producto.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', obtenerProductos);
router.get('/destacados', obtenerProductosDestacados);
router.get('/:id', obtenerProducto);
router.post('/', authMiddleware, crearProducto);
router.put('/:id', authMiddleware, actualizarProducto);
router.delete('/:id', authMiddleware, eliminarProducto);

export default router;
