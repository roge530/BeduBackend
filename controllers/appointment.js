import { appointment } from '../models/appointment';

export const createAppointment =  (req, res) => {
    const body = req.body;
    appointment.create(body).then(appointment => {
        return res.status(201).json(appointment);
    }) .catch (err => {
        return res.status(400).json({
            error: "Invalid data"
        })
    });
}

export const getAppointment = async (req, res) => {
    const id = req.params.id;
    const result = await appointment.findByPk(id);
    res.status(200).json(result);
}

export const getAppointmentsByCustomer = async (req, res) => {
    const id = req.params.id;
    const result = await appointment.findAll({where: {customerId: id} });
    res.status(200).json(result);
}

export const getAppointmentByPet = async (req, res) => {
    const id = req.params.id;
    const result = await appointment.findAll({where: {petId: id} });
    res.status(200).json(result);
}

export const updateAppointment = (req, res) => {
    const id = req.params.id;
    const appointmentUpdate = req.body;
    cita.update(appointmentUpdate, {where: {id}})
        .then(updated => {
            appointment.findByPk(id)
                .then(updated => {
                    res.status(200).json(updated);
                })
        })
        .catch(err => {
            res.status(400).json({
                error: "Invalid data"
            })
        })
}

export const deleteAppointment = async (req, res) => {
    const id = req.params.id;
    const deleted = appointment.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}