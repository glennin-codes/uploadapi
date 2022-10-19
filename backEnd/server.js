import express  from 'express';
import connectDb from './Db/connectDb.js';
import cors from 'cors';
import multer from 'multer';
import uploads from './model/uploads.js';
import bodyParser from 'body-parser';
import fs from 'fs';
const  app= express();
const port = 8080;



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())





const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
  
  app.post("/", upload.single("testImage"), (req, res) => {
    const saveImage =  imageModel({
      name: req.body.name,
      img: {
        data: fs.readFileSync("uploads/" + req.file.filename),
        contentType: "image/png",
      },
    });
    saveImage
      .save()
      .then((res) => {
        console.log("image is saved");
      })
      .catch((err) => {
        console.log(err, "error has occur");
      });
      res.send('image is saved')
  });
  
  
  app.get('/',async (req,res)=>{
    const allData = await imageModel.find()
    res.json(allData)
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