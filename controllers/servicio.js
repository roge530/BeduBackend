// const Servicio=require ('../models/servicio')
import {Servicio} from '../models/servicio'

//Create
function createService (req,res){
    const body=req.body;
    Servicio.create(body).then(servicio=>{
        res.status(201).send(servicio);
    })
}

//Get
async function getServices (req, res){
    const servicios= await Servicio.findAll();
    res.status(200).json(servicios);

}

//Edit
async function updateService (req,res){
    const id=req.params.id;
    const servicio=req.body;
    await Servicio.update(servicio, {where:{id}})
    const servicioUpdated=await Servicio.findByPk(id);
    res.status(200).json(servicioUpdated)
}

//Delete
async function deleteService(req,res){
    const id= req.params.id;
    const deleted = Servicio.destroy(
        {where: {id}}
    );
    res.status(200).json(deleted);
}

// module.exports={
//     createService,
//     getServices,
//     updateService,
//     deleteService
// }