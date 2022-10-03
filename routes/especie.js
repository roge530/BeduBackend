const router = require('express').Router();
const {
    createEspecie,
    getEspecie,
    getEspecies,
    updateEspecie,
    deleteEspecie
} = require('../controllers/especie');

router.get('/', getEspecies);
router.get('/:id', getEspecie);
router.post('/', createEspecie);
router.patch('/:id', updateEspecie);
router.delete('/:id', deleteEspecie);

module.exports = router;