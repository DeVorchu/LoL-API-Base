import express from 'express';
import api from './routes/api.js';
import bp from 'body-parser';
import cors from 'cors'

const app = express();


app.use(cors());
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use('/api',api);


export default app;  