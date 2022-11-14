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
* components:
*   schemas:
*     user:
*       type: object
*       properties:
*         name:
*           type: string
*           example: 'Adrian'
*         firstSurname:
*           type: string
*           example: 'Morales'
*         secondSurname:
*           type: string
*           example: 'Morales'
*         user:
*           type: string
*           example: 'admin'
*         email:
*           type: string
*           example: 'admin@test.com'
*         cellphone:
*           type: string
*           example: '2224562776'
*         professional_id:
*           type: string
*           example: 'Morales'
*         user_type:
*           type: integer
*           example: 1
*         password:
*           type: string
*           example: 'user'
*
*       required:
*           - name
*           - firstSurname
*           - secondSurname
*           - user
*           - email
*           - cellphone
*           - professional_id
*           - user_type
*           - password      
*
*     userLogIn:
*       type: object
*       properties:
*           user:
*             type: string
*             example: 'admin'
*           password:
*             type: string
*             example: 'user' 
*       required:
*           - user
*           - password
*
*/

/** 
 *@swagger
 *
 * /user/:
 *  get:  
 *    tags: [User]  
 *    summary: Return all the users' entries
 *    description: Return all the users' entries
 *    responses:
 *      '200':
 *        description: Successful response
 *      
 */
//router.get('/', adminAuth, getUsers);
    router.get('/',adminAuth, getUsers);
/**
*@swagger
* paths:
*  /user/signUp:
*    post:    
*     tags: [User] 
*     summary: Create a new user
*     description: Create user register. user_type 0 = vet assistant, 1 = vet, 2 = admin
*     requestBody:
*        required: true
*        content:
*            application/json:
*                schema:
*                    $ref: '#/components/schemas/user'      
*     responses:
*        '201':
*            description: Created user                       
*/

//router.post('/signUp',adminAuth,createUser);
router.post('/signUp',createUser);
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
* paths:
*  /user/logIn:
*    post:
*      tags: [User] 
*      summary: User LogIn
*      description: User LogIn 
*      requestBody:
*           required: true
*           content:
*               application/json:
*                   schema:
*                       $ref: '#/components/schemas/userLogIn'      
*      responses:
*           '201':
*              description: Created
*           '200':
*             description: Successfully created user        
*           '400':
*              description: Invalid elements                        
*/
router.post('/logIn', logIn);

export default router