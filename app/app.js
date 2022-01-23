import express from 'express';
import api from './routes/api.js';
import bp from 'body-parser';


const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use('/api',api);


export default app;  