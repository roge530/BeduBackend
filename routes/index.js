import {Router} from 'express';
const router = Router();
import customer from './customer.js';
import usuario from './usuario.js';
import mascota from './mascota.js';
import species from './species.js';
import subspecies from './subspecies.js';
import appointment from './appointment.js';
import appointment_detail from './appointment_detail.js';
import brand from './brand.js'; 
import servicio from './servicio.js';

router.get('/', (req, res) => {
    res.json({'info': 'Welcome to VET API!'})
});
router.use('/mascota', mascota);
router.use('/usuario', usuario);
router.use('/species', species);
router.use('/subspecies', subspecies);
router.use('/customer', customer);
router.use('/appointment', appointment);
router.use('/appointment_detail', appointment_detail);
router.use('/brand',brand);
router.use('/servicio',servicio);

export {router}