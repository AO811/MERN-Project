const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://abhikdas0811:abhikdas@cluster0.rnbnd5i.mongodb.net/schooldb");
var db=mongoose.connection;
db.on("open",()=>console.log("Connected"))
db.on("error",()=>console.log("Not Connected"))

app.use("/userRoute", userRoute);
app.use("/bookingRoute", bookingRoute);

app.listen(4000,()=>{
    console.log("Server is running in the port 4000");
})