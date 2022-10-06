const router = require('express').Router();
const mascota = require('./mascota');
const usuario = require('./usuario');
const especie = require('./especie');
const subespecie = require('./subespecie');
const cliente = require('./cliente'); 
const cita = require('./cita')
const cita_detalle = require('./cita_detalle')

router.get('/', (req, res) => {
    res.json({'info': 'Welcome to VET API!'})
});

router.use('/mascota', mascota);
router.use('/usuario', usuario);
router.use('/especie', especie);
router.use('/subespecie', subespecie);
router.use('/cliente', cliente);
router.use('/cita', cita);
router.use('/cita_detalle', cita_detalle)

module.exports = router;