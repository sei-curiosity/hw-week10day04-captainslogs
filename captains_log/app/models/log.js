const mongoose = require("mongoose")

const logSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    entry: String,
    shipIsBroken: true
    }, {

    timestamps: true

    })

const Log = mongoose.model("Log", LogSchema)
module.exports = Log