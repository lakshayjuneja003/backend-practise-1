const user = require("../modals/userModal.js")

exports.home = (req,res)=>{
    res.send("Hello World")
}

exports.createUser = async (req,res)=>{
try{
const {name, email} = req.body
if(!name || !email ){
throw new Error("name and email is required")
}
const userExists = await User.findOne({email})
if (userExists){
    throw new Error("user already exists")
}
res.status(200).json({
    sucess:true,
    message:"user created succesfully"
})

}catch(error){
res.status(404).json({
    success: false,
    message:error.message
})
}
}



exports.getUsers = async ()=>{
    try {
        const users = await User.find({})

        res.status(200).json({
            sucess:true,
            users
        })

    } catch (error) {
        console.log(error)
        res.status(404).json({
            sucess:false,
            message:error,message
        })
    }
}



exports.editUser = async (req,res)=>{
try {
    const user = await 
    User.findByIdAndUpdate(req,params.id,req.body)
    res.status(200).json({
        success:true,
        message:"User updated sucessfully"
    })
} catch (error){
    console.log(error)
    res.status(400).json({
        success:false,
        message:error.message
    })
}
}


exports.deleteUser = async (req,res)=>{
    try {
        const userId = req.params.id
        const user = await
        User.findByIdAndDelete(userId)
  res.status(200).json({
    sucess:true,
    message:"user deleted sucessfully"
  })


    } catch (error) {
        console.log(error)
        res.status(400).json({
            success:false,
            message:error.message
        })
    }

}