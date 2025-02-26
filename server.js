import express from "express"
const app= express()
const PORT =  process.env.PORT || 8000


// Connect DB
import { conMongoDb } from "./config/mongodbConfig.js"
conMongoDb()


// Middlewares
app.use(express.json())

// API Endpoints
import userRouter from "./routers/userRouter.js"
app.use("/api/v1/users", userRouter)

app.get("/", (req, res) => {
    res.json({
        message: "It's Live",
    })
})

app.listen(PORT, (error) => {
    error
    ? console.log(error)
    : console.log(`Server is running at 
        http://localhost:${PORT}`)
})