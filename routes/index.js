const {Router} = require('express')
const router = Router()
const {getHome, getAdministrators, createAdmin, getAdminByEmail} = require('../controllers/index.controller')
const cliente=require('./cliente') 
const marca=require('./marca') 
const servicio=require('./servicio') 



router.get('/', getHome)
router.get('/admins', getAdministrators)
router.post('/admins', createAdmin)
router.get('/admin/:email', getAdminByEmail)

router.use('/cliente',cliente)
router.use('/marca',marca)
router.use('/servicio',servicio)


module.exports = router;