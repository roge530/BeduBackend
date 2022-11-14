import {Router} from 'express'
const router = Router()
import {
    createAppointment,
    getAppointment,
    updateAppointment,
    deleteAppointment,
    getAppointmentsByCustomer,
    getAppointmentByPet
} from '../controllers/appointment.js'
/**
* @swagger
* components:
*   schemas:
*     appointment:
*       type: object
*       properties:
*         date:
*           type: string
*           example: '2022-01-01'
*       required:
*           - date
*/
import { assistVetAut } from '../middlewares/usersAuth.js';
import { customerAuth} from '../middlewares/customerAuth.js'
import { create } from 'domain';

/** 
 *@swagger
 * paths:
 *   /appointment/{id}:
 *       get:
 *         tags: [Appointment]  
 *         summary: Gets the appointment by Id
 *         parameters:
 *          - in: path
 *            name: id
 *            schema:
 *             type: integer
 *            required: true
 *            description: Gets the appointment by Id
 *         responses:
 *           '200':
 *             description: Successful  response
 *     
 * 
 */
router.get('/:id', assistVetAut, getAppointment);
/** 
 *@swagger
 * paths:
 *  /appointment/c/{clientId}:
 *   get:
 *    tags: [Appointment]
 *    summary: Get appointment by client's Id
 *    parameters:
 *    - in: path
 *      name: clientId
 *      schema:
 *        type: integer
 *      required: true
 *    description: Get appointment by client's Id
 *    responses:
 *      '201':
 *        description: Successful  response
 */
router.get('/c/:id', assistVetAut, getAppointmentsByCustomer);
/** 
 *@swagger
 * paths:
 *  /appointment/client/appointment:
 *   post:
 *     tags: [Appointment]
 *     summary: Gets the appointment by clientId
 *     description: Gets the appointment by clientId
 *     responses:
 *       '201':
 *         description: Successful  response
 */
router.post('/clientes/citas', customerAuth, getAppointmentsByCustomer);
/** 
 *@swagger
 * /appointment/m/{petId}:
 *  get:
 *    tags: [Appointment]  
 *    summary: Gets appointment by petId
 *    parameters:
 *    - in: path
 *      name: petId
 *      required: true
 *      schema:
 *        type: integer  
 *    description: Gets appointment by petId
 *    responses:
 *      '200':
 *        description: Successful  response
 */
router.get('/m/:id', assistVetAut, getAppointmentByPet);
/**
*@swagger
* paths:
*   /appointment:
*       post:        
*        tags: [Appointment]
*        security:            
*          - bearerAuth: []     
*        summary: Create an appointment 
*        description: Create an appointment 
*        requestBody:
*           required: true
*           content:
*               application/json:
*                   schema:
*                       $ref: '#/components/schemas/appointment'      
*        responses:
*           '201':
*               description: Created
*/
router.post('/', assistVetAut, createAppointment);
/**
*@swagger
* /appointment/{id}:
*  patch:
*     summary: Edit an appointment
*     description: Edit una appointment with a new date
*     tags: [Appointment]
*     produces:
*       - application/json
*     parameters:
*       - in: path
*         name: id
*     requestBody:
*       required: true
*       content:
*               application/json:
*                   schema:
*                       $ref: '#/components/schemas/appointment'
*     responses:
*       '200':
*         description: Successful ful request            
*       '400':
*         description: Invalid elements           
*           
*/
router.patch('/:id', assistVetAut, updateAppointment);
/** 
 *@swagger
 *
 * /appointment/{id}:
 *  delete:
 *    tags: [Appointment]  
 *    summary: Borra la appointment 
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Borra la appointment seleccionada mediante el id
 *    responses:
 *      '200':
 *        description: Successful  response
 *     
 * 
 */
router.delete('/:id', assistVetAut, deleteAppointment);

export default router;