const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    fname:{
        type : String,
        required : true
    },
    imgPath:{ 
        type : String,
        required : true
    },
    Date:{
        type  : Date
    }
})

const Users=new mongoose.model("Users" , userSchema);

module.exports=Users;