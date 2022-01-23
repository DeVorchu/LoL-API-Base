import PlayerDataModel from "../db/models/playerData.js";
import PlayersStats from "../usecases/playersStats.js";

class MatchData {   
    
  
    async GetAllData(req, res){
        const players = await PlayerDataModel.find()
        res.json({players})
    }

    async GetAllDataByName(req, res){
        const players = await PlayerDataModel.find({ name: req.body.name })
        res.json({players})
    }

    async GetAllTotalData(req, res){
        const stats = new PlayersStats()
        let ree = await stats.AllTotalPlayerStats()
        res.json(ree)
    }

    async GetTotalDataByName(req, res){
        const stats = new PlayersStats()
        let ree = await stats.TotalPlayerStats(req.body.name)
        res.json(ree)
    }

  
}




export default new MatchData();