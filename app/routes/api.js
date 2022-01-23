import express from 'express';
import matchData from '../controllers/matchData.js';
import playerData from '../controllers/playerData.js';



const router = new express.Router();

router.get('/players', playerData.GetAllData);
router.post('/players', playerData.GetAllDataByName);
router.post('/total', playerData.GetTotalDataByName);

router.get('/test', matchData.GetAllData);
router.post('/test', matchData.addData);



export default router;