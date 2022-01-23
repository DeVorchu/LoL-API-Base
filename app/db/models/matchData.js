import mongoose from 'mongoose';
const { Schema } = mongoose;


const matchDataSchema = new Schema({
    date: {
        type: String
    },
    matchData: {
        type: Object
    }
})

export default mongoose.model('MatchData', matchDataSchema)
