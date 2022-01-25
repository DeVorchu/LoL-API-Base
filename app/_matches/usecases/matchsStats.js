
import Repo from '../../repositories/repo.js'


class MatchStats {   

    async SaveMatchStats(payload){
        const repo = new Repo()  
        await repo.SaveMatchData(payload) 
        
    }
}

export default MatchStats;