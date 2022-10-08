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

router.get('/:id', getCita);
router.get('/c/:id',getCitasByCliente);
router.get('/m/:id',getCitasByMascota);
router.post('/', createCita);
router.patch('/:id', updateCita);
router.delete('/:id', deleteCita);

export default router;