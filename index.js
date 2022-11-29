const mongoose = require("mongoose")
const app = require("./app")
require('dotenv').config();
/* const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    IP_SERVER,
    API_VERSION
} = require("./constants") */

const PORT = process.env.DB_PORT || 3977

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/`,
    (error) => {
        if(error) throw error;

        console.log("La conexion con la base de datos ha sido exitosa");
        
        app.listen(PORT, () => {
            console.log("####################")
            console.log("##### API REST #####")
            console.log("####################")
            console.log(`http://${process.env.IP_SERVER}:${PORT}/api/${process.env.API_VERSION}`)
        })
    }
    )