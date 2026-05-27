import { Router } from 'express';
import { crearPreferencia } from '../controllers/payment.controller';

const router = Router();

router.post('/crear-preferencia', crearPreferencia);

export default router;