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

module.exports = router;