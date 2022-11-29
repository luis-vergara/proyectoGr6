const Titulo = require("../models/titulo")
const Comentario = require("../models/comentario")

async function getTitulos(req, res) {

    const response = await Titulo.find()
    res.status(200).send(response)

}

async function getTituloByName(req, res) {

    const {nombre} = req.query
    let response = null

    if(nombre === undefined) {
        res.status(400).send({ msg: "Busca una pelicula" })
    } else {
        response = await Titulo.find({ titulo: nombre })
        if (response.length === 0) {
            res.status(400).send({ msg: "No se encuentra esta pelicula" })
        }else {
            res.status(200).send(response)

        }
    }

    
}

async function actualizarValoracion(titulo_id){
    Comentarios = await Comentario.find({ titulo_id: titulo_id })
    let suma = 0
    if(Comentarios.length === 0) {
        return false
    } else {
        for(let i=0; i<Comentarios.length; i++){
            suma += Comentarios[i].valoracion
        }

        let promedio = suma/Comentarios.length

        const tituloData = {
            valoracion: promedio,
        }

        Titulo.findByIdAndUpdate({ _id: titulo_id }, tituloData, (error) => {
            if(error) {
                return false
            }
        })

        return true

    }

}

module.exports = {
    getTitulos,
    getTituloByName,
    actualizarValoracion,
}