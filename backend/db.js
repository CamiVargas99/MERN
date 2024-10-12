// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mern_music_app', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1); // Termina el proceso si no se puede conectar
    }
};

module.exports = connectDB;
