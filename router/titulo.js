const express = require("express")
const TituloController = require("../controllers/titulo")
const md_auth = require("../middlewares/authenticated")

const api = express.Router()

api.get("/titulos", [md_auth.asureAuth], TituloController.getTitulos)
api.get("/titulos/nombre", [md_auth.asureAuth], TituloController.getTituloByName)
//----------------------------------------------------------------------------
/* api.post("/user",[md_auth.asureAuth], UserController.createUser)
api.patch("/user/:id",[md_auth.asureAuth], UserController.updateUser)
api.delete("/user/:id",[md_auth.asureAuth], UserController.deleteUser) */

module.exports = api