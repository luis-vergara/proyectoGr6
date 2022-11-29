const Comentario = require("../models/comentario")
const { actualizarValoracion } = require("./titulo")

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  } 

async function postComentario(req, res) {

    const { titulo_id } = req.body
    
    const comentario = new Comentario({ ...req.body })

    comentario.save((error, commentStored) => {

        if(error) {
            res.status(400).send({ msg: "Error al crear el comentario" })
        } else {
            res.status(201).send({ commentStored })
        }
    })
    await delay(2000)
    await actualizarValoracion(titulo_id)
}

async function getComentariosById(req, res) {

    const {titulo_id} = req.query

    let response = null

    if(titulo_id === undefined) {
        response = await Comentario.find()
    } else {
        response = await Comentario.find({ titulo_id: titulo_id })
    }

    res.status(200).send(response)

}

module.exports = {

    postComentario,
    getComentariosById,
    
}