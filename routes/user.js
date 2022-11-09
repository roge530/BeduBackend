import {Router} from 'express';
const router = Router();
import {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
    logIn
} from '../controllers/user.js'
import { adminAuth } from '../middlewares/usersAuth.js';
/**
* @swagger
* definitions:
*   User:
*     required:
*       - name
*       - last_name_1
*       - last_name_2
*       - user
*       - email
*       - cellphone
*       - professional_id
*       - user_type
*       - password                         
*     properties:
*       name:
*         type: string
*         required: true              
*       last_name_1:
*         type: string
*         required: true           
*       last_name_2:
*         type: string
*         required: true       
*       user:
*         type: string
*         required: true 
*       email:
*         type: string
*       cellphone:
*         type: string
*       professional_id:
*         type: string
*       user_type:
*          type: integer
*          required: true  
*       password:  
*          type: string
*          required: true  
* parameters:
*   UserLogIn:
*    required:
*       - user
*       - password
*    properties:
*       user:
*         type: string                     
*       password:
*         type: string     
*/

/** 
 *@swagger
 *
 * /user/:
 *  get:
 *    security:            
*      - bearerAuth: []    
 *    tags: [User]  
 *    summary: Return all the users' entries
 *    description: Return all the users' entries
 *    responses:
 *       200:
 *        description: Successful response
 *      
 */
router.get('/', adminAuth, getUsers);
/**
*@swagger
* /user/signUp:
*  post:
*    
*     tags: [User] 
*     summary: Create a new user
*     description: Create user register. user_type 0 = vet assistant, 1 = vet, 2 = admin
*       - application/json
*     parameters:   
*       - name: User data
*         description: Data user JSON
*         in: body         
*         schema:
*            type: object
*            $ref: '#/definitions/User'   
*     responses:
*         200:
*           description: User created successfuly     
*         400:
*           description: Invalid elements                        
*/
router.post('/signUp',adminAuth,createUser);
/**
*@swagger
* /user/{id}:
*  patch:
*     summary: Edit user
*     description: Edit user with new information
*     tags: [User]
*     produces:
*       - application/json
*     parameters:
*       - in: path
*         name: id
*       - name: User's new data
*         description: User's new data
*         in: body
*         schema:
*           type: object
*           $ref: '#/definitions/User' 
*     responses:
*         200:
*           description: Successful response                   
*/
router.patch('/:id', adminAuth, updateUser);
/** 
 *@swagger
 *
 * /user/{id}:
 *  delete:
 *    tags: [Species]  
 *    summary: Delete species's entry 
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Delete species's entry by id
 *    responses:
 *      '200':
 *        description: Successful response
 */
router.delete('/:id', adminAuth, deleteUser);


/**
*@swagger
* /user/logIn:
*  post:
*     tags: [User] 
*     summary: User LogIn
*     description: User LogIn 
*       - application/json
*     parameters:   
*       - name: Data user logIn
*         description: Data user logIn JSON 
*         in: body         
*         schema:
*            type: object
*            $ref: '#/parameters/UserLogIn'   
*     responses:
*         200:
*           description: Successfully created user        
*         400:
*           description: Invalid elements                        
*/
router.post('/logIn', logIn);

export default router