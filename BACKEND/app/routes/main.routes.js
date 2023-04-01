module.exports=app=>{
    const main=require("../controllers/mainPage.controller.js");
    var router=require("express").Router();

    router.post("/",main.main);
    router.get("/",main.mainPage);
    router.get("/",main.mainpageGoa);
    router.get("/",main.bangaluru);
    router.get("/",main.jammu);
    app.use("/api/main",router);
}