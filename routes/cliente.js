import {Router} from 'express'
const router = Router()
import {
    signUp,
    logIn
} from '../controllers/cliente.js'

router.post('/signUp', signUp);
router.post('/logIn', logIn);

export default router