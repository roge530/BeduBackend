import {Router} from 'express';
const router = Router();
import {
    createMarca,
    getMarca,
    updateMarca,
    deleteMarca
} from '../controllers/marca'

router.get('/', getMarca);
router.post('/',createMarca);
router.patch('/:id',updateMarca);
router.delete('/:id',deleteMarca);

export default router;