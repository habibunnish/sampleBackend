const db=require("../models");
const User=db.user;

exports.addNewUserRegisterDetails=(req,res)=>{
    console.log("reg");
    const user=new User({
        firstname:req.body.firstname, 
        lastname: req.body.lastname,
        street:req.body.street ,
        city: req.body.city,
        state:req.body.state ,
        zipcode:req.body.zipcode ,
        email: req.body.email,
        password:req.body.password
    });
    user.save(user)
    .then((data)=>{
        console.log(data);
        res.send(data);
            console.log("data added to databse");
    })
    .catch((err)=>{
        res.status(500).send({
            message:err.message || "some error occured while creating the userDetails",
        });
    });
};
exports.userRegisterDetails=(req,res)=>{
    User.find()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).sent({
            message: err.message || "some error occured while retriving userDetails"
        });
    });
    
};
