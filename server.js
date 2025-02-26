import express from "express"
const app= express()
const PORT =  process.env.PORT || 8000

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