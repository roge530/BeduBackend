import Router from 'express'
const router = Router()
import { 
  registerClient,
  setUser,
  authUser,
  authPassword,
  authToken,
  authEmail,
  registerPet
} from '../controllers/clients.js'


// CLIENTS DATABASE
router.post('/register/client', registerClient)
router.post('/login', setUser, authUser, authPassword)

// APPOINTMENTS AND PETS DATABASE
router.post('/register/pet', authToken, authEmail, registerPet)
// router.post('/register/appointment/:id_pet', authToken, registerAppointment)



// GET INFORMATION WITH TOKEN AUTHENTICATION
// router.get('/appointments', authToken, appointments)

export default router
