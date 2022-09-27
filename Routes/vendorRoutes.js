const express = require('express')

const {
    getAllVendors,
    createVendor,
    updateVendor,
    deleteVendors

}=require('../Controllers/vendorController')
const vendor_router=express.Router()

vendor_router.get('/getAllVendors',getAllVendors)
vendor_router.post('/createVendor',createVendor)
vendor_router.put('/updateVendor/:id',updateVendor)
vendor_router.delete('/deleteVendor/:id',deleteVendors)




module.exports=vendor_router