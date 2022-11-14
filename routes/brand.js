import {Router} from 'express';
const router = Router();
import {
    createBrand,
    getBrands,
    updateBrand,
    deleteBrand
} from '../controllers/brand.js'
import { vetAuth, assistVetAut } from '../middlewares/usersAuth.js';
/**
* @swagger
* components:
*   schemas:
*     brand:
*       type: object
*       properties:
*         name:
*           type: string
*           example: 'Royal Cannin'
*       required:
*           - name
*/

/** 
 *@swagger
 * path:
 *  /brand/:
 *      get:
 *       tags: [Brand]  
 *       summary: Gets the all the brands entries
 *       description: Gets the all the brands entries
 *       responses:
 *         '200':
 *           description: Successful response
 * 
 */
router.get('/', getBrands);

/**
*@swagger
* paths:
*  /brand/:
*    post:
*       tags: [Brand] 
*       summary: Create a brand 
*       description: Create a brand 
*       produces:
*         - application/json
*       requestBody:
*           required: true
*           content:
*               application/json:
*                   schema:
*                       $ref: '#/components/schemas/brand'     
*       responses:
*           200:
*             description: Brand sucessfuly cerated                     
*           
*/
router.post('/',createBrand);

/**
*@swagger
* /brand/{id}:
*  patch:
*     summary: Edit a new brand
*     description: Edit a new brand
*     tags: [Brand]
*     produces:
*       - application/json
*     parameters:
*       - in: path
*         name: id
*       - name: Brand information
*         description: New brand data
*         in: body
*         schema: 
*           type: object
*           $ref: '#/components/schemas/brand'
*     responses:
*         200:
*           description: Successful edited                      
*           
*/
router.patch('/:id',updateBrand);

/** 
 *@swagger
 *
 * /brand/{id}:
 *  delete:
 *    tags: [Brand]  
 *    summary: Delete the brand  
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Delete the brand by id
 *    responses:
 *      '200':
 *        description: Successful response
 */
router.delete('/:id',deleteBrand);

export default router;