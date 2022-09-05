const mongoose=require('mongoose')
const stuschema=mongoose.Schema({
    rollno:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    scholarship:{
        type:String,
        required:true,
        default:false
    }

})
module.exports=mongoose.model('student1',stuschema)