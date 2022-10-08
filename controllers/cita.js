import {cita} from '../models/cita.js';

export const createCita =  (req, res) => {
    const body = req.body;
    cita.create(body).then(cita => {
        return res.status(201).json(cita);
    }) .catch (err => {
        return res.status(400).json({
            error: "Elemento(s) inválidos"
        })
    });
}

export const getCita = async (req, res) => {
    const id = req.params.id;
    const result = await cita.findByPk(id);
    res.status(200).json(result);
}

export const getCitasByCliente = async (req, res) => {
    const id = req.params.id;
    const result = await cita.findAll({where: {clienteId: id} });
    res.status(200).json(result);
}

export const getCitasByMascota = async (req, res) => {
    const id = req.params.id;
    const result = await cita.findAll({where: {mascotaId: id} });
    res.status(200).json(result);
}

export const updateCita = (req, res) => {
    const id = req.params.id;
    const citaUpdate = req.body;
    cita.update(citaUpdate, {where: {id}})
        .then(actualizado => {
            cita.findByPk(id)
                .then(actualizado => {
                    res.status(200).json(actualizado);
                })
        })
        .catch(err => {
            res.status(400).json({
                error: "Elemento(s) inválidos"
            })
        })
}

export const deleteCita = async (req, res) => {
    const id = req.params.id;
    const deleted = cita.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}