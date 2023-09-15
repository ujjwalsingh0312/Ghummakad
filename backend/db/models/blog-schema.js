import mongoose from "../connection.js";
import { SchemaTypes } from "mongoose";

const Schema = mongoose.Schema;
const blogSchema = new Schema({
    title: {type: SchemaTypes.String, required: true},
    body: {type:SchemaTypes.String, required: true },
    category: { type: SchemaTypes.String, required: true },
    date: { type: SchemaTypes.Date, required: true },
    token: { type: SchemaTypes.String, required: true , ref:'newuser'}
})
const BlogModel = mongoose.model("new-blogs", blogSchema);
export default BlogModel;