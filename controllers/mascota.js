import { mascota } from '../models/mascota';

export const createMascota = (req, res) => {
    const body = req.body;
    mascota.create(body).then(mascota => {
        res.status(201).json(mascota);
    });
}

export const getMascota = async (req, res) => {
    const id = req.params.id;
    const result = await mascota.findByPk(id);
    res.status(200).json(result);
}

export const getMascotaByCliente = async (req, res) => {
    const id = req.params.id;
    const result = await mascota.findAll({where: {clienteId: id} })
}

export const updateMascota = async (req, res) => {
    const id = req.params.id;
    const mascotaUpdate = req.body;
    await mascota.update(mascotaUpdate, {where: {id}});
    const updated = await mascota.findByPk(id);
    res.status(200).json(updated);
}

export const deleteMascota = async (req, res) => {
    const id = req.params.id;
    const deleted = mascota.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}