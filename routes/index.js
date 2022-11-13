import {Router} from 'express';
const router = Router();
import customer from './customer.js';
import user from './user.js';
import pet from './pet.js';
import species from './species.js';
import subspecies from './subspecies.js';
import appointment from './appointment.js';
import appointment_detail from './appointment_detail.js';
import brand from './brand.js'; 
import service from './service.js';
import medicines from './medicines.js'
import prescriptions from './prescriptions.js';
import medicines_on_prescription from './medicines_on_prescriptions.js'

router.get('/', (req, res) => {
    res.json({'info': 'Welcome to VET API!'})
});
router.use('/pet', pet);
router.use('/user', user);
router.use('/species', species);
router.use('/subspecies', subspecies);
router.use('/customer', customer);
router.use('/appointment', appointment);
router.use('/appointment_detail', appointment_detail);
router.use('/brand',brand);
router.use('/service',service);
router.use('/medicines', medicines)
router.use('/prescriptions', prescriptions)
router.use('/medicines_on_prescription', medicines_on_prescription)

export {router}