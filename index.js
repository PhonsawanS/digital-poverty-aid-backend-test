const express = require('express')

const bodyParser = require("body-parser");
const cors = require("cors");

const apiRoutes = require('./router')
const app = express()


// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json()); // read json body

app.use(cors({
  origin: '*',  // อนุญาตทุกโดเมน
  credentials: true, // ถ้าต้องการรองรับ cookies หรือ headers ที่เกี่ยวข้อง
}))

//กลับมาเปิดด้วย !!!
// app.use(cors({
//     origin: ["http://localhost:3000", "https://localhost:5500", "http://localhost:5173","https://4nr68llx-5173.asse.devtunnels.ms/"],
//     credentials: true, // necessary for cookies, authorization headers, etc.
//   }))
  
app.get('/',(req,res)=>{
    res.json({message:'Sever is running at port 8080'})
})

// use our router
app.use('/api',apiRoutes)

app.use('*',(req, res)=>{
    res.status(404).json({message: 'Routing not found '})  
  })

app.listen(8080, () => console.log('Server is running at port 8080'))