import PlayerData from "../../db/models/playerData.js";
import Repo from '../../repositories/repo.js'


class PlayersStats {  

    constructor(){
        
    }
    
    
    SavePlayerStats(payload){
        const repo = new Repo()  
        payload.statsJson.forEach(async el => {
            await repo.SaveReplayData(el) 
        }) 
    }

    async GetAllPlayersData(){
        const repo = new Repo()   
        return await repo.GetAllPlayersyData()

    }
    
    async GetAllPlayersyDataByName(name){
        const repo = new Repo()   
        return await repo.GetAllPlayersyDataByName(name)

    }
     
        
}

export default PlayersStats;