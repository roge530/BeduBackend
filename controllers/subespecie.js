// const subespecie = require('../models/subespecie');
import { subespecie } from '../models/subespecie.js'

export const createSubespecie = (req, res) => {
    const body = req.body;
    subespecie.create(body).then(subespecie => {
        res.status(201).json(subespecie);
    }).catch(err => {
        res.status(400).json({
            error: "Elemento(s) inválidos"
        })
    })
}

export const getSubespecie = async (req, res) => {
    const id = req.params.id;
    const result = await subespecie.findByPk(id);
    res.status(200).json(result);
}

export const getSubespecieByEspecie = async (req, res) => {
    const id = req.params.id;
    const result = await subespecie.findAll({
        where: {
            especieId: id
        }
    });
    res.status(200).json(result);
}

export const getSubespecies = async (req, res) => {
    const result = await subespecie.findAll();
    res.status(200).json(result);
}

export const updateSubespecie = (req, res) => {
    const id = req.params.id;
    const subespecieUpdate = req.body;
    subespecie.update(subespecieUpdate, {where: {id}})
        .then(actualizado => {
            subespecie.findByPk(id)
                .then(actualizado => {
                    res.status(200).json(actualizado);
                })
        }).catch(err => {
                res.status(400).json({
                    error: "Elemento(s) inválidos"
                })
            })
   
    
}

export const deleteSubespecie = async (req, res) => {
    const id = req.params.id;
    const deleted = subespecie.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}