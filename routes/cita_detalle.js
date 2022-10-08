import {Router} from 'express'
const router = Router()
import {
    createCita_detalle,
    getCita_detalle,
    updateCita_detalle,
    deleteCita_detalle
} from'../controllers/cita_detalle.js';

router.get('/:id', getCita_detalle);
router.post('/', createCita_detalle);
router.patch('/:citaId/:servicioId', updateCita_detalle);
router.delete('/:citaId/:servicioId', deleteCita_detalle);

export default router;