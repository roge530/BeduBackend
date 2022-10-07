import {cita} from '../models/cita';

export const createCita = async (req, res) => {
    const body = req.body;
    cita.create(body).then(cita => {
        res.status(201).json(cita);
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
export const updateCita = async (req, res) => {
    const id = req.params.id;
    const citaUpdate = req.body;
    await cita.update(citaUpdate, {where: {id}});
    const updated = await cita.findByPk(id);
    res.status(200).json(updated);
}

export const deleteCita = async (req, res) => {
    const id = req.params.id;
    const deleted = cita.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}