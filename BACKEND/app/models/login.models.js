module.exports=mongoose=>{
    const Login=mongoose.model(
        "login",
        mongoose.Schema({
            email:String,
            password:String
        },
        {
            timestamps:true
        }
        )
    )
    return Login
}