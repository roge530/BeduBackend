import { species } from '../models/species.js';

export const createSpecies = async (req, res) => {
    const body = req.body;
    species.create(body).then(species => {
        res.status(201).json(species);
    });
}

export const getSpecies = async (req, res) => {
    const id = req.params.id;
    const result = await species.findByPk(id);
    res.status(200).json(result);
}

export const getAllSpecies = async (req, res) => {
    const result = await species.findAll();
    res.status(200).json(result);
}

export const updateSpecies = async (req, res) => {
    const id = req.params.id;
    const speciesUpdate = req.body;
    await species.update(speciesUpdate, {where: {id}});
    const updated = await species.findByPk(id);
    res.status(200).json(updated);
}

export const deleteSpecies = async (req, res) => {
    const id = req.params.id;
    const deleted = species.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}