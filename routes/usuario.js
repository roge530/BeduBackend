import {Router} from 'express';
const router = Router();
import {
    createUsuario,
    getUsuarios,
    updateUsuario,
    deleteUsuario,
    logIn
} from '../controllers/usuario.js'

router.get('/', getUsuarios);
router.post('/signUp', createUsuario);
router.patch('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);
router.post('/logIn', logIn);

export default router