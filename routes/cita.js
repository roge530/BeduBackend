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
* @swagger
* definitions:
*   Cita:
*     required:
*       - fecha           
*     properties:
*       fecha:
*         type: string
*/
import { assistVetAut } from '../middlewares/usersAuth.js';
import { customerAuth} from '../middlewares/customerAuth.js'

/** 
 *@swagger
 *
 * /cita/{id}:
 *  get:
 *    tags: [Cita]  
 *    summary: Obtiene cita por medio del id
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Despliega la cita del id correspondiente
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *     
 * 
 */
router.get('/:id', assistVetAut, getCita);
/** 
 *@swagger
 * /cita/c/{clienteId}:
 *  get:
 *    tags: [Cita]
 *    summary: Obtiene cita por medio del campo clienteId
 *    parameters:
 *    - in: path
 *      name: clienteId
 *      schema:
 *        type: integer
 *      required: true
 *    description: Despliega la cita del cliente seleccionado
 *    responses:
 *      '201':
 *        description: Respuesta exitosa
 */
router.get('/c/:id', assistVetAut, getCitasByCliente);
router.post('/clientes/citas', customerAuth, getCitasByCliente);
/** 
 *@swagger
 * /cita/m/{mascotaId}:
 *  get:
 *    tags: [Cita]  
 *    summary: Obtiene cita por medio del campo mascotaId
 *    parameters:
 *    - in: path
 *      name: mascotaId
 *      schema:
 *        type: integer
 *      required: true
 *    description: Despliega la cita de la mascota seleccionada
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 */
router.get('/m/:id', assistVetAut, getCitasByMascota);
/**
*@swagger
* /cita/:
*  post:
*     tags: [Cita] 
*     summary: Crea una cita 
*     description: Crea una cita con la fecha
*     produces:
*       - application/json
*     parameters:   
*       - name: Fecha
*         description: Fecha de la cita con el formato mm-dd-aaa
*         in: body
*         required: true
*         type: string
*         schema:
*           type: object
*           $ref: '#/definitions/Cita'      
*     responses:
*         200:
*           description: Cita creada exitosamente            
*         400:
*           description: Elemento(s) inválidos                
*           
*/
router.post('/', assistVetAut, createCita);
/**
*@swagger
* /cita/{id}:
*  patch:
*     summary: Edita un cita
*     description: Editar una cita con una fecha nueva 
*     tags: [Cita]
*     produces:
*       - application/json
*     parameters:
*       - in: path
*         name: id
*       - name: fecha
*         description: Fecha de la cita
*         in: body
*         required: true
*         type: string
*     responses:
*         200:
*           description: Actalización exitosa            
*         400:
*           description: Elemento(s) inválidos            
*           
*/
router.patch('/:id', assistVetAut, updateCita);
/** 
 *@swagger
 *
 * /cita/{id}:
 *  delete:
 *    tags: [Cita]  
 *    summary: Borra la cita 
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Borra la cita seleccionada mediante el id
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *     
 * 
 */
router.delete('/:id', assistVetAut, deleteCita);

export default router;