const express = require('express')

const bodyParser = require("body-parser");
const cors = require("cors");

const apiRoutes = require('./router')
const app = express()

app.use(bodyParser.json()); // read json body

app.use(cors({
    origin: ["http://localhost:3000", "https://localhost:5500"],
    credentials: true, // necessary for cookies, authorization headers, etc.
  }))
  
app.get('/',(req,res)=>{
    res.json({message:'Sever is running at port 8080'})
})

// use our router
app.use('/api',apiRoutes)

app.use('*',(req, res)=>{
    res.status(404).json({message: 'Routing not found '})  
  })

app.listen(8080, () => console.log('Server is running at port 8080'))