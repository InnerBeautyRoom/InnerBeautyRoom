import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
mongoose.connect(process.env.MONGO_URI!)
const PORT = process.env.PORT || 3010
const app = express();
app.use(express.json());

app.listen(PORT, () => {
    console.log(PORT)
});