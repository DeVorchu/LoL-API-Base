import MatchDataModel from '../db/models/matchData.js'

class MatchData {   
    
  
    async GetAllData(req, res){
        const matches = await MatchDataModel.find()
        res.json({matches})
    }

    async GetDataById(req, res){}
    async GetDataByUserId(req, res){}
    async GetDatabyTeamId(req, res){}

    async addData(req, res){
        const match = new MatchDataModel({
            date: new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(),
            matchData: req.body.matchData
        });

        console.log(req.body);

        try {
            await match.save()
            res.status(201).json(match)

        } catch (e) {
            console.log(e); 
        }
    }

     
  
}




export default new MatchData();