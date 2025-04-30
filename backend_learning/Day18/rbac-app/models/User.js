const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , 'please provide name'] 
        
    },
    email :{
        type : String,
        required : [ true , 'please provide email']
    }, 
    password : {
        type : String , 
        required : [true , 'please provide password'],
        unique : true 
    }, 
    role : {
        type : String, 
        enum: [ 'user' , 'admin'],
        default : 'user'
    }
})


module.exports = mongoose.model('User' , userSchema);