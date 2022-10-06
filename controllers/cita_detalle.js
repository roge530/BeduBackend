const { Op } = require('sequelize')
const cita_detalle = require('../models/cita_detalle');
const cita = require('../models/cita');

function createCita_detalle(req, res) {
    const body = req.body;
    cita_detalle.create(body).then(cita_detalle => {
        res.status(201).json(cita_detalle);
    });
}

async function getCita_detalle(req, res) {
    const id = req.params.id;
    const result = await cita_detalle.findAll({where: {citumId: id} });
    res.status(200).json(result);
}

async function updateCita_detalle(req, res) {
    const citaId = req.params.citaId;
    const productoId = req.params.productoId;
    const cita_detalleUpdate = req.body;
    await cita_detalle.update(cita_detalleUpdate, {
        where: {
            [Op.and]: [
                {citumId: citaId},
                {servicioId: productoId}
            ]
            }});
    const updated = await cita_detalle.findAll({
        where: {
            [Op.and]: [
                {citumId: citaId},
                {servicioId: productoId}
            ]
            }});
    res.status(200).json(updated);
}

async function deleteCita_detalle(req, res) {
    const citaId = req.params.citaId;
    const servicioId = req.params.servicioId;
    
    const deletedCita_detalle= await cita_detalle.destroy( 
        {where: {
            [Op.and]: [
                {citumId: citaId},
                {servicioId: servicioId}
            ]
            }});
    
    res.status(200).json(deletedCita_detalle);
}

module.exports = {
    createCita_detalle,
    getCita_detalle,
    updateCita_detalle,
    deleteCita_detalle
}