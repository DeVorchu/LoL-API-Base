import PlayerData from "../db/models/playerData.js";


class PlayersStats {   
    
    SavePlayerStats(payload){
        console.log(payload);
        payload.statsJson.forEach(async el => {
            
            const playerData = new PlayerData({
                name: el.NAME,
                champion: el.SKIN,
                kils: el.CHAMPIONS_KILLED,
                assists: el.ASSISTS,
                deaths: el.NUM_DEATHS,
            })

            await playerData.save()
        })
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

    async AllTotalPlayerStats(){
        const playerStats = await PlayerData.find()

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