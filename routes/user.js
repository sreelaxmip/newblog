const express=require('express')
const { doSignUp,loginPage,showSignup } = require('../controllers/userControllers')
const router=express.Router()


router.get('/',loginPage)
router.get('/signup',showSignup)

module.exports=router