const mongoose = require("mongoose")

const TituloSchema = mongoose.Schema({
    titulo: {
        type: String,
        unique: true,
    },
    genero: String,
    tipoTitulo: String,
    sinopsis: String,
    urlPoster: String,
    valoracion: Number,
})

module.exports = mongoose.model("Titulo", TituloSchema)