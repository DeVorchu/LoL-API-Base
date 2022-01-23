import mongoose from 'mongoose';
const { Schema } = mongoose;


const playerDataSchema = new Schema({
    name: {
        type: String
    },
    champion: {
        type: String
    },
    kills: {
        type: Number
    },
    assists: {
        type: Number
    },
    deaths: {
        type: Number
    },
    gold: {
        type: Number
    },
    creepScore: {
        type: Number
    },
    visionScore: {
        type: Number
    },
    placedWards: {
        type: Number
    },
    placedControlWards: {
        type: Number
    },
    drakes: {
        type: Number
    },
    barons: {
        type: Number
    },
    towers: {
        type: Number
    },
    killedWards: {
        type: Number
    },
    dbKills: {
        type: Number
    },
    trKills: {
        type: Number
    },
    qdKills: {
        type: Number
    },
    ptKills: {
        type: Number
    },
    experience: {
        type: Number
    },
    qSpell: {
        type: Number
    },
    wSpell: {
        type: Number
    },
    eSpell: {
        type: Number
    },
    rSpell: {
        type: Number
    }
})

export default mongoose.model('PlayerData', playerDataSchema)
