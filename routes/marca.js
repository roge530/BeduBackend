const router = require('express').Router();
const{
    createBrand,
    getBrands,
    updateBrand,
    deleteBrand
}=require('../controllers/marca')

router.get('/', getBrands);
router.post('/',createBrand);
router.patch('/:id',updateBrand);
router.delete('/:id',deleteBrand);

module.exports=router;