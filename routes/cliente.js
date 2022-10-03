const router=require('express').Router();

const{
    signUp,
    logIn
}=require('../controllers/cliente')

router.post('/signUp',signUp);
router.post('/logIn', logIn);

module.exports =router;