const express = require("express");
const app = express();
require("dotenv").config

app.use(express.json());

app.use("/api/get", (req,res)=>{
    res.json({message: "This is Ajay Kushwaha webserver"

    })
});   
 
app.use("/api/get/user/detail",(req,res)=>{
    res.json({user:{
        name:"Ajay Kushwaha",
        age: 24,
        contact: 857458213
    },env:process.env.NAME
  });
})


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${PORT}`);
});