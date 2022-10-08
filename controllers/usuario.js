// const usuario = require('../models/usuario');
import {usuario } from '../models/usuario.js'

export const createUsuario = (req, res) => {
    const body = req.body;
    try {
        usuario.create(body).then(usuario => {
            res.status(201).json(usuario);
        });
    } catch(err) {
        return res.status(400).json({
            error: err.errors.map(e => e.message)
        })
    }
}

export const getUsuarios = async (req, res) => {
    const id = req.params.id;
    const result = await usuario.findAll();
    res.status(200).json(result);
}

export const updateUsuario = async (req, res) => {
    const id = req.params.id;
    const usuarioUpdate = req.body;
    await mascota.update(usuarioUpdate, {where: {id}});
    const updated = await usuario.findByPk(id);
    res.status(200).json(updated);
}

export const deleteUsuario = async (req, res) => {
    const id = req.params.id;
    const deleted = usuario.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}

// module.exports = {
//     createUsuario,
//     getUsuarios,
//     updateUsuario,
//     deleteUsuario
// }