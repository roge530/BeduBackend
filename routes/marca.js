import {Router} from 'express';
const router = Router();
import {
    createMarca,
    getMarcas,
    updateMarca,
    deleteMarca
} from '../controllers/marca.js'
import { vetAuth, assistVetAut } from '../middlewares/usersAuth.js';

router.get('/', assistVetAut, getMarcas);
router.post('/', vetAuth, createMarca);
router.patch('/:id', vetAuth, updateMarca);
router.delete('/:id', vetAuth, deleteMarca);

export default router;