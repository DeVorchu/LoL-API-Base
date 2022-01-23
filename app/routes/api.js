import express from 'express';
import playerData from '../controllers/playerData.js';



const router = new express.Router(); 


router.post('/players', playerData.AddData);
router.get('/players', playerData.GetAllData); 
router.get('/players/:name', playerData.GetAllDataByName);      

  

export default router;