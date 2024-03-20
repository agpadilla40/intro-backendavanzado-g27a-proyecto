import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    dni: String,
    name: String,
    lastName: String,
    birthDate: Date,
    rol: String,
    phone: String,
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
    isDeleted: { 
        type: Boolean, 
        default: false
     },
});


export default  mongoose.model('User', userSchema);