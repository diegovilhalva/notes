import mongoose from "mongoose";
import User from "./User.js";

const Schema = mongoose.Schema
const notesSchema = new Schema({
    user:{
        type:Schema.ObjectId,
        ref:'User'
    },
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
  

},{timestamps:true})




const Note = mongoose.model('Note',notesSchema)

export default Note