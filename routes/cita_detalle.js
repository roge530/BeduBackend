import {Router} from 'express'
const router = Router()
import {
    createCita_detalle,
    getCita_detalle,
    updateCita_detalle,
    deleteCita_detalle
} from'../controllers/cita_detalle.js';
import { vetAuth, assistVetAut } from '../middlewares/usersAuth.js';

router.get('/:id', assistVetAut, getCita_detalle);
router.post('/', assistVetAut, createCita_detalle);
router.patch('/:citaId/:servicioId', assistVetAut, updateCita_detalle);
router.delete('/:citaId/:servicioId', assistVetAut, deleteCita_detalle);

export default router;