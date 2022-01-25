import mongoose from 'mongoose';
const { Schema } = mongoose;


const teamDataSchema = new Schema({
    name: {
        type: String
    },
    playersNames: {
        type: Array
    }, 
    avatarLink: {
        type: String
    }

})

export default mongoose.model('TeamData', teamDataSchema)
