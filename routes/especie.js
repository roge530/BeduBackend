import {Router} from 'express'
const router = Router()
import {
    createEspecie,
    getEspecie,
    getEspecies,
    updateEspecie,
    deleteEspecie
} from '../controllers/especie.js';
import { vetAuth, assistVetAut } from '../middlewares/usersAuth.js';

router.get('/', assistVetAut, getEspecies);
router.get('/:id', getEspecie);
router.post('/', vetAuth, createEspecie);
router.patch('/:id', vetAuth, updateEspecie);
router.delete('/:id', vetAuth, deleteEspecie);

export default router;