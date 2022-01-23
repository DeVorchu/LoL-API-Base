import playerData from "../db/models/playerData.js"

 
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
        console.log('POBRANO STATYSTYKI GRACZA PO NAME' + playerName);    
        return playerData.find({ name: playerName })
        
    }
}

export default MongooseRepo  