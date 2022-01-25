import mongoose from 'mongoose';
const { Schema } = mongoose;


const matchDataSchema = new Schema({
    date: {
        type: String
    },
    matchData: {
        type: Object
    }, 
    team100Name: {
        type: String
    },
    team200Name: {
        type: String
    },
    leagueName: {
        type: String
    }

    // date:{
    //     type: String
    // },
    // team100:{
    //     type: Object
    // },
    // team200:{
    //     type: Object
    // }
})

export default mongoose.model('MatchData', matchDataSchema)
