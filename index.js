const app = require('express')()
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

mongoose.connect(process.env.URI)
.then(res=>{
    console.log("Connected to MongoDB Server")
})
.catch(err=>{
    console.log(err)
})

app.use(bodyParser.urlencoded())

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(process.env.PORT,()=>{
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})