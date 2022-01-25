import PlayerData from "../db/models/playerData.js"
import MatchData from '../db/models/matchData.js'
import TeamData from '../db/models/teamData.js'
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
            qSpell: data.SPELL1_CAST, 
            wSpell: data.SPELL2_CAST,
            eSpell: data.SPELL3_CAST,
            rSpell: data.SPELL4_CAST,
        })
 
        await mongooseRepo.SavePlayerData(playerData)  
    }

    async SaveMatchData(data){
        const mongooseRepo = new MongooseRepo()

        const matchData = new MatchData({
            date: data.leagueName ,            
            matchData: data.matchData.statsJson,
            team100Name: data.team100Name,
            team200Name: data.team200Name,
            leagueName: data.leagueName
            
        })

        console.log(data.team100Name);

 
        await mongooseRepo.SaveMatchData(matchData)  
    }


    async SaveTeamData(data){
        const mongooseRepo = new MongooseRepo()

        console.log(data);

        const teamData = new TeamData({
            name: data.teamName,
            playersNames: data.players,
            avatarLink: data.teamAvatar
            
        })
 
        await mongooseRepo.SaveTeamData(teamData)  
    }

    



    async GetAllMatchsData(){
        const mongooseRepo = new MongooseRepo()
        return await mongooseRepo.GetAllMatchsData()  
    }

    async GetAllPlayersyData(){
        const mongooseRepo = new MongooseRepo()
        return await mongooseRepo.GetAllPlayerData()  
    }

    async GetAllPlayersyDataByName(name){
        const mongooseRepo = new MongooseRepo()
        return await mongooseRepo.GetAllPlayerDataByName(name)  
    }




    async GetAllTeams(){
        const mongooseRepo = new MongooseRepo()
        return await mongooseRepo.GetAllTeams()  
    }

    async GetTeamByName(name){
        const mongooseRepo = new MongooseRepo()
        return await mongooseRepo.GetTeamByName(name)  
    }
}

export default Repo  