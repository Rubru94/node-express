import mongoose, { Connection } from "mongoose";
import { config } from "dotenv"; config();

mongoose.connect(`mongodb://localhost:27017/${process.env.MONGO_DB}`);
const db: Connection = mongoose.connection;
db.on('error', err => {
    console.error(err);
});
db.once('open', () => {
    console.log('Db is connected');
});