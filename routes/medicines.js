import {Router} from 'express'
const router = Router()
import {
    createMedicine,
    getMedicine,
    updateMedicine,
    deleteMedicine
} from '../controllers/medicines.js'

router.post('/', createMedicine)
router.get('/:id', getMedicine)
router.post('/:id', updateMedicine)
router.delete('/:id', deleteMedicine)

export default router