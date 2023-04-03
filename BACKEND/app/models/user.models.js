module.exports=mongoose=>{
    const User=mongoose.model(
        "user",
        mongoose.Schema(
            {
            firstname:
             {
               type:String, 
              },

            lastname:
            {
                type:String
            },
            street: 
            {
                type:String
            },
            city:
            {
                type:String
            },
            state:
            {
                type:String
             } ,
            zipcode:
            {
                type:Number
            },
            email: 
            {
                type:String
            },
            password:
            {
                type:String
            }
        },
        {timestamps:true}
       )
    )
    return User
}