const router = require('express').Router();
const {
    createUsuario,
    getUsuarios,
    updateUsuario,
    deleteUsuario
} = require('../controllers/usuario')

router.get('/', getUsuarios);
router.post('/', createUsuario);
router.patch('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);

module.exports = router;