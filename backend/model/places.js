const mongoose = require('mongoose')
const Schema = mongoose.Schema

const place = new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    address:{type:String, required:true},
    user:{type:Schema.Types.ObjectId, required:true, ref:'User'}
    

})

module.exports = mongoose.model('Place', place)