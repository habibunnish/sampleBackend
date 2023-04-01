const db=require("../models");
const LoginData=db.logindata;

exports.loginvalues=(req,res)=>{
    const logindata=new LoginData({
        email:req.body.email,
        password:req.body.password
    });
    logindata
        .save(logindata)
        .then((data)=>{
            res.send(data);
                console.log("data added to databse");
        })
        .catch((err)=>{
            res.status(500).send({
                message:err.message || "some error occured while creating the userDetails",
            });
        });
};
exports.getgetUserLogin=(req,res)=>{
    LoginData.find()
    .then((data)=>{
        res.send(data);
    })
    .catch((Err)=>{
        res.status(500).sent({
            message: err.message || "some error occured while retriving userDetails"
        })
    })
};
exports.adminLoginDetailsGet=(req,res)=>{
    LoginData.find()
    .then((data)=>{
        res.send(data);
    })
    .catch((Err)=>{
        res.status(500).sent({
            message: err.message || "some error occured while retriving userDetails"
        })
    })
};