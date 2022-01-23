import mongoose from 'mongoose'

export default mongoose.connect(process.env.DB_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,   },() => console.log('connected to mongo'));
