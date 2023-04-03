const express=require("express");
const cors=require("cors");
const app=express();

app.use(cors({
    origin:"http://localhost:4200",
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.json({message:"welcome to room booking site"});
});
const db=require("./app/models");
db.mongoose
    .connect(db.url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

    .then(()=>{
        console.log("connected to databse!");
    })
    .catch(err=>{
        console.log("cannot connect to databse",err);
        process.exit()
    });

require("./app/routes/user.routes")(app);
require("./app/routes/product.routes")(app);
require("./app/routes/cart.routes")(app);
require("./app/routes/userBookedDetails")(app);
require("./app/routes/login.routes")(app);
require("./app/routes/main.routes")(app);
require("./app/routes/city.routes")(app);

app.use("/api/token",require("./routes/tokenRoutes"));

const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    
    console.log(`server is running on http://localhost:${PORT}`);
})