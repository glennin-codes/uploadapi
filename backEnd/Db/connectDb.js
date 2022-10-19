import mongoose from "mongoose";
const connectDb = 
     mongoose.connect("mongodb+srv://glennin:123ayienda@cluster0.qpkvfaf.mongodb.net/uploadData?retryWrites=true&w=majority"
)
 

   export default connectDb;