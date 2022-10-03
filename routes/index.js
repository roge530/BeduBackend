const router = require('express').Router();
const mascota = require('./mascota');
const usuario = require('./usuario');

router.get('/', (req, res) => {
    res.json({'info': 'Welcome to VET API!'})
});

router.use('/mascota', mascota);
router.use('/usuario', usuario)

module.exports = router;