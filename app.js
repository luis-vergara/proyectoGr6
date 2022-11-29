require('dotenv').config();
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
require('dotenv').config();
/* const { API_VERSION } = require("./constants") */

const app = express()

// Import routings
const authRoutes = require("./router/auth")
const userRoutes = require("./router/user")
const tituloRoutes = require("./router/titulo")
const comentarioRoutes = require("./router/comentario")

// Configure Body Parse
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Configure static folder (uploads)
app.use(express.static("uploads"))

// Congifure Header HTTP - CORS
app.use(cors())

// Configure routings
app.use(`/api/${process.env.API_VERSION}`, authRoutes)
app.use(`/api/${process.env.API_VERSION}`, userRoutes)
app.use(`/api/${process.env.API_VERSION}`, tituloRoutes)
app.use(`/api/${process.env.API_VERSION}`, comentarioRoutes)

module.exports = app