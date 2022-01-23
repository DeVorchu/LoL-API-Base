import app from './app.js';
import mongoose from 'mongoose'

mongoose.connect('mongodb://g343:HXhSzbGgEC@mongodb.mikr.dev:27017/db_g343',() => console.log('connected to mongo'));

const port = 1338;
app.listen(port, () => {
    console.log(`server is rinin on da port: ${port}`);
});





  

