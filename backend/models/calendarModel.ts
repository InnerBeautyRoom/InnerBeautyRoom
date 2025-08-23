import mongoose from 'mongoose'

const calendarSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    service: {type: String, required: true}
})