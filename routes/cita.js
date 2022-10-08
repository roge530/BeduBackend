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

/** 
 *@swagger
 * /cita/{id}:
 *  get:
 *    summary: Get a name message
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Use to return your name with a message
 *    responses:
 *      '200':
 *        description: A successful response
 * 
 */
router.get('/:id', getCita);
router.get('/c/:id',getCitasByCliente);
router.get('/m/:id',getCitasByMascota);
router.post('/', createCita);
router.patch('/:id', updateCita);
router.delete('/:id', deleteCita);

export default router;