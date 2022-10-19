import mongoose from "mongoose";
  const uploadsSchema = new mongoose.Schema({
     name:{
        type:String,
        
     },
     description:{
        type:String,

     },
     img:{
        data:Buffer,
        contentType:String


     }

  })
  export default uploads=mongoose.model('uploads',uploadsSchema);