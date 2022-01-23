import mongoose from 'mongoose';
const { Schema } = mongoose;


const playerDataSchema = new Schema({
    name: {
        type: String
    },
    champion: {
        type: String
    },
    kils: {
        type: Number
    },
    assists: {
        type: Number
    },
    deaths: {
        type: Number
    },
})

export default mongoose.model('PlayerData', playerDataSchema)
