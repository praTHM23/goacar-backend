const mongoose=require('mongoose')

const VendorSchema =new mongoose.Schema({

    First_Name:{
        type:String,
        Required:true
    },
    Last_Name:{
        type:String,
        Required:true
    },
    Address:{
        type:String,
        Required:true
    },
    City_State:{
        type:String,
        Required:true
    },
    Pincode:{
        type:Number,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        //unique:true,
        lowercase:true
    },
    Phone_Number:{
        type:Number,
        required:true
    },
    Alternate_Number:{
        type:Number,
        required:true
    },
    Id_Proof:{
        type:String,
        required:true
    },
    Id_No:{
        type:String,
        required:true
    }

})

const Vendor=mongoose.model('vendor',VendorSchema)
module.exports=Vendor