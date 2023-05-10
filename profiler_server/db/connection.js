//janjuasoban846
//soban112211

const mongoose=require("mongoose");

const DB="mongodb+srv://janjuasoban846:soban112211@cluster0.sx9uwdx.mongodb.net/test"


mongoose.connect(DB , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>
console.log("Database Connected")).
catch((err)=>{
console.log("Error is "+err);
})