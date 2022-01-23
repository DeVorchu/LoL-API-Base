import PlayerData from "../db/models/playerData.js"
import MongooseRepo from './mongoseRepo.js'


class Repo{

    async SaveReplayData(data){
        const mongooseRepo = new MongooseRepo()

        const playerData = new PlayerData({
            name: data.NAME,
            champion: data.SKIN,
            kills: data.CHAMPIONS_KILLED,
            assists: data.ASSISTS,
            deaths: data.NUM_DEATHS,
            gold: data.GOLD_EARNED,
            creepScore: data.MINIONS_KILLED,
            visionScore: data.VISION_SCORE ,
            placedWards: data.WARD_PLACED,
            placedControlWards: data.WARD_PLACED_DETECTOR,
            drakes: data.DRAGON_KILLS,
            barons: data.BARON_KILLS,
            towers: data.TURRETS_KILLED,
            killedWards: data.WARD_KILLED,
            dbKills: data.DOUBLE_KILLS,
            trKills: data.TRIPLE_KILLS,
            qdKills: data.QUADRA_KILLS,
            ptKills: data.PENTA_KILLS, 
            experience: data.EXP,
            qSpdatal: data.SPdataL1_CAST, 
            wSpdatal: data.SPdataL2_CAST,
            eSpdatal: data.SPdataL3_CAST,
            rSpdatal: data.SPdataL4_CAST,
        })
 
        await mongooseRepo.SavePlayerData(playerData)  
    }

    async GetAllPlayersyData(){
        const mongooseRepo = new MongooseRepo()
        return await mongooseRepo.GetAllPlayerData()  
    }

    async GetAllPlayersyDataByName(name){
        const mongooseRepo = new MongooseRepo()
        return await mongooseRepo.GetAllPlayerDataByName(name)  
    }
}

export default Repo  