import PlayerData from "../db/models/playerData.js";


class PlayersStats {   
    
    SavePlayerStats(payload){
        console.log(payload);
        payload.statsJson.forEach(async el => {
            
            const playerData = new PlayerData({
                name: el.NAME,
                champion: el.SKIN,
                kills: el.CHAMPIONS_KILLED,
                assists: el.ASSISTS,
                deaths: el.NUM_DEATHS,
                gold: el.GOLD_EARNED,
                creepScore: el.MINIONS_KILLED,
                visionScore: el.VISION_SCORE ,
                placedWards: el.WARD_PLACED,
                placedControlWards: el.WARD_PLACED_DETECTOR,
                drakes: el.DRAGON_KILLS,
                barons: el.BARON_KILLS,
                towers: el.TURRETS_KILLED,
                killedWards: el.WARD_KILLED,
                dbKills: el.DOUBLE_KILLS,
                trKills: el.TRIPLE_KILLS,
                qdKills: el.QUADRA_KILLS,
                ptKills: el.PENTA_KILLS, 
                experience: el.EXP,
                qSpell: el.SPELL1_CAST,
                wSpell: el.SPELL2_CAST,
                eSpell: el.SPELL3_CAST,
                rSpell: el.SPELL4_CAST,
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



  


        
}

export default PlayersStats;