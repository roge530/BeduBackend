const router = require('express').Router();
const {
    createCita_detalle,
    getCita_detalle,
    updateCita_detalle,
    deleteCita_detalle
    
} = require('../controllers/cita_detalle');

router.get('/:id', getCita_detalle);
router.post('/', createCita_detalle);
router.patch('/:citaId/:servicioId', updateCita_detalle);
router.delete('/:citaId/:servicioId', deleteCita_detalle);

module.exports = router;

