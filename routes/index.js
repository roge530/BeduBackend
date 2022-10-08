import {Router} from 'express';
const router = Router();
import cliente from './cliente.js';
import usuario from './usuario.js';
import mascota from './mascota.js';
import especie from './especie.js';
import subespecie from './subespecie.js';
import cita from './cita.js';
import cita_detalle from './cita_detalle.js';
import marca from './marca.js'; 
import servicio from './servicio.js';

router.get('/', (req, res) => {
    res.json({'info': 'Welcome to VET API!'})
});
router.use('/mascota', mascota);
router.use('/usuario', usuario);
router.use('/especie', especie);
router.use('/subespecie', subespecie);
router.use('/cliente', cliente);
router.use('/cita', cita);
router.use('/cita_detalle', cita_detalle);
router.use('/marca',marca);
router.use('/servicio',servicio);

export {router}