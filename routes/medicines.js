import {Router} from 'express'
const router = Router()
import {
    createMedicine,
    getMedicine,
    updateMedicine,
    deleteMedicine
} from '../controllers/medicines.js'
/**
 * @swagger
 * definitions:
 *  Medicine:
 *   required:
 *    - Name
 *    - Price
 *   properties:
 *     Name:
 *       type: string
 *       required: true
 *     Price:
 *       type: float
 *       required: true
 */

/**
 * @swagger
 * 
 * /medicines/:
 *  post:
 *    tags: [Medicine]
 *    summary: Register a new medicine
 *    description: Adds a medicine to the database
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              price:
 *                type: number
 *                format: float
 *    responses:
 *      201:
 *        description: Entry created
 *      400:
 *        description: An error ocurred on creation
 * 
 */
router.post('/', createMedicine)
router.get('/:id', getMedicine)
router.post('/:id', updateMedicine)
router.delete('/:id', deleteMedicine)

export default router