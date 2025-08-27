const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/itemModel')

exports.signup = async (req,res) =>{
    try{
        const {name, email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)
        console.log({name, email, password});
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        })
        console.log("im crteated user");  
        res.status(201).json({ message: "User crated successfully", user: newUser})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}
exports.signin = async (req,res) =>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({ email })
        if (!user){
            return res.status(400).json({ message:"Invalid User or Password e"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch){
            return res.status(400).json({ message:"Invalid User or Password p"})
        }

        const token = jwt.sign(
            {id: user._id, email: user.email},
            "secretkey",
            {expiresIn: "1h"}
        );
        res.status(201).json({ message: "Login successfully", token})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

exports.home = async (req,res) =>{
    res.json({message:"Welcome to home"})
}