const router = require('express').Router();
const{
    createService,
    getServices,
    updateService,
    deleteService
}=require('../controllers/servicio')

router.get('/', getServices);
router.post('/',createService);
router.patch('/:id',updateService);
router.delete('/:id',deleteService);

module.exports=router;