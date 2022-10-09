import {Router} from 'express';
const router = Router();
import {
    createService,
    getServices,
    updateService,
    deleteService
} from '../controllers/servicio.js'
import { vetAuth, assistVetAut } from '../middlewares/usersAuth.js';

router.get('/', assistVetAut, getServices);
router.post('/', vetAuth, createService);
router.patch('/:id', vetAuth, updateService);
router.delete('/:id', vetAuth, deleteService);

export default router;