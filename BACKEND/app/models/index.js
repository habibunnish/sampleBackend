const dbConfig=require("../config/db.config.js");
const mongoose=require("mongoose");
mongoose.Promise=global.Promise;

const db={};
db.mongoose=mongoose;
db.url=dbConfig.url;
db.product=require("./product.models.js")(mongoose);
db.user=require("./user.models.js")(mongoose);
db.cart=require("./cart.models.js")(mongoose);

module.exports=db;