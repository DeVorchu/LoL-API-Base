import playerData from "../db/models/playerData.js"
import matchData from '../db/models/matchData.js'
import teamData from '../db/models/teamData.js'

 
class MongooseRepo{

    async SavePlayerData(playerData){
        console.log('DODANO STATYSTYKI GRACZA');  
        let res = await playerData.save()  
    } 

    

    async GetAllPlayerData(){
        console.log('POBRANO STATYSTYKI GRACZA');  
        return playerData.find() 
    }

    async GetAllPlayerDataByName(playerName){
        console.log('POBRANO STATYSTYKI GRACZA PO NAME ' + playerName);    
        return playerData.find({ name: playerName })
        
    }

    async SaveMatchData(matchData){
        console.log('DODANO STATYSTYKI MECZU');  
        let res = await matchData.save()  
    } 
   

    async GetAllMatchsData(){
        console.log('POBRANO STATYSTYKI MECZU');  
        return matchData.find() 
    }

    async SaveTeamData(teamData){
        console.log('DODANO STATYSTYKI TEAMU');  
        await teamData.save()  
    } 


    async GetAllTeams(){
        console.log('POBRANO STATYSTYKI TEAMÓW');  
        return teamData.find() 
    }

    async GetTeamByName(teamName){
        console.log('POBRANO STATYSTYKI TEAMU PO NAME' + teamName);    
        return teamData.find({ name: teamName })
        
    }
}

export default MongooseRepo  