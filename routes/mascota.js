const router = require('express').Router();
const {
    createMascota,
    getMascota,
    updateMascota,
    deleteMascota
} = require('../controllers/mascota')

router.get('/:id', getMascota);
router.post('/', createMascota);
router.patch('/:id', updateMascota);
router.delete('/:id', deleteMascota);

module.exports = router;