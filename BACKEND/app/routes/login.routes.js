module.exports=app=>{
    const login=require("../controllers/login.controller.js");
    var router=require("express").Router();

    router.post("/",login.loginvalues);
    router.get("/",login.getgetUserLogin);
    router.get("/",login.adminLoginDetailsGet);
    app.use("/api/login",router);
}