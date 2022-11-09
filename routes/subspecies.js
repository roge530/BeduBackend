import {Router} from 'express';
const router = Router();
import {
    createSubspecies,
    getSubspecies,
    getAllSubspecies,
    updateSubspecies,
    deleteSubspecies,
   getSubspeciesBySpecies
} from '../controllers/subspecies.js';
import { vetAuth, assistVetAut } from '../middlewares/usersAuth.js';
/**
* @swagger
* definitions:
*   Subspecies:
*     required:
*       - subespecie
*        - especieId             
*     properties:
*       subespecie:
*         type: string
*       especieId:
*         type: integer           
*/

/** 
 *@swagger
 *
 * /subespecie/:
 *  get:
 *    tags: [Subspecies]  
 *    summary: Get all the registered subespecies 
 *    description:  Get all the registered subespecies 
 *    responses:
 *      200:
 *        description: Success response
 *      400:    
 *        description: "Invalid element(s)"  
 */
router.get('/', assistVetAut, getAllSubspecies);

/** 
 *@swagger
 *
 * /subespecie/{id}:
 *  get:
 *    tags: [Subspecies]  
 *    summary: Get subspecies by id
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Get subspecies by id
 *    responses:
 *       200:
 *        description: Success response
 */
router.get('/:id', getSubspecies);

/** 
 *@swagger
 *
 * /subespecie/e/{id}:
 *  get:
 *    tags: [Subspecies]  
 *    summary: Get subspecies by species' id 
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Get subspecies by species' id
 *    responses:
 *       200:
 *        description: Success response
 */
router.get('/e/:id', assistVetAut,getSubspeciesBySpecies);

/**
*@swagger
* /subespecie:
*  post:
*     tags: [Subspecies] 
*     summary: Crea una nueva subespecie
*     description: Crea el registro de la subespecie a partir del JSON correspondiente 
*       - application/json
*     parameters:   
*       - name: Datos de la subespecie
*         description: JSON con datos de la subespecie
*         in: body         
*         schema:
*            type: object
*            $ref: '#/definitions/Subspecies'   
*     responses:
*         200:
*           description: Subspecies dada de alta exitosamente                    
*/
router.post('/', vetAuth, createSubspecies);
/**
*@swagger
* /subespecie/{id}:
*  patch:
*     summary: Edit subspecies
*     description: Edit subspecies' entry
*     tags: [Subspecies]
*     produces:
*       - application/json
*     parameters:
*       - in: path
*         name: id
*       - name: New subspecies' data
*         description: New subspecies' data
*         in: body
*         schema:
*           type: object
*           $ref: '#/definitions/Subspecies' 
*     responses:
*         200:
*           description: Successfully updated
*         400:
*           description: Invalid element(s)
*                       
*/
router.patch('/:id', vetAuth, updateSubspecies);

/** 
 *@swagger
 *
 * /subspecies/{id}:
 *  delete:
 *    tags: [Subspecies]  
 *    summary: Delete subspecies  
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Delete subspecies by id
 *    responses:
 *      '200':
 *        description: Successfully deleted
 */
router.delete('/:id', vetAuth, deleteSubspecies);

export default router;