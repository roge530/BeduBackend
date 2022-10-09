import { mascota } from '../models/mascota.js';

export const createMascota = (req, res) => {
    const body = req.body;
    mascota.create(body).then(mascota => {
        res.status(201).json(mascota);
    }).catch(err => {
        res.status(400).json({
            error: "Elemento(s) inválidos"
        })
    })
}

export const getMascota = async (req, res) => {
    const id = req.params.id;
    const result = await mascota.findByPk(id);
    res.status(200).json(result);
}

export const getMascotaByCliente = (req, res) => {
    const id = req.params.id;
    mascota.findAll({where: {clienteId: id} })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(400).json({error: "No estás autorizado"})
        })
}


export const updateMascota = (req, res) => {
    const id = req.params.id;
    const mascotaUpdate = req.body;
    mascota.update(mascotaUpdate, {where: {id}})
        .then(updated => {
            mascota.findByPk(id).then(updated => {
                res.status(200).json(updated)
            })
        })
            .catch(err => {
                res.status(400).json({
                    error: "Elemento(s) inválidos"
                })
            })
}

export const deleteMascota = async (req, res) => {
    const id = req.params.id;
    const deleted = mascota.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}