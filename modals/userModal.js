const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        trim:true,
        maxLength:[20,"name must be less then 20 characters"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true
    }
})
module.exports = mongoose.model("user",userSchema)
