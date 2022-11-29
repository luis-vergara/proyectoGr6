const mongoose = require("mongoose")
const { Schema } = mongoose

const ComentarioSchema = mongoose.Schema({
    comentario: String,
    valoracion: Number,
    fecha: { 
        type: Date, 
        default: Date.now,
    },
    user_id: { 
        type: Schema.Types.ObjectId, 
        ref: "User",
    },
    titulo_id: { 
        type: Schema.Types.ObjectId, 
        ref: "Titulo",
    },
})

module.exports = mongoose.model("Comentario", ComentarioSchema)