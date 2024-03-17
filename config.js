import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connect = () => {
    mongoose.connect(process.env.DB_URI);

    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log('Database connected successfully');    
    });

    connection.once('error', () => {
        console.error('error connecting to database');
    });
};


export { connect };