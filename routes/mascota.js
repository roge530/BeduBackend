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
/**
* @swagger
* definitions:
*   Mascota:
*     required:
*       - nombre
*       - tamanio  
*       - peso
*       - especieId
*       - subespecieId  
*       - clienteId         
*     properties:
*       nombre:
*         type: string
*         required: true   
*       tamanio:
*         type: string
*       peso:
*         type: double
*       especieId:
*         type: integer
*       subespecieId:
*         type: integer 
*       clienteId:
*         type: integer
*/

/** 
 *@swagger
 * /mascota/{id}:
 *  get:
 *    tags: [Mascota]  
 *    summary: Obtiene mascota por medio del id
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Despliega la mascota del id correspondiente
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *     
 */
router.get('/:id', assistVetAut, getMascota);
/** 
 *@swagger
 * /mascota/c/{id}:
 *  get:
 *    tags: [Mascota]  
 *    summary: Obtiene las mascotas asociadas al cliente
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Despliega las mascotas del cliente logeado assistente Vet
 *    response:  
 *      '200':
 *        description: Respuesta exitosa
 *     
 */
router.get('/c/:id', assistVetAut, getMascotaByCliente);
/** 
 *@swagger
 * /mascota/clientes:
 *  get:
 *    tags: [Mascota]  
 *    summary: Obtiene las mascotas asociadas al cliente
 *    description: Despliega las mascotas del cliente logeado cliente 
 *    response: 
 *      '200':
 *        description: Respuesta exitosa
 *     
 */
router.post('/clientes', customerAuth, getMascotaByCliente);
/**
*@swagger
* /mascota/:
*  post:
*     tags: [Mascota] 
*     summary: Crea una mascota 
*     description: Crea una mascota 
*     produces:
*       - application/json
*     parameters:   
*       - name: Datos de la mascota
*         description: JSON con los datos de la mascota
*         in: body
*         required: true
*         type: string
*         schema:
*           type: object
*           $ref: '#/definitions/Mascota'      
*     responses:
*         201:
*           description: Mascota creada exitosamente            
*         400:
*           description: Elemento(s) inválidos                
*           
*/
router.post('/', assistVetAut, createMascota);
/** 
 *@swagger
 * /mascota/c/{clienteId}:
 *  get:
 *    tags: [Mascota]  
 *    summary: Obtiene mascota por medio de clienteId
 *    parameters:
 *    - in: path
 *      name: clienteId
 *      schema:
 *        type: integer
 *      required: true
 *    description: Despliega la mascota del id de cliente correspondiente
 *    responses:
 *      '200':
 *          description: Respuesta exitosa 
 */
router.get('/c/:id', getMascotaByCliente);

/**
*@swagger
* /mascota/{id}:
*  patch:
*     tags: [Mascota]   
*     summary: Edita un mascota
*     description: Editar una mascota con informacion nueva
*     produces:
*       - application/json
*     parameters:
*       - in: path
*         name: id
*       - name: Informacion de la mascota
*         description: Datos nuevos de la mascota
*         in: body
*         schema: 
*           type: object
*           $ref: '#/definitions/Mascota' 
*     responses:
*         200:
*           description: Actalización exitosa
*         400:
*           description: Elemento(s) inválidos                       
*           
*/
router.patch('/:id', assistVetAut, updateMascota);
/** 
 *@swagger
 * /mascota/{id}:
 *  delete:
 *    tags: [Mascota]  
 *    summary: Borra la mascota  
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Borra la mascota seleccionada mediante el id
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 */
router.delete('/:id', assistVetAut, deleteMascota);

export default router;