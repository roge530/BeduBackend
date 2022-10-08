import {Router} from 'express';
const router = Router();
import {
    createUsuario,
    getUsuarios,
    updateUsuario,
    deleteUsuario
} from '../controllers/usuario.js'

router.get('/', getUsuarios);
router.post('/', createUsuario);
router.patch('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);

export default router