module.exports=mongoose=>{
    const User=mongoose.model(
        "user",
        mongoose.Schema(
            {
            firstname:String, 
            lastname:String,
            street: String,
            city:String,
            state:String ,
            zipcode:Number,
            email: String,
        },
        {timestamps:true}
        )
    );
    return User;
}