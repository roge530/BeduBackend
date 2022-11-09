import {Router} from 'express'
const router = Router()
import {
    createAppointment_detail,
    getAppointment_detail,
    updateAppointment_detail,
    deleteAppointment_detail
} from'../controllers/appointment_detail.js';
import { vetAuth, assistVetAut } from '../middlewares/usersAuth.js';

router.get('/:id', assistVetAut, getAppointment_detail);
router.post('/', assistVetAut, createAppointment_detail);
router.patch('/:citaId/:servicioId', assistVetAut, updateAppointment_detail);
router.delete('/:citaId/:servicioId', assistVetAut, deleteAppointment_detail);

export default router;