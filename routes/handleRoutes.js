import Router from 'express'
const router = Router()
import { 
  registerClient,
  registerLogin,
  registerPet,
  authToken
} from '../controllers/clients.js'

// CLIENTS DATABASE
router.post('/register/client', registerClient )
router.post('/register/login', registerLogin)

// APPOINTMENTS AND PETS DATABASE
router.post('/register/pet', authToken, registerPet)




export default router
