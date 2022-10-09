import {Router} from 'express';
const router = Router();
import {
    createService,
    getServices,
    updateService,
    deleteService
} from '../controllers/servicio.js'
import { vetAuth, assistVetAut } from '../middlewares/usersAuth.js';

/**
* @swagger
* definitions:
*   Servicio:
*     required:
*       - tipo
*       - precio             
*     properties:
*       tipo:
*         type: string
*       precio:
*         type: float  
*/

/** 
 *@swagger
 *
 * /servicio/:
 *  get:
 *    tags: [Servicio]  
 *    summary: Obtiene todas los servicios registrados
 *    description: Despliega todas los servicios registradas
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      
 */
router.get('/', assistVetAut, getServices);
/**
*@swagger
* /servicio:
*  post:
*     tags: [Servicio] 
*     summary: Crea un nuevo servicio
*     description: Crea el registro del servicio a partir del JSON correspondiente 
*       - application/json
*     parameters:   
*       - name: Datos del servicio
*         description: JSON con datos de la especie
*         in: body         
*         schema:
*            type: object
*            $ref: '#/definitions/Servicio'   
*     responses:
*         201:
*           description: Servicio dado de alta exitosamente
*         400:
*           description: Elemento(s) inválidos                          
*/
router.post('/', vetAuth, createService);

/**
*@swagger
* /servicio/{id}:
*  patch:
*     summary: Edita un servicio
*     description: Edita un servicio con nueva informacion
*     tags: [Servicio]
*     produces:
*       - application/json
*     parameters:
*       - in: path
*         name: id
*       - name: Datos nuevos del servicio
*         description: Datos nuevos del servicio
*         in: body
*         schema:
*           type: object
*           $ref: '#/definitions/Servicio' 
*     responses:
*         200:
*           description: Actalización exitosa                   
*/
router.patch('/:id', vetAuth, updateService);

/** 
 *@swagger
 *
 * /servicio/{id}:
 *  delete:
 *    tags: [Servicio]  
 *    summary: Borra el servicio 
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Borra el servicio seleccionado mediante el id
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 */
router.delete('/:id', vetAuth, deleteService);

export default router;