import {Marca} from '../models/marca.js'

//Create
export const createMarca =  (req, res) => {
    const body=req.body;
    Marca.create(body).then(marca=>{
        res.status(201).send(marca);
    }).catch(err => {
        res.status(400).json({
            error: "Elemento(s) inválidos"
        })
    })
}

//Get
export const getMarca = async (req, res) => {
    const marcas= await Marca.findAll();
    res.status(200).json(marcas);

}

//Edit
export const updateMarca = (req, res) => {
    const id=req.params.id;
    const marca=req.body;
    Marca.update(marca, {where:{id}})
        .then(actualizado => {
            Marca.findByPk(id).then(resultado => {
                res.status(200).json(resultado)
            })
        })
            .catch(err => {
                res.status(400).json({
                    error: "Elemento(s) inválidos"
                })
            })
}

//Delete
export const deleteMarca = async (req, res) => {
    const id= req.params.id;
    const deleted = Marca.destroy(
        {where: {id}}
    );
    res.status(200).json(deleted);
}