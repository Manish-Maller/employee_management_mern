const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const connectDB = require('./config/connectDb');
const dotenv =require('dotenv').config();
const cors = require('cors');
const app =express()
const port = process.env.PORT ?process.env.PORT:5507

connectDB()
app.use(cors())

// Custom Cors
// app.use(cors({
//     origin:"http://localhost:3000",
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type']
// }))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/api", require('./routes/booksRoutes'))
// app.use("api/books", require('./routes/booksRoutes'));
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`Server is Running Fine on ${port}`)
})