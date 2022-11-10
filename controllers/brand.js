import { Brand } from '../models/brand.js'

//Create
export const createBrand =  (req, res) => {
    const body=req.body;
    Brand.create(body).then(brand=>{
        res.status(201).send(brand);
    }).catch(err => {
        res.status(400).json({
            error: "Invalid data"
        })
    })
}

//Get
export const getBrands = async (req, res) => {
    const brands = await Brand.findAll();
    res.status(200).json(brands);

}

//Edit
export const updateBrand = (req, res) => {
    const id = req.params.id;
    const brand = req.body;
    Brand.update(brand, {where:{id}})
        .then(updated => {
            Brand.findByPk(id).then(result => {
                res.status(200).json(result)
            })
        })
            .catch(err => {
                res.status(400).json({
                    error: "Invalid data"
                })
            })
}

//Delete
export const deleteBrand = async (req, res) => {
    const id= req.params.id;
    const deleted = Brand.destroy(
        {where: {id}}
    );
    res.status(200).json(deleted);
}