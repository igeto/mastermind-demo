import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const dbUri = process.env.DB_URI;
const connectToDatabase = async () => {
    console.log(dbUri)
    try {
        const db = dbUri || 'mongodb://root:example@localhost:27017/mastermind-demo-mongodb-1?authSource=admin' ;
        await mongoose.connect(db);
        console.log('Connected to the database successfully');
    } catch (error) {
        console.error('Could not connect to the database', error);
        process.exit(1);
    }
};

export const disconnectFromDatabase = async () => {
    try {
        await mongoose.disconnect();
        console.log('Disconnected from the database');
    } catch (error) {
        console.error('Error disconnecting from the database', error);
    }
};

export default connectToDatabase;
