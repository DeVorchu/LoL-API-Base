import app from './app.js';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

mongoose.connect(process.env.DB_CONN,() => console.log('connected to mongoDB'));
   

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "localhost"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(cors());
const port = 1338; 
app.listen(port, () => {
    console.log(`server is rinin on da port: ${port}`);
});

 



  

