const Vendor = require('../Models/Vendor.js')


const getAllVendors = async (req, res) => {
    const vendor = await Vendor.find({})
    try {
        res.status(200).send(vendor)

    }
    catch (error) {
        res.status(500).send(vendor)
    }
}

const CreateVendor = async (req, res) => {
    try {

        const vendor= new Vendor(req.body)
        await vendor.save()
        res.status(200).send(vendor)
    }
    catch (err) {
        res.status(500).send(err)
    }

}
const updateVendor = async (req, res) => {

    try {
        await Vendor.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({
            message: req.params.id + "vendor is Updated"
        })
    }
    catch (error) {
        res.status(500).send(error)
    }
}
const deleteVendors = async (req, res) => {
    try{
        await Vendor.findByIdAndDelete(req.params.id)
        res.status(200).send({
            message: req.params.id + "vendor is Deleted"
        })
    }
    catch(error)
    {
        res.status(500).send(error)
    }
}

module.exports={
    getAllVendors,
    CreateVendor,
    updateVendor,
    deleteVendors
}