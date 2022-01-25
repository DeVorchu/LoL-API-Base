import _usecaseMatchStats from '../_matches/usecases/matchsStats.js'

class MatchData {   

    async AddData(req, res){
        const stats = new _usecaseMatchStats()
        const ree = stats.SaveMatchStats(req.body)
        res.json({status: ree})
    };

    async GetAllData(req, res){
        const stats = new _usecaseMatchStats()
        let matches = await stats.GetAllMatchsData()
        res.json({ matches})
    }

}




export default new MatchData();