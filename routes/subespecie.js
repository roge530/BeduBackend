import {Router} from 'express';
const router = Router();
import {
    createSubespecie,
    getSubespecie,
    getSubespecies,
    updateSubespecie,
    deleteSubespecie,
    getSubespecieByEspecie
} from '../controllers/subespecie.js';
/**
* @swagger
* definitions:
*   Subespecie:
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
 *    tags: [Subespecie]  
 *    summary: Obtiene todas las subespecies registradas
 *    description: Despliega todas las subespecies registradas
 *    responses:
 *      200:
 *        description: Respuesta exitosa
 *      400:    
 *        description: "Elemento(s) inválidos"  
 */
router.get('/', getSubespecies);

/** 
 *@swagger
 *
 * /subespecie/{id}:
 *  get:
 *    tags: [Subespecie]  
 *    summary: Obtiene la subespecie por medio del id
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Despliega la subespecie del id correspondiente
 *    responses:
 *       200:
 *        description: Respuesta exitosa
 */
router.get('/:id', getSubespecie);

/** 
 *@swagger
 *
 * /subespecie/e/{id}:
 *  get:
 *    tags: [Subespecie]  
 *    summary: Obtiene la subespecie por medio del id de especie
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Despliega la subespecie del id especie correspondiente
 *    responses:
 *       200:
 *        description: Respuesta exitosa
 */
router.get('/e/:id', getSubespecieByEspecie);

/**
*@swagger
* /subespecie:
*  post:
*     tags: [Subespecie] 
*     summary: Crea una nueva subespecie
*     description: Crea el registro de la subespecie a partir del JSON correspondiente 
*       - application/json
*     parameters:   
*       - name: Datos de la subespecie
*         description: JSON con datos de la subespecie
*         in: body         
*         schema:
*            type: object
*            $ref: '#/definitions/Subespecie'   
*     responses:
*         200:
*           description: Subespecie dada de alta exitosamente                    
*/
router.post('/', createSubespecie);
/**
*@swagger
* /subespecie/{id}:
*  patch:
*     summary: Edita una subespecie
*     description: Editar una subespecie con nueva informacion
*     tags: [Subespecie]
*     produces:
*       - application/json
*     parameters:
*       - in: path
*         name: id
*       - name: Datos nuevos de la subespecie
*         description: Datos nuevos de la subespecie
*         in: body
*         schema:
*           type: object
*           $ref: '#/definitions/Subespecie' 
*     responses:
*         200:
*           description: Actalización exitosa
*         400:
*           description: Elemento(s) inválidos
*                       
*/
router.patch('/:id', updateSubespecie);

/** 
 *@swagger
 *
 * /subespecie/{id}:
 *  delete:
 *    tags: [Subespecie]  
 *    summary: Borra la subespecie  
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Borra la subespecie seleccionada mediante el id
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 */
router.delete('/:id', deleteSubespecie);

export default router;