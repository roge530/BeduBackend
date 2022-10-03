const mascota = require('../models/mascota');

function createMascota(req, res) {
    const body = req.body;
    mascota.create(body).then(mascota => {
        res.status(201).json(mascota);
    });
}

async function getMascota(req, res) {
    const id = req.params.id;
    const result = await mascota.findByPk(id);
    res.status(200).json(result);
}

async function updateMascota(req, res) {
    const id = req.params.id;
    const mascotaUpdate = req.body;
    await mascota.update(mascotaUpdate, {where: {id}});
    const updated = await mascota.findByPk(id);
    res.status(200).json(updated);
}

async function deleteMascota(req, res) {
    const id = req.params.id;
    const deleted = mascota.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}

module.exports = {
    createMascota,
    getMascota,
    updateMascota,
    deleteMascota
}