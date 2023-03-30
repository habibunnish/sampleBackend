module.exports=mongoose=>{
    const Product=mongoose.model(
        "product",
        mongoose.Schema(
            {
                tittle:String,
                area:String,
                image:String,
                location:String,
                show:Boolean,
            },
            {timestamps:true}
        )
    )
    return Product
};