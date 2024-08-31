const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/get", (req,res)=>{
    res.json({message: "This is Ajay Kushwaha webserver"})
});   


const PORT =  7800;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});