
import { Service } from '../models/service.js'

//Create
export const createService = (req, res) => {
    const body=req.body;
    Service.create(body).then(service=>{
        res.status(201).send(service);
    }).catch(err => {
        res.status(400).json({
            error: "Invalid element(s)"
        })
    })
}

//Get
export const getServices = async (req, res) => {
    const services= await Service.findAll();
    res.status(200).json(services);

}

//Edit
export const updateService = (req, res) => {
    const id=req.params.id;
    const service=req.body;
    Service.update(service, {where:{id}})
        .then(updated => {
            Service.findByPk(id)
                .then(serviceUpdated => {
                    res.status(200).json(serviceUpdated)
                })
        })
            .catch(err => {
                res.status(400).json({
                    error: "Invalid element(s)"
                })
            })
}

//Delete
export const deleteService = async (req, res) => {
    const id= req.params.id;
    const deleted = Service.destroy(
        {where: {id}}
    );
    res.status(200).json(deleted);
}