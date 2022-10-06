const cita = require('../models/cita');

function createCita(req, res) {
    const body = req.body;
    cita.create(body).then(cita => {
        res.status(201).json(cita);
    });
}

async function getCita(req, res) {
    const id = req.params.id;
    const result = await cita.findByPk(id);
    res.status(200).json(result);
}

async function getCitasByCliente(req, res) {
    const id = req.params.id;
    const result = await cita.findAll({where: {clienteId: id} });
    res.status(200).json(result);
}

async function getCitasByMascota(req, res) {
    const id = req.params.id;
    const result = await cita.findAll({where: {mascotaId: id} });
    res.status(200).json(result);
}

async function updateCita(req, res) {
    const id = req.params.id;
    const citaUpdate = req.body;
    await cita.update(citaUpdate, {where: {id}});
    const updated = await cita.findByPk(id);
    res.status(200).json(updated);
}

async function deleteCita(req, res) {
    const id = req.params.id;
    const deleted = cita.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}

module.exports = {
    createCita,
    getCita,
    updateCita,
    deleteCita,
    getCitasByCliente,
    getCitasByMascota
}