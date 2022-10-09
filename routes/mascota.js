import {Router} from 'express';
const router = Router();
import {
    createMascota,
    getMascota,
    getMascotaByCliente,
    updateMascota,
    deleteMascota
} from '../controllers/mascota.js'
import { assistVetAut } from '../middlewares/usersAuth.js';
import { customerAuth} from '../middlewares/customerAuth.js'

router.get('/:id', assistVetAut, getMascota);
router.get('/c/:id', assistVetAut, getMascotaByCliente);
router.post('/clientes', customerAuth, getMascotaByCliente);
router.post('/', assistVetAut, createMascota);
router.patch('/:id', assistVetAut, updateMascota);
router.delete('/:id', assistVetAut, deleteMascota);

export default router;