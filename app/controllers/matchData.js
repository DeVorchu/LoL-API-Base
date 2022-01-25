import MatchDataModel from '../db/models/matchData.js'
import _usecaseMatchStats from '../_matches/usecases/matchsStats.js'

class MatchData {   

    async AddData(req, res){
        const stats = new _usecaseMatchStats()
        const ree = stats.SaveMatchStats(req.body)
        res.json({status: ree})
    };

}




export default new MatchData();