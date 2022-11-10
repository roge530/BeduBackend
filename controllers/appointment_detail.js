import { Op } from 'sequelize';
import { appointment_detail } from '../models/appointment_detail.js';


export const createAppointment_detail = async (req, res) => {
    const body = req.body;
    const appointmentId = req.body['appointmentId'];
    const serviceId = req.body['serviceId'];
    appointment_detail.findOne(
        {where: 
            {[Op.and]: [
                {appointmentId: req.body['appointmentId']},
                {serviceId: req.body['serviceId']}
                ]}
    }).then(founded => {
        if(!founded) {
            appointment_detail.create(body)
                .then(created => {
                    return res.status(201).send(created);
                })
                    .catch (err => {
                        if(["SequelizeValidationError", "SequelizeUniqueConstraintError", "SequelizeForeignKeyConstraintError"].includes(err.name)){
                            return res.status(400).json({
                                error: "invalid"
                            })
                        }
                        else {
                            throw err;
                            
                        }
                    })
        }
        else{
            appointment_detail.increment(
                {quantity: +1},
                {where: 
                    {[Op.and]: [
                        {appointmentId: appointmentId},
                        {serviceId: serviceId}
                    ]}
                }
            ).then(updated => {
                return res.status(201).send(updated[0][0][0])
            })
        }
    }).catch(err => {
        return res.status(400).json({
            error: "Invalid data"
        })
    })
}

export const getAppointment_detail = async (req, res) => {
    const id = req.params.id;
    const result = await appointment_detail.findAll({where: {appointmentId: id} });
    res.status(200).json(result);
}

export const updateAppointment_detail = (req, res) => {
    const appointmentId = req.params.appointmentId;
    const serviceId = req.params.serviceId;
    const appointment_detailUpdate = req.body;
    appointment_detail.update(appointment_detailUpdate, {
            where: {
            [Op.and]: [
                {appointmentId: appointmentId},
                {serviceId: serviceId}
            ]
            }}).then(updated => {
                appointment_detail.findAll({
                    where: {
                        [Op.and]: [
                            {appointmentId: appointmentId},
                            {serviceId: serviceId}
                        ]
                    }
                }).then(updated => res.status(200).json(updated))
            })
        .catch (err => {
            return res.status(400).json({
                error: "Invalid data"
            })
        }) 
    
}

export const deleteAppointment_detail = async (req, res) => {
    const appointmentId = req.params.appointmentId;
    const serviceId = req.params.serviceId;
    appointment_detail.findOne(
        {where: {
            [Op.and]: [
                {appointmentId: appointmentId},
                {serviceId: serviceId}
            ]
            },
        raw: true}
    ).then(result => {
        if(!!result){
            if(result['quantity'] > 1){
                console.log(result)
                appointment_detail.decrement(
                    {quantity: +1},
                    {where: 
                        {[Op.and]: [
                            {appointmentId: appointmentId},
                            {serviceId: serviceId}
                        ]}
                    }).then(updated => {
                        return res.status(201).send(updated[0][0][0])
                    }
                    )
            }
            else {
                appointment_detail.destroy( 
                    {where: {
                        [Op.and]: [
                            {appointmentId: appointmentId},
                            {serviceId: serviceId}
                        ]
                        }}).then(destroyed => {
                            return res.status(200).json(destroyed)
                        })
            }
        }
        else{
            return res.status(400).json({
                error: "Invalid data"
            })
        }
    })
}