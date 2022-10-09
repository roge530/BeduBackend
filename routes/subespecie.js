import {Router} from 'express';
const router = Router();
import {
    createSubespecie,
    getSubespecie,
    getSubespecies,
    updateSubespecie,
    deleteSubespecie,
    getSubespecieByEspecie
} from '../controllers/subespecie.js';
import { vetAuth, assistVetAut } from '../middlewares/usersAuth.js';

router.get('/', assistVetAut, getSubespecies);
router.get('/:id', getSubespecie);
router.get('/e/:id', assistVetAut, getSubespecieByEspecie);
router.post('/', vetAuth, createSubespecie);
router.patch('/:id', vetAuth, updateSubespecie);
router.delete('/:id', vetAuth, deleteSubespecie);

export default router;