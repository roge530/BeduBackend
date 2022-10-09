import {Router} from 'express';
const router = Router();
import {
    createUsuario,
    getUsuarios,
    updateUsuario,
    deleteUsuario,
    logIn
} from '../controllers/usuario.js'
import { adminAuth } from '../middlewares/usersAuth.js';

router.get('/', adminAuth, getUsuarios);
router.post('/signUp', adminAuth, createUsuario);
router.patch('/:id', adminAuth, updateUsuario);
router.delete('/:id', adminAuth, deleteUsuario);
router.post('/logIn', logIn);

export default router