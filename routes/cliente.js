import {Router} from 'express'
const router = Router()
import {
    signUp,
    logIn,
    seeInfo
} from '../controllers/cliente.js'
import { requireToken } from '../middlewares/requireToken.js';

router.post('/signUp', signUp);
router.post('/logIn', logIn);
router.get('/', requireToken, seeInfo)
export default router