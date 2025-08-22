const mongoose = require('mongoose')

const itemSchema  = new mongoose.Schema(
    {
        name:{
            type: String,
            required:[true,"Name is required"],
            minlength:[2,"Name must be at least 2 characters long"] 
        },
        email:{
            type:String,
            required: [true, 'Email is required'],
            unique: true,
            match:[/^\S+@\S+\.\S+$/, 'Please use a valid email address']
        },
        password:{
            type:String,
            required:[true,'Password is required'],
            minlength:[8,"Password must be atleast 8 character"]
        }
        
    }
)

module.exports = mongoose.model('Item', itemSchema)