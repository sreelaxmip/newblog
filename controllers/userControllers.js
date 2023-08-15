const mongoose=require('mongoose')
const USER=require('../models/userModel').users


const loginPage=((req,res)=>{
    res.render('login.hbs')
})
const showSignup=((req,res)=>{
    res.render('signup.hbs')
})


const doSignUp=(req,res)=>{
    res.send("hi here user3")
    USER({email:req.body.email,name:req.body.name,password:req.body.password})
    .save().then(res)=>{
        
    }
}
module.exports={doSignUp,loginPage,showSignup}