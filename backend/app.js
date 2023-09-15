import express from "express";
import userRoutes from "./api/routes/userRoutes.js";
import blogRoutes from "./api/routes/blogRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
const app= express();
app.use(cors());
app.use(express.json());
app.use('/',userRoutes);
app.use('/',blogRoutes);
const server = app.listen(4321,err=>{
    if(err){
        console.log('Server Crash'+JSON.stringify(err))
    }
    else{
        console.log('Server started at '+server.address().port)
    }
})