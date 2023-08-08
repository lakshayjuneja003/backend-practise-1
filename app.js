require("dotenv")
const Express = require("express")
const app = Express();

const cors = require("cors");
const connectToDb = require("./config/db");

// express middleware
app.use(Express.json())
app.use(Express.urlencoded(
{extended:true}
))
app.use(cors())
// init connection to db
connectToDb();


const userRoutes = require("./routes/userRoutes.js")

app.use("/",userRoutes)
module.exports = app;