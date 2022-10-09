import {Router} from 'express'
const router = Router()
import {
    signUp,
    logIn
    // seeInfo
} from '../controllers/cliente.js'
import { vetAuth } from '../middlewares/usersAuth.js';
/**
* @swagger
* parameters:
*   SignUp:
*     required:
*       - nombre
*       - apellido_paterno
*       - apellido_materno
*       - fecha_nacimiento
*       - direccion
*       - email
*       - telefono
*       - password                
*     properties:
*       nombre:
*         type: string
*         required: true              
*       apellido_paterno:
*         type: string
*         required: true  
*       apellido_materno:
*         type: string
*         required: true      
*       fecha_nacimiento:
*         type: string
*       direccion:
*         type: string
*       email:
*         type: string
*       telefono:
*         type: string
*       password:
*          type: string
*          required: true     
*   LogIn:
*     required:      
*       - email
*       - password                
*     properties:
*       email:
*         type: string
*       password:
*         type: string
* definitions:
*   Cliente:
*     required:
*       - nombre
*       - apellido_paterno
*       - apellido_materno
*       - fecha_nacimiento
*       - direccion
*       - email
*       - telefono                
*     properties:
*       nombre:
*         type: string
*         required: true              
*       apellido_paterno:
*         type: string
*       apellido_materno:
*         type: string
*       fecha_nacimiento:
*         type: string
*       direccion:
*         type: string
*       email:
*         type: string
*       telefono:
*         type: string
*       password:
*          type: string          
*/

/**
*@swagger
* /cliente/signUp:
*  post:
*     tags: [Cliente] 
*     summary: Crea el registro del cliente
*     description: Crea el registro del cliente a partir del JSON correspondiente 
*       - application/json
*     parameters:   
*       - name: Datos del cliente 
*         description: JSON con datos del cliente
*         in: body         
*         type: string
*         schema:
*            type: object
*            $ref: '#/parameters/SignUp'   
*     responses:
*         201:
*           description: Cliente dado de alta exitosamente           
*         400:
*           description: Datos invalidos               
*           
*/
router.post('/signUp', signUp);
/**
*@swagger
* /cliente/logIn:
*  post:
*     tags: [Cliente] 
*     summary: Logeo del cliente
*     description: Introduce las credenciales validas 
*       - application/json
*     parameters:   
*       - name: Datos de ingreso
*         description: Email y contraseña
*         in: body
*         type: string
*         schema:
*            type: object
*            $ref: '#/parameters/LogIn'           
*     responses:
*         404:
*           description: Cliente no registrado                
*           
*/
router.post('/logIn', logIn);
// router.get('/', requireToken, seeInfo)
export default router