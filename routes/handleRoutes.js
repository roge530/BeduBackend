import Router from 'express'
const router = Router()
import { registerClient  } from '../controllers/clients.js'


router.post('/register', registerClient)


export default router
