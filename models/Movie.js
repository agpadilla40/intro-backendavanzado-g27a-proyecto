import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    title: String,
    director: String,
    launchingYear: Number,
    score: Number,
    duration: String,
    genre: String,
    isDeleted: { 
        type: Boolean, 
        default: false
     },
});

export default mongoose.model('Movie', movieSchema);