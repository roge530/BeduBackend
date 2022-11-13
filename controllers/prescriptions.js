import {prescriptions} from '../models/prescriptions.js'

export const createPrescription = (req, res) => {
    prescriptions.create().then(prescription => {
        return res.status(201).json(prescription)
    })
    .catch(err => {return res.status(400).json({err})})
}

export const getPrescriptions = async (req, res) => {
    const allPrescriptions = await prescriptions.findAll()
    res.status(200).json(allPrescriptions)
}

export const deletePrescription = async (req, res) => {
    const id = req.params.id
    const deletedPrescription = prescriptions.destroy({where: {id}})
    res.status(200).json(deletedPrescription)
}