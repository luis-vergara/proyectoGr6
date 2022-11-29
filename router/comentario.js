const express = require("express")
const ComentarioController = require("../controllers/comentario")
const md_auth = require("../middlewares/authenticated")

const api = express.Router()

api.get("/comentarios", [md_auth.asureAuth], ComentarioController.getComentariosById)
api.post("/comentarios/publicar", [md_auth.asureAuth], ComentarioController.postComentario)
//----------------------------------------------------------------------------
/* api.post("/user",[md_auth.asureAuth], UserController.createUser)
api.patch("/user/:id",[md_auth.asureAuth], UserController.updateUser)
api.delete("/user/:id",[md_auth.asureAuth], UserController.deleteUser) */

module.exports = api