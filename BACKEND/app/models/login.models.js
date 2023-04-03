module.exports=mongoose=>{
    const Login=mongoose.model(
        "login",
        mongoose.Schema({
            email:
            {
                type:String
            },
            password:
            {
                type:String
            }
        },
        { timestamps:true }
        )
    )
    return Login
}