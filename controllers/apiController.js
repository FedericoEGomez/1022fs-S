const {Team} = require('../models/teams')

class ApiController {
    hello (req, res){
        res.send("hellooooooooooooooooooo!")
    }
    async verListado (req, res){
        const equiposDeFutbol = await Team.find()
        res.status(200).json(equiposDeFutbol)
    }
    async listadoPorCategoria (req, res){
        const equiposDeFutbol = await Team.find({categoria: req.params.categoria})
        res.status(200).json(equiposDeFutbol)
    }
    async buscarPorId (req, res){
        const equiposDeFutbol = await Team.findById(req.params.id)
        res.status(200).json(equiposDeFutbol)
    }
    async buscarPorClub (req, res){
        const equiposDeFutbol = await Team.findOne({nombre: req.params.nombre})
        res.status(200).json(equiposDeFutbol)
    }
    async crear (req, res){
        try {
            const equipoGuardado = new Team(req.body)
            await equipoGuardado.save()
            res.status(201).json(equipoGuardado)
        } catch (error) {
            res.status(400).json(error)
        }
    }
    async editar (req, res){
        try {
            await Team.findByIdAndUpdate(req.params.id,req.body)
            const equiposDeFutbol = await Team.findById(req.params.id)
            res.status(201).json(equiposDeFutbol)
            /*
            res.status(201).json({
                msg: "el equipo con id " + req.params.id +" se actualizo"
            })*/
        } catch (error) {
            res.status(400).json(error)
        }
    }
    async borrar (req, res){
        await Team.findByIdAndDelete(req.params.id)
        res.status(201).json({
                msg: "el equipo con id " + req.params.id +" se borro"
        })
    }
}

module.exports = new ApiController
/*
ecomers - tienda
banco 
{
    nombre: juan,
    email: email
    active: active
}
{
    nombre: juan,
    email: email
    active: false
}

modelo - origen 
modelo - vista <---


*/