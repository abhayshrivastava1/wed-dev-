import express from 'express'


const app = express();
const port = 300;


app.get("/", (req,res) => {
    res.send("Hello from my side!!")
})



app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})