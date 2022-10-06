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
    const result = await cita_detalle.findAll({where: {citaId: id} });
    res.status(200).json(result);
}

async function updateCita_detalle(req, res) {
    const citaId = req.params.citaId;
    const productoId = req.params.productoId;
    const cita_detalleUpdate = req.body;
    await cita_detalle.update(cita_detalleUpdate, {
        where: {
            [Op.and]: [
                {citaId: citaId},
                {productoId: productoId}
            ]
            }});
    const updated = await cita_detalle.findAll({
        where: {
            [Op.and]: [
                {citaId: citaId},
                {productoId: productoId}
            ]
            }});
    res.status(200).json(updated);
}

module.exports = {
    createCita_detalle,
    getCita_detalle,
    updateCita_detalle
}