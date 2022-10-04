const router = require('express').Router();
const mascota = require('./mascota');
const usuario = require('./usuario');
const especie = require('./especie');
const subespecie = require('./subespecie');
const cliente = require('./cliente'); 
const cita = require('./cita')

router.get('/', (req, res) => {
    res.json({'info': 'Welcome to VET API!'})
});

router.use('/mascota', mascota);
router.use('/usuario', usuario);
router.use('/especie', especie);
router.use('/subespecie', subespecie);
router.use('/cliente', cliente);
router.use('/cita', cita);

module.exports = router;