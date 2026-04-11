import { Router } from 'express';
import { index, healthCheck } from '../controllers/api.controller';

//Crear la instancia de Router
const router = Router();

//Definición de rutas
router.get('/', index);
router.get('/health', healthCheck);

//Exportar el router
export default router;