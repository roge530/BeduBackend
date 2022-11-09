import { pet } from '../models/pet.js';

export const createPet = (req, res) => {
    const body = req.body;
    pet.create(body).then(pet => {
        res.status(201).json(pet);
    }).catch(err => {
        res.status(400).json({
            error: "Invalid element(s)"
        })
    })
}

export const getPet = async (req, res) => {
    const id = req.params.id;
    const result = await pet.findByPk(id);
    res.status(200).json(result);
}

export const getPetByClient = (req, res) => {
    const id = req.params.id;
    pet.findAll({where: {clientId: id} })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(400).json({error: "Forbbiden access"})
        })
}


export const updatePet = (req, res) => {
    const id = req.params.id;
    const petUpdate = req.body;
    pet.update(petUpdate, {where: {id}})
        .then(updated => {
            pet.findByPk(id).then(updated => {
                res.status(200).json(updated)
            })
        })
            .catch(err => {
                res.status(400).json({
                    error: "Invalid element(s)"
                })
            })
}

export const deletePet = async (req, res) => {
    const id = req.params.id;
    const deleted = pet.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}