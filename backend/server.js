import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import petRouter from "./routes/pet.Route.js"
import dotenv from 'dotenv'

// dotenv config
dotenv.config()

// app config
const app = express()
const port = process.env.PORT || 5000


// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

//api endpoints
app.use("/api/pet", petRouter)
app.use("/images", express.static('uploads'))

app.get("/", (req, res) => {
    res.send("API Working.....")
})

app.listen(port, () => {
    console.log(`Server Started  on http://localhost:${port}`);
})