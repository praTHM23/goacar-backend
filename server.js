
const express = require("express");
const bodyParser = require("body-parser");
const mongoose=require('mongoose')
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./Routes/authRoutes");
const vehi_router=require('./Routes/vehicleRoutes')
const vendor_router = require("./Routes/vendorRoutes");
const { requireAuthentication, checkUser } = require("./Middleware/authmiddleware");
const authenticatToken = require("./Auth/verify");
const roleAuthentication = require("./Auth/roleAuthentication");
const tokenAuthentication = require("./Auth/tokenVerification");
const { role, Admins_Role, Users_Role } = require("./Utils/role");

const port = process.env.PORT || 3000;
const app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(router)



mongoose.connect("mongodb+srv://Goacar:23022001@cluster0.7tvttev.mongodb.net/Goacar?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    // useFindAndModify: false,
    retryWrites: true,
   
}).then(()=>{
    console.log(`DB CONNECTED`);
}).catch((err)=>{
    console.log(err);
    console.log(`DB NOT CONNECTED`);
});


// app.get('/smoothies',authenticatToken,roleAuthentication(Users_Role),tokenAuthentication,(req,res)=>{
//      console.log(req.userRole)
//     res.json({
//         message:"smoothies authenticated successfully",
      
//     })
// })
app.use(vehi_router)
app.use(vendor_router)

app.listen(port,()=>{
    console.log(`Server listening port http://localhost:${port}`);
})
