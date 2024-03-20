import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    customer: String,
    title: String,
    ticketQuantity: Number,
    unitPrice: Number,
    totalPrice: Number,
    showTime: Date,
    seat: String,
    purchaseDate: Date,
    isDeleted: { 
        type: Boolean, 
        default: false
     },
});

/* ticketSchema.methods.isCorrectPrice = function (price) {
    return price === this.price;
} */

export default mongoose.model('Ticket', ticketSchema);