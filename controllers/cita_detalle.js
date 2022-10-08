import { Op } from 'sequelize';
import {cita_detalle} from '../models/cita_detalle.js';


export const createCita_detalle = async (req, res) => {
    const body = req.body;
    const citaId = req.body['citaId'];
    const servicioId = req.body['servicioId'];
    cita_detalle.findOne(
        {where: 
            {[Op.and]: [
                {citaId: req.body['citaId']},
                {servicioId: req.body['servicioId']}
                ]}
    }).then(founded => {
        if(!founded) {
            cita_detalle.create(body)
                .then(creado => {
                    return res.status(201).send(creado);
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
            cita_detalle.increment(
                {cantidad: +1},
                {where: 
                    {[Op.and]: [
                        {citaId: citaId},
                        {servicioId: servicioId}
                    ]}
                }
            ).then(actualizado => {
                return res.status(201).send(actualizado[0][0][0])
            })
        }
    })
}

export const getCita_detalle = async (req, res) => {
    const id = req.params.id;
    const result = await cita_detalle.findAll({where: {citaId: id} });
    res.status(200).json(result);
}

export const updateCita_detalle = async (req, res) => {
    const citaId = req.params.citaId;
    const servicioId = req.params.servicioId;
    const cita_detalleUpdate = req.body;
    try {
        await cita_detalle.update(cita_detalleUpdate, {
            where: {
                [Op.and]: [
                    {citaId: citaId},
                    {servicioId: servicioId}
                ]
                }});
        const updated = await cita_detalle.findAll({
            where: {
                [Op.and]: [
                    {citaId: citaId},
                    {servicioId: servicioId}
                ]
                }});
        res.status(200).json(updated);
    } catch (err) {
        if('SequelizeValidationError'){
            return res.status(400).json({
                error: err.errors.map(e => e.message)
            })
        }
    }
}

export const deleteCita_detalle = async (req, res) => {
    const citaId = req.params.citaId;
    const servicioId = req.params.servicioId;
    let existe = { cantidad }
    existe = await cita_detalle.findAll(
        {where: {
            [Op.and]: [
                {citaId: citaId},
                {servicioId: servicioId}
            ]
            },
        raw: true}
    )
    // console.log(existe[0]);
    console.log(existe[0]['cantidad']);
    // if((!!existe) && existe[0]['cantidad'] <= 1){
    //     const deletedCita_detalle = await cita_detalle.destroy( 
    //         {where: {
    //             [Op.and]: [
    //                 {citaId: citaId},
    //                 {servicioId: servicioId}
    //             ]
    //             }});
        
    //     res.status(200).json(deletedCita_detalle);
    // } else {
    //     const updated = await cita_detalle.decrement(
    //         {cantidad: 1},
    //         {where: 
    //             {[Op.and]: [
    //                 {citaId: citaId},
    //                 {servicioId: servicioId}
    //             ]}
    //         }
    //     )
    //     res.status(200).json(updated)
    // }
}