import {Router} from 'express'
const router = Router()
import {
    signUp,
    logIn
    // seeInfo
} from '../controllers/cliente.js'
import { vetAuth } from '../middlewares/usersAuth.js';

router.post('/signUp', signUp);
router.post('/logIn', logIn);
// router.get('/', requireToken, seeInfo)
export default router