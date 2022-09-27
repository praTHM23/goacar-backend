
const mongoose = require('mongoose')

const VehicleSchema = new mongoose.Schema({

    Vehicle_No: {
        type: Number,
        required: true
    },
    Make: {
        type: String,
        required: true
    },
    Vehicle_Type: {
        type: String,
        required: true
    },
    Vehicle_Class:
    {
        Transmission: {
            type: String,
            required: true
        },
        Class: {
            type: String,
            required: true
        }
    },
    Registration_No: {
        type: String,
        required: true
    },
    Vehicle_Colour: {
        type: String,
        required: true
    },
    Car_image: {
        type: String,
        required: true
    },
    Vehicle_Owner: {
        type: String,
        requied: true
    },
    On_Goicar_Since: {
        type: Date
        //only date or date.now
    },
    Rc_Book: {
        type: String,
        requied: true
    },
    Pollution_certificate: {
        type: String,
        requied: true
    },
    Insurance: {
        type: String,
        requied: true
    },
    RSA:{
    type: String,
    requied: true
}
})

const vehicle=mongoose.model('vehicle',VehicleSchema)
module.exports=vehicle