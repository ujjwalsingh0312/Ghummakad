import mongoose from 'mongoose';
import { SchemaTypes } from 'mongoose';
import joi from 'joi';
// const joi = require('joi');
import mongooseUniqueValidator from 'mongoose-unique-validator';
// var uniqueValidator = require('mongoose-unique-validator');
// import { Jwt } from 'jsonwebtoken';
import jsonwebtoken from 'jsonwebtoken';
// const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    'Name':{type: SchemaTypes.String , required:true},
    'UserName':{type:SchemaTypes.String , required:true, unique:true},
    'Password':{type:SchemaTypes.String , required:true},
    'token':{type:String}
    
});

export const generateAuthToken = async (user_id) =>{
    try{
      const token = jsonwebtoken.sign({_id:user_id.toString()},"thisisourjsonwebtokenwhenuserregisters");//this is our user json web token when user registers
      const x=UserModel.findByIdAndUpdate(user_id,{token:token},(err,doc)=>{
        if(err){
          // console.log("error aaya hai in findbyid ",err)
        }else{
          // console.log("updated user is ",doc)
        }
      })

      // const x=UserModel.findByIdAndUpdate({_id:user_id},{token:{token}})
      // console.log("this is x ",x)
      // UserModel.tokens = UserModel.tokens.concat({token})
      // const doc = await UserModel.save()
      // console.log("generated token successfully ",doc)
    }catch(err){
      // console.log("error in generating token ",err)
    }
}

export const validateUser = (user) => {
    const schema = joi.object({
      name: joi.string().required(),  
      email: joi.string().email().min(5).max(500).required(),
      pass: joi.string().max(1024).required()
    })
    return schema.validate(user)
  }
userSchema.plugin(mongooseUniqueValidator);
export const UserModel = mongoose.model('newuser',userSchema);

// module.exports={UserModel,validateUser,generateAuthToken};