import PlayerData from "../../db/models/playerData.js";
import Repo from '../../repositories/repo.js'


class PlayersStats {  


    
    
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
    

    async TotalPlayerStats(name){
        const playerStats = await PlayerData.find({ name: name })

        let kills = 0
        let deaths = 0
        let assists = 0

        playerStats.forEach(el=> {
            kills = kills + el.kils
            deaths = deaths + el.deaths
            assists = assists + el.assists
        });

        return { name: name, kils: kills, deaths: deaths, assists: assists  }
    }



  


        
}

export default PlayersStats;