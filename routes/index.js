import {Router} from 'express'
const routes = Router()
import cliente from './cliente.js' 

import usuario from './usuario';
import mascota from './mascota';
import especie from './especie';
import subespecie from './subespecie';
import cita from './cita';
import cita_detalle from './cita_detalle';
import marca from './marca'; 
import servicio from './servicio';

routes.get('/', (req, res) => {
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

export {routes}