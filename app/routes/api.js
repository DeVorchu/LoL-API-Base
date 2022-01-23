import express from 'express';
import matchData from '../controllers/matchData.js';



const router = new express.Router();


router.get('/test', matchData.GetAllData);
router.post('/test', matchData.addData);



export default router;