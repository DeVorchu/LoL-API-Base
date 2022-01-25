
import Repo from '../../repositories/repo.js'


class MatchStats {   

    async SaveTeam(payload){
        console.log(payload);
        const repo = new Repo()  
        await repo.SaveTeamData(payload) 
        
        
    }



    async GetTeamByName(name){
        const repo = new Repo()  
        return await repo.GetTeamByName(name) 
        
    }
    async GetAllTeams(){
        const repo = new Repo()  
        return await repo.GetAllTeams() 
        
    }
}

export default MatchStats;