const  mongoose = require('mongoose')
const mongoose = require("mongoose")

const vehicleschema = new mongoose.Schema({
    v_type: String,
    description : String,
    engine: String,
    color: String
})

module.export = mongoose.model("vehicleDB", vehicleschema)