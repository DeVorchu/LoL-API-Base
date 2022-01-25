import Statistics from '../../utils/_statistic.js'
import Repo from '../../repositories/repo.js'
import PlayerStats from '../DTOs/statsDataDto.js'
import StatsQue from '../DTOs/statsQue.js'
import e from 'express'


class StatsData {   

    


    async GetAllPlayerDataToTotalByName(name){

        const repo = new Repo()   
        let ree = await repo.GetAllPlayersyDataByName(name)

        


        let playerStats = new PlayerStats()

        ree.forEach(el=> {        
        playerStats.kills += el.kills
        playerStats.assists += el.assists
        playerStats.deaths += el.deaths
        playerStats.championQue.push(el.champion)        
        playerStats.creepScore += el.creepScore
        playerStats.gold += el.gold
        playerStats.visionScore += el.visionScore
        playerStats.placedWards += el.placedWards
        playerStats.placedControlWards += el.placedControlWards
        playerStats.drakes += el.drakes
        playerStats.barons += el.barons
        playerStats.towers += el.towers
        playerStats.killedWards += el.killedWards
        playerStats.dbKills += el.dbKills
        playerStats.trKills += el.trKills
        playerStats.qdKills += el.qdKills
        playerStats.ptKills += el.ptKills
        playerStats.experience += el.experience
        playerStats.qSpell += el.qSpell
        playerStats.wSpell += el.wSpell
        playerStats.eSpell += el.eSpell
        playerStats.rSpell += el.rSpell
        });

        const statHeleper = new Statistics()


        playerStats.name = name,
        playerStats.gamesPlayed = ree.length
        playerStats.championTopPick = statHeleper.getMostFrequentItemFromArray(playerStats.championQue),
        playerStats.creepScorePerGame = playerStats.creepScore / playerStats.gamesPlayed
        playerStats.visionScorePerGame = playerStats.visionScore / playerStats.gamesPlayed


        return { playerStats}
    }

    
    async GetAllPlayerDataToTotal(){

  
        let arrOfStats = []

        const repo = new Repo()   

        let ree = await repo.GetAllPlayersyData()

        
        
        
        ree.forEach(elem => {            
            let found = false;

            for (const el of arrOfStats) {
    
                if (el.name === elem.name) {                        
                    el.matches.push(elem)    
                    found = true  
                    break
                } 
                
            }

            if (!found) {
                let statsQuev = new StatsQue()
                statsQuev.name = elem.name
                statsQuev.matches = [elem]
                arrOfStats.push(statsQuev)
            }                 
            
        })

        console.log(arrOfStats);
    }
            
           
}


export default StatsData;