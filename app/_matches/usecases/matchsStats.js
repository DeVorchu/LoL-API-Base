
import Repo from '../../repositories/repo.js'


class MatchStats {   

    async SaveMatchStats(payload){
        const repo = new Repo()  
        await repo.SaveMatchData(payload) 
        
    }

    async GetAllMatchsData(){
        const repo = new Repo()  
        return await repo.GetAllMatchsData() 
        
    }
}

export default MatchStats;