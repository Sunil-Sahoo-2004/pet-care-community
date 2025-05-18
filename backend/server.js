import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import petRouter from "./routes/pet.Route.js"
import dotenv from 'dotenv'
import userRouter from "./routes/user.Route.js"
import cookieParser from "cookie-parser"

// dotenv config
dotenv.config()

// app config
const app = express()
const port = process.env.PORT || 5000


// middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())

// db connection
connectDB();

//api endpoints
app.use("/api/user", userRouter)
app.use("/api/pet", petRouter)
app.use("/images", express.static('uploads'))

app.get("/", (req, res) => {
    res.send("API Working.....")
})

app.listen(port, () => {
    console.log(`Server Started  on http://localhost:${port}`);
})