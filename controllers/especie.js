import {especie} from '../models/especie';

export const createEspecie = async (req, res) => {
    const body = req.body;
    especie.create(body).then(especie => {
        res.status(201).json(especie);
    });
}

export const getEspecie = async (req, res) => {
    const id = req.params.id;
    const result = await especie.findByPk(id);
    res.status(200).json(result);
}

export const getEspecies = async (req, res) => {
    const result = await especie.findAll();
    res.status(200).json(result);
}

export const updateEspecie = async (req, res) => {
    const id = req.params.id;
    const especieUpdate = req.body;
    await especie.update(especieUpdate, {where: {id}});
    const updated = await especie.findByPk(id);
    res.status(200).json(updated);
}

export const deleteEspecie = async (req, res) => {
    const id = req.params.id;
    const deleted = especie.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}