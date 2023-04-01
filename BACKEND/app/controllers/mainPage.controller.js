const db=require("../models");
const mainPage=db.mainpage;

exports.main=(req,res)=>{
    const main=new mainPage({
        tittle:req.body.tittle,
        image:req.body.image,
        para:req.body.para
    });
    main    
        .save(main)
        .then((data)=>{
            res.send(data);
            console.log("data added to databse successfull");
        })
        .catch((err)=>{
            res.status(500).send({
                message:
                     err.message || "some error occured while saving data"
            });
        });
};
exports.mainPage=(req,res)=>{
    Cart.find()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send({
            message:
            err.message || "some error occured while retriving product"
        });
    });
};
exports. mainpageGoa=(req,res)=>{
    Cart.find()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send({
            message:
            err.message || "some error occured while retriving product"
        });
    });
};

exports.bangaluru=(req,res)=>{
    Cart.find()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send({
            message:
            err.message || "some error occured while retriving product"
        });
    });
};
exports.jammu=(req,res)=>{
    Cart.find()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send({
            message:
            err.message || "some error occured while retriving product"
        });
    });
};