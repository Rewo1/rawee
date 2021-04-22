const User=require('../model/userModel')


exports.postUser = (req,res) => {
    let user =new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password

    })
    user.save((error,users)=>{
        if(!users || error){
            return res.status(400).json({error:"unable to create an account"})
        }
        res.json({users})
    })
}