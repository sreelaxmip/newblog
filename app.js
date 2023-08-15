const express=require('express')
const app=express()
const path=require('path')
const hbs =require('hbs')
const user=require('./routes/user')
const admin=require('./routes/admin')
const connectDB=require('./config/dbConfig')
connectDB()
app.set('view-setEngine','hbs')
app.set("views",path.join(__dirname,'pages'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))

app.use('/',user)
app.use('/admin',admin)

// app.get('/',(req,res)=>{
//     res.send("hai")})

app.listen(8000)
