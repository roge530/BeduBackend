const servicio=require ('../models/servicio')

//Create
function createService (req,res){
    const body=req.body;
    servicio.create(body).then(servicio=>{
        res.status(201).send(servicio);
    })
}

//Get
async function getServices (req, res){
    const servicios= await servicio.findAll();
    res.status(200).json(servicios);

}

//Edit
async function updateService (req,res){
    const id=req.params.id;
    const servicio=req.body;
    await servicio.update(servicio, {where:{id}})
    const servicioUpdated=await servicio.findByPk(id);
    res.status(200).json(servicioUpdated)
}

//Delete
async function deleteService(req,res){
    const id= req.params.id;
    const deleted = servicio.destroy(
        {where: {id}}
    );
    res.status(200).json(deleted);
}

module.exports={
    createService,
    getServices,
    updateService,
    deleteService
}