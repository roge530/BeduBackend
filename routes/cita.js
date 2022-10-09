import {Router} from 'express'
const router = Router()
import {
    createCita,
    getCita,
    updateCita,
    deleteCita,
    getCitasByCliente,
    getCitasByMascota
} from '../controllers/cita.js'
import { assistVetAut } from '../middlewares/usersAuth.js';
import { customerAuth} from '../middlewares/customerAuth.js'

router.get('/:id', assistVetAut, getCita);
router.get('/c/:id', assistVetAut, getCitasByCliente);
router.post('/clientes/citas', customerAuth, getCitasByCliente);
router.get('/m/:id', assistVetAut, getCitasByMascota);
router.post('/', assistVetAut, createCita);
router.patch('/:id', assistVetAut, updateCita);
router.delete('/:id', assistVetAut, deleteCita);

export default router;