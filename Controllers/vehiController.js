
const Vechicle = require('../Models/Vechicle')


const getAllVehicle = async (req, res) => {

    const vehicals = await Vechicle.find({})
    try {
        res.status(200).send(vehicals)

    }
    catch (error) {
        res.status(500).send(vehicals)
    }
}

const createVehicle = async (req, res) => {
    try {

        const vehi = new Vechicle(req.body)
        await vehi.save()
        res.status(200).send(vehi)
    }
    catch (err) {
        res.status(500).send(err)
    }
}

const updateVehicle = async (req, res) => {
    try {
        const vehi = await Vechicle.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({
            message: req.params.id + " is Updated"
        })
    }
    catch (error) {
        res.status(500).send(error)
    }
}

const deleteVehicle=async(req,res)=>{
    try{
        const vehical=await Vechicle.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: req.params.id + " is Deleted"
        })
    }
    catch(error)
    {
        res.status(500).send(error)
    }
}

module.exports = {
    getAllVehicle,
    createVehicle,
    updateVehicle,
    deleteVehicle
}