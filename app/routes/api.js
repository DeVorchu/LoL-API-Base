import express from 'express';
import UsersCardController from '../controllers/userscard-controller.js'
import MatchesController from '../controllers/matches-controler.js' 

const router = new express.Router();

router.get('/usercard/:name', UsersCardController.GetUserData);
router.get('/match', MatchesController.GetUserMatch);


export default router;