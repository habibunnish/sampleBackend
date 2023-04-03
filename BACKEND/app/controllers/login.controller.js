const db=require("../models");
const LoginData=db.logindata;

exports.loginvalues=(req,res)=>{
    const logindata=new LoginData({
        email:"Admin123@gmail.com",
        password:"admin@123"
    });
    logindata
        .save(logindata)
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
exports.getgetUserLogin=(req,res)=>{
    LoginData.find()
    .then((data)=>{
        console.log(data);
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).sent({
            message: err.message || "some error occured while retriving userDetails"
        })
    });
};
exports.adminLoginDetailsGet=(req,res)=>{
    LoginData.find()
    .then((data)=>{
        console.log(data);
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).sent({
            message: err.message || "some error occured while retriving userDetails"
        })
    });
};