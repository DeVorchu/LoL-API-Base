import express from 'express';
import playerData from '../controllers/playerData.js';
import statsData from '../controllers/statsData.js';



const router = new express.Router(); 

// PLAYER POST
router.post('/players', playerData.AddData);

// PLAYERS GET
router.get('/players', playerData.GetAllData); 

// PLAYER GET :name
router.get('/players/:name', playerData.GetAllDataByName);      

// PLAYER PUT :id
// PLAYER DELETE :id


// MATCH POST
// MATCHES GET
// MATCH GET :name 
// MATCH  PUT :id
// MATCH  DELETE :id 


// TEAM POST
// TEAMS GET 
// TEAM  GET :name 
// TEAM  PUT :id
// TEAM  DELETE :id


// STATS GET
router.get('/stats', statsData.GetAllData);   

// STATS  GET :name 
router.get('/stats/:name', statsData.GetAllDataByName);    

  

export default router;