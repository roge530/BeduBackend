// const Marca=require ('../models/marca')
import { Marca } from '../models/marca'

//Create
function createBrand (req,res){
    const body=req.body;
    Marca.create(body).then(marca=>{
        res.status(201).send(marca);
    })
}

//Get
async function getBrands (req, res){
    const marcas= await Marca.findAll();
    res.status(200).json(marcas);

}

//Edit
async function updateBrand (req,res){
    const id=req.params.id;
    const marca=req.body;
    await Marca.update(marca, {where:{id}})
    const marcaUpdated=await Marca.findByPk(id);
    res.status(200).json(marcaUpdated)
}

//Delete
async function deleteBrand(req,res){
    const id= req.params.id;
    const deleted = Marca.destroy(
        {where: {id}}
    );
    res.status(200).json(deleted);
}

// module.exports={
//     createBrand,
//     getBrands,
//     updateBrand,
//     deleteBrand
// }