import {Router} from 'express';
const router = Router();
import {
    createPet,
    getPet,
    getPetByClient,
    updatePet,
    deletePet
} from '../controllers/pet.js'
import { assistVetAut } from '../middlewares/usersAuth.js';
import { customerAuth} from '../middlewares/customerAuth.js'
/**
* @swagger
* definitions:
*   Pet:
*     required:
*       - name
*       - size  
*       - weight
*       - speciesId
*       - subspeciesId  
*       - cilentId         
*     properties:
*       name:
*         type: string
*         required: true   
*       size:
*         type: string
*       weight:
*         type: double
*       speciesId:
*         type: integer
*       subspeciesId:
*         type: integer 
*       cilentId:
*         type: integer
*/

/** 
 *@swagger
 * /pet/{id}:
 *  get:
 *    tags: [Pet]  
 *    summary: Get the pet(s) associated with the given id
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Get the pet(s) associated with the given id
 *    responses:
 *      '200':
 *        description: Successful response
 *     
 */
router.get('/:id', assistVetAut, getPet);
/** 
 *@swagger
 * /pet/c/{id}:
 *  get:
 *    tags: [Pet]  
 *    summary: Return the pet(s) associated with vet assistant
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Return the pet(s) associated with vet assistant
 *    response:  
 *      '200':
 *        description: Successful response
 *     
 */
router.get('/c/:id', assistVetAut, getPetByClient);
/** 
 *@swagger
 * /pet/clientes:
 *  get:
 *    tags: [Pet]  
 *    summary: Return the pet(s) associeted with an specific client
 *    description: Return the pet(s) associeted with an specific client
 *    response: 
 *      '200':
 *        description: Successful response
 *     
 */
router.post('/clientes', customerAuth, getPetByClient);
/**
*@swagger
* /pet/:
*  post:
*     tags: [Pet] 
*     summary: Create a pet 
*     description: Create a pet 
*     produces:
*       - application/json
*     parameters:   
*       - name: Pet's data
*         description: JSON containing pet's data
*         in: body
*         required: true
*         type: string
*         schema:
*           type: object
*           $ref: '#/definitions/Pet'      
*     responses:
*         201:
*           description: Pet successfuly created   
*         400:
*           description: Invalid element(s)                
*           
*/
router.post('/', assistVetAut, createPet);
/** 
 *@swagger
 * /pet/c/{cilentId}:
 *  get:
 *    tags: [Pet]  
 *    summary: Get pet(s) associated with clientId
 *    parameters:
 *    - in: path
 *      name: cilentId
 *      schema:
 *        type: integer
 *      required: true
 *    description: Get pet(s) associated with clientId
 *    responses:
 *      '200':
 *          description: Successful response
 */
router.get('/c/:id', getPetByClient);

/**
*@swagger
* /pet/{id}:
*  patch:
*     tags: [Pet]   
*     summary: Edit pet entry
*     description: Editar una pet con informacion nueva
*     produces:
*       - application/json
*     parameters:
*       - in: path
*         name: id
*       - name: Pet's information
*         description: New pet data
*         in: body
*         schema: 
*           type: object
*           $ref: '#/definitions/Pet' 
*     responses:
*         200:
*           description: Successful response
*         400:
*           description: Invalid element(s)                    
*           
*/
router.patch('/:id', assistVetAut, updatePet);
/** 
 *@swagger
 * /pet/{id}:
 *  delete:
 *    tags: [Pet]  
 *    summary: Delete pet entry 
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Delete pet entry by id
 *    responses:
 *      '200':
 *        description: Succesful response
 */
router.delete('/:id', assistVetAut, deletePet);

export default router;