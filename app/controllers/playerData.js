import PlayerDataModel from "../db/models/playerData.js";
import _usecasePlayersStats from "../_players/usecases/playersStats.js";

class PlayerData {   
    
  
    async GetAllData(req, res){
        const stats = new _usecasePlayersStats()
        let ree = await stats.GetAllPlayersData()
        res.json({players: ree})
    }

    async GetAllDataByName(req, res){
        const stats = new _usecasePlayersStats()
        let ree = await stats.GetAllPlayersyDataByName(req.params.name)  
        res.json({players: ree})

        
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

    async AddData(req, res){
        const stats = new _usecasePlayersStats()
        const ree = stats.SavePlayerStats(req.body.matchData)
        
        res.json({status: ree})  
    };

  
}




export default new PlayerData();