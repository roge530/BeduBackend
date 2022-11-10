// const subspecies = require('../models/subspecies');
import { subspecies } from '../models/subspecies.js'

export const createSubspecies = (req, res) => {
    const body = req.body;
    subspecies.create(body).then(subspecies => {
        res.status(201).json(subspecies);
    }).catch(err => {
        res.status(400).json({
            error: "Invalid element(s)"
        })
    })
}

export const getSubspecies = async (req, res) => {
    const id = req.params.id;
    const result = await subspecies.findByPk(id);
    res.status(200).json(result);
}

export const getSubspeciesBySpecies = async (req, res) => {
    const id = req.params.id;
    const result = await subspecies.findAll({
        where: {
            speciesId: id
        }
    });
    res.status(200).json(result);
}

export const getAllSubspecies = async (req, res) => {
    const result = await subspecies.findAll();
    res.status(200).json(result);
}

export const updateSubspecies = (req, res) => {
    const id = req.params.id;
    const subspeciesUpdate = req.body;
    subspecies.update(subspeciesUpdate, {where: {id}})
        .then(updated => {
            subspecies.findByPk(id)
                .then(updated => {
                    res.status(200).json(updated);
                })
        }).catch(err => {
                res.status(400).json({
                    error: "Invalid element(s)"
                })
            })
   
    
}

export const deleteSubspecies = async (req, res) => {
    const id = req.params.id;
    const deleted = subspecies.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}