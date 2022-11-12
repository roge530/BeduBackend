import { Op } from 'sequelize';
import {medicines_on_presciptions} from '../models/medicines_on_prescriptions.js'

export const createMedicinesOnPrescriptions = async (req, res) => {
    const body = req.body
    const medicineID = body['medineID']
    const presciptionID = body['prescriptionID']
    medicines_on_presciptions.findOne({ 
        where: 
            {[Op.and] : [
                {medicineID},
                {presciptionID}
            ]}
    }).then(founded => {
        if (founded) {
            return res.status(409).json({
                error: 'Relation already exists'
            })
        }
        medicines_on_presciptions.create(body)
            .then(created => {
                return res.status(201).send(created)
            })
            .catch(err => {
                if(["SequelizeValidationError", "SequelizeUniqueConstraintError", "SequelizeForeignKeyConstraintError"].includes(err.name)){
                    return res.status(400).json({
                        error: "invalid"
                    })
                }
                throw err;
            })
    })
}

export const getMedicinesOnAPrescription = async (req, res) => {
    const presciptionID = req.params.presciptionID
    const result = await medicines_on_presciptions.findAll({
        where: {presciptionID}
    })
    return res.status(200).json(result)
}

export const updateMedicineOnAPrescription = async (req, res) => {
    const medicineID = req.body.medicineID
    const presciptionID = req.body.presciptionID
    const newMedicineID = req.body.newMedicineID
    medicines_on_presciptions.update({medicineID: newMedicineID}, {
        where: {
            [Op.and] : [
                {medicineID},
                {presciptionID}
            ]
        }
    }).then(updated => {
        return res.status(200).json(updated)
    })
    .catch(err => {
        return res.status(400).json({err})
    })
}

export const delecteMedicineOnAPresciption = async (req, res) => {
    const medicineID = req.body.medicineID
    const presciptionID = req.body.presciptionID
    medicines_on_presciptions.destroy(
        {where: {
            [Op.and] : [
                {medicineID},
                {presciptionID}
            ]
        }}
    ).then(destroyed => {
        return res.status(200).json(destroyed)
    })
    .catch(err => {
        return res.status(400).json({err})
    })
}