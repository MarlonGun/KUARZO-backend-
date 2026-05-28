import { Router } from 'express';
import { login, register, forgotPassword, resetPassword } from '../controllers/auth.controller';

const router = Router();

//Ruta: POST http://localhost:3000/api/auth/register
router.post('/register', register);

//Ruta: POST http://localhost:3000/api/auth/login
router.post('/login', login);

//Ruta: POST http://localhost:3000/api/auth/forgot-password
router.post('/forgot-password', forgotPassword);

//Ruta: POST http://localhost:3000/api/auth/reset-password
router.post('/reset-password', resetPassword);

export default router;