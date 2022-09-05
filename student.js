const express=require('express')

const router=new express.Router()
const student1=require('../models/student')

router.get('/',async(req,res)=>{
    try{
        const s1=await student1.find()
        res.json(s1)
    }catch(err){
        res.send('error'+err)

    }
})


router.post('/',async(req,res)=>{
    const Student1=new student1({
        rollno:req.body.rollno,
        name:req.body.name,
        scholarship:req.body.scholarship
    })
    try{
        const s2=await Student1.save()
        res.json()
        
1
    }catch(err){
        res.send('error'+err)
    }

})
module.exports=router