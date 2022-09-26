
const express = require("express");
const bodyParser = require("body-parser");
const mongoose=require('mongoose')
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./Routes/authRoutes");
const { requireAuthentication, checkUser } = require("./Middleware/authmiddleware");
const authenticatToken = require("./Auth/verify");
const roleAuthentication = require("./Auth/roleAuthentication");
const tokenAuthentication = require("./Auth/tokenVerification");
const { role, Admins_Role, Users_Role } = require("./Utils/role");

const port = process.env.PORT || 8080;
const app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(router)



mongoose.connect("mongodb://0.0.0.0:27017/goaCar",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
   
}).then(()=>{
    console.log(`DB CONNECTED`);
}).catch((err)=>{
    console.log(err);
    console.log(`DB NOT CONNECTED`);
});


app.get('/smoothies',authenticatToken,roleAuthentication(Users_Role),tokenAuthentication,(req,res)=>{
     console.log(req.userRole)
    res.json({
        message:"smoothies authenticated successfully",
      
    })
})


app.listen(port,()=>{
    console.log(`Server listening port http://localhost:${port}`);
})
