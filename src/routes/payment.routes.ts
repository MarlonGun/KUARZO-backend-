import { Router } from 'express';
import { crearPreferencia, confirmarPago } from '../controllers/payment.controller';

const router = Router();

router.post('/crear-preferencia', crearPreferencia);
router.post('/confirmar-pago', confirmarPago);

export default router;