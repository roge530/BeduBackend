const router = require('express').Router();
const {
    createCita,
    getCita,
    updateCita,
    deleteCita,
    getCitasByCliente,
    getCitasByMascota
} = require('../controllers/cita')

router.get('/:id', getCita);
router.get('/c/:id',getCitasByCliente);
router.get('/m/:id',getCitasByMascota);
router.post('/', createCita);
router.patch('/:id', updateCita);
router.delete('/:id', deleteCita);

module.exports = router;