const {Router} = require('express')
const router = Router()
const {getHome, getAdministrators, createAdmin, getAdminByEmail} = require('../controllers/index.controller')
const cliente=require('./cliente') 



router.get('/', getHome)
router.get('/admins', getAdministrators)
router.post('/admins', createAdmin)
router.get('/admin/:email', getAdminByEmail)

router.use('/cliente',cliente)


module.exports = router;