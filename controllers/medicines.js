import {medicines} from '../models/medicines.js'

export const createMedicine = async (req, res) => {
    const {name, price} = req.body
    const newMedicine = {name, price}
    medicines.create(newMedicine).then(medicine => {
        return res.status(201).json(medicine)
    }).catch(err => {
        return res.status(400).json({err})
    })
}

export const getMedicine = async (req, res) => {
    const id = req.params.id
    const medicine = await medicines.findByPk(id)
    res.status(200).json(medicine)
}

export const updateMedicine = async (req, res) => {
    const id = req.params.id
    const {name, price} = req.body
    const newMedicine = {name, price}
    medicines.update(newMedicine, {where: {id}})
        .then(updated => {
            medicines.findByPk(id)
                .then(updatedMedicine => {
                    res.status(200).json(updateMedicine)
                })
        })
        .catch(err => {
            res.status(400).json({err})
        })
}

export const deleteMedicine = async (req, res) => {
    const id = req.params.id
    const deletedMedicine = medicines.destroy({where: {id}})
    res.status(200).json(deletedMedicine)
}