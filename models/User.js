import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    dni: String,
    name: String,
    lastName: String,
    birthDate: Date,
    phone: String,
    username: { 
        type: String, 
        required: true,
        unique: true, 
    },
    password:{ 
        type: String,
        required: true,    
    },
    email: {
         type: String,
         required: true,
         unique: true 
    },
    rol: {
        type: String,
        required: true,
        enum: ['ADMIN', 'CLIENT', 'EMPLOYEE'],
        default: 'CLIENT',    
    },
    isDeleted: { 
        type: Boolean, 
        default: false
    },
});

export default  mongoose.model('User', userSchema);