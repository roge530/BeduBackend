import {usuario } from '../models/usuario.js'

export const createUsuario = (req, res) => {
    const body = req.body;
    usuario.create(body).then(usuario => {
        res.status(201).json(usuario);
    })
    .catch(err => {
        return res.status(400).json({error: "Elemento(s) inválidos"})
    })
}

export const getUsuarios = async (req, res) => {
    const id = req.params.id;
    const result = await usuario.findAll();
    res.status(200).json(result);
}

export const updateUsuario = (req, res) => {
    const id = req.params.id;
    const usuarioUpdate = req.body;
    usuario.update(usuarioUpdate, {where: {id}})
        .then(updated => {
            usuario.findByPk(id).then(updated => {
                res.status(200).json(updated);
            })
        })
        .catch(err => {
            res.status(400).json({error: "Elemento(s) inválidos"})
        })
}

export const deleteUsuario = async (req, res) => {
    const id = req.params.id;
    const deleted = usuario.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}