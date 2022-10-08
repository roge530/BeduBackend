import {Marca} from '../models/marca.js'

//Create
export const createMarca = async (req, res) => {
    const body=req.body;
    Marca.create(body).then(marca=>{
        res.status(201).send(marca);
    })
}

//Get
export const getMarca = async (req, res) => {
    const marcas= await Marca.findAll();
    res.status(200).json(marcas);

}

//Edit
export const updateMarca = async (req, res) => {
    const id=req.params.id;
    const marca=req.body;
    await Marca.update(marca, {where:{id}})
    const marcaUpdated=await Marca.findByPk(id);
    res.status(200).json(marcaUpdated)
}

//Delete
export const deleteMarca = async (req, res) => {
    const id= req.params.id;
    const deleted = Marca.destroy(
        {where: {id}}
    );
    res.status(200).json(deleted);
}