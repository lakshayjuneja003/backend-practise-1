const mongoose = require("mongoose")
const connectToDb = async ()=>{
    mongoose.connect("mongodb://0.0.0.0/backend_practise")
    .then(()=>{
        console.log("connected to db")
    }).catch(()=>{
        console.log("db not connected ")
        process.exit(1)
    })
}
module.exports = connectToDb