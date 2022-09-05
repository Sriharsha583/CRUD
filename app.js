const express=require('express')

const mongoose=require('mongoose')

const app=express()
const url='mongodb://localhost/studentDB'
mongoose.connect(url)


const con=mongoose.connection

con.on('open',()=>{
    console.log("connected to database")
})
app.use(express.json())
const stuRouter=require('./routes/student')
app.use('/stud',stuRouter)


app.listen(8080,(req,res)=>{
    console.log("server started")
    

})