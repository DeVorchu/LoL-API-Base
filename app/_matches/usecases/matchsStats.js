import PlayerData from "../../db/models/playerData.js";
import MongoRepo from '../../repositories/mongoseRepo'


class PlayersStats {   

    
    
    SavePlayerStats(payload){
        try {
            payload.statsJson.forEach(async el => {
                await MongoRepo.SaveData(el)
            })

            return 201
        } catch (error) {
            return 'error!'
        }


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