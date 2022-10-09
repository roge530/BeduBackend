import {Router} from 'express';
const router = Router();
import {
    createUsuario,
    getUsuarios,
    updateUsuario,
    deleteUsuario,
    logIn
} from '../controllers/usuario.js'
import { adminAuth } from '../middlewares/usersAuth.js';
/**
* @swagger
* definitions:
*   Usuario:
*     required:
*       - nombre
*       - apellido_paterno
*       - apellido_materno
*       - usuario
*       - email
*       - celular
*       - cedula_prof
*       - tipo_usuario
*       - password                         
*     properties:
*       nombre:
*         type: string
*         required: true              
*       apellido_paterno:
*         type: string
*       apellido_materno:
*         type: string
*       usuario:
*         type: string
*       email:
*         type: string
*       celular:
*         type: string
*       cedula_prof:
*         type: string
*       tipo_usuario:
*          type: integer
*       password:  
*          type: string
* parameters:
*       UserLogIn:
*          required:
*            - usuario
*            - password
*          properties:
*           usuario:
*               type: string
*               required: true
*           password:  
*               type: string        
*/

/** 
 *@swagger
 *
 * /usuario/:
 *  get:
 *    tags: [Usuario]  
 *    summary: Obtiene todos los usuarios registradas
 *    description: Despliega todas los usuarios registrados
 *    responses:
 *       200:
 *        description: Respuesta exitosa
 *      
 */
router.get('/', adminAuth, getUsuarios);
/**
*@swagger
* /usuario/signUp:
*  post:
*     tags: [Usuario] 
*     summary: Crea una nuevo usuario
*     description: Crea el registro del usuario a partir del JSON correspondiente 
*       - application/json
*     parameters:   
*       - name: Datos del usuario
*         description: JSON con datos del usuario
*         in: body         
*         schema:
*            type: object
*            $ref: '#/definitions/Usuario'   
*     responses:
*         200:
*           description: Usuario dada de alta exitosamente       
*         400:
*           description: Elemento(s) inválidos                        
*/
router.post('/signUp',adminAuth,createUsuario);
/**
*@swagger
* /usuario/{id}:
*  patch:
*     summary: Edita un usuario
*     description: Edita un usuario con nueva informacion
*     tags: [Usuario]
*     produces:
*       - application/json
*     parameters:
*       - in: path
*         name: id
*       - name: Datos nuevos del usuario
*         description: Datos nuevos del usuario
*         in: body
*         schema:
*           type: object
*           $ref: '#/definitions/Usuario' 
*     responses:
*         200:
*           description: Actalización exitosa                   
*/
router.patch('/:id', adminAuth, updateUsuario);
/** 
 *@swagger
 *
 * /usuario/{id}:
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
router.delete('/:id', adminAuth, deleteUsuario);
/**
*@swagger
* /usuario/logIn:
*  post:
*     tags: [Usuario] 
*     summary: LogIn del usuario
*     description:  LogIn del usuario
*       - application/json
*     parameters:   
*       - name: Datos de logIn del usuario
*         description: JSON con datos del usuario
*         in: body         
*         schema:
*            type: object
*            $ref: '#/parameters/UserLogIn'   
*     responses:
*         200:
*           description: Usuario dada de alta exitosamente       
*         400:
*           description: Elemento(s) inválidos                        
*/
router.post('/logIn', logIn);

export default router