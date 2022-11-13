import {Router} from 'express'
const router = Router()
import {
    createPrescription,
    getPrescriptions,
    deletePrescription
} from '../controllers/prescriptions.js'

router.post('/', createPrescription)
router.get('/', getPrescriptions)
router.delete('/:id', deletePrescription)

export default router