import {Router} from 'express';
const router = Router();
import {
    createBrand,
    getBrands,
    updateBrand,
    deleteBrand
} from '../controllers/brand'
import { vetAuth, assistVetAut } from '../middlewares/usersAuth.js';

/** 
 *@swagger
 *
 * /marca/:
 *  get:
 *    tags: [Marca]  
 *    summary: Obtiene las marcas registradas
 *    description: Despliega todas las marcas registradas
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *     
 * 
 */
router.get('/', getBrands);

/**
*@swagger
* /marca/:
*  post:
*     tags: [Marca] 
*     summary: Crea una marca 
*     description: Crea una marca
*     produces:
*       - application/json
*     parameters:   
*       - name: Marca
*         description: Nombre de la marca a dar de alta
*         in: body
*         schema:
*           type: object
*           $ref: '#/definitions/Marca'      
*     responses:
*         200:
*           description: Marca creada exitosamente                     
*           
*/
router.post('/',createBrand);

/**
*@swagger
* /marca/{id}:
*  patch:
*     summary: Edita un marca
*     description: Editar una marca con informacion nueva
*     tags: [Marca]
*     produces:
*       - application/json
*     parameters:
*       - in: path
*         name: id
*       - name: Informacion de la marca
*         description: Datos nuevos de la marca
*         in: body
*         schema: 
*           type: object
*           $ref: '#/definitions/Marca' 
*     responses:
*         200:
*           description: Actalización exitosa                       
*           
*/
router.patch('/:id',updateBrand);

/** 
 *@swagger
 *
 * /marca/{id}:
 *  delete:
 *    tags: [Marca]  
 *    summary: Borra la marca  
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Borra la marca seleccionada mediante el id
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 */
router.delete('/:id',deleteBrand);

export default router;