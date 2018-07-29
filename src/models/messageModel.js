import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MessageSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String,
        required: 'Enter a email address'
    },
    company: {
        type: String,
        required: 'Enter a company name'
    },
    phone: {
        type: Number
        required: 'Enter a phone number'
    },
    message: {
        type: String,
        required: 'Enter a message'   
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
});
