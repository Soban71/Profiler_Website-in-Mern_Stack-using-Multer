const express = require("express")
const app=express();
require("./db/connection.js");
const router=require("./routes/routes");
const cors=require("cors");
const port=8005;


app.use(express.json())
app.use(cors())
app.use(router);

app.use("/uploads",express.static("./uploads"));
app.listen(port , ()=>{
    console.log(`Port is running on the ${port}`);
})