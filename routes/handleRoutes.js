import Router from 'express'
const router = Router()
import { 
  registerClient,
  setUser,
  authUser,
  authPassword,
  authToken,
  authEmail,
  registerPet,
  registerAppointment,
  appointments
} from '../controllers/clients.js'


// Login to get token and register if client not exist
router.post('/register/client', registerClient)
router.post('/login', setUser, authUser, authPassword)

// Token and email validation to be able to register a pet or an appointment
router.post('/register/pet', authToken, authEmail, registerPet)
router.post('/register/appointment/:id_pet', authToken, authEmail, registerAppointment)

// Get all appointments of a client (Missing to add admin privileges)
router.get('/appointments', authToken, authEmail, appointments)

export default router
