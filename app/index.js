import app from './app.js';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.DB_CONN,() => console.log('connected to mongoDB'));
   
const port = 1338;
app.listen(port, () => {
    console.log(`server is rinin on da port: ${port}`);
});

 



  

