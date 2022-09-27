const express = require('express')
const {
    getAllVehicle,
    createVehicle,
    updateVehicle,
    deleteVehicle

}=require('../Controllers/vehicleController')
const vehi_router=express.Router()


vehi_router.get('/getAllVehicle',getAllVehicle)
vehi_router.post('/createVehicle',createVehicle)
vehi_router.put('/updateVehicle/:id',updateVehicle)
vehi_router.delete('/deleteVehicle/:id',deleteVehicle)

module.exports=vehi_router