import {Router} from 'express'
const router = Router()
import {
    createSpecies,
    getSpecies,
    getAllSpecies,
    updateSpecies,
    deleteSpecies
} from '../controllers/species';
import { vetAuth, assistVetAut } from '../middlewares/usersAuth.js';

/** 
 *@swagger
 *
 * /especie/:
 *  get:
 *    tags: [Especie]  
 *    summary: Obtiene todas las especies registradas
 *    description: Despliega todas las especies registradas
 *    responses:
 *       200:
 *        description: Respuesta exitosa
 *      
 */
router.get('/', getAllSpecies);
/** 
 *@swagger
 *
 * /especie/{id}:
 *  get:
 *    tags: [Especie]  
 *    summary: Obtiene la especie por medio del id
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Despliega la especie del id correspondiente
 *    responses:
 *       200:
 *        description: Respuesta exitosa
 */
router.get('/:id', getSpecies);

/**
*@swagger
* /especie:
*  post:
*     tags: [Especie] 
*     summary: Crea una nueva especie
*     description: Crea el registro de la especie a partir del JSON correspondiente 
*       - application/json
*     parameters:   
*       - name: Datos de la especie
*         description: JSON con datos de la especie
*         in: body         
*         schema:
*            type: object
*            $ref: '#/definitions/Especie'   
*     responses:
*         200:
*           description: Especie dada de alta exitosamente                    
*/
router.post('/', vetAuth, createSpecies);
/**
*@swagger
* /especie/{id}:
*  patch:
*     summary: Edita una especie
*     description: Editar una especie con nueva informacion
*     tags: [Especie]
*     produces:
*       - application/json
*     parameters:
*       - in: path
*         name: id
*       - name: Datos nuevos de la especie
*         description: Datos nuevos de la especie
*         in: body
*         schema:
*           type: object
*           $ref: '#/definitions/Especie' 
*     responses:
*         200:
*           description: Actalización exitosa                   
*/
router.patch('/:id', vetAuth, updateSpecies);

/** 
 *@swagger
 *
 * /especie/{id}:
 *  delete:
 *    tags: [Especie]  
 *    summary: Borra la especie  
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Borra la especie seleccionada mediante el id
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 */
router.delete('/:id', vetAuth, deleteSpecies);

export default router;