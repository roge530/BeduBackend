<<<<<<< HEAD
const router = require('express').Router();
const mascota = require('./mascota');
const usuario = require('./usuario');
const especie = require('./especie');
const subespecie = require('./subespecie')

router.get('/', (req, res) => {
    res.json({'info': 'Welcome to VET API!'})
});

router.use('/mascota', mascota);
router.use('/usuario', usuario);
router.use('/especie', especie);
router.use('/subespecie', subespecie);
=======
const {Router} = require('express')
const router = Router()
const {getHome, getAdministrators, createAdmin, getAdminByEmail} = require('../controllers/index.controller')
const cliente=require('./cliente') 



router.get('/', getHome)
router.get('/admins', getAdministrators)
router.post('/admins', createAdmin)
router.get('/admin/:email', getAdminByEmail)

router.use('/cliente',cliente)

>>>>>>> roxi