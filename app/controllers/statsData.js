import PlayerDataModel from "../db/models/playerData.js";
import _queryStats from '../_stats/queries/statsData.js'

class StatsData {   
    
  
    

    async GetAllDataByName(req, res){
        const stats = new _queryStats()
        let ree = await stats.GetAllPlayerDataToTotalByName(req.params.name)  
        res.json({players: ree})
    }

    async GetAllData(req, res){
        const stats = new _queryStats()
        let ree = await stats.GetAllPlayerDataToTotal()  
        res.json({players: ree})
    }


  
}




export default new StatsData();