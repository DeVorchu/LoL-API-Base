import PlayerDataModel from "../db/models/playerData.js";
import _usecasesTeams from '../_teams/usecases/teamStats.js'

class TeamData {   
    
  
    

    async GetTeamByName(req, res){
        const stats = new _usecasesTeams()
        let ree = await stats.GetTeamByName(req.params.name)  
        res.json({ree})
    }

    async GetAllTeams(req, res){
        const stats = new _usecasesTeams()
        let ree = await stats.GetAllTeams()  
        res.json({ree})
    }

    

    async AddData(req, res){
        const stats = new _usecasesTeams()
        const ree = stats.SaveTeam(req.body)
        console.log(req.body.team100Name);
        res.json({status: ree})  
    };



  
}




export default new TeamData();