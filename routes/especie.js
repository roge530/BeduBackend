import {Router} from 'express'
const router = Router()
import {
    createEspecie,
    getEspecie,
    getEspecies,
    updateEspecie,
    deleteEspecie
} from '../controllers/especie';

router.get('/', getEspecies);
router.get('/:id', getEspecie);
router.post('/', createEspecie);
router.patch('/:id', updateEspecie);
router.delete('/:id', deleteEspecie);

export default router;