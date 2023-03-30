module.exports=mongoose=>{
    const Cart=mongoose.model(
        "cart",
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
    return Cart
};