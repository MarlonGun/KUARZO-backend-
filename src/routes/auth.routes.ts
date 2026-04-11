import { Router } from 'express';
import { register } from '../controllers/auth.controller';

const router = Router();

//Ruta: POST http://localhost:3000/api/auth/register
router.post('/register', register);

export default router;