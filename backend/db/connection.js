// const mongoose = require('mongoose')
// mongoose.connect('const uri = "mongodb+srv://Ujjwal:<password>@cluster0.eumrlk1.mongodb.net/?retryWrites=true&w=majority";',err=>{
//     if(err){
//         console.log('Error During DB connection ',err)
//     }
//     else{
//         console.log('Connected to Database')
//     }
// })
// module.exports= mongoose;

const URL = "mongodb+srv://Ujjwal:Ujjwal0312@cluster0.eumrlk1.mongodb.net/blogdb?retryWrites=true&w=majority";
import mongoose from "mongoose";
const promise = mongoose.connect(URL);
promise.then(data =>{
    console.log("DB Connected...");
}).catch(err =>{
    console.log("Not connected ",err);
})
export default mongoose;