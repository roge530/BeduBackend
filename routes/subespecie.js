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

router.get('/', getSubespecies);
router.get('/:id', getSubespecie);
router.get('/e/:id', getSubespecieByEspecie);
router.post('/', createSubespecie);
router.patch('/:id', updateSubespecie);
router.delete('/:id', deleteSubespecie);

export default router;