// const especie = require('../models/especie');
import {especie} from '../models/especie'

function createEspecie(req, res) {
    const body = req.body;
    especie.create(body).then(especie => {
        res.status(201).json(especie);
    });
}

async function getEspecie(req, res) {
    const id = req.params.id;
    const result = await especie.findByPk(id);
    res.status(200).json(result);
}

async function getEspecies(req, res) {
    const result = await especie.findAll();
    res.status(200).json(result);
}

async function updateEspecie(req, res) {
    const id = req.params.id;
    const especieUpdate = req.body;
    await especie.update(especieUpdate, {where: {id}});
    const updated = await especie.findByPk(id);
    res.status(200).json(updated);
}

async function deleteEspecie(req, res) {
    const id = req.params.id;
    const deleted = especie.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}

// module.exports = {
//     createEspecie,
//     getEspecie,
//     getEspecies,
//     updateEspecie,
//     deleteEspecie
// }