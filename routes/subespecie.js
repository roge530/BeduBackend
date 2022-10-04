const router = require('express').Router();
const {
    createSubespecie,
    getSubespecie,
    getSubespecies,
    updateSubespecie,
    deleteSubespecie,
    getSubespecieByEspecie
} = require('../controllers/subespecie');

router.get('/', getSubespecies);
router.get('/:id', getSubespecie);
router.get('/e/:id', getSubespecieByEspecie);
router.post('/', createSubespecie);
router.patch('/:id', updateSubespecie);
router.delete('/:id', deleteSubespecie);

module.exports = router;