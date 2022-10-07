import {Router} from 'express';
const router = Router();
import {
    createMascota,
    getMascota,
    updateMascota,
    deleteMascota
} from '../controllers/mascota'

router.get('/:id', getMascota);
router.post('/', createMascota);
router.patch('/:id', updateMascota);
router.delete('/:id', deleteMascota);

export default router;