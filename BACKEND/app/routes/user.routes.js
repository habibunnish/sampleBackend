module.exports=app=>{
    const user=require("../controllers/user.controller.js");
    var router=require("express").Router();

    router.post("/",user.addNewUserRegisterDetails);
    router.get("/",user.userRegisterDetails);
    

    app.use('/api/user',router);
}