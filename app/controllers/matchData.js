import MatchDataModel from '../db/models/matchData.js'
import PlayerStats from '../usecases/playersStats.js'

class MatchData {   
    
  
    async GetAllData(req, res){
        const matches = await MatchDataModel.find()
        res.json({matches})
    }

    async GetDataById(req, res){}
    async GetDataByUserId(req, res){}
    async GetDatabyTeamId(req, res){}

    async addData(req, res){
        const stats = new PlayerStats()
        stats.SavePlayerStats(req.body.matchData)
    };

   

     
  
}




export default new MatchData();