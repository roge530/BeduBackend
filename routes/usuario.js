import {Router} from 'express';
const router = Router();
import {
    createUsuario,
    getUsuarios,
    updateUsuario,
    deleteUsuario
} from '../controllers/usuario'

router.get('/', getUsuarios);
router.post('/', createUsuario);
router.patch('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);

module.exports = router;