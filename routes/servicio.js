import {Router} from 'express';
const router = Router();
import {
    createService,
    getServices,
    updateService,
    deleteService
} from '../controllers/servicio.js'

router.get('/', getServices);
router.post('/',createService);
router.patch('/:id',updateService);
router.delete('/:id',deleteService);

export default router;