const express = require("express")

const {home, createUser , getUsers , deleteUser, editUser} = require("../controller/userController.js")


const router = express.Router();
router.get("/",home)
router.post("/createuser",createUser)
router.get("/getUsers",getUsers)
router.put("/editUser/:id",editUser)
router.delete("/delteUser/:id",deleteUser)

module.exports= router