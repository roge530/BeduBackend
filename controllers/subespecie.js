// const subespecie = require('../models/subespecie');
import { subespecie } from '../models/subespecie'

function createSubespecie(req, res) {
    const body = req.body;
    subespecie.create(body).then(subespecie => {
        res.status(201).json(subespecie);
    });
}

async function getSubespecie(req, res) {
    const id = req.params.id;
    const result = await subespecie.findByPk(id);
    res.status(200).json(result);
}

async function getSubespecieByEspecie(req, res) {
    const id = req.params.id;
    const result = await subespecie.findAll({
        where: {
            especieId: id
        }
    });
    res.status(200).json(result);
}

async function getSubespecies(req, res) {
    const result = await subespecie.findAll();
    res.status(200).json(result);
}

async function updateSubespecie(req, res) {
    const id = req.params.id;
    const subespecieUpdate = req.body;
    await subespecie.update(subespecieUpdate, {where: {id}});
    const updated = await subespecie.findByPk(id);
    res.status(200).json(updated);
}

async function deleteSubespecie(req, res) {
    const id = req.params.id;
    const deleted = subespecie.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}

// module.exports = {
//     createSubespecie,
//     getSubespecie,
//     getSubespecies,
//     getSubespecieByEspecie,
//     updateSubespecie,
//     deleteSubespecie
// }