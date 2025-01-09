import express from 'express'


const app = express();
const port = 300;


app.get("/", (req,res) => {
    res.send("Hello from my side!!")
})

app.get("/ice-tea", (req,res) => {
    res.send("Give me ice tea")
})


app.get("/twitter", (req,res) => {
    res.send("Here is my twitter")
})


app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
}) 