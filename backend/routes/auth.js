const router = require('express').Router();
const UserModel = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {
    registerValidation,
    loginValidation

} = require('../validation');



router.post('/register',async (req,res)=>{

    // //validate the date before making a user
    const {error} = registerValidation(req.body);
    if(error)
    {
        return res.send(error.details[0].message)
    }
    //check if the user is already in the db
    const emailExists = await UserModel.findOne({email:req.body.email})
    if(emailExists)
    {
        return res.status(400).send("email already exists")
    }

    //hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);    


    //making a new user
    const user = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    })
    
    try{
        const savedUser =  await user.save();
        res.json({user: user._id});
    }catch(err)
    {
        res.status(400).send(err)
    }
})

router.post('/login',async (req,res)=>{
    //validate user data
    const {error} = loginValidation(req.body);
    if(error)
    {
        return res.status(400).send(error.details[0].message)
    }
    //check if the email exists
    //.findOne intoarce boolean in functie de rezultatul cautarii
    const user = await UserModel.findOne({email:req.body.email})
    if(!user) return res.status(400).send("Email does not exists in db!")
    
    //Password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(400).send("Invalid Password!")


    //Create and  assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token);
})
module.exports = router;
