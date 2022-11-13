import { Router } from "express"
const router = Router()
import {
    createMedicinesOnPrescriptions,
    getMedicinesOnAPrescription,
    updateMedicineOnAPrescription,
    delecteMedicineOnAPresciption
} from '../controllers/medicines_on_prescriptions.js'

router.post('/', createMedicinesOnPrescriptions)
router.get('/:presciptionID',getMedicinesOnAPrescription)
router.put('/', updateMedicineOnAPrescription)
router.delete('/', delecteMedicineOnAPresciption)

export default router