import express from 'express';
import playerData from '../controllers/playerData.js';
import statsData from '../controllers/statsData.js';
import mathesData from '../controllers/matchData.js'
import teamsData from '../controllers/teamData.js';



const router = new express.Router(); 

// PLAYER POST
// router.post('/players', playerData.AddData);

// PLAYERS GET
router.get('/players', playerData.GetAllData); 

// PLAYER GET :name
router.get('/players/:name', playerData.GetAllDataByName);      

// PLAYER DELETE :id


// MATCH POST
router.post('/matches', mathesData.AddData);     

// MATCHES GET
router.get('/matches/', mathesData.GetAllData);  

// MATCH  DELETE :id 
router.get('/matches');  


// TEAM POST
router.post('/teams', teamsData.AddData);     

// TEAMS GET 
router.get('/teams', teamsData.GetAllTeams);     

// TEAM  GET :name 
router.get('/teams/:name', teamsData.GetTeamByName);     

// TEAM  PUT :id
router.get('/teams/:id');     

// TEAM  DELETE :id
router.get('/teams/:id');     


// STATS GET
router.get('/stats', statsData.GetAllData);   

// STATS  GET :name 
router.get('/stats/:name', statsData.GetAllDataByName);    

  

export default router;