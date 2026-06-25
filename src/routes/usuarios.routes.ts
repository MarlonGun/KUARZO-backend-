import { Router } from 'express';
import { obtenerUsuarios, actualizarEstadoUsuario, actualizarRolUsuario } from '../controllers/usuarios.controller';

const router = Router();

router.get('/', obtenerUsuarios);
router.put('/:id/estado', actualizarEstadoUsuario);
router.put('/:id/rol', actualizarRolUsuario);

export default router;
