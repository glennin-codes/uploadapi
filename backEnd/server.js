import express  from 'express';
import connectDb from './Db/connectDb.js';
import cors from 'cors';
import multer from 'multer';
import uploads from './model/uploads.js';


const  app= express();
const port = 8080;

app.get('/',(req,res)=>{
    res.send("uploading file")
})


const start =async()=>{
    try {
       await connectDb;
       console.log("connected");
        app.listen(port, ()=>{
            console.log(` server starting on ${port}`);
        })
    
    } catch (err) {
        console.log(err);
    }
}
start();