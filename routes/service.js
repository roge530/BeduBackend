import {Router} from 'express';
const router = Router();
import {
    createService,
    getServices,
    updateService,
    deleteService
} from '../controllers/service.js'
import { vetAuth, assistVetAut } from '../middlewares/usersAuth.js';

/**
* @swagger
* definitions:
*   Service:
*     required:
*       - type
*       - price             
*     properties:
*       type:
*         type: string
*       price:
*         type: float  
*/

/** 
 *@swagger
 *
 * /service/:
 *  get:
 *    tags: [Service]  
 *    summary: Return all the services' entries
 *    description: Return all the services' entries
 *    responses:
 *      '200':
 *        description: Successful response
 *      
 */
router.get('/', assistVetAut, getServices);
/**
*@swagger
* /service:
*  post:
*     tags: [Service] 
*     summary: Return services' entries
*     description: Return services' entries
*       - application/json
*     parameters:   
*       - name: Service data
*         description: Services' data JSON 
*         in: body         
*         schema:
*            type: object
*            $ref: '#/definitions/Services'   
*     responses:
*         201:
*           description: Sucessful response
*         400:
*           description: Invalid element(s)                          
*/
router.post('/', vetAuth, createService);

/**
*@swagger
* /service/{id}:
*  patch:
*     summary: Create service entry
*     description: Create service entry
*     tags: [Service]
*     produces:
*       - application/json
*     parameters:
*       - in: path
*         name: id
*       - name: New service data
*         description: New service data
*         in: body
*         schema:
*           type: object
*           $ref: '#/definitions/Service' 
*     responses:
*         200:
*           description: Successfully entry created                   
*/
router.patch('/:id', vetAuth, updateService);

/** 
 *@swagger
 *
 * /service/{id}:
 *  delete:
 *    tags: [Service]  
 *    summary: Delete the service 
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Delete the service by id
 *    responses:
 *      '200':
 *        description: Successful response
 */
router.delete('/:id', vetAuth, deleteService);

export default router;